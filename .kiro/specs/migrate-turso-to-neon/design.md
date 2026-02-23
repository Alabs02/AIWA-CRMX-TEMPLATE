# Design Document: Migrate Turso to Neon

## Overview

This design outlines the technical approach for migrating the database infrastructure from Turso (LibSQL/SQLite dialect) to Neon (PostgreSQL). The migration involves replacing database client dependencies, updating configuration files, converting schema definitions from SQLite to PostgreSQL dialect, and ensuring all existing functionality remains intact.

The migration is primarily a configuration and dependency change rather than a data migration, as this appears to be a template/starter project. The key challenge is ensuring dialect compatibility between SQLite and PostgreSQL while maintaining the same application interface.

### Goals

- Replace Turso-specific dependencies with Neon PostgreSQL equivalents
- Convert database schema from SQLite dialect to PostgreSQL dialect
- Update all configuration files to use PostgreSQL connection strings
- Maintain backward compatibility with existing application code
- Ensure migration tooling works correctly with PostgreSQL

### Non-Goals

- Data migration from existing Turso databases (this is a template migration)
- Performance optimization specific to PostgreSQL
- Adding new database features or schema changes
- Modifying application business logic

## Architecture

### Current Architecture (Turso/LibSQL)

```
┌─────────────────────────────────────────────────────────────┐
│                     Application Layer                        │
│                  (Next.js API Routes, etc.)                  │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database Client Layer                     │
│                   (src/lib/db/client.ts)                     │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  drizzle(client, { schema })                          │  │
│  │  - Uses drizzle-orm/libsql                            │  │
│  │  - Wraps @libsql/client                               │  │
│  └──────────────────────────────────────────────────────┘  │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Turso Database (LibSQL)                    │
│                    SQLite-compatible                         │
│                                                               │
│  Connection: TURSO_DATABASE_URL + TURSO_AUTH_TOKEN          │
└─────────────────────────────────────────────────────────────┘
```

### Target Architecture (Neon/PostgreSQL)

```
┌─────────────────────────────────────────────────────────────┐
│                     Application Layer                        │
│                  (Next.js API Routes, etc.)                  │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database Client Layer                     │
│                   (src/lib/db/client.ts)                     │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  drizzle(client, { schema })                          │  │
│  │  - Uses drizzle-orm/neon-serverless                   │  │
│  │  - Wraps @neondatabase/serverless                     │  │
│  └──────────────────────────────────────────────────────┘  │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                 Neon Database (PostgreSQL)                   │
│                    PostgreSQL-compatible                     │
│                                                               │
│  Connection: DATABASE_URL (PostgreSQL connection string)     │
└─────────────────────────────────────────────────────────────┘
```

### Key Architectural Changes

1. **Driver Layer**: Replace `@libsql/client` with `@neondatabase/serverless`
2. **ORM Adapter**: Switch from `drizzle-orm/libsql` to `drizzle-orm/neon-serverless`
3. **Schema Definitions**: Migrate from `drizzle-orm/sqlite-core` to `drizzle-orm/pg-core`
4. **Authentication**: Replace dual-credential system (URL + token) with single connection string
5. **Dialect**: Change Drizzle Kit configuration from "turso" to "postgresql"

## Components and Interfaces

### 1. Package Dependencies (package.json)

**Changes Required:**

```json
{
  "dependencies": {
    // REMOVE
    // "@libsql/client": "^0.17.0",

    // ADD
    "@neondatabase/serverless": "^0.10.3",

    // KEEP (no changes)
    "drizzle-orm": "^0.45.1"
  },
  "devDependencies": {
    // KEEP (no changes)
    "drizzle-kit": "^0.31.9"
  }
}
```

**Rationale**: Neon's serverless driver is optimized for edge runtimes and serverless environments, making it ideal for Next.js applications.

### 2. Database Client (src/lib/db/client.ts)

**Current Implementation:**

```typescript
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema });
export type DB = typeof db;
```

**Target Implementation:**

```typescript
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "./schema";

const client = neon(process.env.DATABASE_URL!);

export const db = drizzle(client, { schema });
export type DB = typeof db;
```

**Interface Contract:**

- Exported `db` instance maintains same type signature
- Exported `DB` type remains unchanged
- All Drizzle ORM query methods remain available
- No breaking changes to consuming code

### 3. Drizzle Configuration (drizzle.config.ts)

**Current Implementation:**

```typescript
export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./src/lib/db/migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
});
```

**Target Implementation:**

```typescript
export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./src/lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
```

**Changes:**

- Dialect: `"turso"` → `"postgresql"`
- Credentials: Single `url` field instead of `url` + `authToken`
- Environment variable: `TURSO_DATABASE_URL` → `DATABASE_URL`

### 4. Database Schema (src/lib/db/schema.ts)

**Type Mapping Strategy:**

| SQLite (Turso)                              | PostgreSQL (Neon)                        | Notes                                       |
| ------------------------------------------- | ---------------------------------------- | ------------------------------------------- |
| `text("id")` with UUID                      | `uuid("id").defaultRandom()`             | Use native UUID type with gen_random_uuid() |
| `text("email")`                             | `varchar("email", { length: 255 })`      | Explicit length for indexed columns         |
| `text("first_name")`                        | `varchar("first_name", { length: 100 })` | Reasonable length for names                 |
| `text("role")`                              | `varchar("role", { length: 50 })`        | Enum values as varchar                      |
| `text("avatar_url")`                        | `text("avatar_url")`                     | URLs can be long, use text                  |
| `integer("is_active", { mode: "boolean" })` | `boolean("is_active")`                   | Native boolean type                         |
| `text("created_at")` with datetime('now')   | `timestamp("created_at").defaultNow()`   | Native timestamp type                       |

**Current Schema Structure:**

```typescript
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { sql, relations } from "drizzle-orm";

const timestamps = {
  createdAt: text("created_at")
    .notNull()
    .default(sql`(datetime('now'))`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`(datetime('now'))`),
};

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  role: text("role", { enum: ["admin", "member", "viewer"] })
    .notNull()
    .default("member"),
  avatarUrl: text("avatar_url"),
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
  ...timestamps,
});
```

**Target Schema Structure:**

```typescript
import {
  pgTable,
  uuid,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql, relations } from "drizzle-orm";

const timestamps = {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
};

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  role: varchar("role", { length: 50 }).notNull().default("member"),
  avatarUrl: text("avatar_url"),
  isActive: boolean("is_active").notNull().default(true),
  ...timestamps,
});
```

**Key Changes:**

- Import from `drizzle-orm/pg-core` instead of `drizzle-orm/sqlite-core`
- Use `pgTable` instead of `sqliteTable`
- Use `uuid` type with `.defaultRandom()` for IDs
- Use `varchar` with explicit lengths for string columns
- Use native `boolean` type instead of integer mode
- Use `timestamp` with `.defaultNow()` for timestamps
- Remove `$defaultFn` in favor of `.defaultRandom()`
- Remove SQL template literals for datetime functions

**Type Exports (Unchanged):**

```typescript
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
```

### 5. Environment Configuration (.env.example)

**Current Configuration:**

```env
# ─── Database — Turso (LibSQL) ────────────────────────────────────────────────
# Get these from: https://app.turso.tech → your database → Connect
TURSO_DATABASE_URL=libsql://your-database-name.turso.io
TURSO_AUTH_TOKEN=
```

**Target Configuration:**

```env
# ─── Database — Neon PostgreSQL ───────────────────────────────────────────────
# Get this from: https://console.neon.tech → your project → Connection Details
# Format: postgresql://[user]:[password]@[host]/[database]?sslmode=require
DATABASE_URL=postgresql://user:password@ep-example-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
```

**Changes:**

- Remove `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`
- Add single `DATABASE_URL` with PostgreSQL connection string format
- Update section header and comments to reference Neon
- Include example connection string format with SSL mode

## Data Models

### User Model

The User model represents internal CRM users (team members). This model structure remains unchanged at the application level, but the underlying database representation changes.

**Application-Level Type (Unchanged):**

```typescript
type User = {
  id: string; // UUID as string
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "member" | "viewer";
  avatarUrl: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type NewUser = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  role?: "admin" | "member" | "viewer";
  avatarUrl?: string | null;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
```

**Database-Level Changes:**

| Field     | SQLite Storage     | PostgreSQL Storage | Migration Notes                                |
| --------- | ------------------ | ------------------ | ---------------------------------------------- |
| id        | TEXT (UUID string) | UUID (native type) | PostgreSQL has native UUID support             |
| email     | TEXT               | VARCHAR(255)       | Indexed column benefits from length constraint |
| firstName | TEXT               | VARCHAR(100)       | Reasonable length for names                    |
| lastName  | TEXT               | VARCHAR(100)       | Reasonable length for names                    |
| role      | TEXT (enum)        | VARCHAR(50)        | Enum values stored as varchar                  |
| avatarUrl | TEXT               | TEXT               | URLs can be long                               |
| isActive  | INTEGER (0/1)      | BOOLEAN            | Native boolean type                            |
| createdAt | TEXT (ISO string)  | TIMESTAMP          | Native timestamp type                          |
| updatedAt | TEXT (ISO string)  | TIMESTAMP          | Native timestamp type                          |

**Default Value Changes:**

| Field     | SQLite Default             | PostgreSQL Default               |
| --------- | -------------------------- | -------------------------------- |
| id        | `crypto.randomUUID()` (JS) | `gen_random_uuid()` (PostgreSQL) |
| role      | `"member"`                 | `"member"`                       |
| isActive  | `true` (1)                 | `true`                           |
| createdAt | `datetime('now')` (SQLite) | `now()` (PostgreSQL)             |
| updatedAt | `datetime('now')` (SQLite) | `now()` (PostgreSQL)             |

**Constraints (Maintained):**

- Primary key on `id`
- Unique constraint on `email`
- Not null constraints on required fields

### Future Entity Models

The schema file includes a placeholder comment indicating that additional entities will be generated by the Logic Architect Agent. When those entities are added, they must follow the same PostgreSQL dialect patterns:

- Use `pgTable` for table definitions
- Use `uuid` for ID columns with `.defaultRandom()`
- Use `varchar` with appropriate lengths for string columns
- Use native `boolean` for boolean fields
- Use `timestamp` for datetime fields
- Use `text` for long-form content

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

For this migration task, the correctness properties are primarily concrete verification examples rather than universal properties, as we are validating a specific configuration migration rather than testing behavior across many inputs.

### Property 1: Package Dependencies Migration

The package.json file should contain the correct database driver dependencies for Neon PostgreSQL and should not contain Turso-specific dependencies.

**Validates: Requirements 1.1, 1.2, 1.3, 1.4**

### Property 2: Database Client Configuration

The database client file (src/lib/db/client.ts) should import from Neon packages, use the DATABASE_URL environment variable, maintain the same exports (db and DB), and contain no references to Turso environment variables.

**Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**

### Property 3: Drizzle Configuration Dialect

The Drizzle configuration file (drizzle.config.ts) should use "postgresql" dialect, reference DATABASE_URL for credentials, not include authToken field, and maintain existing schema/output paths and settings.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

### Property 4: Schema Dialect Conversion

The schema file (src/lib/db/schema.ts) should import from pg-core, use pgTable for table definitions, use PostgreSQL-specific types (uuid, varchar, text, boolean, timestamp), and maintain all existing table and column names.

**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7**

### Property 5: Environment Configuration Update

The .env.example file should document DATABASE_URL with PostgreSQL connection string format, include an example Neon connection string, reference Neon in the database section header, and not contain TURSO_DATABASE_URL or TURSO_AUTH_TOKEN.

**Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**

### Property 6: Migration System Compatibility

When drizzle-kit commands are executed, the migration system should generate PostgreSQL-compatible SQL with PostgreSQL data types (UUID, TIMESTAMP, BOOLEAN) and use PostgreSQL functions (gen_random_uuid()), and successfully apply schema changes to a Neon database.

**Validates: Requirements 6.1, 6.2, 6.3, 6.4**

### Property 7: Backward Compatibility Preservation

The database client should export the same db instance and DB type, and the schema should maintain all existing table names, column names, and type exports (User, NewUser, etc.) to ensure no breaking changes to application code.

**Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5**

## Error Handling

### Migration Errors

**Missing Environment Variable:**

- **Scenario**: DATABASE_URL is not set when initializing the database client
- **Handling**: The application will throw an error at runtime when attempting to access `process.env.DATABASE_URL!`
- **Prevention**: Document DATABASE_URL as required in .env.example and include setup instructions
- **User Experience**: Clear error message indicating missing environment variable

**Invalid Connection String:**

- **Scenario**: DATABASE_URL is malformed or contains incorrect credentials
- **Handling**: The Neon driver will throw a connection error with details
- **Prevention**: Provide example connection string format in .env.example
- **User Experience**: Connection error with details from Neon driver

**Schema Type Mismatch:**

- **Scenario**: Existing data in database doesn't match new PostgreSQL schema types
- **Handling**: This is not applicable for template migration (no existing data)
- **Prevention**: For projects with data, a data migration script would be needed
- **User Experience**: N/A for template migration

### Drizzle Kit Errors

**Dialect Mismatch:**

- **Scenario**: Drizzle config dialect doesn't match schema imports
- **Handling**: Drizzle Kit will fail with type errors during migration generation
- **Prevention**: Ensure both drizzle.config.ts and schema.ts use PostgreSQL dialect
- **User Experience**: Clear error message from Drizzle Kit about dialect mismatch

**Connection Failure:**

- **Scenario**: Cannot connect to Neon database during `drizzle-kit push`
- **Handling**: Drizzle Kit will report connection error with details
- **Prevention**: Verify DATABASE_URL is correct and database is accessible
- **User Experience**: Connection error with troubleshooting hints

**Migration Conflict:**

- **Scenario**: Existing migrations conflict with new schema
- **Handling**: Drizzle Kit will detect conflicts and report them
- **Prevention**: For clean migration, remove old migration files or start fresh
- **User Experience**: Clear conflict report with resolution options

### Runtime Errors

**Type Incompatibility:**

- **Scenario**: Application code expects SQLite-specific behavior (e.g., integer booleans)
- **Handling**: TypeScript will catch type mismatches at compile time
- **Prevention**: Drizzle ORM abstracts database-specific types
- **User Experience**: Compile-time type errors if any incompatibilities exist

**Query Syntax Errors:**

- **Scenario**: Raw SQL queries use SQLite-specific syntax
- **Handling**: PostgreSQL will reject invalid syntax with error message
- **Prevention**: Use Drizzle ORM query builder instead of raw SQL
- **User Experience**: Database error with SQL syntax details

### Rollback Strategy

If migration issues occur:

1. **Revert package.json**: Restore @libsql/client, remove @neondatabase/serverless
2. **Revert client.ts**: Restore Turso client initialization
3. **Revert drizzle.config.ts**: Restore "turso" dialect and Turso credentials
4. **Revert schema.ts**: Restore SQLite imports and table definitions
5. **Revert .env.example**: Restore Turso environment variable documentation
6. **Run npm install**: Reinstall dependencies

All changes are in configuration files, making rollback straightforward with version control.

## Testing Strategy

### Unit Testing Approach

This migration primarily involves configuration changes rather than business logic, so traditional unit tests are less applicable. Instead, testing focuses on verification and integration testing.

**Configuration Verification Tests:**

These tests verify that configuration files have been updated correctly:

```typescript
// tests/migration/config-verification.test.ts

describe("Turso to Neon Migration Verification", () => {
  describe("Package Dependencies", () => {
    it("should not include @libsql/client", () => {
      const pkg = require("../../package.json");
      expect(pkg.dependencies["@libsql/client"]).toBeUndefined();
    });

    it("should include @neondatabase/serverless", () => {
      const pkg = require("../../package.json");
      expect(pkg.dependencies["@neondatabase/serverless"]).toBeDefined();
    });

    it("should maintain drizzle-orm version", () => {
      const pkg = require("../../package.json");
      expect(pkg.dependencies["drizzle-orm"]).toBe("^0.45.1");
    });
  });

  describe("Database Client", () => {
    it("should import from @neondatabase/serverless", () => {
      const clientSource = fs.readFileSync("src/lib/db/client.ts", "utf-8");
      expect(clientSource).toContain("@neondatabase/serverless");
      expect(clientSource).not.toContain("@libsql/client");
    });

    it("should use DATABASE_URL environment variable", () => {
      const clientSource = fs.readFileSync("src/lib/db/client.ts", "utf-8");
      expect(clientSource).toContain("process.env.DATABASE_URL");
      expect(clientSource).not.toContain("TURSO_DATABASE_URL");
      expect(clientSource).not.toContain("TURSO_AUTH_TOKEN");
    });

    it("should export db and DB", () => {
      const client = require("../../src/lib/db/client");
      expect(client.db).toBeDefined();
      expect(client.DB).toBeDefined();
    });
  });

  describe("Drizzle Configuration", () => {
    it("should use postgresql dialect", () => {
      const config = require("../../drizzle.config.ts").default;
      expect(config.dialect).toBe("postgresql");
    });

    it("should not include authToken", () => {
      const config = require("../../drizzle.config.ts").default;
      expect(config.dbCredentials.authToken).toBeUndefined();
    });
  });

  describe("Schema", () => {
    it("should import from pg-core", () => {
      const schemaSource = fs.readFileSync("src/lib/db/schema.ts", "utf-8");
      expect(schemaSource).toContain("drizzle-orm/pg-core");
      expect(schemaSource).not.toContain("drizzle-orm/sqlite-core");
    });

    it("should use pgTable", () => {
      const schemaSource = fs.readFileSync("src/lib/db/schema.ts", "utf-8");
      expect(schemaSource).toContain("pgTable");
      expect(schemaSource).not.toContain("sqliteTable");
    });

    it("should export User and NewUser types", () => {
      const schema = require("../../src/lib/db/schema");
      expect(schema.User).toBeDefined();
      expect(schema.NewUser).toBeDefined();
    });
  });

  describe("Environment Configuration", () => {
    it("should document DATABASE_URL", () => {
      const envExample = fs.readFileSync(".env.example", "utf-8");
      expect(envExample).toContain("DATABASE_URL");
    });

    it("should not document Turso variables", () => {
      const envExample = fs.readFileSync(".env.example", "utf-8");
      expect(envExample).not.toContain("TURSO_DATABASE_URL");
      expect(envExample).not.toContain("TURSO_AUTH_TOKEN");
    });

    it("should include PostgreSQL connection string example", () => {
      const envExample = fs.readFileSync(".env.example", "utf-8");
      expect(envExample).toContain("postgresql://");
    });
  });
});
```

**Feature: migrate-turso-to-neon, Property 1: Package Dependencies Migration**
**Feature: migrate-turso-to-neon, Property 2: Database Client Configuration**
**Feature: migrate-turso-to-neon, Property 3: Drizzle Configuration Dialect**
**Feature: migrate-turso-to-neon, Property 4: Schema Dialect Conversion**
**Feature: migrate-turso-to-neon, Property 5: Environment Configuration Update**

### Integration Testing Approach

Integration tests verify that the migration works end-to-end with a real Neon database.

**Database Connection Test:**

```typescript
// tests/integration/database-connection.test.ts

describe("Neon Database Integration", () => {
  beforeAll(() => {
    // Ensure DATABASE_URL is set for test environment
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL must be set for integration tests");
    }
  });

  it("should successfully connect to Neon database", async () => {
    const { db } = await import("../../src/lib/db/client");
    expect(db).toBeDefined();
  });

  it("should execute a simple query", async () => {
    const { db } = await import("../../src/lib/db/client");
    const result = await db.execute(sql`SELECT 1 as value`);
    expect(result.rows[0].value).toBe(1);
  });

  it("should support UUID generation", async () => {
    const { db } = await import("../../src/lib/db/client");
    const result = await db.execute(sql`SELECT gen_random_uuid() as id`);
    expect(result.rows[0].id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
    );
  });
});
```

**Schema Migration Test:**

```typescript
// tests/integration/schema-migration.test.ts

describe("Schema Migration", () => {
  it("should generate PostgreSQL-compatible migrations", async () => {
    // Run drizzle-kit generate
    execSync("npx drizzle-kit generate", { encoding: "utf-8" });

    // Check that migration files were created
    const migrationFiles = fs.readdirSync("src/lib/db/migrations");
    expect(migrationFiles.length).toBeGreaterThan(0);

    // Verify migration uses PostgreSQL syntax
    const latestMigration = migrationFiles[migrationFiles.length - 1];
    const migrationContent = fs.readFileSync(
      `src/lib/db/migrations/${latestMigration}`,
      "utf-8",
    );

    expect(migrationContent).toContain("UUID");
    expect(migrationContent).toContain("gen_random_uuid()");
    expect(migrationContent).toContain("TIMESTAMP");
    expect(migrationContent).toContain("BOOLEAN");
  });

  it("should successfully push schema to Neon", async () => {
    // This test requires a live Neon database
    const output = execSync("npx drizzle-kit push", { encoding: "utf-8" });
    expect(output).toContain("success");
  });
});
```

**Feature: migrate-turso-to-neon, Property 6: Migration System Compatibility**

**CRUD Operations Test:**

```typescript
// tests/integration/crud-operations.test.ts

describe("CRUD Operations with Neon", () => {
  let testUserId: string;

  afterAll(async () => {
    // Cleanup test data
    if (testUserId) {
      await db.delete(users).where(eq(users.id, testUserId));
    }
  });

  it("should create a user", async () => {
    const newUser = {
      email: "test@example.com",
      firstName: "Test",
      lastName: "User",
      role: "member" as const,
    };

    const [created] = await db.insert(users).values(newUser).returning();

    expect(created).toBeDefined();
    expect(created.id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
    );
    expect(created.email).toBe(newUser.email);
    expect(created.isActive).toBe(true);
    expect(created.createdAt).toBeInstanceOf(Date);

    testUserId = created.id;
  });

  it("should read a user", async () => {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, testUserId));

    expect(user).toBeDefined();
    expect(user.id).toBe(testUserId);
    expect(user.email).toBe("test@example.com");
  });

  it("should update a user", async () => {
    const [updated] = await db
      .update(users)
      .set({ firstName: "Updated" })
      .where(eq(users.id, testUserId))
      .returning();

    expect(updated.firstName).toBe("Updated");
  });

  it("should delete a user", async () => {
    await db.delete(users).where(eq(users.id, testUserId));

    const [deleted] = await db
      .select()
      .from(users)
      .where(eq(users.id, testUserId));
    expect(deleted).toBeUndefined();
  });
});
```

**Feature: migrate-turso-to-neon, Property 7: Backward Compatibility Preservation**

### Manual Testing Checklist

Before considering the migration complete, manually verify:

- [ ] `npm install` completes without errors
- [ ] TypeScript compilation succeeds (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] Development server starts (`npm run dev`)
- [ ] Drizzle Studio connects to Neon (`npx drizzle-kit studio`)
- [ ] Schema push works (`npx drizzle-kit push`)
- [ ] All existing API routes that use the database still work
- [ ] Database queries return expected data types (UUID as string, boolean as boolean, etc.)

### Testing Configuration

**Test Environment Setup:**

```env
# .env.test
DATABASE_URL=postgresql://test_user:test_pass@localhost:5432/test_db
```

**Test Database:**

- Use a separate Neon database for testing, or
- Use a local PostgreSQL instance for faster test execution
- Ensure test database is isolated from production

**CI/CD Considerations:**

- Integration tests require DATABASE_URL to be set
- Consider using Neon's branching feature for test databases
- Run verification tests on every commit
- Run integration tests before deployment

### Property-Based Testing

While this migration is primarily configuration-based, property-based testing is not applicable in the traditional sense. However, we can use property-based thinking for future schema changes:

**Future Property Tests (when adding new entities):**

```typescript
// For any entity added to the schema
describe("Schema Entity Properties", () => {
  it("should use pgTable for all table definitions", () => {
    // Property: All tables use pgTable
  });

  it("should use uuid with defaultRandom for all ID columns", () => {
    // Property: All ID columns are UUIDs with PostgreSQL default
  });

  it("should use timestamp for all datetime columns", () => {
    // Property: All datetime columns use PostgreSQL timestamp
  });

  it("should use boolean for all boolean columns", () => {
    // Property: All boolean columns use native PostgreSQL boolean
  });
});
```

These properties ensure consistency as the schema evolves beyond the initial migration.

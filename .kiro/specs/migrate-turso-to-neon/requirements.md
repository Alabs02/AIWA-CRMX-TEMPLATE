# Requirements Document

## Introduction

This document specifies the requirements for migrating the database setup from Turso (LibSQL/SQLite dialect) to Neon (PostgreSQL). The migration involves updating database client dependencies, configuration files, environment variables, and ensuring schema compatibility with PostgreSQL dialect while maintaining all existing functionality.

## Glossary

- **Database_Client**: The module responsible for establishing and managing the connection to the database (src/lib/db/client.ts)
- **Drizzle_Config**: The configuration file that defines Drizzle ORM settings including dialect and credentials (drizzle.config.ts)
- **Schema_File**: The database schema definition file using Drizzle ORM table definitions (src/lib/db/schema.ts)
- **Migration_System**: The Drizzle Kit migration generation and execution system
- **Neon_Driver**: The @neondatabase/serverless package for connecting to Neon PostgreSQL
- **Environment_Config**: The .env.example file that documents required environment variables
- **Package_Dependencies**: The npm packages listed in package.json
- **Connection_String**: The DATABASE_URL environment variable containing Neon PostgreSQL connection details

## Requirements

### Requirement 1: Update Database Client Dependencies

**User Story:** As a developer, I want to replace Turso-specific dependencies with Neon PostgreSQL dependencies, so that the application can connect to a Neon database.

#### Acceptance Criteria

1. THE Package_Dependencies SHALL remove @libsql/client from dependencies
2. THE Package_Dependencies SHALL add @neondatabase/serverless to dependencies
3. THE Package_Dependencies SHALL maintain the existing drizzle-orm version
4. THE Package_Dependencies SHALL maintain the existing drizzle-kit version

### Requirement 2: Update Database Client Implementation

**User Story:** As a developer, I want the database client to use Neon's serverless driver, so that the application connects to PostgreSQL instead of LibSQL.

#### Acceptance Criteria

1. THE Database_Client SHALL import from @neondatabase/serverless instead of @libsql/client
2. THE Database_Client SHALL import from drizzle-orm/neon-serverless instead of drizzle-orm/libsql
3. WHEN initializing the connection, THE Database_Client SHALL use the Connection_String environment variable
4. THE Database_Client SHALL maintain the same exported interface (db and DB type)
5. THE Database_Client SHALL remove all references to TURSO_DATABASE_URL and TURSO_AUTH_TOKEN

### Requirement 3: Update Drizzle Configuration

**User Story:** As a developer, I want the Drizzle configuration to use PostgreSQL dialect, so that migrations are generated correctly for PostgreSQL.

#### Acceptance Criteria

1. THE Drizzle_Config SHALL set dialect to "postgresql" instead of "turso"
2. THE Drizzle_Config SHALL use Connection_String for database credentials
3. THE Drizzle_Config SHALL remove the authToken credential field
4. THE Drizzle_Config SHALL maintain the existing schema and output paths
5. THE Drizzle_Config SHALL maintain verbose and strict settings

### Requirement 4: Update Schema Dialect

**User Story:** As a developer, I want the schema to use PostgreSQL table definitions, so that the schema is compatible with PostgreSQL.

#### Acceptance Criteria

1. THE Schema_File SHALL import from drizzle-orm/pg-core instead of drizzle-orm/sqlite-core
2. THE Schema_File SHALL use pgTable instead of sqliteTable for table definitions
3. THE Schema_File SHALL use varchar or text for string columns with appropriate PostgreSQL syntax
4. THE Schema_File SHALL use boolean for boolean columns instead of integer mode
5. THE Schema_File SHALL use timestamp for datetime columns with appropriate PostgreSQL syntax
6. THE Schema_File SHALL use uuid for ID columns with gen_random_uuid() default function
7. THE Schema_File SHALL maintain all existing table structures and relationships

### Requirement 5: Update Environment Configuration

**User Story:** As a developer, I want the environment configuration to document Neon connection requirements, so that developers know which environment variables to set.

#### Acceptance Criteria

1. THE Environment_Config SHALL remove TURSO_DATABASE_URL variable documentation
2. THE Environment_Config SHALL remove TURSO_AUTH_TOKEN variable documentation
3. THE Environment_Config SHALL add DATABASE_URL variable documentation with Neon PostgreSQL format
4. THE Environment_Config SHALL include an example Neon connection string format
5. THE Environment_Config SHALL update the database section header to reference Neon PostgreSQL

### Requirement 6: Ensure Migration Compatibility

**User Story:** As a developer, I want to verify that the migration system works with PostgreSQL, so that schema changes can be applied to the Neon database.

#### Acceptance Criteria

1. WHEN drizzle-kit generate is executed, THE Migration_System SHALL generate PostgreSQL-compatible migration files
2. WHEN drizzle-kit push is executed, THE Migration_System SHALL successfully apply schema changes to Neon
3. THE Migration_System SHALL use PostgreSQL data types in generated migrations
4. THE Migration_System SHALL handle UUID generation using PostgreSQL functions

### Requirement 7: Maintain Backward Compatibility

**User Story:** As a developer, I want the database interface to remain unchanged, so that existing application code continues to work without modifications.

#### Acceptance Criteria

1. THE Database_Client SHALL export the same db instance with identical type signature
2. THE Database_Client SHALL export the same DB type definition
3. THE Schema_File SHALL maintain all existing table names
4. THE Schema_File SHALL maintain all existing column names
5. THE Schema_File SHALL maintain all existing type exports (User, NewUser, etc.)

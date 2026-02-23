# Implementation Plan: Migrate Turso to Neon

## Overview

This plan outlines the steps to migrate the database infrastructure from Turso (LibSQL/SQLite dialect) to Neon (PostgreSQL). The migration involves updating dependencies, replacing the database client, converting schema definitions to PostgreSQL dialect, updating configuration files, and verifying the migration works correctly.

## Tasks

- [x] 1. Update package dependencies
  - Remove @libsql/client from dependencies
  - Add @neondatabase/serverless to dependencies
  - Run npm install to update lock file
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ] 2. Update database client implementation
  - [x] 2.1 Replace database client in src/lib/db/client.ts
    - Import neon from @neondatabase/serverless
    - Import drizzle from drizzle-orm/neon-serverless
    - Replace createClient with neon(process.env.DATABASE_URL!)
    - Remove authToken parameter
    - Maintain db and DB exports
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

  - [ ]\* 2.2 Write verification test for database client configuration
    - **Property 2: Database Client Configuration**
    - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**

- [ ] 3. Update Drizzle configuration
  - [x] 3.1 Modify drizzle.config.ts for PostgreSQL
    - Change dialect from "turso" to "postgresql"
    - Update dbCredentials to use single url field with DATABASE_URL
    - Remove authToken field
    - Maintain schema, out, verbose, and strict settings
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]\* 3.2 Write verification test for Drizzle configuration
    - **Property 3: Drizzle Configuration Dialect**
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

- [ ] 4. Convert database schema to PostgreSQL dialect
  - [x] 4.1 Update schema imports and table definitions in src/lib/db/schema.ts
    - Replace sqlite-core imports with pg-core imports
    - Import pgTable, uuid, varchar, text, boolean, timestamp from pg-core
    - Replace sqliteTable with pgTable
    - _Requirements: 4.1, 4.2, 4.7_

  - [x] 4.2 Convert column types to PostgreSQL equivalents
    - Convert text ID columns to uuid with .defaultRandom()
    - Convert text string columns to varchar with appropriate lengths
    - Convert integer boolean columns to native boolean type
    - Convert text datetime columns to timestamp with .defaultNow()
    - Update timestamps helper object
    - _Requirements: 4.3, 4.4, 4.5, 4.6_

  - [ ]\* 4.3 Write verification test for schema dialect conversion
    - **Property 4: Schema Dialect Conversion**
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7**

- [x] 5. Checkpoint - Verify TypeScript compilation
  - Ensure all TypeScript files compile without errors
  - Check that no import errors exist
  - Ask the user if questions arise

- [ ] 6. Update environment configuration
  - [x] 6.1 Modify .env.example for Neon
    - Remove TURSO_DATABASE_URL and TURSO_AUTH_TOKEN documentation
    - Add DATABASE_URL with PostgreSQL connection string format
    - Update database section header to reference Neon PostgreSQL
    - Include example Neon connection string with sslmode=require
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ]\* 6.2 Write verification test for environment configuration
    - **Property 5: Environment Configuration Update**
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**

- [ ] 7. Verify migration system compatibility
  - [ ]\* 7.1 Write test for migration generation
    - **Property 6: Migration System Compatibility (Generation)**
    - **Validates: Requirements 6.1, 6.3, 6.4**
    - Test that drizzle-kit generate creates PostgreSQL-compatible migrations
    - Verify migrations use PostgreSQL data types (UUID, TIMESTAMP, BOOLEAN)
    - Verify migrations use gen_random_uuid() function

  - [ ]\* 7.2 Write integration test for database connection
    - Test successful connection to Neon database
    - Test simple query execution
    - Test UUID generation support
    - _Requirements: 6.2_

  - [ ]\* 7.3 Write integration test for CRUD operations
    - **Property 7: Backward Compatibility Preservation**
    - **Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5**
    - Test create, read, update, delete operations
    - Verify UUID generation works correctly
    - Verify timestamp defaults work correctly
    - Verify boolean type handling works correctly

- [-] 8. Final checkpoint - Complete migration verification
  - Ensure all tests pass
  - Verify npm install completes without errors
  - Verify TypeScript compilation succeeds
  - Ask the user if questions arise or if manual testing is needed

## Notes

- Tasks marked with `*` are optional verification tests and can be skipped for faster migration
- Each task references specific requirements for traceability
- The migration is primarily configuration-based with no data migration required
- All changes maintain backward compatibility with existing application code
- Integration tests (7.2, 7.3) require a live Neon database with DATABASE_URL configured
- Checkpoints ensure incremental validation at key milestones

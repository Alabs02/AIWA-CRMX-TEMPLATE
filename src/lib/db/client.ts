import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

/**
 * LibSQL client configured from environment variables.
 * - TURSO_DATABASE_URL  — libsql://your-db.turso.io
 * - TURSO_AUTH_TOKEN    — token from Turso dashboard
 *
 * Both are injected by the AIWA deployment workflow.
 */
const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema });
export type DB = typeof db;

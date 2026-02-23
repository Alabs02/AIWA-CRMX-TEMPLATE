import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

/**
 * Neon PostgreSQL client configured from environment variables.
 * - DATABASE_URL — postgresql://[user]:[password]@[host]/[database]?sslmode=require
 *
 * Get this from: https://console.neon.tech → your project → Connection Details
 */
const client = neon(process.env.DATABASE_URL!);

export const db = drizzle(client, { schema });
export type DB = typeof db;

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema";
 
config({ path: ".env" });
 
export const client = neon(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema, logger: true });
 
export default db;
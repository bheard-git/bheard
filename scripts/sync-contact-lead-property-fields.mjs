/**
 * Backfill ContactLead documents with propertyName / propertyType.
 * MongoDB is schemaless, but this keeps existing rows aligned with the new fields.
 *
 * Usage: node scripts/sync-contact-lead-property-fields.mjs
 */

import mongoose from "mongoose";
import { loadEnvFile } from "./load-env.mjs";

loadEnvFile();

const uri = process.env.DATABASE_URL;
if (!uri) {
  console.error("DATABASE_URL is not configured");
  process.exit(1);
}

const conn = await mongoose.createConnection(uri, {
  serverSelectionTimeoutMS: 15_000,
}).asPromise();

try {
  const col = conn.collection("ContactLead");

  const nameResult = await col.updateMany(
    { propertyName: { $exists: false } },
    { $set: { propertyName: null } }
  );
  const typeResult = await col.updateMany(
    { propertyType: { $exists: false } },
    { $set: { propertyType: null } }
  );

  console.log(
    `ContactLead propertyName: matched ${nameResult.matchedCount}, modified ${nameResult.modifiedCount}`
  );
  console.log(
    `ContactLead propertyType: matched ${typeResult.matchedCount}, modified ${typeResult.modifiedCount}`
  );
} finally {
  await conn.close();
}

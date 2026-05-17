/**
 * Migrate MongoDB + ImageKit from personal accounts to new production accounts.
 *
 * Required env (in .env or shell):
 *   SOURCE_DATABASE_URL      — current DATABASE_URL (default)
 *   TARGET_DATABASE_URL      — new cluster, must include /bheard db name
 *   SOURCE_IMAGEKIT_PRIVATE_KEY — current key (default: IMAGEKIT_PRIVATE_KEY)
 *   TARGET_IMAGEKIT_PRIVATE_KEY — new account key (required for --images)
 *
 * Usage:
 *   node scripts/migrate-infra.mjs --dry-run          # inspect only
 *   node scripts/migrate-infra.mjs --mongo            # copy MongoDB collections
 *   node scripts/migrate-infra.mjs --images           # copy ImageKit + rewrite URLs
 *   node scripts/migrate-infra.mjs --mongo --images   # full migration
 */

import mongoose from "mongoose";
import ImageKit from "@imagekit/nodejs";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { loadEnvFile } from "./load-env.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MIGRATION_DIR = resolve(__dirname, ".migration");
const URL_MAP_FILE = resolve(MIGRATION_DIR, "url-map.json");
const MONGO_DUMP_DIR = resolve(MIGRATION_DIR, "mongo-dump");

loadEnvFile();

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const doMongo = args.has("--mongo") || args.has("--all");
const doImages = args.has("--images") || args.has("--all");
const doImport = args.has("--import");
const doExport = args.has("--export");

if (!doMongo && !doImages && !doImport && !doExport) {
  console.log(`
Usage: node scripts/migrate-infra.mjs [options]

  --mongo       Copy all CMS collections to TARGET_DATABASE_URL
  --images      Copy ImageKit /bheard assets; saves url-map + optional --export
  --export      With --images: export source MongoDB (URLs rewritten) to scripts/.migration/
  --import      Import exported dump into TARGET_DATABASE_URL
  --all         Both --mongo and --images
  --dry-run     Log actions without writing

Set SOURCE_* / TARGET_* env vars (see script header).
`);
  process.exit(0);
}

const SOURCE_DB =
  process.env.SOURCE_DATABASE_URL || process.env.DATABASE_URL;
let TARGET_DB =
  process.env.TARGET_DATABASE_URL ||
  process.env.DATABASE_URL_NEW;

/** Ensure database name `bheard` is in the URI path (Atlas often omits it on new clusters). */
function withBheardDb(uri) {
  if (!uri) return uri;
  if (/\/bheard(\?|$)/.test(uri)) return uri;

  const q = uri.indexOf("?");
  const beforeQuery = (q === -1 ? uri : uri.slice(0, q)).replace(/\/$/, "");
  const query = q === -1 ? "?retryWrites=true&w=majority" : uri.slice(q);

  const at = beforeQuery.lastIndexOf("@");
  if (at === -1) return uri;

  const slashAfterHosts = beforeQuery.indexOf("/", at);
  if (slashAfterHosts === -1) {
    const params = query.includes("retryWrites")
      ? query
      : `${query}${query.includes("?") ? "&" : "?"}retryWrites=true&w=majority`;
    return `${beforeQuery}/bheard${params}`;
  }

  const dbSegment = beforeQuery.slice(slashAfterHosts + 1);
  if (dbSegment === "bheard") return uri;

  const params = query.includes("retryWrites")
    ? query
    : `${query}${query.includes("?") ? "&" : "?"}retryWrites=true&w=majority`;
  return `${beforeQuery.slice(0, slashAfterHosts)}/bheard${params}`;
}

TARGET_DB = withBheardDb(TARGET_DB);

const SOURCE_IK_KEY =
  process.env.SOURCE_IMAGEKIT_PRIVATE_KEY || process.env.IMAGEKIT_PRIVATE_KEY;
const TARGET_IK_KEY =
  process.env.TARGET_IMAGEKIT_PRIVATE_KEY ||
  process.env.IMAGEKIT_PRIVATE_KEY_NEW;

const COLLECTIONS = [
  "BlogPost",
  "Career",
  "CareerApplication",
  "SuccessStory",
  "MediaAsset",
  "Page",
  "ContactLead",
];

const URL_FIELDS = {
  BlogPost: ["authorImage", "thumbnailUrl", "content"],
  SuccessStory: ["listImage", "heroImage", "caseData"],
  CareerApplication: ["resumeStoredPath"],
  MediaAsset: ["path"],
  Page: ["content"],
};

function assertEnv() {
  if (doImport && !TARGET_DB) {
    throw new Error("TARGET_DATABASE_URL is required for --import");
  }
  if (doMongo && (!SOURCE_DB || !TARGET_DB)) {
    throw new Error("SOURCE_DATABASE_URL and TARGET_DATABASE_URL are required for --mongo");
  }
  if (doImages && (!SOURCE_IK_KEY || !TARGET_IK_KEY)) {
    throw new Error(
      "SOURCE_IMAGEKIT_PRIVATE_KEY and TARGET_IMAGEKIT_PRIVATE_KEY are required for --images"
    );
  }
}

function extractImageKitId(url) {
  const m = url?.match?.(/ik\.imagekit\.io\/([^/]+)\//);
  return m?.[1] ?? null;
}

function stripQuery(url) {
  return typeof url === "string" ? url.split("?")[0] : url;
}

function replaceUrlsInValue(value, urlMap) {
  if (typeof value === "string") {
    let out = value;
    for (const [oldUrl, newUrl] of urlMap) {
      const oldBase = stripQuery(oldUrl);
      const newBase = stripQuery(newUrl);
      if (out.includes(oldUrl)) out = out.split(oldUrl).join(newUrl);
      if (oldBase !== oldUrl && out.includes(oldBase)) out = out.split(oldBase).join(newBase);
    }
    return out;
  }
  if (Array.isArray(value)) return value.map((v) => replaceUrlsInValue(v, urlMap));
  if (value && typeof value === "object") {
    const next = {};
    for (const [k, v] of Object.entries(value)) {
      next[k] = replaceUrlsInValue(v, urlMap);
    }
    return next;
  }
  return value;
}

async function connectDb(uri, label) {
  const conn = await mongoose.createConnection(uri, {
    serverSelectionTimeoutMS: 15_000,
  }).asPromise();
  console.log(`[${label}] connected`);
  return conn;
}

async function migrateMongo(sourceConn, targetConn) {
  console.log("\n=== MongoDB migration ===\n");
  for (const name of COLLECTIONS) {
    const src = sourceConn.collection(name);
    const dst = targetConn.collection(name);
    const docs = await src.find({}).toArray();
    console.log(`${name}: ${docs.length} document(s)`);
    if (dryRun || docs.length === 0) continue;

    await dst.deleteMany({});
    if (docs.length > 0) {
      await dst.insertMany(docs, { ordered: false });
    }
    console.log(`  -> copied to target`);
  }
}

async function listAllImageKitFilesFallback(client) {
  const files = [];
  const seen = new Set();
  let skip = 0;
  const limit = 100;
  for (;;) {
    const batch = await client.assets.list({ type: "file", limit, skip, sort: "ASC_NAME" });
    if (!batch?.length) break;
    for (const item of batch) {
      if (item.type !== "file" || !item.url || seen.has(item.fileId)) continue;
      if (!item.filePath?.startsWith("/bheard/")) continue;
      seen.add(item.fileId);
      files.push(item);
    }
    if (batch.length < limit) break;
    skip += limit;
  }
  return files;
}

async function listAllImageKitFiles(client) {
  const files = [];
  const seen = new Set();
  let skip = 0;
  const limit = 100;
  for (;;) {
    const batch = await client.assets.list({
      searchQuery: 'path:"/bheard/**"',
      type: "file",
      limit,
      skip,
      sort: "ASC_NAME",
    });
    if (!batch?.length) break;
    for (const item of batch) {
      if (item.type !== "file" || !item.url || seen.has(item.fileId)) continue;
      seen.add(item.fileId);
      files.push(item);
    }
    if (batch.length < limit) break;
    skip += limit;
  }
  return files;
}

function saveUrlMap(urlMap) {
  mkdirSync(MIGRATION_DIR, { recursive: true });
  writeFileSync(URL_MAP_FILE, JSON.stringify(Object.fromEntries(urlMap), null, 2));
  console.log(`Saved URL map (${urlMap.size} entries) -> ${URL_MAP_FILE}`);
}

function loadUrlMap() {
  if (!existsSync(URL_MAP_FILE)) {
    throw new Error(`Missing ${URL_MAP_FILE} — run --images first`);
  }
  return new Map(Object.entries(JSON.parse(readFileSync(URL_MAP_FILE, "utf8"))));
}

async function exportMongo(sourceConn, urlMap) {
  console.log("\n=== Export MongoDB (source, URLs rewritten) ===\n");
  mkdirSync(MONGO_DUMP_DIR, { recursive: true });
  for (const name of COLLECTIONS) {
    const docs = await sourceConn.collection(name).find({}).toArray();
    const fields = URL_FIELDS[name];
    const rewritten = docs.map((doc) => {
      if (!fields?.length || !urlMap.size) return doc;
      const copy = { ...doc };
      for (const field of fields) {
        if (copy[field] != null) copy[field] = replaceUrlsInValue(copy[field], urlMap);
      }
      return copy;
    });
    writeFileSync(resolve(MONGO_DUMP_DIR, `${name}.json`), JSON.stringify(rewritten, null, 2));
    console.log(`${name}: exported ${rewritten.length} document(s)`);
  }
}

async function importMongo(targetConn) {
  console.log("\n=== Import MongoDB to target ===\n");
  for (const name of COLLECTIONS) {
    const file = resolve(MONGO_DUMP_DIR, `${name}.json`);
    if (!existsSync(file)) continue;
    const docs = JSON.parse(readFileSync(file, "utf8"));
    const col = targetConn.collection(name);
    console.log(`${name}: importing ${docs.length} document(s)`);
    if (dryRun) continue;
    await col.deleteMany({});
    if (docs.length > 0) await col.insertMany(docs, { ordered: false });
    console.log(`  -> done`);
  }
}

async function uploadImages() {
  console.log("\n=== ImageKit migration ===\n");

  const sourceClient = new ImageKit({ privateKey: SOURCE_IK_KEY });
  const targetClient = new ImageKit({ privateKey: TARGET_IK_KEY });

  let sourceFiles = await listAllImageKitFiles(sourceClient);
  if (sourceFiles.length === 0) {
    console.warn("searchQuery returned 0 files; falling back to full library scan");
    sourceFiles = await listAllImageKitFilesFallback(sourceClient);
  }
  console.log(`Found ${sourceFiles.length} file(s) under /bheard`);

  const urlMap = new Map();
  const sourceId = sourceFiles[0] ? extractImageKitId(sourceFiles[0].url) : null;

  for (const file of sourceFiles) {
    const oldUrl = file.url;
    const folder = file.filePath?.replace(/\/[^/]+$/, "") || "/bheard";
    const fileName = file.name;

    console.log(`  ${fileName}`);

    if (dryRun) {
      urlMap.set(oldUrl, `[NEW]${oldUrl.replace(/ik\.imagekit\.io\/[^/]+/, "ik.imagekit.io/NEW_ID")}`);
      continue;
    }

    const res = await fetch(oldUrl);
    if (!res.ok) throw new Error(`Failed to download ${oldUrl}: ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());

    const uploaded = await targetClient.files.upload({
      file: buf.toString("base64"),
      fileName,
      folder,
      useUniqueFileName: false,
    });

    urlMap.set(oldUrl, uploaded.url);
    console.log(`    -> ${uploaded.url}`);
  }

  if (dryRun) {
    console.log(`\n[dry-run] Would rewrite URLs (source id: ${sourceId ?? "unknown"})`);
    return urlMap;
  }

  saveUrlMap(urlMap);
  return urlMap;
}

async function rewriteUrlsInDb(conn, urlMap, label) {
  console.log(`\n=== Rewriting ImageKit URLs in ${label} MongoDB ===\n`);
  for (const name of COLLECTIONS) {
    const fields = URL_FIELDS[name];
    if (!fields?.length) continue;
    const col = conn.collection(name);
    let updated = 0;
    for await (const doc of col.find({})) {
      const patch = {};
      for (const field of fields) {
        if (doc[field] == null) continue;
        const next = replaceUrlsInValue(doc[field], urlMap);
        if (JSON.stringify(next) !== JSON.stringify(doc[field])) patch[field] = next;
      }
      if (Object.keys(patch).length > 0) {
        if (!dryRun) await col.updateOne({ _id: doc._id }, { $set: patch });
        updated++;
      }
    }
    if (updated > 0) console.log(`${name}: updated ${updated} document(s)`);
  }
}

async function inspect() {
  console.log("Source DB:", SOURCE_DB?.replace(/:[^:@]+@/, ":***@") ?? "(missing)");
  console.log("Target DB:", TARGET_DB?.replace(/:[^:@]+@/, ":***@") ?? "(missing)");
  console.log("Source ImageKit key:", SOURCE_IK_KEY ? "set" : "missing");
  console.log("Target ImageKit key:", TARGET_IK_KEY ? "set" : "missing");
}

async function main() {
  assertEnv();
  await inspect();

  let sourceConn;
  let targetConn;

  try {
    if (doImport) {
      targetConn = await connectDb(TARGET_DB, "target");
      await importMongo(targetConn);
      console.log("\nDone (import).");
      return;
    }

    if (doImages) {
      const urlMap = await uploadImages();
      sourceConn = await connectDb(SOURCE_DB, "source");
      if (doExport || !dryRun) {
        await exportMongo(sourceConn, urlMap);
      }
    }

    if (doMongo) {
      sourceConn = sourceConn ?? (await connectDb(SOURCE_DB, "source"));
      targetConn = await connectDb(TARGET_DB, "target");
      if (existsSync(resolve(MONGO_DUMP_DIR, "BlogPost.json"))) {
        await importMongo(targetConn);
      } else {
        await migrateMongo(sourceConn, targetConn);
        const urlMap = existsSync(URL_MAP_FILE) ? loadUrlMap() : new Map();
        if (urlMap.size) await rewriteUrlsInDb(targetConn, urlMap, "target");
      }
    }

    console.log("\nDone.");
    if (!dryRun && (doMongo || doImages)) {
      console.log(`
Next steps:
  1. Update .env: set DATABASE_URL to DATABASE_URL_NEW (with /bheard)
  2. Update .env: set IMAGEKIT_PRIVATE_KEY to IMAGEKIT_PRIVATE_KEY_NEW
  3. Remove *_NEW vars
  4. Restart dev server and verify /blog, /success-stories, admin uploads
`);
    }
  } finally {
    await sourceConn?.close();
    await targetConn?.close();
    await mongoose.disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

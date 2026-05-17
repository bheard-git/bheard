import mongoose from "mongoose";
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { loadEnvFile } from "./load-env.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const URL_MAP_FILE = resolve(__dirname, ".migration/url-map.json");

loadEnvFile();

const dbUri = process.env.DATABASE_URL;
if (!dbUri) throw new Error("DATABASE_URL is not set");
if (!existsSync(URL_MAP_FILE)) throw new Error(`Missing ${URL_MAP_FILE}`);

const urlMap = new Map(Object.entries(JSON.parse(readFileSync(URL_MAP_FILE, "utf8"))));

function stripQuery(url) {
  return url.split("?")[0];
}

function replaceUrlsInValue(value) {
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
  if (Array.isArray(value)) return value.map((v) => replaceUrlsInValue(v));
  if (value && typeof value === "object") {
    const next = {};
    for (const [k, v] of Object.entries(value)) next[k] = replaceUrlsInValue(v);
    return next;
  }
  return value;
}

const URL_FIELDS = {
  BlogPost: ["authorImage", "thumbnailUrl", "content"],
  SuccessStory: ["listImage", "heroImage", "caseData"],
  CareerApplication: ["resumeStoredPath"],
  MediaAsset: ["path"],
  Page: ["content"],
};

const conn = await mongoose.createConnection(dbUri).asPromise();
for (const [name, fields] of Object.entries(URL_FIELDS)) {
  const col = conn.collection(name);
  let updated = 0;
  for await (const doc of col.find({})) {
    const patch = {};
    for (const field of fields) {
      if (doc[field] == null) continue;
      const next = replaceUrlsInValue(doc[field]);
      if (JSON.stringify(next) !== JSON.stringify(doc[field])) patch[field] = next;
    }
    if (Object.keys(patch).length > 0) {
      await col.updateOne({ _id: doc._id }, { $set: patch });
      updated++;
    }
  }
  if (updated > 0) console.log(`${name}: ${updated} updated`);
}
await conn.close();
console.log("Done.");

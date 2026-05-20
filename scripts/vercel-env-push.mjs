/**
 * Push .env variables to Vercel (production + preview).
 * Requires: vercel login + vercel link (project bheard-website).
 *
 * Usage: node scripts/vercel-env-push.mjs
 */

import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "..", ".env");

const SKIP = new Set(["DATABASE_URL_NEW", "IMAGEKIT_PRIVATE_KEY_NEW"]);

const TARGET_ENVS = ["production", "preview", "development"];

function parseEnvFile(path) {
  const vars = [];
  const text = readFileSync(path, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!SKIP.has(key)) vars.push({ key, value });
  }
  return vars;
}

if (!existsSync(envPath)) {
  console.error("Missing .env file");
  process.exit(1);
}

const vars = parseEnvFile(envPath);
console.log(`Pushing ${vars.length} variable(s) to Vercel...\n`);

for (const { key, value } of vars) {
  for (const env of TARGET_ENVS) {
    const result = spawnSync(
      "npx",
      ["vercel", "env", "add", key, env, "--force"],
      {
        input: value,
        encoding: "utf8",
        cwd: resolve(__dirname, ".."),
        shell: true,
        stdio: ["pipe", "pipe", "pipe"],
      }
    );
    if (result.status !== 0) {
      const err = (result.stderr || result.stdout || "").trim();
      if (err.includes("already exists")) {
        spawnSync("npx", ["vercel", "env", "rm", key, env, "--yes"], {
          cwd: resolve(__dirname, ".."),
          shell: true,
          stdio: "inherit",
        });
        spawnSync("npx", ["vercel", "env", "add", key, env, "--force"], {
          input: value,
          encoding: "utf8",
          cwd: resolve(__dirname, ".."),
          shell: true,
          stdio: ["pipe", "inherit", "inherit"],
        });
      } else {
        console.error(`  ${key} (${env}): ${err || "failed"}`);
      }
    }
  }
  console.log(`  ${key}`);
}

console.log("\nDone. Run: npm run vercel:prod");

import fs from "fs";

const file = "lib/content/pagesSeed.ts";
let f = fs.readFileSync(file, "utf8");

f = f.replace(
  "    content: `# Privacy Policy\n\n**Last updated — April 2026**\n\n---\n\n## 1. Introduction",
  "    content: `## 1. Introduction"
);

f = f.replace(
  "    content: `# Terms & Conditions\n\n**Last updated — April 2026**\n\n---\n\n## 1. Acceptance of Terms",
  "    content: `## 1. Acceptance of Terms"
);

fs.writeFileSync(file, f);
console.log("pagesSeed updated");

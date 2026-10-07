import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const output = new URL("../build/client/", import.meta.url);
const html = readFileSync(new URL("index.html", output), "utf8");
for (const text of [
  "I build systems",
  "Selected work",
  "Self-hosted Jenkins",
  "New agent. Same context.",
  "Connection beyond coverage.",
  "Let’s connect.",
]) {
  assert.ok(html.includes(text), `Missing prerendered text: ${text}`);
}
assert.match(html, /<html lang="en"/);
assert.match(html, /<meta name="description" content="Chris Park/);
assert.match(html, /<meta property="og:title"/);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
const ids = new Set(
  [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
);
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g))
  assert.ok(ids.has(anchor), `Missing anchor: ${anchor}`);
for (const [, src] of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
  assert.ok(
    existsSync(fileURLToPath(new URL(src.slice(1), output))),
    `Missing asset: ${src}`,
  );
}
for (const url of [
  "/projects/ci-cd/",
  "/career/",
  "https://github.com/chris-park-1004/Handoff",
  "https://devpost.com/software/handoff-v0hbjk",
  "https://chrispark1004.grafana.net/public-dashboards/2d066cd8728b4f5cb5b01ce7be2a505f",
  "https://setprojectday.ca/post/2026/loc8u/",
  "mailto:honggyupark1004@gmail.com",
])
  assert.ok(html.includes(url), `Missing destination: ${url}`);
console.log(
  "PASS: prerendered content, metadata, heading, anchor targets, built assets, and project/contact destinations.",
);

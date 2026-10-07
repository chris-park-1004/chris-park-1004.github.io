import assert from 'node:assert/strict';
import { cpSync, existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join, relative } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const client = join(root, 'redesign/build/client');
function run(args) {
  // npm_execpath works on Windows and Linux without invoking a shell.
  const result = spawnSync(process.execPath, [process.env.npm_execpath, ...args], {
    cwd: root, stdio: 'inherit',
  });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, `npm ${args.join(' ')} failed`);
}
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

run(['run', 'astro', '--', 'build']);
// Keep every legacy page byte-for-byte, including its document anchors.
const legacyPages = new Map(files(dist)
  .filter(path => path.endsWith('.html') && path !== join(dist, 'index.html'))
  .map(path => [path, readFileSync(path)]));
assert.equal(legacyPages.size, 19, 'Expected 19 existing detail pages');
run(['--prefix', 'redesign', 'run', 'typecheck']);
run(['--prefix', 'redesign', 'run', 'build']);
run(['--prefix', 'redesign', 'run', 'verify']);

// Overlay only the prerendered home and its assets. Do not install an SPA
// fallback: real detail URLs must continue to load their existing HTML.
for (const entry of readdirSync(client)) {
  if (entry.startsWith('.') || entry === '__spa-fallback.html') continue;
  const source = join(client, entry);
  const target = join(dist, entry);
  for (const path of files(client).filter(path => relative(client, path).split(/[\\/]/)[0] === entry)) {
    const destination = join(dist, relative(client, path));
    if (existsSync(destination) && !['index.html', 'favicon.svg'].includes(entry)) {
      assert.ok(readFileSync(destination).equals(readFileSync(path)), `Asset collision: ${destination}`);
    }
  }
  cpSync(source, target, { recursive: true });
}
writeFileSync(join(dist, '.nojekyll'), '');
for (const [path, contents] of legacyPages) {
  assert.ok(readFileSync(path).equals(contents), `Legacy page changed: ${path}`);
}
const home = readFileSync(join(dist, 'index.html'), 'utf8');
assert.ok(home.includes('I build systems'), 'React home missing from dist');
for (const id of ['about-card', 'contact-card']) {
  assert.ok(home.includes(`id="${id}"`), `Missing legacy home anchor: ${id}`);
}
assert.equal(files(dist).filter(path => path.endsWith('.html')).length, 20);
console.log('PASS: React home + 19 unchanged legacy pages, document anchors, and assets in dist/.');

import assert from 'node:assert/strict';
import { readFileSync, existsSync, cpSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { parse } from 'parse5';

const root = new URL('../build/client/', import.meta.url);
const contracts = JSON.parse(readFileSync(new URL('page-contracts.json', import.meta.url), 'utf8'));
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const nodes = node => [node, ...(node.childNodes ?? []).flatMap(nodes)];
const text = node => node.nodeName === '#text' ? node.value : ['script', 'style'].includes(node.tagName) ? '' : (node.childNodes ?? []).map(text).join('');
const hash = value => createHash('sha256').update(value.replace(/\s/g, '')).digest('hex');
const urlFile = pathname => new URL(pathname === '/' ? 'index.html' : pathname.replace(/^\/|\/$/g, '') + '/index.html', root);
const documents = new Map();
for (const url of ['/', ...contracts.map(c => c.url)]) {
  const html = readFileSync(urlFile(url), 'utf8');
  const all = nodes(parse(html));
  assert.ok(!/astro-island|data-astro-|\/_astro\//.test(html), `${url}: Astro output remains`);
  assert.equal(all.filter(n => n.tagName === 'h1').length, 1, `${url}: expected one h1`);
  assert.equal(attr(all.find(n => n.tagName === 'html'), 'lang'), 'en');
  assert.ok(all.some(n => n.tagName === 'meta' && attr(n, 'name') === 'description' && attr(n, 'content')), `${url}: missing description`);
  assert.ok(all.some(n => n.tagName === 'meta' && attr(n, 'property') === 'og:title'), `${url}: missing OG title`);
  const ids = all.map(n => attr(n, 'id')).filter(Boolean);
  assert.equal(ids.length, new Set(ids).size, `${url}: duplicate IDs`);
  documents.set(url, { html, all, ids: new Set(ids) });
}
for (const contract of contracts) {
  const { all, ids } = documents.get(contract.url);
  const content = all.find(n => attr(n, 'class')?.split(' ').includes('document-content'));
  assert.ok(content, `${contract.url}: missing document content`);
  assert.equal(hash(text(content)), contract.textHash, `${contract.url}: authored document text changed`);
  assert.equal(text(all.find(n => n.tagName === 'title')), contract.title);
  assert.equal(attr(all.find(n => attr(n, 'name') === 'description'), 'content'), contract.description);
  for (const anchor of contract.anchors) assert.ok(ids.has(anchor), `${contract.url}: lost #${anchor}`);
  const contentNodes = nodes(content);
  assert.deepEqual(contentNodes.map(n => attr(n, 'href')).filter(Boolean), contract.links, `${contract.url}: changed document links`);
  assert.deepEqual(contentNodes.filter(n => n.tagName === 'img').map(n => ({src:attr(n,'src'),alt:attr(n,'alt')})), contract.images, `${contract.url}: changed document images`);
}
for (const [url, { all }] of documents) {
  for (const node of all) {
    const value = attr(node, 'href') ?? attr(node, 'src');
    if (!value || /^(https?:|mailto:|data:)/.test(value)) continue;
    const target = new URL(value, 'https://chris-park-1004.github.io' + url);
    const pathname = target.pathname.endsWith('/') ? target.pathname : target.pathname + '/';
    if (documents.has(pathname)) {
      if (target.hash) assert.ok(documents.get(pathname).ids.has(decodeURIComponent(target.hash.slice(1))), `${url}: broken anchor ${value}`);
    } else {
      assert.ok(existsSync(new URL(target.pathname.slice(1), root)), `${url}: missing local destination ${value}`);
    }
    if (node.tagName === 'img') assert.ok(attr(node, 'alt'), `${url}: missing image alt`);
  }
}
const home = documents.get('/').html;
for (const value of ['I build systems', 'Selected work', 'Self-hosted Jenkins', 'Now I’m moving forward...', 'id="about-card"', 'id="contact-card"']) assert.ok(home.includes(value), `Home missing ${value}`);
cpSync(new URL('__spa-fallback.html', root), new URL('404.html', root));
writeFileSync(new URL('.nojekyll', root), '');
console.log(`PASS: ${documents.size} React pages; document text, metadata, URLs, anchors, links, images, assets, and 404 output.`);

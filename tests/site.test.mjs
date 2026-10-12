import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const routes = [
  '',
  'about',
  'services',
  'technology',
  'staffing',
  'sap',
  'industries',
  'why-us',
  'careers',
  'case-studies',
  'insights',
  'resources',
  'contact',
  'privacy',
  'terms',
];
const base = (process.env.BASE_PATH || '/hireorbits-website').replace(/\/$/, '');

test('all required pages are generated with accessible document structure', () => {
  for (const route of routes) {
    const file = resolve('dist', route, 'index.html');
    assert.ok(existsSync(file), `Missing built page: ${route || 'home'}`);
    const html = readFileSync(file, 'utf8');
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${route}: exactly one main heading`);
    assert.match(html, /<html[^>]*lang="en"/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /<main[^>]*id="main"/);
    assert.doesNotMatch(html, /XXXXXXXXXX|href="#"|lorem ipsum/i);
  }
});

test('every internal link and local asset resolves under the deployment base', () => {
  for (const route of routes) {
    const html = readFileSync(resolve('dist', route, 'index.html'), 'utf8');
    for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|#|data:)/.test(value)) continue;
      const path = decodeURIComponent(value.split(/[?#]/)[0]);
      assert.ok(path.startsWith(`${base}/`), `${route}: wrong deployment base in ${value}`);
      const local = path.slice(base.length).replace(/^\//, '');
      const target = resolve('dist', local.endsWith('/') ? `${local}index.html` : local);
      assert.ok(existsSync(target), `${route}: broken link or asset ${value}`);
      const fragment = value.split('#')[1];
      if (fragment && target.endsWith('.html')) {
        assert.ok(
          readFileSync(target, 'utf8').includes(`id="${fragment}"`),
          `Missing anchor: ${value}`,
        );
      }
    }
  }
});

test('company contact and application links use the supplied addresses', () => {
  const contact = readFileSync('dist/contact/index.html', 'utf8');
  for (const inbox of ['info', 'sales', 'careers', 'support'])
    assert.ok(contact.includes(`mailto:${inbox}@hireorbits.com`));
  assert.match(readFileSync('dist/careers/index.html', 'utf8'), /mailto:careers@hireorbits.com/);
});

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    String(process.pid) + "-" + String(Date.now()),
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Vinit Raj portfolio metadata and content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Vinit Raj — Software Engineer<\/title>/i);
  assert.match(
    html,
    /Portfolio of Vinit Raj, a software engineer building thoughtful digital products/,
  );
  assert.match(html, /Engineering thoughtful digital experiences\./);
  assert.match(html, /Open to meaningful opportunities/);
  assert.match(html, /id="overview"/);
  assert.match(html, /id="work"/);
  assert.match(html, /id="engineering"/);
  assert.match(html, /id="journey"/);
  assert.match(html, /id="about"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"Person"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /Tim Cook|Apple Inc|Rockstar Games/i);
});

test("ships theme, reduced-motion, and overflow safeguards", async () => {
  const [css, layout, data, packageJson] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/data/portfolio.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(css, /:root\[data-theme="light"\]/);
  assert.match(css, /:root\[data-theme="dark"\]/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /overflow-x:\s*clip/);
  assert.match(css, /@media \(max-width:\s*390px\)/);
  assert.match(css, /@media \(max-width:\s*680px\)/);
  assert.match(layout, /vinit-portfolio-theme/);
  assert.match(layout, /prefers-color-scheme:\s*dark/);
  assert.match(data, /portraitImage:\s*"\/images\/vinit-hero-shared-v4\.png"/);
  assert.match(data, /email:\s*""/);
  assert.match(data, /githubUrl:\s*""/);
  assert.match(packageJson, /"framer-motion"/);
  assert.match(packageJson, /"lucide-react"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
  await Promise.all([
    access(
      new URL(
        "../public/documents/server-automation-ansible.pdf",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../public/images/projects/huee-commerce-platform.webp",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../public/images/projects/catalog-operations-platform.webp",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../public/images/projects/latching-automation-platform.webp",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../public/images/projects/ansible-load-balancing.webp",
        import.meta.url,
      ),
    ),
  ]);
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Vinit Raj — Software Engineer<\/title>/i);
  assert.match(
    html,
    /Portfolio of Vinit Raj, a software engineer building thoughtful digital products, automation platforms/,
  );
  assert.match(html, /Engineering thoughtful digital experiences\./);
  assert.match(html, /Open to meaningful opportunities/);
  assert.match(html, /id="overview"/);
  assert.match(html, /id="work"/);
  assert.match(html, /id="engineering"/);
  assert.match(html, /id="about"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /href="mailto:vinitraj@icloud\.com"/);
  assert.match(html, />Huee</);
  assert.match(html, />Catalog</);
  assert.match(html, />Latching</);
  assert.match(html, /Automating Web Servers with Ansible/);
  assert.match(html, /href="\/documents\/server-automation-ansible\.pdf"/);
  assert.match(html, /\/images\/projects\/huee-commerce-platform\.webp/);
  assert.match(html, /\/images\/projects\/catalog-operations-platform\.webp/);
  assert.match(html, /\/images\/projects\/latching-automation-platform\.webp/);
  assert.match(html, /\/images\/projects\/ansible-load-balancing\.webp/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"Person"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /Tim Cook|Apple Inc|Rockstar Games/i);
  assert.doesNotMatch(
    html,
    /Pen Plotter|Backlit Keyboard Integration|Display Volume Dial/i,
  );
  assert.doesNotMatch(html, /Add your first milestone|Add your next chapter/i);
  assert.doesNotMatch(html, /cinematic-intro|glance-panel|overview-rail/i);
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
  assert.match(data, /portraitImage:\s*"\/images\/vinit-hero-shared-v4\.webp"/);
  assert.match(data, /email:\s*"vinitraj@icloud\.com"/);
  assert.match(data, /githubUrl:\s*""/);
  assert.match(packageJson, /"framer-motion"/);
  assert.match(packageJson, /"lucide-react"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

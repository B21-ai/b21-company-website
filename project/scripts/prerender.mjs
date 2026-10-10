import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(path.join(ssrDir, "entry-server.js"));

// One static file per route, so nginx can serve /about and /contact directly
// without any rewrite rules.
const ROUTES = [
  { url: "/", out: "index.html", title: "B21 — SMB AI growth, from opaque to transparent" },
  { url: "/about", out: "about/index.html", title: "About — B21" },
  { url: "/contact", out: "contact/index.html", title: "Contact — B21" },
];

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

for (const route of ROUTES) {
  const html = template
    .replace("<div id=\"root\"></div>", `<div id="root">${render(route.url)}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
  const outPath = path.join(distDir, route.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`Prerendered dist/${route.out}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });

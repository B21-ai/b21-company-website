import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(
  path.join(ssrDir, "entry-server.js")
);

const appHtml = render();

const indexPath = path.join(distDir, "index.html");
const template = fs.readFileSync(indexPath, "utf-8");
const finalHtml = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

fs.writeFileSync(indexPath, finalHtml);
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log("Prerendered dist/index.html");

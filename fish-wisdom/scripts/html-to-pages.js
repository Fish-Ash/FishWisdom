/**
 * 扫描 HTML 目录下所有 .html，提取正文与标题，转换站内链接为 React 路由，生成 pagesData.js
 * 在项目根目录运行: node fish-wisdom/scripts/html-to-pages.js
 */

const fs = require("fs");
const path = require("path");

const HTML_ROOT = path.join(__dirname, "..", "..", "HTML");
const OUT_FILE = path.join(__dirname, "..", "src", "data", "pagesData.js");

function getAllHtmlFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      getAllHtmlFiles(full, list);
    } else if (e.isFile() && e.name.toLowerCase().endsWith(".html")) {
      list.push(full);
    }
  }
  return list;
}

function filePathToRoute(filePath) {
  const relative = path.relative(HTML_ROOT, filePath);
  const normalized = relative.replace(/\\/g, "/");
  const withoutExt = normalized.replace(/\.html$/i, "");
  const route = withoutExt.toLowerCase();
  if (route === "home") return "";
  return route;
}

function routeToHref(route) {
  if (route === "" || route === "home") return "/";
  return "/" + route;
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? m[1].trim() : "";
}

function extractBodyContent(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return "";
  const body = bodyMatch[1];
  const ulEnd = body.indexOf("</ul>");
  if (ulEnd === -1) return body;
  let content = body.slice(ulEnd + 5).trim();
  const scriptIdx = content.indexOf("<script");
  if (scriptIdx !== -1) content = content.slice(0, scriptIdx).trim();
  // 去掉顶部的菜单按钮 div（Layout 已提供）
  content = content.replace(
    /<div[^>]*>[\s\S]*?menu-button[\s\S]*?<\/div>/i,
    ""
  ).trim();
  return content;
}

function resolveHref(baseDirRel, href) {
  const clean = href.replace(/^#.*$/, "").trim();
  if (!clean || clean.startsWith("http") || clean.startsWith("mailto:"))
    return null;
  if (!clean.toLowerCase().endsWith(".html")) return null;
  const base = baseDirRel.replace(/\\/g, "/");
  const joined = base ? base + "/" + clean : clean;
  const normalized = path.normalize(joined).replace(/\\/g, "/");
  const route = normalized.replace(/\.html$/i, "").toLowerCase();
  if (route === "home") return "";
  return route;
}

function convertLinksInContent(content, baseDirRel) {
  return content.replace(
    /<a\s+([^>]*?)href\s*=\s*["']([^"']+)["']([^>]*)>/gi,
    (match, before, href, after) => {
      const resolved = resolveHref(baseDirRel, href);
      if (resolved === null) return match;
      const newHref = routeToHref(resolved);
      return `<a ${before}href="${newHref}"${after}>`;
    }
  );
}

function escapeForJsString(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function run() {
  const files = getAllHtmlFiles(HTML_ROOT);
  const pages = {};
  let skipped = 0;

  for (const filePath of files) {
    const rel = path.relative(HTML_ROOT, filePath);
    const route = filePathToRoute(filePath);
    let html;
    try {
      html = fs.readFileSync(filePath, "utf8");
    } catch (e) {
      console.warn("Skip (read error):", rel);
      skipped++;
      continue;
    }

    const title = extractTitle(html);
    let content = extractBodyContent(html);
    const baseDirRel = path.dirname(rel).replace(/\\/g, "/");
    content = convertLinksInContent(content, baseDirRel);

    const key = route === "" ? "home" : route;
    pages[key] = { title: title || key, content };
  }

  const outDir = path.dirname(OUT_FILE);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const lines = [
    "// 由 scripts/html-to-pages.js 自动生成，请勿手改",
    "export const pagesData = {",
  ];
  for (const [key, { title, content }] of Object.entries(pages)) {
    const safeKey = key.replace(/-/g, "_");
    const contentEscaped = escapeForJsString(content);
    lines.push(
      `  "${key}": { title: ${JSON.stringify(title)}, content: \`${contentEscaped}\` },`
    );
  }
  lines.push("};");

  fs.writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
  console.log(`Done: ${Object.keys(pages).length} pages written to ${OUT_FILE}, skipped ${skipped}.`);
}

run();

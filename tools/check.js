// Structural check of data.js against taxonomy.js, credits.js, tools/images.txt and
// images/. Exits non-zero on anything that would reach the published page broken.
// Usage: node tools/check.js
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, "..");
global.window = {};
for (const f of ["taxonomy.js", "credits.js", "data.js", "plates.js", "papers.js"])
  new Function(fs.readFileSync(path.join(root, f), "utf8"))();
const M = window.MATERIALS, C = window.CREDITS, P = window.PLATES || [], R = window.PAPERS || [];
const CATS = window.CATS, KINDS = window.KINDS, THEMES = window.THEMES || {};
let bad = 0;
const fail = msg => { console.log(msg); bad++; };
const offsite = [];   // cards whose read-more is not Wikipedia, which is allowed but worth seeing

const cats = {};
const names = {};
for (const m of M) {
  cats[m.cat] = (cats[m.cat] || 0) + 1;
  for (const f of ["id", "cat", "name", "sub", "hook", "stats", "uses"])
    if (!m[f]) fail("MISSING " + f + " on " + m.id);
  if (!CATS[m.cat]) fail("unknown category on " + m.id + ": " + m.cat);
  if (!/^[a-z0-9]+$/.test(m.id)) fail("id is not lower-case alphanumeric: " + m.id);
  (names[m.name] = names[m.name] || []).push(m.id);
  if (m.img) {
    if (!C[m.img]) fail("no credit: " + m.id);
    else if (!fs.existsSync(path.join(root, "images", C[m.img].file))) fail("no file: " + C[m.img].file);
  } else if (!m.swatch) fail("no image or swatch: " + m.id);
  if (!Array.isArray(m.stats) || m.stats.length !== 3) fail("stats should be three pairs on " + m.id);
  if (m.stats.some(s => s.length !== 2)) fail("bad stat on " + m.id);
  if (m.link && !/^https?:\/\//.test(m.link)) fail("link is not a URL on " + m.id);
  if (m.link && !/^https:\/\/en\.wikipedia\.org\/wiki\//.test(m.link)) offsite.push(m.id);
  if (m.src && !(Array.isArray(m.src) && m.src.length === 2 && /^https?:\/\//.test(m.src[1])))
    fail("src should be [label, url] on " + m.id);
  for (const t of m.tags || []) if (!THEMES[t]) fail("unknown theme tag on " + m.id + ": " + t);
  for (const f of ["name", "sub", "hook", "uses"])
    if (typeof m[f] === "string" && m[f].includes('"')) fail("double quote in " + f + " on " + m.id);
}

// Plates: a figure or a credited image, the workshops it belongs to, the cards it explains.
const mids = new Set(M.map(m => m.id));
for (const p of P) {
  for (const f of ["id", "name", "sub", "hook", "stats", "cats", "cards"])
    if (!p[f]) fail("MISSING " + f + " on plate " + p.id);
  if (!/^[a-z0-9]+$/.test(p.id)) fail("plate id is not lower-case alphanumeric: " + p.id);
  if (mids.has(p.id)) fail("plate id collides with a card: " + p.id);
  if (!(Array.isArray(p.stats) && p.stats.length === 3 && p.stats.every(s => s.length === 2))) fail("stats should be three pairs on plate " + p.id);
  for (const c of p.cats || []) if (!CATS[c]) fail("unknown category on plate " + p.id + ": " + c);
  for (const t of p.tags || []) if (!THEMES[t]) fail("unknown theme tag on plate " + p.id + ": " + t);
  for (const c of p.cards || []) if (!mids.has(c)) fail("plate " + p.id + " explains a card that does not exist: " + c);
  if (p.link && !/^https?:\/\//.test(p.link)) fail("link is not a URL on plate " + p.id);
  if (p.src && !(Array.isArray(p.src) && p.src.length === 2 && /^https?:\/\//.test(p.src[1]))) fail("src should be [label, url] on plate " + p.id);
  for (const f of ["name", "sub", "hook"]) if (p[f].includes('"')) fail("double quote in " + f + " on plate " + p.id);
  if (p.figure) {
    const f = p.figure;
    if (!(f.x && f.y && Array.isArray(f.zones) && f.zones.length)) fail("figure on plate " + p.id + " needs x, y and zones");
    for (const z of f.zones || []) {
      if (!(z.name && z.phases && z.structure && z.pts && z.pts.length >= 3)) fail("zone " + z.id + " on plate " + p.id + " is incomplete");
      for (const [x, y] of z.pts || [])
        if (x < f.x[0] || x > f.x[1] || y < f.y[0] || y > f.y[1]) fail("zone " + z.id + " on plate " + p.id + " leaves the axes at " + x + "," + y);
    }
  } else if (p.img) {
    if (!C[p.img]) fail("no credit: plate " + p.id);
    else if (!fs.existsSync(path.join(root, "images", C[p.img].file))) fail("no file: " + C[p.img].file);
  } else fail("plate " + p.id + " has neither a figure nor an image");
}

// Papers: a citation, what it showed, and the cards it touches.
for (const r of R) {
  for (const f of ["id", "kind", "material", "title", "authors", "journal", "year", "doi", "why", "implies", "cats"])
    if (r[f] == null || r[f] === "") fail("paper " + (r.id || "?") + " is missing " + f);
  if (!/^[a-z0-9]+$/.test(r.id || "")) fail("paper id is not [a-z0-9]+: " + r.id);
  if (!["founding", "recent"].includes(r.kind)) fail("paper kind is founding or recent: " + r.id);
  if (!Number.isInteger(r.year) || r.year < 1800 || r.year > 2100) fail("paper year is not a year: " + r.id);
  if (!/^10\.\d{4,9}\/\S+$/.test(r.doi || "")) fail("paper doi is not a DOI: " + r.id + " " + r.doi);
  if (r.oa && !/^https?:\/\//.test(r.oa)) fail("paper oa is not a URL: " + r.id);
  for (const c of r.cats || []) if (!CATS[c]) fail("paper " + r.id + " names an undeclared workshop: " + c);
  for (const id of r.cards || []) if (!M.some(m => m.id === id)) fail("paper " + r.id + " names a card that does not exist: " + id);
  for (const f of ["material", "title", "authors", "journal", "why", "implies"])
    if (/"/.test(r[f] || "")) fail("double quote in " + f + " of paper " + r.id);
  if ((r.why || "").length < 80) fail("paper " + r.id + ": why is too short to say anything");
}
const dupDoi = R.map(r => r.doi).filter((x, i, a) => a.indexOf(x) !== i);
if (dupDoi.length) fail("the same DOI twice in papers.js: " + dupDoi);

const ids = M.map(m => m.id).concat(P.map(p => p.id), R.map(r => r.id));
const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
if (dup.length) fail("DUPLICATE ids: " + dup);
const dupNames = Object.entries(names).filter(([, v]) => v.length > 1);
if (dupNames.length) fail("duplicate names: " + JSON.stringify(dupNames));

const unused = Object.keys(C).filter(k => !ids.includes(k));
if (unused.length) console.log("credits not used by any card: " + unused.join(", "));

const titles = {};
for (const [id, c] of Object.entries(C)) (titles[c.title] = titles[c.title] || []).push(id);
const shared = Object.entries(titles).filter(([, v]) => v.length > 1);
if (shared.length) fail("SHARED source photographs: " + JSON.stringify(shared));

for (const [id, c] of Object.entries(C)) {
  if (!(c.file && c.caption && c.title && c.artist && c.license && c.page && c.site)) fail("incomplete credit: " + id);
  if (c.kind && c.kind !== "photo" && !KINDS[c.kind]) fail("unknown picture kind on " + id + ": " + c.kind);
  if (!c.w || !c.h) fail("no image dimensions on " + id + " (re-run tools/fetch_images.py)");
  if (/\bND\b|NonCommercial|\bNC\b|fair use/i.test(c.license)) fail("licence is not freely reusable on " + id + ": " + c.license);
  if (c.caption.includes("|")) fail("pipe in caption on " + id);
}

// images.txt is the input to credits.js, so the two have to agree with data.js.
const lines = fs.readFileSync(path.join(root, "tools", "images.txt"), "utf8")
  .split("\n").map(l => l.trim()).filter(l => l && !l.startsWith("#"));
const imgIds = lines.map(l => l.split("|")[0]);
for (const l of lines) {
  const p = l.split("|");
  if (p[1] === "commons" ? p.length !== 5 : p.length !== 8) fail("wrong column count in images.txt: " + l);
  if (p[1] !== "commons" && !/^https?:\/\//.test(p[2])) fail("ref is not a URL in images.txt: " + l);
  if (p[1] !== "commons" && !/^https?:\/\//.test(p[7])) fail("page is not a URL in images.txt: " + l);
}
const onCommons = lines.filter(l => l.split("|")[1] === "commons").length;
const imgDup = imgIds.filter((x, i) => imgIds.indexOf(x) !== i);
if (imgDup.length) fail("duplicate ids in images.txt: " + imgDup);
const withImg = new Set(M.filter(m => m.img).map(m => m.id).concat(P.filter(p => p.img).map(p => p.id)));
const missingLine = ids.filter(i => withImg.has(i) && !imgIds.includes(i));
if (missingLine.length) fail("no images.txt line for: " + missingLine.join(", "));
const strayLine = imgIds.filter(i => !ids.includes(i));
if (strayLine.length) fail("images.txt lines for cards that no longer exist: " + strayLine.join(", "));

// Files on disk that nothing points at: dead weight in a 97 MB repository.
const used = new Set(Object.values(C).map(c => c.file));
const stray = fs.readdirSync(path.join(root, "images")).filter(f => !used.has(f));
if (stray.length) console.log("image files nothing references: " + stray.join(", "));

const tagged = {};
for (const m of M) for (const t of m.tags || []) tagged[t] = (tagged[t] || 0) + 1;

console.log("still on Wikimedia Commons:", onCommons, "of", lines.length, "pictures");
console.log("total:", M.length, "| plates:", P.length, "| papers:", R.length, "| photos:", M.filter(m => m.img).length,
            "| swatches:", M.filter(m => m.swatch).length,
            "| with a second source:", M.filter(m => m.src).length);
console.log("by category:", JSON.stringify(cats));
console.log("themes:", JSON.stringify(tagged));
if (offsite.length) console.log("read-more links that are not Wikipedia: " + offsite.join(", "));
console.log(bad ? ("PROBLEMS: " + bad) : "all checks passed");
process.exit(bad ? 1 : 0);

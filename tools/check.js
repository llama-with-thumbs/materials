// Structural check of data.js against taxonomy.js, credits.js, tools/images.txt and
// images/. Exits non-zero on anything that would reach the published page broken.
// Usage: node tools/check.js
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, "..");
global.window = {};
for (const f of ["taxonomy.js", "credits.js", "data.js"])
  new Function(fs.readFileSync(path.join(root, f), "utf8"))();
const M = window.MATERIALS, C = window.CREDITS;
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

const ids = M.map(m => m.id);
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
  if (!(c.file && c.caption && c.title && c.artist && c.license && c.page)) fail("incomplete credit: " + id);
  if (c.kind && c.kind !== "photo" && !KINDS[c.kind]) fail("unknown picture kind on " + id + ": " + c.kind);
  if (!c.w || !c.h) fail("no image dimensions on " + id + " (re-run tools/fetch_images.py)");
  if (/\bND\b|NonCommercial|\bNC\b|fair use/i.test(c.license)) fail("licence is not freely reusable on " + id + ": " + c.license);
  if (c.caption.includes("|")) fail("pipe in caption on " + id);
}

// images.txt is the input to credits.js, so the two have to agree with data.js.
const lines = fs.readFileSync(path.join(root, "tools", "images.txt"), "utf8")
  .split("\n").map(l => l.trim()).filter(l => l && !l.startsWith("#"));
const imgIds = lines.map(l => l.split("|")[0]);
const imgDup = imgIds.filter((x, i) => imgIds.indexOf(x) !== i);
if (imgDup.length) fail("duplicate ids in images.txt: " + imgDup);
const missingLine = ids.filter(i => M.find(m => m.id === i).img && !imgIds.includes(i));
if (missingLine.length) fail("no images.txt line for: " + missingLine.join(", "));
const strayLine = imgIds.filter(i => !ids.includes(i));
if (strayLine.length) fail("images.txt lines for cards that no longer exist: " + strayLine.join(", "));

// Files on disk that nothing points at: dead weight in a 97 MB repository.
const used = new Set(Object.values(C).map(c => c.file));
const stray = fs.readdirSync(path.join(root, "images")).filter(f => !used.has(f));
if (stray.length) console.log("image files nothing references: " + stray.join(", "));

const tagged = {};
for (const m of M) for (const t of m.tags || []) tagged[t] = (tagged[t] || 0) + 1;

console.log("total:", M.length, "| photos:", M.filter(m => m.img).length,
            "| swatches:", M.filter(m => m.swatch).length,
            "| with a second source:", M.filter(m => m.src).length);
console.log("by category:", JSON.stringify(cats));
console.log("themes:", JSON.stringify(tagged));
if (offsite.length) console.log("read-more links that are not Wikipedia: " + offsite.join(", "));
console.log(bad ? ("PROBLEMS: " + bad) : "all checks passed");
process.exit(bad ? 1 : 0);

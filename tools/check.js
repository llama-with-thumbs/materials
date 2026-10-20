// Structural check of data.js against credits.js and images/.
// Usage: node tools/check.js
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, "..");
global.window = {};
new Function(fs.readFileSync(root + "/credits.js", "utf8"))();
new Function(fs.readFileSync(root + "/data.js", "utf8"))();
const M = window.MATERIALS, C = window.CREDITS;
let bad = 0;
const cats = {};
for (const m of M) {
  cats[m.cat] = (cats[m.cat] || 0) + 1;
  for (const f of ["id", "cat", "name", "sub", "hook", "stats", "uses"]) if (!m[f]) { console.log("MISSING " + f + " on " + m.id); bad++; }
  if (m.img) {
    if (!C[m.img]) { console.log("no credit: " + m.id); bad++; }
    else if (!fs.existsSync(path.join(root, "images", C[m.img].file))) { console.log("no file: " + C[m.img].file); bad++; }
  } else if (!m.swatch) { console.log("no image or swatch: " + m.id); bad++; }
  if (m.stats.some(s => s.length !== 2)) { console.log("bad stat on " + m.id); bad++; }
}
const ids = M.map(m => m.id); const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
if (dup.length) { console.log("DUPLICATE ids: " + dup); bad++; }
const unused = Object.keys(C).filter(k => !ids.includes(k));
if (unused.length) console.log("credits not used by any card: " + unused.join(", "));
const titles = {};
for (const [id, c] of Object.entries(C)) (titles[c.title] = titles[c.title] || []).push(id);
const shared = Object.entries(titles).filter(([, v]) => v.length > 1);
if (shared.length) { console.log("SHARED source photographs: " + JSON.stringify(shared)); bad++; }
const incomplete = Object.entries(C).filter(([, c]) => !(c.file && c.caption && c.title && c.artist && c.license && c.page));
if (incomplete.length) { console.log("incomplete credits: " + incomplete.map(([k]) => k).join(", ")); bad++; }
console.log("total:", M.length, "| photos:", M.filter(m => m.img).length, "| swatches:", M.filter(m => m.swatch).length);
console.log("by category:", JSON.stringify(cats));
console.log(bad ? ("PROBLEMS: " + bad) : "all checks passed");
process.exit(bad ? 1 : 0);

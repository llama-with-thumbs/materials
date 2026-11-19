// Structural check of data.js against taxonomy.js, credits.js, tools/images.txt and
// images/. Exits non-zero on anything that would reach the published page broken.
// Usage: node tools/check.js
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, "..");
global.window = {};
for (const f of ["taxonomy.js", "credits.js", "data.js", "plates.js", "papers.js", "library.js", "lattices.js", "classes.js"])
  new Function(fs.readFileSync(path.join(root, f), "utf8"))();
const M = window.MATERIALS, C = window.CREDITS, P = window.PLATES || [], R = window.PAPERS || [], L = window.LIBRARY || [];
const LAT = window.LATTICES || [], KL = window.CLASSES || [];
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
  // Extra views: each is a credit id of its own, with its own file and images.txt line.
  if (m.extra && !Array.isArray(m.extra)) fail("extra should be a list on " + m.id);
  for (const e of m.extra || []) {
    if (typeof e !== "string") fail("extra image id is not a string on " + m.id);
    else if (!C[e]) fail("no credit for extra image " + e + " on " + m.id);
    else if (!fs.existsSync(path.join(root, "images", C[e].file))) fail("no file for extra image " + e + " on " + m.id);
  }
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
    const hasZones = Array.isArray(f.zones) && f.zones.length;
    const hasPoints = Array.isArray(f.points) && f.points.length;
    if (!(f.x && f.y && (hasZones || hasPoints))) fail("figure on plate " + p.id + " needs x, y and zones or points");
    for (const z of f.zones || []) {
      if (!(z.name && z.phases && z.structure && z.pts && z.pts.length >= 3)) fail("zone " + z.id + " on plate " + p.id + " is incomplete");
      for (const [x, y] of z.pts || [])
        if (x < f.x[0] || x > f.x[1] || y < f.y[0] || y > f.y[1]) fail("zone " + z.id + " on plate " + p.id + " leaves the axes at " + x + "," + y);
    }
    for (const pt of f.points || []) {
      if (!(pt.name && typeof pt.x === "number" && typeof pt.y === "number")) fail("point on plate " + p.id + " needs a name and numeric x, y");
      else if (pt.x < f.x[0] || pt.x > f.x[1] || pt.y < f.y[0] || pt.y > f.y[1]) fail("point " + pt.name + " on plate " + p.id + " leaves the axes");
      if (pt.id && !mids.has(pt.id)) fail("point " + pt.name + " on plate " + p.id + " links to a card that does not exist: " + pt.id);
      if (/"/.test(pt.name || "")) fail("double quote in a point name on plate " + p.id);
    }
    // The optional layers of a field diagram: lettered marks, pinnable alloys, zooms, lever pairs.
    const inAxes = (x, y) => !(x < f.x[0] || x > f.x[1] || y < f.y[0] || y > f.y[1]);
    for (const m of f.marks || []) {
      if (!(m.t && m.note && typeof m.x === "number" && typeof m.y === "number")) fail("mark on plate " + p.id + " needs t, note and numeric x, y");
      else if (!inAxes(m.x, m.y)) fail("mark " + m.t + " on plate " + p.id + " leaves the axes");
      if (/"/.test((m.t || "") + (m.note || ""))) fail("double quote in mark " + m.t + " on plate " + p.id);
    }
    for (const a of f.alloys || []) {
      if (!(a.name && typeof a.x === "number")) fail("alloy on plate " + p.id + " needs a name and numeric x");
      else if (a.x < f.x[0] || a.x > f.x[1]) fail("alloy " + a.name + " on plate " + p.id + " leaves the axis");
      if (a.id && !mids.has(a.id)) fail("alloy " + a.name + " on plate " + p.id + " links to a card that does not exist: " + a.id);
      if (/"/.test((a.name || "") + (a.note || ""))) fail("double quote in alloy " + a.name + " on plate " + p.id);
    }
    for (const z of f.zooms || []) {
      if (!(z.name && Array.isArray(z.x) && Array.isArray(z.y))) fail("zoom on plate " + p.id + " needs a name, x and y");
      else if (!(inAxes(z.x[0], z.y[0]) && inAxes(z.x[1], z.y[1]) && z.x[0] < z.x[1] && z.y[0] < z.y[1])) fail("zoom " + z.name + " on plate " + p.id + " is not a window inside the axes");
      for (const [x, y, t] of z.labels || []) if (!(typeof x === "number" && typeof y === "number" && t)) fail("bad label in zoom " + z.name + " on plate " + p.id);
    }
    const tickOk = t => Array.isArray(t) && t.every(([v, l]) => typeof v === "number" && typeof l === "string" && !/"/.test(l));
    for (const st of f.styles || []) {
      if (!(st.key && st.name && /^[a-z0-9]+$/.test(st.key))) fail("style on plate " + p.id + " needs a lower-case key and a name");
      for (const k of ["xticks", "yticks"]) if (st[k] && !tickOk(st[k])) fail("bad " + k + " in style " + st.key + " on plate " + p.id);
      for (const k of ["x2", "y2"]) if (st[k] && !(st[k].label && tickOk(st[k].ticks))) fail("bad " + k + " in style " + st.key + " on plate " + p.id);
      if (st.y && !(inAxes(f.x[0], st.y[0]) && inAxes(f.x[0], st.y[1]) && st.y[0] < st.y[1])) fail("style " + st.key + " on plate " + p.id + " leaves the y axis");
      if (st.x && !(inAxes(st.x[0], f.y[0]) && inAxes(st.x[1], f.y[0]) && st.x[0] < st.x[1])) fail("style " + st.key + " on plate " + p.id + " leaves the x axis");
      for (const m of st.marks || []) {
        if (!(m.t && m.note && typeof m.x === "number" && typeof m.y === "number")) fail("mark in style " + st.key + " on plate " + p.id + " needs t, note and numeric x, y");
        else if (!inAxes(m.x, m.y)) fail("mark " + m.t + " in style " + st.key + " on plate " + p.id + " leaves the axes");
        if (/"/.test((m.t || "") + (m.note || ""))) fail("double quote in mark " + m.t + " of style " + st.key + " on plate " + p.id);
      }
      for (const [x, y, t] of st.labels || []) if (!(typeof x === "number" && typeof y === "number" && t && !/"/.test(t))) fail("bad label in style " + st.key + " on plate " + p.id);
      for (const l of st.lines || []) for (const [x, y] of l.pts || []) if (!inAxes(x, y)) fail("a line in style " + st.key + " on plate " + p.id + " leaves the axes");
      for (const k of Object.keys(st.names || {})) if (!(f.zones || []).some(z => z.id === k)) fail("style " + st.key + " on plate " + p.id + " names a zone that does not exist: " + k);
      if (/"/.test((st.title || "") + (st.note || ""))) fail("double quote in style " + st.key + " on plate " + p.id);
    }
    for (const z of f.zones || []) {
      if (z.pair && !(Array.isArray(z.pair) && z.pair.length === 2 && z.pair.every(n => typeof n === "string" && n))) fail("zone " + z.id + " on plate " + p.id + " has a pair that is not two names");
      if (z.pair && z.one) fail("zone " + z.id + " on plate " + p.id + " is one phase and has a lever pair");
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

// The library: a Bauhaus primary text, a citation with a reading link, not a material.
const KINDS_TEXT = ["manifesto", "Bauhaus book", "essay", "book", "journal", "diary", "lecture", "catalogue"];
for (const t of L) {
  for (const f of ["id", "author", "role", "title", "year", "kind", "what", "cats"])
    if (t[f] == null || t[f] === "") fail("library text " + (t.id || "?") + " is missing " + f);
  if (!/^[a-z0-9]+$/.test(t.id || "")) fail("library id is not [a-z0-9]+: " + t.id);
  if (!Number.isInteger(t.year) || t.year < 1900 || t.year > 2000) fail("library year is not a Bauhaus-era year: " + t.id);
  if (!KINDS_TEXT.includes(t.kind)) fail("library " + t.id + " has an unknown kind: " + t.kind);
  if (typeof t.pd !== "boolean") fail("library " + t.id + " needs pd: true or false");
  if (t.read && !/^https?:\/\//.test(t.read)) fail("library read is not a URL: " + t.id);
  if (t.pd && !t.read && !t.held) fail("library " + t.id + " is public domain but has no reading link or holding institution");
  for (const c of t.cats || []) if (!CATS[c]) fail("library " + t.id + " names an undeclared workshop: " + c);
  for (const id of t.cards || []) if (!M.some(m => m.id === id)) fail("library " + t.id + " names a card that does not exist: " + id);
  for (const f of ["author", "role", "title", "english", "what", "held"])
    if (/"/.test(t[f] || "")) fail("double quote in " + f + " of library text " + t.id);
  if ((t.what || "").length < 40) fail("library " + t.id + ": what is too short to say anything");
}

// The lattices shelf: the system, the key, Bravais's fourteen, the metal structures, the groups.
const KINDS_LAT = { intro: [], key: [], lattice: ["system", "centring", "found", "cell"], structure: ["found", "cell"], groups: [] };
const fourteen = LAT.filter(l => l.kind === "lattice");
if (LAT.length && fourteen.length !== 14) fail("there are fourteen Bravais lattices, not " + fourteen.length);
for (const l of LAT) {
  if (!KINDS_LAT[l.kind]) fail("lattice card " + (l.id || "?") + " has an unknown kind: " + l.kind);
  for (const f of ["id", "symbol", "name", "sub", "hook", "stats", "link"].concat(KINDS_LAT[l.kind] || []))
    if (l[f] == null || l[f] === "") fail("lattice " + (l.id || "?") + " is missing " + f);
  if (!/^[a-z0-9]+$/.test(l.id || "")) fail("lattice id is not [a-z0-9]+: " + l.id);
  if (!Array.isArray(l.stats) || l.stats.length !== 3) fail("lattice " + l.id + " needs exactly three stats");
  if (l.cell) for (const k of ["a", "b", "c", "alpha", "beta", "gamma"]) if (!(l.cell[k] > 0)) fail("lattice " + l.id + " cell lacks " + k);
  for (const p of l.extra || []) if (p.length !== 3 || p.some(v => v < 0 || v > 1)) fail("lattice " + l.id + " has a centring point outside the cell");
  for (const id of l.cards || []) if (!M.some(m => m.id === id)) fail("lattice " + l.id + " names a card that does not exist: " + id);
  if (!/^https:\/\/en\.wikipedia\.org\/wiki\//.test(l.link || "")) fail("lattice " + l.id + " link is not English Wikipedia");
  for (const f of ["name", "sub", "hook", "found"]) if (/"/.test(l[f] || "")) fail("double quote in " + f + " of lattice " + l.id);
  if ((l.hook || "").length < 200) fail("lattice " + l.id + ": hook is too short to teach anything");
}
const dupSym = fourteen.map(l => l.symbol).filter((x, i, a) => a.indexOf(x) !== i);
if (dupSym.length) fail("the same Pearson symbol twice in lattices.js: " + dupSym);

// The classes: metal, ceramic and the rest, each with its sketch and its workshops.
for (const k of KL) {
  for (const f of ["id", "name", "sub", "hook", "stats", "cats", "cards", "sketch", "link"])
    if (k[f] == null || k[f] === "") fail("class " + (k.id || "?") + " is missing " + f);
  if (!/^[a-z0-9]+$/.test(k.id || "")) fail("class id is not [a-z0-9]+: " + k.id);
  if (!Array.isArray(k.stats) || k.stats.length !== 3) fail("class " + k.id + " needs exactly three stats");
  for (const c of k.cats || []) if (!CATS[c]) fail("class " + k.id + " names an undeclared workshop: " + c);
  for (const id of k.cards || []) if (!M.some(m => m.id === id)) fail("class " + k.id + " names a card that does not exist: " + id);
  if (!/^https:\/\/en\.wikipedia\.org\/wiki\//.test(k.link || "")) fail("class " + k.id + " link is not English Wikipedia");
  for (const f of ["name", "sub", "hook"]) if (/"/.test(k[f] || "")) fail("double quote in " + f + " of class " + k.id);
  if ((k.hook || "").length < 300) fail("class " + k.id + ": hook is too short to explain anything");
}

const ids = M.map(m => m.id).concat(P.map(p => p.id), R.map(r => r.id), L.map(t => t.id), LAT.map(l => l.id), KL.map(k => k.id));
const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
if (dup.length) fail("DUPLICATE ids: " + dup);
const extraIds = M.flatMap(m => m.extra || []);
const extraDup = extraIds.filter((x, i) => extraIds.indexOf(x) !== i);
if (extraDup.length) fail("the same extra image id on two cards: " + extraDup);
for (const e of extraIds) if (ids.includes(e)) fail("extra image id collides with a card id: " + e);
const dupNames = Object.entries(names).filter(([, v]) => v.length > 1);
if (dupNames.length) fail("duplicate names: " + JSON.stringify(dupNames));

const credited = new Set(ids.concat(extraIds));
const unused = Object.keys(C).filter(k => !credited.has(k));
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
const withImg = new Set(M.filter(m => m.img).map(m => m.id).concat(P.filter(p => p.img).map(p => p.id), extraIds));
const missingLine = [...withImg].filter(i => !imgIds.includes(i));
if (missingLine.length) fail("no images.txt line for: " + missingLine.join(", "));
const strayLine = imgIds.filter(i => !withImg.has(i) && !ids.includes(i));
if (strayLine.length) fail("images.txt lines for cards that no longer exist: " + strayLine.join(", "));

// Files on disk that nothing points at: dead weight in a 97 MB repository.
const used = new Set(Object.values(C).map(c => c.file));
const stray = fs.readdirSync(path.join(root, "images")).filter(f => !used.has(f));
if (stray.length) console.log("image files nothing references: " + stray.join(", "));

const tagged = {};
for (const m of M) for (const t of m.tags || []) tagged[t] = (tagged[t] || 0) + 1;

console.log("still on Wikimedia Commons:", onCommons, "of", lines.length, "pictures");
console.log("total:", M.length, "| plates:", P.length, "| papers:", R.length, "| library:", L.length, "| lattices:", LAT.length, "| classes:", KL.length, "| photos:", M.filter(m => m.img).length,
            "| swatches:", M.filter(m => m.swatch).length,
            "| with a second source:", M.filter(m => m.src).length);
console.log("by category:", JSON.stringify(cats));
console.log("themes:", JSON.stringify(tagged));
if (offsite.length) console.log("read-more links that are not Wikipedia: " + offsite.join(", "));
console.log(bad ? ("PROBLEMS: " + bad) : "all checks passed");
process.exit(bad ? 1 : 0);

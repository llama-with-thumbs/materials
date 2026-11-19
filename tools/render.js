// Minimal DOM stub: runs app.js end to end, dumps the rendered grid and exercises
// the sort select, the search box, the filter pills and the two jump buttons.
// No browser needed, so it can run in CI.
// Usage: node tools/render.js [out.html]
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, "..");
const outFile = process.argv[2] || path.join(require('os').tmpdir(), "materials-render.html");
const handlers = {};            // events bound to the window
const bound = new Map();        // events bound to an element

function el(name) {
  const node = {
    name, innerHTML: "", textContent: "", value: "", dataset: {}, hidden: false, disabled: false,
    addEventListener(t, f) {
      (handlers[t] = handlers[t] || []).push(f);
      if (!bound.has(node)) bound.set(node, {});
      (bound.get(node)[t] = bound.get(node)[t] || []).push(f);
    },
    setAttribute() {}, getAttribute() { return "dark"; },
    querySelectorAll() { return []; }, querySelector() { return null; },
    showModal() {}, close() {}
  };
  return node;
}
const nodes = {
  grid: el("grid"), count: el("count"), search: el("search"), theme: el("theme"),
  lb: el("lb"), "lb-inner": el("lb-inner"), sort: el("sort"),
  "to-top": el("to-top"), "to-end": el("to-end")
};
const jump = el("jump"), filters = el("filters"), themes = el("themes");
global.window = {};
global.document = {
  getElementById: id => nodes[id] || el(id),
  querySelector: s => ({ ".jump": jump, ".filters": filters, ".themes": themes }[s] || el(s)),
  querySelectorAll: () => [],
  documentElement: el("html"), body: { scrollHeight: 40000 }
};
global.matchMedia = () => ({ matches: false });
global.localStorage = { getItem() { return null; }, setItem() {} };
global.scrollTo = () => {};
global.scrollY = 0;
global.innerHeight = 900;
global.addEventListener = () => {};
global.location = { hash: "", pathname: "/", search: "" };
global.history = { replaceState(_s, _t, url) { global.location.hash = String(url).startsWith("#") ? url : ""; } };

for (const f of ["taxonomy.js", "credits.js", "data.js", "plates.js", "papers.js", "library.js", "wheel.js", "lattices.js", "classes.js", "added.js", "swatch.js", "figures.js", "drawings.js", "app.js"])
  new Function(fs.readFileSync(path.join(root, f), "utf8"))();

const html = nodes.grid.innerHTML;
fs.writeFileSync(outFile, html);
const ids = h => (h.match(/data-id="([^"]+)"/g) || []).map(s => s.slice(9, -1));
let bad = 0;
const want = (label, ok, got) => { console.log(`${ok ? "ok  " : "FAIL"} ${label}${got === undefined ? "" : ": " + got}`); if (!ok) bad++; };

console.log("written to:", outFile);
console.log("cards:", (html.match(/<article/g) || []).length,
            "| imgs:", (html.match(/<img /g) || []).length,
            "| svgs:", (html.match(/<svg /g) || []).length);
console.log("count label:", nodes.count.textContent);
want("no undefined or NaN in the output", !/undefined|NaN/.test(html));
want("every img carries width and height",
     (html.match(/<img /g) || []).length === (html.match(/<img [^>]*width="\d+" height="\d+"/g) || []).length);
console.log("sort options:", nodes.sort.innerHTML.replace(/<[^>]+>/g, " ").trim());
console.log("jump hidden:", jump.hidden, "| top disabled:", nodes["to-top"].disabled,
            "| end disabled:", nodes["to-end"].disabled);
const order = ids(html);
console.log("default first 3:", order.slice(0, 3).join(", "), "| last 3:", order.slice(-3).join(", "));

// ---- sorting ----
const fire = v => {
  nodes.sort.value = v;
  bound.get(nodes.sort).change.forEach(f => f());
  const o = ids(nodes.grid.innerHTML);
  console.log(`${v}: ${o.length} cards | first ${o.slice(0, 2).join(", ")} | last ${o.slice(-2).join(", ")}`);
  want(`sort ${v} keeps every card`, o.length === order.length, o.length);
};
["new", "cat", "az", "old"].forEach(fire);

// ---- searching ----
const search = q => {
  nodes.search.value = q;
  bound.get(nodes.search).input.forEach(f => f());
  return new Promise(res => setTimeout(() => res(ids(nodes.grid.innerHTML)), 180));
};

// ---- filtering ----
const click = (bar, cat) => {
  bound.get(bar).click.forEach(f => f({ target: { closest: () => ({ dataset: { cat } }) } }));
  return ids(nodes.grid.innerHTML);
};

(async () => {
  const M = global.window.MATERIALS, P = global.window.PLATES || [], R = global.window.PAPERS || [], L = global.window.LIBRARY || [];
  const LAT = global.window.LATTICES || [], KL = global.window.CLASSES || [];
  want("every plate renders", P.every(p => html.includes(`data-id="${p.id}"`)), P.length);
  want("every paper renders", R.every(r => html.includes(`data-id="${r.id}"`) && html.includes(`doi.org/${r.doi}`)), R.length);
  want("every library text renders", L.every(t => html.includes(`data-id="${t.id}"`)), L.length);
  want("every lattice card renders", LAT.every(l => html.includes(`data-id="${l.id}"`)), LAT.length);
  want("every Bravais lattice draws its cell", LAT.filter(l => l.kind === "lattice").every(l => html.includes(`aria-label="the ${l.name.toLowerCase()} cell"`)));
  want("the table and the commas draw", html.includes('class="cell table"') && html.includes('class="cell glide"'));
  const packed = LAT.filter(l => l.kind === "lattice" || l.kind === "structure");
  want("every packing view carries its centre marks and ties, and the card its two switches", packed.every(l => {
    const card = html.slice(html.indexOf(`data-id="${l.id}"`));
    const art = card.slice(0, card.indexOf("</article>"));
    return (art.match(/<g class="mids"><circle/g) || []).length >= 1 && (art.match(/<g class="ties"><line/g) || []).length >= 1
      && art.includes('data-opt="mids"') && art.includes('data-opt="ties"')
      && (l.kind !== "lattice" || (art.includes('<g class="balls"><circle') && art.includes('data-opt="balls"')));
  }), packed.length);
  want("every class renders with its sketch", KL.every(k => html.includes(`data-id="${k.id}"`) && html.includes(`class="sketch ${k.sketch}"`)), KL.length);
  want("a drawn plate carries its readout", P.filter(p => p.figure).every(p => html.includes(`data-fig="${p.id}"`) && html.includes('class="readout"')));
  want("the wheel renders on its shelf", html.includes('id="wheel-root"') && html.includes('id="wheel-panel"') && html.includes('data-id="wheel"'));
  const plain = await search("rope");
  want("search finds something for rope", plain.length > 5, plain.length);
  const folded = await search("pina");
  const pina = M.some(m => m.name.includes("ñ"));
  want("accent-folded search finds Piña", !pina || folded.includes("pina"), folded.join(","));
  const bystat = await search("aramid");
  want("search reaches the stats and the hook", bystat.length > 1, bystat.length);
  await search("");

  // A filter shows its own category plus anything tagged with the same key, which is how
  // a card keeps one category and still appears under a theme it belongs to.
  const expect = key => M.filter(m => m.cat === key || (m.tags || []).includes(key)).length
    + P.filter(p => (p.cats || []).includes(key) || (p.tags || []).includes(key)).length
    + R.filter(r => (r.cats || []).includes(key)).length
    + L.filter(t => (t.cats || []).includes(key)).length
    + KL.filter(k => (k.cats || []).includes(key)).length    // a class sits under its workshops too
    + ((global.window.WHEEL && global.window.WHEEL.card && (global.window.WHEEL.card.cats || []).includes(key)) ? 1 : 0);   // the wheel, under the preliminary course
  for (const [cat] of Object.entries(global.window.CATS)) {
    const got = click(filters, cat);
    want(`filter ${cat}`, got.length === expect(cat), `${got.length} of ${expect(cat)}`);
  }
  for (const [t] of Object.entries(global.window.THEMES || {})) {
    const bar = global.window.CATS[t] ? filters : themes;
    const got = click(bar, t);
    want(`theme ${t} (category plus tagged cards)`, got.length === expect(t), `${got.length} of ${expect(t)}`);
  }
  click(filters, "all");
  want("the hash records a filter", (() => { click(filters, "metal"); return global.location.hash.includes("cat=metal"); })(),
       global.location.hash);
  click(filters, "all");

  console.log(bad ? `PROBLEMS: ${bad}` : "render checks passed");
  process.exit(bad ? 1 : 0);
})();

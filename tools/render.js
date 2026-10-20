// Minimal DOM stub: runs app.js end to end, dumps the rendered grid and
// exercises the sort select and the two jump buttons. No browser needed.
// Usage: node tools/render.js [out.html]
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, "..");
const outFile = process.argv[2] || path.join(require('os').tmpdir(), "materials-render.html");
const handlers = {};
const el = () => ({
  innerHTML: "", textContent: "", value: "", dataset: {}, hidden: false, disabled: false,
  addEventListener(t, f) { (handlers[t] = handlers[t] || []).push(f); },
  setAttribute() {}, getAttribute() { return "dark"; },
  querySelectorAll() { return []; }, querySelector() { return null; },
  showModal() {}, close() {}
});
const nodes = {
  grid: el(), count: el(), search: el(), theme: el(), lb: el(), "lb-inner": el(),
  sort: el(), "to-top": el(), "to-end": el()
};
const jump = el();
global.window = {};
global.document = {
  getElementById: id => nodes[id] || el(),
  querySelector: s => (s === ".jump" ? jump : el()),
  documentElement: el(), body: { scrollHeight: 40000 }
};
global.matchMedia = () => ({ matches: false });
global.localStorage = { getItem() { return null; }, setItem() {} };
global.scrollTo = () => {};
global.scrollY = 0;
global.innerHeight = 900;
global.addEventListener = () => {};
for (const f of ["credits.js", "data.js", "added.js", "app.js"])
  new Function(fs.readFileSync(path.join(root, f), "utf8"))();
const html = nodes.grid.innerHTML;
fs.writeFileSync(outFile, html);
const ids = h => (h.match(/data-id="([^"]+)"/g) || []).map(s => s.slice(9, -1));
console.log("written to:", outFile);
console.log("cards:", (html.match(/<article/g) || []).length,
            "| imgs:", (html.match(/<img /g) || []).length,
            "| svgs:", (html.match(/<svg /g) || []).length);
console.log("count label:", nodes.count.textContent);
console.log("undefined/NaN in output:", /undefined|NaN/.test(html));
console.log("sort options:", nodes.sort.innerHTML.replace(/<[^>]+>/g, " ").trim());
console.log("jump hidden:", jump.hidden, "| top disabled:", nodes["to-top"].disabled,
            "| end disabled:", nodes["to-end"].disabled);
const order = ids(html);
console.log("default first 3:", order.slice(0, 3).join(", "), "| last 3:", order.slice(-3).join(", "));
const fire = v => {
  nodes.sort.value = v;
  handlers.change.forEach(f => f());
  const o = ids(nodes.grid.innerHTML);
  console.log(`${v}: ${o.length} cards | first ${o.slice(0, 2).join(", ")} | last ${o.slice(-2).join(", ")}`);
};
["new", "cat", "az", "old"].forEach(fire);

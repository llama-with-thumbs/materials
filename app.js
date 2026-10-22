/* Interesting Materials — filtering, sorting and rendering.
   Labels are lowercase on purpose (the page is set in the Bauhaus manner); the data
   keeps its own case.
   Vocabulary lives in taxonomy.js, the drawn fallback swatches in swatch.js, the
   cards in data.js, the photo credits in credits.js and the add order in added.js. */

const CATS = window.CATS;
const CAT_TAGS = window.CAT_TAGS || {};
const KINDS = window.KINDS;
const THEMES = window.THEMES || {};
const CREDITS = window.CREDITS || {};
const MATERIALS = window.MATERIALS || [];
const ADDED = window.ADDED || {};

// added.js lists every id in the order the catalogue grew, so its key order is the
// sort order. An id missing from it is newer than everything in it.
const ADD_ORDER = Object.keys(ADDED);
const ADD_INDEX = new Map(ADD_ORDER.map((id, i) => [id, i]));
const seq = m => (ADD_INDEX.has(m.id) ? ADD_INDEX.get(m.id) : ADD_ORDER.length);

// Label, and how to order the filtered list. A null comparator leaves it in file
// order, which is category by category.
const SORTS = {
  old: ["added — new at the bottom", (a, b) => seq(a) - seq(b)],
  new: ["added — newest first", (a, b) => seq(b) - seq(a)],
  cat: ["grouped by workshop", null],
  az: ["a–z by name", (a, b) => a.name.localeCompare(b.name)]
};

/* ---------- search index ---------- */

// Fold accents away so pina finds Piña and crepe finds crêpe. Built once per card,
// because doing it per keystroke across 500 cards is how a search box feels slow.
const fold = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const HAYSTACK = new Map(MATERIALS.map(m => [m.id, fold([
  m.name, m.sub, m.hook, m.uses,
  m.stats.map(p => p.join(" ")).join(" "),
  CATS[m.cat] || "",
  (m.tags || []).map(t => THEMES[t] || t).join(" ")
].join(" "))]));

// A card is in a theme if it carries the tag; a card is in a category if that is its
// category. The filter buttons mix both, so one lookup answers either kind.
const inFilter = (m, key) =>
  key === "all" || m.cat === key || (m.tags || []).includes(key);

/* ---------- rendering ---------- */

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function shotFor(mat, eager) {
  const c = CREDITS[mat.id];
  if (mat.img && c) {
    // Width and height come from the file on disk so the grid does not jump about
    // while the photographs arrive.
    const dim = c.w && c.h ? ` width="${c.w}" height="${c.h}"` : "";
    const load = eager ? "" : ' loading="lazy"';
    return `<img src="images/${esc(c.file)}" alt="${esc(c.caption)}"${dim}${load} decoding="async">`;
  }
  return makeSwatch(mat);
}

const catTag = cat => CAT_TAGS[cat] || (CATS[cat] || "").split(" ")[0];

// Building a card's HTML is the expensive part, and a card never changes once built,
// so each one is built at most once and re-used on every later filter or sort.
const CARD_HTML = new Map();

function cardFor(mat) {
  let html = CARD_HTML.get(mat.id);
  if (html) return html;
  const c = CREDITS[mat.id];
  const kind = c && KINDS[c.kind] ? c.kind : null;
  const stats = mat.stats.map(([k, v]) => `<div class="stat"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("");
  const source = c
    ? `<a href="${esc(c.page)}" target="_blank" rel="noopener">${kind ? esc(c.kind) : "photo"}: Wikimedia (${esc(c.license)})</a>`
    : `<span>illustration</span>`;
  const more = mat.link ? `<a href="${esc(mat.link)}" target="_blank" rel="noopener">read more</a>` : "";
  const src = mat.src ? `<a href="${esc(mat.src[1])}" target="_blank" rel="noopener">${esc(mat.src[0])}</a>` : "";
  const themes = (mat.tags || []).filter(t => THEMES[t])
    .map(t => `<button class="theme" data-cat="${esc(t)}">${esc(THEMES[t])}</button>`).join("");
  html = `<article class="card" id="m-${esc(mat.id)}" data-cat="${esc(mat.cat)}" data-id="${esc(mat.id)}">
    <button class="shot" data-shot="${esc(mat.id)}" title="enlarge">
      ${shotFor(mat)}
      <span class="tag">${esc(catTag(mat.cat))}</span>
      ${kind ? `<span class="tag kind">${esc(KINDS[kind])}</span>` : ""}
    </button>
    <div class="body">
      <p class="no">no. ${seq(mat) + 1}</p>
      <h2>${esc(mat.name)}</h2>
      <p class="sub">${esc(mat.sub)}</p>
      <p class="hook">${esc(mat.hook)}</p>
      <div class="stats">${stats}</div>
      <p class="uses"><b>where you meet it:</b> ${esc(mat.uses)}</p>
      <p class="meta">${source}<span class="links">${themes}${src}${more}</span></p>
    </div>
  </article>`;
  CARD_HTML.set(mat.id, html);
  return html;
}

const grid = document.getElementById("grid");
const countEl = document.getElementById("count");
const searchEl = document.getElementById("search");

let activeCat = "all";
let activeSort = "old";
let activeQuery = "";

function render() {
  const q = fold(activeQuery.trim());
  const list = MATERIALS.filter(m => inFilter(m, activeCat) && (!q || HAYSTACK.get(m.id).includes(q)));
  const cmp = SORTS[activeSort][1];
  if (cmp) list.sort(cmp);
  grid.innerHTML = list.length
    ? list.map(cardFor).join("")
    : `<p class="empty">nothing matches that. try "glass", "heat" or "wheel".</p>`;
  const where = activeCat === "all" ? "" : ` · ${CATS[activeCat] || THEMES[activeCat] || activeCat}`;
  countEl.textContent = `${list.length} of ${MATERIALS.length} materials${where}`;
  jumpState();
}

/* ---------- shareable state ---------- */

// Filter, search and sort live in the URL hash, so a view can be sent to someone.
function readHash() {
  const p = new URLSearchParams(location.hash.replace(/^#/, ""));
  const cat = p.get("cat");
  const sort = p.get("sort");
  if (cat && (cat === "all" || CATS[cat] || THEMES[cat])) activeCat = cat;
  if (sort && SORTS[sort]) activeSort = sort;
  if (p.get("q")) activeQuery = p.get("q");
}

function writeHash() {
  const p = new URLSearchParams();
  if (activeCat !== "all") p.set("cat", activeCat);
  if (activeQuery.trim()) p.set("q", activeQuery.trim());
  if (activeSort !== "old") p.set("sort", activeSort);
  const hash = p.toString();
  history.replaceState(null, "", hash ? "#" + hash : location.pathname + location.search);
}

/* ---------- controls ---------- */

const filterBar = document.querySelector(".filters");
const themeBar = document.querySelector(".themes");

filterBar.innerHTML = [["all", "all"], ...Object.entries(CATS)]
  .map(([k, label]) => `<button class="pill" data-cat="${k}">${esc(label)}</button>`).join("");

// A theme whose key is also a category key already has a button in the row above —
// clicking that one picks up the tagged cards too, so a second button would do nothing new.
const LOOSE_THEMES = Object.entries(THEMES).filter(([k]) => !CATS[k]);
if (themeBar && LOOSE_THEMES.length) {
  themeBar.innerHTML = '<span class="themes-label">across the workshops:</span>' +
    LOOSE_THEMES.map(([k, label]) =>
      `<button class="pill theme" data-cat="${k}">${esc(label)}</button>`).join("");
}

function setCat(key) {
  activeCat = key;
  for (const p of document.querySelectorAll(".pill")) {
    p.setAttribute("aria-pressed", String(p.dataset.cat === key));
  }
  writeHash();
  render();
}

for (const bar of [filterBar, themeBar]) {
  if (!bar) continue;
  bar.addEventListener("click", e => {
    const btn = e.target.closest(".pill");
    if (btn) setCat(btn.dataset.cat);
  });
}

// A theme button inside a card jumps to that theme's filter.
grid.addEventListener("click", e => {
  const btn = e.target.closest(".theme");
  if (!btn) return;
  setCat(btn.dataset.cat);
  scrollTo({ top: 0, behavior: "smooth" });
});

// Typing re-renders the whole grid, so wait for the typist to pause first.
let typing = null;
searchEl.addEventListener("input", () => {
  clearTimeout(typing);
  typing = setTimeout(() => {
    activeQuery = searchEl.value;
    writeHash();
    render();
  }, 120);
});

const sortEl = document.getElementById("sort");
sortEl.innerHTML = Object.entries(SORTS)
  .map(([k, [label]]) => `<option value="${k}">${esc(label)}</option>`).join("");

let savedSort = null;
try { savedSort = localStorage.getItem("materials-sort"); } catch (_) {}
if (savedSort && SORTS[savedSort]) activeSort = savedSort;

readHash();                       // the URL wins over the remembered sort
sortEl.value = activeSort;
searchEl.value = activeQuery;

sortEl.addEventListener("change", () => {
  activeSort = SORTS[sortEl.value] ? sortEl.value : "old";
  try { localStorage.setItem("materials-sort", activeSort); } catch (_) {}
  writeHash();
  render();
  scrollTo({ top: 0, behavior: "smooth" });
});

addEventListener("hashchange", () => {
  activeCat = "all";
  activeQuery = "";
  readHash();
  sortEl.value = activeSort;
  searchEl.value = activeQuery;
  setCat(activeCat);
});

/* ---------- jump to the top or the bottom ---------- */

const topBtn = document.getElementById("to-top");
const endBtn = document.getElementById("to-end");

topBtn.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
endBtn.addEventListener("click", () =>
  scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));

// Grey out whichever end you are already at, and hide the pair on a short page.
function jumpState() {
  const y = scrollY;
  const max = document.body.scrollHeight - innerHeight;
  document.querySelector(".jump").hidden = max < 400;
  topBtn.disabled = y < 200;
  endBtn.disabled = y > max - 200;
}

addEventListener("scroll", jumpState, { passive: true });
addEventListener("resize", jumpState);

/* ---------- lightbox ---------- */

const lb = document.getElementById("lb");
const lbInner = document.getElementById("lb-inner");

grid.addEventListener("click", e => {
  const btn = e.target.closest("[data-shot]");
  if (!btn) return;
  const mat = MATERIALS.find(m => m.id === btn.dataset.shot);
  const c = CREDITS[mat.id];
  const credit = c
    ? `<span class="credit">${KINDS[c.kind] ? "shows " + esc(KINDS[c.kind]) + ". " : ""}${esc(c.caption)} — ${esc(c.artist)}, ${esc(c.license)},
         <a href="${esc(c.page)}" target="_blank" rel="noopener">Wikimedia Commons</a></span>`
    : `<span class="credit">drawn illustration — no freely licensed photograph of this material was available.</span>`;
  lbInner.innerHTML = `<button id="lb-close" type="button" aria-label="close">×</button>
    <figure>${shotFor(mat, true)}
    <figcaption><strong>${esc(mat.name)}</strong> · ${esc(mat.sub)}${credit}</figcaption></figure>`;
  lb.showModal();
});

// Close on the backdrop or the button, but not on the photograph or its caption —
// clicking the thing you came to look at should not throw it away.
lb.addEventListener("click", e => {
  if (e.target === lb || e.target.closest("#lb-close")) lb.close();
});

/* ---------- theme ---------- */

const themeBtn = document.getElementById("theme");
const root = document.documentElement;

function applyTheme(t) {
  root.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "paper" : "dark";
}

applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");

themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  applyTheme(next);
  try { localStorage.setItem("materials-theme", next); } catch (_) {}
});

for (const p of document.querySelectorAll(".pill")) {
  p.setAttribute("aria-pressed", String(p.dataset.cat === activeCat));
}
render();
jumpState();

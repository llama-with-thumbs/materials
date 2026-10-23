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
const PLATES = window.PLATES || [];
for (const p of PLATES) p.plate = true;
// Cards and plates render in one grid; a plate belongs to every workshop it lists.
const ALL = MATERIALS.concat(PLATES);
const ADDED = window.ADDED || {};
const FIGURES = window.FIGURES;

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

const HAYSTACK = new Map(ALL.map(m => [m.id, fold([
  m.name, m.sub, m.hook, m.uses || "",
  m.stats.map(p => p.join(" ")).join(" "),
  m.plate ? "plate " + m.cats.map(c => CATS[c] || c).join(" ") : CATS[m.cat] || "",
  (m.tags || []).map(t => THEMES[t] || t).join(" ")
].join(" "))]));

// A card is in a theme if it carries the tag; a card is in a category if that is its
// category. The filter buttons mix both, so one lookup answers either kind.
const inFilter = (m, key) =>
  key === "all" || m.cat === key || (m.cats || []).includes(key) || (m.tags || []).includes(key);

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

// A plate: a figure, the paragraph that reads it, three facts, and the cards it explains.
function plateFor(p) {
  const c = CREDITS[p.id];
  const no = PLATES.indexOf(p) + 1;
  const figure = p.figure
    ? `<div class="figure">${FIGURES.svg(p.id, p.figure)}<span class="tag">plate</span>
         <div class="readout">${FIGURES.readoutHTML(p.figure, null)}</div></div>`
    : `<button class="shot" data-shot="${esc(p.id)}" title="enlarge">${shotFor(p)}<span class="tag">plate</span></button>`;
  const stats = p.stats.map(([k, v]) => `<div class="stat"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("");
  const explains = (p.cards || []).map(id => ALL.find(m => m.id === id)).filter(Boolean)
    .map(m => `<a href="#m-${esc(m.id)}" data-goto="${esc(m.id)}">${esc(m.name)}</a>`).join(", ");
  const source = c
    ? `<a href="${esc(c.page)}" target="_blank" rel="noopener">${esc(c.kind || "photo")}: Wikimedia (${esc(c.license)})</a>`
    : `<span>drawn for this page from published values</span>`;
  const more = p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">read more</a>` : "";
  const src = p.src ? `<a href="${esc(p.src[1])}" target="_blank" rel="noopener">${esc(p.src[0])}</a>` : "";
  return `<article class="card plate" id="m-${esc(p.id)}" data-cat="${esc((p.cats || [])[0] || "")}" data-id="${esc(p.id)}">
    ${figure}
    <div class="body">
      <p class="no">plate ${no}</p>
      <h2>${esc(p.name)}</h2>
      <p class="sub">${esc(p.sub)}</p>
      <p class="hook">${esc(p.hook)}</p>
      <div class="stats">${stats}</div>
      <p class="uses"><b>explains:</b> ${explains}</p>
      <p class="meta">${source}<span class="links">${src}${more}</span></p>
    </div>
  </article>`;
}

function cardFor(mat) {
  let html = CARD_HTML.get(mat.id);
  if (html) return html;
  if (mat.plate) { html = plateFor(mat); CARD_HTML.set(mat.id, html); return html; }
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
  const list = ALL.filter(m => inFilter(m, activeCat) && (!q || HAYSTACK.get(m.id).includes(q)));
  const cmp = SORTS[activeSort][1];
  if (cmp) list.sort(cmp);
  grid.innerHTML = list.length
    ? list.map(cardFor).join("")
    : `<p class="empty">nothing matches that. try "glass", "heat" or "wheel".</p>`;
  const where = activeCat === "all" ? "" : ` · ${CATS[activeCat] || THEMES[activeCat] || activeCat}`;
  const np = list.filter(m => m.plate).length;
  const plates = np ? `, ${np} of ${PLATES.length} plate${PLATES.length === 1 ? "" : "s"}` : "";
  countEl.textContent = `${list.length - np} of ${MATERIALS.length} materials${plates}${where}`;
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

/* ---------- material of the week ---------- */

// One card a week, chosen by the calendar and nothing else. The ISO week number seeds a
// pick over the catalogue, so everyone who opens the page in the same week sees the same
// card, with no server to remember it and nobody's hand on the scale. A new card changes
// the count and therefore the pick, which is fine: it is a week, not a contract.
function isoWeek(d) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const jan1 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return [t.getUTCFullYear(), Math.ceil(((t - jan1) / 864e5 + 1) / 7)];
}

const weekEl = document.getElementById("week");
if (weekEl && MATERIALS.length) {
  const [y, w] = isoWeek(new Date());
  const h = Math.imul(y * 53 + w, 2654435761) >>> 0;
  const pick = MATERIALS[h % MATERIALS.length];
  weekEl.innerHTML = `<span class="week-label">this week</span>
    <a href="#m-${esc(pick.id)}" data-week="${esc(pick.id)}">no. ${seq(pick) + 1}, ${esc(pick.name)}</a>
    <span class="week-sub">${esc(pick.sub)}</span>`;
  weekEl.addEventListener("click", e => {
    const a = e.target.closest("[data-week]");
    if (!a) return;
    e.preventDefault();
    goTo(a.dataset.week);
  });
}

// Go to one card wherever it is: clear the filters, scroll to it, outline it in red.
function goTo(id) {
  activeQuery = "";
  searchEl.value = "";
  setCat("all");
  const card = document.getElementById("m-" + id);
  if (!card || !card.classList) return;
  card.classList.add("picked");
  card.scrollIntoView({ behavior: "smooth", block: "center" });
}

// A plate's "explains" links go to the cards; the figures answer the pointer.
grid.addEventListener("click", e => {
  const a = e.target.closest("[data-goto]");
  if (!a) return;
  e.preventDefault();
  goTo(a.dataset.goto);
});
if (PLATES.some(p => p.figure)) FIGURES.bind(grid, PLATES);

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
  const mat = ALL.find(m => m.id === btn.dataset.shot);
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

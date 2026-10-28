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
const PAPERS = window.PAPERS || [];
for (const p of PAPERS) { p.paper = true; p.name = p.name || p.material; }   // sorts by name
const LIBRARY = window.LIBRARY || [];
for (const p of LIBRARY) { p.text = true; p.name = p.name || p.title; }   // a Bauhaus primary text; sorts by title
// Cards, plates, papers and texts render in one grid; a plate, paper or text belongs to
// every workshop it lists. The shelf keys show one kind on its own.
const ALL = MATERIALS.concat(PLATES, PAPERS, LIBRARY);
const SHELF = { plates: "the plates", papers: "the papers", library: "the library" };
const SHELF_SETS = { plates: PLATES, papers: PAPERS, library: LIBRARY };
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
  m.name || "", m.sub || "", m.hook || "", m.uses || "",
  (m.stats || []).map(p => p.join(" ")).join(" "),
  m.paper ? ["paper", m.material, m.title, m.authors, m.journal, m.year, m.why, m.implies].join(" ") : "",
  m.text ? ["text library bauhaus", m.title, m.english, m.author, m.role, m.kind, m.year, m.what].join(" ") : "",
  m.cat ? CATS[m.cat] || "" : (m.plate ? "plate " : "") + (m.cats || []).map(c => CATS[c] || c).join(" "),
  (m.tags || []).map(t => THEMES[t] || t).join(" ")
].join(" "))]));

// A card is in a theme if it carries the tag; a card is in a category if that is its
// category. The filter buttons mix both, so one lookup answers either kind.
const inFilter = (m, key) =>
  key === "all" || m.cat === key || (m.cats || []).includes(key) || (m.tags || []).includes(key)
  || (key === "plates" && !!m.plate) || (key === "papers" && !!m.paper)
  || (key === "library" && !!m.text);

/* ---------- rendering ---------- */

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// One photograph from a credit id. Width and height come from the file on disk so the
// grid does not jump about while the pictures arrive.
function imgFrom(creditId, eager) {
  const c = CREDITS[creditId];
  if (!c) return "";
  const dim = c.w && c.h ? ` width="${c.w}" height="${c.h}"` : "";
  const load = eager ? "" : ' loading="lazy"';
  return `<img src="images/${esc(c.file)}" alt="${esc(c.caption)}"${dim}${load} decoding="async">`;
}

function shotFor(mat, eager) {
  if (mat.img && CREDITS[mat.id]) return imgFrom(mat.id, eager);
  return makeSwatch(mat);
}

// The photographs for a card's lightbox: the main one, then any extra views, each a credit
// id of its own. A card with no photograph (a drawn swatch) has an empty gallery.
function galleryOf(mat) {
  return [mat.id, ...(mat.extra || [])].filter(id => CREDITS[id]);
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
    ? `<a href="${esc(c.page)}" target="_blank" rel="noopener">${esc(c.kind || "photo")}: ${esc(c.site || "Wikimedia")} (${esc(c.license)})</a>`
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

// A paper: the material it is about, the citation, what it showed and what it implies.
// No photograph; the card is set in type alone, with the year where the picture would be.
function paperFor(p) {
  const no = PAPERS.indexOf(p) + 1;
  const about = (p.cards || []).map(id => ALL.find(m => m.id === id)).filter(Boolean)
    .map(m => `<a href="#m-${esc(m.id)}" data-goto="${esc(m.id)}">${esc(m.name)}</a>`).join(", ");
  const doi = `<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">doi ${esc(p.doi)}</a>`;
  const oa = p.oa ? `<a href="${esc(p.oa)}" target="_blank" rel="noopener">read it free</a>` : "";
  return `<article class="card paper" id="m-${esc(p.id)}" data-cat="${esc((p.cats || [])[0] || "")}" data-id="${esc(p.id)}">
    <div class="year"><span>${esc(p.year)}</span><span class="tag">${esc(p.kind === "founding" ? "founding paper" : "recent paper")}</span></div>
    <div class="body">
      <p class="no">paper ${no}</p>
      <h2>${esc(p.material)}</h2>
      <p class="sub">${esc(p.authors)}, ${esc(p.journal)} ${esc(p.year)}</p>
      <p class="title">${esc(p.title)}</p>
      <p class="hook">${esc(p.why)}</p>
      <div class="stats"><div class="stat"><b>implies</b><span>${esc(p.implies)}</span></div></div>
      ${about ? `<p class="uses"><b>on the cards:</b> ${about}</p>` : ""}
      <p class="meta">${doi}<span class="links">${oa}</span></p>
    </div>
  </article>`;
}

// A text: a primary source from the Bauhaus, set in type alone like a paper, the year
// where the picture would be. A free reading link where the work is in the public domain;
// otherwise a link to the publisher, marked, because the page hosts no text it cannot licence.
function textFor(p) {
  const no = LIBRARY.indexOf(p) + 1;
  const about = (p.cards || []).map(id => ALL.find(m => m.id === id)).filter(Boolean)
    .map(m => `<a href="#m-${esc(m.id)}" data-goto="${esc(m.id)}">${esc(m.name)}</a>`).join(", ");
  const read = p.read
    ? `<a href="${esc(p.read)}" target="_blank" rel="noopener">${p.pd ? "read it free" : "find a copy"}</a>`
    : "";
  // Legal status on the left; a public-domain work with no free scan names where it is held.
  const status = p.pd
    ? (!p.read && p.held ? "public domain · held at " + p.held : "public domain")
    : "in copyright";
  const eng = p.english && p.english !== p.title ? `<p class="title">${esc(p.english)}</p>` : "";
  return `<article class="card paper text" id="m-${esc(p.id)}" data-cat="${esc((p.cats || [])[0] || "")}" data-id="${esc(p.id)}">
    <div class="year"><span>${esc(p.year)}</span><span class="tag">${esc(p.kind)}</span></div>
    <div class="body">
      <p class="no">library ${no}</p>
      <h2>${esc(p.title)}</h2>
      <p class="sub">${esc(p.author)}${p.role ? " · " + esc(p.role) : ""}</p>
      ${eng}
      <p class="hook">${esc(p.what)}</p>
      ${about ? `<p class="uses"><b>on the cards:</b> ${about}</p>` : ""}
      <p class="meta">${esc(status)}<span class="links">${read}</span></p>
    </div>
  </article>`;
}

function cardFor(mat) {
  let html = CARD_HTML.get(mat.id);
  if (html) return html;
  if (mat.plate) { html = plateFor(mat); CARD_HTML.set(mat.id, html); return html; }
  if (mat.paper) { html = paperFor(mat); CARD_HTML.set(mat.id, html); return html; }
  if (mat.text) { html = textFor(mat); CARD_HTML.set(mat.id, html); return html; }
  const c = CREDITS[mat.id];
  const kind = c && KINDS[c.kind] ? c.kind : null;
  const stats = mat.stats.map(([k, v]) => `<div class="stat"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("");
  const source = c
    ? `<a href="${esc(c.page)}" target="_blank" rel="noopener">${kind ? esc(c.kind) : "photo"}: ${esc(c.site || "Wikimedia")} (${esc(c.license)})</a>`
    : `<span>illustration</span>`;
  const more = mat.link ? `<a href="${esc(mat.link)}" target="_blank" rel="noopener">read more</a>` : "";
  const src = mat.src ? `<a href="${esc(mat.src[1])}" target="_blank" rel="noopener">${esc(mat.src[0])}</a>` : "";
  const themes = (mat.tags || []).filter(t => THEMES[t])
    .map(t => `<button class="theme" data-cat="${esc(t)}">${esc(THEMES[t])}</button>`).join("");
  html = `<article class="card" id="m-${esc(mat.id)}" data-cat="${esc(mat.cat)}" data-id="${esc(mat.id)}">
    <button class="shot" data-shot="${esc(mat.id)}" title="${mat.extra && mat.extra.length ? "enlarge — " + (mat.extra.length + 1) + " views" : "enlarge"}">
      ${shotFor(mat)}
      <span class="tag">${esc(catTag(mat.cat))}</span>
      ${kind ? `<span class="tag kind">${esc(KINDS[kind])}</span>` : ""}
      ${mat.extra && mat.extra.length ? `<span class="tag more">+${mat.extra.length} more</span>` : ""}
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

// A reference card is a plate, a paper or a library text — something that is not a material.
const isRef = m => m.plate || m.paper || m.text;

function render() {
  const q = fold(activeQuery.trim());
  const list = ALL.filter(m => inFilter(m, activeCat) && (!q || HAYSTACK.get(m.id).includes(q)));
  const cmp = SORTS[activeSort][1];

  // The materials fill the grid and answer the sort; the reference cards gather after them
  // in a fixed order (plates, papers, then the library) under a labelled band, so they never
  // scatter among the materials. A shelf view is all one kind, so it needs no band.
  const shelf = !!SHELF[activeCat];
  const mats = list.filter(m => !isRef(m));
  const refs = list.filter(isRef);
  if (cmp) mats.sort(cmp);

  let html;
  if (!list.length) {
    html = `<p class="empty">nothing matches that. try "glass", "heat" or "wheel".</p>`;
  } else if (shelf) {
    html = refs.map(cardFor).join("");
  } else {
    html = mats.map(cardFor).join("");
    if (refs.length) {
      const band = mats.length
        ? `<div class="band"><b>reference</b> — plates, papers and the library: the things that are not materials</div>`
        : "";
      html += band + refs.map(cardFor).join("");
    }
  }
  grid.innerHTML = html;

  const where = activeCat === "all" ? "" : ` · ${CATS[activeCat] || THEMES[activeCat] || SHELF[activeCat] || activeCat}`;
  const np = refs.filter(m => m.plate).length, nr = refs.filter(m => m.paper).length, nt = refs.filter(m => m.text).length;
  const parts = [];
  if (!shelf) parts.push(`${mats.length} of ${MATERIALS.length} materials`);
  if (np) parts.push(`${np} of ${PLATES.length} plate${PLATES.length === 1 ? "" : "s"}`);
  if (nr) parts.push(`${nr} of ${PAPERS.length} paper${PAPERS.length === 1 ? "" : "s"}`);
  if (nt) parts.push(`${nt} of ${LIBRARY.length} in the library`);
  countEl.textContent = (parts.join(", ") || `0 of ${MATERIALS.length} materials`) + where;
  jumpState();
}

/* ---------- shareable state ---------- */

// Filter, search and sort live in the URL hash, so a view can be sent to someone.
function readHash() {
  const p = new URLSearchParams(location.hash.replace(/^#/, ""));
  const cat = p.get("cat");
  const sort = p.get("sort");
  if (cat && (cat === "all" || CATS[cat] || THEMES[cat] || SHELF[cat])) activeCat = cat;
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
const SHELVES = Object.entries(SHELF).filter(([k]) => (SHELF_SETS[k] || []).length);
if (themeBar && (LOOSE_THEMES.length || SHELVES.length)) {
  // Two groups, each with its own label: themes are jobs that cut across the workshops;
  // shelves are the separate collections (the plates, the papers, the library).
  const themes = LOOSE_THEMES.length
    ? '<span class="themes-label">across the workshops:</span>' +
      LOOSE_THEMES.map(([k, label]) => `<button class="pill theme" data-cat="${k}">${esc(label)}</button>`).join("")
    : "";
  const shelves = SHELVES.length
    ? '<span class="themes-label shelf-label">collections:</span>' +
      SHELVES.map(([k, label]) => `<button class="pill shelf" data-cat="${k}">${esc(label)}</button>`).join("")
    : "";
  themeBar.innerHTML = themes + shelves;
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
  for (const was of grid.querySelectorAll(".picked")) was.classList.remove("picked");
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

// The open lightbox: a gallery of one or more views of one material, paged in place.
let lbGal = [], lbI = 0, lbName = "", lbSub = "", lbSwatch = "";

// The credit line for one image; the drawn-swatch case when the card has no photograph.
function lbCredit(id) {
  const c = CREDITS[id];
  if (!c) return `<span class="credit">drawn illustration — no freely licensed photograph of this material was available.</span>`;
  return `<span class="credit">${KINDS[c.kind] ? "shows " + esc(KINDS[c.kind]) + ". " : ""}${esc(c.caption)} — ${esc(c.artist)}, ${esc(c.license)},
       <a href="${esc(c.page)}" target="_blank" rel="noopener">${esc(c.site === "Wikimedia" || !c.site ? "Wikimedia Commons" : c.site)}</a></span>`;
}

function lbShow() {
  const n = lbGal.length;
  const id = n ? lbGal[lbI] : null;
  const pic = id ? imgFrom(id, true) : lbSwatch;
  // With more than one view: arrows over the picture, a counter, and a dot per view.
  const nav = n > 1
    ? `<button class="lb-nav prev" type="button" aria-label="previous view">‹</button>
       <button class="lb-nav next" type="button" aria-label="next view">›</button>
       <span class="lb-count">${lbI + 1} / ${n}</span>` : "";
  const dots = n > 1
    ? `<div class="lb-dots">${lbGal.map((_, i) => `<button class="lb-dot${i === lbI ? " on" : ""}" type="button" data-i="${i}" aria-label="view ${i + 1}"></button>`).join("")}</div>` : "";
  lbInner.innerHTML = `<button id="lb-close" type="button" aria-label="close">×</button>
    <figure>${pic}${nav}
    <figcaption><strong>${esc(lbName)}</strong> · ${esc(lbSub)}${lbCredit(id)}${dots}</figcaption></figure>`;
}

grid.addEventListener("click", e => {
  const btn = e.target.closest("[data-shot]");
  if (!btn) return;
  const mat = ALL.find(m => m.id === btn.dataset.shot);
  lbGal = galleryOf(mat);
  lbI = 0;
  lbName = mat.name;
  lbSub = mat.sub;
  lbSwatch = lbGal.length ? "" : makeSwatch(mat);
  lbShow();
  lb.showModal();
});

// Page the gallery on the arrows or the dots, without closing the dialog.
lbInner.addEventListener("click", e => {
  const nav = e.target.closest(".lb-nav");
  const dot = e.target.closest(".lb-dot");
  if (nav && lbGal.length > 1) {
    lbI = (lbI + (nav.classList.contains("next") ? 1 : -1) + lbGal.length) % lbGal.length;
    lbShow();
  } else if (dot) {
    lbI = +dot.dataset.i;
    lbShow();
  }
});

// The arrow keys page the gallery; the dialog's own Escape still closes it.
lb.addEventListener("keydown", e => {
  if (lbGal.length < 2) return;
  if (e.key === "ArrowRight") { lbI = (lbI + 1) % lbGal.length; lbShow(); }
  else if (e.key === "ArrowLeft") { lbI = (lbI - 1 + lbGal.length) % lbGal.length; lbShow(); }
});

// Close on the backdrop or the button, but not on the photograph, the caption or the
// paging controls — clicking the thing you came to look at should not throw it away.
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

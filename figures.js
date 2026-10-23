/* Drawn plates. One renderer for every diagram made of fields on two axes: it takes the
   data in plates.js, draws the fields as flat polygons, and keeps a readout under the
   figure that follows the pointer — which field, which phases, what crystal structure,
   and the two coordinates under the cursor. Nothing here knows about iron; a TTT curve
   or a copper–zinc diagram is the same code with different data. */

window.FIGURES = (() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const W = 720, H = 500, ML = 58, MR = 14, MT = 18, MB = 50;   // viewBox and margins

  const scales = f => {
    const [x0, x1] = f.x, [y0, y1] = f.y;
    const sx = v => ML + (v - x0) / (x1 - x0) * (W - ML - MR);
    const sy = v => H - MB - (v - y0) / (y1 - y0) * (H - MT - MB);
    const ux = px => x0 + (px - ML) / (W - ML - MR) * (x1 - x0);
    const uy = py => y0 + (H - MB - py) / (H - MT - MB) * (y1 - y0);
    return { sx, sy, ux, uy };
  };

  const fmt = (v, span) => span > 100 ? Math.round(v) : v.toFixed(2);

  // The figure as an SVG string, so it can live inside the cached card HTML.
  function svg(id, f) {
    const { sx, sy } = scales(f);
    const pts = a => a.map(([x, y]) => `${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(" ");
    const zones = f.zones.map((z, i) =>
      `<polygon class="zone ${z.one ? "one" : "two"}" data-zone="${i}" points="${pts(z.pts)}"><title>${esc(z.name)}</title></polygon>`).join("");
    const lines = (f.lines || []).map(l =>
      `<polyline class="rule${l.red ? " red" : ""}${l.dashed ? " dashed" : ""}" points="${pts(l.pts)}"/>`).join("");
    const labels = (f.labels || []).map(([x, y, t]) =>
      `<text class="lab" x="${sx(x).toFixed(1)}" y="${sy(y).toFixed(1)}">${esc(t)}</text>`).join("");
    const xt = (f.xticks || []).map(([v, t]) =>
      `<line class="tick" x1="${sx(v).toFixed(1)}" y1="${H - MB}" x2="${sx(v).toFixed(1)}" y2="${H - MB + 5}"/>` +
      `<text class="tk" x="${sx(v).toFixed(1)}" y="${H - MB + 18}" text-anchor="middle">${esc(t)}</text>`).join("");
    const yt = (f.yticks || []).map(([v, t]) =>
      `<line class="tick" x1="${ML - 5}" y1="${sy(v).toFixed(1)}" x2="${ML}" y2="${sy(v).toFixed(1)}"/>` +
      `<text class="tk" x="${ML - 8}" y="${(sy(v) + 4).toFixed(1)}" text-anchor="end">${esc(t)}</text>`).join("");
    return `<svg class="fig" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(f.x[2])} against ${esc(f.y[2])}" data-fig="${esc(id)}">
      <g class="zones">${zones}</g>
      <g class="rules">${lines}</g>
      <rect class="frame" x="${ML}" y="${MT}" width="${W - ML - MR}" height="${H - MT - MB}"/>
      ${xt}${yt}${labels}
      <text class="ax" x="${(ML + (W - MR)) / 2}" y="${H - 8}" text-anchor="middle">${esc(f.x[2])}</text>
      <text class="ax" x="14" y="${(MT + H - MB) / 2}" text-anchor="middle" transform="rotate(-90 14 ${(MT + H - MB) / 2})">${esc(f.y[2])}</text>
    </svg>`;
  }

  // Ray casting: which zone holds the point, in axis units.
  function hit(f, x, y) {
    for (const z of f.zones) {
      let inside = false;
      const p = z.pts;
      for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
        const [xi, yi] = p[i], [xj, yj] = p[j];
        if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
      }
      if (inside) return z;
    }
    return null;
  }

  const rows = [["field", "zone"], ["at", "at"], ["phases", "phases"], ["crystal", "structure"], ["note", "note"]];

  function readoutHTML(f, z, x, y) {
    const at = x == null ? "" : `${fmt(x, f.x[1] - f.x[0])} ${esc(f.x[2])}, ${fmt(y, f.y[1] - f.y[0])} ${esc(f.y[2])}`;
    const v = z ? { zone: z.name, at, phases: z.phases, structure: z.structure, note: z.note }
                : { zone: "point at a field", at: "", phases: "", structure: "", note: "the readout follows the pointer: which field, which phases, what crystal structure, and the temperature and carbon under the cursor" };
    return rows.map(([label, k]) => `<div class="ro"><b>${label}</b><span>${esc(v[k] || "")}</span></div>`).join("");
  }

  // Pointer position in axis units, or null when outside the plotted field.
  function at(svgEl, f, clientX, clientY) {
    const r = svgEl.getBoundingClientRect();
    const px = (clientX - r.left) / r.width * W, py = (clientY - r.top) / r.height * H;
    if (px < ML || px > W - MR || py < MT || py > H - MB) return null;
    const { ux, uy } = scales(f);
    return [ux(px), uy(py)];
  }

  // One delegated listener per container; the cards are re-inserted on every render,
  // so nothing may be bound to the figures themselves.
  function bind(container, plates) {
    const byId = new Map(plates.map(p => [p.id, p]));
    let hot = null;
    const clear = () => { if (hot) { hot.classList.remove("hot"); hot = null; } };
    const move = e => {
      const svgEl = e.target.closest && e.target.closest("svg.fig");
      if (!svgEl) return;
      const p = byId.get(svgEl.dataset.fig);
      const out = svgEl.parentNode.querySelector(".readout");
      if (!p || !out) return;
      const u = at(svgEl, p.figure, e.clientX, e.clientY);
      const z = u ? hit(p.figure, u[0], u[1]) : null;
      clear();
      if (z) {
        hot = svgEl.querySelector(`[data-zone="${p.figure.zones.indexOf(z)}"]`);
        if (hot) hot.classList.add("hot");
      }
      out.innerHTML = readoutHTML(p.figure, z, u && u[0], u && u[1]);
    };
    container.addEventListener("pointermove", move);
    container.addEventListener("pointerdown", move);
    container.addEventListener("pointerleave", clear);
  }

  return { svg, hit, readoutHTML, at, bind };
})();

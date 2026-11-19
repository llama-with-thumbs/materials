/* Drawn plates. One renderer for every diagram made of fields on two axes: it takes the
   data in plates.js, draws the fields as flat polygons, and keeps a readout beside the
   figure that follows the pointer — which field, which phases, what crystal structure,
   the two coordinates under the cursor and, in a two-phase field, the lever rule: how
   much of each phase and at what composition. A click pins a vertical line, an alloy of
   that composition, and the readout lists every field it crosses on the way down, with
   the temperature at each crossing. A figure may declare zooms, each a window on the
   same data, and the switches above the figure move between them. Nothing here knows
   about iron; a TTT curve or a copper–zinc diagram is the same code with different data.

   Optional parts of a figure, beyond the shape documented in plates.js:
     wide: true                     the plate takes the full row, text beside the figure
     zooms: [{ name, x: [a, b], y: [a, b], xticks, yticks, labels }]
     marks: [{ x, y, t, note }]     a lettered point: hover reads its note
     alloys: [{ x, name, id, note }] a composition under the axis: click pins it
     zone.pair: ["left phase", "right phase"]   enables the lever rule in that field
     line.zoomOnly: true            a rule drawn only inside a zoom */

window.FIGURES = (() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // The viewBox and margins: a wide plate draws a longer figure.
  const dims = f => f.wide
    ? { W: 1080, H: 560, ML: 64, MR: 16, MT: 18, MB: 52 }
    : { W: 720, H: 500, ML: 58, MR: 14, MT: 18, MB: 50 };

  // What the reader has done to each figure: which zoom is showing and where the pin is.
  const STATE = new Map();
  const state = id => {
    let s = STATE.get(id);
    if (!s) { s = { zoom: -1, pin: null, alloy: null }; STATE.set(id, s); }
    return s;
  };

  // The axis ranges in force: the figure's own, or the zoom's window on them.
  const range = (f, s) => {
    const z = s && s.zoom >= 0 && f.zooms ? f.zooms[s.zoom] : null;
    return { x: z && z.x ? z.x : f.x, y: z && z.y ? z.y : f.y, zoom: z };
  };

  // Scales map axis units to pixels. An axis marked log (f.xlog / f.ylog) is placed by the
  // base-ten logarithm of the value, so a density or a modulus can run over many decades.
  const scales = (f, s) => {
    const { W, H, ML, MR, MT, MB } = dims(f);
    const r = range(f, s);
    const [x0, x1] = r.x, [y0, y1] = r.y;
    const lx = !!f.xlog, ly = !!f.ylog;
    const gx = v => lx ? Math.log10(v) : v, gy = v => ly ? Math.log10(v) : v;
    const hx = v => lx ? Math.pow(10, v) : v, hy = v => ly ? Math.pow(10, v) : v;
    const X0 = gx(x0), X1 = gx(x1), Y0 = gy(y0), Y1 = gy(y1);
    const sx = v => ML + (gx(v) - X0) / (X1 - X0) * (W - ML - MR);
    const sy = v => H - MB - (gy(v) - Y0) / (Y1 - Y0) * (H - MT - MB);
    const ux = px => hx(X0 + (px - ML) / (W - ML - MR) * (X1 - X0));
    const uy = py => hy(Y0 + (H - MB - py) / (H - MT - MB) * (Y1 - Y0));
    const inX = v => v >= Math.min(x0, x1) && v <= Math.max(x0, x1);
    const inY = v => v >= Math.min(y0, y1) && v <= Math.max(y0, y1);
    return { sx, sy, ux, uy, inX, inY, r };
  };

  const fmt = (v, span) => span > 100 ? String(Math.round(v)) : v.toFixed(2);
  const pct = v => String(Math.round(Math.max(0, Math.min(1, v)) * 100));

  // An axis label is "quantity, unit"; split it for the readouts.
  const axName = s => String(s).split(",")[0].trim();
  const axUnit = s => { const i = String(s).indexOf(","); return i < 0 ? "" : String(s).slice(i + 1).trim(); };

  // The figure as an SVG string, so it can live inside the card HTML.
  function svg(id, f) {
    const s = state(id);
    const { W, H, ML, MR, MT, MB } = dims(f);
    const { sx, sy, inX, inY, r } = scales(f, s);
    const pts = a => a.map(([x, y]) => `${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(" ");
    const clip = `clip-${String(id).replace(/[^a-z0-9]/gi, "")}`;
    const zones = f.zones.map((z, i) =>
      `<polygon class="zone ${z.one ? "one" : "two"}" data-zone="${i}" points="${pts(z.pts)}"><title>${esc(z.name)}</title></polygon>`).join("");
    const lines = (f.lines || []).filter(l => !l.zoomOnly || r.zoom).map(l =>
      `<polyline class="rule${l.red ? " red" : ""}${l.dashed ? " dashed" : ""}" points="${pts(l.pts)}"/>`).join("");
    const labelSet = r.zoom && r.zoom.labels ? r.zoom.labels : (f.labels || []);
    const labels = labelSet.filter(([x, y]) => inX(x) && inY(y)).map(([x, y, t]) =>
      `<text class="lab" x="${sx(x).toFixed(1)}" y="${sy(y).toFixed(1)}">${esc(t)}</text>`).join("");
    // Lettered points: a small ring and its letter, read out under the pointer.
    const marks = (f.marks || []).map((m, i) => !(inX(m.x) && inY(m.y)) ? "" :
      `<g class="mark" data-mark="${i}"><circle cx="${sx(m.x).toFixed(1)}" cy="${sy(m.y).toFixed(1)}" r="3.6"/>` +
      `<text class="mk" x="${(sx(m.x) + (m.dx || 6)).toFixed(1)}" y="${(sy(m.y) + (m.dy || -5)).toFixed(1)}">${esc(m.t)}</text></g>`).join("");
    // Compositions worth knowing, as small triangles standing on the axis; a click pins one.
    const yb = H - MB;
    const alloys = (f.alloys || []).map((a, i) => !inX(a.x) ? "" :
      `<polygon class="alloy${s.alloy === i ? " on" : ""}" data-alloy="${i}" points="${sx(a.x).toFixed(1)},${yb - 1} ${(sx(a.x) - 7).toFixed(1)},${yb - 13} ${(sx(a.x) + 7).toFixed(1)},${yb - 13}"><title>${esc(a.name)}</title></polygon>`).join("");
    // The pin: a vertical line at the fixed composition, labelled at the top.
    const pin = s.pin != null && inX(s.pin)
      ? `<line class="pin" x1="${sx(s.pin).toFixed(1)}" y1="${MT}" x2="${sx(s.pin).toFixed(1)}" y2="${yb}"/>` +
        `<text class="pin-l" x="${(sx(s.pin) + 5).toFixed(1)}" y="${MT + 13}">${esc(fmt(s.pin, f.x[1] - f.x[0]))} ${esc(axUnit(f.x[2]))}</text>`
      : "";
    // A points layer: each material a dot, carrying data-goto so a click opens its card.
    const points = (f.points || []).map((p, i) =>
      `<circle class="pt" data-pt="${i}"${p.id ? ` data-goto="${esc(p.id)}"` : ""} cx="${sx(p.x).toFixed(1)}" cy="${sy(p.y).toFixed(1)}" r="4.5"><title>${esc(p.name)}</title></circle>`).join("");
    const xticks = (r.zoom && r.zoom.xticks ? r.zoom.xticks : (f.xticks || [])).filter(([v]) => inX(v));
    const yticks = (r.zoom && r.zoom.yticks ? r.zoom.yticks : (f.yticks || [])).filter(([v]) => inY(v));
    const xt = xticks.map(([v, t]) =>
      `<line class="tick" x1="${sx(v).toFixed(1)}" y1="${yb}" x2="${sx(v).toFixed(1)}" y2="${yb + 5}"/>` +
      `<text class="tk" x="${sx(v).toFixed(1)}" y="${yb + 18}" text-anchor="middle">${esc(t)}</text>`).join("");
    const yt = yticks.map(([v, t]) =>
      `<line class="tick" x1="${ML - 5}" y1="${sy(v).toFixed(1)}" x2="${ML}" y2="${sy(v).toFixed(1)}"/>` +
      `<text class="tk" x="${ML - 8}" y="${(sy(v) + 4).toFixed(1)}" text-anchor="end">${esc(t)}</text>`).join("");
    return `<svg class="fig${f.wide ? " wide" : ""}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(f.x[2])} against ${esc(f.y[2])}" data-fig="${esc(id)}">
      <defs><clipPath id="${clip}"><rect x="${ML}" y="${MT}" width="${W - ML - MR}" height="${H - MT - MB}"/></clipPath></defs>
      <g class="zones" clip-path="url(#${clip})">${zones}</g>
      <g class="rules" clip-path="url(#${clip})">${lines}</g>
      <rect class="frame" x="${ML}" y="${MT}" width="${W - ML - MR}" height="${H - MT - MB}"/>
      ${xt}${yt}<g class="points">${points}</g><g class="labels" clip-path="url(#${clip})">${labels}</g>
      <g class="marks" clip-path="url(#${clip})">${marks}</g><g class="alloys">${alloys}</g>${pin}
      <text class="ax" x="${(ML + (W - MR)) / 2}" y="${H - 8}" text-anchor="middle">${esc(f.x[2])}</text>
      <text class="ax" x="14" y="${(MT + H - MB) / 2}" text-anchor="middle" transform="rotate(-90 14 ${(MT + H - MB) / 2})">${esc(f.y[2])}</text>
    </svg>`;
  }

  // The switches above a figure that declares zooms: the whole figure, then each window.
  function controlsHTML(id, f) {
    if (!f.zooms || !f.zooms.length) return "";
    const s = state(id);
    const b = (i, word, title) =>
      `<button class="opt" data-zoom="${i}" aria-pressed="${s.zoom === i ? "true" : "false"}" title="${esc(title)}">${esc(word)}</button>`;
    return `<span class="opts fig-opts">${b(-1, "whole", "the whole diagram")}${f.zooms.map((z, i) => b(i, z.name, z.title || z.name)).join("")}</span>`;
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

  // The lever rule in a two-phase field: the tie line through (x, y) meets the field's
  // boundary at the two phase compositions, and the point divides it in the inverse ratio
  // of the amounts. Returns the two compositions and the fraction of the right-hand phase.
  function lever(z, x, y) {
    if (!z || !z.pair) return null;
    const xs = [];
    const p = z.pts;
    for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
      const [xi, yi] = p[i], [xj, yj] = p[j];
      if ((yi > y) !== (yj > y)) xs.push(xi + (y - yi) * (xj - xi) / (yj - yi));
    }
    let left = -Infinity, right = Infinity;
    for (const v of xs) { if (v <= x && v > left) left = v; if (v >= x && v < right) right = v; }
    if (!isFinite(left) || !isFinite(right) || right - left <= 0) return null;
    return { left, right, fr: (x - left) / (right - left) };
  }

  // The fields an alloy of composition x passes through from the top of the diagram to
  // the bottom, each with the temperature it is entered at.
  function path(f, x) {
    const [y0, y1] = f.y, steps = 800, out = [];
    let last;
    for (let i = 0; i <= steps; i++) {
      const y = y1 - (y1 - y0) * i / steps;
      const z = hit(f, x, y);
      if (z !== last) { out.push([z, y]); last = z; }
    }
    return out;
  }

  const rows = [["field", "zone"], ["at", "at"], ["phases", "phases"], ["lever", "lever"], ["crystal", "structure"], ["note", "note"]];

  // The readout for a scatter of materials: the hovered material, its family, and where it
  // sits on the two axes. With no point under the pointer it explains how to read the chart.
  function pointReadoutHTML(f, p) {
    const num = v => v >= 100 ? String(Math.round(v))
      : v >= 1 ? String(+v.toFixed(1))
      : v >= 0.01 ? String(+v.toFixed(3)) : String(+v.toPrecision(2));
    const v = p
      ? { material: p.name, family: p.fam || "", x: num(p.x) + " " + axUnit(f.x[2]), y: num(p.y) + " " + axUnit(f.y[2]),
          note: p.id ? "click the dot to open its card" : "a reference material, not a card here" }
      : { material: "point at a dot", family: "", x: "", y: "",
          note: "each dot is a material placed by its " + axName(f.y[2]) + " and " + axName(f.x[2]) + "; hover for the numbers, click to open its card" };
    const r = [["material", "material"], ["family", "family"], [axName(f.x[2]), "x"], [axName(f.y[2]), "y"], ["note", "note"]];
    return r.map(([label, k]) => `<div class="ro"><b>${esc(label)}</b><span>${esc(v[k] || "")}</span></div>`).join("");
  }

  const leverText = (f, z, x, y) => {
    if (!z) return "";
    if (z.one || !z.pair) return "one phase: no tie line";
    const L = lever(z, x, y);
    if (!L) return "";
    const u = axUnit(f.x[2]), sp = f.x[1] - f.x[0];
    return `${pct(1 - L.fr)} % ${z.pair[0]} at ${fmt(L.left, sp)} ${u}, ${pct(L.fr)} % ${z.pair[1]} at ${fmt(L.right, sp)} ${u}`;
  };

  // The pinned alloy's way down the diagram, as a list under the readout rows.
  function pathHTML(f, s) {
    if (!s || s.pin == null) return "";
    const sp = f.x[1] - f.x[0], u = axUnit(f.x[2]), yu = axUnit(f.y[2]);
    const a = s.alloy != null && f.alloys ? f.alloys[s.alloy] : null;
    const who = a ? `${a.name}, ${fmt(s.pin, sp)} ${u}` : `an alloy of ${fmt(s.pin, sp)} ${u}`;
    const steps = path(f, s.pin).filter(([z]) => z);
    const items = steps.map(([z, y], i) =>
      `<li>${esc(z.name)}${i ? ` <i>below ${fmt(y, f.y[1] - f.y[0])} ${esc(yu)}</i>` : " <i>at the top</i>"}</li>`).join("");
    const foot = steps.length ? steps[steps.length - 1][0] : null;
    const ymin = f.y[0] + (f.y[1] - f.y[0]) * 0.002;
    const L = foot ? leverText(f, foot, s.pin, ymin) : "";
    return `<div class="path"><b>pinned: ${esc(who)}</b>${a && a.note ? `<span class="an">${esc(a.note)}</span>` : ""}
      <ol>${items}</ol>${L && foot && !foot.one ? `<span class="an">at the foot: ${esc(L)}</span>` : ""}
      <span class="an dim">click the line to free it, or elsewhere to move it</span></div>`;
  }

  function readoutHTML(f, z, x, y, s, mark) {
    if (f.points && f.points.length) return pointReadoutHTML(f, null);
    const at = x == null ? "" : `${fmt(x, f.x[1] - f.x[0])} ${esc(f.x[2])}, ${fmt(y, f.y[1] - f.y[0])} ${esc(f.y[2])}`;
    let v;
    if (mark) {
      const zz = z || hit(f, mark.x, mark.y);
      v = { zone: `point ${mark.t}`, at: `${fmt(mark.x, f.x[1] - f.x[0])} ${esc(f.x[2])}, ${fmt(mark.y, f.y[1] - f.y[0])} ${esc(f.y[2])}`,
            phases: zz ? zz.phases : "", lever: "", structure: zz ? zz.structure : "", note: mark.note };
    } else if (z) {
      v = { zone: z.name, at, phases: z.phases, lever: leverText(f, z, x, y), structure: z.structure, note: z.note };
    } else {
      v = { zone: "point at a field", at: "", phases: "", lever: "", structure: "",
            note: "the readout follows the pointer: which field, which phases, the lever rule in a two-phase field, the crystal structure, and the "
              + axName(f.y[2]) + " and " + axName(f.x[2]) + " under the cursor; the lettered points read their names; click to pin a composition and follow it down" };
    }
    return rows.map(([label, k]) => `<div class="ro"><b>${label}</b><span>${esc(v[k] || "")}</span></div>`).join("") + pathHTML(f, s);
  }

  // Pointer position in pixels of the viewBox, and in axis units, or null outside the field.
  function px(svgEl, f, clientX, clientY) {
    const { W, H } = dims(f);
    const r = svgEl.getBoundingClientRect();
    return [(clientX - r.left) / r.width * W, (clientY - r.top) / r.height * H];
  }
  function at(svgEl, f, clientX, clientY, s) {
    const { W, H, ML, MR, MT, MB } = dims(f);
    const [x, y] = px(svgEl, f, clientX, clientY);
    if (x < ML || x > W - MR || y < MT || y > H - MB) return null;
    const { ux, uy } = scales(f, s);
    return [ux(x), uy(y)];
  }

  // Draw the figure again in place, after a zoom or a pin, and refresh the readout.
  function redraw(fig, p) {
    const svgEl = fig.querySelector("svg.fig");
    if (svgEl) svgEl.outerHTML = svg(p.id, p.figure);
    const out = fig.querySelector(".readout");
    if (out) out.innerHTML = readoutHTML(p.figure, null, null, null, state(p.id));
    const s = state(p.id);
    for (const b of fig.querySelectorAll("[data-zoom]")) b.setAttribute("aria-pressed", String(+b.dataset.zoom === s.zoom));
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
      const f = p.figure, s = state(p.id);
      clear();
      const [qx, qy] = px(svgEl, f, e.clientX, e.clientY);
      const sc = scales(f, s);
      // A scatter: light the nearest dot within reach, and read it out.
      if (f.points && f.points.length) {
        let bi = -1, bd = Infinity;
        for (let i = 0; i < f.points.length; i++) {
          const q = f.points[i], dx = sc.sx(q.x) - qx, dy = sc.sy(q.y) - qy, d = dx * dx + dy * dy;
          if (d < bd) { bd = d; bi = i; }
        }
        const near = bd <= 256 ? f.points[bi] : null;   // within sixteen pixels
        if (near) { hot = svgEl.querySelector(`[data-pt="${bi}"]`); if (hot) hot.classList.add("hot"); }
        out.innerHTML = pointReadoutHTML(f, near);
        return;
      }
      // A lettered point within reach takes precedence over the field under it.
      let mi = -1, md = 144;
      (f.marks || []).forEach((m, i) => {
        if (!(sc.inX(m.x) && sc.inY(m.y))) return;
        const dx = sc.sx(m.x) - qx, dy = sc.sy(m.y) - qy, d = dx * dx + dy * dy;
        if (d < md) { md = d; mi = i; }
      });
      const u = at(svgEl, f, e.clientX, e.clientY, s);
      const z = u ? hit(f, u[0], u[1]) : null;
      if (mi >= 0) {
        hot = svgEl.querySelector(`[data-mark="${mi}"]`);
        if (hot) hot.classList.add("hot");
        out.innerHTML = readoutHTML(f, z, u && u[0], u && u[1], s, f.marks[mi]);
        return;
      }
      if (z) {
        hot = svgEl.querySelector(`[data-zone="${f.zones.indexOf(z)}"]`);
        if (hot) hot.classList.add("hot");
      }
      out.innerHTML = readoutHTML(f, z, u && u[0], u && u[1], s);
    };
    const click = e => {
      const fig = e.target.closest && e.target.closest(".figure");
      if (!fig) return;
      const zb = e.target.closest("[data-zoom]");
      const svgEl = fig.querySelector("svg.fig");
      if (!svgEl) return;
      const p = byId.get(svgEl.dataset.fig);
      if (!p) return;
      const f = p.figure, s = state(p.id);
      if (zb) { s.zoom = +zb.dataset.zoom; clear(); redraw(fig, p); return; }
      if (f.points && f.points.length) return;        // a scatter's dots are links, handled elsewhere
      const al = e.target.closest(".alloy");
      if (al) {
        const i = +al.dataset.alloy;
        if (s.alloy === i) { s.pin = null; s.alloy = null; } else { s.pin = f.alloys[i].x; s.alloy = i; }
        clear(); redraw(fig, p); return;
      }
      if (!e.target.closest("svg.fig")) return;
      const u = at(svgEl, f, e.clientX, e.clientY, s);
      if (!u) return;
      const sc = scales(f, s);
      const [qx] = px(svgEl, f, e.clientX, e.clientY);
      // A click near a marked composition takes that composition.
      let ai = -1, ad = 81;
      (f.alloys || []).forEach((a, i) => { const d = (sc.sx(a.x) - qx) ** 2; if (sc.inX(a.x) && d < ad) { ad = d; ai = i; } });
      if (s.pin != null && Math.abs(sc.sx(s.pin) - qx) < 8) { s.pin = null; s.alloy = null; }
      else if (ai >= 0) { s.pin = f.alloys[ai].x; s.alloy = ai; }
      else { s.pin = u[0]; s.alloy = null; }
      clear(); redraw(fig, p);
    };
    container.addEventListener("pointermove", move);
    container.addEventListener("pointerdown", move);
    container.addEventListener("pointerleave", clear);
    container.addEventListener("click", click);
  }

  return { svg, controlsHTML, hit, lever, path, readoutHTML, at, bind, state };
})();

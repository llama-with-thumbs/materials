/* Drawings for the lattices and the classes. Nothing here is a photograph: a lattice card
   draws its unit cell from six numbers, and a class card draws a sketch of what its atoms
   are doing. Ink lines, ink points, and the red reserved for the one thing that makes the
   card what it is: the centring points of a lattice, the electrons of a metal, the ties of
   an elastomer, the crack in a composite. Everything is deterministic, so a card draws the
   same twice. The viewBox matches figures.js so the two kinds of figure sit at one height. */

window.DRAWINGS = (() => {
  const W = 720, H = 500;
  const f1 = n => n.toFixed(1);
  const rad = d => d * Math.PI / 180;

  /* ---------- unit cells ---------- */

  // Crystallographic axes to Cartesian, the usual way: a along x, b in the xy plane, c up.
  function axes({ a, b, c, alpha, beta, gamma }) {
    const ca = Math.cos(rad(alpha)), cb = Math.cos(rad(beta)), cg = Math.cos(rad(gamma)), sg = Math.sin(rad(gamma));
    const cz = Math.sqrt(Math.max(0, 1 - ca * ca - cb * cb - cg * cg + 2 * ca * cb * cg)) / sg;
    return [[a, 0, 0], [b * cg, b * sg, 0], [c * cb, c * (ca - cb * cg) / sg, c * cz]];
  }

  // An orthographic view: turned 35° about the vertical, then seen from 22° above. Returns
  // screen x, screen y (down) and a depth, larger meaning farther away.
  const TH = rad(-35), PH = rad(22);
  function view([x, y, z]) {
    const X = x * Math.cos(TH) - y * Math.sin(TH);
    const Y = x * Math.sin(TH) + y * Math.cos(TH);
    return [X, -(z * Math.cos(PH) + Y * Math.sin(PH)), Y * Math.cos(PH) - z * Math.sin(PH)];
  }

  const add = (p, q) => [p[0] + q[0], p[1] + q[1], p[2] + q[2]];
  const mul = (p, k) => [p[0] * k, p[1] * k, p[2] * k];
  const frac = (A, [u, v, w]) => add(add(mul(A[0], u), mul(A[1], v)), mul(A[2], w));

  // The cell as an SVG string: the twelve edges, the three hidden ones dashed, the corner
  // points in ink, the centring points in red, and a, b, c on the edges from the origin.
  function cell(l) {
    const A = axes(l.cell);
    const corners = [];
    for (const u of [0, 1]) for (const v of [0, 1]) for (const w of [0, 1]) corners.push([u, v, w]);
    const extra = l.extra || [];
    const all = corners.concat(extra).map(p => view(frac(A, p)));
    // The hexagonal prism, drawn faint around the primitive cell, shares the scaling.
    let prism = [];
    if (l.prism) {
      const r = l.cell.a, h = l.cell.c;
      for (const z of [0, h]) for (let k = 0; k < 6; k++) prism.push(view([r * Math.cos(rad(60 * k)), r * Math.sin(rad(60 * k)), z]));
    }
    const pts = all.concat(prism);
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const s = Math.min((W - 120) / (x1 - x0), (H - 90) / (y1 - y0));
    const ox = (W - s * (x1 - x0)) / 2 - s * x0, oy = (H - s * (y1 - y0)) / 2 - s * y0;
    const S = p => [ox + s * p[0], oy + s * p[1], p[2]];
    const C = corners.map((p, i) => S(all[i]));
    const E = extra.map((p, i) => S(all[corners.length + i]));
    const P = prism.map(S);

    // Edges join corners that differ in one index. The three at the farthest corner are hidden.
    const idx = (u, v, w) => u * 4 + v * 2 + w;
    let far = 0;
    C.forEach((p, i) => { if (p[2] > C[far][2]) far = i; });
    const edges = [];
    for (const u of [0, 1]) for (const v of [0, 1]) for (const w of [0, 1]) {
      const i = idx(u, v, w);
      if (!u) edges.push([i, idx(1, v, w)]);
      if (!v) edges.push([i, idx(u, 1, w)]);
      if (!w) edges.push([i, idx(u, v, 1)]);
    }
    const line = ([i, j], cls) => `<line class="${cls}" x1="${f1(C[i][0])}" y1="${f1(C[i][1])}" x2="${f1(C[j][0])}" y2="${f1(C[j][1])}"/>`;
    const hidden = edges.filter(e => e.includes(far)).map(e => line(e, "edge hidden")).join("");
    const shown = edges.filter(e => !e.includes(far)).map(e => line(e, "edge")).join("");

    let prismSvg = "";
    if (P.length) {
      const ring = k => P.slice(k, k + 6).map(p => `${f1(p[0])},${f1(p[1])}`).join(" ");
      prismSvg = `<polygon class="prism" points="${ring(0)}"/><polygon class="prism" points="${ring(6)}"/>` +
        P.slice(0, 6).map((p, k) => `<line class="prism" x1="${f1(p[0])}" y1="${f1(p[1])}" x2="${f1(P[k + 6][0])}" y2="${f1(P[k + 6][1])}"/>`).join("");
    }

    // Axis letters, a little off the midpoint of each edge from the origin, pushed outward.
    const o = C[idx(0, 0, 0)], cx = C.reduce((t, p) => t + p[0], 0) / 8, cy = C.reduce((t, p) => t + p[1], 0) / 8;
    const label = (p, t) => {
      const mx = (o[0] + p[0]) / 2, my = (o[1] + p[1]) / 2;
      const dx = mx - cx, dy = my - cy, d = Math.hypot(dx, dy) || 1;
      return `<text class="ax" x="${f1(mx + 16 * dx / d)}" y="${f1(my + 16 * dy / d + 5)}" text-anchor="middle">${t}</text>`;
    };
    const labels = label(C[idx(1, 0, 0)], "a") + label(C[idx(0, 1, 0)], "b") + label(C[idx(0, 0, 1)], "c");

    const dot = (p, cls) => `<circle class="${cls}" cx="${f1(p[0])}" cy="${f1(p[1])}" r="7"/>`;
    // Points drawn back to front so a near point covers a far edge, as it should.
    const points = C.map(p => [p, "pt"]).concat(E.map(p => [p, "pt centre"]))
      .sort((x, y) => y[0][2] - x[0][2]).map(([p, cls]) => dot(p, cls)).join("");

    return `<svg class="cell" viewBox="0 0 ${W} ${H}" role="img" aria-label="the ${l.name.toLowerCase()} cell">
      ${prismSvg}${hidden}${shown}${labels}${points}</svg>`;
  }

  /* ---------- sketches for the classes ---------- */

  // A small deterministic noise, so the glass and the polymers come out the same every time.
  const noise = (i, j = 0) => { const x = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453; return x - Math.floor(x); };

  const SKETCH = {
    // Ions in close-packed rows; the loose electrons, red, between them.
    metal() {
      let s = "";
      const r = 24, dx = 66, dy = 57;
      for (let j = 0; j < 7; j++) for (let i = 0; i < 11; i++) {
        const x = 30 + i * dx + (j % 2 ? dx / 2 : 0), y = 50 + j * dy;
        if (x > W - 20) continue;
        s += `<circle class="ion" cx="${x}" cy="${y}" r="${r}"/>`;
        if ((i * 7 + j * 3) % 4 === 0 && x < W - 60) s += `<circle class="free" cx="${x + dx / 2}" cy="${y - 2 + (j % 2 ? 6 : -6)}" r="4.5"/>`;
      }
      return s;
    },
    // Two kinds of ion in a square grid, each locked to the other kind.
    ceramic() {
      let s = "";
      const d = 72;
      for (let j = 0; j < 6; j++) for (let i = 0; i < 9; i++) {
        const x = 72 + i * d, y = 70 + j * d;
        if (y > H - 30) continue;
        s += (i + j) % 2 ? `<circle class="ion" cx="${x}" cy="${y}" r="27"/>` : `<circle class="small" cx="${x}" cy="${y}" r="12"/>`;
      }
      return s;
    },
    // The same network as a crystal would have, with the order shaken out of it.
    glass() {
      const cols = 9, rows = 6, dx = 78, dy = 76;
      const P = [];
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++)
        P.push([48 + i * dx + (noise(i, j) - 0.5) * 42, 50 + j * dy + (noise(j, i + 50) - 0.5) * 40]);
      let s = "";
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
        const p = P[j * cols + i];
        if (i < cols - 1 && noise(i + 100, j) > 0.12) { const q = P[j * cols + i + 1]; s += `<line class="bond" x1="${f1(p[0])}" y1="${f1(p[1])}" x2="${f1(q[0])}" y2="${f1(q[1])}"/>`; }
        if (j < rows - 1 && noise(i, j + 100) > 0.12) { const q = P[(j + 1) * cols + i]; s += `<line class="bond" x1="${f1(p[0])}" y1="${f1(p[1])}" x2="${f1(q[0])}" y2="${f1(q[1])}"/>`; }
      }
      for (const p of P) s += `<circle class="node" cx="${f1(p[0])}" cy="${f1(p[1])}" r="7"/>`;
      return s;
    },
    // Random walks, each a molecule; one of them red, so a single chain can be followed.
    polymer() {
      let s = "";
      for (let k = 0; k < 9; k++) {
        let x = 60 + noise(k, 1) * 600, y = 40 + noise(k, 2) * 420, h = noise(k, 3) * 6.28;
        const pts = [[x, y]];
        for (let n = 0; n < 70; n++) {
          h += (noise(k, n + 10) - 0.5) * 1.5;
          x += 11 * Math.cos(h); y += 11 * Math.sin(h);
          if (x < 20 || x > W - 20) { h = Math.PI - h; x = Math.max(20, Math.min(W - 20, x)); }
          if (y < 20 || y > H - 20) { h = -h; y = Math.max(20, Math.min(H - 20, y)); }
          pts.push([x, y]);
        }
        s += `<polyline class="chain${k === 4 ? " one" : ""}" points="${pts.map(p => `${f1(p[0])},${f1(p[1])}`).join(" ")}"/>`;
      }
      return s;
    },
    // Coiled chains lying across the box, tied to their neighbours at a few red points.
    elastomer() {
      let s = "";
      const Y = k => x => 70 + k * 90 + 26 * Math.sin(x / 19 + k * 1.3) + 8 * Math.sin(x / 7 + k);
      const curves = [];
      for (let k = 0; k < 5; k++) {
        const y = Y(k), pts = [];
        for (let x = 20; x <= W - 20; x += 4) pts.push([x, y(x)]);
        curves.push(y);
        s += `<polyline class="chain" points="${pts.map(p => `${f1(p[0])},${f1(p[1])}`).join(" ")}"/>`;
      }
      const ties = [[0, 150], [1, 420], [2, 260], [3, 560], [0, 610], [2, 90]];
      for (const [k, x] of ties) {
        const y1 = curves[k](x), y2 = curves[k + 1](x);
        s += `<line class="tie" x1="${x}" y1="${f1(y1)}" x2="${x}" y2="${f1(y2)}"/>` +
             `<circle class="knot" cx="${x}" cy="${f1(y1)}" r="6"/><circle class="knot" cx="${x}" cy="${f1(y2)}" r="6"/>`;
      }
      return s;
    },
    // Fibres in a matrix, and a crack coming down from the top that has to stop at each one.
    composite() {
      let s = `<rect class="matrix" x="0" y="0" width="${W}" height="${H}"/>`;
      const ys = [52, 118, 190, 258, 330, 398, 462];
      for (const y of ys) s += `<line class="fibre" x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
      // The crack: straight down, then along the fibre, then down again, each step shorter.
      const crack = [[360, 0], [362, 44], [300, 44], [298, 60], [320, 110], [368, 110], [370, 126], [350, 182]];
      s += `<polyline class="crack" points="${crack.map(p => p.join(",")).join(" ")}"/>`;
      return s;
    },
    // Two bands and the gap between them: one electron has jumped, and left a hole.
    semiconductor() {
      const x = 190, w = 340;
      return `<rect class="band filled" x="${x}" y="300" width="${w}" height="130"/>
        <rect class="band empty" x="${x}" y="70" width="${w}" height="130"/>
        <line class="gapline" x1="${x + w / 2}" y1="200" x2="${x + w / 2}" y2="300"/>
        <text class="lab" x="${x + w / 2 + 14}" y="255">the gap</text>
        <text class="lab" x="${x + w + 14}" y="140">empty band</text>
        <text class="lab" x="${x + w + 14}" y="370">full band</text>
        <circle class="free" cx="${x + 80}" cy="170" r="7"/>
        <circle class="hole" cx="${x + 80}" cy="330" r="7"/>`;
    }
  };

  function sketch(c) {
    const body = (SKETCH[c.sketch] || (() => ""))();
    return `<svg class="sketch ${c.sketch}" viewBox="0 0 ${W} ${H}" role="img" aria-label="a sketch of a ${c.name.toLowerCase()}">${body}</svg>`;
  }

  return { cell, sketch };
})();

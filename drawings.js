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

  // An orthographic view: at rest turned 35° about the vertical, then seen from 22° above.
  // Returns screen x, screen y (down) and a depth, larger meaning farther away. The pointer
  // can turn it (inner, below), so the angles live in a variable.
  const REST = { th: -35, ph: 22 };
  let VIEW = { th: rad(REST.th), ph: rad(REST.ph) };
  function view([x, y, z]) {
    const TH = VIEW.th, PH = VIEW.ph;
    const X = x * Math.cos(TH) - y * Math.sin(TH);
    const Y = x * Math.sin(TH) + y * Math.cos(TH);
    return [X, -(z * Math.cos(PH) + Y * Math.sin(PH)), Y * Math.cos(PH) - z * Math.sin(PH)];
  }

  const add = (p, q) => [p[0] + q[0], p[1] + q[1], p[2] + q[2]];
  const mul = (p, k) => [p[0] * k, p[1] * k, p[2] * k];
  const frac = (A, [u, v, w]) => add(add(mul(A[0], u), mul(A[1], v)), mul(A[2], w));

  // The cell drawn into a box {x, y, w, h}: the twelve edges, the three hidden ones dashed,
  // the corner points in ink, the centring points in red, and a, b, c on the edges from the
  // origin. opt.r is the point radius, opt.font the letter size, opt.labels false drops them.
  function cellInto(l, box, opt = {}) {
    const BW = box.w, BH = box.h, R = opt.r || 7, FS = opt.font || 18, PAD = opt.pad == null ? 0.17 : opt.pad;
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
    const s = Math.min(BW * (1 - PAD) / (x1 - x0), BH * (1 - PAD) / (y1 - y0));
    const ox = box.x + (BW - s * (x1 - x0)) / 2 - s * x0, oy = box.y + (BH - s * (y1 - y0)) / 2 - s * y0;
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
    // Edges in the order a pencil would draw them: from the origin outward, by index.
    const line = ([i, j], cls, k) => `<line class="${cls}" style="--i:${k}" x1="${f1(C[i][0])}" y1="${f1(C[i][1])}" x2="${f1(C[j][0])}" y2="${f1(C[j][1])}"/>`;
    const hidden = edges.filter(e => e.includes(far)).map((e, k) => line(e, "side hidden", k)).join("");
    const shown = edges.filter(e => !e.includes(far)).sort((p, q) => Math.min(...p) - Math.min(...q)).map((e, k) => line(e, "side", k)).join("");

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
      return `<text class="ax" style="font-size:${FS}px" x="${f1(mx + FS * 0.9 * dx / d)}" y="${f1(my + FS * 0.9 * dy / d + FS * 0.3)}" text-anchor="middle">${t}</text>`;
    };
    const labels = opt.labels === false ? "" : label(C[idx(1, 0, 0)], "a") + label(C[idx(0, 1, 0)], "b") + label(C[idx(0, 0, 1)], "c");

    const dot = (p, cls, k) => `<circle class="${cls}" style="--i:${k}" cx="${f1(p[0])}" cy="${f1(p[1])}" r="${R}"/>`;
    // Points drawn back to front so a near point covers a far edge, as it should; the
    // centring points last, so they arrive after the corners when the view assembles.
    const points = C.map(p => [p, "pt"]).sort((x, y) => y[0][2] - x[0][2])
      .concat(E.map(p => [p, "pt centre"]).sort((x, y) => y[0][2] - x[0][2]))
      .map(([p, cls], k) => dot(p, cls, k)).join("");

    return `${prismSvg}${hidden}${shown}${labels}${points}`;
  }

  function cell(l) {
    return `<svg class="cell" viewBox="0 0 ${W} ${H}" role="img" aria-label="the ${l.name.toLowerCase()} cell">
      ${cellInto(l, { x: 0, y: 0, w: W, h: H })}</svg>`;
  }

  // The fourteen as MIT draws them, turned on its side so the card can be wide: each system
  // in a column with its name and its rule, and its lattices under it, each a wire cell with
  // a sphere on every point and the centring points red. A blank is a lattice that would
  // only repeat a smaller cell of another letter.
  const SYSTEMS = [
    ["cubic", "a = b = c", "all 90°"], ["tetragonal", "a = b ≠ c", "all 90°"], ["orthorhombic", "a ≠ b ≠ c", "all 90°"],
    ["trigonal", "a = b = c", "all equal, not 90°"], ["hexagonal", "a = b ≠ c", "90°, 90°, 120°"],
    ["monoclinic", "a ≠ b ≠ c", "90°, β, 90°"], ["triclinic", "a ≠ b ≠ c", "none 90°"]
  ];
  const ORDER = ["primitive", "base-centred", "body-centred", "face-centred", "rhombohedral"];
  function table(lattices) {
    const TW = 1000, TH = 640, top = 78, colW = TW / 7, rowH = (TH - top) / 4;
    let s = "";
    SYSTEMS.forEach(([name, edges, angles], i) => {
      const x = i * colW;
      s += `<text class="th" x="${f1(x + colW / 2)}" y="24" text-anchor="middle">${name}</text>` +
           `<text class="td" x="${f1(x + colW / 2)}" y="44" text-anchor="middle">${edges}</text>` +
           `<text class="td" x="${f1(x + colW / 2)}" y="62" text-anchor="middle">${angles}</text>`;
      if (i) s += `<line class="grid" x1="${f1(x)}" y1="8" x2="${f1(x)}" y2="${TH - 8}"/>`;
      const mine = lattices.filter(l => l.system === name).sort((p, q) => ORDER.indexOf(p.centring) - ORDER.indexOf(q.centring));
      mine.forEach((l, k) => {
        const box = { x: x + 6, y: top + k * rowH, w: colW - 12, h: rowH - 18 };
        const draw = Object.assign({}, l, { prism: false });
        // Each cell is a link to its card: a group with data-goto, which app.js answers.
        s += `<g class="mini" data-goto="${l.id}" role="link" tabindex="0"><title>${l.name}: go to its card</title>` +
             `<rect class="hit" x="${f1(box.x)}" y="${f1(box.y)}" width="${f1(box.w)}" height="${f1(box.h + 18)}"/>` +
             cellInto(draw, box, { r: 5.5, labels: false, pad: 0.22 }) +
             `<text class="td" x="${f1(x + colW / 2)}" y="${f1(top + (k + 1) * rowH - 8)}" text-anchor="middle">${l.symbol}</text></g>`;
      });
    });
    s += `<text class="td" x="${TW - 12}" y="${TH - 12}" text-anchor="end">each cell is a card below: click it</text>`;
    return `<svg class="cell table" viewBox="0 0 ${TW} ${TH}" role="img" aria-label="the seven systems and the fourteen lattices">${s}</svg>`;
  }

  // The five centrings on one cube and one rhombohedron, letters beneath.
  function centrings() {
    const cube = { a: 1, b: 1, c: 1, alpha: 90, beta: 90, gamma: 90 };
    const five = [
      ["P", "primitive", cube, []],
      ["C", "base-centred", cube, [[0.5, 0.5, 0], [0.5, 0.5, 1]]],
      ["I", "body-centred", cube, [[0.5, 0.5, 0.5]]],
      ["F", "face-centred", cube, [[0.5, 0.5, 0], [0.5, 0.5, 1], [0.5, 0, 0.5], [0.5, 1, 0.5], [0, 0.5, 0.5], [1, 0.5, 0.5]]],
      ["R", "rhombohedral", { a: 1, b: 1, c: 1, alpha: 75, beta: 75, gamma: 75 }, []]
    ];
    const colW = W / 5;
    let s = "";
    five.forEach(([letter, word, c, extra], i) => {
      s += cellInto({ cell: c, extra }, { x: i * colW, y: 40, w: colW, h: H - 170 }, { r: 7, labels: false, pad: 0.2 }) +
           `<text class="big" x="${f1((i + 0.5) * colW)}" y="${H - 72}" text-anchor="middle">${letter}</text>` +
           `<text class="td" x="${f1((i + 0.5) * colW)}" y="${H - 44}" text-anchor="middle">${word}</text>` +
           `<text class="td" x="${f1((i + 0.5) * colW)}" y="${H - 24}" text-anchor="middle">${["1 per cell", "2 per cell", "2 per cell", "4 per cell", "1, or 3 hexagonal"][i]}</text>`;
    });
    return `<svg class="cell centrings" viewBox="0 0 ${W} ${H}" role="img" aria-label="the five centrings">${s}</svg>`;
  }

  // Every lattice point of a block of n cells each way, in fractional coordinates, each
  // marked as a corner or a centring point. Shared points are counted once.
  function block(l, n) {
    const seen = new Map();
    const base = [[0, 0, 0]].map(p => [p, false]).concat((l.extra || []).map(p => [p, true]));
    for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) for (let k = 0; k <= n; k++)
      for (const [[u, v, w], c] of base) {
        const p = [i + u, j + v, k + w];
        if (p.some(x => x > n + 1e-9)) continue;
        const key = p.map(x => x.toFixed(3)).join(",");
        if (!seen.has(key)) seen.set(key, [p, c]);
      }
    return [...seen.values()];
  }

  // The nearest-neighbour distance and the neighbours of the origin, searched two cells out.
  function nearest(l) {
    const A = axes(l.cell);
    const base = [[0, 0, 0]].concat(l.extra || []);
    const found = [], seen = new Set();
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) for (let k = -2; k <= 2; k++)
      for (const [u, v, w] of base) {
        // The same point can be reached from two cells (a face centre is on two faces).
        const key = [i + u, j + v, k + w].map(x => x.toFixed(3)).join(",");
        if (seen.has(key)) continue;
        seen.add(key);
        const p = frac(A, [i + u, j + v, k + w]);
        const d = Math.hypot(...p);
        if (d > 1e-6) found.push([d, p]);
      }
    const d = Math.min(...found.map(f => f[0]));
    return { d, pts: found.filter(f => f[0] < d * 1.02).map(f => f[1]) };
  }

  // Fit projected points, each with a radius in model units, into the box.
  function fit(pts, r) {
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
    const x0 = Math.min(...xs) - r, x1 = Math.max(...xs) + r, y0 = Math.min(...ys) - r, y1 = Math.max(...ys) + r;
    const s = Math.min((W - 40) / (x1 - x0), (H - 40) / (y1 - y0));
    const ox = (W - s * (x1 - x0)) / 2 - s * x0, oy = (H - s * (y1 - y0)) / 2 - s * y0;
    return { s, S: p => [ox + s * p[0], oy + s * p[1], p[2]] };
  }

  // Two cells each way with a sphere on every point, each touching its nearest neighbours,
  // drawn back to front so the near ones cover the far ones. The centring points stay red,
  // so it shows where they nestle between the corner ones.
  function packing(l, n = 2) {
    const A = axes(l.cell);
    const { d } = nearest(l);
    const pts = block(l, n).map(([p, c]) => [view(frac(A, p)), c]);
    const { s, S } = fit(pts.map(p => p[0]), d / 2);
    const r = s * d / 2;
    // The outline of the block, faint, so the eye has the box the spheres fill.
    const box = [];
    for (const u of [0, 1]) for (const v of [0, 1]) for (const w of [0, 1]) box.push(S(view(frac(A, [u * n, v * n, w * n]))));
    const idx = (u, v, w) => u * 4 + v * 2 + w;
    let edges = "";
    for (const u of [0, 1]) for (const v of [0, 1]) for (const w of [0, 1]) {
      const p = box[idx(u, v, w)];
      for (const q of [!u && box[idx(1, v, w)], !v && box[idx(u, 1, w)], !w && box[idx(u, v, 1)]]) if (q)
        edges += `<line class="box" x1="${f1(p[0])}" y1="${f1(p[1])}" x2="${f1(q[0])}" y2="${f1(q[1])}"/>`;
    }
    const spheres = pts.map(([p, c]) => [S(p), c]).sort((x, y) => y[0][2] - x[0][2])
      .map(([p, c], k) => `<circle class="sphere${c ? " centre" : ""}" style="--i:${k}" cx="${f1(p[0])}" cy="${f1(p[1])}" r="${f1(r)}"/>`).join("");
    return `<svg class="cell packing" viewBox="0 0 ${W} ${H}" role="img" aria-label="the ${l.name.toLowerCase()} ${n === 1 ? "cell of spheres" : "packing"}">${edges}${spheres}</svg>`;
  }
  const hardcell = l => packing(l, 1);

  // Close-packed layers seen from above: the A layer as circles, the B layer red in the
  // hollows, and the third layer either in the hollows left over (C, the cube) or back
  // over A (the hexagonal stack).
  function stacking(l) {
    const abc = l.stacking === "abc";
    const r = 34, dx = 2 * r, dy = r * Math.sqrt(3);
    let s = "";
    const A = [], B = [], Cc = [];
    for (let j = 0; j < 6; j++) for (let i = 0; i < 10; i++) {
      const x = 40 + i * dx + (j % 2 ? r : 0), y = 50 + j * dy;
      if (x > W - 30 || y > H - 80) continue;
      A.push([x, y]);
      if (j < 5) { B.push([x + r, y + dy / 3]); Cc.push([x, y + 2 * dy / 3]); }
    }
    A.forEach(([x, y], k) => { s += `<circle class="layer a" style="--i:${k}" cx="${f1(x)}" cy="${f1(y)}" r="${r}"/>`; });
    B.forEach(([x, y], k) => { if (x < W - 30) s += `<circle class="layer b" style="--i:${k}" cx="${f1(x)}" cy="${f1(y)}" r="${r * 0.55}"/>`; });
    (abc ? Cc : A).forEach(([x, y], k) => { s += `<circle class="layer c" style="--i:${k}" cx="${f1(x)}" cy="${f1(y)}" r="${r * 0.32}"/>`; });
    s += `<text class="count" x="24" y="${H - 24}">${abc
      ? "A, then B in its hollows, then C in the hollows both left: the cube"
      : "A, then B in its hollows, then back over A: the hexagonal stack"}</text>`;
    return `<svg class="cell stacking" viewBox="0 0 ${W} ${H}" role="img" aria-label="the ${l.name.toLowerCase()} stacking">${s}</svg>`;
  }

  // How the 230 come about: systems, lattices, point groups, and the two operations that
  // only an endless pattern allows.
  function hierarchy() {
    const rows = [["7", "crystal systems", "the shape of the box"], ["14", "Bravais lattices", "where the points sit"],
                  ["32", "point groups", "rotations, mirrors, inversion"], ["230", "space groups", "add screw axes and glide planes"]];
    let s = "";
    rows.forEach(([n, name, note], i) => {
      const y = 36 + i * 112;
      s += `<g class="hrow" style="--i:${i}"><rect class="hbox" x="90" y="${y}" width="540" height="76"/>` +
           `<text class="big" x="130" y="${y + 50}">${n}</text>` +
           `<text class="hname" x="250" y="${y + 36}">${name}</text>` +
           `<text class="td" x="250" y="${y + 60}">${note}</text>` +
           (i < 3 ? `<line class="harrow" x1="360" y1="${y + 76}" x2="360" y2="${y + 112}"/><path class="hhead" d="M352 ${y + 104}l8 8 8-8"/>` : "") + `</g>`;
    });
    return `<svg class="cell hierarchy" viewBox="0 0 ${W} ${H}" role="img" aria-label="how the space groups are built">${s}</svg>`;
  }

  // The glide plane and the screw axis, drawn with the crystallographer's comma: a glide
  // reflects and slides half a step; a two-fold screw turns and climbs half a step.
  function glide() {
    // sx, sy of -1 mirror the comma: a glide mirrors it top to bottom, a two-fold screw seen
    // from the side mirrors it left to right (the half turn about the axis).
    let k = 0;
    const comma = (x, y, sx, sy) =>
      `<g class="comma" style="--i:${k++}"><path transform="translate(${x} ${y}) scale(${sx} ${sy})" d="M0 0c10-16 26-10 20 6c-5 12-16 20-28 24c7-9 8-18 8-30z"/></g>`;
    let s = `<line class="gline" x1="30" y1="150" x2="${W / 2 - 30}" y2="150"/>`;
    for (let i = 0; i < 4; i++) {
      s += comma(60 + i * 72, 110, 1, 1) + comma(96 + i * 72, 190, 1, -1);
    }
    s += `<text class="count" x="30" y="${H - 160}">glide: reflect, then slide half a step</text>`;
    const ax = W * 0.75;
    s += `<line class="gline" x1="${ax}" y1="30" x2="${ax}" y2="${H - 120}"/>`;
    for (let i = 0; i < 5; i++) {
      const y = 60 + i * 64, left = i % 2;
      s += comma(ax + (left ? -50 : 50), y, left ? -1 : 1, 1);
    }
    s += `<text class="count" x="${W / 2 + 20}" y="${H - 160}">2₁ screw: turn half round, climb half a step</text>`;
    s += `<text class="td" x="30" y="${H - 120}">neither leaves any point fixed, which a mirror or an axis would; only a pattern that goes on for ever can have them</text>`;
    return `<svg class="cell glide" viewBox="0 0 ${W} ${H}" role="img" aria-label="a glide plane and a screw axis">${s}</svg>`;
  }

  // One point, red, and every point at the nearest distance from it, joined to it, with the
  // count written in the corner. For a metal with one atom on each point this is its
  // coordination; a two-atom basis adds neighbours the lattice alone does not show.
  function neighbours(l) {
    const { pts } = nearest(l);
    const all = [[0, 0, 0]].concat(pts).map(view);
    const { S } = fit(all, 0.18);
    const c = S(all[0]);
    const N = all.slice(1).map(S);
    const bonds = N.map((p, k) => `<line class="bond" style="--i:${k}" x1="${f1(c[0])}" y1="${f1(c[1])}" x2="${f1(p[0])}" y2="${f1(p[1])}"/>`).join("");
    const dots = N.map((p, k) => [p, "pt", k]).concat([[c, "pt centre", 0]]).sort((x, y) => y[0][2] - x[0][2])
      .map(([p, cls, k]) => `<circle class="${cls}" style="--i:${k}" cx="${f1(p[0])}" cy="${f1(p[1])}" r="${cls.includes("centre") ? 12 : 10}"/>`).join("");
    const label = `<text class="count" x="24" y="${H - 24}">${N.length} nearest neighbours</text>`;
    return `<svg class="cell neighbours" viewBox="0 0 ${W} ${H}" role="img" aria-label="the ${l.name.toLowerCase()} neighbours">${bonds}${dots}${label}</svg>`;
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

  // The same drawing turned to other angles, as inner SVG markup, for redrawing under the
  // pointer: app.js swaps it into the svg that is already on the page.
  const TURNABLE = { cell, packing, hardcell, neighbours, centrings };
  function inner(kind, l, th, ph) {
    const fn = TURNABLE[kind];
    if (!fn) return null;
    const keep = VIEW;
    VIEW = { th: rad(th), ph: rad(ph) };
    try { return fn(l).replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, ""); }
    finally { VIEW = keep; }
  }

  return { cell, packing, hardcell, neighbours, stacking, table, centrings, hierarchy, glide, sketch, inner, REST, turnable: kind => !!TURNABLE[kind] };
})();

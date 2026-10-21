/* The drawn swatches, used where no freely licensed photograph of a material exists.
   Every card in the catalogue currently has a photograph, so this is a fallback — but a
   deterministic one: a given id always draws the same way, so the page never flickers. */

// Small deterministic PRNG so a given material always draws the same way.
function rng(seed) {
  let s = 0;
  for (const ch of seed) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function overlay(pattern, id, rand) {
  const p = [];
  if (pattern === "fiber") {
    for (let x = 0; x < 400; x += 5) {
      p.push(`<rect x="${x}" y="0" width="${1 + rand() * 1.6}" height="300" fill="#fff" opacity="${0.04 + rand() * 0.12}"/>`);
    }
  } else if (pattern === "brushed") {
    for (let y = 0; y < 300; y += 3) {
      p.push(`<rect x="0" y="${y}" width="400" height="${0.6 + rand()}" fill="#fff" opacity="${0.02 + rand() * 0.09}"/>`);
    }
  } else if (pattern === "ribbon") {
    for (let i = -6; i < 16; i++) {
      const x = i * 34;
      p.push(`<rect x="${x}" y="-60" width="16" height="430" fill="#fff" opacity="${0.04 + rand() * 0.1}" transform="rotate(18 200 150)"/>`);
    }
  } else if (pattern === "laminate") {
    let y = 0;
    while (y < 300) {
      const h = 5 + rand() * 13;
      p.push(`<rect x="0" y="${y}" width="400" height="${h}" fill="${rand() > 0.5 ? "#fff" : "#000"}" opacity="${0.04 + rand() * 0.1}"/>`);
      y += h;
    }
  } else if (pattern === "grain" || pattern === "powder" || pattern === "speckle") {
    const n = pattern === "speckle" ? 260 : 460;
    const r = pattern === "grain" ? 3.4 : 2.2;
    for (let i = 0; i < n; i++) {
      p.push(`<circle cx="${rand() * 400}" cy="${rand() * 300}" r="${0.7 + rand() * r}" fill="${rand() > 0.45 ? "#fff" : "#000"}" opacity="${0.05 + rand() * 0.16}"/>`);
    }
  } else if (pattern === "weave") {
    for (let x = 0; x < 400; x += 16) {
      p.push(`<rect x="${x}" y="0" width="8" height="300" fill="#000" opacity="0.09"/>`);
    }
    for (let y = 0; y < 300; y += 16) {
      p.push(`<rect x="0" y="${y + 8}" width="400" height="8" fill="#fff" opacity="0.11"/>`);
    }
  } else if (pattern === "honeycomb") {
    const r = 17, dx = r * 1.74, dy = r * 1.5;
    for (let row = -1; row * dy < 320; row++) {
      for (let col = -1; col * dx < 420; col++) {
        const cx = col * dx + (row % 2 ? dx / 2 : 0);
        const cy = row * dy;
        const pts = [];
        for (let k = 0; k < 6; k++) {
          const a = Math.PI / 180 * (60 * k - 30);
          pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
        }
        p.push(`<polygon points="${pts.join(" ")}" fill="none" stroke="#000" stroke-width="2.4" opacity="0.2"/>`);
      }
    }
  }
  return p.join("");
}

function makeSwatch(mat) {
  const { pattern, colors } = mat.swatch;
  const id = "sw-" + mat.id;
  const rand = rng(mat.id + pattern);
  return `<svg viewBox="0 0 400 300" role="img" aria-label="Illustration of ${esc(mat.name)}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="${id}-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${colors[1]}"/>
        <stop offset="0.45" stop-color="${colors[0]}"/>
        <stop offset="1" stop-color="${colors[2]}"/>
      </linearGradient>
      <radialGradient id="${id}-s" cx="0.3" cy="0.22" r="0.75">
        <stop offset="0" stop-color="#fff" stop-opacity="0.34"/>
        <stop offset="0.55" stop-color="#fff" stop-opacity="0.05"/>
        <stop offset="1" stop-color="#000" stop-opacity="0.28"/>
      </radialGradient>
      <clipPath id="${id}-c"><rect width="400" height="300"/></clipPath>
    </defs>
    <g clip-path="url(#${id}-c)">
      <rect width="400" height="300" fill="url(#${id}-g)"/>
      ${overlay(pattern, id, rand)}
      <rect width="400" height="300" fill="url(#${id}-s)"/>
    </g>
  </svg>`;
}

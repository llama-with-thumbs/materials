/* The curriculum wheel: Gropius's diagram of the Bauhaus course, drawn again as rings
   that answer the pointer. The figure is from the statutes of July 1922 and was reprinted
   in the 1923 exhibition book; its English wording is the one usually reproduced. Read it
   from the outside in: the preliminary course, half a year; the three years of workshop
   training with the studies that ran beside it; the seven workshops by their material;
   and building at the centre. Every segment carries what is known about it, and the
   catalogue's own workshop where it has one. Set in the school's lowercase, which Bayer
   made the rule in 1925: the words are the diagram's, the case is the page's. */

window.WHEEL = (() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const CAT = "./#cat=";

  // The segments. ring: 0 centre, 1 workshops, 2 studies, 3 the preliminary course.
  // a0, a1: degrees clockwise from the top. en/de: the words on the diagram, both tongues.
  const SEG = [
    { key: "bau", ring: 0, en: "building", de: "bau",
      sub: "the centre · Bau · site, testing, design, building and engineering science",
      text: [
        "Gropius's programme of 1919 opened with the sentence that the goal of all creative work is the building, and the diagram puts it at the middle, the place a student arrives at last. The four words round it are the diagram's own: the site, meaning a testing ground; testing; design; and building and engineering science.",
        "For eight years it was a destination without a course. The school taught no architecture until 1927; a student who got this far worked in the private office of Gropius and Adolf Meyer, or on the one house the workshops built together, the Haus am Horn of 1923, designed by the painter Georg Muche. The building department opened in April 1927 under Hannes Meyer, who became director in 1928 and built the trade-union school at Bernau with Hans Wittwer and the students. Under Mies van der Rohe, from 1930, the school became in effect a school of building."
      ],
      cats: ["composite"], lib: ["gropius1919", "gropius1930bd"] },

    { key: "wood", ring: 1, a0: 0, a1: 360 / 7, en: "wood", de: "holz",
      sub: "the wood sculpture workshop and the joinery · Weimar 1919, Dessau to 1933",
      text: [
        "Two workshops in Weimar handled wood. The wood sculpture shop carved the whole interior of the Sommerfeld house in 1920 and 1921, the apprentice Joost Schmidt cutting its doors and stair cladding, and made models for the other shops. The joinery was Itten's from 1919 to 1922, Gropius's own from 1922 to 1925, and Marcel Breuer's from 1925 to 1928: the African chair of 1921, the slatted chair of 1924, the furniture of the Haus am Horn, and the stacking tables Thonet put into production in 1929.",
        "In Dessau the sculpture shops were merged under Schmidt and the joinery became, in 1929, the fitting-out workshop. Breuer's bent tubular steel, the club chair of 1926, was made outside the school; the wood stayed."
      ],
      cats: ["natural"] },

    { key: "metal", ring: 1, a0: 360 / 7, a1: 2 * 360 / 7, en: "metal", de: "metall",
      sub: "the metal workshop · 1919 to 1929, then part of the fitting-out workshop",
      text: [
        "It began in the old gold, silver and copper forge of the Weimar art school, with Itten as master of form from 1919 and the silversmith Christian Dell as master of craft from 1922. When Itten left in 1923 László Moholy-Nagy turned the forge into a design laboratory: prototypes for industry, a small production line, and the pieces the school is remembered by, the Bauhaus lamp of 1924 by Wagenfeld and Jucker, Marianne Brandt's tea infuser, Tümpel's and Brandt's ashtrays.",
        "In Dessau the shop lit the new building with its own lamps, numbered ME, and in 1928, with Brandt running it, signed contracts with the lamp makers Schwintzer & Gräff of Berlin and Körting & Mathiesen of Leipzig, whose Kandem desk lamp by Brandt and Hin Bredendieck sold in tens of thousands. In 1929 it was folded into the fitting-out workshop under Alfred Arndt."
      ],
      cats: ["metal"], lib: ["gropius1925na", "brandt1966"] },

    { key: "textiles", ring: 1, a0: 2 * 360 / 7, a1: 3 * 360 / 7, en: "textiles", de: "gewebe",
      sub: "the weaving workshop · 1919 to 1933, the most productive of them all",
      text: [
        "It opened in 1919 with Itten as master of form and Helene Börner teaching the craft until 1925; the women's class, where most women were sent whatever they had asked for, was merged into it in 1920. Georg Muche ran it from 1921 to 1927 and pushed it from the hand loom toward industrial production and the so-called Bauhaus fabrics sold by the metre; Gunta Stölzl, who had taught herself dyeing as a student, led it to 1931, then Lilly Reich.",
        "The students learned weaving, spinning, dyeing, crochet, macramé and embroidery, and put Klee's and Kandinsky's colour teaching through the loom: Stölzl's slit tapestry of 1927, Benita Koch-Otte's nursery carpet of 1923, Anni Albers's wall cloths. Under Hannes Meyer the work turned to cheap fabrics and synthetic fibres for buildings. It was the workshop that paid."
      ],
      cats: ["fibre", "fabric", "warmth"], lib: ["stolzl1931", "annialbers1965"] },

    { key: "color", ring: 1, a0: 3 * 360 / 7, a1: 4 * 360 / 7, en: "colour", de: "farbe",
      sub: "the wall-painting workshop · 1920 to 1933, the fitting-out workshop from 1929",
      text: [
        "Colour on the diagram meant the wall-painting workshop: Itten first, Oskar Schlemmer and Wassily Kandinsky from 1922 to 1925, then Hinnerk Scheper, who had trained in it, from 1925 to 1933, with Alfred Arndt standing in while Scheper was in Moscow from 1929 to 1931. It painted the corridors of the Weimar building to Itten's scheme, the murals of the 1923 exhibition, and gave each of the Dessau masters' houses its own colour plan, Scheper letting the building decide where colour went and using it to show the way through.",
        "Its best seller was paper: in 1929 the Hanover firm Rasch took an exclusive contract for Bauhaus wallpaper, designed by students and in production from 1930. This catalogue has no paint workshop. Its colour is one red, and the three primaries are kept for the three forms."
      ],
      cats: [], lib: ["kandinsky1926"] },

    { key: "glass", ring: 1, a0: 4 * 360 / 7, a1: 5 * 360 / 7, en: "glass", de: "glas",
      sub: "the glass-painting workshop · Weimar 1920 to 1925",
      text: [
        "Stained glass had its own workshop in Weimar, with Itten and then Paul Klee as masters of form, and Josef Albers, who had arrived as a student in 1920 and built the shop up from salvaged glass, as its craftsman from 1923. It made leaded windows for the Sommerfeld house in 1921 and the Otte house in 1922, and Albers's sandblasted flashed-glass pictures came out of it.",
        "It did not go to Dessau; when the school moved in 1925 the workshop closed and Albers went to the preliminary course. Glass stayed in the Bauhaus as a material of the building, the curtain wall of the Dessau workshop wing, rather than of a workshop."
      ],
      cats: ["ceramic"] },

    { key: "clay", ring: 1, a0: 5 * 360 / 7, a1: 6 * 360 / 7, en: "clay", de: "ton",
      sub: "the pottery at Dornburg · 1919 to 1925",
      text: [
        "The pottery opened in 1919 and moved in 1920 to Dornburg an der Saale, twenty kilometres from Weimar, into the stables of a castle, because there was a kiln and a master potter there: Max Krehan, master of craft until 1925, with the sculptor Gerhard Marcks as master of form. Theodor Bogler and Otto Lindig were its apprentices and then its masters.",
        "In 1923 it turned from the wheel to slip casting and designed for the factory: Bogler's combination teapot, built from interchangeable parts, and his mocha machine, shown at the Werkbund exhibition in Stuttgart in 1924. It was the one workshop that did not survive the move to Dessau in 1925; Lindig kept part of it going in Weimar."
      ],
      cats: ["ceramic"] },

    { key: "stone", ring: 1, a0: 6 * 360 / 7, a1: 360, en: "stone", de: "stein",
      sub: "the stone sculpture workshop · Weimar 1919 to 1925",
      text: [
        "Weimar kept separate workshops for stone and for wood, both directed in practice by Itten and then Schlemmer, with the sculptor Josef Hartwig, who carved the Bauhaus chess set of 1924, as the master of craft. The stone shop cut the Monument to the March Dead in the Weimar cemetery in 1921 and 1922 to Gropius's design, and made plaster models for the pottery and fittings for the 1923 exhibition.",
        "In Dessau the two were merged into one sculpture workshop under the young master Joost Schmidt, which taught spatial thinking through elementary sculpture and turned, by 1929, to exhibition design. The catalogue has no stone; its nearest shelf is wood, bone and horn, and the lattices."
      ],
      cats: ["natural"] },

    { key: "nature", ring: 2, a0: 0, a1: 76, en: "study of nature", de: "naturstudium",
      sub: "the studies beside the workshop, three years",
      text: [
        "Drawing from nature ran beside the workshop for the whole three years. Itten had students draw a thistle, a plant stem or a block of wood until they had its structure, not its outline; Klee carried on from 1921 with studies of growth and movement; Moholy-Nagy and later Walter Peterhans brought the camera to it. The point was not botany but the habit of looking at how a thing is built before deciding what to make of it."
      ],
      cats: ["natural"] },

    { key: "materials", ring: 2, a0: 76, a1: 150, en: "study of materials", de: "materialkunde",
      sub: "the studies beside the workshop, three years",
      text: [
        "The science of the workshop's own stuff: what a clay body does in the kiln, what a dye does to wool, what an alloy does under the hammer. In Weimar it was taught by the masters of craft from experience; under Hannes Meyer in Dessau the programme added lectures from outside the school in the sciences and in sociology, on the argument that a designer who could not reckon the material could not design for the factory. This catalogue is a study of materials, and nothing else."
      ],
      cats: ["metal", "ceramic", "polymer"] },

    { key: "space", ring: 2, a0: 150, a1: 224, en: "space study, colour study, composition study", de: "raumlehre, farbenlehre, kompositionslehre",
      sub: "the studies beside the workshop, three years",
      text: [
        "The form teaching proper, the Formlehre: Klee's elementary design theory from 1921 to 1931, which became the Pedagogical Sketchbook of 1925; Kandinsky's colour seminar and analytical drawing from 1922 to 1933, which became Point and Line to Plane in 1926; and Oskar Schlemmer's course on the human figure in 1928 and 1929. Kandinsky's 1923 questionnaire, which gave the yellow to the triangle, the red to the square and the blue to the circle, is the page's own colour rule."
      ],
      cats: ["exotic"], lib: ["klee1925", "kandinsky1926"] },

    { key: "construction", ring: 2, a0: 224, a1: 290, en: "study of construction and representation", de: "konstruktions- und darstellungslehre",
      sub: "the studies beside the workshop, three years",
      text: [
        "How to draw a thing so that someone else can make it: technical drawing, projection and descriptive geometry, lettering, model building. It was taught by the masters of craft and by the building office, and from 1927 inside the building department; Herbert Bayer's lowercase type and Joost Schmidt's lettering course belong here as much as any machine drawing."
      ],
      cats: ["additive"] },

    { key: "tools", ring: 2, a0: 290, a1: 360, en: "study of materials and tools", de: "material- und werkzeuglehre",
      sub: "the studies beside the workshop, three years",
      text: [
        "The craft itself, the Werklehre, learned at the bench from the master of craft: warping a loom, turning a pot, raising a bowl, cutting a tenon. A student signed an apprentice's contract, and the three years ended, where the trade allowed it, in the journeyman's examination before the local chamber of crafts, so that a Bauhaus weaver or joiner left with a trade paper as well as a school's. It was the half of the dual mastership that made the school a school and not an academy."
      ],
      cats: ["metal", "natural"] },

    { key: "vorkurs", ring: 3, a0: 0, a1: 100, en: "basic course", de: "vorlehre",
      sub: "the preliminary course · half a year, compulsory, from 1919; a full year later",
      twin: { a0: 260, a1: 360 },
      text: [
        "Every entrant took it before any workshop would have them: a half-year on probation, set up by Johannes Itten in 1919 and run by him until he left in the spring of 1923. From that autumn László Moholy-Nagy and Josef Albers shared it, Albers taking the handicraft and material work in the first semester and Moholy-Nagy a course on material and space in the second; when Moholy-Nagy left with Gropius in 1928, Albers ran it alone until the school closed in 1933. It covered form and colour, composition, materials, drawing from life and from nature, and at the end of it the masters decided which workshop a student was fit for.",
        "The diagram writes half a year at the top; in Dessau it grew to a full year. This catalogue is filed as its continuation, and the cards that fit no workshop are kept under its name."
      ],
      cats: ["exotic"], lib: ["itten1961", "albers1963"] },

    { key: "form", ring: 3, a0: 100, a1: 180, en: "elementary study of form", de: "elementare formlehre",
      sub: "the first half of the preliminary course",
      text: [
        "Itten's exercises: the contrasts, light against dark, rough against smooth, large against small, drawn until the student could feel them; rhythm studies made with the whole arm; analyses of old paintings for their structure; and breathing and movement before the drawing began. After him the form side passed to Klee's and Kandinsky's theory courses, and Moholy-Nagy's studies of balance and suspended construction."
      ],
      cats: ["exotic"], lib: ["klee1925", "itten1961"] },

    { key: "matstudy", ring: 3, a0: 180, a1: 260, en: "study of materials in the basic workshop", de: "materialstudien in der vorwerkstatt",
      sub: "the second half of the preliminary course, and the half this page continues",
      text: [
        "Students handled wood, metal, glass, paper, clay and cloth with simple tools and no product in mind: a sheet of paper folded until it stood up and carried a load, a brass sheet cut and bent into a structure, wood shavings arranged by how they sprang, a study in wire. Albers made this the heart of the course, extended it to as much as eighteen hours a week, and called it a school of invention: the most effect from the least material, energy and time.",
        "That exercise, carried on, is this catalogue: what each material will do, how it is made, and what it refuses."
      ],
      cats: ["exotic", "film"], lib: ["albers1963", "moholy1929"] }
  ];

  // The texts in the library that a segment leans on, by id, so a reader can go to the source.
  const LIB = window.LIBRARY ? new Map(window.LIBRARY.map(t => [t.id, t])) : new Map();
  const CATS = window.CATS || {};

  // Geometry: a 720-square viewBox, the centre at 360, rings by outer radius.
  const C = 360, R = [104, 196, 266, 346];
  const rad = a => (a - 90) * Math.PI / 180;
  const pt = (r, a) => [C + r * Math.cos(rad(a)), C + r * Math.sin(rad(a))];
  const f = n => n.toFixed(1);
  // An annular sector from a0 to a1 clockwise, between radii r0 and r1.
  function sector(r0, r1, a0, a1) {
    const big = a1 - a0 > 180 ? 1 : 0;
    const [x0, y0] = pt(r1, a0), [x1, y1] = pt(r1, a1), [x2, y2] = pt(r0, a1), [x3, y3] = pt(r0, a0);
    return `M${f(x0)} ${f(y0)} A${r1} ${r1} 0 ${big} 1 ${f(x1)} ${f(y1)} L${f(x2)} ${f(y2)} A${r0} ${r0} 0 ${big} 0 ${f(x3)} ${f(y3)} Z`;
  }
  // An arc for text at radius r. In the lower half the arc runs the other way, so the
  // words stay the right way up.
  function arc(r, a0, a1) {
    const mid = (a0 + a1) / 2 % 360, low = mid > 90 && mid < 270;
    const big = a1 - a0 > 180 ? 1 : 0;
    if (!low) { const [x0, y0] = pt(r, a0), [x1, y1] = pt(r, a1); return `M${f(x0)} ${f(y0)} A${r} ${r} 0 ${big} 1 ${f(x1)} ${f(y1)}`; }
    const [x0, y0] = pt(r, a1), [x1, y1] = pt(r, a0); return `M${f(x0)} ${f(y0)} A${r} ${r} 0 ${big} 0 ${f(x1)} ${f(y1)}`;
  }

  let lang = "en";
  const word = s => s[lang];

  function svg() {
    const out = [];
    const defs = [];
    const seg = (s, a0, a1, i) => {
      const r0 = s.ring ? R[s.ring - 1] : 0, r1 = R[s.ring];
      const id = `w-${s.key}${i ? "-" + i : ""}`;
      const d = s.ring ? sector(r0, r1, a0, a1) : `M${C} ${C - r1} A${r1} ${r1} 0 1 1 ${C - 0.01} ${C - r1} Z`;
      defs.push(`<path id="${id}-t" d="${arc(s.ring ? (r0 + r1) / 2 + (s.ring === 1 ? 0 : 4) : 0, a0, a1)}"/>`);
      return `<g class="seg" data-key="${s.key}" tabindex="0" role="button" aria-label="${esc(word(s))}: ${esc(s.sub)}">
        <path class="area" d="${d}"/>
        ${s.ring ? `<text class="arc r${s.ring}"><textPath href="#${id}-t" startOffset="50%" text-anchor="middle">${esc(word(s))}</textPath></text>` : ""}
      </g>`;
    };
    for (const s of SEG) {
      if (s.ring === 0) continue;
      out.push(seg(s, s.a0, s.a1, 0));
      if (s.twin) out.push(seg(s, s.twin.a0, s.twin.a1, 1));
    }
    // The centre: a disc with the four lines of the diagram.
    const bau = SEG[0];
    const centre = `<g class="seg centre" data-key="bau" tabindex="0" role="button" aria-label="${esc(word(bau))}: ${esc(bau.sub)}">
      <circle class="area" cx="${C}" cy="${C}" r="${R[0]}"/>
      <text class="big" x="${C}" y="${C - 22}" text-anchor="middle">${esc(word(bau))}</text>
      <text class="small" x="${C}" y="${C + 2}" text-anchor="middle">${lang === "de" ? "baulehre · versuchsplatz" : "site · testing"}</text>
      <text class="small" x="${C}" y="${C + 20}" text-anchor="middle">${lang === "de" ? "entwurf" : "design"}</text>
      <text class="small" x="${C}" y="${C + 38}" text-anchor="middle">${lang === "de" ? "bau- und ingenieurwissen" : "building and engineering science"}</text>
    </g>`;
    // The two marks at the top: half a year on the outer ring, three years on the studies.
    const marks = `<g class="marks">
      <line x1="${C}" y1="${C - R[3] - 10}" x2="${C}" y2="${C - R[2]}"/>
      <text x="${C + 7}" y="${C - R[3] + 18}">${lang === "de" ? "½ jahr" : "½ year"}</text>
      <line x1="${C}" y1="${C - R[2]}" x2="${C}" y2="${C - R[1]}"/>
      <text x="${C + 7}" y="${C - R[2] + 18}">${lang === "de" ? "3 jahre" : "3 years"}</text>
    </g>`;
    const rings = R.map(r => `<circle class="ring" cx="${C}" cy="${C}" r="${r}"/>`).join("");
    return `<svg class="wheel" viewBox="0 0 720 720" role="group" aria-label="the Bauhaus curriculum as a wheel of rings">
      <defs>${defs.join("")}</defs>${out.join("")}${centre}${rings}${marks}</svg>`;
  }

  // The panel beside the wheel: what a segment was, who ran it, what came of it, and where
  // it lives in this catalogue.
  function panelHTML(s) {
    if (!s) return `<p class="no">the wheel</p><h3>read it from the outside in</h3>
      <p class="sub">Gropius, 1922; the figure answers the pointer</p>
      <p>The outer ring is the preliminary course, half a year, which every student took first. Inside it run the three years of workshop training and the five studies taught beside it. Then the seven workshops, each named for its material. At the centre, building, where the course was meant to end.</p>
      <p>Point at a ring for what it was and who taught it; click to keep it. The switch above the wheel turns the words to the German of the 1922 statutes.</p>`;
    const cats = (s.cats || []).map(c => `<a href="${CAT}${c}">${esc(CATS[c] || c)}</a>`).join(", ");
    const lib = (s.lib || []).map(id => LIB.get(id)).filter(Boolean)
      .map(t => `<a href="${CAT}library">${esc(t.author.split(" and ")[0].split(",")[0])}, ${esc(t.english || t.title)}, ${t.year}</a>`).join("; ");
    return `<p class="no">${esc(["the centre", "workshop", "study", "preliminary course"][s.ring])} · ${esc(s.de)}</p>
      <h3>${esc(s.en)}</h3><p class="sub">${esc(s.sub)}</p>
      ${s.text.map(t => `<p>${esc(t)}</p>`).join("")}
      <p class="here"><b>in this catalogue:</b> ${cats || "no workshop of its own"}${lib ? `<br><b>in the library:</b> ${lib}` : ""}</p>`;
  }

  // Mount the wheel in a container, with its panel and its switch.
  function mount(root, panel, toggle) {
    let kept = null;
    const draw = () => { root.innerHTML = svg(); light(); };
    const light = () => {
      for (const g of root.querySelectorAll(".seg")) g.classList.toggle("on", !!kept && g.dataset.key === kept);
    };
    const show = key => { panel.innerHTML = panelHTML(key ? SEG.find(s => s.key === key) : null); };
    draw(); show(null);
    root.addEventListener("pointerover", e => { const g = e.target.closest(".seg"); if (g && !kept) show(g.dataset.key); });
    root.addEventListener("pointerout", e => { const g = e.target.closest(".seg"); if (g && !kept) show(null); });
    const pick = key => { kept = kept === key ? null : key; light(); show(kept); };
    root.addEventListener("click", e => { const g = e.target.closest(".seg"); if (g) pick(g.dataset.key); });
    root.addEventListener("keydown", e => {
      const g = e.target.closest && e.target.closest(".seg");
      if (!g || (e.key !== "Enter" && e.key !== " ")) return;
      e.preventDefault(); pick(g.dataset.key);
    });
    root.addEventListener("focusin", e => { const g = e.target.closest(".seg"); if (g && !kept) show(g.dataset.key); });
    if (toggle) toggle.addEventListener("click", e => {
      const b = e.target.closest("[data-lang]");
      if (!b) return;
      lang = b.dataset.lang;
      for (const x of toggle.querySelectorAll("[data-lang]")) x.setAttribute("aria-pressed", String(x.dataset.lang === lang));
      draw();
    });
  }

  return { SEG, svg, panelHTML, mount };
})();

/* The library: the fourth kind of entry. Not a material, not a figure, not a paper about a
   material — a primary text by the people who ran the Bauhaus, or studied there and went on
   to teach it. The catalogue is the preliminary course continued; the library is the course's
   own writing, so a reader can go to the source instead of taking this page's word for it.

   The page hosts no text it has no licence to. Each entry links OUT to a legitimate full
   copy where the work is in the public domain (Internet Archive, Project Gutenberg, Wikisource,
   a museum or a university library), and to the publisher where it is still in copyright, and
   says which. Fields:
     id        letters and digits, e.g. gropius1919
     author    the writer, as printed
     role      their place at the Bauhaus, a few words, e.g. "master of form, metal workshop"
     title     the title in its first language
     english   the English title, when the first language is not English (else omit)
     year      the year of first publication, a number
     kind      manifesto | Bauhaus book | essay | book | journal | diary | lecture | catalogue
     what      a factual sentence on what it is; no hype
     read      a URL to a free full copy, or a place to find it; null when none is linked
     pd        true if the work is in the public domain; false if it is still in copyright
     held      a holding institution, for a public-domain work with no free scan to link (else omit)
     cats      the workshops it belongs to (it appears among their cards)
     cards     optional: the card ids it speaks to, which become links
   tools/check.js refuses a text without a declared workshop, a bad year or kind, a public-domain
   claim with no reading link, or a card that does not exist. */

window.LIBRARY = [
{
  id: "kandinsky1911", author: "Wassily Kandinsky", role: "master of form, wall-painting workshop",
  title: "Über das Geistige in der Kunst", english: "Concerning the Spiritual in Art",
  year: 1911, kind: "book",
  what: "Kandinsky's pre-Bauhaus manifesto of abstraction, arguing that colour and form answer to an inner necessity rather than to appearances; the ground his later teaching was built on.",
  read: "https://www.gutenberg.org/ebooks/5321", pd: true,
  cats: ["exotic"]
},
{
  id: "gropius1919", author: "Walter Gropius", role: "founder and director, 1919 to 1928",
  title: "Programm des Staatlichen Bauhauses in Weimar", english: "Programme of the State Bauhaus in Weimar",
  year: 1919, kind: "manifesto",
  what: "The four-page founding pamphlet, printed with Feininger's cathedral woodcut, that put every craft under building and denied any essential split between artist and craftsman.",
  read: "https://germanhistorydocs.org/en/weimar-germany-1918-1933/walter-gropius-program-of-the-state-bauhaus-in-weimar-1919", pd: true,
  cats: ["exotic"]
},
{
  id: "bauhaus1923", author: "Walter Gropius and the Weimar masters", role: "the first Bauhaus book",
  title: "Staatliches Bauhaus Weimar 1919 to 1923", english: "",
  year: 1923, kind: "catalogue",
  what: "The exhibition volume summing up the Weimar years, with essays by Gropius, Klee and Kandinsky and a layout by Bayer and Moholy-Nagy; the book that first gathered the school between covers.",
  read: "https://archive.org/details/staatlichesbauha01unse", pd: true,
  cats: ["exotic"]
},
{
  id: "klee1925", author: "Paul Klee", role: "master of form, 1921 to 1931",
  title: "Pädagogisches Skizzenbuch", english: "Pedagogical Sketchbook",
  year: 1925, kind: "Bauhaus book",
  what: "Bauhausbuch 2: Klee's form teaching compressed into forty-three illustrated lessons on line, dimension, balance and motion, the preliminary course set down as a sketchbook.",
  read: "https://archive.org/details/klee-1925-padagogisches-skizzenbuch", pd: true,
  cats: ["exotic"]
},
{
  id: "schlemmer1925", author: "Oskar Schlemmer, László Moholy-Nagy and Farkas Molnár", role: "the theatre workshop",
  title: "Die Bühne im Bauhaus", english: "The Theater of the Bauhaus",
  year: 1925, kind: "Bauhaus book",
  what: "Bauhausbuch 4: three essays theorising a geometric, mechanised stage, including Schlemmer's Man and Art Figure, the theory behind the Triadic Ballet.",
  read: "https://archive.org/details/schlemmer-et-al.-1925-die-buhne-am-bauhaus", pd: true,
  cats: ["music"]
},
{
  id: "moholy1925", author: "László Moholy-Nagy", role: "master of form, metal workshop",
  title: "Malerei, Fotografie, Film", english: "Painting, Photography, Film",
  year: 1925, kind: "Bauhaus book",
  what: "Bauhausbuch 8: the argument that the camera and the film are the new vision, and that type and photograph should be designed together as a single typophoto.",
  read: "https://archive.org/details/moholy-nagy-1927-malerei-fotographie-film", pd: true,
  cats: ["film"]
},
{
  id: "gropius1925ia", author: "Walter Gropius", role: "founder and director, 1919 to 1928",
  title: "Internationale Architektur", english: "International Architecture",
  year: 1925, kind: "Bauhaus book",
  what: "Bauhausbuch 1: a picture-atlas of new building from around the world, Gropius's argument that modern architecture had already become a single international language.",
  read: null, pd: true, held: "the Bauhaus-Archiv, Berlin",
  cats: ["composite"]
},
{
  id: "gropius1925na", author: "Walter Gropius (editor)", role: "the Bauhaus workshops",
  title: "Neue Arbeiten der Bauhauswerkstätten", english: "New Work from the Bauhaus Workshops",
  year: 1925, kind: "Bauhaus book",
  what: "Bauhausbuch 7: a photographic survey of the lamps, furniture, textiles and metalwork leaving the workshops as they turned toward design for industry.",
  read: null, pd: true, held: "the Bauhaus-Archiv, Berlin",
  cats: ["metal"]
},
{
  id: "kandinsky1926", author: "Wassily Kandinsky", role: "master of form, wall-painting workshop",
  title: "Punkt und Linie zu Fläche", english: "Point and Line to Plane",
  year: 1926, kind: "Bauhaus book",
  what: "Bauhausbuch 9: a systematic grammar of the picture, taking point, line and plane in turn as the elements of abstraction; the German original is public domain, the readable English translation is not.",
  read: "https://archive.org/details/pointlinetoplane00kand", pd: false,
  cats: ["exotic"]
},
{
  id: "moholy1929", author: "László Moholy-Nagy", role: "master of form, metal workshop",
  title: "Von Material zu Architektur", english: "The New Vision",
  year: 1929, kind: "Bauhaus book",
  what: "Bauhausbuch 14: the preliminary course distilled as a progression from raw material and texture up to volume and space; the source of this catalogue's own method and its name.",
  read: "https://archive.org/details/newvisionabstrac0000lasz", pd: false,
  cats: ["exotic"]
},
{
  id: "gropius1930bd", author: "Walter Gropius", role: "founder and director, 1919 to 1928",
  title: "Bauhausbauten Dessau", english: "Bauhaus Buildings Dessau",
  year: 1930, kind: "Bauhaus book",
  what: "Bauhausbuch 12: Gropius's record of the Dessau buildings and the masters' houses, the school's own architecture set down as a model of its method.",
  read: null, pd: true, held: "the Bauhaus-Archiv, Berlin",
  cats: ["composite"]
},
{
  id: "stolzl1931", author: "Gunta Stölzl", role: "master of the weaving workshop, the one woman master",
  title: "Die Entwicklung der Bauhausweberei", english: "The Development of Bauhaus Weaving",
  year: 1931, kind: "essay",
  what: "Stölzl's own account, in the Bauhaus journal, of how the weaving workshop moved from free tapestry to functional cloth designed for the loom and for industry.",
  read: null, pd: false,
  cats: ["fibre"]
},
{
  id: "gropius1935", author: "Walter Gropius", role: "founder and director, 1919 to 1928",
  title: "The New Architecture and the Bauhaus", english: "",
  year: 1935, kind: "book",
  what: "Gropius's English-language summation of Bauhaus aims, written after he emigrated, stating the case for a new architecture joined to the workshop.",
  read: "https://archive.org/details/newarchitectureb0000grop_t7p9", pd: false,
  cats: ["composite"]
},
{
  id: "bayer1938", author: "Herbert Bayer, with Walter and Ise Gropius", role: "student, then master of typography",
  title: "Bauhaus 1919 to 1928", english: "",
  year: 1938, kind: "catalogue",
  what: "The Museum of Modern Art catalogue, designed by Bayer, that fixed the Bauhaus story for the English-speaking world and set much of how the school is still read.",
  read: "https://archive.org/details/bauhaus191919280000unse_y5u4", pd: false,
  cats: ["exotic"]
},
{
  id: "schlemmer1958", author: "Oskar Schlemmer", role: "master, theatre workshop",
  title: "Briefe und Tagebücher", english: "The Letters and Diaries of Oskar Schlemmer",
  year: 1958, kind: "diary",
  what: "Schlemmer's letters and journals, the central first-person record of teaching, the theatre workshop, and the school's last years under pressure from the Nazis.",
  read: null, pd: false,
  cats: ["music"]
},
{
  id: "itten1961", author: "Johannes Itten", role: "master of form, creator of the preliminary course",
  title: "Kunst der Farbe", english: "The Art of Color",
  year: 1961, kind: "book",
  what: "Itten's colour theory, the seven colour contrasts and the subjective colour chord, codifying the preliminary course he had created at Weimar.",
  read: null, pd: false,
  cats: ["exotic"]
},
{
  id: "albers1963", author: "Josef Albers", role: "student, then master; led the preliminary course",
  title: "Interaction of Color", english: "",
  year: 1963, kind: "book",
  what: "Albers's course on the relativity of colour, built on the gap between physical fact and psychic effect; first issued as a portfolio of 150 silkscreen plates.",
  read: "https://www.davidzwirner.com/collect/josef-albers-interaction-of-color-book", pd: false,
  cats: ["exotic"]
},
{
  id: "annialbers1965", author: "Anni Albers", role: "student, then head of the weaving workshop",
  title: "On Weaving", english: "",
  year: 1965, kind: "book",
  what: "A study of weaving as a design discipline in its own right, from the structure of a single thread up to the history of the hand loom.",
  read: "https://www.albersfoundation.org/news/albers-foundation-and-princeton-university-press-are-publishing-a-new-expanded-edition-of-anni-alberss-on-weaving", pd: false,
  cats: ["fibre"]
},
{
  id: "brandt1966", author: "Marianne Brandt", role: "student, then acting head of the metal workshop",
  title: "Brief an die junge Generation", english: "Letter to the Younger Generation",
  year: 1966, kind: "essay",
  what: "Brandt's later letter to the younger generation, recalling her years as the lone woman in the metal workshop whose lamps and teapots went into production.",
  read: null, pd: false,
  cats: ["metal"]
}
];

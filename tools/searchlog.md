# Search log

What was looked for, what was found, and — more usefully — what was looked for and **not**
found. Candidates get dropped for one reason far more often than any other: the material is
real and interesting, and Wikimedia Commons has no honest photograph of it. Without this file
that work is invisible, and the same dead ends get re-searched a round or two later.

Append to this file in the same commit as the cards. Rules:

- Every candidate that was searched and **not** added gets a line under *Dropped*, with the
  queries that were tried and why it failed.
- Every source photograph rejected **after looking at it** gets a line under *Rejected images*.
  Descriptions on Commons are often wrong by omission; those mistakes are worth recording.
- Anything added is already recorded by git, `tools/images.txt` and `credits.js`. Don't repeat it
  here. Only the ground that produced nothing needs writing down.

## How Commons search behaves

- Full text ANDs every word. Short, single-concept queries win: `speaker grille` returns six
  usable photos, `loudspeaker grille perforated steel` returns nothing.
- Search the thing as a photographer would caption it, not as an engineer would name it:
  `woofer`, not `low-frequency transducer`. German and French names often find European
  museum and workshop photographs that the English words miss (`Stimmplatte`, `Chirimen`).
- `tools/search.py` filters to bitmaps of at least 640x400, which is the floor for a 900 px card.
- A promising title is not a photograph of the material. Read the description with
  `tools/describe.py`, then download it with `tools/peek.py` and **look at it**.

## Dropped

Nothing here is a bad idea for a card — all of it failed on evidence. The retry note says what
would unblock it.

### Sound & music

| Candidate | Queries tried | Why dropped | Retry with |
|---|---|---|---|
| Timpani copper bowl | `timpani`, `kettledrum copper`, `Pauke Kessel` | Plenty of timpani photographs, none that confirm the bowl is copper rather than fibreglass | A museum or workshop photo whose description states the metal; dropped twice, don't try the same queries again |
| Fretwire | `fretwire`, `guitar fret`, `fret wire nickel silver` | Only fitted fingerboards and refret work in progress; the wire itself never pictured | `Bunddraht`, luthier supply photographs |
| Beryllium tweeter dome | `beryllium tweeter`, `beryllium diaphragm` | No Commons photo; card became `metaldome` (titanium) instead | — |
| Micro-perforated acoustic panel | `micro perforated panel`, `microperforated absorber` | Only installed ceilings where the perforation is invisible | A close-up of the sheet |
| Mass-loaded vinyl | `mass loaded vinyl`, `barrier mat acoustic` | Nothing on Commons | — |
| Braided cable sleeving | `cable sleeving`, `expandable braid` | Only finished looms | — |
| Loudspeaker spider | `loudspeaker spider damper`, `Zentrierspinne`, `loudspeaker chassis` | Only labelled cross-section drawings, which are diagrams, not photographs | A photo of a bare driver from behind, or a cutaway driver where the corrugated disc is clearly visible |
| Bow hair | `violin bow hair`, `bow frog`, `Bogenhaar` | Only whole-bow museum shots; the hair is a grey line | A rehairing bench photo |
| Nitrocellulose guitar finish | `nitrocellulose lacquer guitar`, `lacquer checking`, `guitar finish` | Nothing shows the finish *as a finish* — checking, crazing, wear-through | `Lackrisse`, a relic'd guitar close-up |
| Piano key covering (ivorine, acrylic) | `piano keys` | Only keyboards at playing distance; the covering material is not legible | A loose keytop or a re-covering bench |
| Ferrofluid in tweeters | — | Already carded as `ferrofluid` (exotic), which mentions voice-coil cooling | — |

### Fabric and fibre

| Candidate | Queries tried | Why dropped | Retry with |
|---|---|---|---|
| Paper-machine forming fabric | `forming fabric`, `paper machine wire` | Only whole machines; the mesh is never the subject | A close-up of the woven wire |
| Solid-woven conveyor belting | `conveyor belt fabric`, `solid woven belting` | Only installed belts; the carcass is hidden | A cut end showing the plies |
| Velvet, corduroy | — | Already covered by `terrypile` | — |
| ePTFE membrane | — | Already carded as `eptfe` | — |

### Warmth and insulation

| Candidate | Queries tried | Why dropped | Retry with |
|---|---|---|---|
| Yak down (khullu) | `yak wool`, `yak fibre` | The one usable photo is a woman at a spinning wheel in Bhaktapur; the white fibre in her hands could be cotton and the description is the only evidence | A combed-down sample, or a Tibetan workshop photo that names the fibre |
| Ticking (downproof cotton) | `mattress ticking`, `Inlett Bettwaesche`, `cambric` | Everything is a scan of a 1940s instruction page, not a photograph; the one real photo of ticking went to `batting` | A close-up of the woven cloth, or a duvet shell turned inside out |
| Thinsulate | `Thinsulate` | Four results, all gloves with a label; the batt itself is never shown | A cut-open garment |
| Electric blanket element | `heated blanket`, `heating element wire` | The blanket is a white pad with a cable: the wire, its insulation and the PTC core are all invisible | A cut-away element, or an X-ray |
| Silk wadding (mawata) | `mawata`, `silk wadding`, `silk batting`, `silk floss quilt` | Nothing on Commons; the hits are robes stuffed with it, where the filling cannot be seen | Japanese or Chinese quilt-making photographs |
| Sheep wool building insulation | `sheep wool insulation`, `Schafwolle Daemmung`, `wool insulation batt` | One geograph shot of a building; the CSIRO batt photo is almost certainly glass wool, and mineral wool is already carded as `rockwool` | A labelled wool batt |
| Cellular (honeycomb) blanket | `cellular blanket` | One 800x600 photograph of hospital linens in a pile | A close-up of the weave |
| Valenki, loden, melton | `valenki`, `Walkloden` | Real materials, but all three are felted or fulled wool, which `felt` and `fulledwool` already cover | — |
| Hollow-fibre wadding | `polyester wadding`, `hollow fibre polyester`, `fibrefill`, `Faserball` | Only `pillow stuffing` returned anything; that hit became the `polyfill` card | — |

### Duvet materials

| Candidate | Queries tried | Why dropped | Retry with |
|---|---|---|---|
| Baffle box / karo-step | `sleeping bag baffle`, `Schlafsack Daunen`, `Kassettendecke`, `Daunenjacke Kammern`, `down jacket baffle` | Nothing at all; `Kassettendecke` returns coffered ceilings, which is the same word for the same idea in plaster | A cut-open duvet or sleeping bag, or a maker's cross-section |
| Percale | `percale`, `percale sheet`, `bed linen weave` | 1940s magazine adverts and museum bed sheets; no close-up of the cloth | A macro of the weave, or a thread-count comparison |
| Wool duvet batt | `wool batt`, `wool quilt`, `Schafwolle Vlies`, `sheep wool duvet`, `wool fleece bedding`, `wool wadding`, `Wollvlies` | Finished quilts and spinning wool; the one batt photo is the CSIRO shot already rejected as glass wool | A labelled wool quilt batt, or a wool duvet opened up |
| Microfibre fill | `microfibre duvet`, `Mikrofaser Decke` | No results in either language | A cut-open synthetic duvet |
| Buckwheat hulls | `buckwheat pillow`, `Buchweizenkissen` | Generic pillow photos, and the hull is a support filling rather than a warm one, so it is out of this category anyway | — |
| Wood fibre and cork board | `wood fibre insulation`, `cork insulation board` | No results at all for either phrase | German and Norwegian terms (`Holzfaserdaemmplatte`, `trefiberisolasjon`) |
| Hemp insulation | `hemp insulation`, `Hanfdaemmung` | A silica-treatment research figure and one mattress cross-section with four layers in it; neither has hemp as its subject | A labelled hemp batt |
| Silk floss, the making of | `silk floss` | The MET hit is a woodblock print, not a photograph | — the finished wadding was found instead, see `silkfloss` |
| Ball or cluster fibre | `Faserbaellchen`, `ball fibre filling`, `polyester fibre balls` | Nothing in either language. It is a real fill and distinct from sheet fibrefill, so it is worth another try | A cut-open pillow, or a maker's product shot |
| Wool duvet, second attempt | `Wollbettdecke`, `wool duvet`, `ullteppe`, `Wollsteppdecke`, `Schafwolle Vlies` | Still nothing: one Norwegian woollen blanket, no batt and no opened duvet | — |
| Batiste, percale, Mako sateen | `batiste fabric`, `Perkal`, `Mako Satin` | No results at all for any of the three | — |
| Feather bed underlay | `Federbett Unterbett`, `feather bed mattress` | Nothing | — |
| Yak down, second attempt | `khullu`, `yak down fibre` | Nothing; the 2026-10-20 note still stands | — |
| Bamboo and hollow-core fill | `bamboo fibre filling`, `Hohlfaser`, `hollow fibre cross section` | One Hungarian cross-section of hollow fibres, which is membrane work rather than bedding, and `polyfill` already covers siliconised hollow polyester | — |
| Duvet interiors in other languages | `羽毛布団`, `布団 綿`, `perina`, `dekbed`, `dyne fjer`, `Steppbett`, `Bettdecke Fuellung`, `comforter fill`, `duvet opened`, `Daunendecke` | Every language returns the same five photographs of made beds. Commons has no photograph of a duvet with its filling visible | Somebody opening one up with a camera |
| Calico, muslin, nettle cloth | `calico cloth`, `Nesselstoff`, `unbleached cotton fabric`, `muslin fabric`, `Dhaka muslin` | Ghost towns, cats, stinging nettles and museum dresses. Dhaka muslin is worth a card of its own one day, but as a fabric, not as a lining | A bolt or a woven close-up |

**Conclusion after two rounds and roughly fifty queries: the duvet is mined out.** What is on
Commons is made beds, museum quilts and advertising. The four duvet cards that exist came from
the only four honest photographs there are. Do not spend another session searching for a fifth
without a new source of pictures.

## Rejected images

Source photographs that passed the description check and failed when actually looked at.

| Card | File | What it really showed | What was used instead |
|---|---|---|---|
| `rattan` | Rattan and Nito.jpg | A museum display of finished baskets, not raw cane | Kept, recaptioned honestly as `product` |
| `willow` | Weidenkorbflechter … 01.jpg | A giant woven willow jug sculpture, not a maker at work | Kept, recaptioned as `product` |
| `crepe` | Crepe georgette diff 8k (Poly Haven) | A diffuse texture map: a flat turquoise field, no crinkle at all | Chirimen gaufré.JPG |
| `crepe` | A Lagerfeld dress | Garment at the right edge, mostly room | Chirimen gaufré.JPG |
| `lacquermaster` | Reference acetates … SAE Mastering.jpg | The Neumann VMS-70 lathe in a room; the acetates are not identifiable | Kept, recaptioned and re-badged `process` |
| `grillesteel` | Gale Silver Monitor Speaker Grille Front.jpg | Cloth stretched over a frame — the *front* of a grille is fabric | Loudspeaker grille.jpg (a dished perforated disc) |
| `truss` | Lighting truss 1.JPG | Pure silhouette against a lit cyc; the lattice is a black bar | Traverse (Truss).JPG |
| `miccable` | Microphone cable structure.jpg | Fine, but the screen is twisted into a tail, not braided as described | Kept, caption corrected, badged `photo` not `structure` |
| `snow` | Igloo under construction - geograph.org.uk - 1719812.jpg | Two low walls in a big white field, photographed from fifty metres; the blocks are not legible | Building an igloo on Victoria Island (37009).jpg |
| `ticking` | Cotton mattress making, closing the ticking ... .jpg | A scan of a printed page with two photographs and a caption on it, not a photograph | Card dropped |
| `batting` | (kept) Mattress making, covering the cotton batting with ticking.jpg | Shows both the batt and the ticking; captioned for the batt, which is the subject | — |
| `cellulosefill` | Cellulose insulation200.JPG | A blowing truck seen from behind: the insulation is inside sealed bags, nothing of the material visible | Bulk recycled cellulose scan.jpg |
| (duvet, generic) | Duvet Dormeo.jpg | A stock advertising photograph - a model with a mug, the duvet a prop behind her | Card dropped; no generic duvet card exists |

## Ground already worked

Rounds so far, so the next one can start somewhere else. Details are in git.

| Date | Round |
|---|---|
| 2026-10-14 … 10-19 | The eleven categories built out: polymers, metals, ceramics, composites, additive, fibre, fabric, exotic, natural, electronic, music |
| 2026-10-19 | Ten mounting and damping materials for Sound & music |
| 2026-10-20 | Twelve woven materials (fibre and fabric); twenty-four more for Sound & music over two rounds |
| 2026-10-20 | Ten fabrics: finishes and yarn-less cloths |
| 2026-10-20 | Thirteen stage and PA materials: the gear side of Sound & music |
| 2026-10-20 | Fifteen cards for the new Warmth & insulation category, plus the warmth theme tag on seventeen older cards |
| 2026-10-21 | Seven more for Warmth & insulation: four that take a duvet apart, three that insulate buildings |
| 2026-10-21 | Duvet searched out a second time; no new cards, so the findings became the Inside a duvet theme |

## Sources (the `src` field)

Every polymer and elastomer card got a second source on 2026-10-20, away from Wikipedia. What
holds up, after checking all 59 over HTTP:

| Family | Pattern | Behaviour |
|---|---|---|
| Boedeker | `boedeker.com/Family/<Name>` | engineering plastics with real property tables; answers scripts; old `*_p.htm` URLs redirect |
| Macrogalleria | `pslc.ws/macrog/<x>.htm` | commodity polymers, teaching tone; slugs are short and unguessable (`isoprene`, `styrene`, `copoly`, `ionomer`, `cell`) — probe before trusting |
| ERIKS | `o-ring.info/en/materials/<x>/` | elastomer seal compounds; index at `/en/materials/` lists the nine that exist (no IIR, no BR) |
| Makers | varies | best source, worst stability: DuPont's brands moved to `dupont.com/<brand>.html` and the electronics ones to `qnityelectronics.com` |

Blocked or dead, don't retry: MatWeb, Curbell, Omnexus/SpecialChem, Parker, Dow, Chemours,
ExxonMobil, Celanese, Daicel, ScienceDirect and CAMEO all answer 403 to a script.
polymerdatabase.com is parked. essentialchemicalindustry.org would not resolve at all.
ACS pages (landmarks, Molecule of the Week) return 200 with an empty JS shell, so the content
cannot be verified from a script — Science History Institute was used instead.

### Sources for the warmth round, 2026-10-20

Answered a script first time: Alpaca Owners Association, National Angora Rabbit Breeders,
IUCN Red List, International Centre for Reindeer Husbandry, NZ Department of Conservation,
NSIDC, NASA Spinoff (`spinoff.nasa.gov/node/<id>`), UNL Digital Commons.

Refused or vanished, don't retry: Britannica (403), CITES (403), Smithsonian MCI (403),
leather-dictionary.com (no route), encore3 (no route), Trevira (no route), canada.ca
conservation notes (timeout), cashmere.org (302 loop), Fairfield (520), PubMed Central
(reCAPTCHA for scripts). The Fine Arts Museums of San Francisco page used for `furfelt`
answers 403 to a script and opens normally in a browser, the same deal as `nafion`.

Five cards ship without a `src` — shearling, camel hair, flannel, fibrefill and cotton
batting — because nothing authoritative loaded. Better a missing field than a shop.

## Commons rate limiting, and the fix

On 2026-10-21 every Wikimedia API call started answering `HTTP 429 Please try again later`
after a few dozen searches, and stayed refused through a five minute backoff. The cause was
the User-Agent: `MaterialsStaticSite/1.0 (personal static page; contact via github)` carries
no contact URL, which Wikimedia's policy requires and its throttle enforces. Changing it to
`MaterialsCatalogue/1.0 (https://github.com/llama-with-thumbs/materials; static site build)`
in `search.py`, `describe.py`, `peek.py` and `fetch_images.py` cleared the block on the next
request. If the searches start failing again, check the User-Agent before blaming the volume.

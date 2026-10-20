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

## Ground already worked

Rounds so far, so the next one can start somewhere else. Details are in git.

| Date | Round |
|---|---|
| 2026-10-14 … 10-19 | The eleven categories built out: polymers, metals, ceramics, composites, additive, fibre, fabric, exotic, natural, electronic, music |
| 2026-10-19 | Ten mounting and damping materials for Sound & music |
| 2026-10-20 | Twelve woven materials (fibre and fabric); twenty-four more for Sound & music over two rounds |
| 2026-10-20 | Ten fabrics: finishes and yarn-less cloths |
| 2026-10-20 | Thirteen stage and PA materials: the gear side of Sound & music |

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

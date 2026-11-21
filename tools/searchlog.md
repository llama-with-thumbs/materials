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

### Plastics (polymer)

The catalogue files a plastic under the workshop it belongs to, not under `polymer`, so several
obvious candidates were already carded elsewhere — **check every category, not just `polymer`,
before researching.** Already present: ebonite (as `ebonite` in *music*, the mouthpiece rubber),
ETFE (as `etfefoil` in *fabric*, the architectural cushion), gutta-percha (as `guttapercha` in
*natural*), shellac (as `shellac` in *natural*).

| Candidate | Queries tried | Why dropped | Retry with |
|---|---|---|---|
| SBR (styrene-butadiene rubber) | `styrene butadiene rubber`, `SBR` | Only plant-dedication ceremonies and sulphur/peroxide cure diagrams; no honest photo of the rubber itself | A raw bale, or a crumb-rubber close-up |
| COC / COP (cyclic olefin, Topas, Zeonor) | `cyclic olefin`, `COC`, `COP` | "COC" returns Continental Cup ski-jumping; no material photo at all | Named pellets or a clear moulded optic |
| PBT (polybutylene terephthalate) | `polybutylene terephthalate`, `PBT connector`, `PBT pellets` | Only a 1910s magazine titled *PBT*; nothing of the resin | Named pellets or a moulded connector |
| Hypalon (CSM) | `Hypalon boat`, `Hypalon fabric` | Inflatable-boat shots where the coating is not legible; no close-up of the coated cloth | A cut sample of the fabric |
| PCTFE (Kel-F) | `Kel-F`, `PCTFE` | "Kelly" people and places; no material photo | Named film or a machined part |
| Cast nylon 6, PET-G | `cast nylon`, `PETG sheet` | Nothing on Commons for either phrase | — |
| PFA (perfluoroalkoxy) | `PFA tubing`, `perfluoroalkoxy`, `PFA beaker`, `PFA labware`, `PFA film` | Real and distinct (melt-processable PTFE), but the one clean photo, `Pfa tubing.jpeg`, is already used on the `fep` card as a `related` image, and no second PFA photo exists — only chemistry diagrams and PFAS-pollution figures | A distinct PFA photo: a beaker, labware, or clear film |

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
| TPV / Santoprene | TPV granules.jpg | A pallet of branded "Rosehill TPV" bags on a job site; the granules are sealed inside printed plastic and the brand dominates the frame — same failure as the cellulose blowing truck | Card dropped; retry with loose granules in a hand |

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
| 2026-10-28 | Six early and specialty plastics for the polymer category: galalith, celluloid, melamine, urea-formaldehyde, polycaprolactone, polysulfone |
| 2026-11-04 | Ten plastics in roles: polystyrene, Catalin, Bois Durci, pHEMA hydrogel, PGA, nylon 11, thermoplastic starch, Corian, plastisol, flexible PU foam |

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

### Duvet, third pass — re-run after an internet outage, 2026-10-21

The second round's dead ends were collected while the connection was dropping, so all twenty
queries were run again on a verified connection. **They were real dead ends, not network
failures.** `duvet baffle`, `baffle box duvet`, `quilt baffle`, `hollow fibre polyester`,
`siliconised fibre`, `buckwheat hull pillow` and `duvet cross section` return literally
nothing. `Kassettendecke` returns coffered ceilings, `down cluster` and `feather cluster`
return galaxies and tube worms, `tog rating` returns churches in Göd. `duvet filling` returns
one photograph of poplar fruit. The duvet stays mined out; this is now confirmed twice.

The sweep did turn up three shirting cloths missing from `fabric`, which is what the round
shipped instead: chambray, Oxford cloth and gingham.

Rejected after looking at the file:

| File | Why |
|---|---|
| `Fetvadd - JM.56815 16.jpg` | An unopened brown paper parcel of civil-defence wadding. The material is sealed inside it, same failure as the cellulose blowing truck |
| `Crumpled duvet covered with a white cotton duvet cover 1.jpg` | A made bed in monochrome. A duvet cover is a product, not a material, and the five cover cloths already carded cover the job |
| `Gingham pattern.jpg` | A vector graphic of a check. No cloth in it at all. `Greengingham.jpg` used instead |
| `Moleskin.jpg` | Labelled moleskin, shows an unnapped beige basket weave. Moleskin is defined by its sueded face, which is not in the frame |
| `Textile Samples - Fustian, Linen and Moleskin.jpg` | A museum handling board shot at an angle, moleskin swatch half out of frame |
| `Buckram variety.jpg` | Colour swatches, and only 800 px wide — under the 960 the page fetches |

Still open, no usable photograph found: moleskin, fustian, poplin, buckram, organdy, voile,
huckaback, dimity, horsehair canvas, percale, batiste, cambric. Searched on 2026-10-21; the
hits are costume museums and fashion plates, where the cloth is a dress, not a material.

### Films & foils, first round, 2026-10-22

A new category: anything made and sold as a sheet thin enough to roll. Fifty-odd candidates
searched, twenty-eight shipped. The ones that failed, and why:

| Candidate | Queries tried | Why dropped | Retry with |
|---|---|---|---|
| Retort pouch (PET/Al/PP laminate) | `retort pouch`, `MRE pouch` | `Retortable Pouch.png` is a pencil sketch of the layers; the MRE photo shows bread, not the pouch; the Japanese curry photos show printed cartons | A torn-open pouch showing the foil layer |
| EVOH barrier film | `EVOH`, `barrier film packaging` | Structural formulae and an embolisation agent. The film is invisible inside every laminate it is in | — |
| Microporous breathable film (diaper backsheet) | `diaper backsheet`, `breathable film` | Nothing; `breathable film` returns a 1924 silent movie | `atmungsaktive Folie`, a nappy taken apart |
| Battery separator (shutdown polyolefin) | `battery separator`, `lithium battery separator`, `Separator Akku` | Patent drawings, egg separators, a dendrite diagram. `CR2032 disassembled.jpg` shows the cell, not the membrane | A pouch cell teardown with the white separator lifted |
| Electrodeposited copper foil | `copper foil`, `electrodeposited copper foil`, `Kupferfolie` | Only stained-glass copper foil tape and galvanic demos; `CopperFoil.jpg` is 640 px | A PCB laminate maker's photo of a foil roll with the matte side showing |
| Thin-film polariser (laser optics) | `polarizing film` | `Thin film polarizer.jpg` is a good photo but of a dielectric coating on a glass plate, not a film. Belongs in optics, not here | — |
| Dichroic and cholesteric film | `dichroic film`, `iridescent film`, `cholesteric film` | Bacterial films on ponds, soap bubbles, hafnium pellets | `Radiant Light Film`, `Effektfolie` |
| Vacuum bagging film | `vacuum bagging composite`, `vacuum bag film` | One repair-manual diagram and a lot of vacuum cleaners | — |
| Window tint and low-E film | `window film tint`, `window tinting car`, `solar control film`, `Fensterfolie` | Only tinted cars from across the road; nothing shows the film as a film, and the card had nothing to teach that `ito` and `spaceblanket` do not | A peel-back photo on a glazier's bench |
| Water-soluble PVA film | `water soluble film`, `laundry pod` | Good pod photos, but `pva` (polymer) is already that card, hook and all | — |
| Tetra Pak laminate | `Tetra Pak`, `Tetra Pak layers`, `aseptic carton laminate`, `beverage carton` | Only finished cartons and egg boxes; the six layers never pictured | A cut edge under a loupe |
| Goldbeater's skin | `goldbeater's skin`, `Goldschlägerhaut`, `airship gas cell goldbeater` | Nothing at all. The Cooper Hewitt hits are medieval textiles | A Zeppelin museum gas-cell fragment |
| Dialysis tubing (regenerated cellulose) | `dialysis tubing` | Diagrams and a 1940s machine | — |
| Glassine | `glassine`, `Pergamin` | `Pergamin Dokumentenhuellen.jpg` is a good photo, but glassine is a supercalendered paper, not a film. Parked for a paper category | — |
| Foil balloon, tin foil, lead foil | `foil balloon`, `mylar balloon`, `tin foil`, `lead foil` | Birthday parties, tin-foil hats and stained-glass came. Nothing to add to `mylar` and `spaceblanket` | — |
| Edible film (oblate) | `oblaat`, `edible film` | Product shots of pouches and a birthday cake | — |
| Liquid crystal sheet (wind tunnel) | `liquid crystal sheet` | NASA 1980 monochrome of a vane cascade; the sheet is not legible. Covered by the `lcfilm` card's uses line | — |

Rejected after looking at the file:

| File | Why |
|---|---|
| `Bubble Wrap.jpg` | Carries a printed copyright watermark along the bottom edge. `Square-shaped bubble wrap (126wiki).jpg` used instead |
| `Enfardadora automatica.jpg` | A manufacturer's catalogue render of a wrapping machine on a gradient backdrop, not a photograph of film. FEMA warehouse photo used instead |
| `Cellofan.jpg` | Biscuits in a wrapper; the cellophane is the least visible thing in it. `Cellophane.JPG` (rolls) used instead |
| `Retortable Pouch.png` | A pencil drawing |
| `MRE pouched bread - commonwealth zk51xh600.jpg` | Six loaves on a white table, pouch nowhere in frame |
| `Wrapped silage bales - geograph.org.uk - 5047328.jpg` | The bales are a white speck on a hillside a quarter of a mile away. `Wrapped bales - geograph.org.uk - 7568052.jpg` used instead |
| `Silage bale snowman in Germany.jpg` | A snowman. Charming, not a material |
| `Mulch film Bio-Flex biodegraded.JPG` | Honest but illegible: scraps of dark film in mud. The Homs strawberry field shows the mulch in use |
| `LightSail 2 Deployment Test.jpg` | Sail still folded in the bus; only the booms show. NASA Plum Brook 20 m sail used instead |
| `Kanazawa Gold Factory.jpg` vs `Small gold nugget 5mm dia and corresponding foil surface of half sq meter.jpg` | Both honest. The nugget-and-foil museum shot is a flat gold square behind glass with the nugget barely visible; the workshop photo shows the leaf as a leaf, being lifted on tongs |
| `Antistatic bag with conductive grid.jpg` | A carbon-grid conductive bag, a different and rarer construction from the metallised shielding bag the card is about. The two-bag photo used instead because it shows the pink and silver kinds side by side |
| `Thin film polarizer.jpg` | See the dropped table: a coated glass plate |

Sources that answered a script this round: Edmund Optics application notes, Kurz, Orafol,
Vishay, Society of Gilders, US National Archives, Library of Congress, NASA mission pages,
ESD Association, Geosynthetic Institute, Futamura, Amcor, Gauzy, Macrogalleria. Refused or
dead: FHWA (403), 3M (403), Sealed Air (403), BPF Plastipedia (403), NEDCC (403), WIMA (404),
National Film Preservation Foundation (404), Penn State and UMass extension fact sheets
(404), Teagasc silage page (404), Kanazawa gold-leaf museum (TLS handshake fails), Hakuichi
(503), V&A gilding article (404).

Also this round: the monthly link audit the roadmap asks for was run by hand. Twelve `link`
targets had been deleted or moved on Wikipedia and were 404: SiAlON, Two-photon lithography,
Wire arc additive manufacturing, Lattice material, Ultra-high-performance concrete, Melamine
fiber, Woven wire mesh, Spacer fabric, Triaxial weave, Kinetic recovery rope, Slippery
Liquid-Infused Porous Surfaces, Liquid crystal elastomer. Each was repointed to the nearest
live article. Twenty-four more are redirects that still resolve and were left alone.


## Pictures off Commons, round one (2026-10-22)

Policy: Commons is the research tool and the last resort; the picture shown comes from the
photographer's own page, an agency, a museum or a maker wherever one exists.

What answered a script: Flickr oEmbed (licence and author, no key), Openverse
(`api.openverse.org`, 200 anonymous queries a day, 20 a minute; `excluded_source=wikimedia`;
responses take 10–70 s), NASA images API, Cleveland Museum of Art open access (`cc0=1`),
the Met collection API (hits, but nothing that was a material), Art Institute of Chicago,
DVIDS (og:image), energy.gov, Poly Haven (`cdn.polyhaven.com/asset_img/primary/<id>.png`),
`cdn.eso.org/images/large/<id>.jpg` (certificate chain unverifiable from Python, fetched
unverified), GeoDIL, pxhere (`!d` suffix for the full file).

Refused a script, don't retry: Geograph (403 on pages and oEmbed alike), Auckland Museum
API (403), mindat (403), NRL techtransfer (403), MDPI (403), Wellcome Images (old URLs 403;
use the collection API if ever). Dead: scienceimage.csiro.au (domain gone; six CSIRO
pictures stay on Commons), ballistics.grc.nasa.gov, mynewsdesk KTH transparent wood,
IWM media URL, momu.be study collection.

Flickr pages that vanished since the Commons import (keep the Commons copy): abs (the
old one), seatbelt, acrylicfibre, metamaterial, twophoton, ribbonmic, grillesteel.
Flickr licences that changed since import: recordvinyl and gingham now All Rights
Reserved, oxfordcloth now CC BY-NC. The CC grant is irrevocable, but the page no longer
says so, so those stay on Commons where the grant is recorded.

Rejected after looking: rhenium — a Flickr re-upload of Alchemist-hp's photograph under
a different licence (licence-washing); uhmwpe — watermarked ballistic shields; epdm and
pp — candidates under 640 px; eps — overexposed; aerogel — NASA's current page carries
an artist's rendering, not the hand photograph; kapton tape rolls were fine but the NASA
sunshield re-cite already covers it; nbr, tpu, mylar (Spider-Man balloon: a licensed
character), magnesium (a camera body, unverifiable alloy).

### Glues (glue), 2026-10-31

The round that opened the category. Nineteen added; these were searched and dropped.

- **Polyurethane glue** (Gorilla, PU wood glue) — `PU glue`, `polyurethane adhesive`, `PUR Klebstoff`,
  `Gorilla Glue bottle`: nothing but Bugattis, railway stations and cannabis. The Gorilla *wood*
  glue bottle that came up is PVA and went to `pvaglue`. Retry with `foaming glue`, `Schaum Leim`.
- **Resorcinol glue** (the purple boat-building line) — `resorcinol glue`, `resorcinol`, `Aerodux`:
  only structural formulae. Retry via a boat-building or glulam photograph with a visible dark glue line.
- **Sticky-rice lime mortar** (the Great Wall) — `sticky rice mortar`, `glutinous rice mortar`,
  `糯米灰浆`: mochi pounding, nothing else. Would sit better under building anyway.
- **Sodium silicate (water glass)** — `sodium silicate`, `water glass`, `Wasserglas`, `Natriumsilikat`:
  drinking glasses and chemical gardens. The one honest photo is a firestop caulk shot with yellow
  annotations burned into it. Retry with `foundry core sodium silicate`, `Wasserglas Flasche`.
- **Dextrin and envelope gum** — `dextrin`, `envelope gum`: stamp-gumming machines of 1910, no gum.
- **Fibrin sealant** — `fibrin sealant`: one 720 px surgical figure, under the floor.
- **Methacrylate structural adhesive (MMA)** — `methacrylate adhesive`: a blackboard formula.
- **Tile adhesive, mastic** — `tile adhesive`, `mastic tile adhesive`: trowels and medieval tiles.
- **Pearl glue** as its own card — folded into `boneglue`, which is what the pearls are.
- **Spray adhesive** (3M Spray Mount) — `spray adhesive`, `Sprühkleber`: a good can photo exists
  (`Can of Spray Mount Adhesive.jpg`), but 3M answers scripts with 403 and the only reachable source
  was a retailer; dropped for want of a maker's page, not a picture. Retry when a 3M page loads.
- **Dermabond, skin glue** — a usable photo of a closed incision on a child's arm exists; passed on
  it as not a card anyone wants on the page. Cyanoacrylate already has its card under plastics.
- **Mucilage** — `mucilage`: the Marmara Sea mucilage bloom, every result.
- **Hafting resin** — `hafting resin`: Auckland Museum nephrite axes whose description says no resin
  is visible. `spinifex` covers the subject with a resin bead actually in frame.

| rejected after looking | why | replaced by |
|---|---|---|
| `Pva wood glue.jpg` | a shop shelf of bottles, the glue is a label | `Wood glue (6612809401).jpg` |
| `Sticky Note on a white background.jpg` | one flat red square, honest but says nothing | `Stack of four sticky notes.jpg` |
| `Metacaulk sodium silicate paste.jpg` | annotations burned into the picture | nothing, card dropped |
| `Usos de la pez.jpg` | a museum bucket of pitch beside branding irons, pitch unreadable | nothing, card dropped |
| `Isinglass.jpg` | a racehorse of that name | `Colla di pesce.JPG` (800 px, the one honest sheet photo) |
| `Axe, hafted (AM 1936.271-8).jpg` | description says no resin visible | `Triodia resin.jpg` |

### Glues, extra views, 2026-11-01

Every glue card was given a short hook, a long `more` text and, where Commons had an honest
one, extra views. Found nothing worth adding for:

- **Acrylic foam tape** — `VHB tape`, `foam tape`, `double sided foam tape`, `Doppelklebeband`:
  a drone with a phone taped to it (tape invisible), a paediatric foot bandage, a tape trade stand.
- **Hot-melt sticks** as a product shot — `NewOne - Hot-melt adhesive KN.jpg` has a shop watermark
  burned into the corner; the gun interior and a school workshop went in instead.
- **Epoxy putty** micrograph — `epoxy filler SEM`, `filled epoxy cross section`: thin sections of
  sandstone. No micrograph of a filled epoxy exists on Commons.
- **Post-it microspheres** — no SEM of the spheres on Commons; a wall of notes stands in.
- **Isinglass** sheets or sturgeon — the swim-bladder queries return a German railway signal
  maker (WSSB); the wine-fining series was the only honest process picture.

| rejected after looking | why |
|---|---|
| `J-B-Weld.jpg` | liquid twin-tube epoxy, not putty |
| `Superglue .jpg` | a tin of brown liquid in a hand; nothing says superglue |
| `LoctiteCure.JPG` | a UV curing wand, which is a different chemistry |
| `Industries of War - Oilcloth ... NARA 45488742.jpg` | a scanned index card with a thumbnail on it |
| `Trial foam tape.jpg` | a bandaged foot; the tape is medical |

### Plastics, third round, 2026-11-04

Ten added: polystyrene, Catalin, Bois Durci, hydrogel (pHEMA), polyglycolic acid, nylon 11,
thermoplastic starch, solid surface (Corian), PVC plastisol, flexible polyurethane foam. Searched
and not added:

| Candidate | Queries tried | Why dropped | Retry with |
|---|---|---|---|
| Polybutylene pipe (PB-1) | `polybutylene pipe`, `polybutylene plumbing`, `polybutene pipe`, `PB-1` | Nothing at all on Commons; `PB-1` is a Boeing flying boat | A grey PB pipe with an Acetal fitting, the American lawsuit material |
| PPSU (Radel) | `polyphenylsulfone`, `PPSU`, `Radel` | Nothing; `Radel` is people | A baby bottle or a sterilisation tray with the resin named |
| PEF (polyethylene furanoate) | `polyethylene furanoate`, `Avantium` | Nothing; `PEF` is the Palestine Exploration Fund | A bottle, when one exists on Commons |
| Santoprene / TPV | `Santoprene` | `TPV` is a Citroën; the branded pallet from the last round is still the only granule photo | Loose granules in a hand |
| TPE (SEBS compounds) | `thermoplastic elastomer`, `SEBS`, `TPE granules`, `overmolded grip`, `TPE toothbrush` | Only a Kraiburg pellet bag with the brand across it, a 3D-printed lattice pillow, and a schematic | A toothbrush or razor grip with the soft part legible |
| ASA | `acrylonitrile styrene acrylate`, `ASA plastic` | Place names and a politician | A named outdoor moulding |
| SAN | `styrene acrylonitrile` | Only ABS pictures and tree resin | A clear SAN kitchen item named as such |
| Parkesine | `Parkesine`, `Parkes plastic` | Celluloid objects and Alexander Parkes's blue plaques; no Parkesine object on Commons | The Science Museum pieces, if ever uploaded |
| Unsaturated polyester resin | `polyester resin`, `fiberglass resin`, `gelcoat`, `polyester resin casting`, `chopped strand mat`, `MEKP` | A staff-moulding diagram, finished boats, chemistry; the laminate is already `Glass-fibre laminate` under building | A tin and a wet layup, not a hull |
| XPS (extruded polystyrene) | `extruded polystyrene`, `XPS insulation` | Good board photos (`Styrofoam-grey-board.jpg`, `Styrodur.jpg`) but the brand is printed across the face; it is also a warmth card, not a plastics one | Put it under warmth from a cut edge |
| Bone cement (PMMA) | `bone cement`, `PMMA cement`, `cemented hip`, `Palacos` | Bone glue (the animal kind), and X-rays where the cement mantle is a thin white line; no photo of the cement itself | A mixing bowl of dough, or a cut femur section |
| PHB / PHA | `polyhydroxyalkanoate`, `polyhydroxybutyrate`, `PHB granules`, `PHA bioplastic`, `biopolymer pellets` | One honest picture, a spherulite micrograph (`Micrografia di cristalli sferulitici ... (PHB).jpg`, CC BY 4.0, 1307 px); held, because a card whose only view is a micrograph says nothing about the material in the hand | The micrograph as the structure view once a pellet or object photo exists |
| PMP / TPX | `polymethylpentene`, `TPX beaker`, `PMP labware` | `PMP beaker.jpg` is right and honest but 864 px wide; held | A larger photo of PMP labware |
| CPVC | `CPVC pipe`, `CPVC` | Two usable photos (`CPVC tees.jpg`, the Blazemaster sprinkler mock-up) but the card would be a footnote to PVC; held for a plumbing round | — |

| rejected after looking | why |
|---|---|
| `Polistirolo.JPG` | expanded packaging foam, which is the `eps` card |
| `FADA Bullet Catalin radio.webp` | the iconic marbled blue, CC0, but webp: the fetcher reads only JPEG and PNG, so the Emerson 520 from Flickr went in instead |
| `Pillow made from thermoplastic elastomer.jpg` | a printed lattice; says 3D printing, not TPE |
| `Hip replacement Image 3684-PH.jpg` | an X-ray; the cement is a thin line, and an X-ray is not a photograph of anything |
| `Moulage en stratifié polyester.jpg` | a line drawing from a staff-moulding manual |
| `Interboot 2023, Friedrichshafen (P1120545).jpg` | a finished gelcoat hull; nothing says polyester |

### Metals, second round, 2026-11-16

Ten added: gallium, tin (the pest), wootz, Kanthal, galvanised steel, tinplate, ductile iron, the
tungsten filament, the zinc anode, indium. Searched and not added:

| Candidate | Queries tried | Why dropped | Retry with |
|---|---|---|---|
| Elinvar | `elinvar`, `hairspring watch` | Rolex product shots and one alarm-clock balance wheel whose spring is not identified; nothing says Elinvar | A hairspring with the alloy named, a museum movement |
| Permalloy | `permalloy` | Good photos (`Permalloy strip.jpg`, Elmen at the furnace), but Mu-metal is already a card and the two would say the same thing | A tape-wound core, as a second view on `mumetal` |
| Titanium aluminide | `titanium aluminide`, `TiAl blade` | One lamellar micrograph and no blade; held, a micrograph alone says nothing in the hand | A GEnx or LEAP low-pressure turbine blade |
| Aluminium bronze | `aluminium bronze`, `nickel aluminium bronze`, `Nibral propeller`, `bronze propeller ship` | Propellers whose alloy is not stated, a corrosion-test board, coins | A ship propeller or a valve body with the alloy in the description |
| Lithium metal | `lithium metal`, `lithium element`, `lithium paraffin`, `lithium sample ampoule` | Price charts and mine maps; the element photos (`Lithium (Element - 3)`) are usable but the card would duplicate `lfp` on the battery side | A fresh-cut lump under oil, for a sodium-and-lithium pair |
| Molybdenum | `molybdenum`, `molybdenum electrode glass`, `molybdenum boat evaporation` | A good crystal-and-cube photo and one evaporation boat; nothing shows what it is for, and the card would be a list of uses | A glass-furnace electrode or a moly wire heating element |
| Mercury | `mercury metal`, `liquid mercury` | Plenty of honest pictures; passed over because the amalgam card below is the better way in, and this round had its liquid metal in gallium | Together with dental amalgam |
| Sodium | `sodium metal`, `sodium filled valve`, `sodium cooled valve` | `Na (Sodium).jpg` is good; held for a round with room, since the story is the reactor coolant and the exhaust valve and neither has a photo on Commons beyond a whole Wright J-5 | A cutaway sodium-filled valve |
| Osmium | `osmium`, `osmium crystals`, `osmium sample` | Excellent crystal photos (FAL); held, because the card would be density and a smell and this round wanted working metals | Next round, as the densest thing in the catalogue |
| Speculum metal | `speculum metal`, `speculum mirror telescope`, `Herschel mirror` | Herschel's 40-foot mirror in the Science Museum is a fine picture; held for a round with the optics | With the glass cards: the mirror before silvered glass |
| Mokume-gane | `mokume gane`, `mokume-gane` | Mauro Cateb's sheets and forks are good and free; held, the diffusion-bonding story fits a round on joining | A joining or jewellery round |
| Electrum | `electrum coin`, `electrum nugget` | Lydian coin photos are good; held, since the card is history more than material | A coinage round with sterling and nickel silver |
| Type metal | `type metal`, `movable type lead`, `Linotype slug`, `Monotype caster` | Type-case photos are good; the antimony-expands story is already told on the bismuth card | A printing round |
| Dental amalgam | `dental amalgam`, `amalgam filling`, `amalgam capsule` | `Filling.jpg` is honest; held for a round with mercury, see above | With mercury |
| Pewter | `pewter`, `pewter tankard`, `Zinn Teller`, `pewter casting` | Good tankard and plate photos; held, the tin card carries the tin-pest point that makes pewter interesting | A tableware round with Britannia metal |
| Shakudo | `shakudo`, `tsuba shakudo` | The tsuba is good; the only photo named shakudo shows the bar before patination, which is the wrong colour | With mokume-gane, in a jewellery round |

| rejected after looking | why |
|---|---|
| `Gallium metal.jpg` | a lump melting in a plastic bag on a palm; the crystals and the pour say more |
| `Tin allotropy.jpg` | a drawing of the two unit cells, not a photograph |
| `PSM V83 D032 Organ pipes that have been attacked by tin disease.png` and the medal | 1913 halftones; too coarse at card size |
| `Nichrome wire heating element.jpg` | a home-made heat-press frame; the wire is a few pixels. The Kanthal spool went in instead and the card became Kanthal |
| `Resistance coil 001.jpg` | a coil in a glass tube, unidentified alloy |
| `Wootz Steel Detail.jpg` | the watered pattern under a pink cast and soft focus; the whole sword went in as the second view, and the crucible-steel button, which is honest about being a relative, as the first |
| `Watered pattern on sword blade1.Iran.JPG` | the best pattern photo, 806 px wide |
| `SHAKUDO.jpg` | a copper-coloured bar with the word written on it; shakudo is black |
| `Weissblech verpackungsstahl.jpg` | coils of tinplate, fine, but licensed as bare Attribution and the can interior said more |
| `Cast iron tensile test.JPG` | the description itself says the brittle fracture is not representative of ductile iron |



## Restyle batch, 17 November 2026: vulkollan, sorbothane, d3o, uhmwpe, peek

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Sorbothane, a better face | `Sorbothane`, `viscoelastic polymer`, `vibration isolation feet` | Commons has only the Flickr import already on the card (grommets on a turntable plinth, dark) and DMA graphs | a Flickr CC photo of the sheet or the feet, if one turns up |

| rejected after looking | why |
|---|---|
| `Kryptonics Classic skateboard polyurethane wheel glowing against sunset.jpg` | a backlit skateboard wheel, not Vulkollan and not its job; the pallet-stacker wheel set, retreaded in 80 Shore A polyurethane, replaced it |
| `Karbonfaserverstärkter Hochleistungs-Kunststoff (PEEK).jpg` | a rendering of a cut tube, not a photograph |
| `UHMWPE Dyneema, Polyamide, PolyAcryl en Polyethyleen.jpg` | a museum sample box, mostly labels at card size |
| `PEEK resin.jpg` kept, caption corrected | the granules are black, a filled grade; the old caption called them tan |


## Restyle batch, 17 November 2026: vespel, torlon, ffkm, zylon, lignostone

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Vespel, a second view | `Vespel seal`, `polyimide seal ring`, `SP-1 polyimide`, `polyimide bushing` | only the one CC0 machined piece already on the card | a maker's or NASA photo of a Vespel bushing |
| Torlon, a real photograph | `Torlon`, `polyamide-imide`, `PAI plastic`, `thrust washer polymer`, `compressor vane plastic` | nothing; the Kapton tape stays as the labelled chemical neighbour | any PAI part on Commons or Flickr |
| FFKM, an O-ring | `Kalrez`, `perfluoroelastomer`, `FFKM O-ring`, `Chemraz`, `perfluoro O-ring` | only the sheet already on the card | a photo of Kalrez rings in a semiconductor tool |
| Zylon, the fibre or a panel | `Zylon`, `PBO fiber`, `polybenzoxazole`, `Zylon panel`, `cockpit side protection Formula One` | matches were unrelated; the Halo is titanium, not Zylon | a Toyobo spool, or a cockpit side panel photographed off the car |

| rejected after looking | why |
|---|---|
| `Lignoston.jpg` as the face | a close-up of a knife-handle scale that reads as a brown blur at card size; kept as the second view, the Spitfire XIV with its Jablo propeller blades is the face |
| `Hercules.propeller.arp.jpg` | a C-130J, composite blades |
| `584c Image of Curatorial Object (54689337931).jpg` | a Dowty Rotol four-blade, described as metal |
| `S03 233 Isolierlasche.jpg` | an insulated rail joint; the fishplates were once densified wood but these are described as glass fibre |


## Restyle batch, 18 November 2026: ptfe, eptfe, aramid, fkm, silicone

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| FKM, a bare O-ring | `Viton O-ring`, `fluoroelastomer O-ring`, `FKM seal`, `Viton`, `fluororubber` | the only ring assortments are mixed materials from a seal vendor; `Viton` returns an island, a crane and a grave | a photo of brown or black Viton rings labelled as such |
| Silicone, moulded parts or tubing | `silicone rubber tubing`, `silicone keypad`, `silicone rubber mould`, `silicone spatula`, `silicone baking mould` | nothing usable: hose photos are a computer restoration, moulds are of sculptures | a photo of a silicone keypad or peristaltic tubing |
| PTFE, a lined vessel or a sheet | `PTFE sheet` | nothing | a photo of PTFE lining or a skived sheet |
| ePTFE, a vascular graft | `ePTFE vascular graft` | nothing on Commons | a surgical or teaching photo of a graft |
| Aramid, a honeycomb | `aramid honeycomb` | nothing; Nomex honeycomb would be meta-aramid in any case | a photo of Nomex honeycomb core |

| rejected after looking | why |
|---|---|
| `Fiber optic vacuum viton seal ProtoDUNE.jpg` as the face | a brown cap on a black tube at card size, unidentifiable; kept as the third view, the Viton gloves are the face |
| `Liquid-silicon-rubber-crop.jpg` as the face | a smear on a brown table; kept as the second view, the ice-cube trays are the face |
| `Assortment of oil seals.jpg` | a vendor's mixed bag, only some of it FKM |
| `Comparison of rubber and silicone grommet plugs for drainag.jpg` | three small plugs on a desk, too small at card size |
| `Silicone 3d print with support material.jpg` | a printer nozzle; the silicone is a black blur under it |
| `Exposició TAPAS. Spanish Design For Food - 04.jpg` | museum vitrine of Lékué kitchenware, mostly labels |
| `NIJ LVLIIIA Kogelvrij vest, BA8001.jpg` | a vendor's product shot of a vest; the ESA shield after the test shot says more |
| `Early Gore-Tex hooded rain jacket.jpg` as an ePTFE view | already the face of the laminated shell card; the Navy flight-deck photo replaced it |
| the US Navy flight-deck Gore-Tex photo (070130-N-0555B-129) | a helmet and a catapult lamp at card crop; the jacket is camouflage and could be anything, so ePTFE keeps only its micrograph |


## Restyle batch, 18 November 2026: natrubber, butyl, pvdf, kapton, parylene

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Parylene, anything photographic | `parylene`, `conformal coating`, `coated circuit board`, `cochlear implant electrode array`, `vapor deposition polymer coating`, `Gorham parylene` | only repeat-unit diagrams; the pacemaker stays alone | a photo of a coating chamber or a coated board with the masking still on |
| Butyl, a vial stopper or a CBRN glove | `pharmaceutical rubber stopper`, `rubber stopper vial`, `chemical protective gloves butyl` | nothing that names the material; the one glove photo is unspecified | a labelled pharmaceutical stopper photo |
| PVDF, a piezo film or a Kynar facade | `PVDF film piezoelectric`, `piezoelectric film sensor`, `PVDF coating facade`, `Kynar 500`, `hydrophone` | the piezo strand photos are 640 px microscope shots; hydrophones are steel housings | a photo of a PVDF film sensor or a Kynar-coated panel named as such |

| rejected after looking | why |
|---|---|
| `Butyl rubber gloves.JPG` as the face | a dark grey smear at card size; kept as the second view, the Barum inner tube is the face |
| `RSS rubber drying.jpg` | a forest with washing lines; the sheets are invisible at card size |
| `TPU vs. butyl inner tubes 01.jpg` and `04.jpg` | the pink TPU tube is the eye-catcher, the butyl one is the black coil behind it |
| `Vurrkaetud PVdF membraan.jpg` | a failed spin-coat, abstract |
| `Kapton tape in Samsung phone.jpg` | a phone battery bay; the tape is a sliver |
| `Inflated PVDF membrane at New Xingsheng Project construction site (20240814173842).jpg` | a street with taxis; the dome is a white blob behind the trees |


## Restyle batch, 18 November 2026: vectran, delrin, pc, pmma, sap

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Vectran, the fibre or a rope | `Vectran`, `liquid crystal polymer fibre` | only synthesis diagrams and a Dyneema rope | a Kuraray spool or a labelled Vectran line |
| Acetal, a gear | `acetal gear`, `POM plastic gear` | nothing named | a photo of a POM gear train named as such |
| Polycarbonate, a riot shield or canopy | `polycarbonate riot shield`, `aircraft canopy polycarbonate`, `polycarbonate granulate` | nothing, or a 640 px wildlife photo | a canopy or shield photo that names the material |
| PMMA, a thick aquarium panel seen edge-on | `acrylic aquarium window`, `acrylic submarine window`, `cast acrylic sheet` | only the Dubai restaurant and a 1950s display board | a Churaumi or Georgia Aquarium panel photo |
| SAP, the nappy core | `diaper absorbent core`, `hydrogel soil` | nothing | a cut-open nappy |

| rejected after looking | why |
|---|---|
| `Level 3A glove.jpg` as the Vectran face | a generic grey glove, the fibre one of several it might contain; dropped, the MER airbag test model is the face |
| `Airbags.jpg` | an artist's concept of airbags bouncing on Mars, a rendering |
| `Display board featuring Plexiglas windows for airliners` | a grey exhibition board, mostly text |
| `Twinwall Polycarbonate Sheet.jpg` | a grey corrugated blur at card size |
| `Bottom of 18.9 Liter (5 Gallon) jug made by GREIF` | embossed recycling marks, nothing to see |
| `POM-Granulat.JPG` | white pellets, indistinguishable from any other resin |
| `Sodium polyacrylate.jpg` and `Gel Water Beads (6477584337).jpg` | coloured beads much like the vase photo; one view of them is enough |


## Restyle batch, 18 November 2026: polyurea, bakelite, phenolic, neoprene, epdm

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Polyurea, a tank or tunnel lining | `polyurea`, `spray polyurea coating` | only chemical diagrams and the Pueblo chemical-weapons plant bioreactor tanks, where the lining is not visible | a photo of a lining being sprayed in a tank |
| Phenolic laminate, a gear or a bearing | `Tufnol`, `Micarta`, `phenolic laminate`, `Textolite`, `Pertinax`, `paxolin` | nothing but knife handles; Pertinax returns a Roman emperor | a photo of a Tufnol gear or a stern-tube bearing |
| Neoprene, a bridge bearing | `neoprene bridge bearing` | nothing | an elastomeric bearing under a bridge deck, named |
| EPDM, a door seal or hose | `car door rubber seal`, `radiator hose`, `pond liner EPDM`, `EPDM granules playground` | nothing named; radiator hose returns radiators | a weatherstrip photo that names the rubber |

| rejected after looking | why |
|---|---|
| the Flickr polyurea pail as the face | a pail among rags and bottles on a doorstep; replaced by the sprayed bed, the pail dropped |
| `Micarta knife handle.jpg`, `Couteau bushcraft.JPG` | a dark brown blur and a knife where the Micarta is a sliver |
| `Bakelite Cocktail Shaker.jpg` | marbled grey, reads as pottery at card size |
| `Neoprene.jpg` | a black sheet with holes, no scale |
| `EPDM rubber roof - Halifax.jpg` | a grey roof against grey sky |


## Restyle batch, 18 November 2026: nbr, br, tpu, pps, mylar

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| NBR, an O-ring or oil seal named as nitrile | `nitrile O-ring`, `nitrile rubber seal`, `oil seal rubber lip`, `hydraulic cylinder seal`, `rubber O-rings assortment` | nothing named; the seal assortments are a vendor's mixed bag | a photo of black nitrile rings labelled as such |
| Polybutadiene, a Super Ball or a tyre compound | `bouncing ball polybutadiene`, `tyre tread rubber compound` | nothing | a Super Ball photo that names the rubber |
| TPU, a moulded part | `TPU phone case`, `clear phone case`, `TPU filament`, `3D printed TPU`, `TPU shoe sole`, `inline skate wheel`, `polyurethane hose pneumatic` | phone cases are unspecified, skate wheels and the caster are cast polyurethane, not TPU | a Ninjaflex print or a labelled TPU case |
| PPS, anything photographic | `polyphenylene sulfide`, `PPS plastic`, `Ryton`, `Fortron`, `PPS resin`, `PPS filter bag`, `PPS fiber`, `baghouse filter bags`, `high temperature plastic pump impeller` | only crystal-structure renders; `Ryton` is a village, `Fortron` a Celanese plant; the Molex connectors stay alone | a Ryton pump housing or a PPS filter bag named as such |

| rejected after looking | why |
|---|---|
| the Flickr foil balloon in a bush as the Mylar face | a desert hillside with a small bright blob; replaced by Echo 1 in its hangar |
| `T. Keith Glennan Shows LBJ Aluminized Mylar Flim...` | two men in suits; the film is a crumple in their hands |
| `STS082-357-022 ... Multilayer Insulation (MLI) patches` | silver crinkle with no scale |
| `Mylar speaker (5622156948).jpg` | a speaker on a desk; the cone is a grey disc |
| `Swivel Caster with Poly Brake.jpg` | phenolic wheel, polyurethane brake only; neither is TPU |
| `Nitrile Gloves holder 20230316 110111.jpg` | a wall dispenser, mostly printed cardboard |
| `Ozonecr1.jpg` as a second NBR view | a dark dimpled disc at card size; the cracks only show at full size, so it was dropped after fetching |


## Restyle batch, 18 November 2026: pp, memoryfoam, epoxy, eva, abs

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| PP, a meltblown mask or a bumper | `polypropylene nonwoven mask`, `polypropylene bumper`, `polypropylene rope` | nothing named; rope returns bungee cords | a photo of a mask web or a bare bumper beam named as PP |
| Memory foam, a mattress or cushion in use | `memory foam mattress`, `memory foam pillow`, `viscoelastic foam` | shop fronts and a yellow seat cushion without scale | a cut section of a mattress showing the layers |
| Epoxy, a carbon layup or a river table | `carbon fibre epoxy layup`, `epoxy river table`, `epoxy potting electronics` | nothing | a vacuum-bagged carbon part or a potted module |
| EVA, a midsole or a floor mat | `EVA midsole`, `foam floor mat puzzle`, `flip flops foam` | nothing named | a cut running shoe showing the midsole |
| ABS, a plated part or a vacuum forming | `ABS pipe`, `vacuum formed ABS` | nothing relevant | a chrome-plated ABS badge or tap |

| rejected after looking | why |
|---|---|
| `Mint box polypropylene lid.JPG` as the PP face | a white blob at card size; kept as the second view, the Monobloc chair is the face |
| the Flickr epoxy floor as the face | grey speckle, reads as terrazzo; replaced by the two-part syringe |
| `Mix of Epoxy Resin and Hardener.jpg`, `Epoxy.jpg` | a pour into a yoghurt pot, and a vendor-style shot of Devcon bottles |
| `PE and PP objects.jpg` | recycling-coded bottles, mostly PE |
| `Polypropylene Pellets - DPLA`, `ABS granule.jpg` | white pellets, indistinguishable from any other resin |
| `Memory foam from ear-plugs.jpg`, `Foam and Viscoelastic Foam.JPG` | a yellow macro with no scale, and a yellow pad on a floor |
| `Pink Crocs (1001349).jpg` | a worn shoe on a bathroom floor |
| `Danmarks Tekniske Museum - Lego bricks.jpg` | a model in a vitrine; the bricks are tiny |


## Restyle batch, 18 November 2026: pet, pvc, nylon66, hdpe, pex

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| PET, the fibre or the blow-moulding machine | `polyester fibre staple`, `PET bottle blow moulding`, `fleece recycled bottles` | nothing | a photo of a stretch-blow machine or a fleece named as rPET |
| PVC, a window profile or a floor | `PVC window frame profile`, `vinyl flooring roll` | nothing; flooring returns gyms and HABS surveys | a cut uPVC profile section |
| Nylon 6/6, a gear or the 1940 stockings | `nylon gear`, `nylon stockings 1940`, `Carothers nylon`, `nylon 66 pellets` | gears are an unspecified breadboard pair; the DuPont archive scans are pamphlets and sample books | a labelled nylon gear or a 1940 queue photograph |
| HDPE, a butt-fusion joint or a cutting board | `HDPE pipe butt fusion`, `HDPE cutting board`, `HDPE milk jug` | nothing; the milk jug query returns maple sap | a photo of a fusion machine on a gas main |
| PEX, an expansion joint or a manifold close-up | `PEX manifold`, `PEX crimp fitting` | only 680 px vendor shots of brass fittings | an expansion tool on a pipe end |

| rejected after looking | why |
|---|---|
| `Kabelbinder -- 2024 -- 6907.jpg` as the nylon face (and 6911, 6917) | light-painted art shots of cable ties: a rainbow streak on black, unreadable; replaced by the eBay heap |
| `Bridas de nylon blancas y negras.jpg` | 720 px and four ties on a desk; the heap says more |
| `Gears 5625.JPG` | a brass and a grey gear on a breadboard; which one is nylon is anyone's guess |
| `Nylon Hosiery Sample Books - DPLA` | a pamphlet cover, text |
| `20220807 PET preform 1.jpg` | preforms with caps on a dark table; the hand-held one beside a bottle neck explains the process |
| `Fitting motor.JPG` | a motor in a cut pipe, the pipe incidental |
| `Geosynthetic materials.jpg` | a black-and-white stack of textiles; the geomembrane is a dark band |
| `Orange and Yellow HDPE Pipe.jpg` | duplicates the orange reels already on the face |
| `PEX installation tools and fittings.jpg` | a numbered tool layout, fine for a manual, cluttered on a card |
| `XLPE powder in mold used in Rotational Molding` | white powder in a grey mould |


## Restyle batch, 18 November 2026: eps, pdms, pebax, pei, fep

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| EPS, a cut helmet liner | `bicycle helmet cut EPS`, `bicycle helmet cross section`, `surfboard blank EPS`, `geofoam embankment`, `polystyrene void former` | nothing; the helmet query returns a gorge in Taiwan | a sectioned helmet showing the liner |
| PDMS, a stamp or a cast in progress | `soft lithography PDMS`, `PDMS stamp`, `Sylgard 184`, `PDMS membrane` | postage stamps and a 640 px cylinder; the one process photo is a dish of dark slabs | a photo of PDMS being peeled from a wafer |
| Pebax, a catheter or a boot named as such | `catheter balloon`, `ski boot shell plastic` | catheters are unspecified grey tubes; the broken boot is polyurethane | a catheter or soleplate photo that names Pebax |
| PEI, cabin parts or a sterilisation tray | `aircraft cabin interior panel`, `sterilization tray plastic`, `thermoformed aircraft tray table`, `Ultem lens eyeglasses` | nothing named; `Ultem` and `PEI` return people, dogs and licence plates | an airliner tray table or an autoclave tray named as PEI |
| FEP, anything at all | `FEP tubing`, `FEP film`, `fluorinated ethylene propylene`, `FEP heat shrink`, `FEP wire insulation`, `Teflon FEP`, `fluoropolymer tubing`, `Teflon tubing laboratory`, `fluoropolymer film greenhouse` | a structure diagram, politicians of Benin and a crop-duster; the PFA tubing stays as a related view | any photograph of FEP tubing or film labelled as such |

| rejected after looking | why |
|---|---|
| `Expanded Polystyrene (EPS) foam pellets.jpg` as the face | dark beads in a palm, unidentifiable at card size; kept as second view, the insulation board is the face |
| the pipette-rack microfluidic photo as the PDMS face | a desk scene, the chip a sliver; replaced by the NIST device |
| `Ski boots alpin large.jpg` as the Pebax face | an analog; kept as second view, the cut Vaporfly is the face |
| the JD Mall printer photo as the PEI face | a printer; the plate is a dark rectangle; kept as second view, the Ultem antenna is the face |
| `Styrofoam Coolers (9431862366).jpg` | a man carrying a white box across a car park |
| `Thermocol blocks.jpg` | a ruler against a broken edge, mostly ruler |
| `Microscopic Section of Thermocol block` | an abstract micrograph |
| `Рождение микрофлюидного чипа 2.JPG` | a dish of dark slabs |
| `Microfluidic chip for point-of-care medical devices.jpg` | a second clear chip much like the NIST one |
| `HK clothing NIKE brand Vaporfly Next sneakers ... 05 (cropped).jpg` | white shoes on feet, the foam invisible |
| `Materialermüdung Skischuh Polyurethan.jpg` | a cracked boot, and polyurethane |
| `Tip of dilatation catheter with balloon.png` | a grey tube against a ruler |


## Restyle batch, 18 November 2026: pvb, surlyn, pla, cellacetate, melaminefoam

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| PVB, the bare sheet or an edge view | `laminated glass edge`, `PVB interlayer`, `polyvinyl butyral`, `windscreen replacement` | only the Norwegian tram series, one diagram and garages; the Jaguar fitting shot is a car with suction cups | a roll of interlayer or a cut edge of laminated glass |
| Surlyn, anything but a golf ball | `golf ball cut in half`, `golf ball cross section`, `Surlyn`, `ionomer`, `perfume bottle cap plastic`, `ski base` | a dozen golf balls photographed like the face, a 700 px sectioned ball, ski resorts | a sectioned two-piece ball, a perfume cap or a bowling pin named as Surlyn |
| PLA, pellets or the lactide plant | `PLA pellets`, `polylactic acid`, `compostable cutlery PLA` | a Roman coin, structure diagrams and an art piece | pellets or the Blair plant |
| Cellulose acetate, a frame being made or a tortoiseshell slab | `cellulose acetate glasses`, `acetate eyeglass frames`, `spectacle frame manufacturing`, `Brille Acetat`, `occhiali acetato` | one riveting photo, a Hercules brochure, buckles | a Mazzucchelli slab or a frame on the mill |
| Melamine foam, a panel installed | `melamine sponge`, `Basotect`, `Melaminharzschaum`, `acoustic foam studio` | only the eraser block; studio foam is unspecified and probably polyurethane | a Basotect ceiling or pipe lagging named as such |

| rejected after looking | why |
|---|---|
| `Cutlery made from Cellulose Acetate Biograde.JPG` as the acetate face | white plastic cutlery, could be anything; replaced by the Wayfarer frame |
| the Flickr profiled acoustic panel as the melamine foam face | reads as a plaster cornice; kept as second view, the cleaning block is the face |
| `Nieten einer Acetat Brille.jpg` | a good process shot of riveting a hinge, but the frame is a sliver under the hand; third slot went to safety film |
| `Laminated safety glas vandalised 20060407 340.jpg` | a chunk of crazed glass with no scale |
| `Jag having new windscreen fitted`, `Rolls Royce Ghost Front Windscreen Replacement.jpg` | a car with suction cups, and a garage |
| `2025 Surlyn cover Slazenger VSeries Distance golf ball` | a second golf ball, labelled but the same picture as the face |
| `Charmander PLA print.jpg`, `PLA White filament.jpg` | a dark blurry print, and a spool label |
| `Battle of the Cups Bioplastic vs. Petroleum-Based Plastic` | a poster |
| `MakerBot Manufacturing (9279729584).jpg` | a filament line, but a man and a long machine at card size |
| `Horn rimmed spectacles, 4 types. Wellcome M0007428.jpg` | horn and early plastics, unspecified, black and white |
| `Buddys Glasses 1, Buddy Holly Center` | a dim museum case |
| `Film with early vinegar syndrome.jpg`, `Film tin with vinegar syndrome.jpg` | a reel and a tin much like the Kodak reel, less readable |
| `Cellulose Acetate disposable syringe filter.jpg` | a labelled packet, honest but a packet |
| `MagicEraser 240708 024642.png` | an owl logo |
| `Ski base structure.jpg` | 800 px of black strip |


## Restyle batch, 18 November 2026: pva, nafion, pbi, galalith, celluloid

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| PVOH, a soluble print support or embroidery stabiliser | `dissolvable support 3D print`, `PVA support material`, `soluble support 3D printing`, `water soluble embroidery stabilizer`, `PVA film water soluble` | nothing; `PVA` returns Prague exhibition grounds and a Korean war | a two-head print with the support half dissolved |
| Nafion, the bare membrane or a chlor-alkali cell | `Nafion membrane`, `Nafion`, `membrane electrode assembly`, `chlor-alkali cell membrane`, `Nafion tubing`, `fuel cell bipolar plate membrane` | one diagram, one process photo (the face) and nothing of the membrane itself | a roll or sheet of Nafion, or an MEA before assembly |
| PBI, a hood or turnout shell named as such | `PBI hood firefighter`, `firefighter hood`, `Celazole`, `flash hood`, `turnout gear fire`, `PBI fabric`, `PBI Gold`, `firefighter balaclava` | the Toronto hood is Nomex, the Navy hood is unspecified, `PBI` returns aircraft registrations | a PBI Gold coat or a hood labelled as PBI |
| Galalith, buttons or Bengel jewellery | `Galalith buttons`, `casein buttons`, `galalith jewelry`, `Galalith Schmuck`, `Knöpfe Galalith`, `knitting needles casein` | the RAAF buttons are 835 px, the Larousse engraving is a halftone, the needle set has one casein needle among twenty | a Bengel necklace or a tray of galalith buttons |
| Celluloid, a decayed nitrate reel | `nitrate film decomposition`, `nitrate film fire`, `celluloid dice` | only a 1930s fire-test print, murky at card size | a reel gone to powder in its can |

| rejected after looking | why |
|---|---|
| `Folia PVA z pochodną kumaryny...` as the PVOH face | a yellow petri dish, reads as nothing; replaced by the detergent pods, the dish dropped |
| `Sample of Polyvinyl alcohol.jpg` | white granules in a jar |
| `Fuel cell membrane (15954011223).jpg` | a good membrane photo, but an anion-exchange membrane for alkaline cells, not Nafion |
| `Toyota Mirai fuel cell stack and hydrogen tank SAO 2016 9026.jpg` | the whole car cutaway; the stack is a box in the corner |
| `PBI Membrane HT-PEM.jpg` | 1020 px and duplicates the face |
| `Objets en galalithe.jpg` | a 1921 Larousse halftone |
| `Straight knitting needles.JPG` | twenty needles, one of them casein |
| `Comb, hair (2) (AM 1970.201-2).jpg` | a tortoiseshell comb much like the acetate view two cards along |
| `Photograph of Fire Test of Nitrate Film - DPLA` | a black-and-white yard of burning cans, unreadable small |
| `Bébé celluloïd.jpg` | a doll in a dress, the material invisible |
| `Celluloid Picks.jpg` | a handful of picks, fine but the vanity set and the ball say more |


## Restyle batch, 18 November 2026: melamine, urearesin, pcl, psu, nitinol

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Melamine, a whiteboard or a worktop edge | `whiteboard melamine`, `laminate worktop sample`, `high pressure laminate`, `melamine foam board` | nothing; the Formica store series is speckle close-ups | a cut worktop edge showing the brown core under the skin |
| Urea-formaldehyde, Bandalasta or a chipboard press | `Beetleware`, `Bandalasta`, `urea formaldehyde`, `Bakelite picnic set`, `plywood glue urea formaldehyde`, `MDF particleboard glue`, `urea formaldehyde foam` | the English queries return nothing; `Harnstoffharz` found the radio and the wall foam | a Bandalasta set photographed in colour, or a chipboard line |
| PCL, a Polymorph repair or a splint | `Polymorph plastic`, `hand mouldable plastic`, `InstaMorph`, `Plastimake`, `thermoplastic splint`, `PCL scaffold`, `PCL filament` | only the bead macros already on the card and a 700 px electrospinning micrograph | a hand-moulded part or a splint named as PCL |
| Polysulfone, a dialyser or a membrane | `Udel`, `hollow fiber membrane dialyzer`, `dialyzer`, `polysulfone membrane`, `hemodialysis filter`, `autoclave tray`, `baby bottle polysulfone` | the 1980 dialysis filter is probably cellulose; the membrane images are 860 px micrographs; `Udel` returns Delaware | a modern dialyser labelled polysulfone |
| Nitinol, a stent or an archwire named as such | `nitinol stent`, `self-expanding stent`, `orthodontic archwire`, `nitinol spring`, `nitinol actuator`, `Nitinol glasses` | the stents are cobalt-chrome or unspecified, the archwire photo is 840 px, the bridge rebar is an iron-based memory steel | a self-expanding stent or a Flexon frame named as nitinol |

| rejected after looking | why |
|---|---|
| `Filtro per emodialisi.JPG` | a 1980 dialyser in a cabinet; the fibre is more likely cuprophan than polysulfone |
| `Stent4 (fcm).jpg` | two stents on a ruler, alloy unstated |
| `PCL beads in tub.jpg` | a cup of beads; the macro on the card says more |
| `Melaware cookwares.jpg`, `Servies Mosalite...` | black bowls on a shop shelf, and dishes in a vitrine |
| `Formica Laminate for Countertops 12.jpg` | a speckle close-up |
| `Plastlaminat.jpg`, `Resopal.jpg` | a second chip fan, and a 1024 px white texture |
| `A selection of urea formaldehyde objects at the science museum.JPG` | scattered small objects, unreadable at card size |
| `DIN 49491 Kupplung Aminoplast Gerätestecker alt.jpg` | a white plug |
| `Biegeverstärkung einer Brückenplatte mit Memorystahl.jpg` | iron-based shape memory steel, not nitinol |
| `NASA Armstrong ... PTERA Testbed` | an aircraft taking off; the alloy is inside the wing |
| `Beladungsmuster für Sterilisation Zahnarztinstrumente 02.JPG` | a steel tray |


## Restyle batch, 18 November 2026: invar, kovar, gummetal, bmg, greyiron

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Invar, an LNG membrane or a composite mould | `LNG membrane tank Invar`, `composite mould Invar`, `Invar rod` | nothing; the levelling staff photo is a hi-vis vest and a pole | a Gaztransport membrane corrugation or a 787 tool |
| Kovar, a chip package or a feedthrough named as such | `Kovar`, `hermetic feedthrough`, `TO-5 transistor can`, `dual in-line package ceramic` | `Kovar` is a town in Texas; the compressor feedthroughs are compression seals in steel; the HP ceramic DIP does not name its leads | a TO header or a ceramic package named Kovar |
| Gum Metal, anything | `Gum Metal`, `titanium eyeglass frames`, `beta titanium alloy`, `titanium alloy spring` | chewing-gum bins and bicycle racks; the JINS frame has a beta-titanium hinge, not Gum Metal; the balance spring stays as related | a Gum Metal frame or screw named as such |
| Bulk metallic glass, a ribbon or a transformer core | `metallic glass ribbon`, `amorphous metal transformer core`, `Liquidmetal` | handbags and fans; the only ribbon is a 1024 px DOE photo | a Metglas core or a ribbon spool |
| Grey iron, a machine bed or surface plate | `cast iron machine bed`, `lathe bed cast iron`, `surface plate cast iron`, `engine block cast iron` | the oil-field lathe is a vendor shot with a watermark; the surface plate is 706 px; the rest is bridges and locomotives | a cast lathe bed before paint, or a scraped surface plate |

| rejected after looking | why |
|---|---|
| `Assortment of Kovar metal.jpg` as the Kovar face | a vintage advertisement; kept as a related view, the matched seals are the face |
| the NASA BMGG hands photo as the BMG face | gloved hands and a cylinder; kept second, the Vitreloy 4 pieces are the face |
| `Gusseisen mit Lamellengraphit.jpg` as the grey iron face | a micrograph, honest but abstract; kept as the structure view, the pour is the face |
| `Glass-to-metal compression seals.JPG` | compression seals, which use steel, not Kovar |
| `LeicaStaff01.JPG` | a hi-vis vest and a pole |
| `HP 1820-0250.jpg` | a ceramic DIP, the Kovar unproven |
| `Bulk-metallic-glass matrix composite.jpg` | a 3D render of dendrites |
| `Black Titanium Frame Eyeglasses, JINS MTF-16S-151B, 1.jpg` | a titanium frame, not Gum Metal |
| `Cast iron grey.jpg` | a second micrograph |
| `Disc break wheel.jpg` | a Mercedes wheel; the disc is behind the spokes |
| `Big bore 14 inch ... Pipe Threading Lathe.jpg` | a watermarked vendor photo |


## Restyle batch, 18 November 2026: becu, mumetal, metglas, terfenol, stellite

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Beryllium copper, a spring or connector | `beryllium copper spring`, `beryllium copper connector`, `mould insert beryllium copper`, `BeCu` | nothing; `BeCu` returns Madame du Barry | a connector contact strip or a Belleville washer named as BeCu |
| Mu-metal, a photomultiplier shield or a shielded room | `photomultiplier tube shield`, `magnetically shielded room`, `magnetic shield` | the shielded rooms are RF Faraday cages; `magnetic shield` is the magnetosphere | a MEG room under construction or a PMT in its can |
| Metglas, a wound core or a tag | `amorphous transformer core`, `amorphous metal distribution transformer`, `anti-theft tag acoustomagnetic`, `EAS tag` | nothing; `EAS tag` returns a Scottish waterfall and Corsairs | a cut amorphous core or an opened AM tag |
| Terfenol-D, anything named | `Terfenol-D`, `Terfenol`, `magnetostrictive actuator`, `giant magnetostrictive`, `sonar transducer` | nothing named; the sonar photos are towfish housings | a Terfenol rod or a flat-panel speaker puck named as such |
| Stellite, a valve or saw tip | `cobalt chrome valve seat`, `Stellite valve`, `stellite tipped saw`, `hardfacing weld overlay` | the Holden engine photos do not show the seats; `Stellite 1914` is a Wolseley car | a sectioned exhaust valve with the Stellite face visible |

| rejected after looking | why |
|---|---|
| `Mu-metal assortment 1951.jpg` as the mu-metal face | a 679 px catalogue plate; kept as second view, the zero-gauss chamber is the face |
| `MeltSpinner.png` as the Metglas face | a diagram; kept as third view, the NRL spinning photo is the face |
| the OSU hydrophone as the Terfenol face | an analog, a tube over the side of a ship; kept second, the magnetostrictive transducer is the face as a related view |
| `Alloy and metal samples - Beryllium-Copper, Inconel...` | a row of grey discs |
| `Mumetal strip process from xi'an gangyan...` | a vendor's mill photo |
| `MagSchirm.jpg`, `Negra.JPG` | a transformer with wires, and white blocks |
| `7. 1979 Observing an early melt spinning process.jpg` | a man watching a window |
| `Memoria a Magnetostrizione auditronic L.M.S. Olivetti foto1.jpg` | a circuit board in a frame |
| `FEM2-018-500-3V-1 magnetostrictive transducers details 18.jpg` | a row of filters, abstract small |
| `Stellite 1914.JPG` | a yellow car in a museum |
| `FlameSpraying.jpg` | flame spraying, a different process |


## Restyle batch, 18 November 2026: wha, superalloy, maraging, galinstan, fields

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Tungsten heavy alloy, a counterweight in place or a penetrator | `tungsten counterweight`, `tungsten alloy penetrator`, `tungsten bucking bar`, `tungsten sinker`, `tungsten golf weight`, `Wolfram Schwermetall` | nothing; `WSM` is a radio station and an airline | an aileron balance weight or a sectioned APFSDS rod |
| Single-crystal superalloy, CMSX-4 named | `CMSX-4`, `turbine blade superalloy`, `directionally solidified blade` | only a micrograph and 1950s lab shots | a blade with the grain-etched single crystal visible |
| Maraging steel, a motor case or centrifuge rotor named | `maraging steel`, `rocket motor case`, `centrifuge rotor uranium`, `gas centrifuge rotor`, `Minuteman motor case`, `maraging steel bar`, `fencing blade maraging` | `maraging` is a town in Iran; the LPC 156-inch case photos do not name the steel; `Cyber WMD` is an art piece; the fencer stays | a Minuteman case section or a centrifuge rotor named as maraging |
| Galinstan, cooling or stretchable circuits | `liquid metal cooling`, `EGaIn`, `gallium liquid metal drop`, `liquid metal droplet` | breeder reactors, a graphics card standard and raindrops on a gate | a CPU with liquid-metal paste or a stretchable circuit |
| Field's metal itself | `Field's metal`, `Fields metal`, `bismuth indium tin`, `low melting alloy casting`, `Rose's metal`, `Cerrobend` | field gates and a rock festival; only Wood's metal is photographed | a Field's metal casting in a silicone mould |

| rejected after looking | why |
|---|---|
| `Wolfram evaporated crystals and 1cm3 cube.jpg` as the heavy alloy face | pure tungsten, not the alloy; kept as a related view, the Densimet weights are the face |
| `Collimator Tungsten 2-...jpg` | a calliper reading a grid, pure tungsten |
| `CFM56 High Pressure Turbine Blade.JPG` | a blade on a table, duplicates the plaque face |
| `CAST TURBINE BLADES - NARA - 17470242.jpg` | three blades on grey, unlabelled |
| `Catalog 26 0006140 ... LPC 156 Rocket Motor Case Entering Autoclave` | a 1964 case, steel unnamed; a static firing shows a rocket, not a material |
| `Fusable link sprinkler head.jpg` | a dim fitting on a ceiling |
| `Wood's alloy.JPG` | a second shot of the same melt as the face |


## Restyle batch, 18 November 2026: rhenium, albemet, ti64, al7075, magnesium

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Rhenium, a thermocouple, thruster or catalyst | `rhenium pellets`, `rhenium thermocouple`, `iridium rhenium thruster`, `molybdenite rhenium`, `rhenium filament mass spectrometer` | nothing; the element photos are a vial, a flake and a museum case | an apogee thruster or a W-Re thermocouple named as such |
| AlBeMet, anything named | `AlBeMet`, `beryllium aluminium alloy`, `beryllium optical bench`, `beryllium gyroscope`, `beryllium satellite structure` | `AlBeMet` returns the Met museum; only pure beryllium and the Webb mirrors exist | an AlBeMet housing or gimbal named as such |
| Ti-6Al-4V, a forging or a bolt | `titanium forging aircraft`, `titanium bolt aerospace`, `titanium 3D printed bracket`, `SR-71 titanium`, `titanium bicycle frame` | the F-15 bulkhead is a HAER tif; the bike frames are 3Al-2.5V tubing; the SR-71 is an aircraft | the F-15 bulkhead as a jpg, or a bare forging |
| 7075, a spar or a carabiner | `aluminium wing spar`, `climbing carabiner aluminium`, `AR-15 receiver forging`, `Zero fighter wing spar`, `aluminium billet CNC` | nothing named; the hang glider does not name its tubes | a carabiner or receiver named as 7075 |
| Magnesium, a wheel or a steering wheel | `magnesium alloy wheel`, `magnesium steering wheel`, `magnesium gearbox housing`, `Elektron magnesium` | the wheels are unnamed alloys, `Elektron` is a synthesiser, the Triumph photo is a car | a magnesium wheel or armature named as such |

| rejected after looking | why |
|---|---|
| `Mg alloy car engine blocks.jpg` as the magnesium face | a jumbled stack; kept as third view, the Nikon chassis is the face |
| `Yes, the James Webb Space Telescope Mirrors 'Can'` | mirror domes in canisters, less readable than the gilded hexagons |
| `Rhenium (Element - 75) 1.jpg`, `Rhenium metal.jpg`, the Baiyin museum bar | a vial, a flake, a museum case |
| `Sifco Industries - Cleveland.jpg` | a factory from across the road |
| `Titanium-frame-gravel-bicycle.jpg` | a bicycle, tubing alloy unstated |
| `Implant 5.jpg` | a dental implant render-like close-up; the cranial plate says more |
| `7075 AL FSP.jpg` | friction stir processing, 1066 px, a weld bead |
| `Wills Wing Talon 150` | a hang glider on a museum ceiling |
| `Inside of a Lenovo ThinkPad X220 magnesium alloy bottom case.jpg` | a good casting but a grey rectangle at card size |
| `Magnesium body of PENTAX K-1.JPG`, `Magnesium die casting machine.jpg` | a second camera chassis, and a machine hall |


## Restyle batch, 18 November 2026: damascus, hadfield, duplex, ss316l, hss

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Pattern welding in progress, a billet or a twist | `pattern welded billet forging`, `mokume damascus billet`, `damascus steel blade etched`, `wootz ingot` | nothing; Commons has finished knives and museum swords only | a smith's billet at welding heat or a wootz cake |
| Hadfield steel named as such | `manganese steel frog`, `Manganhartstahl`, `Herzstück Weiche Manganstahl`, `crusher hammer manganese` | only 1890s journal scans; the Nürnberg crossing nose is the nearest modern photo and does not name the steel | a foundry shot of a cast crossing or a dragline tooth labelled manganese |
| Duplex pipework or a tank interior | `duplex stainless pipe`, `offshore platform stainless piping`, `chemical tanker cargo tank stainless`, `stainless steel flange pipe spool`, `desalination plant pipes` | nothing; `desalination` returns a fort in Liwa | a duplex pipe spool or tank bulkhead named as such |
| 316L in a clean plant | `stainless steel sanitary fitting`, `pharmaceutical stainless vessel`, `stainless steel tri-clamp`, `dairy stainless piping`, `316 stainless marine fitting`, `sensitization weld decay` | nothing named; brewery tanks are 304 and unlabelled | a tri-clamp fitting or a pharma vessel named 316L |
| An HSS lathe bit or end mill | `HSS lathe tool`, `Drehmeißel HSS`, `HSS end mill`, `twist drill set HSS`, `reamer HSS`, `lathe tool bit grinding` | nothing; `tap and die set` returns the Mandelbrot set | a ground lathe tool bit or an end mill named HSS |

| rejected after looking | why |
|---|---|
| `Front and back of blades of hair-cutting shears made from Damascus steel.jpg` as the face | the pattern vanishes at card size; kept as second view, the Solicut blade is the face |
| `Wootz Steel Detail.jpg`, `South Indian Wootz Steel Sword.jpg` | a brown blur and two thin curves on pink at card size |
| `GE Lewis centrefire double barrel cartridge shotgun` | Damascus barrels, but shot from the muzzle; no pattern visible |
| `Neck knife aus Damaszener Stahl von Holger Müller.jpg` | 1000 px, dark, handle dominates |
| `Sacramento tram track frog 4036.JPG` as the hadfield face | a street crossing from across the road; dropped for the Nürnberg crossing nose |
| `Common railroad crossing.jpg`, `Münster, Speicherstadt, Gleise` | portrait and distant; the frog is a thin line |
| `Marion 7400 walking dragline excavator bucket` | a rusty monument, teeth not readable |
| `Pierces Railway Frog and Crossing.jpg` | an 1860s cast-iron advert, pre-Hadfield |
| `Chemical tanker Ternholm at Skarvikshamnen 2.jpg` as the duplex face | a ship at a quay; kept as third view, the Helix Bridge is the face |
| `Pitting corrosion on duplex stainless steel specimens.jpg` | four grey panels of pits, says nothing at card size |
| `Stainless Steel Reinforcing Bars VT` | rebar bundles, grade unstated |
| `Orbital Welding 316L Stainless Steel.jpg` on Commons | the same Flickr photograph the card already shows |
| `SEM photo of 316L Stainless Steel metal powder...` | already the metal-powder card's photograph; the structure check caught it |
| `HSS-E Bohrer.jpg` | GFDL only, and duplicates the drill face |
| `Wälzfräser und gefräste Verzahnung.JPG`, `Spline hobs.JPG` | good hobs, but coated and unlabelled; two extras are enough |
| `4X-HSS Micha.jpg` | an aircraft registration |


## Restyle batch, 18 November 2026: phosbronze, monel, hastelloy, zamak, sac305

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Phosphor bronze spring, contact strip or bushing | `phosphor bronze spring contact`, `phosphor bronze bearing bushing`, `phosphor bronze strip`, `phosphor bronze wire mesh`, `bronze bushing` | only 1900s catalogue scans; `bronze bushing` returns a butterfly | a relay spring or a coil of contact strip named as phosphor bronze |
| Monel in a seawater system | `Monel propeller shaft`, `Monel seawater pump`, `Monel wire` | nothing; the Monel photos are a logo, a letter opener, a nibbler and two buildings | a Monel pump shaft or valve trim named as such |
| Hastelloy in a plant | `Hastelloy reactor`, `nickel alloy chemical reactor`, `chlorine plant piping` | `Hastelloy` returns the Haynes motor museum; only the two ball valves and the ORNL exchangers exist | a scrubber lining or a C-276 reactor named as such |
| A zinc carburettor or a die-casting in the machine | `die cast zinc carburettor`, `zinc casting handle` | nothing named; the machine photo is a flow chart | a carburettor body or a zinc casting with its runner |
| SAC305 by name, a cross-section | `SAC305`, `bleifreies Lot`, `solder joint cross section`, `solder balls BGA` | nothing; the cross-section query returns Roman finger rings | a micrograph of a SAC joint or a BGA ball array |

| rejected after looking | why |
|---|---|
| `Phosphorbronzeguitarstring.jpg` as the face | a thin loop of wire on cloth, unreadable at card size; dropped |
| `Cavitation Propeller Damage.JPG` | a jet-ski propeller, alloy unstated |
| `Monel-valves--The-Alloy-Valve-Stockist.JPG` as the face | painted yellow, no metal visible; dropped |
| `Brynathyn6.JPG` | 1010 px and dim; the door handles do not read |
| `Woodrow Wilson House-Serving Kitchen.jpg` | a kitchen, the Monel sink is a grey corner |
| `Nibbling machine cutting 1-2 monel metal plate` | a 1049 px archive print, the plate invisible |
| `Válvula de bola en Hastelloy C276` | a second ball valve, same as the face |
| `Swing Check valves.JPG` | generic valves, alloy unstated |
| `Zink auto.jpg` as the zamak face | grey model on grey, tall crop; dropped for the key |
| `1990s small zinc die casting samples by Fishercast` | castings in a bag, blurred by the plastic |
| `Zinc die casting machine working process.jpg` | a flow chart, not a machine |
| `ZAMAK ingots.jpg`, `Zamak Haarforke.jpg`, `Saint-Claude Zamak Voltaire` | a stack of ingots, a hair fork on orange, a bust; the pour says more |
| `Dinky liners with zinc pest.jpg`, `Trix Lokomotive mit Zinkpest.jpg` | the pest is less legible than on the wheelset |
| `Valvo OC171 Whiskers dead.jpg`, `Tin Whiskers.jpg` | whiskers on a tinned can and a pot cover, both pre-date lead-free; the ESA micrograph is clearer |
| `Reflow oven.jpg`, `Soldering a 0805.jpg` | a machine hall and a pair of tweezers |
| `Late 20th century Multicore Ersin 5 core` | 60/40 tin-lead, the thing this card replaced |


## Restyle batch, 18 November 2026: tantalum, niobium, nbti, bismuth, inconel718

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Tantalum in a plant or a body | `tantalum crucible`, `tantalum implant`, `tantalum sputtering target` | nothing | a porous tantalum hip cup or a lined heat exchanger |
| A niobium coin | `niobium coin` | the Austrian 25 euro photos are 880 px | a larger scan of one |
| Nb-Ti filaments in section | `superconducting cable cross section`, `superconducting wire filaments`, `LHC dipole cable`, `MRI magnet coil` | the preform sections are 800 px; `MRI magnet coil` returns a fusion investor call | a micrograph of the filament array |
| Bismuth shot or solder | `bismuth shot`, `bismuth subsalicylate` | shot returns crystals; the medicine returns molecules and a 1957 advert | a cartridge of bismuth shot or a reel of tin-bismuth |
| Inconel 718 as a turbine disc or bolt | `turbine disc nickel alloy`, `RS-25 engine powerhead`, `Inconel exhaust`, `SpaceX Merlin engine` | the powerhead is a diagram, the exhaust a car, the Merlins are engines with people | a 718 disc forging or a named engine part |

| rejected after looking | why |
|---|---|
| the Flickr tantalum sample as the face | a grey square in a box beside a periodic tile; kept as third view, the capacitors are the face |
| `Tantal-P1100196c.jpg`, `Polymer Tantalum Capacitor Cross Section.jpg`, `Burnt tantalum capacitor` | 1024 px catalogue of shapes, a grey slab, and a board with a brown spot |
| the Flickr anodised rings as the niobium face | pink chainmail, pretty but it says jewellery; dropped for the cavity |
| `2024 Artsy Niobium Cavity`, `Superconducting Radio Frequency.JPG` | a red light trail, and a hall of racks |
| `Anodizing a niobium ring.jpg`, `Anodized niobium cube.jpg` | a bench with a power supply, and a cube that is a periodic tile |
| the Flickr LHC cable end as the Nb-Ti face | a brown tube on a flange; dropped for the CERN copper-versus-superconductor pair |
| `LHC NbTi superconducting wire.jpg` | the wires are a tangle behind a label |
| `ITER Central Solenoid CICC` | niobium-tin, not this card |
| `Bismuth crystals and 1cm3 cube.jpg`, `Bismuth Crystals.JPG`, `Bismuth crystal macro1.jpg` | more hopper crystals; the face already has one |
| `Bismuth slag from pepto bismol.jpg` | two brown lumps on a ruler |
| `Inconel 718.JPG` as the face | a grey bar with pen marks; kept as third view, the printed engine is the face |
| `3-D Printed Rocket Part Blazes to Life.jpg`, `Marshall engineers installed the injector...` | a flame in a yard, and a test stand; the alloy is not named |
| `Cladding-Auftragschweißung in einem Rohr mit Inconel 625.jpg` | 625, the other Inconel |
| `Orbex Prime rocket engine.jpg` | a bell in a purple light show |


## Restyle batch, 18 November 2026: ndfeb, alnico, corten, cupronickel, babbitt

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| A neodymium motor rotor | `permanent magnet rotor`, `magnet motor rotor`, `sintered neodymium magnets` | the rotors are wound brushed ones; the wind generator is a nacelle on a crane | a cut-open EV or scooter hub motor with the magnets visible |
| Alnico in a pickup, close | `guitar pickup alnico`, `cast alnico` | nothing beyond the 1956 catalogue photos | a bare pickup bobbin with the slugs out |
| Rust staining under weathering steel | `corten rust stain concrete`, `rust streaks weathering steel` | sphalerite and a shipyard | a stained plinth under a Corten sculpture |
| Cupronickel tube or hull | `condenser tubes`, `cupronickel hull`, `copper-nickel seawater`, `desalination plant tubes`, `heat exchanger tube bundle` | the Anadrian condenser is brass; the bundles are unnamed alloys; `desalination` returns ORNL | a named CuNi condenser retube or the Copper Mariner |
| Babbitt being poured or scraped | `pouring babbitt`, `bearing scraping`, `babbitt microstructure`, `Weißmetall Lager`, `Babbitt-Lager` | the name returns a Minnesota town and a politician | a shop photo of a shell being tinned and poured, or a micrograph of the cuboids |

| rejected after looking | why |
|---|---|
| the Flickr magnet-sphere lattice as the neodymium face | a desk toy; dropped for the plated block in a hand |
| `Neodymium magnet 1140509.jpg`, `Neodym Magnete.jpg` | foil in a petri dish, and two grey discs by a match |
| `Ironpowder on magnet.JPG` | a grey fuzz, the magnet invisible |
| `One Energy ... direct-drive generator.jpg` | a nacelle on a crane, no magnet in sight |
| `CowMagnet.jpg`, `Horseshoe magnet metal shavings.jpg` | a pill on a desk, and a painted toy horseshoe |
| `Alnico horseshoe magnet assortment 1956.jpg` | the second catalogue photo, with a caption bleeding into the frame; the first is enough |
| `COR-TEN-Steel detail 1.JPG`, the Essen museum, the Bad Mergentheim sheep, the Ketelmeerdijk sculptures | a close grain with no scale, a brown box, black silhouettes on a lawn, and shapes by a road; the Angel and the bridge say more |
| the Flickr Corten door | fine at close range but flat as a face; kept as third view |
| `Crack in CuNi metal due to silver brazing.jpg` | a bright scratch on black, unreadable small |
| `Surface condenser Anadrian MMM n02.jpg` | brass tubes by its own description |
| `Tube bundle of a shell & tube heat exchanger` | alloy unnamed |
| `USS Annapolis (PG-10) Condenser Tube Sheets` | an 1890s drawing, pale and 12,000 px |
| `Gleitlager Kraftwerksdecke.JPG` | a concrete slide bearing, no babbitt |
| the Miba thrust bearing as the babbitt face | a product render, but the pads read as a bearing at card size; kept |


## Restyle batch, 18 November 2026: zircaloy, hafnium, hea, nb3sn, wroughtiron

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| A bare Zircaloy tube or sponge | `zirconium alloy tube`, `zirconium sponge`, `nuclear fuel rod cladding` | nothing but a Thai research reactor pool | a cladding tube on a bench, or Kroll sponge |
| A hafnium control rod or cutter tip | `control rod`, `control rod drive`, `plasma cutter electrode` | drive mechanisms and fly-rods; the electrode returns nothing | a hafnium-tipped electrode close up |
| A high-entropy alloy part | `high entropy alloy`, `Cantor alloy`, `CrMnFeCoNi`, `Hochentropielegierung` | copper Buddhas, salts in DMSO and two journal graphics; there is no part yet | anything made of it beyond a button |
| A niobium-tin strand in section | `Nb3Sn strand`, `niobium tin`, `Nb3Sn` | crystal-structure renders and a phase diagram | a micrograph of the reacted filaments |
| Wrought iron torn along the grain | `wrought iron fracture fibrous`, `wrought iron microstructure` | nothing but the Turtleville bridge survey | a broken bar showing the woody fracture |

| rejected after looking | why |
|---|---|
| the NRC fuel-rod diagram as the Zircaloy face | a cartoon; dropped for the real assembly |
| `Zircaloy-4.tif` | a grey micrograph with nothing to read; the hydride TEM says more |
| `Nuclear-Fuel.jpg`, `Dukovany 2012 03.jpg` | a rack of assemblies behind a technician, and a control room |
| `Nuclear fuel pellets at the Greifswald...` | pellets in a plastic dome, not the cladding |
| `HD.6B.096` | a lathe, by its own caption tungsten |
| `Hafnium (Element - 72) 1.jpg`, `Hafnium (72 Hf).jpg` | a sample vial by a periodic tile |
| `TREAT Control Rod Drive Mechanisms.JPG` | a hall of yellow steel, no hafnium in sight |
| `My miniature moon.jpg` | a white disc; the coating is invisible at any size |
| the old AlCoCrFeNi micrograph as the face | kept as second view with an honest caption; the arc-melted button is the face |
| `Close-up of a compact sintered joint`, DOE `394 059 002` | a second cable end, same as the face |
| `ITER Central Solenoid (41767826062).jpg`, `Toroidal field conductor` | a wrapped conductor and a 700 px coil |
| `Superconducting magnet cutaway.jpg` | a cutaway with no alloy named |
| the Delhi pillar | a dark post between arches at card size; it is in the text instead |
| `Anchor at Ravenglass`, `Post-Medieval Iron Chain Link` | a rusty anchor on mud, and three small links on a scale |
| the puddling-furnace woodcuts | 1,300 px engravings; the metallography shows the fibre better |


## Restyle batch, 19 November 2026: ytzp, cbn, b4c, sic, zerodur

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| A zirconia knife or scissors | `zirconia knife`, `zirconia scissors`, `zirconia ceramic`, `zirconia bearing` | nothing but a dental glossary graphic | a white ceramic blade on a board |
| cBN in the cut | `hard turning`, `CBN grinding wheel` (beyond the one catalogue shot), `kubisches Bornitrid` | the lathes are Iranian workshops, the rest are lattice renders | a hard-turned bearing race with its insert |
| Boron carbide armour named as such | `boron carbide armor`, `sandblasting nozzle boron carbide` | nothing; the SAPI plates do not name the ceramic | a plate cross-section or a nozzle |
| A silicon carbide heater or Acheson furnace | `silicon carbide heating element`, `Acheson furnace`, `silicon carbide sandpaper` | a portrait of Acheson and 1914 papers | a glowing SiC rod, or the furnace itself |
| A Zerodur gyro or lithography stage | `ring laser gyroscope` | the gyros are sealed boxes at an airshow | an opened ring-laser block |

| rejected after looking | why |
|---|---|
| `Single Unit Zirconia Anterior Dental Crown.jpg`, `Zirconia bridge.jpg` | a tooth on a plinth, and a mouth |
| `New oxygen sensor (4145545072).jpg` | the greasy underside of a car; the sensor is a nut |
| `SEM zirconia surface treatments 100x Lee2026.png` | a four-panel figure, no texture at card size |
| the lattice render as the cBN face | a diagram; kept as third view with an honest caption, the tipped insert is the face |
| `Cubic Boron Nitride 20251211.jpg` | the same lattice drawn again |
| `Ranger Body Armor - SAPI plates.jpg` | a title bar burned into the frame; the plain pair is used instead |
| `Boron carbide in passing ultraviolet light.jpg`, `Plastic with boron carbide.jpg` | blue mottle, and a grey sheet |
| `Rounded Silicon Carbide Ingot (cropped).jpg`, `Silicon carbide - mesh 60.jpg` | a grey puck, and a pile of grit |
| `Silicon Carbide.jpg` | a second iridescent lump, the face already is one |
| `AMG Carbon Ceramic brake..JPG`, `Carbon ceramic brake surface detail` | a grey disc with holes, and a close-up of the same; the mirror and the wafer say more |
| `Temp-3000 SiC armor plates.jpg` | a trade-show table of camouflage |
| the Deutsche Carborundum whetstone | a red box in a field |
| `Schott Ceran glass-ceramic cooktop.jpg` | already the face of the ceran card |
| `The last ELT M1 segment blanks leaving SCHOTT`, `Arrival of ELT secondary at SCHOTT` | a container on a lorry, twice |


## Restyle batch, 19 November 2026: macor, aln, cordierite, alon, pyro

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Macor as itself | `Macor`, `machinable glass ceramic`, `glass ceramic machined`, `mica glass ceramic`, `UHV insulator`, `Keramik Isolator Vakuum`, `vacuum feedthrough ceramic` | hamburgers, MacArthur, beads; nothing of the white block or a machined part | a photo of a Macor part on a mill; the card keeps its feedthrough and gets no extra views |
| Aluminium nitride as a tile or substrate | `aluminum nitride substrate`, `DBC substrate`, `ceramic heater aluminum nitride`, `Shapal`, `Leistungsmodul`, `power module ceramic substrate` | an MOCVD film, auroras and a Sony power supply; the opened IGBT module is the nearest | a bare AlN substrate with its copper, or a heater chuck |
| A catalytic converter cut in half | `catalytic converter cut`, `Katalysator aufgeschnitten`, `catalytic converter cutaway`, `monolith catalyst` | a Renault and some granite; the Oak Ridge end view is used instead | a sectioned converter showing brick, mat and can |
| ALON by name | `aluminum oxynitride`, `ALON transparent`, `Aluminiumoxynitrid`, `MgAl2O4 ceramic`, `optical ceramic window`, `spinel ceramic` | Israeli villages and a signature; Commons has no ALON panel | a Surmet panel or a ballistic test of one |
| Pyrolytic graphite at work | `graphite heat spreader`, `pyrolytic graphite crucible`, `pyrolytic graphite sheet`, `mechanical heart valve pyrolytic carbon` | nothing | a laptop heat spreader or a carbon valve leaflet |

| rejected after looking | why |
|---|---|
| `Self-etched nitride MOCVD film.jpg` | a rainbow blob in a dish |
| `MITSUBISHI IGBT module.jpg`, `IGBT 2441.JPG` | a closed black box, and a module where the ceramic is hidden under the bond wires; the Powerex one shows the tiles |
| the Flickr cordierite mineral as the face | a brown rock; kept as third view, the honeycomb is the face |
| `Catalytic converter 20230510.jpg` | a rusty can on the ground |
| `Diesel particulate filter 01.JPG`, `FAP-Filter Peugeot.jpg`, `DPF vor Reinigung.JPG` | a steel can under a car, another, and a sintered-metal filter, not cordierite |
| `Pizza on stone.jpg`, `Baking stone.jpg` | a pizza, and an oven; the stone is invisible in both |
| `23 0066973 Convair ... ceramic honeycomb` | an engineering drawing |
| `Cordierite volcanic.jpg` | a thin-section in polarised light, pretty and unreadable |
| `Transparent optical ceramic - Transparent sample - CILAS.jpg` | a second disc on a logo; the face already is one |
| `IDET2007 bulletproof glass armor.jpg` | laminated glass after a shoot, which is the competitor, not the card |
| `Diamagnetism levitation simple experiment.jpg`, `Pyrolytic Carbon Levitation (4647754841).jpg` | a pencil lead, and three magnet cubes with no graphite in frame |
| `NeutronMonochromatorBNL.jpg` | a tall rack of labelled crystals, 858 px wide |
| `Hand holding up a piece of Yttralox outdoors.jpg` | fetched, then dropped: at card size it is a thumb and some sky, the sample is invisible |
| the NASA pyrolytic graphite collector | fetched, then dropped: copper rings and wires, the graphite is not in the frame |


## Restyle batch, 19 November 2026: alumina, sapphire, fusedsilica, gorilla, borosilicate

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Alumina as a crucible or furnace tube | `alumina crucible`, `alumina tube furnace`, `Aluminiumoxid Keramik` | 1920 metallurgy plates and a pot oven | a white crucible with a melt in it |
| A sapphire wafer with LEDs on it | `LED sapphire substrate`, `sapphire wafer` | a schematic, a TIFF, and a JSC carrier of three tiny squares | a patterned 6-inch sapphire wafer |
| A fibre drawing tower | `optical fibre drawing tower` | nothing | the tower at Corning or Prysmian |
| Gorilla Glass being made or tested | `chemically strengthened glass`, `ion exchange glass`, `Displayglas` | lunar glass beads, Amberlite resin brochures and a painting | a salt-bath line or a ball-drop test |
| Borosilicate being cast or blown | `borosilicate casting`, `glassblowing borosilicate` | nothing | a lampworker at a bench |

| rejected after looking | why |
|---|---|
| the Flickr fused silica EPROM window as the face | the Flickr URL now serves a photograph of lightning over a town; dropped, the Gravity Probe B rotor is the face |
| `EPROM fused silica window - UV-vis spectrum.jpg` | a spectrum on a screen, not the window |
| `Ceramic substrate used for repeater in coaxial transmissions.jpg` | alumina, but buried under red annotation arrows |
| `IBM 51F1784ESD ceramic square substrate.jpg` | a grid of pads; it could be any ceramic |
| `Hip prosthesis.jpg`, `Hip replacement Image 3684-PH.jpg` | the ball may be alumina but nothing says so; and an X-ray |
| the Wendelstein 7-X insulators | porcelain or alumina, unstated, and a busy cage |
| `35kg sapphire crystal growth by the Kyropoulos method.jpg`, `Sapphire crystal growth by the Kyropoulos method.jpg` | the same glassy lump as the face |
| `Curved Striations in Synthetic Color-Change Sapphire.jpg` | a purple kaleidoscope |
| `3 Sapphire ingots window Crystaltechno.jpg`, `NbN on sapphire.jpg` | two slabs on a tablecloth, and a blue-grey disc in a box |
| `Jsc2021e066969.jpg` | three thumbnail-sized squares on a plate |
| the Bulova with a sapphire crystal | a watch; the crystal is invisible by design |
| `Zlewki, tygle, kolby i talerzyk z kwarcu.JPG` | quartz labware, indistinguishable from borosilicate at card size |
| `Czochralski method used crucible wall`, `Lens in DESI corrector`, `Fused silica phosphorescence` | a brown stain, a lens inside a frame, and a blue streak |
| `CES 2012 - Corning Gorilla Glass`, `Samsung Galaxy S2 shattered screen.jpg`, `Smartphone cracked screen.jpg` | a trade-show crowd, and two more broken phones; one is enough |
| `S73-15171.jpg` | lunar glass beads, no relation |
| `Hale telescope mirror during grinding 1945.jpg`, `Pyrex (33207525465).jpg`, `VibratingGlassBeam.jpg`, the Duran bottle | 757 px, a cup on a white table, a capillary wobbling, and a bottle; the Palomar disc and the two Pyrex cups say more |


## Restyle batch, 19 November 2026: si3n4, hbn, pzt, batio3, wc

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Hexagonal boron nitride as a photograph | `hexagonal boron nitride`, `boron nitride crucible`, `boron nitride powder`, `boron nitride spray`, `boron nitride nozzle`, `boron nitride plate`, `boron nitride ceramic`, `BN ceramic`, `Bornitrid`, `white graphite` | lattice renders, nanotube diagrams, a Casio watch and a Mazda; the NARA HIP plate is a grey smear | a white hot-pressed crucible or a can of the spray; the card keeps its render and gets no extra views |
| A silicon nitride turbo rotor or glow plug | `silicon nitride turbocharger`, `ceramic glow plug`, `silicon nitride rotor`, `silicon nitride microstructure` | the NGK rotor is 759 px; nothing else | a larger rotor photo, or an etched micrograph of the needles |
| A PZT stack or disc as itself | `piezo stack actuator`, `Piezokeramik`, `piezoelectric disc` | nothing | a multilayer stack actuator |
| Cemented carbide microstructure or a rock bit | `cemented carbide microstructure`, `rock drill bit carbide`, `carbide end mill` | nothing but an 1899 forestry journal | an etched WC-Co micrograph or a tricone bit |

| rejected after looking | why |
|---|---|
| `Silicon nitride turborotor.jpg` | 759 px; the valve is the same maker and readable |
| `U.S. Department of Energy - Science - 390 013 002` | a scientist at a beamline, no ceramic in view |
| `Maxim-2-HydrophonPZT50x725und10x200.JPG` | a brown shard on a bench |
| `PMN and PZT (12349671403).jpg` | two scattering plots |
| `Piezo igniter.jpg`, `Ideenwelt EM2862 - Piezoelectric buzzer`, `EFR-0SB40K23 opened.jpg` | a black block, a buzzer in its case, a 1970s transducer with a yellow blob; the bare disc and the opened probe say more |
| `A medical ultrasound linear array probe...` | a gloved hand and a probe; the ceramic is inside |
| `VL14 - piezoelectric transducers.jpg`, `Piezoelectric bimorph bending elements.jpg` | two lugs on a yellow block, and five green strips |
| `BaTiO3 ferro domains.jpg` | 980 px of grey squares |
| `Ceramic disc capacitor cross section.jpg`, `MLCC cross section detail.jpg` | a disc in section, and the termination of the same chip; the full section shows the layers |
| `MFrey PTC Resistor normal.JPG` | a multimeter, two glasses and a wire |
| `Tungsten carbide.jpg` | 1200 by 500, a strip of bits beside two rods |
| `Carbide-tipped jaws.JPG`, `2023 Noże z węglika wolframu.jpg`, `BurrCarbideCutters.jpg`, `Carbide Wolfram.jpg` | caliper jaws, two grey knives, five burrs at 969 px, and two grey tips stamped AS |
| `Spherical Tungster Carbide under Scanning Electron Microscope.png` | a thermal-spray sphere, not cemented carbide |


## Restyle batch, 19 November 2026: uhtc, li900, tbc, cvddiamond, quartzxtal

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| A UHTC edge after an arc-jet run | `arc jet test`, `sharp leading edge hypersonic`, `zirconium diboride`, `UHTC` | Orion Avcoat, Shuttle tiles, a Recife street and a boride render | a post-test strake from Ames or Sandia |
| A tile glowing in a hand | `shuttle tile glowing`, `Hitzeschutzkacheln`, `LI-900` | nothing; the famous photo is not on Commons | the NASA Ames photo of the glowing tile, if it is ever uploaded |
| A coated blade in section | `turbine blade cross section`, `EB-PVD`, `yttria stabilized zirconia coating` | nothing | a micrograph of columns on a bond coat |
| A diamond window or heat spreader | `diamond window`, `synthetic diamond plate`, `diamond heat spreader`, `microwave plasma CVD` | pub windows, an amplifier and nanotubes | a gyrotron window or a diamond-on-copper submount |
| A watch fork cut open | `quartz tuning fork`, `quartz crystal HC-49`, `quartz crystal microbalance` | an AFM tip, a 714 px can and schematics | a macro of a fork out of its can, larger than 640 px |

| rejected after looking | why |
|---|---|
| `Tantalum carbide TaC.JPG` | a brown pile of powder |
| `Black Engine (14050971320).jpg` | a trade-show stand with a screen |
| `U.S. Department of Energy - Science - 210 005 001` | a scientist at an electron microscope |
| `Shuttle Tile 1.jpg`, `Silica Space Shuttle ... tile, c 1980` | the same black tile as the face, and a white quilt |
| `Space Shuttle Tile ... Ames Arc Jet (ARC-1974-AC74-2002).jpg` | dark machinery, the tile invisible |
| `STS-132 Atlantis putty repair HRSI.jpg`, `KSC-06pd0022` | a technician's back, and a man with a tile on a table |
| `2013-09-18 TrentTurbineBlades.jpg` | already the second view of the superalloy card |
| `CORROSION RESISTANT CERAMIC THERMAL BARRIER COATING - NARA - 17472301.jpg` | a 1979 diagram |
| `Plasma sprayed dual layer coating optical microscopy.jpg` | a coating in section, alloy and ceramic unnamed |
| `Plasma spraying process.jpg`, `Robotic plasma spray setup 01.jpg`, the NARA film-cooled vane | copper on aluminium, a robot in the dark, and a vane in a fixture |
| `DiamondAnvilCell 001.jpg`, `Irradiated spot of diamond...` | an X-ray diffraction ring pattern, and a fluorescence blob |
| `WD Lab Grown Diamonds.jpg` | 1080 px of three stones; the Syntechno set is larger |
| `Synthetic quartz crystal in Museum für Naturkunde Berlin 0846.jpg`, `Synthetic quartz hydrothermal processing Créer le cristal.jpg` | a bar behind museum glass with a label, and three crystals on a shelf; the bare bar is used |
| `ITT Crystal resonator opened.jpg` | a speck on a yellow square |
| `Quartz Watch Mechanism Closeup.jpg`, `RAKON STP2734B LF OCXO 10MHZ internal view.jpg`, `Quartz Crystal (5940516603).jpg` | a battery and gears, a green board, and a gloved hand with discs |


## Restyle batch, 19 November 2026: yag, sodalime, leadcrystal, ceran, chalcogenide

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| A YAG boule or a laser at work | `laser crystal boule`, `Czochralski crystal growth`, `Nd:YAG laser`, `Festkörperlaser` | silicon boules, optical benches and a 640 px Powerlite | a YAG boule out of the puller, or a laser cutting steel |
| A float line or a bottle machine | `float glass line`, `bottle forming machine`, `glass gob`, `glass furnace` | parade floats, reverse-vending receipts, a 800 px gob and Agricola woodcuts | the tin bath, or an IS machine |
| Lead crystal being cut | `glass cutting wheel`, `Waterford crystal`, `crystal chandelier` | a 640 px Waterford tour photo and chandeliers in churches | a cutter at the wheel, larger than 640 px |
| A stove window in glass-ceramic | `wood stove glass`, `Robax` | diagrams of flueless stoves, and a muscle relaxant | a stove with its window named as glass-ceramic |
| Chalcogenide glass itself | `chalcogenide glass`, `Chalkogenidglas`, `germanium lens infrared`, `thermal camera lens`, `phase change memory` | nothing; a space station, power stations and Algerian salt lakes | a moulded chalcogenide lens blank or a boule of As2S3 |

| rejected after looking | why |
|---|---|
| `Nd YAG Laser Rod.JPG`, `Laser rods 02.jpg` | a second pale rod, and the smaller copy of the four-rod photo |
| `Nd-YAG laser.JPG`, `Nd laser VisNatural.jpg` | a lab in the dark, and an optical bench; the crystal is a speck |
| `White LED.png` | already the face of the Ce:YAG card |
| `Soda-lime window, not by float glass process.jpg` | a window frame on a wall |
| `Glass production ... Fortepan 50405.jpg` | a dark 1930s glassworks, handsome and unreadable small |
| `Double gob under the feeder.jpg` | 800 px, the gob a red smear |
| `2023 Unterköblitz Flachglas Wernberg 01.jpg`, `Glass bottles 01.jpg` | an aerial of a factory roof, and a heap of dirty bottles |
| `Waterford Crystal engraved glass.JPG`, `Old Fashioned Glass.jpg` | an engraved bird, and a rocks glass that may not be lead |
| `Hanging cut-glass crystal pendants...`, `Crystal Chandelier Garden (Unsplash).jpg` | pendants on strings, and a chandelier in a garden, soft focus |
| `Cooktop Ceran IR.JPG`, `SCHOTT Ceran Kochfeld.jpg`, `Ceran 1971 Domotechnika.jpg` | a thermogram, a second product shot, and a 1971 press photo of a woman at a hob |
| `Thermal imaging camera side.jpg` | the MSA camera is in a dark stairwell |
| `Flir E8-Thermal imaging camera-Thermographic camera-01ASD.jpg` | fetched, then dropped: a grey handset on a dark counter, nothing reads at card size |
| `Thermal and visual image showing 29 degree C...` | the picture a thermal camera takes, not the glass |


## Restyle batch, 19 November 2026: zblan, porcelain, steatite, mullite, tib2

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| ZBLAN fibre or preform | `ZBLAN fiber`, `fluoride fiber`, `fiber optic drawing microgravity`, `Fluoridglas` | a Russian lab bench in green light, and nothing else | a ZBLAN preform or a spool of the fibre |
| A porcelain bushing on a transformer | `bushing transformer`, `substation insulator` | a 1974 NARA print of three bushings on a floor, and substations where the porcelain is a speck | a bushing close up |
| Steatite as an electrical part | `steatite insulator`, `terminal block ceramic`, `ceramic terminal block`, `heating element ceramic former`, `Lüsterklemme Keramik`, `Steatitkeramik` | PlayStations and a strap mount; Commons has no toaster former or terminal block | a white steatite terminal block or a heater former |
| Mullite as a made product | `mullite crystals`, `kiln shelf props`, `porcelain microstructure mullite` | nothing | a mullite needle micrograph |
| Titanium diboride as a part | `titanium diboride`, `TiB2 cathode`, `aluminium smelter cathode`, `evaporation boat`, `Hall-Heroult cell`, `Aluminiumhütte Elektrolyse` | a magnesium diboride render, Tunisian salt flats and cell diagrams | a TiB2 cathode block or an evaporation boat |

| rejected after looking | why |
|---|---|
| `Si ZBLAN comparison.jpg` | an attenuation plot |
| the Er ZBLAN laser bench photos | an optical table in green light, the fibre a thread |
| `Erbium-doped fiber with green light.jpg` | silica fibre, not fluoride |
| the Flickr-style strain insulator as the porcelain face | a grey egg on a wire, 874 px; dropped for the 20 kV pin insulator |
| `Porcelain-insulator.jpg`, `Insulator on an overhead powerline.jpg` | a fence insulator in grass, and a glass one |
| `3 PORC TRANSFORMER BUSHINGS - NARA - 17423208.jpg` | three dark bushings on a floor with a label |
| `Boxes of Suspension Insulators`, `Electric insulators on top of a transformer (2).JPG` | crates in a field, and a row of bushings against sky, readable but the strings say more |
| `Steatit-Magnesia AG 1932.jpg` | a share certificate |
| the Kenyan soapstone carver, the Anatolian figurine, the Nishapur lamp | hands with a pink box, a museum torso, and a lamp; the raw rock and the kiln say more |
| `Steatite Chip Pressing (Model 61 Potentiometer)` | a dark press, nothing readable |
| `Soapstone talc.JPG` | a single grey lump |
| `Kiln furniture from front view (After Glost firing).jpg`, `Firing kiln furniture di kilang Claytan.jpg` | the same racks as the face |
| `Refractory bricks lining.jpg`, `Torpedo car refractory bricks.JPG` | already the insulating-firebrick face, and a dark tunnel |
| `TiB2.png` | a 1125 px lattice render |
| `Saint-Jean et son usine en 2018.jpg` | an aerial of a valley; the old smelter hall is kept as the second view |


## Restyle batch, 19 November 2026: isographite, glassycarbon, emax, zta, mnznferrite

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| A machined isostatic graphite block or electrode | `isostatic graphite`, `graphite electrode EDM`, `graphite block machined`, `machined graphite`, `sinker EDM electrode`, `graphite heating element`, `continuous casting die graphite`, `Graphit Tiegel` | nothing: reactor blocks from 1951, felt electrodes and curtain rods | a milled graphite electrode on the bench |
| Glassy carbon in use | `glassy carbon electrode`, `glassy carbon crucible` | the RDE disc from the HEA batch and an Argonne 3D-printed cell | a polished electrode tip or a crucible |
| Lithium disilicate as the blue block | `lithium disilicate`, `e.max`, `Lithiumdisilikat`, `dental crown milling`, `CAD/CAM dentistry` | one 873 px in-situ photo, Max Giesinger, and army dentists at a screen | the blue block in the mill, or before-and-after firing |
| ZTA named as such | `zirconia toughened alumina`, `Biolox`, `ceramic femoral head`, `alumina ceramic ball hip`, `Hüftprothese Keramik` | nothing by name; the ball in `Hip prosthesis.jpg` is ceramic but unlabelled, used with an honest caption | a Biolox delta head photographed as such |
| A ferrite core in a charger | `switching power supply transformer`, `pot core ferrite` | boards where the core is a black lump among many | an opened phone charger with the transformer pulled |

| rejected after looking | why |
|---|---|
| `Small hole drilling EDM machines.jpg` | the electrode is brass |
| `Metal crucible.jpg`, `Aluminium melting crucible casting process.jpg` | a glowing ladle and a melt; the crucible material is not the point |
| `Gas flow controlled ionization chamber.jpg`, DOE `362 047 001` | an exploded drawing, and a plastic cell with syringes |
| `Inlay krone lithium-disilikat situ.jpg` | 873 px of molar |
| `CEREC-kronprep.jpg` | the same screen one step earlier |
| `Керамические Виниры.png` | a second before-and-after, watermarked |
| the hip X-ray as the ZTA face | readable but grey; moved to second view, the stem and ball are the face |
| `Coil with ferrite core from dimmer.jpg`, `Ferrite toroid.jpg`, `Ferrite cores different sizes.jpg` | a wound toroid, a bare toroid, more toroids; the face already is five |
| `Ferrite clamp-on.jpg`, `A collection of Snap-On - Clamp-on ferrite beads.jpg` | a clamp on a red wire, and three split cores; the USB lump says the same |
| `Forward Converter ATX PC Power Supply IMG 1092.jpg`, `Universum UR 1886 ... Ferrite rod antenna` | a crowded board, and a rod taped into a tuner |
| `Ferrite-R-Core (7).jpg` | five black cylinders, unreadable as anything |


## Restyle batch, 19 November 2026: azs, ifb, sialon, beo, uraniumglass

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| A fused-cast AZS block | `fused cast refractory`, `AZS`, `zirconia refractory block`, `glass furnace rebuild`, `Glasschmelzwanne` | Polish volleyball, Siemens diagrams of 1892 and a Dortmund colliery | a block on a pallet at a furnace rebuild |
| An insulating firebrick by name | `insulating firebrick`, `lightweight refractory brick`, `Schamottestein`, `forge firebrick` | nothing; every hit is dense brick | a white K23 brick with a saw |
| Sialon at work | `thermocouple sheath`, `welding nozzle ceramic`, `riser tube aluminium`, `cutting insert ceramic`, `Schweißdüse Keramik` | a gas-valve thermocouple fitting, nothing else | a sheath in an aluminium furnace or a nozzle on a MIG gun |
| Beryllia in a klystron or laser | `klystron`, `magnetron beryllia`, `laser tube beryllia`, `beryllium oxide insulator` | a glass reflex klystron with no ceramic visible | a beryllia laser bore or klystron window |
| Uranium glass being made | `Annagrün`, `uranium glass marbles` | nothing | a Riedel piece photographed as such |

| rejected after looking | why |
|---|---|
| the Lemington cone as the AZS face | a brick chimney in a field; kept as second view, the furnace interior is the face |
| `Tank Furnace - DPLA` | a patent drawing |
| `Modern silica or refractory clay waste` | two green lumps on a scale |
| `Fire brick (AM 703842-1).jpg` | a black fireplace tile |
| `Gladstone glost bottle kiln interior 3821.JPG`, `Factory interiors 002 2005 10 13.jpg` | a bottle oven's firemouths, and a row of electric kilns from outside |
| `ASiAlON.jpg` | the same parts as the face, rearranged |
| `Thermocouple connection.JPG` | a brass fitting, the sheath is steel |
| `BeO.jpg`, `Оксид бериллия 99,9 %.jpg` | a green tube that is a crucible of something else, and a bottle with a pinch of powder |
| `K41 Klystron reflective vacuum tube 01.jpg` | a glass tube, no beryllia in view |
| `Uranium glass.jpg`, `Luminescence of various kinds of uranium glass.JPG`, `Uranium Glass Collection.jpg` | more green glow, the face already glows |
| `Uranovy Kvet v Dennim Svetle.jpg`, `Uranovy Kvet ve Tme po Expozici.jpg` | a glass flower, pretty and shapeless small |
| `Uranium-glass-necklace.jpg`, `AW U glass bowl on fiestaware plate.jpg` | beads on black, and a cat on an orange plate |


## Restyle batch, 19 November 2026: dichroic, photochromic, bonechina, enamel, tincoat

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Dichroic art glass or a pendant | `dichroic glass pendant`, `dichroic glass art`, `dichroitisches Glas` | Roman cage cups and a laser's innards; no fused art glass at all | a kiln-formed dichroic piece photographed on black |
| A half-darkened photochromic glass lens | `photochromic glass darkened`, `photogrey`, `phototrope Brille`, `Transitions lenses` | the only before-and-after pairs are plastic cycling lenses, used as related | a glass lens with a card half over it in the sun |
| Bone china translucency | `bone china translucent`, `bone china light through`, `teacup translucent`, `Stoke bone china factory` | an 1894 handbook plate, chicken with chillies and a bulldog | a cup held to a window with a hand behind it |
| Enamelled steel being fired | `enamelling kiln`, `enameling furnace`, `Emaille Topf`, `enamel steel panel` | a pottery muffle kiln for on-glaze colours, 1912 book plates, an Armco house | a sign coming out of the furnace |
| A gold TiN drill bit by name | `TiN coated drill`, `titanium nitride drill`, `Bohrer Titannitrid`, `gold coloured drill bit`, `TiN coated tap`, `coated milling cutter` | hand drills from Wuppertal and sawmill catalogues; `Drill tip spur.jpg` is 774 px | a coated twist drill on a white sheet |

| rejected after looking | why |
|---|---|
| the Petit Palais Roman goblet as the dichroic face | a grey stone head at card size, no colour anywhere; dropped, the Lycurgus Cup covers the ancient kind |
| `Dichroic color wheel 75mm ... .webp` set | webp, which the fetch does not handle; the Acer wheel says the same |
| `DichroicMirrors.JPG`, `Dichroicmirror.JPG` | round filters in a row, and a small blue lens on a mount |
| `Optical photochromic lenses.jpg`, `PhotochromicLens.jpg` | spectacles half in shadow, which is not darkening; and 918 px |
| `Teacup, Wedgwood Mariposa`, `Royal Stuart ... plate reverse` | a second cup and saucer, and a backstamp |
| `Enamel sign ... Sepulkralkultur, Kassel 01`, `Enamel station sign, relocated` | a German text sign and WHARRAM in red; the roundel and the chipped signs say more |
| `Le Creuset Enamel Cast Iron Cookware.jpg`, `Enamel mug.jpg` | pans on a drying rack, and a mug that reads as any white mug |
| `Gladstone Enamel Kiln 3861.JPG` | a pottery muffle kiln full of plates, not steel enamelling |
| `Bathtub refinishing service with chips.jpg` | a grey before-and-after of a bath |
| `TiN-SS.jpg`, `TiN coating.jpg` | a gold micrograph and a surface profile; the powder makes the point better |
| `AlCrTiN-CoatedHob`, `ArcSource SablevType.jpg` | a grey hob, and a line drawing |


## Restyle batch, 19 November 2026: cc, cmc, cf, nextel, syntactic

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| A glowing carbon brake or a rocket throat | `carbon brake glowing`, `Formula One brake disc glowing`, `carbon carbon nozzle`, `rocket nozzle carbon`, `Kohlenstoff Bremsscheibe` | nothing; NARA fuel nozzles with soot on them | a night shot of a racing brake, or a throat insert on a bench |
| A CMC shroud or liner in an engine | `CMC turbine shroud`, `LEAP engine shroud`, `GE9X`, `CMC combustor liner`, `ceramic composite turbine`, `Keramikmatrix Verbundwerkstoff` | 777X roll-outs and a Rafale; the GE parts are not on Commons | a LEAP shroud segment photographed at a show |
| Pitch fibre by name, or a satellite structure of it | `pitch carbon fiber`, `mesophase pitch`, `carbon fibre satellite structure`, `optical bench carbon fibre`, `CFRP optical bench`, `James Webb backplane`, `Gaia payload module`, `graphite epoxy` | skates, a Starship, Delta boosters; nothing says pitch | a K13D spool, or a thermal strap |
| Nextel cloth as cloth | `Nextel`, `Nextel 312`, `Nextel fabric`, `ceramic fabric`, `ceramic fiber sleeve`, `Hitzeschutzgewebe`, `Keramikfaser Gewebe`, `3M ceramic fiber` | Nextel phones, medieval potsherds, Tang ladies; the ATV shield photo is already the aramid card's | a roll of 312 cloth, or the Station's shield layers opened |
| Buoyancy blocks on an ROV | `ROV buoyancy foam`, `submersible buoyancy block`, `riser buoyancy module`, `subsea buoyancy`, `Jason ROV` | Jason from angles where the yellow is a stripe; `Lander Skaff.jpg` shows the white blocks but reads as a crate | a bare foam block on a workshop floor |

| rejected after looking | why |
|---|---|
| the Ferrari carbon-ceramic disc as the carbon-carbon face | a different material; kept as third view with an honest caption, the A320 brake is the face |
| `Frein Airbus A330 A340 ... Bourget` | the housing and pistons, discs hidden |
| `Concorde brake discs.jpg` | a dark stack inside a wheel, unreadable small |
| `Tested RCC panel with hole.JPG` | a museum case; `Impact-test.jpg` shows the same hole on the rig |
| `255-GRC-2002-C-01633 SiC-SiC` | the weave close up, brown; 01632 shows the vane |
| `Oxid Hubtor kalt.JPG`, `Heißgasventilator.JPG` | the gate cold, and a white fan wheel; the glowing gate is the face |
| `Ceramic fibre close up 1.jpg`, `Orbiterblanket.lmb.jpg`, `Giotto Whipple shield ESA239195.jpg` | pale fluff, a quilting machine, a spacecraft with no shield visible |
| `Carbon fibre tows.jpg`, `Carbon fibers objects.jpg` | tows again, bronze; a wallet and a knife |
| `Shaker test of radiator panel`, `Mercury Planetary Orbiter radiator panel`, `GRAPHITE EPOXY DISK - NARA` | a white panel with people, gold foil, and a black disc on a scale |
| `Syntaktischer Aluminium-Schaum.jpg`, `Cropped Hollow glass microspheres` | metal foam, and a lovely broken sphere at 867 px; the epoxy micrograph covers it |
| `Lander Skaff.jpg`, `Limiting Factor on the water surface.jpg` | a lander that reads as a crate, and a white sub with the foam under the skin |


## Restyle batch, 19 November 2026: aerogel, metalfoam, auxetic, bioglass, hap

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Aerogel blanket on a pipe | `aerogel blanket`, `aerogel insulation pipe`, `Pyrogel`, `aerogel insulation blanket pipe` | nothing at all | a roll of the felt, or a lagged pipe |
| A closed-cell foam panel in a building or a car | `aluminium foam panel architecture`, `Alporas`, `Schaumaluminium`, `aluminum foam sandwich` | the Rutan VariEze, twice | a foam facade or a foam-cored car part photographed as such |
| An auxetic foam or textile, or the Lakes foam | `auxetic foam`, `auxetic textile`, `auxetic 3D printed`, `re-entrant honeycomb`, `auxetic lattice` | nothing; the shoe sole and the diagram are what exists | a printed re-entrant block being stretched |
| Bioglass as granules or putty | `bioglass granules`, `bioactive glass granules`, `bone graft granules`, `bone graft putty`, `Novamin`, `Sensodyne Repair`, `Knochenersatz Glas` | metamizole vials and nothing else; no second view, the card has the face only | a vial of 45S5 granules or a Novamin tube |
| A hydroxyapatite-coated hip stem | `hydroxyapatite coated implant`, `plasma sprayed hydroxyapatite`, `hip stem coated`, `hip stem hydroxyapatite`, `dental implant coated` | a 1910 overdress, and Estonian ALD-coated screws in a pig femur, which is not this coating | a stem with the matt white coating photographed |

| rejected after looking | why |
|---|---|
| `Bioactive glass.jpg`, `MorphologyofBioglass.png` | grey electron-microscope fluff, twice; the Micropear crystal shows the reaction and is the face |
| the old `Hydroxylapatite-338779.jpg` face | 460 px and pale; the Virginia specimen replaces it |
| `Crystals of hydroxylapatite.tif` | an electrodeposited coating at 5,000 times, cauliflower; the deproteined bone says more |
| `Hydroxyapatite (51578011146).jpg`, `Bio-Oss (51578353138).jpg` | pink histology slides |
| `Calcific tendinitis marked.jpg` | an X-ray with a circle; the removed deposits are the better picture |
| `-StateOfNASA ... Space-grade Aerogel` | a hand holding a plastic box |
| `Aluminium foam sandwich.jpg`, `Aluminium foam mg 3713.jpg`, `Aluminiumschaum-Sandwich, Kern nach dem Umformen` | the face again with a ruler, a disc on red, and a bent grey panel |
| `Metal foam Coffee table.jpg` | a table |
| `Auxetische Materialien.wiki.png` | fetched as auxetic3, then dropped: a wide diagram that the card crop cuts in half, labels and all |


## Restyle batch, 19 November 2026: mycelium, twood, gfrp, cfrp, alhoneycomb

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Mycelium leather, or the Hy-Fi tower | `mycelium leather`, `Mylo`, `Hy-Fi`, `Myzel Werkstoff` | a Sony Mylo phone, Mylo in North Dakota, and Thai beaches | the MoMA PS1 tower from 2014, or a Mylo swatch |
| Delignified wood before infill, or the process | `delignified wood`, `transparentes Holz` | nothing; two KTH samples and one lantern are all there is | a bleached white veneer beside the finished pane |
| Fibreglass hand lay-up on a hull, or glass roving spools | `fibreglass layup`, `hand lay-up`, `fiberglass boat hull`, `boat building fibreglass`, `glass fibre spool` | Norwegian fishing boats, a laying-on of hands, a 1929 sloop in timber; `Glasfaser Roving` is the silica-fibre card's photograph in another file | a hull being laid up in a mould |
| A prepreg roll or an autoclave | `prepreg`, `carbon fibre prepreg`, `Prepreg Autoklav`, `autoclave composite`, `vacuum bag composite`, `Boeing 787 fuselage barrel` | a Viper roof, a dull NARA stack of sheets, and a repair-manual figure | a roll of prepreg coming out of the freezer with its backing paper |
| Honeycomb being expanded, or an aircraft floor panel | `honeycomb expanded foil`, `honeycomb aircraft floor`, `Wabenkern`, `Nomex honeycomb` | a wind-tunnel honeycomb, bull kelp, model rockets, the MH370 debris map | a block being pulled open, or a floor panel cut through |

| rejected after looking | why |
|---|---|
| the old `Glass reinforced plastic SEM Stereo 200x.JPG` face | a red-and-cyan anaglyph, unreadable without glasses; dropped |
| `Material by Ecovative.jpg`, `Candle and its mycelium packaging.jpg`, `Mycelium objects at Genspace` | a beige figure, white on white, and a table of lumps |
| `Mushroom Insulation Installation.jpg` | a man carrying a white panel; the brick house says insulation better |
| `Goze Mokudon ... night front view.jpg` | the whole bench small and dark; the close-up is the picture |
| `Glasfaser Roving (rotated).jpg` | the same photograph as `silicafibre`, turned |
| `Moscow, fiberglass half-shell of a lamppost` | a grey shell on a kerb |
| `Tanahashi Cleanroom Prepreg.jpg`, `FIBER RESIN PREPREG - NARA`, `AFP Prepreg.jpg` | a man holding a black sheet, a stack of grey sheets, spools without a machine |
| `F1 Monocoque Chassis ...`, `SpaceX factory Falcon 9 interstage.jpg` | a second tub, and a black cylinder; the McLaren has the history |
| `Catalog 26 ... Metally Bonded Honeycomb Sandwich Panel`, `... F-4 Outer Wing Panel` | black-and-white panels in hangars |
| `Honeycomb structure (6248780733).jpg`, `Ali1234.jpg` | bees' wax, and a shop of saucepans |
| `Flown SpaceX DM-2 Dragon Delta Panel` | a scorched white panel that reads as a tile |
| `Tränken der Glasfasermatte mit multi PL-Harz.jpg` | fetched as the gfrp face, then dropped: at card crop it is a white stream and a cardboard box, the mat is out of frame; the blade footbridge is the face |


## Restyle batch, 19 November 2026: nomexcore, glare, plywood, clt, rcconcrete

| candidate | queries | why not | what might unblock it |
|---|---|---|---|
| Nomex honeycomb by name, or any aramid core | `Nomex honeycomb core`, `aramid honeycomb`, `Aramidwabe`, `kevlar honeycomb`, `radome honeycomb`, `rotor blade honeycomb`, `snowboard core honeycomb`, `honeycomb sandwich cut section`, `aircraft interior panel honeycomb` | nothing at all; the MAVEN structure is aluminium and the MH370 map is a map | a block of the buff paper core, or a cabin panel cut through |
| GLARE as a panel or in production | `GLARE`, `fibre metal laminate`, `A380 fuselage panel`, `A380 fuselage production`, `A380 Stade`, `Faser-Metall-Laminat`, `ARALL laminate` | a professor named Glare, a band, Italian shrines, Welsh signs; the fuselage transports show painted sections | a panel at Stork Fokker, or a cut edge |
| A veneer lathe at work, modern | `veneer peeling lathe`, `rotary veneer`, `Furnierschälmaschine` | the CSIRO 1930s ceremony and the Sabah factory; Sabah used | a ribbon coming off the knife, close |
| CLT being craned or in a fire test | `CLT construction site`, `CLT crane`, `CLT fire test`, `mass timber building` | Helsinki lobby, a 1677 house, a Belgian steam railway | a panel on the hook, or a charred test specimen |
| Concrete cancer | `concrete cancer`, `rebar corrosion`, `Betonstahl Korrosion` | alkali-silica cracking at a Canadian gallery, which is a different disease; the Funchal spall is the picture | a map-cracked column photographed close, for its own card |

| rejected after looking | why |
|---|---|
| the old GLARE diagram as the face | the card crop cuts the labels to `minium` and `eg`; kept as second view |
| `Singapore Airlines Airbus A380.jpg` | the same aircraft, daylight, smaller in frame |
| the old NASA router photo as the plywood face | a spindle and sawdust; the sheet itself was out of frame |
| `Plywood.jpg`, `Birch-plywood kitchen ...` | a block end that reads as a brick, and a kitchen |
| `Sandakan Sabah Plywood-Factory-22a.jpg`, `-35c.jpg`, `CSIRO ScienceImage 2259` | the lathe from the back, a worker patching veneer, three men in suits at a lathe in 1930 |
| `Mosquito Fuselage (8048040982).jpg` | the bare shell before paint, dim brown |
| `Mjøstårnet Brumunddal Aug2018.jpg`, `Brock Commons ... facade panel texture.jpg`, `20230630 Structure of Katajanokan Laituri` | a crane and scaffold, a wood-print cladding that is not the timber, and a lobby |
| `Plot 4.1 The Timber House` | a clad house, the CLT invisible |
| the old `Reinforced concrete foundation.JPG` face | numbered callouts printed on the photograph |
| `Bewehrung einer Bodenplatte.jpg`, `Rebar worker.jpg`, `Rebar lattice prior to the pouring` | a wide site, a man and a bar, a grid on gravel; the cage interior is the face |
| `Concrete wall cracking as its steel reinforcing cracks and swells 9061.jpg` | a hairline on a wall at card size |
| `Reinforced concrete rusted rebars german bunkers Pointe du Hoc.jpg`, `Hennebique.jpg`, `Qew bruecke ... 46 von 46.jpg` | rust on a bunker, a facade, a bridge |

## Batch 37 restyle (uhpc, selfhealconcrete, fibrecement, smc, forgedcomposite)

- `smc`: Commons has no photograph of sheet moulding compound itself. `sheet moulding compound`, `sheet molding compound`, `SMC press`, `SMC Formteil`, `bulk moulding compound` return the Small Magellanic Cloud, Pentax SMC lenses and Singapore constituencies. Dropped the TVR 3000S (hand-laid GRP, an analog) for a C5 Corvette and a Fiero GT, whose panels really are SMC.
- `uhpc`: `Ductal` returns only carcinoma histology; `Sherbrooke footbridge` finds nothing of the 1997 bridge. Replaced the Kassel footbridge, small in a park shot, with a broken fibre-bristling specimen; added Stade Jean-Bouin and a UHPC machine bed. The Krefeld bank façade in white UHPC and the MuCEM (lattice too small in frame) were looked at and left.
- `forgedcomposite`: dropped the Huracán floor mat, where the material was a trim strip. The 800 px watch photograph is a maker's product shot under CC0, kept for the scale at which the marbling is bought.
- `selfhealconcrete`: no second honest photograph. `self-healing concrete` and `bacteria concrete crack` return one 654 px gif, a mechanism diagram and concrete pump trucks.
- `fibrecement`: `Cement Board.jpg` (USG Durock) is glass-mesh cement board, not fibre cement; left out rather than badge it related.

## Batch 38 restyle (alsic, tyre, transparentarmour, dyneemahb, pvcfoam)

- `alsic`: no photograph of Al-SiC on Commons. `AlSiC`, `Al-SiC`, `Duralcan`, `IGBT baseplate`, `MMC brake`, `silicon carbide particle reinforced` return trains, banknotes and maps. The NASA poster of SiC fibre in titanium was all text at card size; replaced by a 1979 boron-aluminium shear specimen (related) with the poster's central micrograph as a structure view. A Lotus Elise S1 disc or a bare baseplate would fix it.
- `tyre`: `tyre section` returns the city in Lebanon; `Reifenquerschnitt` nothing. `PKW-Reifen Aufbau (eingefärbt).jpg` is the honest section; the Pirelli brochure cutaway kept as a drawing.
- `dyneemahb`: `UHMWPE armor`, `UHMWPE plate`, `Dyneema helmet` return nothing; `Enhanced Combat Helmet` gives the PEO Soldier profile, which is a UHMWPE shell. The Osprey plates (ceramic-faced, cover on) dropped. `Sapi plates.jpg` is already on the boron carbide card. `Climbing gear made of dyneema.jpg` is already on the UHMWPE card, so the helmet stands alone.
- `pvcfoam`: `Divinycell`, `Airex`, `PVC foam core`, `foam core boat hull`, `closed cell foam sheet` return nothing of the foam. `Wind rotor profile.jpg` shows the cored shells in section; a bare scored sheet of the foam is still wanted.
- `transparentarmour`: the 1931 NYPD demonstration photograph (`Kogelvrij glas`, 887 px, no restrictions) was looked at and left; it is a period piece, not the laminate.

## Batch 39 restyle (gypsum, g10, copv, pykrete, hempcrete)

- `gypsum`: no photograph of a cut or broken board core on Commons: `drywall cut edge`, `plasterboard core`, `Gipsplatte Bruch`, `drywall broken` give only the firestop series. The tools photograph stays; the Cambrian College firestop failure added as the honest second view. The tapered-edge photographs are blank wall.
- `g10`: nothing of bare G10 sheet: `G10 fiberglass` returns a bus and bearing balls, `Garolite`, `G10 knife scales`, `copper clad laminate`, `Glasfaser Epoxid Platte` nothing. The DVD board swapped for a bare board before assembly and a 50× section showing the glass layers. Micarta is phenolic, not G10, and was left.
- `copv`: the NASA White Sands inspection photograph showed a bare metal cylinder with two technicians, not the overwrap; replaced by the Mirai tank cutaway. `Copv tank close out prior to flight.png` is a black cylinder lost in wiring. `Type IV hydrogen tank`, `SCBA cylinder carbon` nothing.
- `pykrete`: the old `Pykrete.jpg` is a 640 px rusty-looking block on dirt; replaced by the Juuka ice church. Perutz's block and the Patricia Lake hull have no free photograph.
- `hempcrete`: `hemp lime block`, `chanvre banché` nothing; the Ukrainian HEMPIRE MIX bags are a product shot and were left.

## Batch 40 restyle (fgm, lattice, fff, ebm, waam)

- `fgm`: no photograph of a graded material. `functionally graded material` gives two diagrams of a segmented plate; `graded composition micrograph`, `thermal barrier coating cross section`, `graded porosity titanium`, `bamboo cross section density` nothing of use. The V2500 vane stays as the analog, with no extra view.
- `lattice`: the Assam bone-scaffold surgery photograph showed surgeons, not the lattice; replaced by a printed lattice at three strut thicknesses. `octet truss` returns car space frames; `gyroid lattice`, `3D printed titanium lattice`, `3D printed heat exchanger` nothing.
- `waam`: the Tomsk arc photograph was a blur of blue; replaced by a WAAM propeller with its beads showing. `RAMLAB propeller` and `Drahtlichtbogen additiv` nothing; the Damen propeller has no free photograph.
- `ebm`: `acetabular cup trabecular`, `EBM titanium`, `powder bed titanium` nothing; the Arcam A2 added as the machine. The Oak Ridge family photograph went to the lattice card instead, since it is mostly lattices.
- `fff`: `FDM layer lines`, `3D printing layers close up` nothing at card size; the crossed spool and the laboratory extruder added.

## Batch 41 restyle (coldspray, twophoton, concreteprint, sandprint, contfibre)

- `sandprint`: still no photograph of a printed sand mould. `3D printed sand mold`, `binder jetting sand`, `ExOne`, `printed sand core`, `Sandform gedruckt`, `3D-Sanddruck` return beach toys, chess pawns and 1950s core blowers. The pattern-made mould stays as the related view; the voxeljet machine added.
- `contfibre`: no photograph of a continuous-fibre printed part. `continuous carbon fiber 3D printing`, `Markforged` (an office exterior), `Anisoprint`, `Endlosfaser 3D-Druck` nothing. The two X7 printers stay alone.
- `coldspray`: `cold spray` returns freezer sprays and football physios; `Kaltgasspritzen` a USAF briefing photo that is a man and a poster. The Russian coated casting and the Marines' glove box added; the powder micrograph stays as the material.
- `concreteprint`: Tecla is earth, not mortar, so it moved to a related extra; the Gemert bridge detail is the main view. `Apis Cor` returns Corby station; `ICON 3D printed house` nothing free.
- `twophoton`: two TIFFs (fractal pyramid, castle on a pencil) fetched through the Commons thumbnailer like the two TIFFs already in the catalogue.

## Batch 42 restyle (boundmetal, lcmceramic, soluble, slaresin, pa12powder)

- `lcmceramic`: the zirconia bridge was an intraoral before-and-after, gums and all, unreadable at card size; replaced by the ESA regolith parts, which are the slurry route itself. `Lithoz`, `zirconia 3D printed`, `alumina 3D printed`, `ceramic stereolithography` otherwise empty; `ceramic 3D printing` is Studio Under's clay extrusion, a different thing.
- `soluble`: `PVA filament` finally gave a photograph, two Benchys printed in the support plastic itself. `dissolvable support 3D`, `dual extruder print`, `BVOH` (a band), `support material removal` nothing. The slicer screenshot stays as the related view.
- `slaresin`: the white cut-out part replaced by the clear cycloidal drive. `SLA resin vat`, `resin 3D printer vat`, `DLP 3D printer` nothing; the Form 2 set and the Materialise Mammoth are the process views. `SLA 3D Printed PCB.jpg` is grey on grey, passed over.
- `boundmetal`: no photograph of the filament itself or of debinding. `Markforged Metal X`, `BASF Ultrafuse`, `metal FDM`, `sintered 316L` nothing; `sinter based additive` gave the Fraunhofer shrinkage comparison, which says the whole card in one picture, and their parts-beside-a-coin plate. The filament extruder photo was already on `fff3`.
- `pa12powder`: `SLS nylon powder`, `polyamide 12 powder`, `SLS powder cake` nothing, so still no picture of the powder or the cake. `EOS Formiga` is ants. Hart's tetrahedron and the Duraform pulley added as parts.

## Batch 43 restyle (metalpowder, alsi10mg, grcop, bioink, fourd)

- `alsi10mg`: still no photograph of a printed aluminium part. `AlSi10Mg`, `laser powder bed fusion aluminium`, `3D printed heat exchanger`, `SLM aluminium`, `Aluminium additiv gefertigt` nothing; `3D printed aluminum` gives a cylinder head cast in a printed sand mould; the Ramstein bracket does not say its metal; the A350 hydraulic block is titanium. The nickel turbochargers stay as the analog, alone.
- `bioink`: the BioFabrication Facility was a grey box at card size; replaced by the Swansea construct coming off the printer, with the three ears and the NCATS well plate. `hydrogel printing`, `alginate hydrogel` nothing; `GelMA` is a town in Algeria.
- `fourd`: the strain diagram replaced by the gripper photo sequence; the humidity aperture and the blooming flower added. `shape memory polymer stent`, `Skylar Tibbits`, `self-folding` (umbrellas) nothing.
- `metalpowder`: no photograph of an atomiser or a recoater. `gas atomization` gives the diagram, added; `Plasma atomized pure titanium powder sample.png` is a software screenshot; `powder bed recoater`, `titanium powder spherical` nothing.
- `grcop`: no photograph of a GRCop part itself (`GRCop` is a French photo album). The AFRL deposition chamber added as the geometry; the Astra Delphin was already on `inconel718`. The Marshall injector stays.

## Batch 44 restyle (printsilicone, manila, hemprope, sisal, coir)

- `printsilicone`: no second photograph of printed silicone. `silicone 3D printing`, `soft robot silicone`, `embedded 3D printing silicone`, `Silikon 3D-Druck` return only the actuator already on the card; `3D printed liver model` is PLA with cast silicone; `Soft robot locomotion.jpg` is already on `dea`; `Liquid-silicon-rubber` on `silicone2`. Additive is complete.
- `sisal`: the bales replaced by the Sotuta drying racks, a better picture of the fibre and the place; the agave and the 1909 combing added. `Sisal fibres.JPG` is a wisp on black cloth, passed over.
- `hemprope`: `tarred rope rigging` nothing; `Hemp Rope 1740.jpg` is a museum relic with no context; the Touring Club retting photo and the CC0 fibre detail added.
- `manila`: `manila rope` returns textiles and lampshades, no rope; the stripping and the micrograph added.
- `coir`: `coir retting`, `coir yarn spinning` nothing; the export bales and the mat frame added.

## Batch 45 restyle (jute, cottonduck, linen, silk, spidersilk)

- `cottonduck`: the blurred green close-up replaced by `Cotton duck.jpg`, a flat, sharp weave; `canvas weave closeup` and `number 10 duck` return nothing (the MET hits are decoy ducks). The NARA tent-factory plates are 9000-pixel scans of a caption card with a small print in the corner, unusable at card size.
- `linen`: the flowering flax fields are plain green at card size, passed over; the NARA retting photo is too dark to read; the Lithuanian scutching photo is 720 px but legible. `linen weave macro` returns a shuttle.
- `silk`: `silk fibre micrograph` nothing; the Tomioka mill photos show the building, not the reeling; the Okaya filature machine added instead.
- `spidersilk`: the V&A cape made the main photograph, the NASA spider moved to an extra; `Nephila dragline` and `spider silk textile Madagascar` return nothing; the one SEM is a braided suture at 787 px.
- `jute`: `jute fibre drying` and `jute mill spinning` return 1917 book plates and mill exteriors; the retting pond and the coffee sacks added.

## Batch 46 restyle (felt, paracord, polyesterfab, wirerope, glassfibre)

- `felt`: `felt microscope wool scales` and `Filzherstellung` return nothing; `piano hammer felt` returns action diagrams and a honky-tonk bar; the yurt photos are good but the Tarim hat says more about the age. The hand felting and the hat added.
- `paracord`: all five main-photo candidates (`MIL-C-5040`) stay; the Irvin parawing lines (700 px, legible) and a bracelet added.
- `polyesterfab`: thin. `Dacron sail`, `sailcloth`, `Segeltuch` return cruise ships and oil paintings; `polyester halyard`, `webbing sling`, `fibre spinning`, `staple fibre`, `Polyesterseil` nothing. The one rope whose uploader states it is polyester, and the Dacron reels, added.
- `wirerope`: `Drahtseil Querschnitt`, `Seilquerschnitt`, `wire rope broken wires` return headframes and antennas; the Teufelberger section model and the tug drum added. `Glasfaser Roving (rotated).jpg` is the same photograph as `silicafibre`, passed over.
- `glassfibre`: `woven roving`, `bushing drawing`, `hull layup` nothing; the Owens-Corning furnace is a 9,000-pixel TIFF of a furnace wall. The 1930s Millville drawing photograph added; the mat wet-out (`Tränken der Glasfasermatte`) is a resin bag and a cardboard box at card crop, dropped after fetching.

## Batch 47 restyle (basalt, nomex, ripstop, sailcloth, nylonrope)

- `basalt`: nothing beyond the comparison already on the card. `basalt fibre` and `Basaltfaser` return it plus a process diagram; `basalt rebar` is an Afsluitdijk concrete pour with steel; `basalt roving` is Mars and Apollo; `150 Jahre Wiener Weltausstellung` are daimyo house models. One photo stays.
- `sailcloth`: `Bear of Britain spinnaker.jpg` dropped; a spinnaker is nylon, not laminate, and the caption could not be defended. `Kevlar-Carbon-Sail.JPG` is a genuine laminate close-up and took the main slot; `Laminate sails.jpg` (800 px, described only as My work) added as product. `3Di sail`, `carbon sail America's Cup` nothing; the Cuben clew is on `dcf`; the Caseneuve trimaran is carbon-Kevlar hull, not sail.
- `nomex`: `racing suit fireproof`, `aramid paper insulation` nothing; `Nomex honeycomb` is model rockets again; `Nomex Reaction.jpg` is a structure diagram. The USDA flight suit added.
- `ripstop`: `ripstop tear`, `parachute ripstop fabric`, `hot air balloon fabric closeup` nothing; the NYCO blend and the Peter Lynn kite interior added, the Cherai paraglider passed over as a third.
- `nylonrope`: `Nylon Rope.JPG` is on `nylon662`, the Sterling kernmantle series is on `kernmantle`; `anchor rode nylon`, `mooring line snapback`, `double braid rope` return one frayed end, which is exactly the structure shot wanted, plus the Auckland lifebuoy.

## Batch 48 restyle (pprope, bungee, kernmantle, webbing, seatbelt)

- `pprope`: `polypropylene rope floating`, `baler twine`, `split film rope` nothing; `water ski rope` returns skiers and jet skis. Two throw-bag photographs added (the bag is polypropylene by design; the captions say throw-bag line, not polypropylene).
- `bungee`: `shock cord cut rubber`, `kayak deck bungee` nothing; `elastic cord hook` returns 1890 dental headgear. The Bloukrans museum board and the Gorsa jump added; the Hamburg crane is a crane at card size.
- `kernmantle`: the Sterling series has four views of one rope; the teased core added as structure. `climbing rope fall belay` returns self-belay devices; `sheath damage`, `drop test` nothing. The 768 px rope-access kit added over the Manhattan façade shot, which is a building with a dot.
- `webbing`: `webbing sling anchor climbing`, `nylon webbing roll`, `cargo lashing strap` nothing in English; `Gurtband` returns the rolls (`Popruhy`, flat webbing, captioned as such) and the slackline.
- `seatbelt`: `seat belt webbing closeup`, `three-point seat belt Volvo 1959`, `pretensioner`, `buckle retractor` nothing; the NARA-style sled test (no description on Commons, public domain) and the Novapax retractor added; the Geneva motor-show dummy passed over as a mannequin.

## Batch 49 restyle (velcro, denim, cordura, monofil, viscose)

- `denim`: the Poly Haven render dropped; at card size it is grey crumpled cloth with no twill and no blue. `Denim 130426.jpg` (933 px, CC0) shows the diagonal and took the main slot; honeycomb fades and a selvedge cuff added. `denim fading whiskers`, `denim weave closeup`, `indigo vat dyeing`, `denim twill macro` nothing; `IndigoDyedYarn.JPG` passed over as a fourth; the Queen Street Mill looms are not denim.
- `monofil`: `GreenFishingLine.jpg` made main, the trimmer head moved to second. `Fishing lines 2025 G1.jpg` is 8-strand braid by its own description, not mono; `monofilament fishing line` returns Mono Lake; `Tangled fishing line on pier.JPG` is a grey mass at card size; `gillnet monofilament`, `toothbrush bristles macro`, `nylon fishing line spool` nothing.
- `cordura`: only `Cordura Purse.jpg` names the fabric. `Tactical backpack at Lower Falls Trail.jpg` and the Dutch Army VOSS pouches are probably Cordura and cannot be captioned as such; the Wacken Open Air `Cordura` series is a band; `motorcycle textile jacket` is leather and a Nazi helmet; `1000D nylon`, `cordura backpack`, `MOLLE pouch` nothing usable.
- `velcro`: `velcro ISS` is pizza and chess, the Velcro invisible at card size; `Velcro6.jpg` pocket and the sleeping-bag zip passed over; photomicrograph and burr added.
- `viscose`: `viscose spinning bath`, `rayon spinneret` nothing; the Säteri factory and the sponge passed over; `Xanthation.png` is a diagram; the Science Museum machine and the CSIRO SEM (993 px wide, 2:1) added.

## Batch 50 restyle (lyocell, acrylicfibre, merino, mohair, ramie)

- `lyocell`: `Lyocell.jpg` dropped, it is a garment care label (55 per cent hemp). Commons has nothing of the fibre itself: `lyocell`, `Tencel`, `lyocell fibre` return two Czech mattress covers and a Patagonia shirt; `Tencel fabric` nothing; `Lenzing` is the town; `NMMO` is ball-and-stick. The shirt took the main slot as product, the embossed Vital ticking as second.
- `merino`: the CSIRO structure diagram was captioned as a photo; it moved to second as structure. Sheep in snow made main (related, honestly), the SLNSW ram-judging picture third. `Merino ram fleece.jpg` is a labelled fleece map, passed over; `wool fibre SEM` returns an 1844 sterility treatise; `merino base layer` nothing.
- `acrylicfibre`: `acrylic awning` returns only the Orlon advertisement, which was added; `Sunbrella` is a 1947 suntan lotion and Philadelphia umbrellas; `polyacrylonitrile fiber` is an airfield; `Acrylic 40x.JPG` (1024 px) is a genuine single fibre with pigment inside, added as structure. The Dralon factory tour is a building.
- `mohair`: the goat and the Steiff Schulte plush added; `mohair suit` is a band called Green Mohair Suits and the Beatles' Millings suits, which are not stated to be mohair; `mohair fleece` is 1890s engravings; the Sebastian bear is mohair and alpaca mixed.
- `ramie`: SEM and plant added; `Ramie-Band.jpg` bookbinding tape passed over as a fourth; the Honolulu katabira is faint at card size; `karamushi` is a roadside station; `Echigo-jofu` is a print.

## Batch 51 restyle (kapok, rockwool, wiremesh, geotextile, down)

- `rockwool`: `Arrangement Mineralwolle.jpeg` dropped, it is a cut-out marketing render. The Moscow stack of slabs made main; `Mineral wool in SEM.jpg` is captioned glass wool on Commons and the caption here says so; the Bernex tomato substrate added. `Spun-Rock-Wool-article.jpg` is a newspaper page, `Original 1897 rock wool plant.jpg` is 778 px and murky, the Balashikha factory is a building, `mineral wool fire` is fire kindlers.
- `wiremesh`: no Dutch weave on Commons at all; `Dutch weave` is Winterswijk textile mills, `wire cloth` is factory frontages, `stainless steel mesh macro` nothing. `Woven wire mesh.png` (a crimped render) dropped for `Drahtgewebe (Quadratmasche).jpg`, a real square weave with a scale bar; two sieve photos added. The double-layer metal mesh micrographs are lithographic grids, not woven.
- `kapok`: open pods and the 1923 Belgenland drill added, the caption saying kapok or cork. The Tropenmuseum Java harvest photos are 700 px and grey; `Kapok on a branch` is one dangling tuft; `Kapok seeds.jpg` is a pile of seeds.
- `geotextile`: the stone-on-geogrid photo and Dawlish Warren geotubes added; `Nonwoven geotextile containers.jpg` crane shot and the Teignmouth breccia (640 px) passed over; `French drain geotextile` nothing.
- `down`: `Daune down feather.jpg` and the ROM eider parka added. `Dunhreinsun1.jpg` is the same Skaleyjar scene already on `eiderdown`; `goose down` returns Goosey Goosey Gander; `down plucking` is groundnuts and ostriches; the IDFL building is a building.

## Batch 52 restyle (primaloft, emifabric, horsehair, catgut, technora)

- `technora`: nothing on Commons names it. `Technora` returns Kevlar swatches and glass-aramid hybrids; `aramid rope`, `aramid hose reinforcement`, `timing belt cord`, `Zahnriemen Aufbau`, `hydraulic hose braid`, `fibre optic cable strength member` all nothing; `Teijin aramid` is the Arnhem research centre and Twaron samples; `Para Aramid Yarns Body Armor.jpg` is on `aramid`. The belt drive stays alone.
- `emifabric`: the Isotoner glove shop display dropped. The Faraday bag made main and the Medtex silver-nylon SEM second; `Art meets conductive fabric` is a maker-fair stand; `conductive textile` returns Daleks; `shielding tent` is Coast Guard comms tents and a S.H.I.E.L.D. sign-up; `Abschirmgewebe` nothing.
- `horsehair`: the Auckland Museum bow on a blue cloth dropped, the hair invisible at card size. The Three Forks mecate made main and the Tilburg specimen tray added; the MET bow-frog detail (`Violin Bow MET midp1989.146det.jpg`) was fetched and dropped, a two-panel composite with no hair visible at card size. `horsehair interlining`, `horsehair plaster`, `rehairing bow` nothing; `horsehair` leads with a worm; the MoMu woven fabric is not described as horsehair; the St Louis bonnet passed over.
- `catgut`: the suture packet moved to second; the Mahr baroque violin strings made main and the Museo Galileo gut hygrometer added. `Surgical catgut thread.jpg` (a glass dispenser jar) passed over as a fourth; `gut string making` is a lighthouse at Digby Gut; `Darmsaite` is psalmodicons.
- `primaloft`: `PrimaLoft` returns only the gilet already used; `Polyfill.jpg` is on `polyfill`; `polyester wadding`, `Kunstfaserjacke` nothing; the Thinsulate gloves added as the sibling product.

## Batch 53 restyle (m5fibre, basofil, preoxpan, silicafibre, ptfethread)

- `silicafibre`: the glass roving (the same photo as `glassfibre`'s rotated copy) dropped for `Silica fibre 1250g m2 1600dpi.jpg`, a scan of the woven cloth itself; the Apollo 10 Beta-cloth stowage bag at the Stafford museum added. `Elastaseal reentry.jpg` is rockwool firestop; `quartz fibre` is electrometers; `exhaust wrap` is engine bays with no wrap visible; `welding blanket silica`, `Kieselglasfaser` nothing.
- `m5fibre`: `PIPD fiber`, `pyridobisimidazole`, `rigid rod polymer fibre` nothing; `M5 fiber` is BMWs; `Zylon` and `PBO fiber` are Lewis Hamilton and French street furniture. The aramid flock stays as the analog.
- `basofil`: `Basofil` is basophils; `melamine fibre` nothing; `Flammschutzhaube einsatz.jpg` is 646 px and a generic hood; `Nomex flammschutzhaube.jpg` is Nomex; `MagicEraser.jpg` (Basotect, the same resin as foam) is on `melaminefoam`. The turnout gear stays alone.
- `preoxpan`: `Panox` is a derelict house in Sai Kung and a camera; `oxidized PAN fiber`, `stabilized polyacrylonitrile`, `carbon fibre precursor oxidation` nothing; `welding blanket` is a carousel horse. The fire blanket stays alone.
- `ptfethread`: `PTFE thread` is thread-seal tape and screw caps; `Tenara` is teenagers; `awning seam`, `tensile membrane seam`, `Nähgarn Spule`, `Markise Naht` nothing; the two NARA Scott Omaha awning-shop photos are index-card scans with the picture a stamp in the corner. The Marseille roof stays alone.

## Batch 54 restyle (kuralon, cashmere, qiviut, sinew, rawhide)

- `sinew`: the old main `Sinew strings.jpg` is captioned on Commons as gut strings for a double bass (Жильные струны для контрабаса), i.e. catgut, not sinew; dropped. Replaced by `Whale sinew string.jpg` (Higgins museum, Yaghan whale-sinew string with its tag) with `Sinew wrapped split feathers on Sinagua arrow.jpg` as the product view. `Sinew-straining.jpg` is a bass player at a festival; `Sinew-backed bow, Chinook ... Peabody` is 5472×1738 and a thin line at card size; the Chukchi armour at AMNH hides its bow; `hafting sinew arrow`, `Inuit bow sinew` nothing; the rest of `sinew`/`tendon` is histology and anatomy diagrams.
- `cashmere`: the CSIRO main is an SEM and is now badged structure, not photo. No photograph of raw cashmere down on Commons: `raw cashmere` is a cricket club, `cashmere fleece` is Kashmir shawls, `cashmere top roving` and `cashmere dehairing` nothing; `Cashmere Factory Gobi 33` is a stuffed goat among mannequins. `Mongolia Herding Life 20.JPG` (combing) is only 700 px but is the one process photo there is and reads fine as an extra. `Pashmina goats.jpg` taken over the Australian goat portrait and the Johnstons of Elgin goat statues. The chiru-vs-cashmere SEM comparison is a labelled two-panel, skipped. `Cashmere cowl - Flickr - arripay.jpg` and `CashScarf.JPG` are honest product views if a third is ever wanted.
- `qiviut`: `Muskox (Ovibos moschatus) male Dovrefjell 1.jpg` shows the fleece actually coming off, which is the point of the card; the Nunivak USFWS herds in snow (`5284102600`, `5283889050`) are good but show nothing shedding. `Qiviut yarn skein.jpg` chosen over `Qiviuk.jpg` (ball with a brand label) and `Qiviut sweater front.JPG` (an office snapshot). `Knitting Qiviut - DPLA` is 685 px. `muskox shedding`, `moulting` return a video game.
- `kuralon`: still nothing. `Kuralon`, `vinylon`, `vinalon`, `ビニロン`, `PVA fibre`, `water soluble yarn`, `Solvy`, `PVA fibre reinforced concrete` all empty or off-topic; `February8Vinalon.jpg` (the Hamhung complex) is 640 px; `Kuraray Kurashiki Plant (Sakazu).jpg` is a blank factory frontage and the former rayon works, not the vinylon one; `Nasal packing, Ivalon sponge.jpg` is PVA sponge, a different product, and the `pva` card already covers the film. The pellet jar stays as related.
- `rawhide`: the mallet moved to third place behind the Jacob Hamblin House chair-seat weave (the material in close-up) and Stanley Naveau's moosehide (the hide before it becomes lacing). `Rawhide romals.jpg` is thin reins on a laminate floor, unreadable at card size; `Lakota Parflech ... NMAI` is a good product view not used (three images is the cap); `New Faber bearpaws.jpg` and `Unknown Maker, Snowshoes` are decent snowshoe views, also spare; `Rawhide dog chew treat.jpg` is honest and spare; `rawhide` on its own is Clint Eastwood.

## Batch 55 restyle (harakeke, esparto, raffia, pina, laidrope)

- `harakeke`: the pa harakeke photo was a suburban garden with a council sign; dropped for `MAP Expo Maori Lin 30 12 2011 1.jpg`, a 19th-century hank of muka at the quai Branly. `MAP Expo Maori Pilon` (the stone patu muka) is a spare related view. `muka` on its own is Czech wayside shrines and flour; `korowai` is a gecko; `Flax mill at Makerua` and `Flax mill at Waipipi` are distant sheds; `Bales of flax fibre ready for market ATLIB 306055` is a good b/w product view not used (cap of three). `Detail of border of Maori kahu kiwi.JPG` reads as weave at card size.
- `esparto`: the plant demoted to related; `Pleita artesania esparto.jpg` (a coil of the braid) is the main, `Pleita con giros. Esparto.jpg` a near equal. `Esparto kz01` and `kz03` (braid hung on a post, a mat on the ground, Albardinal botanic garden) are good spares. `espartero` is a general; `Expositor espardenyers Museu Etnologic del Montseny` is a display case; `Alpargatas.jpg` (Venezuela) is a shelf of shoes; `Tunisian oldpicture - Fabrication of baskets with Esparto.jpg` is 828 px; nothing on Commons of esparto paper or the Edinburgh mills beyond a street sign at 640 px.
- `raffia`: `Raffia cloth, Kuba kingdom, c. 1909, HMA.JPG` over the Shoowa panel (also good) and the Brooklyn pieces (smaller). `Raffia weaving with a Ranger` is a child at a craft table; `Hat MET 1984.140 d.jpg` is a pale crown with no readable texture; `Raphia australis.jpg` (Kosi palms) is a spare related view. `Raphia leaf` returns an encyclopaedia plate.
- `pina`: no photograph of the scraped fibre itself on Commons at usable size: `Pineapple-fiber-extraction.jpg` is 680 px. The barong stays as main. `Queen of Philippine Fabrics ... La Herminia 03.jpg` (loom close-up) over `05` and `Hinuguran it Akeanon ... 07` (weaver at loom, similar). `Pure Pina fiber ... HABI` winners are pale cloth in a hall; the Cleveland and Ayala museum pieces are glass-case shots; `Hinuguran ... 01` is a portrait in front of a rail of shirts.
- `laidrope`: Hermione coil stays. `Seilerei (14980940883).jpg` (Feldbach) over `Seilerei (14401892804).jpg` (Stubing, also fine) and `Seilerei Denzler` (b/w). `Rope (48708564907).jpg`, the Tura Cave rope at Auckland Museum, is a handsome close-up and a spare; `Half hitch (Z-chirality in Z-laid rope).jpg` has German labels burned in; the Chatham ropery files are all building exteriors or 640 px; `rope hockle`, `unlaid rope strands`, `eye splice three strand`, `manila rope coil`, `sisal rope coil` nothing; `Kjoge Mini-By` is a model village.

## Batch 56 restyle (doublebraid, twelvestrand, braidedline, kineticrope, pianowire)

- `doublebraid`: the arborist photo dropped for `LIROS XTR Dyneema.jpg`, a cut end that shows the two braids; `Frayed.png` is the same idea and already `nylonrope2`. `Masson Mills WTM 16 Rope Braider` went to `twelvestrand`; `Repslagarbanan` (Karlskrona) is a laid-rope machine; `Deck Lead Chris Basque Splicing Line (OOI 909)` duplicates the Jordan one; `Linepack sunrise` is a dot against the sun; `yacht braid sheet`, `Dyneema sheet sailing`, `kernmantle vs braid`, `Flechtmaschine Seil` nothing; `Épissure` and `Grey synthetic rope` are splices in laid rope.
- `twelvestrand`: `twelve strand rope` is Owen Jones's ornament, `hollow braid rope` a trench mortar; `LIROS Dyneema hollow.jpg` belongs to `uhmwpe`; `SRT Climbing Device.jpg` is a climber, the rope unidentifiable. One extra only.
- `braidedline`: `Fishing reel 2025 G1.jpg` is the same photographer's reel with the same 0.15 mm braid; `Reel with DSMB` is Dacron braid, captioned as such. `Spectra line` is spectroscopy; `PE braid`, `geflochtene Angelschnur` nothing; `Redes de pesca ... ocho filamentos` is mooring rope.
- `kineticrope`: still nothing of a kinetic rope or a recovery under load on Commons: `kinetic recovery rope`, `snatch strap`, `recovery strap 4x4`, `Bergegurt`, `Bergeseil`, `Jeep recovery rope`, `Land Rover recovery mud` all empty or off-topic; `Lorry stuck in mud 15l07.JPG` shows a telehandler beside a lorry and no rope; `Do not get stuck.jpg` is a Land Cruiser on a dry riverbed. `Abschleppseil Automobile equipment 01.JPG` (a plain tow rope) is the main as the thing kinetic rope replaced, the fuse shackle second; both badged analog.
- `pianowire`: `Springs 009.jpg` and the Marnaval drawing machine added; the Commons piano interiors (`Piano strings.jpg`, `Piano strings 3.jpg`, `DuplexScaling.jpg`, the Calgary Steinway set, `Steinway grand piano strings and keys.JPG`) are all good and spare, the Flickr main stays. `music wire` is a band and a conference; `piano wire coil` is spiral binding; `music wire spool`, `Klaviersaite` nothing; `Wire-drawing-bench.jpg` is an unreadable workshop corner; the NARA nine-die machine is an index-card scan; Dürer's wire-drawing mill (`Spätgotik exhibition ... 9858.jpg`) is a fine related view if a fourth were allowed; the Bahco pliers for piano wire are pliers on a rock.

## Batch 57 restyle (rattan, willow, tatami, toquilla, worsted)

- `rattan`: the Philippine craft display dropped for `Rattan peel 籐皮.jpg`, the strips themselves. `Rattan chair.jpg` and `Antique chair with caning seat detail.jpg` are good product spares; `Rattan Palm (Calamus rotang) with fruits` shows the palm but not the climbing; `Cebu Rattan Chair` is 958 px; `rattan cane close` is a 1905 travel book; `Rotan` is a town in Texas; `Stuhlgeflecht` nothing.
- `willow`: the Austrian jug moved to second; `Traditional willow basket maker.jpg` (b/w, the rods in hand) is the main. `Korbmachen – Flechtkunst mit Weiden, Stroh und gespaltenem Holz 02` turned out to be straw coiling, not willow; `Wicker maker.jpg` does not say what the wicker is; `Mandenmaker Zuiderzeemuseum` is 1200 px; `Pavenham Osier Beds 1` is a nature-reserve sign; every withy-bed and drying-withies photo on geograph is 640 px; `Weidenruten` is churches.
- `tatami`: `Texture of tatami; August 2007.jpg` is 800 px and the only close view of the weave, so it is the main; `Tatami sectional view.jpg` (1280 px) shows the core; the Flickr repair photo stays as the process view. `Nakakane Tatami` and `Tatami shop (26568881806)` are shop fronts and storerooms; `Tatami omote.jpg` is a rolled target for sword cutting; the Juncus macros are flowers; `tatami omote close`, `igusa rush` nothing.
- `toquilla`: `Bécal Panama Hat Production.JPG` (splitting, Yucatán) and `Panama hats montecristi.jpg` (the stages) added. `Carludovica palmata.jpg` (the red fruit) is a good related spare; `Optimo Montecristi Panama Hat.jpg` is a catalogue cut-out; `Panama hat workshop.JPG` is a shop front; `Panama-hat-fold-up.jpg` is the myth in a box; `toquilla` on its own is a Spanish daisy and mantillas.
- `worsted`: `CSIRO ScienceImage 1734 Wool That has Been Combed.jpg` (top) and the Bradford Noble comb added. `Harris Tweed Handwoven ... Image 0001` is the woollen opposite, a spare analog; `Textielmuseum-cabinet-15` is a tray of samples; `Wool fleece and top.jpg` is 1299×557 and mostly ribbon; `Shortdrawspinning.JPG` is a pair of hands; the Kammgarn and worsted-mill hits are all buildings; `pinstripe suit fabric`, `Kammzug Wolle`, `worsted suit fabric close` nothing.

## Batch 58 restyle (jacquard, leno, triaxial, doublecloth, terrypile)

- `jacquard`: the Morris cloth stays; `Jacquard loom cards.jpg` (the chain close) and the National Museum of Scotland loom added. `Hand-driven-jacquard-loom.jpg` (Sliven), `Van Phuc loom punch cards 02.jpg`, the Masson Mills Hattersley shed and the MOSI ribbon looms are all good spares; `Damask - front and back.jpg` and `Damask - pearlescent shine.jpg` are pale swatches; `Jacquard fabric close` is a 1955 Dodge seat.
- `leno`: no photograph of a true leno crossing on Commons at any size: `leno` is Jay Leno, `Dreherbindung` and `Dreher Gewebe` return the plain gauzes, `marquisette` is an Ardèche aperitif, `Leno bag sample filled.png` is 736 px, `Western Han Gauze` is a printed fragment on a wall, `Mosquito Net (5855064364)` a bed net at room distance, `mosquito net close`, `Zwiebelnetz`, `onion mesh bag` nothing. The bandage-rolling photo (nurses, 1910s) dropped; `Gauze 03.JPG` is the main, badged analog with a caption that says it is plain weave drifting, and the LCCN drawing of ra and sha stands as related.
- `triaxial`: `triaxial weave`, `triaxial fabric`, `Doweave`, `tri-axial`, `Dreiachsgewebe`, `kagome basket`, `六つ目編み` nothing on the loom-woven cloth; `Bamboo Wall Hanging, Maharashtra.jpg` is a real hexagonal (triaxial) bamboo weave and is the main as analog. The MoMu `Woven Fabric (ST177)` dropped: it was captioned as leno-type on no evidence.
- `doublecloth`: `John Schneider Coverlet.jpg` and the Cleveland Recuay fragment added. `Bird, designed by William Morris ... Kelmscott` and the Rietberg Doppelgewebe are good spares; `Owen Double Weave (2007)` is a painting; `double cloth coat` is cloth seals and raincoat factories.
- `terrypile`: the Cleveland velvet was 531 px wide and dropped; `Frottee-Handtuch.jpg` is the main, the Queen Street Mill Northrop terry loom the process view, `Corduroy fabric.jpg` the cut-pile view. `Frottee.jpg` and `Towel blue decorativepattern closeup.jpg` are spares; `velvet pile close`, `velvet macro`, `velvet weaving loom wires`, `Samt Webstuhl` return butterflies, thermometers and book plates; `5-wale.corduroy ... macro.jpg` is mostly zips.

## Batch 59 restyle (warpknit, jersey, seamlessknit, spacerfabric, fleece)

- `warpknit`: the 1910 Nottingham machine swapped for the 1939 one (`NIM 1939 Warp knitting machine 2572.jpg`), whose needle bar reads at card size; `Raschel lace.jpg` and the `Raschel loop formation.jpg` diagram added. `Raschel tüll 2`, `Raschel markizett 2`, `Raschel 2` and `Kettenwirk 11` are more diagrams, the last with Czech labels; `tricot` is a village in the Oise; `warp knit` is a mountain pass; `Tricot-machine.webp` is 800 px; `powernet fabric`, `warp knitted net` (640 px) nothing usable.
- `jersey`: `T-shirt macro view (143610293).jpg` and the old circular machine's needle dial added. `Interlockjersey.jpg` is a beige drape, `Gestrick links-rechts linke Seite.jpeg` the back of the main, `Single jersey.jpg` a 967 px diagram, `Circular Knitic` and `Griswold` good machine spares; `stockinette macro`, `knit stitch macro`, `Maschen Makro Strick` nothing.
- `seamlessknit`: the Bangladeshi flat-knitting shed dropped for `WLANL - jpa2003 - knit and wear vlakbreimachine(2007).jpg`, an actual Stoll knit-and-wear machine (1200 px); `Leguano Barefoot Slip-On Shoes - Top View.jpg` for the knitted upper and `Sock knitting machine.jpg` for the sock. `Nike flyknit one (8483993132).jpg` is the photo `flyknit` already carries; `Santoni` is a Sicilian rock sanctuary; `whole garment knitting` is darning posters; the Shima Seiki bellyband is a mannequin.
- `spacerfabric`: `Spacer fabric 3.jpg` (the cross-section) and `Spacer fabric 2.JPG` (the mesh face) added, same uploader as the main. `Abstandsgewirke Funktionsprinzip.jpg` is 640 px; `3D spacer fabric` is Apollo 11 seat textures; `spacer mesh` is rockfall netting.
- `fleece`: the Poly Haven swatch stays; the red balaclava added as the one honest product view. `fleece blanket` is a Snuggie and a baseball game; `Synchilla` a 1840 fashion plate; `Polartec` a cycling team; `Fleecedecke`, `microfleece`, `fleece PET bottles recycled` nothing.

## Batch 60 restyle (nonwoven, needlepunch, electrospun, tyvek, stitchbond)

- `nonwoven`: the mask stays; its middle layer at 12× (`Sebészeti maszk középső rétege.jpg`) and the kohlrabi crop cover added. `Sebészeti maszk külső rétege.jpg` (outer spunbond at 12×), the polarised-light micrograph of the outer layer and `Foto mikroskop .jpg` (meltblown SEM on a screen) are spares; `Material Non-Woven Fabric.jpg` is coloured rolls; `spunbond`, `spunbond nonwoven`, `Spinnvlies`, `nonwoven roll`, `wet wipes nonwoven` nothing; `Spunjet process.jpg` is a 2049×586 line diagram.
- `needlepunch`: the hand-felting photo replaced by its own close-up as the process view; the main is now the needle-felt lining of a car boot (`Suzuki SX4 Kofferraum.JPG`, 1023 px), the material as met, and the barbed-needle diagram the structure. `Filznadel.JPG` (two needles on white) and `Geocomposite drain.jpg` are spares; `Needlefelt filter bag` is the inside of a bag; `Punching with 3 layers of textile.jpg` is a domestic embroidery punch; `needle loom` is Iron Age loom weights; `Nadelmaschine Vlies` nothing.
- `electrospun`: `Taylor cone photo.jpg` and the Electrospinz rig added; `Electrospinning Diagram.jpg` and `Melt electrospun fibers.jpg` (1024 px) are spares; the bicomponent SEM is a four-panel figure.
- `tyvek`: the envelope moved to second; `Tyvek house wrap.jpg` (Atlanta) is the main, `Tyvek Suits (cropped).jpg` third. `MI house wrapped with Tyvek.jpg` and `Newone - FedEx Tyvek envelope.jpg` are spares; `Tyvek-Anzug.jpg` is a cleanroom selfie; `Tyvek label` is a carousel; `Tyvek wristband`, `flash spun polyethylene` nothing.
- `stitchbond`: still no photograph of a multiaxial glass or carbon NCF on Commons: `non-crimp fabric` is a 1910 fence catalogue, `biaxial glass fabric`, `Glasfasergelege`, `stitched glass fibre fabric`, `wind turbine blade layup glass`, `multiaxial fabric glass`, `Malimo Maschine` nothing. The hybrid stays as analog; `Maliwatt.jpg` (the East German stitch-bonded cloth) and `Stitch-bonded fabric in a car.jpg` (960 px) added as related. `Malimo Wischtuch.jpg` and the KPL bedsheets are mostly labels; the Bundesarchiv Malimo machines are 800 px.

## Batch 61 restyle (woven3d, opwairbag, ptfeglass, etfefoil, laminateshell)

- `woven3d`: no photograph of a 3D-woven preform itself on Commons: `3D woven fabric` is Renault seat trim, `3D weaving composite preform`, `woven preform carbon`, `3D orthogonal weave`, `carbon fibre fan blade` nothing, `3D weave` is Finnish weaving schools, `Fan Parts LEAP ICT Mumbai` is a dismantled desk fan. The LEAP fan stays; `GE90 blades dsc04669.jpg` (the laid-up predecessor, badged analog) and `CFMI LEAP 1B engine from a Boeing 737-8 MAX.jpg` added; `Fan blades and inlet guide vanes of GEnx-2B.jpg` is a spare.
- `opwairbag`: `Renault Laguna 01 airbag by-dpc.jpg` added as the sewn kind, badged analog. `Airbag 2015.jpg` is a band on stage, `airbag inflated test` is Mars Pathfinder, `Jacquard airbag`, `airbag cushion inflated`, `airbag nylon 66` nothing; `Deployed dual airbags.jpeg` and the crashed Audi are spares.
- `ptfeglass`: `Dresden Hauptbahnhof 001.jpg` (the membrane from below) is the main, Denver moved to second, the Metrodome collapse third. `Denver International Airport, from security line.jpg`, `DIA Roof and Hotel.jpg`, `London MMB V6 Millennium Dome.jpg` and the Hajj Terminal interiors (`Hajj Terminal 01 Jeddah.jpg`, `KSA Jeddah - Hajj Terminal`) are spares; `PTFE glass fabric`, `PTFE coated fibreglass membrane`, `tensile membrane roof PTFE` nothing.
- `etfefoil`: the Eden biome interior moved aside for `Allianz Arena - Panels.jpg` (the cushions close), `AllianzArena Luftversorgung und Beleuchtung.jpg` (the air supply) and the Water Cube. `Eden Project roof hexagonal design.jpg`, `AWM-Munich-ETFE-Cushions-Photovoltaic.jpg`, `Yjiapu Traffic hub -ETFE Cushions Roof.JPG` are spares; `ETFE` on its own returns nothing.
- `laminateshell`: `Water repellent shell layer jacket.jpg` (1254 px, beading) and the Mammut shell of 2018 added. `Gore-Tex membrane` is shoes and a dead pigeon; `ePTFE membrane SEM`, `waterproof breathable laminate`, `seam tape jacket`, `Gore-Tex fabric close`, `drysuit trilaminate` nothing; the Arcteryx boot and the North Face shoe are footwear.

## Batch 62 restyle (mercerised, dwrfinish, ringmesh, weldedseam, tufted)

- `mercerised`: the spool stays; `Bobinas de hilo de algodón mercerizado` (1280 px) added. The LOC Ata mercerising-machine and cloth-sample frames are film-strip scans with sprocket edges; the Dixie Mercerizing Company files are a derelict mill in Chattanooga; `cotton fibre SEM mercerized`, `mercerising machine` nothing else.
- `dwrfinish`: `Water drops in umbrella.jpg` and the ginkgo leaf (lotus effect, badged analog) added. `Water repellent shell layer jacket.jpg` is already `laminateshell2` and `Martexin Waxed Canvas` is `waxcotton`; `Green Barbour Endurance jacket.jpg` is a jacket on a stand; `hydrophobic fabric droplets`, `water drops on nylon`, `Imprägnierung Jacke`, `Nano coating water repellent` nothing.
- `ringmesh`: the Cleveland hauberk was 731 px wide and dropped; `Gant anti coupure.jpg` (the modern welded-ring glove, 1267 px) is the main, the European riveted links the close view, the Mughal hood the historic one. `European riveted mail hauberk, close up view.jpg` is a two-panel composite; `chainmail butcher glove` is a Mackintosh house; `Kettenhandschuh` and `Stechschutzhandschuh` are a glove stretcher; `oyster glove` is rubber gloves; `shark suit chainmail`, `butcher glove stainless` nothing.
- `weldedseam`: the drysuit stays; `Ultrasonic Welding.JPG` (Essen fair, 1367 px) and `Zodiac Inflatable Boat.jpg` added. `Ultraschall-Schweißmaschine.jpg` is a catalogue cut-out; `welded seam drysuit`, `ultrasonic welding fabric`, `hot air welder tarpaulin`, `Heißluftschweißgerät`, `PVC tarpaulin welding`, `surgical gown seams` nothing; the Bundesarchiv Plastolit HF-welding shots are 800 px.
- `tufted`: `Deep Pile Carpet Up Close.jpg` carried a camera date stamp in the corner and was dropped; the Tuff Guys wall piece is the main, with `Tufting gun (TD-01).jpg` and `Tuftmachines Soest 1977.jpg`. `Deep Pile Carpet (4895451333).jpg` is fly-tipped carpet on a pavement; `Artisan Tufting a Tai Ping Carpet.jpg` is a dark 1950s print; `Rugs and carpets of Iran 05` does not say how it was made; the Moench machine files are 800 px; `tufted carpet backing`, `carpet backing latex`, `Tuftingpistole` nothing.

## Batch 63 restyle (etextile, byborre, dcf, seersucker, flyknit)

- `etextile`: `Gestickte Textile Sensorflächen.jpg` and `Conductive thread.jpg` added. The LilyPad set (`Arduino Lilypad LED circle.jpg`, `Lilypad Arduino with fading LEDs.jpg`, `Flexible Lilypad Arduino.jpg`) and the two E-Textile Swatch Exchange pieces are spares; `E-Textile Cardio LED extension.jpg` is a wrist of wires; `e-textile` on its own returns a water drop on polyester; `textile electrode`, `smart shirt ECG`, `heated jacket wire` nothing.
- `byborre`: still nothing of the cloth itself on Commons (`Byborre`, `knit jacquard double face`, `3D knit fabric texture`, `circular knit jacquard`, `knitted upholstery` all empty or 1910s directories). The 702 px double-knit diagram moved to second as structure; `Interlockjersey.jpg`, the plain double knit, is the main as analog.
- `dcf`: `Dyneema Composite Fabric`, `cuben fiber tent`, `DCF tarp`, `Dyneema tent`, `Dyneema backpack`, `Hyperlite Mountain Gear`, `ultralight backpack Dyneema` nothing; `cuben` is a Danish village and a GameCube; `Zpacks` is a bear canister; `Tarp Camp at Cherokee Flats` is 1600 px and the tarp is not identified. The gennaker clew stays alone.
- `seersucker`: `Seersucker01closeup.JPG` and `Seersucker Day 2024.jpg` (Congress) added. `Seersucker-sample2.jpg` is a flatbed scan of a suit, `Seersucker shirt.JPG` a shirt on a floor, `Pennsylvania Avenue Seersucker.jpg` a cyclist, all spares; `puckered fabric`, `Seersucker Stoff` nothing.
- `flyknit`: `New shoes (13519423543).jpg` (a Free Flyknit close) and `Adidas Ultra Boost 4 running shoes.jpeg` (Primeknit) added. `Nike flyknit one (8483993132).jpg` is the main's own Commons copy; `Nike React Infinity Run Flyknit 2.png` shows the React logo, not the knit; `Paar grijze damessneakers ... Nike` is a museum record shot; `Nike Kiss My Airs.jpg` is an advertisement; `Adidas Masculino FlyKnit` is a shop photo of a shoe that is not Flyknit; `Primeknit` is a football jersey; `knit sneaker upper close` nothing.

## Batch 64 restyle (surgmesh, pinatex, waffle, twill, tweed)

- `surgmesh`: `Hernia mesh 2.JPG` (a mesh on a stained drape) dropped for `2023-01-26-Herniennetz-3683.jpg` (white on black, with the maker's specification); the Rutkow two-part mesh and the light mesh with its plug added. `Hernia mesh 1.jpg` is a spare; `Heavy Mesh for Groin hernia repair.jpg` is 1128 px; `Sagital view of abdominal wall and mesh place.jpg` is a drawing; the intraoperative photos are intraoperative.
- `pinatex`: the farm drying line (1080 px) and a Bukidnon pineapple field added. `Making Piñatex, decorticating pineapple leaves.jpg` is 750 px; the Hijosa portrait is 640 px; `Dole Pineapple Harvesting.jpg` is 1024 px and a lorry; `decortication pineapple`, `Ananas Anam` nothing further.
- `waffle`: `Knitted Waffle fabric.jpg` added as the knitted analog. `Selbstbinder Pikee.jpg` is a piqué bow tie, a cousin not the thing; `waffle towel` is a Waffle House cheat sheet; `honeycomb weave fabric` is people called Huck; `Waffelgewebe` is beehives; `waffle weave towel`, `thermal underwear waffle`, `Waffelpikee` nothing.
- `twill`: `Twill weave.JPG` (the plain diagonal) and `Herringbone Twill .jpg` added. `Woolen diamond twill (cropped).jpg` and `Undyed denim cotton broken twill.jpg` are spares; `Twill 1-4` are a Swedish band on stage; `CAVALRY TWILL MDT` is a grey blur; `chino fabric close`, `serge fabric close` nothing.
- `tweed`: `Harris tweed loom.jpg` (Wojsyl, 2004) and `Donegal Tweed.JPG` added. `Harris Tweed Macro photography.jpg`, `Harristweed5.jpg`, the Sakko close-ups and `Tying Harris Tweed.jpg` (1024 px) are spares; `Harris Tweed Textiles, Carloway Mill` is a road sign; the Shawbost hits are lochs; the Hattersley domestic looms at Bradford and Queen Street are good spares for a loom card; `Lewis weaver tweed` nothing.

## Batch 65 restyle (satin, carbonfab, fibc, machinelace, firehose)

- `satin`: the Cleveland rank badge was 856 px wide and mostly embroidery, dropped; `Satin Ribbons.png` is the main, the Poly Haven crepe satin and the Gilon dress the extras. `Textile (England), 1890–1900 (CH 18454005)` is a printed cotton sateen, flat and matt; the Maria Feodorovna dress is black beadwork; `Satin bedding.jpg` is 856 px; `satin weave diagram` is a Qing robe; `pointe shoes satin` is 1823 fashion plates.
- `carbonfab`: `Carbon fabric yc 3k 200 twill.jpg` (the 1600 dpi scan) and `Ready to use carbon fiber sheet.jpg` added. `Carbon fabric yc 3k 240 twill.jpg` and `Carbon fibre weave.jpg` (the latter is `cfrp`) are spares; `AFP Prepreg.jpg` is tape spools; the SRT Viper roof is a finished part; `carbon fibre tow spool`, `Kohlefasergewebe`, `carbon fiber cloth roll` nothing.
- `fibc`: `BigBag mit kleinen Pflastersteinen.jpg` and `Bigbags im Wasser (fcm).jpg` added. `Hamburg, Speicherstadt, Pickhuben -- 2016 -- 2997.jpg` (a city bag on cobbles) and `Mit Sand gefüllte Bigbags.jpg` are good spares; `FIBC on trailer.JPG` is 1600 px; `Big bag.jpg` 890 px; the FEMA dike photos show the bags from the wrong side; `big bag` is handbags; `jumbo bag` is a Dutch supermarket. The stats line had the safety factors reversed (5:1 is single trip, 6:1 reusable) and is corrected.
- `machinelace`: the Calais Leavers machine and the Nottingham sample-book magnification added. `Musée de la dentelle de Caudry metier a dentelle leavers.jpg`, `NIM Leavers Plain Net Machine 2564.jpg`, `Métier Leavers désossé.jpg` and `NIM Barmen Lace Machine 2561.jpg` are spares; `Lace Its Origin and History Leavers's Lace Machine.png` is an engraving; the Dresden Spitzenmaschine photo is a shed; `Nottingham lace` is the Lace Market's buildings.
- `firehose`: the Ramstein charged line and the Boise drying lines added. `Fire Hose folding and manutention (4932722).jpg` (a rolled hose being stowed), `Cologne Germany Hose-Coil-01.jpg` and the hose-drying towers are spares; `Brandslange.jpg` is a cabinet; `Fire Fighting Appliances Gilbert 1969 Plate 13` is a Merryweather engine; `fire hose cross section`, `layflat hose`, `fire hose lining rubber` nothing.

## Batch 66 restyle (wiltoncarpet, fulledwool, waxcotton, crepe, knitmesh)

- `wiltoncarpet`: the geograph loom was 640 px and dropped; `Wilton Carpet Wilton Royal Workshops England mid-19th.jpg` is the main, the Oelsnitz Axminster loom of 1910 and the 1790 Axminster the extras. `Kidderminster carpet museum main gallery.JPG` (two looms, 8192 px), `Teppich-Museum Oelsnitz 23.jpg` and `Carpet MET DP299026.jpg` are spares; `Wilton - Carpet Factory` is a building; `Brintons` is a Norfolk village; `carpet loom gripper`, `Wilton carpet back`, `carpet loom wires` nothing.
- `fulledwool`: `Vadmal-Detail.jpg` (850 px, the magnification) and the Trentino Janker (1200 px) added. `Jagdhorn auf Loden 3.jpg` is the main's sibling; `Loden-Frey 9660.jpg` is a shopfront; the Walkmühle photos are buildings and the Brenna fulling mill a meadow; the NARA Melton prints are dark; `Lodenjacke` is Bismarck and fur fairs; `Trachtenjanker` is a footballer; `Vadmal-Jacke.jpg` is 778 px.
- `waxcotton`: `Barbour jacket 01.jpg` (the stud close) and the La Rochelle fishermen in PVC oilskins (analog) added. `Barbour jacket 02.jpg`, `A waxed cotton pouch.jpg` and the Guy Cotten ciré are spares; `Green Barbour Endurance jacket.jpg` is `dwrfinish`'s reject; `Barbour wax tin`, `rewaxing jacket`, `waxed cotton jacket close`, `tin cloth` nothing.
- `crepe`: the Rijksmuseum georgette mourning veil and the Clan crêpe tunic added. `Japon, zwart crêpe georgette ... 72488` and `Lichtgroene japon ... 69932` are museum dresses, spares; `Woman's Bonnet (Mourning) LACMA` is a silk crape bonnet, spare; `M0354 011120-006 1.jpg` is 993 px with no description; `Satin-back crepe closeup.jpg` 853 px; `crepe yarn twist`, `crinkled fabric close`, `Kreppbinde` nothing; `crepe bandage` is a Margiela jacket.
- `knitmesh`: still nothing beyond the demister pad: `knitted wire mesh` is a factory in Tapolca, `Hanging Nets ... knitted wire` is 957 px art, `Strickdraht` an engraving, `knitted metal mesh` a beaded purse, `wire mesh pad` a bustle, `coalescer` is astronomy, `EMI gasket`, `exhaust hanger mesh`, `Metallgestrick`, `catalytic converter mat` nothing. Text only.

## Batch 67 restyle (barkcloth, flock, aluminised, ikat, pvctarp)

- `barkcloth`: main kept; `Kapa beating (a0004769) - panoramio.jpg` (process) and the Hawaii State Art Museum beaters and anvil added. `Back cloth preparation from a fig tree in Uganda 04.jpg` is 1024 px and busy; `Natives making bark cloth near Kampala` is a posed 1900s print; `Man wearing traditional bark cloth in Busujju county.jpg` is a street scene; `Fiji, drappo masi kesa` and the ngatu are spares; `tapa beater` and `ike kuku` return Eugenia trees and chicken dinners.
- `flock`: main kept; `Флокирование на компьютерной мышке.JPG` (flocked mouse) and `Flock Paisley.JPG` (wallpaper) added. `Флокирование на текстиле.jpg` is a flock print on orange, near-duplicate of the main; `Flocking texture.png` is a 1057 px diagram, spare; `MHG ... Arbeitsfotos Tapete.jpg` is a restored 1800s flock wallpaper, spare; `flock print` and `flock fibre` are sheep; `flocking process` is a dam in Norwalk; `electrostatic flocking`, `Flockdruck` nothing.
- `aluminised`: main kept; `Aircraft Rescue Firefighting training.jpg` and `Fire fighters practice with spraying equipment, March 1981.jpg` added. `Firefighting exercise.jpg` is a spare (suits against flame); `Fire Proximity Suit (at Visakha Museum).jpg` is a dim mannequin; `Newtex Fire Entry Suit` is a dark vitrine; `aluminised fabric`, `aluminized suit foundry`, `Gießerei Schutzanzug`, `steelworks protective clothing` nothing; `aluminized gloves` is a space suit; the thermal blankets are a street scene and a flag installation.
- `ikat`: main kept; `Thread before dyeing Tenun Ikat Lombok.JPG` (bound warp) and `Cambodian weaving with ikat technique (cropped).jpg` (removing ties) added. `Kasuri detail 1.jpg`, `Oshima Tsumugi ... Kasuri.jpg`, `Adras (Ikat). 1990s`, `Detail from Sumba hinggi 2.JPG`, `Odisha Ikat`, `Loom to weave patola.jpg` and the Lombok warp shots are all usable spares; `ikat binding threads` is a Yemeni tiraz.
- `pvctarp`: Flickr main kept (the cracked, faded cloth is the point); `W2428-Semi Tautliner OuvertureLaterale 4576N8.jpg` (curtain open) and `Marquee tent with 4 peacks.jpg` (1024 px) added. `KühneNagelAuflieger.jpg` and `Planensattelauflieger.jpg` are clean curtainsiders but `Copyrighted free use`, left alone; `Mercedes Atego ... Plane blau.jpg` spare; `SC 196165` is a 1944 canvas repair; `DEGAN Gabin` is a charcoal pickup; `tarpaulin welding`, `Planenstoff`, `Zelt PVC Plane`, `truck curtain advertising` nothing; `lorry curtain` is Eddie Stobart.

## Batch 68 restyle (pleat, chambray, oxfordcloth, gingham, mrf)

- `pleat`: CSIRO Siroset pair kept as main; `Issey Miyake Rhythm Pleats series 1990.jpg` and `Delphos Mariano Fortuny 01.jpg` (gowns rolled for shipping) added. `Issey miyake, pleats please ... (hasselt)` is a dim museum shot; `Woven pleated fabric.jpg` is a 960 px Hungarian weave diagram, spare; the Dior ballgown and the pleated jumpsuit are fashion shots; `Pleated skirt with black opaque tights.jpg` is a model in a wood; `kilt pleats` is Kilt Rock on Skye; `sunray pleats` is Olivier and Leigh; `Plisseebrenner` nothing.
- `chambray`: main kept; `Chambray Macro (49852163717).jpg` (structure) and `Chambray fabric.jpg` added. `chambray shirt` returns cambric gowns; `David Biespiel denim shirt` is a portrait; `chambray blue shirt`, `camisa chambray` nothing.
- `oxfordcloth`: main kept; `Banana Republic Button-Down Shirt 1 2019-03-21.jpg` added, one extra only. `Camisade puño doble.jpg` is poplin by its own description; `Collar.agr.jpg` is 962 px and of unknown weave; `pinpoint oxford` is galaxies; `oxford shirting close`, `Oxford cloth button down shirt` nothing, the rest is the university.
- `gingham`: main kept; `Gingham teatowel.jpg` and the Oxford, Ohio portrait added. `Gingham pattern.jpg` is a flat digital swatch; `Colourful Madras Checks Fabric.jpg` is a good spare for a Madras card; `Apple cake ... 2.jpg` is a pie; `Karohemd` is three men; `gingham shirt` includes an AI rhinoceros.
- `mrf`: main kept; `MRF-Turm.jpg` and `Messung Ansprechverhalten MRF-Daempfer.png` (response chart, 1462 px) added. `MRF zwischen zwei Permanentmagneten.JPG` and `Magneto-rheological fluid.jpg` are spares; `MRF-Effekt.gif` and `MRF Kettenbildung.gif` are gifs; `Motor.jpg` is an Arduino; `MR damper` returns pianos and Porsches; `MagneRide`, `magnetorheological brake`, `Rheo knee`, `MRF Kupplung` nothing; ferrofluid is a different fluid and was left out.

## Batch 69 restyle (ferrofluid, vantablack, mxene, starlite, graphene)

- `ferrofluid`: main kept; `Феррожидкость в магнитном поле.jpg` (five micromagnets) and `Ferrofluid poles.jpg` added. `Ferrofluid large spikes.jpg` and `Ferrofluid spikes - (2).jpg` are spares, GFDL and CC BY; `ferrofluid seal`, `ferrofluid speaker`, `ferrofluid sculpture`, `ferrofluid art`, `ferrofluid clock` nothing.
- `vantablack`: main kept; `VANTAs (5974655875).jpg` (NIST arrays on silicon) and `Nanotube; Ultradark (5940479457).jpg` (1290 px micrograph) added. `Vantablack 01.JPG` is the main's sibling; `BMW G06 Vantablack at IAA 2019` is a spare; `Anish Kapoor Vantablack`, `carbon nanotube array SEM`, `Vantablack VBx2` nothing; `blackest black` is a rock festival; `Musou black` is a video game.
- `mxene`: `SEM of MXene.png` (817 px) kept as main, the only micrograph there is; `From MAX to MXenes, structure.jpg` and `Titanium aluminium carbide 312.jpg` (Ti3AlC2 powder) added. `Mxen Ti3C2O2 uvod.png` is a Czech-labelled layer diagram, spare; `MXene-ByYear-1.png` is a publication count; `MXene film`, `MXene clay`, `MXene supercapacitor` nothing; `Gogotsi` is a portrait.
- `starlite`: `Starlite sample.jpg` (1100 px) kept, the only photo of the stuff; `Round intumescent damper.jpg` added as analog. `Starlite Ward` is Newfoundland; `Starlite` otherwise is a cinema, an archer, a ship and an operation; `blowtorch egg`, `Starlite heat`, `intumescent char`, `intumescent paint test` nothing; `Tomorrow's World TC7.jpg` is a studio at 850 px.
- `graphene`: main swapped from the grey powder to `Carbon atoms in graphene.jpg` (868 px AFM, small but it is the lattice itself); `Graphene Scotch Tape.jpg` (1600 px, the tape is small in frame) added as process, the old powder moved to `graphene3`. `Graphen.jpg` is a render; `Mechanical exfoliation of graphite - Czech diagram.png` is good but Czech-labelled; `Graphene flakes.JPG` and `Graphite Pencil.JPG` are 1024 px SEMs, spares; `Nobel Prize 2010 ... 8009cr.jpg` is Geim and Novoselov at the press conference, spare; `graphene aerogel` is the ISS; `CVD graphene copper`, `graphene TEM` nothing.

## Batch 70 restyle (cntyarn, aerographite, ybco, electrochromic, vo2)

- `cntyarn`: main kept; `CSIRO ScienceImage 1074` (forest to yarn, wide) and `Buckypapers (5940484589).jpg` (922 px NIST SEM) added. CSIRO 942, 990 and 1087 are the same series, spares; `7519 A4.jpg` is a portrait of a researcher; `Süsiniknanotorufiiber.jpg` is an Estonian CNT fibre shot, spare; `nanotube spinning`, `Nanocomp` nothing; `CNT fiber` is a seahorse.
- `aerographite`: the 1024 px TUHH/CAU network image kept, the only one; `Family of zinc oxide microtetrapods.jpg` (the template) and `Aerogel nasa.jpg` (898 px, analog) added; `Aerogel hand.jpg` was the first choice but is already `aerogel`'s photo; `Kiel aerographite`, `ZnO tetrapod SEM` nothing; `Aerographen` is a jug.
- `ybco`: main kept; `YBCO superconductor.JPG` (the pellet) and `High-Temperature Superconducting Cables (5884863158).jpg` (NIST cable section) added. `Levitation superconductivity.JPG`, `Magnet levitating on top of superconductor cooled by liquid nitrogen.jpg`, `Quantum locking.jpg` and the Bobroff hula-hoop track are spares; `YBCO-xtal-3D-SF.png` is a 994 px structure render, spare; `YBCO vortices.jpg` is 787 px; `YBCO tape`, `HTS tape`, `second generation HTS`, `superconducting maglev track` nothing; `REBCO` is the Urals.
- `electrochromic`: Flickr 787 main kept; `Airbus A350 dimmable window dimmed May 2025.jpg` and `Gentex Mirror.jpg` (1280 px) added. `ANA Boeing 787-8 Dreamliner electrochromic window.jpg` and the A350 undimmed twin are spares; `Bare bones of an electrochromic devices.png` is a 1159 px stack diagram, spare; `Zipair ... economy interior` shows the cabin; `SageGlass` is sage and stained glass; `electrochromic facade`, `elektrochrom` nothing.
- `vo2`: main kept; `VO2 structure.png` and `Microbolometer internals.jpg` added. `VO2-MI.png` is an orbital diagram, spare; `VO2-SiO2 transmittance.png` is a 952 px spectrum, spare; `VO2.jpg` is a book page; `VO2 max Toulouse.jpg` is a running shoe; `thermochromic window`, `VO2 nanobeam`, `vanadium dioxide film` nothing; `metal insulator transition` is Tübingen.

## Batch 71 restyle (qdot, metamaterial, acousticmeta, selfhealpoly, dea)

- `qdot`: main swapped to `CdSe Quantum Dots.jpg` (Rice, the vials labelled 2.0 to 4.2 nm); the old vials moved to `qdot2`; `Samsung QLED TV 8K` added. `Quantum dots 3.jpg` (a gloved hand) and `Lab Mol Colloidal quantum dots 01.jpg` (cuvettes) are spares; `Qdot synthesis.jpg` is a scheme; `Nanotechnology; Quantum Dots (5940486805).jpg` is 893 px; `quantum dot TEM` nothing; `Qdot gr.jpg` is 1000 by 446.
- `metamaterial`: main kept; `Square circ metastruc.png` (gold split ring under AFM) and `Metasurface (5941035620).jpg` (NIST fluid-tunable) added. `Broadband electromagnetic cloak of cylindrical objects.jpg` is a spare; `Copper TLGR.jpg` and `Two-loop one-gap LGR.jpg` are loop-gap resonators for EPR, not metamaterials; `Quantum metamaterial with 24 artificial atoms.png` is a qubit chip; `Superconducting Metamaterial Chip` renders; `metamaterial absorber`, `Metamaterial Split-ring` nothing; `frequency selective surface` is a football shirt and a ship.
- `acousticmeta`: Sempere sculpture kept; `Bass Trap.jpg` (1280 px) added as analog. The Duke ONR photos (`160413-N-PO203-055`, `Steve Cummer ...`) are a meeting room; `Schallabsorber KRM.jpg` (slab-track absorbers) is a 1000 px spare; `acoustic metasurface`, `Helmholtz resonator`, `perforated acoustic panel`, `noise barrier resonator`, `Helmholtz resonator array` nothing; `sonic crystal` is a drive-in and a protein.
- `selfhealpoly`: the supramolecular rubber figure kept; `Zelfhelend beton-1.jpg` added as analog; `Basilisk self-healing concrete exhibit at science museum.jpg` was the first choice but is already `selfhealconcrete`'s photo. `Self-Healing Effects-Al-Ta-Polymer-E-Caps2.jpg` is a capacitor diagram, another meaning; `Healing process.jpg` is a boy with a dog; `microcapsule self-healing`, `vitrimer`, `selbstheilend Polymer`, `Selbstheilung Kunststoff` nothing; `self-healing coating` is a mineral.
- `dea`: pneumatic colonoscopy robot kept as related main; `Artificial Muscle.png` (1115 px cartoon) and `BionicHandlingAssistant.tif` (Festo) added. `Soft Robots and Bionic Arms (10720196675).jpg` (Otherlab, mostly room), `Inflatable Robotic Arm.jpg` and the fish robot are more pneumatics, spares; `EAP-example2.png` is a gripper cartoon; `dielectric elastomer`, `HASEL actuator`, `soft robot gripper` nothing; no photograph of a real DEA on Commons.

## Batch 72 restyle (lce, erf, oobleck, thermoelectric, magnetocaloric)

- `lce`: the 827 px Wikipedia hinge figure kept, the only LCE image there is; `Liquid crystal texture.jpg` added as related; `Nematic liquid crystal.jpg` was the first choice but is already `nematiclc`'s photo; `Liquid crystal textures.jpg` is a spare; `liquid crystal elastomer actuator`, `nematic elastomer`, `Flüssigkristallelastomer` nothing; `4D printing` is soy resin and grippers at 739 px.
- `erf`: the 640 px MRF crop replaced by `Magneto-rheological fluid.jpg` (2778 px), still an analog; `MRF zwischen zwei Permanentmagneten.JPG` is a spare. `electrorheological fluid`, `electrorheological`, `elektrorheologisch`, `electrorheological damper`, `electro-rheological` all nothing; `ER fluid` is a Boeing and a Dürer; `ER clutch` is Citroëns. No photograph of an ER fluid on Commons.
- `oobleck`: Corn speaker (1024 px) kept; `Hand in a non-newtonian fluid 05.jpg` and `Types of Non-Newtonian Fluids.png` added. The other `Hand in a non-newtonian fluid` frames are spares; `Corn Starch mixture.jpg` and `Cornstarch mixed with water.jpg` are cooking; `Manuş Baba at Ooze Venue` is a concert; `walking on cornstarch`, `cornstarch pool`, `shear thickening fluid armor` nothing; `dilatant` is Silly Putty and birds.
- `thermoelectric`: main kept; `Монокристалл теллурида висмута.jpg` (single crystal) and `New Horizon's Radioisotope Thermoelectric Generator (nh-1280).jpg` added. `Peltierelement 16x16.jpg` (1373 px) and `Peltier dehumidifier Maxton.jpg` (1048 px) are spares; `Voyager's RTG (PIA25782).jpg` has no licence field; `Peltierelement (ro).png` is Romanian-labelled; `Seebeck` is a village; `thermoelectric cooler` is a Belgian bus company; `TEC1-12706`, `Peltier cooler heatsink` nothing.
- `magnetocaloric`: Flickr gadolinium kept; `Gadolinium-2.jpg` (1144 px, cast in acrylic) and `Refrigeration (5888007815).jpg` (NIST cycle diagram) added; `Gadolinium (Element - 64).jpg` turned out to be the same James St. John photo as the Flickr main, which the shared check cannot see across sources; `Magnetic cooling effect (MCE) technologies` is a student with a chamber; `magnetic refrigerator` is fridge magnets; `Gd5Si2Ge2`, `Magnetkühlung`, `magnetic refrigerator prototype`, `Ames Laboratory magnetic refrigerator` nothing; `Adiabatic-demagnitization.jpg` is a spin diagram, spare.

## Batch 73 restyle (zeolite, mof, metalhydride, pcm, vip)

- `zeolite`: Flickr crystals kept; `Molecular sieve 4A crop.jpg` (beads) and `Framework structure of the FAU-type zeolite.png` added. `Muséum de Nantes - 133 - Zéolite stilbite`, `Stilbite NHMLA.png`, `Natroliteinde1.jpg` and `Clinoptilolite-9176-(Tomeik).jpg` are mineral spares; `Home oxygen concentrator.jpg` (1224 px) a spare for the use; `N-pentane desorption ... NaX` is a chart; `zeolite catalyst` is two inventors; `molecular sieve beads`, `zeolite pellets` thin.
- `mof`: the activated-carbon analog replaced by `MOF(1).jpg` (blue powder, 4096 px); `CSIRO ScienceImage 11684` (SEM cubes) and `MOF-5 Crystal Structure.png` added. `Sample of UiO-66.jpg` (white powder) and `Metal-Organic Framework (6898958430).jpg` (NIST pore drawing) are spares; `HKUST-1 activated.png` is Arabic-captioned; `ZIF-8` is caricatures; `NU-1000` is nudes; `MOF water harvesting` nothing.
- `metalhydride`: canisters kept; `Titanium hydride TiH2.jpg` (powder) and the eneloop charger added. `NiMH various.jpg` is 800 px; `Metal Hydride for Hydrogen Storage-Ovonic.jpg` is 966 px, spare; `Linde-Wasserstofftank.JPG` is liquid and 350-bar tanks, a possible analog; `LaNi5` is a hospital in Córdoba; `lanthanum nickel hydride`, `Type 212 submarine fuel cell`, `hydrogen storage alloy powder` nothing.
- `pcm`: wax main kept; `Kristali Natrijum- acetata.jpg` (crystallising dishes) and `Ice packs, BKK, 2021-09-11 (02).jpg` added. `Kristalizacija.jpg` is the same dishes; `Glaubersalz (Decahydrat).jpg` a spare; `Phase Change Material graph.webp` is 800 px and webp; `Handwaermer11.jpg` is an iron-oxidation warmer, not a PCM; `Gold Hand Warmers` are Korean coal warmers; `PCM plasterboard`, `paraffin wax phase change`, `phase change wallboard`, `hand warmer sodium acetate` nothing.
- `vip`: `Va-Q-vip 2.jpg` (827 px) kept; `Sio2 130m2 per gram under blue book 1600dpi.jpg` (fumed silica) and `Dewar Flask.jpg` (analog) added. `Va-Q-pur.jpg` is a sibling at 827 px; `Vacuum flask diagram.png` is the 1907 patent, spare; `vacuum insulation panel` otherwise returns a satellite and a car; `VIP insulation` is Chryslers; `Vakuumdämmung`, `vacuum insulated glazing`, `vacuum panel fridge` nothing.

## Batch 74 restyle (getter, strontiumal, tritium, slips, tio2photo)

- `getter`: main kept; `Tube-getter hg.jpg` (broken KT88, white getter) and `Tubegetter ATG12 80.jpg` (barium getter channel) added. `PL504 broken getter.jpg` is a spare; `Opachki dead vacuum luminescent display` shows the white spot on a VFD, spare; `Getter diagram.png` is 942 px; `Ion pump.jpg` a possible analog; `getter flash` is camera flashes; `getter pump`, `getter ring`, `Röhre Getter` are noise; `Getterspiegel`, `Elektronenröhre Getter` nothing.
- `strontiumal`: exit sign kept; `Phosphorescent.jpg` (powder in three lights, 1320 px) and the LUMI bracelet added. `Photoluminescent exit sign in in Russia (01).jpg` is a spare; `Phosphorescent pigment calcium sulfide and silicate` is other phosphors; `Undark luminous paint.jpg` and the zeppelin altimeter are radium, a possible history pair; `glow in the dark` is dice, a rose and condoms; `Superluminova` is a Rolex; `Leuchtpigment`, `photoluminescent tape` nothing.
- `tritium`: glow ring kept; `Tritium-exit-sign.jpg` and `DC3026A-SC-BK night.jpg` (watch day and night) added. `Gaseous tritium light source.jpg`, `Tritium compare.jpg` (two vials in acrylic), `Glowing keychain traser.jpg` and `Handgun Tritium Night Sights.png` are spares; `Tritium-watch.jpg` is 768 px; `Traser watch`, `tritium gun sight` nothing.
- `slips`: the superhydrophobic droplet kept as related main, no SLIPS photo exists; `Nepenthes truncata dark peristome.jpg` and `Nepenthes rafflesiana ant.jpg` added. `Lotus-Effekt (Droplet on Leaf)` and `Superhydrophobic surface.JPG` are more air-cushion analogs; `SLIPS` is neckties and bamboo; `slippery liquid infused porous surface`, `liquid infused surface`, `LiquiGlide`, `omniphobic` nothing.
- `tio2photo`: powder kept; `Chiesa di Dio Padre Misericordioso - Roma.jpg` (Meier's church) and `Anatase Oisans.jpg` added. The Giuseppe Boni church photos carry a copyright sign in the filename, left alone; `Clustered titanium oxide nanoparticles on stainless steel` is an interference-colour micrograph, spare; `Photocatalytic mineralisation.png` is a 1249 by 476 scheme; `self-cleaning glass` is window cleaners; `Pilkington Activ` is factories; `photocatalytic concrete`, `photocatalyst air purifier` nothing.

## Batch 75 restyle (electret, nacre, bamboo, balsa, lignumvitae)

- `electret`: MKE3 capsules kept; `Cross section of an electret microphone element.jpg` and `N95mask.jpg` (1280 px) added. The Sessler and West patent pages are a spare; `Electret condenser microphone capsules.jpg` is 829 px; `MicrophoneElectret2.jpg` 947 px; `electret filter`, `melt-blown filter`, `microphone capsule PCB` nothing; `FFP2 mask` is discarded masks in gutters.
- `nacre`: the Cleveland ewer kept as main; the old 640 px `AbaloneInside.jpg` replaced by `Haliotis rufescens (red abalone) ... 4 (23833071989).jpg` (3149 px); `Perlmutt-Struktur.jpg` (1280 px SEM of the tile stacks) added. `Aragonite layers in a blue mussel shell.jpg` is another SEM, spare; `Haliotis iris shell.jpg` is another interior, spare; `Nacre sticks.JPG` (inlay blanks) and `Incrusteurs découpant` (workshop print) are spares; `Bruchfläche eines Perlmuttstücks.JPG` is 766 px; `pearl cross section` is a Toyota.
- `bamboo`: the carved brush holder replaced by `Bamboo culms and nodes, Baltimore County, Maryland.jpg`; the Chiang Mai scaffolding and `Bamboo fiber microscope.jpg` added. `Bamboo scaffolding in Shanghai in 1988.jpg`, `Phyllostachys edulis 04.jpg` (grove) and `Bamboo Flooring Cross Section.jpg` are spares; the Edison bamboo-fibre photograph is a possible history extra; `bamboo culm cross section`, `Bambus Querschnitt` nothing.
- `balsa`: Flickr grain kept; the Seniorita model aircraft and `Kon-Tiki raft, side view.jpg` added. `Balsa Wood Texture.jpg` is a near twin of the main; `Ochroma pyramidale 4zz.jpg` (leaves) and `Balsa wood model Bridge.jpg` are spares; `balsa wind turbine blade`, `sandwich panel balsa`, `balsa core` nothing (balsa is a ferry in Portuguese).
- `lignumvitae`: mallet kept (846 px wide but tall and sharp); `Pokhouten lager windmolen.jpg` (windmill bearing) and `Bakaut.jpg` (heartwood) added. `Mortar, Lignum Vitae 18th century Wellcome L0007473.jpg` and `BulnesiaSarmientoi wood.jpg` (the Argentine substitute) are spares; `Vitex lignum-vitae` is a different tree; `Guajakholz` is syphilis prints; `stern tube bearing` is a HAER drawing; `lignum vitae sheave`, `lawn bowls wood` nothing useful.

## Batch 76 restyle (whiteoak, spruce, cork, vegleather, bone)

- `whiteoak`: Flickr staves kept; `Verthyllung Quercus petraea.jpg` (SEM of tyloses, sessile oak) and `Whisky casks at Dallas Dhu.jpg` added. `Cooperage wood to make wine barrels.jpg`, `Constructing an oak wine barrel at French cooperage.jpg` (1280 px) and `Woody Dicot Stem Cross Section Quercus Wood 40x` are spares; `Weißeiche Holz.JPG` is a veneer sheet; `white oak` is Texan towns; `quartersawn oak`, `oak tyloses SEM` nothing.
- `spruce`: violin plates kept; `Knight piano soundboard.jpg` and `Norway spruce (Picea abies) trunk cross section.png` added. `Haselfichte als Gitarrendecke.jpg` (hazel-spruce guitar top) and `SoundboardBracesRibs.jpg` (1600 px) are spares; `Wood picea abies (horiz).jpg` is a plank; `Val di Fiemme spruce`, `spruce quartersawn` nothing; `Klangholz` is claves; `resonance wood` is guitar blanks.
- `cork`: Flickr bark kept with the harvested forest; `Robert Hooke, Micrographia, cork. Wellcome M0010579.jpg` added. `3. Portion of a cork bark under the optical microscope.tif` (1599 px) is the modern view, spare; `Rolhas de Cortiça Natural` (stoppers), `Stacked cork oak bark, Ponte de Sor` and `Cork oak, trunk with bark detail.jpg` are spares; `Guarnizione sughero.jpg` is a head gasket; `cork planks` and `cork flooring` are the city.
- `vegleather`: Fes hides kept; `Leather tankard by Eugene Pik 18.jpg` and `Peeling hemlock bark for tanning.jpg` added. `Tannery pits.jpg` (Nigerian pits) and `Chouara Tannery, Fes (8947682350).jpg` are spares; `Brooks leather saddle B67 aged.jpg` is a logo close; the NARA bark-mill photos are 9886 px and dark; `Lohgerberei` is museums; `leather wet forming` is sports cars.
- `bone`: the Cleveland relic replaced by `Femur - detail of diaphysis cross section.jpg`; `Bovine Bone Sample and 430 times Magnification.jpg` (1063 px) and `Bone knife handle MET DP121087.jpg` added. `Bone (26 2 21) Human bone cross-section.jpg` (Reischig micrograph) is a spare; `Bone-cross-section.png` and the Smart-Servier osteons are drawings; `BLW Bone China Chocolate Cup.jpg` a spare for the use; `trabecular bone` is all drawings; `bone microstructure SEM`, `Knochen Querschnitt` nothing.

## Batch 77 restyle (antler, horn, baleen, amber, shellac)

- `antler`: roe antler kept; `Shed antlers of a red deer.jpg` (seven years of heads, Kassel) and the York Viking antler blanks added. `The skeletal remains of a stag's antlers and cross-sections Wellcome V0023185ER.jpg` is a coloured etching with sections, spare; `A Mesolithic antler pick ... (FindID 531109).jpg` and `Antler Horn Handled Carving Knife and Fork.jpg` are spares; `Velvet-antler-slices.JPG` is 1217 px; `Cut antler (FindID 263586).jpg` is 1647 px; `Geweih Querschnitt` nothing; `Hirschhorn Griff` is a grave.
- `horn`: the Lalique comb (639 px) replaced by `Cow horn.jpg`; `Horn hair comb, Ludlow Museum - DSCF2042.JPG` and Cooke's 1833 horn lantern drawing added. `Icelandic horn spoon.JPG`, `Powder Horn MET 38.93` and `Comb made of Buffalo Horn.jpg` (4032 by 1126) are spares; `Dolores Haupt, Horn Lantern` is a watercolour; `Craftsmen working on horn, Sukaraja ... 1953` is 1457 px with an Attribution-only licence; `Hornverarbeitung`, `horn pressing`, `horn pane` nothing; `horn cross section` is a Dartmoor cross.
- `baleen`: gray whale plates kept; `Humpback Whale Baleen Section (52543964595).jpg` and `WhaleboneCorsetStay.jpg` (1398 px, a broken stay) added. `Baleen hg.jpg` and `Baleen plate - Ulster Museum.JPG` are spares; `Umbrella (AM 1945.28-2).jpg` has whalebone ribs but the card crop shows only the handle; `Corset MET DT200606.jpg` is a corset without a visible stay; `Man holding whale baleen, ca 1918` is 700 px; `Barten` is a family; `baleen busk` nothing.
- `amber`: the Cleveland statuette (900 px) replaced by `02024 1039 Large amber nuggets from a mine in Sambia.jpg`; `Amber2.jpg` (ant inclusion) and `Tumble-polished Baltic amber 1.jpg` added. `Chiapas amber containing insects.jpg`, `Insect in Dominican Amber.jpg`, `Palanga Amber Museum - Inclusions.jpg` and `Baltic Amber 2,9 kg.jpg` are spares; `A piece of raw Baltic amber 2.jpg` is 1062 px; `Bernstein roh` nothing; `Bursztyn` is a town and a grave; `amber room` is the room.
- `shellac`: flakes kept; `Kerria-lacca.jpg` (lac on the branch) and the Soviet record player added. `Shellac.JPG` (two grades) and `Alcohol lamp and shellac.jpg` (molten, as adhesive) are spares; `Lac insects-1-bsi-yercaud-salem-India.jpg` is leaves; `Lac Bangle Making.jpg` and `Lac as a natural dye.jpg` are the other lac trades, spares; `French polish`, `Schellackpolitur` are Poles and the Patrouille de France; `Restauratorin-bei-der-Arbeit.JPG` is 900 px.

# Nitpicks — the imperfection list, fixed one by one

*A running audit of small wrongs on the portal: what is off, why it is off, and the fix.
Checked off as each is done. Started 2026-10-27.*

## Organisation

- [x] **1. Non-material cards interleave with materials.** Plates, papers and the library
  render in the one grid, so under *all* and under every workshop or theme filter they scatter
  among the materials — and the three sorts (added, newest, a–z) spread them differently each
  time. **Fix:** the grid shows materials; the plates, papers and library collect in a labelled
  *reference* band at the end of whatever is on screen. The shelf buttons still isolate one kind.

## Correctness

- [x] **2. The red "picked" outline never clears.** `goTo` adds `.picked` to the card it jumps
  to and nothing removes it, so every jump from the week pick or a plate's *explains* link leaves
  another card ringed in red. **Fix:** clear the previous pick before marking the new one.

- [x] **3. The figure renderer leaks iron.** `figures.js` says it knows nothing about iron, yet
  the field-diagram readout hard-codes "the temperature and carbon under the cursor". On any
  diagram that is not the iron–carbon one that sentence is simply wrong. **Fix:** build the note
  from the axis names, so it reads true for whatever the plate plots.

- [x] **4. The render test skips the library.** `tools/render.js` loads every data file except
  `library.js`, so the 19 library cards are never exercised and the filter-count check silently
  ignores them. `tools/check.js` loads it; the two disagree. **Fix:** load it in the harness and
  count it in the expectation.

## Polish

- [x] **5. The count line is noisy on a shelf.** On the library shelf it reads "0 of 539
  materials, 19 of 19 in the library" — the materials clause says nothing there. **Fix:** lead
  with the collection when the view is a shelf.

- [x] **6. The shelf buttons sit under the wrong label.** "across the workshops:" heads both the
  themes and the shelf buttons (the plates / the papers / the library), but a shelf is a
  collection, not a cross-workshop theme. **Fix:** give the shelves their own short label.

## Reach

- [x] **7. One picture per card, and 257 of them are stand-ins.** 257 of the 539 cards show a
  product, a process, a relative or a similar example rather than the material itself, and many
  materials have a second genuinely informative view — the raw form beside the finished part, the
  structure beside the use. There is no way to show more than one. **Fix:** a gallery capability
  (more than one credited image per card, paged in the lightbox) and a verified pilot to prove it.

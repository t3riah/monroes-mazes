# Monromi's Mazes

Single-file GitHub Pages site. Live at https://mazes.no13thfloor.org/

Sacred-geometry maze explorer. Pick a tier (9x9, 15x15, 21x21, 31x31) and a
theme (cyberpunk, dungeon, synthwave, zen), then guide Monromi through the
maze: gather 3 physics constants and the Metatron key, then reach the
gateway to restore cosmic harmony. The timer counts up; finishing under 15
seconds earns the Quantum Explorer badge. Badges persist in localStorage
(`monromi_mazes_badges`). Lore cards dealt to the Codex deck are in-memory
only and do not survive a reload. The game includes a Primer, a Cosmic Hub,
and interactive labs (oscilloscope, quantum double-slit, sacred-geometry
canvas).

`index.html` is the whole game (Tailwind compiled and inlined, no CDN).
`CNAME` sets the custom domain. `.nojekyll` keeps Pages from running Jekyll.

## Nov 8, 2026: v4 (Louie's replacement file)
Louie sent a new version that replaces v3.1 wholesale. It is a different
design, not an update of v3: no entropy countdown (timer counts up), no
push-block sockets, tiers back to 9/15/21/31, four themes, expanded labs.
Published as sent, with Tailwind inlined and small fixes bundled: the key
now spawns on the nearest open cell to the maze center (as sent it sat
inside a wall in about half of Tier 1 and Tier 3 games, making them
unwinnable; 30 seeds per tier now 30/30 winnable); raw LaTeX literals
replaced with real glyphs; the canvas is sized at load so the start card
no longer clips; header and modal buttons are at least 44px tall; the deck
drawer is hidden on phones; stray prompt text trailing after `</html>` in
the sent file (it rendered at the bottom of the page) was removed.
## Nov 8, 2026: v4.1 (Primer fix + block puzzles + touch controls)

Primer was broken as sent: `openPrimer()` referenced a `modal-primer` that
did not exist in the file, so clicking Primer threw a null error and nothing
opened. The Labs and Deck buttons were dead the same way (`modal-codex` and
`modal-deck` were missing too; the Codex tab panels sat orphaned in the page
with no modal around them). All three modals were restored: a What-Is Primer
guide (Phi, c, Planck, how to play), the Harmonic Codex & Labs modal (the
existing quantum/geometry/theory tabs wrapped in a modal with tab buttons;
Labs opens on the Quantum tab), and the Codex Deck modal. A leftover
`$1, 1, 2, 3, 5, 8, 13...$` LaTeX literal in the theory tab was stripped.

Block puzzles (Louie's prompt: move blocks around a grid to free a certain
block or prize): the Metatron key is now sealed behind a sliding-block
puzzle. Stepping onto the key opens the Resonance Block Puzzle modal: free
the golden block by sliding the other blocks out of its way until it escapes
through the glowing exit on the right. Tap a block, then an arrow (or use
the arrow keys); Reset restores the starting layout; closing unsolved leaves
the key locked and the player can retry. The timer pauses while the puzzle
is open. Puzzles are built fresh every maze (4x4 on tiers 1-2, 5x5 on
tiers 3-4) with a deliberate gate blocker and verified by a BFS solver to a
3-10 move solution; 200 generated per size, 0 unsolvable, 0 trivial, and
generation takes ~1-7ms per maze. The key is drawn with a lock until solved.

Touch controls: a 64px D-pad below the maze (touch screens only, hidden on
desktop) with hold-to-repeat, plus swipe on the canvas (24px threshold).
Keyboard, D-pad, and swipe all route through the same `movePlayer`.

Also fixed while in the Hub: the tier grid only had Tier 1 and Tier 2, and
the Tier 2 button was unclosed and empty (its label was missing; the
Quantum Physics card sat inside the grid as a fifth child). All four tiers
are now selectable, and the Quantum card is its own section below the grid.

Still missing versus v3.1: the Codex deck is in-memory only and does not
persist across reloads (no `monromi_mazes_deck_v1` equivalent yet). The
v3.1 push-block sockets and entropy countdown are not in v4 by design; the
block puzzle above is v4's puzzle mechanic instead.
(keyboard only), deck does not persist across reloads. QA: full tier-1 win
replayed to REALM HARMONIZED, badges saved, themes switch, no errors, no
overflow at 390px, start card fits at 390px and at 1919x998.

## Nov 8, 2026: v3.1 (superseded by v4)
All v3 fixes shipped in commits ad9e2e3 and 23debe69: sockets always spawn
(one per block) on a straight, pushable line with the push position open
and reachable; the key always spawns on an open cell next to the exit;
every generated maze is proven winnable before play (push-BFS solver in
the game itself, regenerating up to 40 times); touch D-pad plus swipe;
LaTeX replaced with real glyphs; Tailwind inlined; Hub tier labels match
the real block/socket counts; deck drawer hidden on phones; alert()
replaced with a toast; time crystals cap at the tier start; the Codex deck
persists in localStorage (`monromi_mazes_deck_v1`); Labs oscilloscope
draws; header buttons 44px+. The v3.1 file is preserved in the repo
history (commit 23debe69).

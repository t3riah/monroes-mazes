# Monromi's Mazes

Single-file GitHub Pages site. Live at https://mazes.no13thfloor.org/

Push-block puzzle mazes with an entropy countdown timer, sacred-geometry lore
cards, and a collectible Codex deck. Tiers: 9x9 (60s), 13x13 (45s), 17x17
(35s), 21x21 (30s). Collect 3 Phi constants and the Metatron key to open the
portal.

`index.html` is the whole game (Tailwind compiled and inlined, no CDN).
`CNAME` sets the custom domain. `.nojekyll` keeps Pages from running Jekyll.

## Nov 8, 2026 fixes (v3.1)
All eight v3 findings fixed and verified: sockets now always spawn (one per
block) on a straight, pushable line with the push position open and reachable;
the key always spawns on an open cell next to the exit; every generated maze
is proven winnable before play (push-BFS solver in the game itself, plus an
end-state reachability check, regenerating up to 40 times); touch D-pad
(hold to repeat) plus swipe on the canvas; all LaTeX literals replaced with
real glyphs; Tailwind inlined (no CDN, works offline); Hub tier labels match
the real block/socket counts; the deck drawer is hidden on phones; the start
card fits short viewports (canvas capped by viewport height, overlay scrolls);
alert() replaced with an in-page toast and an inline timeout screen; time
crystals cap at the tier start time; the Codex deck persists in
localStorage (`monromi_mazes_deck_v1`) and cards show their quiz; the Labs
oscilloscope draws. Header buttons are at least 44px tall on phones.

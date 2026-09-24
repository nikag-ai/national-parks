# Premium UI audit and implementation

September 23, 2026. Research, approved visual study, and local implementation. The working site uses the new palette, typography, cards, guides and comparison styles. It has not been deployed.

## Assessment

The last update improved information density, but density was mistaken for polish. Squeezing search, filters and sorting into one phone row caused visible truncation. There are too many equally prominent treatments: gold badges, five-star rows, outlined pills, nested card borders, gradients, glow and thick rounded headings. The dark palette makes the interface feel like a dashboard rather than a place to discover landscapes. Changing a few colors will not resolve the inconsistent hierarchy.

The intended journey remains: choose a month, scan the best options, understand why each is suitable, then save, compare or plan. Preserve editorial scoring, seasonal fit, source-linked planning facts, recognizable park photographs, deep links and saved state.

## References inspected

- [Apple Mac](https://www.apple.com/mac/): visually inspected its opening and product navigation. Clear type hierarchy, quiet neutral surfaces, consistent alignment, and restrained action emphasis. Borrow the hierarchy and consistency, not the oversized promotional spacing: our user needs results quickly.
- [Airbnb Design stays](https://www.airbnb.com/stays/design): visually inspected its opening search/photography composition. Large recognizable imagery, controls with clear labels and sufficient width, limited accent color. Its marketing hero is not an appropriate direct template for our monthly results.
- [Four Seasons hotel finder](https://www.fourseasons.com/find_a_hotel_or_resort/): visually inspected navigation and category/header treatments. Restrained palette and deliberate typography support the brand. The tall category navigation and cookie overlay are examples not to copy for this task.
- [Apple Dark Mode guidance](https://developer.apple.com/design/human-interface-guidelines/dark-mode): foreground/background separation and readable contrast are essential. Our specific charcoal/forest palette is a design proposal, not a claim that Apple prescribes those colors.

These observations are a focused reference review, not exhaustive usability tests of the reference sites or proof of conversion gains.

## Priority findings

| Priority | Finding | Required change |
|---|---|---|
| P0 | Search and sort labels clipped on phones | Full-width search; filters and sort on a second row; test longest option at 320/360/390px and enlarged text. |
| P0 | More stays open after clicking outside | Outside click, Escape, focus leaving, and action selection dismiss it. Escape restores focus to the trigger. |
| P0 | Month bar has a separate white strip and clips its controls | Transparent parent surface, no clipping parent, sufficient internal padding. |
| P1 | Dark theme has blue/purple glow and competing gold/green accents | Neutral charcoal base, slightly raised surfaces, readable muted text, one forest-derived accent. Preserve unfiltered photographs. |
| P1 | Rounded bold headings and tiny dense metadata compete | One sans-serif family, regular/medium body weights, selective semibold titles; fewer uppercase labels; body copy 15–16px. |
| P1 | Every card element has its own badge/border | Let imagery and park names dominate. Combine suggested time and seasonal fit into one calm line. Keep score explicit and link its editorial method. |
| P1 | Card photography feels squeezed into a banner | Use consistent image proportions and deliberate focal positions. Keep recognizable landmarks. |
| P1 | UI styles override each other | Replace overlapping presentation rules with a scoped component system. Current style.css contains 264 lines with !important; app.js injects additional CSS. Do not build the final redesign by repeatedly appending overrides. |
| P2 | Comparison and detail views inherit dashboard styling | Carry the same typography, spacing and surface hierarchy through guides, sources, empty states, comparison and saved views. |

## Proposed design system

Editorial outdoor travel, with Apple-like clarity and travel-site photography. Light: warm off-white background, white controls, charcoal text, restrained forest green. Dark: #161a18 background, #202622 elevated surface, #f1f3ed text, #b3bdb5 secondary text, #b0d4b7 accent. Palette must still receive contrast checks in actual components before rollout.

Use a 4/8px spacing rhythm. Desktop outer gutters 32px with a bounded reading/grid width; phone gutters 20px. Cards use a photograph, park/state, editorial score, trip length/season, a useful reason, a planning constraint and quiet actions. Remove decorative card chrome. No marketing hero above the monthly results. Native controls remain acceptable when sized and styled coherently.

The proposed single-star numeric rating is a compact presentation of the same five-point editorial score. The user selected compact ★ 4.8 ratings. The score calculation and “best this month” sorting do not change.

## Work delivered in this audit

- Fixed search/sort layout, More dismissal behavior, and the month-bar surface/clipping in the existing app.
- Built `design/editorial-preview.html`, a separate three-park November study with light/dark switching and actual landmark images. Other controls are explicitly illustrative. Sample shortened reasons are draft copy, not replacements for canonical sourced content.
- Existing 13 content/navigation tests pass after the repairs. Outside-click dismissal and phone labels checked in browser. The prototype was visually checked at desktop and phone sizes in both themes.

## Implementation and acceptance

The approved styles live in `editorial.css` and are used by the generated park and month pages. Theme follows the device unless a visitor selects Light or Dark in More; Device clears the override. A pre-render script sets the theme before CSS loads.

Browser inspection covered 320 and 360px phones and 1366px desktop, light and dark lists, phone guides, desktop comparison, complete search and sort labels, and device theme persistence after reload. Fourteen automated content and navigation checks pass. Additional physical-phone and 200% zoom checks remain useful before deployment. Measure engagement after release; no uplift is claimed from visual judgment alone.

No production deployment was performed.

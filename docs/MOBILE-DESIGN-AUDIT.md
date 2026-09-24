# ParkFinder design audit

September 23, 2026. Audit of the local root application. No application changes made as part of this audit. Desktop remains a useful baseline; mobile needs a different information hierarchy, not merely smaller dimensions.

See also the [desktop audit](DESKTOP-DESIGN-AUDIT.md), which found the same delayed results hierarchy on laptop screens and additional tab-navigation and search-recovery issues. Its findings refine the earlier suggestion to keep desktop entirely unchanged.

## Product objective

Help someone choose a national park for a particular month, understand the tradeoffs, and retain or act on that choice. Engagement means useful decisions: a shortlist, comparison, shared plan, or visit to official planning guidance. More scrolling, modal opens, or time on site can also indicate friction. Distribution work follows product readiness.

## Verified observations

Browser viewport measurements on `/november`, at the top of the page:

| Element | 390 × 844 | 360 × 740 |
| --- | ---: | ---: |
| First park begins | 474 px (56% of screen) | 498 px (67%) |
| First park name begins | 711 px | 735 px |
| First card's Explore park action begins | 927 px | 951 px |

At 390px, the pre-results stack contains the 57px navigation bar, 82px heading, search, four navigation tabs, month label and carousel, a 73px results/sort section, methodology copy, and another selected-month chip. Its cumulative size is the problem. Reducing the logo header alone would leave most of the obstruction.

In the Big Bend detail view at 360 × 740, the image is 275px tall and the snapshot is approximately 193px. The reason to visit begins at viewport y=540; the official planning link is at y=1232, and the interactive month calendar at y=1295. This is a narrow, internally scrolling modal with substantial information ahead of the decision and action.

Source inspection also confirms:

- Suggested trip length currently filters for **at least** the selected number of days. This does not answer the likely question, “What fits the time I have?”
- Stars are explicitly editorial: 60% seasonal fit and 40% park experience. These weights and values are judgments, not validated visitor preferences.
- The card's seasonal reason is a single park-level string, not a separate explanation for every selected month. Some cards discuss another season under the current month's recommendation.
- Favorites are local to the browser. Sharing copies the current URL, without a saved shortlist or complete filter state.
- Opening details, changing the month inside a modal, and refreshing that modal after a favorite toggle all call `openModal`, which emits the same `park_modal_opened` event. Event totals therefore do not measure distinct initial detail opens.
- The prior analytics investigation did not establish a clean planning-success funnel. It is historical evidence, not a fresh analytics check for this audit.

## Prioritized findings

### P0: Put the answer before the controls

**Principle:** Visual hierarchy should follow the user's task. Progressive disclosure keeps secondary commands available without making everyone process them first.

Keep a compact brand bar with Saved and a menu. Replace the mobile marketing heading and separate month label with an explicit title such as “Best parks in November” and an obvious month-change control. Keep the month selection prominent because it is the product's defining input. Avoid a horizontally clipped month selector as the only way to understand the selected month.

Combine result count, filter entry, and current sort into one concise row. Keep Best this month as the default; put alternative sorts inside a menu. Offer search through a labeled Search control or alongside filters, rather than a permanent full-width row before discovery. Move Visited and Hidden into secondary navigation. Keep Saved available, but do not give empty collection states equal priority with discovery. Remove the duplicate month chip when the title and month selector already express it. Put the full rating explanation behind the nearby Editorial label.

**Design target, not a universal rule:** First result begins around 200–240px at common phone sizes. The first screen should contain one complete recommendation, including its reason and action, and ideally the start of a second. Preserve readable text and touch targets rather than achieving this by shrinking everything.

### P0: Make cards support comparison

**Principle:** Users should recognize differences without opening each park and remembering its details.

Preserve the landmark photography and stars. Use a shorter photo on mobile, approximately 140–160px, and a consistent order: park/state, editorial stars, one sentence explaining the selected month, suggested time, and the principal tradeoff. Show one clear View park action and a Save control. Reduce repeated descriptions and decorative pills before reducing type size.

Lead with a small, visibly grouped set of recommendations, then retain an obvious route to all results. Do not hide the complete catalog or force a questionnaire before showing value. Distinguish seasonal alternatives through useful evidence and tradeoffs, not invented precision or arbitrary “best for” badges.

For November, “Cooler-season desert exploring; suggested 3 days; remote access needs planning” is a more useful comparison structure than a general description of a park's scenery. Any specific operational claim still needs its source checked.

### P0: Improve the mobile detail sequence

**Principle:** Information order should match decision order: why this park, does it fit, what matters, what next?

Keep the existing desktop modal structure. On mobile, use a full-width detail page or full-screen panel with a clear Back control and preserved list position. Keep the shareable park route. Use a shorter landmark hero, then:

1. Park name, stars, selected month and suggested days.
2. Why this month, plus the important tradeoff.
3. Highlights and essential reservation/access facts.
4. Save park and Official planning actions.
5. Other months, detailed weather, rating method and sources.

An action row may remain visible if its space cost is modest and it does not obscure content. Keep sources discoverable near claims, with detailed provenance expandable. Do not remove useful styling or replace the guide with disclaimers.

### P1: Make filters answer real planning questions

**Principle:** Controls should match the user's language and constraints, not the dataset's structure.

Prioritize month, region and available **days in the park**. Replace the lower-bound trip-length slider with an understandable time preference, such as a short visit or a few days, with flexible suggestions rather than implying that a shorter visit is impossible. Test the wording before selecting exact buckets.

Add interests only when coverage is reliable. “NPS lists night-sky activities” currently filters source coverage as much as traveler suitability, so it should not occupy scarce primary space. Do not bring back unsupported travel-time estimates. Origin-based route planning is a separate data capability, not a prerequisite for a better discovery screen.

### P1: Make the rating earn its prominence

**Principle:** A strong visual signal should have an understandable basis and a scope users can interpret.

Retain stars and Best this month sorting. Label them Editorial, with a short explanation on demand. A 0.2-star difference is a consequence of the chosen weighting, not established evidence that one park will suit someone better. Review the monthly ordering against concrete trip scenarios, especially unexpected comparisons. Explain the selected month specifically, and expose the tradeoff that might reverse the recommendation for a particular traveler.

Do not label scores as online reviews or consensus until an actual sourced review dataset supports that claim. Allow equal scores without presenting their alphabetical order as a meaningful rank.

### P1: Give discovery a useful outcome

**Principle:** A browsing experience should make progress visible and preserve the work a user has done.

Improve Saved into a shortlist for the selected month. A small comparison should use the same fields shown on cards: seasonal reason, days, signature experiences and planning constraint. On mobile, show consistent stacked comparisons rather than a wide table requiring horizontal scrolling. Allow a travel partner to open the same shortlist and month without an account. Make local-only saving explicit until portable saving exists.

This is a plausible sharing mechanism because it solves a real coordination problem. It is not evidence of a viral growth loop. Do not introduce sign-up gates, pop-ups, newsletters or social prompts before the visitor gets value.

### P1: Verify interaction quality and speed

**Principle:** Legibility, predictable navigation and responsiveness are functional design requirements.

Check 360px and 390px layouts, both themes, enlarged text, keyboard focus and screen-reader naming. Aim for comfortable touch targets around 44px as a design target; avoid squeezing several small controls into a row. Preserve selection and list position when returning from a park. Show empty states that explain how to recover. Keep the chosen month unmistakable after navigation.

Keep lightweight card images and full-resolution detail images. Measure real mobile performance; a localhost screenshot is not a performance assessment. Use Core Web Vitals field targets at the 75th percentile: LCP ≤2.5s, INP ≤200ms and CLS ≤0.1. No field performance result is claimed by this audit.

## Proposed mobile hierarchy

| Order | Visible content | Approximate space budget |
| --- | --- | ---: |
| 1 | ParkFinder · Saved · menu | 48–52px |
| 2 | Best parks in November · change month | 60–76px |
| 3 | Result count · Search/filters · Best this month | 48–60px |
| 4 | First recommendation | Starts around 200–240px with spacing |
| 5 | More recommendations | First card complete within the initial screen where feasible |

These are prototype budgets to validate, not a specification to force across every font size or phone. Useful content takes precedence over an arbitrary fold percentage.

## Readiness and measurement

Implement in two rounds: first the mobile hierarchy, card density and detail flow; then shortlist/comparison and useful sharing. Keep desktop stable unless an observed issue warrants changing it. This sequence avoids another broad redesign before validating the main problem.

Before outreach, observe a small round with approximately five people actually considering a trip. Ask each to select a month, compare two parks, explain their choice and save or share it. Record misunderstandings and task completion. This is diagnostic usability work, not statistically conclusive evidence of conversion lift.

Instrument deliberate actions separately: month selected, first detail opened, park added to shortlist, park removed, comparison opened, share completed and official planning clicked. Opening a share sheet is an intent event; a completed share or successful clipboard write is a different event. Deduplicate session-level outcomes and separate internal testing traffic. Preserve campaign attribution.

Track useful outcomes per eligible session, segmented by mobile/desktop and acquisition source. Treat detail opens as intermediate behavior, and shortlist/share/official-planning actions as intent proxies rather than proof of a booked trip. Longer sessions are not automatically better. Returns should be assessed over a travel-planning timescale rather than assuming daily use. With limited usable traffic, prioritize usability observations and cautious before/after comparison over a premature A/B test.

Release gates: initial screen conveys the month and a usable recommendation; visitors can explain the rating; comparisons are understandable; saving/sharing preserves context; navigation works on small phones; source-backed planning facts remain intact; real performance and outcome tracking are in place. These are product readiness gates, not a reason to promise a particular growth percentage.

## References

- [Nielsen Norman Group: usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) for hierarchy, recognition, consistency and user control.
- [Nielsen Norman Group: progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/) for deferring secondary controls.
- [Google: Web Vitals](https://web.dev/articles/vitals) for field performance metrics and thresholds.

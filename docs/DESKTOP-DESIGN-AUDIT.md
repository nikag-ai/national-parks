# ParkFinder desktop design audit

September 23, 2026. Companion to [the mobile audit](MOBILE-DESIGN-AUDIT.md). Browser inspection of the local November listing and Big Bend detail view at 1440 × 900 and 1366 × 768, including dark/light themes and a filtered search. No application code changed.

## Conclusion

Desktop has a stronger visual presentation than mobile, but still spends too much vertical space explaining and configuring discovery before showing useful comparisons. The three-column grid disguises rather than solves the delayed arrival of decision-making information. Preserve the photographs, stars, visible month choices and readable three-column structure. Improve hierarchy and navigation rather than replacing the visual identity.

## Observed evidence

| Observation | Result |
| --- | --- |
| First row starts | Document y=516px at both inspected desktop sizes |
| First park name starts | Approximately y=771px |
| First Explore park action starts | Approximately y=966px |
| Desktop card height | Approximately 499px at 1440px width |
| Space before results at 1366 × 768 | 67% of viewport height |
| Big Bend modal at 1366 × 768 | Approximately 1060 × 691px |
| Modal hero | 340px, nearly half the visible dialog height |
| Official planning action in unscrolled modal | Viewport y≈1004px, below the visible dialog |
| Card seasonal explanation text | 12.8px computed font size |
| Park navigation inside cards | Buttons/click handlers; zero park anchors |
| Searching Yosemite with November selected | “Showing 0 of 0 parks” and a generic suggestion to change month or clear search |

Positions refer to the inspected local state and fonts, not all browser configurations. Field performance, real-user conversion and full accessibility conformance were not measured.

## P0: Reduce the pre-results stack

**Principle: visual hierarchy follows the primary task.**

The page stacks a promotional heading, explanatory paragraph, search, four collection tabs, a month label, the month strip, result count, sort controls, methodology explanation and a redundant month chip. Desktop has horizontal room to combine related controls instead of stacking them.

Recommended desktop structure:

1. Compact brand navigation with Saved and secondary menu actions.
2. One clear heading: “Best national parks in November”, with a short supporting line if necessary.
3. All 12 months in a visible row. This is a useful desktop affordance worth retaining.
4. A compact toolbar with search, filters, result count and current sort. Group related controls; avoid scattering them across unrelated rows.
5. The three-column recommendation grid.

Remove the redundant selected-month chip unless it is needed alongside genuinely additional filters. Move Visited and Hidden into secondary collection controls. Keep the rating method one deliberate click away from the Editorial label. Avoid adding a persistent filter sidebar before usage shows that its space cost is justified.

**Prototype target:** Start results around 280–320px on a 1366 × 768 viewport, allowing names, scores and decision cues for three parks to appear immediately. This is a design budget to test, not a universal fold rule. Preserve comfortable typography.

## P0: Use the grid for comparison, not just scenic browsing

**Principle: recognition and consistent structure reduce memory burden.**

The three-column grid is a strength. Keep it, and preserve landmark photos. Shorten image height moderately, around 160–180px as a starting point, and reduce duplicate labels and spacing. Do not simply add more columns; narrower cards would make names and explanations harder to scan.

Use identical information order and aligned comparison fields: park and state, editorial rating, reason for the selected month, suggested days in the park, and the material tradeoff. “Standout month” alone does not explain suitability. The current one-sentence park-level seasonal copy is not always specific to the chosen month.

For example, Big Bend, Congaree and Joshua Tree offer different activities, locations and planning constraints. The cards should let a traveler understand those differences without opening three dialogs. A 4.6 versus 4.4 score should not carry the whole decision.

Increase supporting paragraph text toward 14–16px and verify contrast, especially in dark mode. Labels can remain smaller. Reclaim space through hierarchy and reduced repetition, not by making information harder to read.

## P0: Support normal desktop navigation and search recovery

**Principle: behave as users expect; explain system state and provide a direct recovery path.**

Park titles and View park actions should be real links to park routes. Ordinary click can still enhance the page with a modal, but modifier-click, middle-click, context-menu Open in new tab and copy-link behavior should work normally. Currently, cards contain buttons and a clickable container instead of park anchors, which prevents those standard link workflows. This matters for people comparing several destinations in browser tabs.

Distinguish two search outcomes: a park that does not exist in the catalog, and a known park excluded by the selected month. The observed Yosemite/November search is the latter. Suggested recovery copy: “Yosemite is outside our November shortlist. View Yosemite anyway or browse its suggested months.” Preserve the user's query and month while making the scope explicit. Do not imply that being outside the shortlist means the park is closed.

Show an informative result count rather than “0 of 0”. Users should not have to diagnose whether search, month, hidden state or another filter removed the result.

## P1: Rebalance the desktop detail view

**Principle: hierarchy should match decision order, and important actions should be apparent.**

The existing two-column modal is a sound desktop foundation. However, its 340px hero occupies nearly half the 691px dialog on the inspected laptop. The official planning link is far below the initial view. Keep the hero, title overlay, trip snapshot and grouped panels, but reduce the banner to roughly 220–260px and tighten the snapshot.

Use the left column for why this month, highlights and the important tradeoff. Give the right column a concise trip summary and visible Save park / Official planning actions, with month comparison below. Keep the detailed methodology, weather and source list expandable. Retain accessible sources without giving the scoring system more space than the planning decision.

Make the hero actions understandable through visible text where appropriate or descriptive hover/focus tooltips. Heart/check/hidden icons currently communicate different actions with identical visual prominence. Saving is relevant to discovery; marking visited or hiding a park is secondary.

Avoid converting all desktop detail browsing to a new interaction pattern. Support deep links and standard tabs while retaining the working desktop modal enhancement. Preserve list position, filters and the selected month when returning.

## P1: Make saving lead to comparison and a portable decision

**Principle: preserve progress and reduce repeated work.**

A desktop compare tray for two or three selected parks can exploit the available width. Compare the same facts consistently, without duplicating entire guides or presenting a wall of prose. Keep the month visible. Preserve that context through Saved and comparison rather than resetting the user to an unrelated all-month list.

Allow sharing the actual selected parks and month, not only the current page URL. Keep saving lightweight and account-free. Explain local browser storage until portable saving exists. A useful trip-planning artifact is a better engagement objective than eliciting more clicks.

This feature follows the initial layout/navigation work. It should not delay fixing the verified first-screen and search problems.

## P1: Maintain a consistent visual language

**Principle: consistent signals make an interface easier to interpret.**

Keep photos as the main inspiration layer and stars as the editorial recommendation signal. Standardize active-control treatment across month, view and sort selection. Avoid making collection management or Discord as prominent as choosing and saving a park. Reduce redundant badges where the same information is already clear from the rating and selected month.

Review tooltip behavior, focus visibility and enlargement at 200% zoom before release. No color-contrast failure or full accessibility pass is asserted here; the 12.8px supporting text is a verified readability concern to test.

## Shared product issues

The mobile audit's findings also apply on desktop: the at-least-days filter does not naturally express a time budget; monthly rating reasons need more specificity; editorial score differences are not validated preference evidence; favorites are local; sharing loses shortlist context; and modal re-renders can inflate park-open event counts.

The shared logic should be fixed once. Presentation should differ by device: a compact desktop toolbar and side-by-side cards, versus mobile controls disclosed on demand and a full-width detail flow.

## Acceptance criteria and sequence

1. **Layout:** At 1366 × 768, visitors can see the first three parks' names, scores and a useful decision cue without scrolling. At 1440 × 900, aim to expose complete first-row cards. Confirm rather than assume those targets after prototyping.
2. **Navigation:** Open two parks in separate tabs; copy a park link; close a dialog and return to the same list context. Keyboard navigation remains usable.
3. **Search:** Find a known park outside the selected month and recover without clearing and rebuilding the whole search.
4. **Decision support:** Compare parks using consistent reasons, time expectations and tradeoffs; locate official planning guidance without exploring the scoring methodology first.
5. **Outcome tracking:** Record distinct opens, saves, completed sharing and official planning clicks. Do not treat longer sessions or repeated dialog events as proof of better engagement.

First implement the shared hierarchy and navigation corrections with device-specific layouts. Then validate with actual trip planners and develop shortlist comparison/sharing. Keep distribution research and outreach for the later phase the user requested. Neither this audit nor a successful local prototype proves conversion lift or field performance.

## Design references

- [Nielsen Norman Group: usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/): recognition, consistency, user control, error recovery and minimalist design.
- [Nielsen Norman Group: progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/): making secondary functionality available without crowding the main task.
- [Google: Web Vitals](https://web.dev/articles/vitals): assess actual loading, responsiveness and stability separately from visual review.

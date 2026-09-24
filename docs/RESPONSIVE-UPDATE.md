# Responsive discovery update

Implemented locally on September 23, 2026, following the mobile and desktop audits.

- Compact discovery heading, phone month selector, desktop month chips, native sort selector, and a single filters entry point.
- Cards retain landmark photos, editorial stars, seasonal fit and suggested stay. Added a sourced planning-note excerpt and explicit park and comparison actions.
- Real park links retain month context and support native modified clicks. Saved parks retain the selected month.
- Search recovers known parks outside the selected season. Available-day filtering now uses a maximum suggested stay; state filtering is available.
- Compare up to three parks, with month-aware share links that do not modify a recipient's saved parks.
- Phone guides use the full screen with an explicit Back control. Shorter heroes and earlier save and official planning actions improve both layouts.
- Month changes in guides update their URLs. Modal rerenders do not count as new opens; sharing records completion only after success.

## Verification

13 automated tests pass, covering all 63 guides, 12 monthly shortlists, source content, rating order, saved state, context links, comparisons, sharing with a clipboard mock, search recovery, and trip-length filtering. JavaScript syntax and git diff whitespace checks pass. Regenerated 63 park and 12 month pages.

Browser checks covered 360×740, 390×844, 1366×768, and 1440×900 layouts; desktop light/dark themes; mobile guides and comparison; and desktop filters/search recovery. No horizontal overflow at the checked phone sizes.

November measurements: first mobile card starts at 228px (previous audit: 498px at 360 width and 474px at 390 width); its bottom is approximately 665px. Desktop 1366×768 fits the three complete first-row recommendations. These are local rendered-layout observations, not field-performance or engagement measurements.

Not deployed. Physical-device testing and production engagement measurement remain separate validation steps.

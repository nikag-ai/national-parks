# Content audit: September 22, 2026

The audit covered the root app, all 63 park records, all 756 monthly records, seven origin hubs, the legacy dataset, the separate React prototype, and the 75 generated park/month pages. The resulting guide retains a smaller set of source-linked facts and clearly separates editorial choices from measured data.

## Findings and dispositions

| Information | Finding | Resolution |
| --- | --- | --- |
| Park descriptions, activities, advice, fun facts, itineraries | Numerous unsourced specifics, unsupported superlatives, hazardous blanket advice, and stale operational claims | Replaced the legacy prose with concise park-specific NPS descriptions, activities, planning cautions, and qualitative climate notes for all 63 parks. Old itineraries and unsupported trivia were withdrawn, not relabeled as verified. |
| Permits and reservations | General entry mixed with activity-specific permits; contradictions within the same park | Rewrote source-linked guidance, including Yosemite, Arches, Zion, Acadia, Rocky Mountain, Haleakalā, Mesa Verde, Wind Cave, and Carlsbad Caverns. Year-specific statements retain the year and a review date. |
| Yosemite Half Dome | February preseason lottery and 7 a.m. cancellation advice | Corrected to March 1–31 preseason applications and a daily lottery two days before the hiking date, linked directly to NPS. General entry in 2026 is distinguished from Half Dome, wilderness, lodging, and camping. |
| Reddit | 119 unsourced post/quote records in the split details file; generic subreddit URLs did not support them | Removed the quotations and claimed community advice. No synthetic text is presented as a visitor quotation. |
| React community sentiment | Repeated 85% / 10% / 5% values without a sample or methodology | Removed statistics and the community-sentiment display. |
| Monthly weather and crowds | 756 records lacked station, observation period, counts, or crowd methodology | Removed the numeric dataset and corresponding filters. Replaced the weather section with sourced qualitative climate notes and links. |
| Travel logistics | Repeated placeholder flight times, fabricated stop classification, fallback durations, and a Haleakalā key mismatch | Removed numeric route claims and filters, including drive times. Unknown travel time returns null. Users are directed to official transport guidance. |
| Scores | Unsupported popularity/uniqueness inputs and fixed SFO accessibility affected every origin | Removed the unsupported inputs. Restored explicit editorial stars and recommendation sorting in the root guide: 60% seasonal fit, 40% park experience. Favorites no longer override the selected sort. The method and judgments are disclosed; no review aggregate is claimed. |
| Months and trip lengths | Presented as universally optimal or minimum necessary | Explicitly editorial, not measurements or guarantees. Cave/urban year-round options expanded; Hawaii not confined to arbitrary shoulder months; Yosemite high-country caveat added; Dry Tortugas season tradeoff made explicit; Everglades and Death Valley windows narrowed. |
| Night skies and sunrise/sunset | Generic fixed clock times and unsupported blanket judgments | Removed time-of-day estimates and negative classifications. Retained an explicitly incomplete filter for parks whose reviewed NPS pages list night-sky activity. All guides explain uncertainty. |
| Park identities and states | Multiple parallel sources could drift | Cross-checked all IDs with NPS park codes and states using official park API metadata. Preserve names/IDs for existing saved preferences. |
| Photos | Missing provenance; local images could not all be matched to the selected NPS record | Matched all 63 to NPS photo sources. After visual review, curated recognizable landmarks instead of accepting each API record's first image, including Grand Prismatic, Tunnel View, Delicate Arch, Mesa Arch, and General Sherman. Credits, alt text, source URLs and crop positions are retained. |
| Search metadata / structured data | Claims of exact stargazing, weather, crowd and logistics precision; hidden summaries and FAQ answers | Removed unsupported Dataset/FAQ schema. Regenerated 63 park pages and 12 month pages with visible, source-linked summaries, accurate metadata, and canonical URLs. |
| About and corrections | Broad disclaimer without explaining source/estimate boundaries | Added a public methodology, independent-site disclosure, storage/analytics description, photo provenance explanation, and GitHub correction route. |
| Duplicate data | Root, legacy and v2 could publish conflicting claims | Both active clients use `data/park-guidance.json`; root exports and route pages are generated. Legacy unsupported exports are empty. |

## Source record

The canonical dataset lists the actual NPS pages used for every park, with a September 22 review date. Every park's official planning page was reviewed; Mammoth Cave and Shenandoah also use their activity pages, Yosemite its Half Dome permit page, and Dry Tortugas its seasonal weather page.

NPS park API records supplied park-code/state cross-checks, general climate context, and photo metadata. Climate notes are paraphrased, qualitative summaries, not a new monthly weather dataset. Photo metadata retains the official source image URL, title, and credit. The combined Sequoia/Kings Canyon record was handled separately for each park.

Important direct sources include [Yosemite entry guidance](https://www.nps.gov/yose/planyourvisit/index.htm), [Half Dome permits](https://www.nps.gov/yose/planyourvisit/hdpermits.htm), [Arches 2026 entry guidance](https://www.nps.gov/arch/planyourvisit/index.htm), [Zion planning](https://www.nps.gov/zion/planyourvisit/index.htm), and [Dry Tortugas seasonal weather](https://www.nps.gov/drto/learn/nature/weather.htm). The full source list is in the dataset, not limited to these examples.

## Scope and limits

This audit does not certify every claim NPS has ever published. It replaces unsupported site content with a bounded reviewed set. NPS pages can have old publication dates and current conditions still require a fresh check. No operational availability, transport schedule, trail opening, wildlife sighting, night-sky visibility, or future weather is guaranteed.

Months and trip lengths remain subjective starting points. Night-sky coverage is intentionally incomplete, and absence from the filter does not mean a park is unsuitable. Rich itineraries, numeric weather, travel comparisons, and community evidence need new, properly sourced datasets before they return.

No deployment or external posting was performed. Email, Reddit, and analytics research remains in ignored private scratch files.

## Validation

The content test suite covers every park's required source fields, photo records, rendering of all 63 modals, all 12 monthly result sets, generated page content/canonicals, legacy-filter migration, saved-list preservation, unknown travel times across the seven old hubs, and special-character routing. Build and browser verification outcomes are recorded with the completed change.

Completed validation:

- Ten automated tests passed, including rendering all 63 modals, all 12 month result sets, monthly score ordering, explicit sorts, landmark provenance and the interactive modal calendar.
- All 126 unique NPS guidance URLs returned HTTP 200 during the link check.
- Data/page regeneration was deterministic: no file differences on a second run.
- The React production build passed. Vite reports a non-blocking JavaScript chunk-size warning around 500 kB; content loading remains functional.
- Root app inspected in the browser at desktop size and 390 × 844, including the park guide and revised filters. The built React version was checked through search and the Yosemite source-linked detail view.
- Fixed Unicode and dotted-slug routing, history restoration toggling the selected month, stale route summaries, and unescaped search-chip text.
- `git diff --check` passed. No changes were committed, pushed, or deployed.

## Recommendation and presentation follow-up

The initial audit removed too much decision-making structure. The root guide now restores star-based monthly sorting and adds a concise reason to go, landmark-led cards, a photo-led modal, a trip snapshot, an interactive month calendar and grouped planning panels. Detailed methodology and provenance remain available in expandable sections. Recommendation judgments live beside source-linked guidance in the canonical dataset. These are explicitly editorial, not invented online reviews. Yellowstone and Yosemite include summer as good sightseeing options; year-round Hawaii options are not given an unsupported seasonal bonus.

Hero assets remain available at full resolution in the modal; generated 800px card versions average about 86 kB. Browser checks cover desktop and 390px mobile layouts, both themes, monthly rating changes and sorting.

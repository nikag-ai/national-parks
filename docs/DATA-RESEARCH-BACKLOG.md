# Park data audit and research queue

Checked locally on 2026-09-23. This is a structural consistency audit of the 63-park dataset, an NPS night-sky directory and park-specific review of all 63 parks, and a small set of current access-rule spot checks. It is **not** a claim-by-claim verification of all park guidance.

## Findings

- All 63 records have a name, state, summary, planning note, weather note, activities, valid month values, suggested days, photo metadata, and at least two NPS source links. All thumbnails exist locally. Editorial peak months are a subset of suggested months in every record.
- **49 parks now have sourced visitor-facing night-sky guidance**: 33 from the prior round and 16 newly checked against park-specific NPS pages. The remaining **14 were reviewed but are not listed in the stargazing filter** because NPS guidance is absent, access is limited, or sky conditions make a visitor recommendation premature. Each has a dated `nightSkyResearch` reason and NPS source in the canonical data. This is not a claim that all 14 lack visible stars.
- NPS uses an asterisk in its directory for Dark Sky International certified places. That directory was last updated July 2025, so its unstarred Badlands entry is superseded by the [July 2026 NPS certification announcement](https://home.nps.gov/badl/learn/news/badlands-national-park-achieves-dark-sky-park-certification.htm). An NPS night-sky recommendation alone does not establish certification.
- Petrified Forest closes at dusk. Its [Dark Sky Viewing Permit page](https://www.nps.gov/pefo/planyourvisit/darkskyviewpermit.htm) describes two free first-come permits per day for after-hours viewing, or an overnight wilderness permit. This restriction is now in the park's planning and night-sky notes.
- 55 parks cited only broad NPS park/planning pages before the night-sky research. The new citations improve traceability for 49 parks, but a source-by-claim audit is still needed for seasonal, access, activity, and planning statements. A source link in the record does not verify every field.
- Most permit notes remain blank. A blank note is **not** evidence that no permit, reservation, shuttle ticket, or timed entry is needed. Recheck entry and major activity requirements against current NPS pages before adding claims.
- A record's `reviewedAt` date is a batch review marker, not proof that every sentence was reverified on that date. Night-sky sources were checked on 2026-09-23; future audits should track date and URL per claim.
- Sequoia and Kings Canyon share the NPS `seki` code and identical planning/weather notes. Their park-specific seasonal and access differences deserve separate checks.

## Remaining research, in priority order

1. Verify current entry, vehicle, shuttle, backcountry, and signature-activity requirements for each park. Record a dedicated URL and check date; do not infer “none” from a blank field.
2. Recheck the 14 evidence-limited parks when NPS publishes specific visitor guidance, especially after-dark access, viewing locations, and ranger programs. Keep the stargazing filter conservative.
3. Verify each park's suggested months, trip-length starting point, weather note, and recommendation reason against park-specific NPS climate and access pages. Preserve the editorial distinction.
4. Recheck photo identity, credit, license/use permission, attribution, and intended landmark for all 63 parks. A local file and source link do not establish that the image matches its park or hero intent.
5. Split `reviewedAt` into claim-level evidence and verification dates so a recent night-sky check does not imply a recently checked permit or road claim.

## Night-sky status by park

| Park | Status | NPS night-sky source | Permit note |
|---|---|---|---|
| Acadia | Sourced positive | https://www.nps.gov/acad/planyourvisit/stargazing.htm | 2026 Cadillac vehicle rule checked; other requirements unreviewed |
| Arches | Sourced positive | https://www.nps.gov/arch/learn/nature/lightscape.htm | Other requirements unreviewed |
| Badlands | Sourced positive | https://home.nps.gov/badl/learn/news/badlands-national-park-achieves-dark-sky-park-certification.htm | Other requirements unreviewed |
| Big Bend | Sourced positive | https://www.nps.gov/bibe/planyourvisit/stargazing.htm | Other requirements unreviewed |
| Biscayne | Evidence limited: island camping exists, but no park-specific NPS stargazing recommendation found | https://www.nps.gov/bisc/planyourvisit/fees.htm | Other requirements unreviewed |
| Black Canyon of the Gunnison | Sourced positive | https://www.nps.gov/blca/planyourvisit/astronomy.htm | Other requirements unreviewed |
| Bryce Canyon | Sourced positive | https://www.nps.gov/brca/planyourvisit/astronomyprograms.htm | Other requirements unreviewed |
| Canyonlands | Sourced positive | https://www.nps.gov/cany/learn/nature/lightscape.htm | Other requirements unreviewed |
| Capitol Reef | Sourced positive | https://www.nps.gov/care/learn/nature/night-sky.htm | Other requirements unreviewed |
| Carlsbad Caverns | Sourced positive | https://www.nps.gov/cave/planyourvisit/nightsky.htm | Other requirements unreviewed |
| Channel Islands | Evidence limited: NPS documents skyglow and dark-sky values, but nighttime visitor access needs verification | https://www.nps.gov/chis/learn/news/pr091516.htm | Other requirements unreviewed |
| Congaree | Evidence limited: an astronomy event occurred, but no general NPS visitor stargazing guidance found | https://www.nps.gov/cong/learn/management/upload/CONG-Supt-Compendium_Updated-9-18-2025_SIGNED-1.pdf | Other requirements unreviewed |
| Crater Lake | Sourced positive | https://www.nps.gov/crla/planyourvisit/things2do.htm | Other requirements unreviewed |
| Cuyahoga Valley | Sourced positive | https://home.nps.gov/cuva/learn/nature/lightscape.htm | Other requirements unreviewed |
| Death Valley | Sourced positive | https://www.nps.gov/deva/night-exploration.htm | Other requirements unreviewed |
| Denali | Sourced positive | https://www.nps.gov/dena/learn/nature/aurora.htm | Other requirements unreviewed |
| Dry Tortugas | Sourced positive | https://www.nps.gov/drto/learn/nature/lightscape.htm | Other requirements unreviewed |
| Everglades | Sourced positive | https://www.nps.gov/ever/planyourvisit/everglades-night-sky.htm | Other requirements unreviewed |
| Gates of the Arctic | Evidence limited: NPS notes winter aurora but warns of extreme cold and travel hazards | https://home.nps.gov/gaar/planyourvisit/weather.htm | Other requirements unreviewed |
| Gateway Arch | Not listed: urban park; grounds close 11 p.m.; no NPS stargazing recommendation found | https://www.nps.gov/jeff/planyourvisit/hours.htm | Other requirements unreviewed |
| Glacier | Sourced positive | https://www.nps.gov/glac/learn/nature/night-sky.htm | 2026 entry and Logan Pass rules checked; other requirements unreviewed |
| Glacier Bay | Not listed: NPS says clear aurora nights are exceedingly rare in this rainy ecosystem | https://www.nps.gov/glba/learn/nature/aurora-borealis.htm | Other requirements unreviewed |
| Grand Canyon | Sourced positive | https://www.nps.gov/grca/learn/nature/night-skies.htm | Other requirements unreviewed |
| Grand Teton | Sourced positive | https://www.nps.gov/grte/learn/nature/protecting-night-skies.htm | Other requirements unreviewed |
| Great Basin | Sourced positive | https://www.nps.gov/grba/planyourvisit/great-basin-stargazing.htm | Other requirements unreviewed |
| Great Sand Dunes | Sourced positive | https://www.nps.gov/grsa/planyourvisit/experiencethenight.htm | Other requirements unreviewed |
| Great Smoky Mountains | Sourced positive | https://home.nps.gov/grsm/learn/nature/dff509-focuspartner1.htm | Other requirements unreviewed |
| Guadalupe Mountains | Sourced positive | https://www.nps.gov/gumo/learn/nature/environmentalfactors.htm | Other requirements unreviewed |
| Haleakalā | Sourced positive | https://www.nps.gov/hale/planyourvisit/stargazing.htm | Other requirements unreviewed |
| Hawaii Volcanoes | Sourced positive | https://www.nps.gov/subjects/nightskies/stargaze.htm | Other requirements unreviewed |
| Hot Springs | Not listed: no park-specific NPS stargazing recommendation found; developed urban setting | https://www.nps.gov/hosp/planyourvisit/hours.htm | Other requirements unreviewed |
| Indiana Dunes | Sourced positive | https://www.nps.gov/indu/stargazing.htm | Other requirements unreviewed |
| Isle Royale | Sourced positive | https://www.nps.gov/isro/ | Other requirements unreviewed |
| Joshua Tree | Sourced positive | https://www.nps.gov/jotr/planyourvisit/stargazing.htm | Other requirements unreviewed |
| Katmai | Not listed: NPS explicitly says sunlight, clouds, and access make it unsuitable as a dark-sky destination | https://home.nps.gov/katm/blogs/change-in-the-eternal-night-sky-view.htm | Other requirements unreviewed |
| Kenai Fjords | Evidence limited: aurora possible, but no park-specific NPS visitor stargazing guidance found | https://www.nps.gov/kefj/planyourvisit/index.htm | Other requirements unreviewed |
| Kings Canyon | Sourced positive | https://www.nps.gov/seki/planyourvisit/dark-sky-festival.htm | Other requirements unreviewed |
| Kobuk Valley | Evidence limited: NPS notes aurora and winter darkness; extreme access and no visitor stargazing guidance | https://www.nps.gov/kova/planyourvisit/weather.htm | Other requirements unreviewed |
| Lake Clark | Sourced positive | https://www.nps.gov/lacl/learn/nature/environmentalfactors.htm | Other requirements unreviewed |
| Lassen Volcanic | Sourced positive | https://www.nps.gov/lavo/planyourvisit/stargazing.htm | Other requirements unreviewed |
| Mammoth Cave | Sourced positive | https://www.nps.gov/maca/planyourvisit/stargazing.htm | Other requirements unreviewed |
| Mesa Verde | Sourced positive | https://www.nps.gov/meve/planyourvisit/stargazing.htm | Other requirements unreviewed |
| Mount Rainier | Sourced positive | https://www.nps.gov/mora/planyourvisit/rangerprograms.htm | 2026 timed-entry status checked; other requirements unreviewed |
| National Park of American Samoa | Evidence limited: NPS describes southern skies but not a practical after-dark viewing destination | https://www.nps.gov/npsa/learn/nature/upload/NatHistGuideAS09.pdf | Other requirements unreviewed |
| New River Gorge | Sourced positive | https://www.nps.gov/neri/planyourvisit/sunsets-and-night-skies.htm | Other requirements unreviewed |
| North Cascades | Sourced positive | https://www.nps.gov/noca/learn/nature/lightscape.htm | Other requirements unreviewed |
| Olympic | Sourced positive | https://www.nps.gov/olym/planyourvisit/nightsky.htm | Other requirements unreviewed |
| Petrified Forest | Sourced positive | https://www.nps.gov/pefo/planyourvisit/darkskyviewpermit.htm | Night-sky access documented |
| Pinnacles | Sourced positive | https://home.nps.gov/thingstodo/pinnacles-night-sky-viewing.htm | Other requirements unreviewed |
| Redwood | Evidence limited: no park-specific NPS visitor stargazing guidance found | https://www.nps.gov/redw/planyourvisit/index.htm | Other requirements unreviewed |
| Rocky Mountain | Sourced positive | https://www.nps.gov/romo/planyourvisit/astronomy_programs.htm | 2026 timed-entry rule checked; other requirements unreviewed |
| Saguaro | Sourced positive | https://www.nps.gov/sagu/learn/nature/dark-sky.htm | Other requirements unreviewed |
| Sequoia | Sourced positive | https://www.nps.gov/seki/planyourvisit/dark-sky-festival.htm | Other requirements unreviewed |
| Shenandoah | Sourced positive | https://www.nps.gov/shen/learn/nature/nightsky.htm | Other requirements unreviewed |
| Theodore Roosevelt | Sourced positive | https://www.nps.gov/thingstodo/see-the-stars-in-theodore-roosevelt-national-park.htm | Other requirements unreviewed |
| Virgin Islands | Sourced positive | https://www.nps.gov/viis/planyourvisit/rangerguidedtours.htm | Other requirements unreviewed |
| Voyageurs | Sourced positive | https://www.nps.gov/voya/planyourvisit/stargazing.htm | Other requirements unreviewed |
| White Sands | Not listed for routine stargazing: park normally closes around sunset; special evening programs vary | https://home.nps.gov/whsa/planyourvisit/hours.htm | Other requirements unreviewed |
| Wind Cave | Sourced positive | https://www.nps.gov/wica/learn/nature/dark-sky.htm | Other requirements unreviewed |
| Wrangell-St. Elias | Evidence limited: night-sky resource documented, but no visitor viewing guidance found | https://www.nps.gov/wrst/planyourvisit/index.htm | Other requirements unreviewed |
| Yellowstone | Sourced positive | https://www.nps.gov/yell/planyourvisit/photography.htm | Other requirements unreviewed |
| Yosemite | Sourced positive | https://www.nps.gov/yose/planyourvisit/stargazing.htm | Other requirements unreviewed |
| Zion | Sourced positive | https://www.nps.gov/zion/learn/nature/nightskies.htm | Other requirements unreviewed |

“Not listed” and “Evidence limited” are editorial research statuses, not claims that stars are never visible. A positive stargazing flag does not guarantee clear skies, current access, or a scheduled program. Review date for the 14 remaining statuses: 2026-09-23.

## Current-rule spot checks

- Arches: 2026 general entry does not need advance timed-entry reservations; congestion can still divert vehicles. NPS: https://www.nps.gov/arch/learn/news/news02182026.htm (checked 2026-09-23).
- Yosemite: no entrance reservation in 2026; lodging, camping, wilderness, and Half Dome have separate requirements. NPS: https://www.nps.gov/yose/planyourvisit/permitsandreservations.htm (checked 2026-09-23).
- Zion: general park entry and park shuttles do not require reservations; some activities still require permits. NPS: https://www.nps.gov/zion/planyourvisit/zion-canyon-shuttle-system.htm and https://www.nps.gov/zion/planyourvisit/permitsandreservations.htm (checked 2026-09-23).
- Great Smoky Mountains: parking longer than 15 minutes generally requires a parking tag, subject to exceptions. NPS: https://www.nps.gov/grsm/planyourvisit/fees.htm (checked 2026-09-23).
- Glacier: no vehicle reservation is required for park entry in 2026; Logan Pass uses a ticketed shuttle and time-limited parking. NPS: https://www.nps.gov/glac/planyourvisit/vehicle-reservations2026.htm (checked 2026-09-23).
- Mount Rainier: no timed-entry reservation is in effect in 2026. NPS: https://home.nps.gov/mora/planyourvisit/fees.htm (checked 2026-09-23).
- Rocky Mountain: 2026 timed entry applies in specified date and hour windows, with a separate Bear Lake Road option. NPS: https://home.nps.gov/romo/planyourvisit/timed-entry-permit-system.htm (checked 2026-09-23).
- Acadia: Cadillac Summit Road has vehicle reservations May 20 through October 25, 2026; other park areas do not need a vehicle reservation. NPS: https://www.nps.gov/acad/planyourvisit/vehicle_reservations.htm (checked 2026-09-23).

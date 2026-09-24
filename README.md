# US National Park Finder

An independent guide to 63 US national parks, with editorial month suggestions, saved favorites and visited parks, and source-linked NPS planning notes.

[Visit National Park Finder](https://nationalparkfinder.info/)

## Content and sources

`data/park-guidance.json` is the shared source of truth for the root application and the React prototype in `v2/`. Each park has a description, activities, planning cautions, qualitative climate notes, source links, review date, and photo credit. Months, suggested days and recommendation stars are editorial choices, not official ratings or predictions. The root guide ranks by 60% seasonal fit and 40% park experience; see the public methodology for the scale. The React prototype shares content and photographs but retains its separate presentation.

The September 22, 2026 audit withdrew unsupported Reddit quotations, sentiment percentages, unsupported popularity/accessibility scores, monthly weather/crowd numbers, and travel-time/flight-stop estimates. Read [the audit](docs/CONTENT-AUDIT.md) and [the public methodology](https://nationalparkfinder.info/about.html) for scope and limitations.

## Development

The production site is served by Cloudflare Pages from the repository root. Pushing `master` triggers an automatic deployment to `nationalparkfinder.info`.

```sh
npm install
npm start
```

After changing a hero photo, run `python3 scripts/build_park_images.py` (requires Pillow) to refresh its lightweight card image.

After editing the canonical data or `index.html`, regenerate all data exports and the 63 park / 12 month pages:

```sh
python3 scripts/generate_seo_pages.py
node --test tests/content-audit.test.mjs
```

Seasonal decision guides live in `content/months/` and are inserted into their matching generated month pages by the same generator. Keep factual claims linked to current NPS guidance and update the review note when checking them.

The React prototype imports the same canonical dataset directly:

```sh
cd v2
npm install
npm run build
npm run dev
```

## Content maintenance

- Cite a park-specific NPS page supporting each factual note. Include activity-specific permit sources where needed.
- Update `reviewedAt` only after checking the facts against the sources. It is a review date, not the date NPS published the page.
- Keep weather qualitative unless a future dataset includes station, observation period, units, and provenance. Never fill unknown travel times or crowd observations with defaults.
- Label suggestions separately from facts. Never attribute editorial prose to Reddit or to a visitor without the actual source and quotation.
- Preserve park IDs and user-facing names unless a migration is provided: saved favorites, visited parks, and hidden parks use those names.
- Do not hand-edit generated `parks-summary.*`, `parks-details.js`, or route HTML files. Legacy `data.js`, `parks-seasonal.js`, and `parks-logistics.js` are retired empty exports.
- Photos require a matching park, source URL, title, and credit. Choose recognizable landmarks and landscapes and inspect both wide and mobile crops. Images are historical illustrations, not current conditions.

This project is not affiliated with or endorsed by the National Park Service. Always check official conditions and reservations for your dates.

# Analytics collection and validation

## Collection boundary

`analytics.js` is the only production vendor loader. Every generated app page
loads it synchronously before app code. It permits HTTPS on
`nationalparkfinder.info` and the `/national-parks/` project on
`nikag-ai.github.io`. Localhost, LAN addresses, Cloudflare preview/alternate
hosts, and unrelated GitHub projects do not initialize GA, PostHog, or Ads.
`analytics=on` cannot override the hostname restriction.

Production vendor IDs and the existing Ads page-load conversion are preserved.
This work does not redefine advertising conversions or evaluate paid campaigns.

## Creator and QA visits

Before using a public site for QA, visit these once in **each browser/profile**:

- https://nationalparkfinder.info/?analytics=off
- https://nikag-ai.github.io/national-parks/?analytics=off

The preference persists in localStorage separately on each origin. Reload any
already-open app tabs after setting it. Clearing site storage or using a new
profile removes the preference. To resume collection, visit the same origin
with `?analytics=on`, then reload other tabs.

When storage is blocked, `analytics=off` still suppresses that page. Keep it in
every QA URL or use local/preview hosting. It cannot persist across page loads
without browser storage. This is not a retroactive exclusion of old traffic.

Research links use `utm_medium=research`; editor-only demos use
`utm_medium=editor_demo`. These suppress vendor collection for that tab and
subsequent full-page navigation while sessionStorage is available. Use new tabs
for normal reader testing; `analytics=on` clears the tab flag. Do not publish
editor-demo links as reader links. Store observation outcomes in the research
worksheet, outside production acquisition metrics. Without sessionStorage, keep
the test tag on every visited URL or use creator opt-out/local hosting.

## Useful planning

Version 2 emits `useful_planning` for every qualifying action, with
`measurement_version=2` and `triggering_action`:

- changing a comparison to contain at least two parks;
- clicking a seasonal-guide comparison;
- following an official planning link;
- adding a saved favorite, not removing one.

Opening a shared comparison alone is not a qualifying action. Existing
`sessionStorage.npf_useful_planning` flags are ignored. A tab lifetime does not
equal a GA session, so the app no longer tries to deduplicate sessions itself.

GA property 529720733 was inspected September 28, 2026: the `useful_planning`
key event already uses **Once per session**. No account setting change was
needed. Use this event's session key-event rate or sessions containing the
event. Raw event count now measures actions, not successful sessions. Do not
compare raw counts across the version change without noting the break.

Reference: https://support.google.com/analytics/answer/13366706

## Checks and reporting

Run `python3 scripts/generate_seo_pages.py`, `node --test tests/*.test.mjs`, and
`git diff --check`. Tests cover both public origins, previews/local networks,
storage failures, opt-out persistence, test-visit navigation, existing Ads
configuration, all 76 app entry points, and qualifying/nonqualifying actions.

In a local browser, check that the app and comparisons work and the document
contains no Google/PostHog vendor scripts. Repeat on both public origins with
creator opt-out after deployment. Host eligibility is also tested offline to
avoid manufacturing production planning events during QA.

Record deployment time separately from processed analytics availability. Start
the post-fix reporting window with the next complete reporting day after both
hosts update. Exclude classified paid channels and limit hostnames to the two
public hosts. Keep host breakdowns and do not attribute Direct to a publisher.
Historical localhost traffic remains in historical reports. The existing
Internal Traffic filter stays in Testing until its matches are verified.

## Legacy-host migration design

Keep the legacy site available for existing editorial links for now. Saved,
visited, and hidden park sets live in origin-specific localStorage and do not
automatically transfer. Before a redirect rollout:

1. Build an explicit export/import or user-confirmed migration for those three
   sets, using valid park names and a union with existing destination data.
2. Rehearse nonempty source and destination sets, duplicates, invalid data,
   cancellation, and blocked storage. Never erase the source as part of import.
3. Preserve park/month paths, Unicode routes, comparison and month parameters,
   campaign parameters, and fragments. Keep migrations out of analytics.
4. Verify both hosts and a rollback route before switching human navigation.

A canonical tag is not a user redirect. Do not claim legacy visitors are lost
users or redirect traffic is growth.

# Reddit discussions and subtle motion: product research

Checked 2026-09-23. These are implementation proposals, not features shipped in this change.

## Recent Reddit threads in a park guide

The current site is static and has no server-side Reddit integration. A “top recent threads” block would need discovery, ranking, freshness checks, moderation, and a policy-compliant data source. Reddit requires registered OAuth for its Data API, identifies rate limits for eligible free access, and requires removal of deleted content. Its current terms require separate permission for commercial uses. We should establish whether this site and its intended use qualify before building an automated feed. Do not scrape Reddit HTML or rely on unauthenticated `.json` endpoints.

Recommended first experiment: a clearly labeled **Discuss this park on Reddit ↗** link in the guide, opening a Reddit search for the park's full name. This gives visitors current conversations on Reddit without copying comments or representing any post as verified travel advice. Measure outbound use before committing to a feed. Because Reddit search may return unrelated posts, the link should be a secondary action below official NPS planning links.

If a feed proves worthwhile and Reddit grants suitable access: use a server-side OAuth job, never a browser token; query full park names with disambiguating terms; limit to recent posts; exclude removed, deleted, NSFW, and low-relevance results; rank by recency and engagement with a relevance floor; show title, community, date, and Reddit link with attribution; cache briefly and honor deletion. Add a clear empty state. The ranking must not claim a post is a reliable trip recommendation. NPS remains the authority for closures, permits, weather and safety. A pure client-side static implementation cannot protect API credentials or guarantee deletion handling.

Sources: [Reddit Data API Wiki](https://support.reddithelp.com/hc/en-us/articles/16160319875092-Reddit-Data-API-Wiki), [Reddit Data API Terms](https://redditinc.com/policies/data-api-terms), [Reddit Developer Terms](https://redditinc.com/policies/developer-terms), [Reddit developer tools and commercial use FAQ](https://support.reddithelp.com/hc/en-us/articles/14945211791892-Reddit-Developer-Interfaces).

## Motion for a premium, calm interface

Apple's motion guidance favors brief, purposeful feedback that supports understanding and can be bypassed. Stripe's published implementation describes disabling decorative animation for reduced-motion users. The existing site already has card hover lift and image scale, but also inherits a spring-like 300 ms modal entrance (scale plus 20 px movement), 400 ms filter animation, and several broad `transition: all` rules from older CSS. Those older effects are more noticeable than this editorial layout needs.

Proposed motion pass, in order:

1. Replace the modal's spring and scale with a short opacity transition plus at most 6 px of vertical movement (around 180–220 ms). Keep closing immediate and never delay interaction.
2. Retain the 2 px desktop card lift but reduce image scale and shadow change to a 160–200 ms transition on explicit properties. Use a border or color cue for keyboard focus and touch, where hover is absent.
3. Make filter, saved, compare, and theme changes give immediate state feedback through color or icon changes (120–180 ms). Avoid animating entire result grids or resorted cards; users need results to settle promptly.
4. Remove infinite decorative motion, page-entry staggers, parallax, scroll hijacking, and large moving backgrounds from the discovery flow.
5. Under `prefers-reduced-motion: reduce`, remove transform and opacity motion, including modal and filter transitions. Preserve visible state and focus cues. Test keyboard focus, low-end mobile performance, both themes, and frequent open/close cycles.

These timings are proposed design targets, not values prescribed by Apple or Stripe. Check them in a live prototype before applying across the site.

Sources: [Apple Human Interface Guidelines: Motion](https://developer.apple.com/design/human-interface-guidelines/motion?changes=l_9_3), [Stripe's frontend animation and reduced-motion implementation](https://stripe.com/blog/connect-front-end-experience), [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

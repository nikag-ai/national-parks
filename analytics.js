/* Production collection is opt-in by hostname; load before all application code. */
(function () {
  'use strict';
  const url = new URL(window.location.href);
  const preference = url.searchParams.get('analytics');
  let optedOut = preference === 'off';
  try {
    if (preference === 'off') localStorage.setItem('npf_analytics_disabled', '1');
    if (preference === 'on') localStorage.removeItem('npf_analytics_disabled');
    optedOut = optedOut || localStorage.getItem('npf_analytics_disabled') === '1';
  } catch (_) { /* The explicit off URL still works when storage is blocked. */ }
  const publicHost = url.protocol === 'https:' && (
    url.hostname === 'nationalparkfinder.info' ||
    (url.hostname === 'nikag-ai.github.io' && url.pathname.startsWith('/national-parks/'))
  );
  // Research and editor demos are observations, not organically acquired usage.
  let testVisit = ['research', 'editor_demo'].includes(url.searchParams.get('utm_medium'));
  try {
    if (testVisit) sessionStorage.setItem('npf_analytics_test_visit', '1');
    if (preference === 'on') sessionStorage.removeItem('npf_analytics_test_visit');
    testVisit = testVisit || sessionStorage.getItem('npf_analytics_test_visit') === '1';
  } catch (_) { /* Explicit test tagging still suppresses this page. */ }
  if (!publicHost || optedOut || testVisit) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', 'G-YZ57RJ75MN');
  gtag('config', 'AW-593488152');
  gtag('event', 'conversion', {send_to: 'AW-593488152/QN47CP6z6-QBEJjS_5oC'});
  const google = document.createElement('script');
  google.async = true;
  google.src = 'https://www.googletagmanager.com/gtag/js?id=G-YZ57RJ75MN';
  document.head.appendChild(google);

    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_X4rWC5hkwiY9JRqBli733zxQtc8tagNdgKx6VA6PRsQ', {
        api_host: 'https://us.i.posthog.com',
        defaults: '2026-01-30'
    })

})();

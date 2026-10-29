"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { getAnalyticsConsentSnapshot, subscribeAnalyticsConsent } from "@/lib/analytics-consent";

export const GA_MEASUREMENT_ID = "G-6W1G9FJ5TV";
const CLARITY_PROJECT_ID = "wce5rr4juk";

// Google Consent Mode v2. GA4 always loads, but with analytics storage denied
// until the visitor allows it (see the inline default in app/layout.tsx). Denied
// visitors send cookieless pings so GA4 can model the traffic it cannot see.
// Clarity records sessions, so it still only loads after consent.
export function Analytics() {
  const consent = useSyncExternalStore(
    subscribeAnalyticsConsent,
    getAnalyticsConsentSnapshot,
    () => "loading"
  );

  useEffect(() => {
    if (consent === "loading" || consent === "unset") return;
    window.gtag?.("consent", "update", {
      analytics_storage: consent === "analytics" ? "granted" : "denied",
    });
  }, [consent]);

  return (
    <>
      <Script
        id="ga4-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {consent === "analytics" ? (
        <Script id="clarity-stylesheet-unmask" strategy="afterInteractive">
          {`
(function() {
  function normalise(link) {
    if (!(link instanceof HTMLLinkElement) || link.rel !== 'stylesheet') return;
    var href = link.getAttribute('href');
    if (!href) return;
    link.setAttribute('data-clarity-unmask', 'true');
    if (href.startsWith('/')) link.setAttribute('href', new URL(href, window.location.origin).toString());
  }
  function scan(root) { root.querySelectorAll('link[rel="stylesheet"][href]').forEach(normalise); }
  scan(document);
  new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (!(node instanceof Element)) return;
        if (node.matches('link[rel="stylesheet"][href]')) normalise(node);
        scan(node);
      });
    });
  }).observe(document.head, { childList: true, subtree: true });
})();
          `}
        </Script>
      ) : null}

      {consent === "analytics" ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
      ) : null}
    </>
  );
}

export const CONSENT_DEFAULT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var strathmarkConsent = null;
try { strathmarkConsent = window.localStorage.getItem("strathmark_cookie_consent_v1"); } catch (e) {}
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: strathmarkConsent === "analytics" ? "granted" : "denied",
  wait_for_update: 500
});
gtag("js", new Date());
gtag("config", "${GA_MEASUREMENT_ID}");
`;

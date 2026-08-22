"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { getAnalyticsConsentSnapshot, subscribeAnalyticsConsent } from "@/lib/analytics-consent";

const CLARITY_PROJECT_ID = "wce5rr4juk";

export function Analytics() {
  const consent = useSyncExternalStore(
    subscribeAnalyticsConsent,
    getAnalyticsConsentSnapshot,
    () => "loading"
  );

  useEffect(() => {
    if (consent === "loading") return;

    window.gtag?.("consent", "update", {
      analytics_storage: consent === "analytics" ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }, [consent]);

  if (consent !== "analytics") return null;

  return (
    <>
      <Script id="clarity-stylesheet-unmask" strategy="afterInteractive">
        {`
(function() {
  function normaliseStylesheetLink(link) {
    if (!(link instanceof HTMLLinkElement)) return;
    if (link.rel !== 'stylesheet' || !link.getAttribute('href')) return;

    link.setAttribute('data-clarity-unmask', 'true');

    var rawHref = link.getAttribute('href');
    if (!rawHref) return;

    if (rawHref.startsWith('/')) {
      link.setAttribute('href', new URL(rawHref, window.location.origin).toString());
    }
  }

  function normaliseExistingStylesheets(root) {
    root.querySelectorAll('link[rel="stylesheet"][href]').forEach(normaliseStylesheetLink);
  }

  function watchHead() {
    if (!document.head) return;

    normaliseExistingStylesheets(document);

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (!(node instanceof Element)) return;

          if (node.matches('link[rel="stylesheet"][href]')) {
            normaliseStylesheetLink(node);
          }

          normaliseExistingStylesheets(node);
        });
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchHead, { once: true });
  } else {
    watchHead();
  }
})();
        `}
      </Script>

      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `}
      </Script>
    </>
  );
}

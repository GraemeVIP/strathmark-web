export const ANALYTICS_CONSENT_KEY = "strathmark_cookie_consent_v1";
export const ANALYTICS_CONSENT_EVENT = "strathmark:consent-changed";

export type AnalyticsConsentValue = "analytics" | "essential";

export type AnalyticsConsentSnapshot = AnalyticsConsentValue | "unset" | "loading";

export function getAnalyticsConsentSnapshot(): AnalyticsConsentSnapshot {
  try {
    const consent = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return consent === "analytics" || consent === "essential" ? consent : "unset";
  } catch {
    return "unset";
  }
}

export function subscribeAnalyticsConsent(onStoreChange: () => void) {
  window.addEventListener(ANALYTICS_CONSENT_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(ANALYTICS_CONSENT_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

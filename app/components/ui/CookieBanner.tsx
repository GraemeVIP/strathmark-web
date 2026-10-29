"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  ANALYTICS_CONSENT_EVENT,
  ANALYTICS_CONSENT_KEY,
  getAnalyticsConsentSnapshot,
  subscribeAnalyticsConsent,
  type AnalyticsConsentValue,
} from "@/lib/analytics-consent";

export function CookieBanner() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);
  const isProposalPage = pathname?.startsWith("/proposals/") ?? false;

  const consent = useSyncExternalStore(
    subscribeAnalyticsConsent,
    getAnalyticsConsentSnapshot,
    () => "loading"
  );

  const saveConsent = (value: AnalyticsConsentValue) => {
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
    } catch {
      // ignore
    }
    setDismissed(true);

    window.dispatchEvent(new Event(ANALYTICS_CONSENT_EVENT));
  };

  // Private proposal pages are invite-only; no banner noise there.
  if (isProposalPage || consent !== "unset" || dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] p-3 sm:p-4">
      <div className="mx-auto max-w-3xl rounded-2xl bg-ink/95 shadow-[0_20px_50px_rgba(13,19,33,0.3)] supports-[backdrop-filter]:backdrop-blur-sm transform-gpu">
        <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between md:gap-5 md:px-5">
          <div className="text-sm leading-relaxed text-white/75">
            <span className="font-semibold text-white">Cookies.</span>{" "}
            Analytics cookies are only set if you allow them.
            {" "}
            <Link href="/privacy" className="text-gold hover:text-white underline underline-offset-4">
              Learn more
            </Link>
            .
          </div>

          <div className="grid shrink-0 grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
            <button
              type="button"
              onClick={() => saveConsent("essential")}
              className="min-h-11 rounded-full border border-white/25 px-4 text-sm font-bold text-white transition-colors hover:border-white"
            >
              No thanks
            </button>
            <button
              type="button"
              onClick={() => saveConsent("analytics")}
              className={clsx(
                "min-h-11 rounded-full px-4 text-sm font-bold",
                "bg-signal text-ink hover:bg-white transition-colors"
              )}
            >
              Allow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="fixed inset-x-0 bottom-0 z-[55] p-3 sm:p-4 md:p-6">
      <div className="mx-auto max-w-7xl border border-white/10 bg-strath-navy/95 supports-[backdrop-filter]:backdrop-blur-sm shadow-xl transform-gpu">
        <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between md:gap-4 md:p-5">
          <div className="text-[15px] text-slate-300 leading-relaxed">
            <span className="font-semibold text-white">Cookies.</span>{" "}
            Essential storage remembers your choice. Analytics cookies are used only with your permission.
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
              className="min-h-11 border border-white/20 px-3 py-2.5 text-[15px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-gold hover:text-gold sm:px-5 sm:tracking-[0.1em]"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={() => saveConsent("analytics")}
              className={clsx(
                "min-h-11 px-3 py-2.5 text-[15px] font-bold uppercase tracking-[0.08em] sm:px-5 sm:tracking-[0.1em]",
                "bg-gold text-strath-navy hover:bg-white transition-colors"
              )}
            >
              Allow analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

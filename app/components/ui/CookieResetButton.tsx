"use client";

import { useState } from "react";
import {
  ANALYTICS_CONSENT_EVENT,
  ANALYTICS_CONSENT_KEY,
} from "@/lib/analytics-consent";

export function CookieResetButton() {
  const [done, setDone] = useState(false);

  const reset = () => {
    try {
      window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
    } catch {
      // ignore
    }
    setDone(true);
    window.dispatchEvent(new Event(ANALYTICS_CONSENT_EVENT));
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={reset}
      className="min-h-11 border border-white/15 px-5 py-2.5 text-[15px] font-bold uppercase tracking-widest text-white transition-colors hover:border-gold hover:text-gold"
    >
      {done ? "Resetting…" : "Show cookie notice again"}
    </button>
  );
}

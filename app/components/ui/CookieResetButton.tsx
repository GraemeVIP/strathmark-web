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
      className="min-h-11 rounded-full border-2 border-ink px-5 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-white"
    >
      {done ? "Resetting…" : "Show cookie notice again"}
    </button>
  );
}

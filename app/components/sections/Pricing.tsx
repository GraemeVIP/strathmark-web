import { ArrowRight, Check } from "lucide-react";
import { clsx } from "clsx";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { PLANS, TERMS } from "@/lib/offers";

export function Pricing({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section className="bg-paper py-20 md:py-28" id="pricing">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Pricing</p>
            <Heading className="section-title mt-5">Prices on the page. No surprises.</Heading>
          </div>
          <p className="text-lg leading-8 text-ink-2 lg:col-span-5">
            Most agencies make you book a call to find out what anything costs. Here’s what I charge. Your quote is fixed before any work starts.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={clsx(
                "relative flex flex-col rounded-[1.5rem] p-7 md:p-8",
                plan.featured ? "bg-ink text-white shadow-[0_40px_80px_rgba(13,19,33,0.25)] lg:-translate-y-3" : "border border-line bg-white text-ink"
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-signal px-3 py-1 font-mono text-[12px] font-bold uppercase tracking-[0.1em] text-ink">
                  Most popular
                </span>
              ) : null}
              <h3 className="font-display text-xl font-bold [font-stretch:110%]">{plan.name}</h3>
              <p className={clsx("mt-2 text-[15px] leading-6", plan.featured ? "text-white/70" : "text-ink-2")}>{plan.summary}</p>
              <p className="mt-7">
                <span className={clsx("block font-mono text-[12px] uppercase tracking-[0.12em]", plan.featured ? "text-white/60" : "text-ink-3")}>{plan.cadence}</span>
                <span className="font-display text-[3rem] font-extrabold leading-none [font-stretch:105%]">{plan.price}</span>
              </p>
              <ul className={clsx("mt-7 space-y-3 border-t pt-6", plan.featured ? "border-white/15" : "border-line")}>
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-6">
                    <Check aria-hidden="true" size={18} strokeWidth={3} className={clsx("mt-0.5 shrink-0", plan.featured ? "text-signal" : "text-signal-ink")} />
                    <span className={plan.featured ? "text-white/85" : "text-ink-2"}>{item}</span>
                  </li>
                ))}
              </ul>
              <SectionLink
                href={`/?service=${plan.cta}#contact`}
                className={clsx(
                  "group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-bold transition-colors",
                  plan.featured ? "bg-signal text-ink hover:bg-white" : "border-2 border-ink text-ink hover:bg-ink hover:text-white"
                )}
              >
                Get a quote
                <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
              </SectionLink>
            </article>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-3">
          {TERMS.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

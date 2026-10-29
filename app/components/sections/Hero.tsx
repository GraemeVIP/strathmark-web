import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { GROWTH_REVIEW_HREF } from "@/lib/offers";

const TRUST = ["Prices on the site", "You own everything", "No long contracts"] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="road-lines absolute inset-0 -z-10" aria-hidden="true" />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow">Websites · SEO · Google Ads · Edinburgh</p>
          <h1 className="mt-6 font-display text-[clamp(2.7rem,6.4vw,5.6rem)] font-extrabold leading-[0.95] tracking-[-0.02em] text-ink [font-stretch:112%]">
            Websites and Google marketing that{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">bring in sales.</span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-[0.06em] z-0 h-[0.28em] rounded-sm bg-signal/80" />
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-2 md:text-xl md:leading-9">
            I build fast, properly made websites, then run the SEO and Google Ads that fill them with enquiries. You deal with me from the first call to the monthly report. No account managers and no juniors learning on your budget.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <SectionLink
              href={GROWTH_REVIEW_HREF}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-signal px-7 text-base font-bold text-ink shadow-[0_12px_30px_rgba(255,106,43,0.35)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#ff7d45]"
            >
              Book a free growth review
              <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
            </SectionLink>
            <SectionLink
              href="/pricing"
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-ink px-7 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              See prices
            </SectionLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-ink-2">
            {TRUST.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check aria-hidden="true" size={17} className="text-signal-ink" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-mist shadow-[0_40px_80px_rgba(13,19,33,0.18)]">
            <Image
              src="/optimized/founder.webp"
              alt="Graeme, founder of Strathmark"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover object-[center_18%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden="true" />
            <p className="absolute bottom-5 left-5 text-white">
              <span className="block font-display text-xl font-bold [font-stretch:110%]">Graeme</span>
              <span className="text-sm text-white/80">15 years in search and paid media</span>
            </p>
          </div>

          <figure className="relative mt-4 rounded-2xl border border-line bg-white p-5 shadow-[0_24px_50px_rgba(13,19,33,0.16)] sm:absolute sm:-left-10 sm:top-8 sm:mt-0 sm:w-[15.5rem] lg:-left-16">
            <figcaption className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
              UK car leasing broker
            </figcaption>
            <p className="mt-1 text-sm text-ink-2">Sales a month, four months apart</p>
            <div className="mt-4 flex items-end gap-3" aria-hidden="true">
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-mono text-xs text-ink-3">~300</span>
                <span className="block h-7 w-12 rounded-t-[4px] bg-sky" />
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-mono text-xs font-semibold text-ink">1,000+</span>
                <span className="block h-24 w-12 rounded-t-[4px] bg-signal" />
              </div>
            </div>
            <p className="sr-only">Around 300 sales a month before, over 1,000 a month four months later.</p>
            <p className="mt-3 border-t border-line pt-3 font-display text-2xl font-extrabold text-ink [font-stretch:110%]">3× in 4 months</p>
          </figure>
        </div>
      </div>
    </section>
  );
}

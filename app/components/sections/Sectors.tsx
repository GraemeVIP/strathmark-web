import Link from "next/link";
import { ArrowRight, CarFront, MapPin } from "lucide-react";

export function Sectors() {
  return (
    <section className="bg-mist py-20 md:py-28" id="who-for">
      <div className="section-shell">
        <p className="eyebrow">Who it’s for</p>
        <h2 className="section-title mt-5 max-w-3xl">Businesses where every enquiry counts.</h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Link href="/automotive-seo" className="group relative flex flex-col overflow-hidden rounded-[1.5rem] bg-ink p-8 text-white md:p-10">
            <div className="road-lines-dark absolute inset-0 opacity-60" aria-hidden="true" />
            <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-signal text-ink">
              <CarFront aria-hidden="true" size={24} />
            </span>
            <p className="relative mt-8 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-signal">Specialist</p>
            <h3 className="relative mt-2 font-display text-[2rem] font-bold leading-tight [font-stretch:110%]">Car leasing and automotive</h3>
            <p className="relative mt-4 max-w-lg text-base leading-7 text-white/75">
              Leasing brokers, dealers and vehicle businesses fighting the big comparison sites for the same searches. I’ve done this before, and tripled sales doing it.
            </p>
            <span className="relative mt-8 inline-flex items-center gap-2 font-bold text-white group-hover:text-signal">
              SEO and Google Ads for automotive <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <div className="flex flex-col rounded-[1.5rem] border border-line bg-white p-8 md:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-signal">
              <MapPin aria-hidden="true" size={24} />
            </span>
            <p className="mt-8 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-signal-ink">Local</p>
            <h3 className="mt-2 font-display text-[2rem] font-bold leading-tight text-ink [font-stretch:110%]">Edinburgh and Scotland</h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-ink-2">
              Trades, clinics, hospitality, professional services. Local businesses that need a website people trust and to show up when someone nearby searches.
            </p>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-8">
              <Link href="/web-design-edinburgh" className="group inline-flex items-center gap-2 font-bold text-ink hover:text-signal-ink">
                Web design Edinburgh <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/seo-edinburgh" className="group inline-flex items-center gap-2 font-bold text-ink hover:text-signal-ink">
                SEO Edinburgh <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

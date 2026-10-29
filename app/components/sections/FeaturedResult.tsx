import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "~300 → 1,000+", label: "sales a month" },
  { value: "4 months", label: "from start to tripled" },
  { value: "29.2K", label: "search clicks in the measured period" },
] as const;

export function FeaturedResult() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28" id="results">
      <div className="road-lines-dark absolute inset-0" aria-hidden="true" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow eyebrow-dark">Result · Car leasing</p>
          <h2 className="section-title mt-5 text-white">First Vehicle Leasing tripled its sales in four months.</h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Search traffic had been sliding for over a year. I found the structural problems holding the site back and fixed them. Clicks turned, and the sales followed.
          </p>
          <dl className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-ink p-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-signal [font-stretch:108%]">{stat.value}</dd>
                <dd className="mt-1 text-sm text-white/65">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/case-studies/organic-turnaround-uk-automotive"
            className="group mt-8 inline-flex min-h-11 items-center gap-2 text-base font-bold text-white underline decoration-signal decoration-2 underline-offset-[6px] hover:text-signal"
          >
            Read how it was done
            <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <figure className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-1.5 border-b border-line bg-mist px-4 py-3" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-ink-3">search.google.com/search-console</span>
            </div>
            <Image
              src="/case-studies/organic-turnaround-gsc.png"
              alt="Google Search Console for firstvehicleleasing.co.uk: 29.2K clicks and 24.5M impressions, with clicks climbing sharply from September 2025."
              width={2276}
              height={1366}
              sizes="(max-width: 1024px) 92vw, 720px"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-sm text-white/60">The real Search Console account. The blue line is clicks from Google.</figcaption>
        </figure>
      </div>
    </section>
  );
}

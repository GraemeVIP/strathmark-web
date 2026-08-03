import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import { Footer } from "@/app/components/sections/Footer";
import { Navigation } from "@/app/components/Navigation";
import { SHARE_IMAGE_PATH, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies | Strathmark Consulting",
  description:
    "Selected engagements across insurance, legal services, energy, hospitality, and leisure. Real clients, documented outcomes.",
  openGraph: {
    title: "Case Studies | Strathmark Consulting",
    description:
      "Selected engagements across insurance, legal services, energy, hospitality, and leisure. Real clients, documented outcomes.",
    url: `${SITE_URL}/case-studies`,
    images: [SHARE_IMAGE_PATH],
  },
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
};

const industries = [
  "Insurance",
  "Legal Services",
  "Energy & Utilities",
  "Hospitality",
  "Leisure & Sport",
  "Automotive",
];

export default function CaseStudiesIndex() {
  const [flagship, ...remaining] = caseStudies;

  return (
    <main className="min-h-screen bg-strath-navy text-slate-200 selection:bg-gold selection:text-strath-navy flex flex-col">
      <Navigation />

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/5 px-6 pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold/6 blur-[160px]" />
          <div className="absolute right-[5%] top-1/4 h-80 w-80 rounded-full bg-blue-900/20 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <span className="inline-flex items-center border border-gold/20 bg-gold/8 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.35em] text-gold">
            Selected engagements
          </span>

          <h1 className="mt-8 max-w-4xl font-serif text-5xl font-bold leading-[1.08] text-white md:text-7xl">
            Seven studies.<br className="hidden sm:block" /> Real clients.<br className="hidden sm:block" /> Documented outcomes.
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-400 md:text-xl">
            These engagements cover enterprise insurance, Scottish legal services, national energy, Highland hospitality, and destination leisure. Each one records what actually shifted — in demand, conversion, and commercial clarity.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-px border border-white/8 bg-white/8 md:grid-cols-4">
            {[
              { value: `${caseStudies.length}`, label: "Clients documented" },
              { value: "6", label: "Industries covered" },
              { value: "Scotland & UK", label: "Geographic reach" },
              { value: "Search + CRO", label: "Core disciplines" },
            ].map((stat) => (
              <div key={stat.label} className="bg-strath-navy px-6 py-7">
                <p className="font-serif text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Flagship card ──────────────────────────────────────────────── */}
      <section className="border-b border-white/5 px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="mb-8 text-[10px] font-mono uppercase tracking-[0.28em] text-slate-500">
            Flagship engagement
          </p>

          <Link href={`/case-studies/${flagship.slug}`} className="group block">
            <article className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-8 transition-all duration-300 hover:border-gold/35 md:p-12 lg:p-14">
              <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/7 blur-[120px] transition-opacity duration-500 group-hover:opacity-150" />
              <div className="pointer-events-none absolute bottom-0 left-[20%] h-64 w-64 rounded-full bg-blue-900/15 blur-[100px]" />

              <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-[0.26em]">
                    <span className="border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
                      {flagship.industry}
                    </span>
                    <span className="text-slate-500">{flagship.region}</span>
                    <span className="text-slate-700">/</span>
                    <span className="text-slate-500">{flagship.engagementType}</span>
                  </div>

                  <h2 className="mt-8 font-serif text-4xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-gold md:text-5xl lg:text-6xl">
                    {flagship.client}
                  </h2>

                  <p className="mt-5 text-lg font-light leading-relaxed text-slate-300 md:text-xl">
                    {flagship.headline}
                  </p>

                  <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-slate-500">
                    {flagship.businessContext}
                  </p>

                  <div className="mt-10 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-gold transition-all duration-200 group-hover:gap-3">
                    Read case study <ArrowRight size={14} />
                  </div>
                </div>

                <div className="space-y-8 border-l border-white/10 pl-10 lg:pl-12">
                  <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500">
                    Key outcomes
                  </p>
                  {flagship.metrics.map((metric) => (
                    <div key={metric.label} className="border-l-2 border-gold pl-5">
                      <p className="font-serif text-4xl font-bold text-white">{metric.value}</p>
                      <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.18em] text-gold">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-sm font-light leading-relaxed text-slate-400">
                        {metric.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* ─── Remaining studies grid ──────────────────────────────────── */}
      <section className="flex-1 px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-slate-500">
                All engagements
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
                Further case studies
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-slate-500">
              Enterprise, regional, and owner-led brands — each with a specific commercial challenge and a documented outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remaining.map((study, i) => (
              <Link
                href={`/case-studies/${study.slug}`}
                key={study.slug}
                className="group flex h-full"
              >
                <article className="relative flex h-full w-full flex-col overflow-hidden border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.03]">
                  <span className="absolute right-5 top-5 font-mono text-5xl font-bold leading-none text-white/[0.04]">
                    {String(i + 2).padStart(2, "0")}
                  </span>

                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em]">
                    <span className="text-gold">{study.industry}</span>
                    <span className="text-slate-700">/</span>
                    <span className="text-slate-500">{study.region}</span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-bold leading-tight text-white transition-colors duration-200 group-hover:text-gold">
                    {study.client}
                  </h3>

                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-slate-400">
                    {study.excerpt}
                  </p>

                  <div className="mt-7 space-y-4 border-t border-white/8 pt-6">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[9px] font-mono uppercase tracking-[0.18em] text-slate-500">
                            {metric.label}
                          </p>
                          <p className="mt-0.5 text-[10px] font-light leading-relaxed text-slate-600">
                            {metric.context}
                          </p>
                        </div>
                        <p className="shrink-0 font-serif text-2xl font-bold text-white">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-2">
                    <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-gold transition-all duration-200 group-hover:gap-3">
                      View detail <ArrowRight size={13} />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries strip ───────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <p className="shrink-0 text-[10px] font-mono uppercase tracking-[0.28em] text-slate-600">
            Industries
          </p>
          <div className="flex flex-wrap gap-2.5">
            {industries.map((sector) => (
              <span
                key={sector}
                className="border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="border-t border-white/5 px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-10 border border-white/10 bg-white/[0.02] p-8 md:grid-cols-2 md:items-center md:p-12">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-gold">
                Working on something similar?
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
                Let's look at what's suppressing your commercial performance.
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-sm font-light leading-relaxed text-slate-400">
                If spend is climbing but visibility is flat, or the site generates traffic that doesn't convert, the problem is usually structural before it's tactical.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-strath-navy transition-colors hover:bg-white"
              >
                Request a review <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

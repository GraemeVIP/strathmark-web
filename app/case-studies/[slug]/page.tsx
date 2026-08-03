import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import { Footer } from "@/app/components/sections/Footer";
import { Navigation } from "@/app/components/Navigation";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { SHARE_IMAGE_PATH, SITE_URL } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  return {
    title: study ? `${study.client} | Strathmark Case Study` : "Case Study Not Found",
    description: study?.excerpt,
    openGraph: {
      title: study ? `${study.client} | Strathmark Case Study` : "Case Study",
      description: study?.excerpt,
      type: "article",
      url: study ? `${SITE_URL}/case-studies/${study.slug}` : `${SITE_URL}/case-studies`,
      images: [SHARE_IMAGE_PATH],
    },
    alternates: {
      canonical: study ? `${SITE_URL}/case-studies/${study.slug}` : `${SITE_URL}/case-studies`,
    },
  };
}

function getRelatedStudies(currentSlug: string, currentIndustry: string) {
  return caseStudies
    .filter((study) => study.slug !== currentSlug)
    .sort((a, b) => Number(b.industry === currentIndustry) - Number(a.industry === currentIndustry))
    .slice(0, 3);
}

export default async function CaseStudyDetail({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = getRelatedStudies(study.slug, study.industry);
  const studyIndex = caseStudies.findIndex((s) => s.slug === slug);

  return (
    <main className="min-h-screen bg-strath-navy text-slate-200 selection:bg-gold selection:text-strath-navy flex flex-col">
      <Navigation />

      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-white/5 px-6 pt-32 pb-0 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-0 h-80 w-80 rounded-full bg-gold/7 blur-[130px]" />
          <div className="absolute right-[5%] top-1/3 h-64 w-64 rounded-full bg-blue-900/15 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.26em] text-slate-500 transition-colors hover:text-gold"
            >
              <ArrowLeft size={13} /> All case studies
            </Link>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-600">
              {String(studyIndex + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 pb-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:pb-0">
            <div>
              <div className="flex flex-wrap gap-2.5 text-[10px] font-mono uppercase tracking-[0.26em]">
                <span className="border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
                  {study.industry}
                </span>
                <span className="border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                  {study.region}
                </span>
                <span className="border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                  {study.engagementType}
                </span>
              </div>

              <h1 className="mt-8 font-serif text-5xl font-bold leading-[1.06] text-white md:text-7xl">
                {study.client}
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-slate-300">
                {study.headline}
              </p>
            </div>

            {/* Engagement sidebar */}
            <div className="relative lg:self-end">
              <div className="border border-white/10 bg-white/[0.03] p-7 lg:mb-0">
                <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-gold">
                  Engagement snapshot
                </p>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
                      Timeframe
                    </dt>
                    <dd className="mt-2 text-sm text-white">{study.timeframe}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
                      Mandate
                    </dt>
                    <dd className="mt-2 text-sm font-light leading-relaxed text-slate-300">
                      {study.mandate}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
                      Services
                    </dt>
                    <dd className="mt-3 flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <span
                          key={service}
                          className="border border-white/10 bg-white/5 px-2.5 py-1.5 text-[9px] font-mono uppercase tracking-[0.18em] text-slate-300"
                        >
                          {service}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Context bar — full bleed */}
        <div className="mt-0 border-t border-white/5 bg-white/[0.015]">
          <div className="max-w-7xl mx-auto px-0 py-5">
            <p className="text-sm font-light leading-relaxed text-slate-500 md:text-base">
              {study.businessContext}
            </p>
          </div>
        </div>
      </header>

      <article className="w-full flex-1 px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          {/* ─── Metrics ─────────────────────────────────────────── */}
          <section aria-label="Key metrics">
            <p className="mb-8 text-[10px] font-mono uppercase tracking-[0.28em] text-gold">
              Measured outcomes
            </p>
            <div className="grid grid-cols-1 gap-px border border-white/8 bg-white/8 md:grid-cols-3">
              {study.metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className="relative bg-strath-navy p-8 md:p-10"
                >
                  {i === 0 && (
                    <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/6 blur-[80px]" />
                  )}
                  <p className="relative font-serif text-5xl font-bold text-white md:text-6xl">
                    {metric.value}
                  </p>
                  <p className="relative mt-4 text-[10px] font-mono uppercase tracking-[0.22em] text-gold">
                    {metric.label}
                  </p>
                  <p className="relative mt-3 text-sm font-light leading-relaxed text-slate-400">
                    {metric.context}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Main content: challenge / approach / outcomes ─── */}
          <section className="mt-16 md:mt-20" aria-label="Case study detail">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

              {/* Challenge */}
              <div className="flex flex-col gap-8">
                <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10">
                  <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-gold">
                    The challenge
                  </p>
                  <div className="mt-7 space-y-5">
                    {study.challenge.map((item) => (
                      <div key={item} className="flex gap-4">
                        <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                        <p className="text-sm font-light leading-relaxed text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-white/10 bg-[#0b1220] p-8 md:p-10">
                  <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-gold">
                    What changed
                  </p>
                  <div className="mt-7 space-y-4">
                    {study.outcomes.map((item) => (
                      <div key={item} className="flex gap-4">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-gold/70" />
                        <p className="text-sm font-light leading-relaxed text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Strategic workstreams */}
              <div className="border border-white/10 bg-white/[0.025] p-8 md:p-10">
                <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-gold">
                  Strategic workstreams
                </p>
                <div className="mt-8 space-y-0">
                  {study.interventions.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-6 border-b border-white/5 py-7 first:pt-0 last:border-b-0 last:pb-0"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/25 bg-gold/8 font-mono text-sm font-bold text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="pt-1.5 text-sm font-light leading-relaxed text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ─── Why this matters ─────────────────────────────── */}
          <section className="mt-12 border border-gold/15 bg-gradient-to-br from-gold/5 to-transparent p-8 md:mt-16 md:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-gold">
                  Principle behind the work
                </p>
                <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                  Structural clarity before tactical activity.
                </h2>
              </div>
              <div className="space-y-4 lg:pt-1">
                <p className="text-sm font-light leading-relaxed text-slate-300">
                  This engagement reflects how Strathmark approaches every brief: diagnose before acting, connect decisions to commercial consequences, and remove the structural friction that makes demand harder to win and convert.
                </p>
                <p className="text-sm font-light leading-relaxed text-slate-400">
                  Dashboards can be made to look good in ways that don't reflect actual performance. The work documented here was oriented toward the harder goal: making real improvements to the things that affect revenue.
                </p>
              </div>
            </div>
          </section>

          {/* ─── Services used ────────────────────────────────── */}
          <section className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/5 pt-10">
            <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-slate-600">
              Services used
            </p>
            {study.services.map((service) => (
              <span
                key={service}
                className="border border-white/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400"
              >
                {service}
              </span>
            ))}
          </section>

          {/* ─── Related studies ──────────────────────────────── */}
          {relatedStudies.length > 0 && (
            <section className="mt-20 border-t border-white/5 pt-16">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-gold">
                    Related work
                  </p>
                  <h2 className="mt-4 font-serif text-3xl font-bold text-white">
                    More case studies
                  </h2>
                </div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-gold transition-all hover:gap-3"
                >
                  View all <ArrowRight size={14} />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedStudies.map((related) => (
                  <Link
                    href={`/case-studies/${related.slug}`}
                    key={related.slug}
                    className="group block"
                  >
                    <article className="flex h-full flex-col border border-white/10 bg-white/[0.02] p-6 transition-colors group-hover:border-gold/30">
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em]">
                        <span className="text-gold">{related.industry}</span>
                        <span className="text-slate-700">/</span>
                        <span className="text-slate-500">{related.region}</span>
                      </div>
                      <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-white transition-colors group-hover:text-gold">
                        {related.client}
                      </h3>
                      <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-slate-400">
                        {related.excerpt}
                      </p>
                      <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                        {related.metrics.slice(0, 2).map((metric) => (
                          <div
                            key={metric.label}
                            className="flex items-baseline justify-between gap-3"
                          >
                            <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-slate-500">
                              {metric.label}
                            </span>
                            <span className="font-serif text-2xl font-bold text-white">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-1">
                        <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-gold transition-all group-hover:gap-3">
                          Read <ArrowRight size={12} />
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ─── CTA ──────────────────────────────────────────── */}
          <section className="mt-16 border border-white/10 bg-white/[0.02] p-8 text-center md:mt-20 md:p-14">
            <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-gold">
              Start a conversation
            </p>
            <h2 className="mt-5 font-serif text-3xl font-bold text-white md:text-4xl">
              Recognise any of this?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-slate-400">
              If spend is rising, visibility is flattening, or the site feels harder to govern than it should, the problem is usually structural before it's tactical. A diagnostic review is the fastest way to understand what's actually in the way.
            </p>
            <SectionLink
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-strath-navy transition-colors hover:bg-white"
            >
              Request a review <ArrowRight size={16} />
            </SectionLink>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import { Footer } from "@/app/components/sections/Footer";
import { Navigation } from "@/app/components/Navigation";
import { RevenueFocus } from "@/app/components/sections/RevenueFocus";
import { SHARE_IMAGE_PATH, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results and Case Studies | Strathmark",
  description: "Real results with the numbers behind them, from a car leasing broker that tripled its leads in four months to insurers, law firms and leisure brands.",
  openGraph: {
    title: "Results and Case Studies | Strathmark",
    description: "Real results with the numbers behind them.",
    url: `${SITE_URL}/case-studies`,
    images: [SHARE_IMAGE_PATH],
  },
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
};

const [lead, ...others] = caseStudies;

function Metrics({ study, tone }: { study: (typeof caseStudies)[number]; tone: "paper" | "white" }) {
  return (
    <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
      {study.metrics.map((metric) => (
        <div key={metric.label} className={tone === "paper" ? "bg-paper p-4" : "bg-white p-4"}>
          <dt className="sr-only">{metric.label}</dt>
          <dd className="font-display text-xl font-extrabold leading-tight text-ink [font-stretch:106%] md:text-2xl">{metric.value}</dd>
          <dd className="mt-1 text-[13px] leading-5 text-ink-3">{metric.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function CaseStudiesIndex() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <header className="relative isolate overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="road-lines absolute inset-0 -z-10" aria-hidden="true" />
        <div className="section-shell">
          <p className="eyebrow">Results</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.02em] [font-stretch:112%]">
            Results you can check.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-2 md:text-xl md:leading-9">
            Work for car leasing, insurance, legal, energy, hospitality and leisure businesses, with the numbers behind it. The car leasing story includes the real Search Console graph.
          </p>
        </div>
      </header>

      <section className="pb-20 md:pb-28">
        <div className="section-shell grid gap-6">
          {lead ? (
            <Link
              href={`/case-studies/${lead.slug}`}
              className="group grid overflow-hidden rounded-[1.5rem] border border-line bg-white transition-shadow hover:shadow-[0_30px_70px_rgba(13,19,33,0.12)] lg:grid-cols-12"
            >
              <div className="flex flex-col p-7 md:p-10 lg:col-span-5">
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-signal-ink">
                  {lead.industry} · {lead.timeframe}
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.05] [font-stretch:108%] group-hover:text-signal-ink">
                  {lead.headline}
                </h2>
                <p className="mt-5 text-lg leading-8 text-ink-2">{lead.excerpt}</p>
                <div className="mt-8">
                  <Metrics study={lead} tone="paper" />
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-bold text-ink">
                  Read the full story <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              {lead.image ? (
                <div className="border-t border-line bg-mist p-5 md:p-8 lg:col-span-7 lg:border-l lg:border-t-0">
                  <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_50px_rgba(13,19,33,0.10)]">
                    <Image src={lead.image.src} alt={lead.image.alt} width={lead.image.width} height={lead.image.height} sizes="(max-width: 1024px) 92vw, 680px" className="h-auto w-full" />
                  </div>
                  <p className="mt-3 text-sm text-ink-3">{lead.image.caption}</p>
                </div>
              ) : null}
            </Link>
          ) : null}

          <div className="grid gap-6 md:grid-cols-2">
            {others.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col rounded-[1.5rem] border border-line bg-white p-7 transition-shadow hover:shadow-[0_30px_70px_rgba(13,19,33,0.12)] md:p-8"
              >
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-signal-ink">{study.industry}</p>
                <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-tight [font-stretch:108%] group-hover:text-signal-ink">{study.client}</h2>
                <p className="mt-3 text-base leading-7 text-ink-2">{study.headline}</p>
                <div className="mt-6">
                  <Metrics study={study} tone="paper" />
                </div>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 font-bold text-ink">
                  Read the story <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RevenueFocus compact />
      <Footer />
    </main>
  );
}

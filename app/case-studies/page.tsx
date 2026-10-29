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
  title: "Results | Strathmark",
  description: "Real results with the numbers behind them, including a national car leasing broker that tripled its inbound leads in four months.",
  openGraph: {
    title: "Results | Strathmark",
    description: "Real results with the numbers behind them.",
    url: `${SITE_URL}/case-studies`,
    images: [SHARE_IMAGE_PATH],
  },
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
};

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
            I’d rather show you one result in full, with the real numbers and the real Search Console graph, than a wall of logos and percentages nobody can check.
          </p>
        </div>
      </header>

      <section className="pb-20 md:pb-28">
        <div className="section-shell grid gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group grid overflow-hidden rounded-[1.5rem] border border-line bg-white transition-shadow hover:shadow-[0_30px_70px_rgba(13,19,33,0.12)] lg:grid-cols-12"
            >
              <div className="flex flex-col p-7 md:p-10 lg:col-span-5">
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-signal-ink">
                  {study.industry} · {study.timeframe}
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.05] [font-stretch:108%] group-hover:text-signal-ink">
                  {study.headline}
                </h2>
                <p className="mt-5 text-lg leading-8 text-ink-2">{study.excerpt}</p>
                <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="bg-paper p-4">
                      <dt className="sr-only">{metric.label}</dt>
                      <dd className="font-display text-xl font-extrabold leading-tight text-ink [font-stretch:106%] md:text-2xl">{metric.value}</dd>
                      <dd className="mt-1 text-[13px] leading-5 text-ink-3">{metric.label}</dd>
                    </div>
                  ))}
                </dl>
                <span className="mt-8 inline-flex items-center gap-2 font-bold text-ink">
                  Read the full story <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              {study.image ? (
                <div className="border-t border-line bg-mist p-5 md:p-8 lg:col-span-7 lg:border-l lg:border-t-0">
                  <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_50px_rgba(13,19,33,0.10)]">
                    <Image
                      src={study.image.src}
                      alt={study.image.alt}
                      width={study.image.width}
                      height={study.image.height}
                      sizes="(max-width: 1024px) 92vw, 680px"
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-3 text-sm text-ink-3">{study.image.caption}</p>
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </section>

      <RevenueFocus compact />
      <Footer />
    </main>
  );
}

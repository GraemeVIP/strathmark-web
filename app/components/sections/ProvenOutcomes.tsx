import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";

export function ProvenOutcomes() {
  const featuredStudies = caseStudies.filter((study) => study.featured).slice(0, 3);

  if (featuredStudies.length === 0) return null;

  return (
    <section className="w-full bg-[#07111d] py-20 md:py-28" id="outcomes">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-kicker">Evidence from digital performance work</p>
            <h2 className="mt-6 max-w-5xl text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1.01] tracking-[-0.035em] text-white">
              Complex systems become useful when the diagnosis is commercial.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base leading-7 text-slate-300">
              These engagements demonstrate digital strategy, technical and commercial problem-solving. They are not presented as AI implementation results.
            </p>
            <Link href="/case-studies" className="group mt-5 inline-flex min-h-11 items-center gap-3 text-[15px] font-bold uppercase tracking-[0.1em] text-gold transition-colors hover:text-white">
              View all case studies <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featuredStudies.map((study, index) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group flex">
              <article className="flex w-full flex-col border border-white/12 bg-[#0d1c2c] p-7 transition-colors group-hover:border-gold/45 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[15px] font-semibold uppercase tracking-[0.1em] text-gold">{study.industry}</span>
                  <span className="font-mono text-[15px] text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-3xl font-semibold text-white transition-colors group-hover:text-gold">{study.client}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-200">{study.headline}</p>
                <p className="mt-4 text-base leading-7 text-slate-400">{study.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 border-t border-white/10 pt-7 text-[15px] font-bold uppercase tracking-[0.1em] text-gold">
                  Read the engagement <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </Link>
          ))}
        </div>

        <p className="mt-6 max-w-4xl text-[15px] leading-7 text-slate-400">
          Published metrics on individual case-study pages should be read with their stated scope and context. They are engagement evidence, not guarantees of future performance.
        </p>
      </div>
    </section>
  );
}

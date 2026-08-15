import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

const PRINCIPLES = [
  {
    title: "One commercial plan",
    copy: "Brand, website, search, paid media, measurement and AI are treated as connected parts of the customer and operating journey.",
  },
  {
    title: "Senior work stays senior",
    copy: "The person diagnosing the problem remains involved in the decisions, delivery and measurement.",
  },
  {
    title: "The right depth for the job",
    copy: "Cross-channel diagnosis stays joined up, while specialist partners are brought in openly when a brief needs deeper production expertise.",
  },
  {
    title: "Claims need evidence",
    copy: "Baselines, assumptions and limits are stated. The work is revised or stopped when the evidence does not support scale.",
  },
] as const;

export function About() {
  return (
    <section className="w-full bg-strath-navy py-20 md:py-28" id="about">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <p className="section-kicker">Why Strathmark</p>
            <div className="relative mt-8">
              <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-gold/60" aria-hidden="true" />
              <div className="relative aspect-[4/3] overflow-hidden bg-[#101f31]">
                <Image
                  src="/optimized/founder.webp"
                  alt="Strathmark principal consultant"
                  fill
                  sizes="(max-width: 1024px) 92vw, 500px"
                  className="object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-strath-navy/92 via-strath-navy/10 to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.12em] text-gold">Principal-led in Edinburgh</p>
                <p className="mt-2 text-base font-medium text-white">Direct senior involvement from diagnosis to decision</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="max-w-4xl text-[clamp(2.8rem,5vw,4.9rem)] font-semibold leading-[1.01] tracking-[-0.035em] text-white">
              Broad digital expertise without the usual hand-offs between channels.
            </h2>
            <div className="mt-8 grid gap-6 border-t border-white/10 pt-7 text-lg leading-8 text-slate-300 xl:grid-cols-2">
              <p>
                Most good specialists are naturally strongest in one lane. The difficulty is that customers do not experience SEO, advertising, brand and the website as separate departments.
              </p>
              <p>
                Strathmark brings more than a decade across digital strategy, SEO, paid acquisition, websites, conversion and technical delivery, with practical AI and automation where they improve the result.
              </p>
            </div>
            <div className="mt-7 border border-gold/30 bg-gold/10 p-6">
              <p className="text-base leading-7 text-slate-200">
                The breadth is used to diagnose the whole journey and keep the work accountable, not to pretend one person should do every specialist task. When a brief needs deeper design, development or production support, the right specialist is brought in openly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {PRINCIPLES.map((principle, index) => (
            <article key={principle.title} className="bg-[#0d1c2c] p-7 md:p-8">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center border border-gold/35 bg-gold/10 text-gold">
                  <Check aria-hidden="true" size={18} />
                </span>
                <span className="font-mono text-[15px] font-semibold text-gold">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">{principle.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{principle.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-6 border border-white/10 bg-white/[0.025] p-7 md:grid-cols-[0.8fr_1.2fr] md:p-9">
          <div>
            <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.12em] text-gold">Operator perspective</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Apex Aesthetics</h3>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">
              Running a specialist growth brand for UK aesthetic clinics keeps the work grounded in live commercial decisions, customers, systems and consequences, not abstract recommendations.
            </p>
            <a
              href="https://www.apexaesthetics.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex min-h-11 items-center gap-2 text-[15px] font-bold uppercase tracking-[0.1em] text-gold transition-colors hover:text-white"
            >
              Visit Apex Aesthetics
              <ArrowUpRight aria-hidden="true" size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Check, Sparkles } from "lucide-react";
import { SectionLink } from "@/app/components/ui/SectionLink";

const GROWTH_OUTCOMES = [
  ["Be found", "Connect SEO, Google Ads and Meta Ads to the demand that matters."],
  ["Be chosen", "Turn positioning, brand and website experience into better enquiries."],
  ["Work smarter", "Use measurement, AI and automation to remove friction and improve decisions."],
] as const;

export function Hero() {
  return (
    <section className="growth-hero relative isolate flex min-h-svh w-full items-center overflow-hidden bg-strath-navy pb-12 pt-28 md:pb-16 md:pt-32 xl:pt-28">
      <div className="editorial-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(201,164,99,0.22),transparent_30%),radial-gradient(circle_at_14%_72%,rgba(33,113,121,0.22),transparent_33%)]"
        aria-hidden="true"
      />

      <div className="section-shell relative grid items-center gap-10 xl:grid-cols-12 xl:gap-14">
        <div className="xl:col-span-7">
          <p className="section-kicker">Independent digital marketing consultancy</p>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.7rem,5.6vw,5.45rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-white">
            Digital Marketing Consultancy <span className="text-gold">Built to Work as One System</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
            Bring strategy, branding, websites, SEO, Google Ads, Meta Ads and practical AI together. Strathmark helps businesses in the UK, US and internationally generate better enquiries, remove wasted effort and make growth easier to manage.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SectionLink
              href="/?service=digital-growth-review#contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-7 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white"
            >
              Request a growth review
              <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
            </SectionLink>
            <SectionLink
              href="/services"
              className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-gold hover:text-gold"
            >
              Explore services
            </SectionLink>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-[15px] text-slate-300">
            {["Principal-led", "Cross-channel expertise", "Independent advice"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check aria-hidden="true" size={16} className="text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="xl:col-span-5" aria-label="Connected digital growth outcomes">
          <div className="border border-white/15 bg-[#0d1b2a]/94 shadow-[0_40px_100px_rgba(2,8,16,0.4)]">
            <div className="flex items-start justify-between border-b border-white/10 p-6 md:p-7">
              <div>
                <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.12em] text-gold">One accountable growth partner</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Make every part of your marketing strengthen the next.</h2>
              </div>
              <Sparkles aria-hidden="true" className="ml-4 mt-1 shrink-0 text-gold" size={24} />
            </div>
            <dl className="divide-y divide-white/10">
              {GROWTH_OUTCOMES.map(([term, detail], index) => (
                <div key={term} className="grid grid-cols-[2.5rem_1fr] gap-4 px-6 py-5 md:px-7">
                  <span className="font-mono text-[15px] font-semibold text-gold">0{index + 1}</span>
                  <div>
                    <dt className="text-lg font-semibold text-white">{term}</dt>
                    <dd className="mt-1 text-[15px] leading-6 text-slate-300">{detail}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}

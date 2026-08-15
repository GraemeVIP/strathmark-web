import Link from "next/link";
import { ArrowRight, BrainCircuit, Check, MousePointerClick, Search, ShieldCheck } from "lucide-react";
import { SectionLink } from "@/app/components/ui/SectionLink";

const PILLARS = [
  {
    eyebrow: "01 · Be found",
    title: "Search and paid demand",
    copy: "Capture existing demand, test new audiences and connect every pound of acquisition spend to a clearer commercial question.",
    icon: Search,
    links: [
      ["/seo-services", "SEO services and content"],
      ["/google-ads-management", "Google Ads and PPC"],
      ["/meta-ads-management", "Meta Ads management"],
      ["/paid-media", "Paid media strategy"],
    ],
  },
  {
    eyebrow: "02 · Be chosen",
    title: "Brand and conversion",
    copy: "Make the business easier to understand, trust and choose with a stronger position, identity, website and conversion journey.",
    icon: MousePointerClick,
    links: [
      ["/website-design", "Website design and development"],
      ["/branding-services", "Brand strategy and identity"],
      ["/digital-performance", "Conversion and digital performance"],
    ],
  },
  {
    eyebrow: "03 · Work smarter",
    title: "AI, automation and control",
    copy: "Use practical AI, better workflows and independent oversight to remove repeated work and make better-informed growth decisions.",
    icon: BrainCircuit,
    links: [
      ["/ai-consulting-services", "AI consulting and implementation"],
      ["/ai-strategy-consulting", "AI strategy and readiness"],
      ["/workflow-automation", "Workflow automation"],
      ["/marketing-agency-audit", "Agency audit and oversight"],
    ],
  },
] as const;

export function Services() {
  return (
    <section className="w-full bg-strath-navy py-20 md:py-28" id="services">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-kicker">Digital marketing services</p>
            <h2 className="mt-6 max-w-5xl text-[clamp(2.7rem,5vw,4.9rem)] font-semibold leading-[1.01] tracking-[-0.035em] text-white">
              Specialist services. One connected growth system.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300 lg:col-span-4">
            Fix one channel or connect the whole journey. Every engagement starts with the commercial constraint and uses the right mix of expertise to solve it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="relative overflow-hidden border border-white/12 bg-[#0d1c2c] p-7 md:p-9">
                <div className="absolute right-0 top-0 h-44 w-44 bg-gold/[0.07] blur-[70px]" aria-hidden="true" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center border border-gold/40 bg-gold/10 text-gold">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                  </div>
                  <p className="mt-8 font-mono text-[15px] font-semibold uppercase tracking-[0.12em] text-gold">{pillar.eyebrow}</p>
                  <h3 className="mt-3 text-4xl font-semibold leading-tight text-white">{pillar.title}</h3>
                  <p className="mt-5 text-base leading-8 text-slate-300">{pillar.copy}</p>
                  <ul className="mt-7 divide-y divide-white/10 border-y border-white/10 xl:mt-auto">
                    {pillar.links.map(([href, label]) => (
                      <li key={href}>
                        <Link href={href} className="group flex min-h-14 items-center justify-between gap-4 py-3 text-base font-semibold text-white transition-colors hover:text-gold">
                          <span className="flex items-center gap-3"><Check aria-hidden="true" size={16} className="text-gold" />{label}</span>
                          <ArrowRight aria-hidden="true" size={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid gap-6 border border-gold/30 bg-gold/10 p-7 md:grid-cols-[auto_1fr_auto] md:items-center md:p-9">
          <span className="grid h-12 w-12 place-items-center bg-gold text-ink">
            <ShieldCheck aria-hidden="true" size={22} />
          </span>
          <div>
            <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.12em] text-gold">Recommended entry point</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Digital Growth Review</h3>
            <p className="mt-2 max-w-3xl text-base leading-7 text-slate-300">
              A focused review of your offer, website, search, paid media, measurement and operational constraints. You receive a prioritised route forward, even when the right answer is to fix one thing before adding more spend.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <SectionLink href="/?service=digital-growth-review#contact" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-7 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white">
              Request the review <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
            </SectionLink>
            <Link href="/services" className="inline-flex min-h-11 items-center justify-center text-[15px] font-semibold text-gold transition-colors hover:text-white">
              View every service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

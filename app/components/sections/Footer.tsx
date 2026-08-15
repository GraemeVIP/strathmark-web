import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLink } from "@/app/components/ui/SectionLink";

const FOOTER_COLUMNS = [
  {
    title: "Grow demand",
    links: [
      ["/seo-services", "SEO services"],
      ["/google-ads-management", "Google Ads management"],
      ["/meta-ads-management", "Meta Ads management"],
      ["/paid-media", "Paid media strategy"],
    ],
  },
  {
    title: "Convert demand",
    links: [
      ["/website-design", "Website design"],
      ["/branding-services", "Branding services"],
      ["/digital-performance", "Digital growth review"],
      ["/marketing-agency-audit", "Agency audit"],
    ],
  },
  {
    title: "AI & company",
    links: [
      ["/ai-consulting-services", "AI consulting services"],
      ["/workflow-automation", "Workflow automation"],
      ["/case-studies", "Case studies"],
      ["/insights", "Insights"],
      ["/about", "About Strathmark"],
      ["/privacy", "Privacy"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="w-full bg-[#06101b] text-slate-300">
      <div className="border-b border-white/10">
        <div className="section-shell grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-16">
          <div>
            <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.12em] text-gold">A clearer next move</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              Ready to make your marketing work better?
            </h2>
          </div>
          <SectionLink
            href="/?service=digital-growth-review#contact"
            className="group inline-flex min-h-14 w-full items-center justify-center gap-3 bg-gold px-7 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white md:w-auto"
          >
            Request a digital growth review
            <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
          </SectionLink>
        </div>
      </div>

      <div className="section-shell py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.9fr] lg:gap-16">
          <div>
            <Link href="/" aria-label="Strathmark Consulting home" className="inline-flex min-h-11 items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-gold/45 bg-gold/10 font-serif text-xl font-bold text-gold">S</span>
              <span className="font-serif text-2xl tracking-[0.12em] text-white">STRATHMARK</span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
              Edinburgh-based digital marketing consultancy working internationally across strategy, brand, websites, SEO, paid media, measurement and practical AI.
            </p>
            <p className="mt-6 font-mono text-[15px] font-semibold uppercase tracking-[0.1em] text-slate-300">
              Edinburgh · Working internationally
            </p>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="font-sans text-[15px] font-semibold uppercase tracking-[0.1em] text-gold">{column.title}</h3>
                <ul className="mt-5 space-y-2">
                  {column.links.map(([href, label]) => (
                    <li key={label}>
                      <SectionLink href={href} className="inline-flex min-h-11 items-center text-[15px] text-slate-300 transition-colors hover:text-white">
                        {label}
                      </SectionLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 text-[15px] leading-6 text-slate-300 md:flex-row md:items-end md:justify-between">
          <div>
            <p>Strathmark Consulting, Edinburgh.</p>
            <p className="mt-1">Registered in Scotland.</p>
          </div>
          <div className="md:text-right">
            <p>© {new Date().getFullYear()} Strathmark Consulting. All rights reserved.</p>
            <p className="mt-1">Connected expertise. Independent judgement. Evidence before scale.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Wordmark } from "@/app/components/Navigation";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { GROWTH_REVIEW_HREF } from "@/lib/offers";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      ["/website-design", "Website design"],
      ["/seo-services", "SEO for Google and AI"],
      ["/google-ads-management", "Google Ads management"],
      ["/pricing", "Pricing"],
    ],
  },
  {
    title: "Who for",
    links: [
      ["/automotive-seo", "Car leasing and automotive"],
      ["/web-design-edinburgh", "Web design Edinburgh"],
      ["/seo-edinburgh", "SEO Edinburgh"],
    ],
  },
  {
    title: "Strathmark",
    links: [
      ["/case-studies", "Results"],
      ["/insights", "Insights"],
      ["/about", "About Graeme"],
      ["/privacy", "Privacy"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="w-full bg-ink text-white/75">
      <div className="section-shell py-14 md:py-20">
        <div className="grid gap-8 rounded-[1.5rem] bg-signal p-8 text-ink md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.02] [font-stretch:110%]">
              Want more enquiries from Google?
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-7 text-ink/80">Book a free growth review. 30 minutes, written notes, no obligation.</p>
          </div>
          <SectionLink
            href={GROWTH_REVIEW_HREF}
            className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ink px-7 text-base font-bold text-white transition-colors hover:bg-white hover:text-ink md:w-auto"
          >
            Book your review
            <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
          </SectionLink>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1.9fr] lg:gap-16">
          <div>
            <Link href="/" aria-label="Strathmark home" className="inline-flex min-h-11 items-center">
              <Wordmark inverted />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-7">
              Websites, SEO and Google Ads from Graeme. Based in Edinburgh, working across Scotland and the UK.
            </p>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-signal">{column.title}</h3>
                <ul className="mt-4 space-y-1">
                  {column.links.map(([href, label]) => (
                    <li key={label}>
                      <Link href={href} className="inline-flex min-h-11 items-center text-[15px] transition-colors hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm md:flex-row md:justify-between">
          <p>Strathmark Consulting, Edinburgh. Registered in Scotland.</p>
          <p>© {new Date().getFullYear()} Strathmark Consulting</p>
        </div>
      </div>
    </footer>
  );
}

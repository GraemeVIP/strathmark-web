import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Check, MousePointerClick, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/sections/Footer";
import { SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services for UK Businesses | Strathmark",
  description: "Digital marketing services for UK businesses: branding, web design, SEO, Google Ads, Meta Ads, agency audits, AI consulting and workflow automation.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Digital Marketing Services for UK Businesses | Strathmark",
    description: "Connect brand, web, search, paid media, measurement and practical AI under one senior-led plan.",
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [{ url: SHARE_IMAGE_PATH, width: 1200, height: 630, alt: "Digital marketing services — Strathmark" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services for UK Businesses | Strathmark",
    description: "Branding, web design, SEO, paid media, AI consulting and workflow automation under one plan.",
    images: [SHARE_IMAGE_PATH],
  },
};

type ServiceGroup = {
  eyebrow: string;
  title: string;
  copy: string;
  icon: LucideIcon;
  services: readonly (readonly [href: string, title: string, copy: string])[];
};

const GROUPS: readonly ServiceGroup[] = [
  {
    eyebrow: "01 · Be found",
    title: "Search and paid demand",
    copy: "Capture existing demand and reach new audiences with channels connected to a clear offer, landing journey and commercial measure.",
    icon: Search,
    services: [
      ["/seo-services", "SEO services", "Technical SEO, search-led content and authority focused on qualified demand."],
      ["/google-ads-management", "Google Ads management", "PPC structure, creative, landing pages and measurement built around useful enquiries."],
      ["/meta-ads-management", "Meta Ads management", "Facebook and Instagram campaigns with stronger audience, creative and conversion learning."],
      ["/paid-media", "Paid media strategy", "A joined-up acquisition plan across the channels that fit the buying journey."],
    ],
  },
  {
    eyebrow: "02 · Be chosen",
    title: "Brand and conversion",
    copy: "Make the business easier to understand, trust and choose at every point between first impression and qualified enquiry.",
    icon: MousePointerClick,
    services: [
      ["/branding-services", "Branding services", "Positioning, messaging and visual identity that make the value clearer."],
      ["/website-design", "Website design", "Conversion-focused websites combining content, UX, performance and search foundations."],
      ["/digital-performance", "Digital Growth Review", "An independent view of the whole marketing system and the next move that matters."],
      ["/marketing-agency-audit", "Marketing agency audit", "Evidence-led scrutiny of strategy, spend, access, reporting and accountability."],
    ],
  },
  {
    eyebrow: "03 · Work smarter",
    title: "AI and automation",
    copy: "Modernise useful work with practical AI, better processes and controls that preserve human authority and business ownership.",
    icon: BrainCircuit,
    services: [
      ["/ai-consulting-services", "AI consulting services", "Move from scattered experiments to one valuable, controlled implementation."],
      ["/ai-strategy-consulting", "AI strategy consulting", "Prioritise use cases, readiness, investment and governance before scaling."],
      ["/workflow-automation", "Workflow automation", "Reduce repeated work, slow hand-offs and fragmented information."],
    ],
  },
];

export default function ServicesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Strathmark digital marketing services",
    itemListElement: GROUPS.flatMap((group) => group.services).map(([href, name], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      url: `${SITE_URL}${href}`,
    })),
  };

  return (
    <main className="min-h-screen bg-strath-navy text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <Navigation />

      <header className="relative overflow-hidden border-b border-white/10 pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="editorial-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,164,99,0.2),transparent_30%)]" aria-hidden="true" />
        <div className="section-shell relative grid gap-10 xl:grid-cols-12 xl:items-end">
          <div className="xl:col-span-8">
            <p className="section-kicker">Connected digital expertise</p>
            <h1 className="mt-7 max-w-5xl text-[clamp(3rem,6.5vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white">
              Digital Marketing Services for UK Businesses
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Use one service to fix a clear constraint or connect the full customer journey. Strategy, branding, web, SEO, paid media, measurement and practical AI are kept under one commercial plan.
            </p>
          </div>
          <aside className="border border-gold/30 bg-gold/10 p-7 xl:col-span-4">
            <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.12em] text-gold">The difference</p>
            <p className="mt-5 text-2xl font-semibold leading-tight text-white">Broad enough to see the whole system. Honest enough to bring in deeper specialists when the work requires them.</p>
          </aside>
        </div>
      </header>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="section-shell space-y-16">
          {GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <section key={group.title} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <span className="grid h-12 w-12 place-items-center bg-strath-navy text-gold"><Icon aria-hidden="true" size={22} /></span>
                  <p className="mt-7 font-mono text-[15px] font-semibold uppercase tracking-[0.12em] text-[#74521f]">{group.eyebrow}</p>
                  <h2 className="mt-3 text-4xl font-semibold">{group.title}</h2>
                  <p className="mt-5 text-base leading-8 text-slate-600">{group.copy}</p>
                </div>
                <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:col-span-8">
                  {group.services.map(([href, title, copy]) => (
                    <Link key={href} href={href} className="group flex bg-white p-7 transition-colors hover:bg-[#fbf8f1] md:p-8">
                      <article className="flex flex-col">
                        <Check aria-hidden="true" size={18} className="text-[#74521f]" />
                        <h3 className="mt-6 text-2xl font-semibold transition-colors group-hover:text-[#74521f]">{title}</h3>
                        <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>
                        <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-[15px] font-bold uppercase tracking-[0.1em] text-[#74521f]">
                          View service <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-strath-navy py-20 md:py-24">
        <div className="editorial-grid absolute inset-0 opacity-45" aria-hidden="true" />
        <div className="section-shell relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker">Not sure where to start?</p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.7rem,5vw,4.7rem)] font-semibold leading-[1.01] text-white">Start with the constraint, not a shopping list.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">The Digital Growth Review identifies what is weakening demand or conversion and ranks the next moves before a larger commitment.</p>
          </div>
          <Link href="/?service=digital-growth-review#contact" className="group inline-flex min-h-14 w-full items-center justify-center gap-3 bg-gold px-8 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white md:w-auto">
            Request the review <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

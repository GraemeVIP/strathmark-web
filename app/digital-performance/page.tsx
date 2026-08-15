import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Check, Search, ServerCog, ShieldCheck } from "lucide-react";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/sections/Footer";
import { caseStudies } from "@/lib/case-studies-data";
import { SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Performance Review UK | Strathmark",
  description: "Independent digital marketing performance review for UK businesses. Find what websites, SEO, paid media, measurement and agencies should improve next.",
  alternates: { canonical: `${SITE_URL}/digital-performance` },
  openGraph: {
    title: "Digital Marketing Performance Review UK | Strathmark",
    description: "An independent review of websites, search, paid media, measurement and agency performance.",
    url: `${SITE_URL}/digital-performance`,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [{ url: SHARE_IMAGE_PATH, width: 1200, height: 630, alt: "Digital marketing consultancy — Strathmark" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Performance Review UK | Strathmark",
    description: "An independent review of websites, search, paid media, measurement and agency performance.",
    images: [SHARE_IMAGE_PATH],
  },
};

const SERVICES = [
  {
    icon: BarChart3,
    title: "Independent performance review",
    copy: "Establish what the website, search, advertising and agency reporting can prove, what they cannot and where the commercial constraints sit.",
    points: ["Access and measurement review", "Spend and channel diagnosis", "Prioritised commercial roadmap"],
    href: "/marketing-agency-audit",
  },
  {
    icon: ServerCog,
    title: "Website and technical recovery",
    copy: "Fix the message, conversion journey, technical debt and search foundations before adding more traffic to a weak destination.",
    points: ["Positioning and page strategy", "Responsive design and development", "Technical SEO and performance"],
    href: "/website-design",
  },
  {
    icon: Search,
    title: "Demand and acquisition",
    copy: "Connect search intent, content, paid media and landing pages to a clear offer and a measurement chain leadership can understand.",
    points: ["SEO and content architecture", "Paid media testing", "Qualified lead measurement"],
    href: "/seo-services",
  },
] as const;

const FAQS = [
  ["Is this a marketing agency?", "Strathmark can deliver website, SEO and paid-media work, but the engagement starts as an independent commercial diagnosis. The recommendation may be to fix the current setup, brief an existing agency, bring work in-house or implement directly."],
  ["Can you audit our existing agency without taking over?", "Yes. The review can remain completely independent and give leadership a decision memo, clearer brief and stronger accountability without changing suppliers."],
  ["Do you guarantee traffic, leads or revenue?", "No. The work defines the baseline, improves the controllable parts of the system and reports the limits of attribution. Outcomes affected by markets, competitors and customer decisions are not presented as guaranteed."],
] as const;

export default function DigitalPerformancePage() {
  const featured = caseStudies.filter((study) => study.featured).slice(0, 3);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital marketing performance review",
    description: metadata.description,
    url: `${SITE_URL}/digital-performance`,
    provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
    areaServed: { "@type": "Country", name: "United Kingdom" },
  };

  return (
    <main className="min-h-screen bg-strath-navy text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Navigation />

      <header className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="editorial-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,164,99,0.2),transparent_30%)]" aria-hidden="true" />
        <div className="section-shell relative grid gap-12 xl:grid-cols-12 xl:items-end">
          <div className="xl:col-span-8">
            <p className="section-kicker">Independent digital performance review</p>
            <h1 className="mt-7 max-w-5xl text-[clamp(3rem,6.5vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white">
              Digital Marketing Performance Review for UK Businesses
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Improve the website, search, paid media and agency system under one independent commercial view. Diagnose the constraint first, then fix the work that will make demand easier to win and convert.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/?service=digital-growth-review#contact" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-7 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white">
                Request a digital performance review <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/case-studies" className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-gold hover:text-gold">
                See the work
              </Link>
            </div>
          </div>
          <aside className="border border-gold/30 bg-gold/10 p-7 xl:col-span-4">
            <ShieldCheck aria-hidden="true" className="text-gold" size={26} />
            <h2 className="mt-5 text-3xl font-semibold text-white">Independent before implementation.</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">The first recommendation is not automatically “spend more” or “replace the agency”. It is the most defensible next move from the evidence available.</p>
          </aside>
        </div>
      </header>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="section-kicker !text-[#74521f]">One connected growth system</p>
              <h2 className="mt-6 max-w-4xl text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1.01] tracking-[-0.035em]">Fix the commercial joins, not only the channels.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600 lg:col-span-4">A good campaign cannot rescue a confusing offer, a weak landing page or unreliable measurement. The system is reviewed end to end.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {SERVICES.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex flex-col border border-ink/15 bg-white p-7 md:p-8">
                  <Icon aria-hidden="true" className="text-[#74521f]" size={28} />
                  <h3 className="mt-7 text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-5 text-base leading-8 text-slate-600">{item.copy}</p>
                  <ul className="mt-7 space-y-3 border-t border-ink/10 pt-6 text-base text-slate-700">
                    {item.points.map((point) => <li key={point} className="flex gap-3"><Check aria-hidden="true" size={16} className="mt-1 shrink-0 text-[#74521f]" />{point}</li>)}
                  </ul>
                  <Link href={item.href} className="group mt-auto inline-flex min-h-11 items-center gap-2 pt-7 text-[15px] font-bold uppercase tracking-[0.1em] text-[#74521f] hover:text-ink">
                    Explore this service <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#07111d] py-20 md:py-28">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Selected digital work</p>
              <h2 className="mt-6 text-4xl font-semibold text-white md:text-6xl">Evidence from complex organisations.</h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">Published engagement summaries provide scope and context. Results are not guarantees of future performance.</p>
            </div>
            <Link href="/case-studies" className="group inline-flex min-h-11 items-center gap-3 text-[15px] font-bold uppercase tracking-[0.1em] text-gold hover:text-white">View all case studies <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
            {featured.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group flex bg-[#0d1c2c] p-7 transition-colors hover:bg-[#12263b] md:p-8">
                <article className="flex flex-col">
                  <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.1em] text-gold">{study.industry}</p>
                  <h3 className="mt-5 text-3xl font-semibold text-white transition-colors group-hover:text-gold">{study.client}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{study.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-bold uppercase tracking-[0.1em] text-gold">Read case study <ArrowRight aria-hidden="true" size={14} /></span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfcf] py-20 text-ink md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-kicker !text-[#74521f]">Before you change supplier or spend</p>
            <h2 className="mt-6 text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.04]">Ask the commercial questions first.</h2>
          </div>
          <div className="divide-y divide-ink/15 border-y border-ink/15 lg:col-span-8">
            {FAQS.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold marker:hidden">{question}<span aria-hidden="true" className="text-3xl font-light text-[#74521f] transition-transform group-open:rotate-45">+</span></summary>
                <p className="max-w-3xl pb-2 pt-4 text-base leading-8 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-strath-navy py-16 text-white">
        <div className="section-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[15px] font-bold uppercase tracking-[0.1em] text-gold">Need an independent answer?</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Start with the commercial problem.</h2>
          </div>
          <Link href="/?service=digital-growth-review#contact" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-7 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white">Request a digital growth review <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

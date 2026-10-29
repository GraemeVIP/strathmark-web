import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import { Footer } from "@/app/components/sections/Footer";
import { Navigation } from "@/app/components/Navigation";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { GROWTH_REVIEW_HREF } from "@/lib/offers";
import { LOGO_PATH, SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

function shorten(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,;:]$/, "")}…`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);
  const title = study ? (study.anonymous ? "Car Leasing Broker Case Study: Leads Tripled | Strathmark" : `${study.client} Case Study | Strathmark`) : "Case Study Not Found";
  const description = study ? shorten(study.excerpt, 158) : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: study ? `${SITE_URL}/case-studies/${study.slug}` : `${SITE_URL}/case-studies`,
      images: [SHARE_IMAGE_PATH],
    },
    alternates: {
      canonical: study ? `${SITE_URL}/case-studies/${study.slug}` : `${SITE_URL}/case-studies`,
    },
  };
}

export default async function CaseStudyDetail({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    notFound();
  }

  const url = `${SITE_URL}/case-studies/${study.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.headline,
    description: study.excerpt,
    url,
    author: { "@id": `${SITE_URL}/#graeme` },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}${LOGO_PATH}` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Results", item: `${SITE_URL}/case-studies` },
      { "@type": "ListItem", position: 3, name: study.client, item: url },
    ],
  };

  const sections = [
    { label: "The situation", intro: study.businessContext, items: study.challenge, numbered: false },
    { label: "What I did", intro: study.mandate, items: study.interventions, numbered: true },
    { label: "What happened", intro: null, items: study.outcomes, numbered: false },
  ];

  return (
    <main className="min-h-screen bg-paper text-ink">
      {[articleJsonLd, breadcrumbJsonLd].map((value, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }} />
      ))}
      <Navigation />

      <header className="relative isolate overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="road-lines absolute inset-0 -z-10" aria-hidden="true" />
        <div className="section-shell">
          <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[13px] text-ink-3">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <Link href="/case-studies" className="hover:text-ink">Results</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span>{study.client}</span>
          </nav>
          <p className="eyebrow">{study.industry} · {study.timeframe}</p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.02em] [font-stretch:112%]">
            {study.headline}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-ink-2 md:text-xl md:leading-9">{study.excerpt}</p>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="bg-white p-6">
                <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">{metric.label}</dt>
                <dd className="mt-2 font-display text-[2rem] font-extrabold leading-none text-ink [font-stretch:106%]">{metric.value}</dd>
                <dd className="mt-2 text-sm text-ink-2">{metric.context}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {study.image ? (
        <section className="pb-16 md:pb-20">
          <figure className="section-shell">
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_rgba(13,19,33,0.12)]">
              <div className="flex items-center gap-1.5 border-b border-line bg-mist px-4 py-3" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-ink-3">search.google.com/search-console</span>
              </div>
              <Image src={study.image.src} alt={study.image.alt} width={study.image.width} height={study.image.height} sizes="(max-width: 1280px) 92vw, 1200px" className="h-auto w-full" />
            </div>
            <figcaption className="mt-3 text-sm text-ink-3">{study.image.caption}</figcaption>
          </figure>
        </section>
      ) : null}

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-12">
          <div className="grid gap-14 lg:col-span-8">
            {sections.map((section) => (
              <div key={section.label}>
                <p className="eyebrow">{section.label}</p>
                {section.intro ? <p className="mt-5 max-w-3xl text-xl leading-9 text-ink">{section.intro}</p> : null}
                <ul className="mt-6 grid gap-4">
                  {section.items.map((item, index) => (
                    <li key={item} className="flex gap-4 text-lg leading-8 text-ink-2">
                      {section.numbered ? (
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink font-mono text-sm font-semibold text-white">{index + 1}</span>
                      ) : (
                        <Check aria-hidden="true" size={20} strokeWidth={3} className="mt-1.5 shrink-0 text-signal-ink" />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-[1.25rem] border border-line bg-paper p-7">
              <dl className="grid gap-5">
                <div>
                  <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">Client</dt>
                  <dd className="mt-1 font-semibold">{study.client}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">Scope</dt>
                  <dd className="mt-1 font-semibold">{study.timeframe}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">What I did</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span key={service} className="rounded-full border border-line bg-white px-3 py-1 text-sm">{service}</span>
                    ))}
                  </dd>
                </div>
              </dl>
              {study.anonymous ? (
                <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-ink-3">
                  Client name withheld. The screenshots and numbers are real and can be walked through on a call.
                </p>
              ) : null}
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-16 text-white md:py-20">
        <div className="road-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="section-shell relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-extrabold leading-tight [font-stretch:108%]">Want the same for your business?</h2>
            <p className="mt-3 max-w-xl text-lg text-white/70">A free 30 minute look at your site and your numbers, with written notes either way.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <SectionLink href={GROWTH_REVIEW_HREF} className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-signal px-7 font-bold text-ink transition-colors hover:bg-white">
              Book a free growth review <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
            </SectionLink>
            <Link href="/automotive-seo" className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-white/30 px-7 font-bold text-white transition-colors hover:border-white">
              Automotive marketing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Compass,
  Gauge,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/sections/Footer";
import { getServicePage, servicePages } from "@/lib/service-pages-data";
import { SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

type PageProps = {
  params: Promise<{ service: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const url = `${SITE_URL}/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: SHARE_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${service.h1} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [SHARE_IMAGE_PATH],
    },
  };
}

const DELIVERY_ICONS = [Compass, Layers3, Gauge, ShieldCheck] as const;

export default async function ServicePage({ params }: PageProps) {
  const { service: slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const url = `${SITE_URL}/${service.slug}`;
  const contactHref = `/?service=${service.serviceValue}#contact`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.description,
    url,
    serviceType: service.eyebrow,
    provider: {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "International",
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: service.eyebrow, item: url },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-strath-navy text-slate-200">
      {[serviceJsonLd, breadcrumbJsonLd, faqJsonLd].map((value, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }}
        />
      ))}
      <Navigation />

      <header className="relative isolate overflow-hidden border-b border-white/10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="editorial-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(201,164,99,0.2),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(35,111,119,0.18),transparent_34%)]"
          aria-hidden="true"
        />
        <div className="section-shell relative grid gap-12 xl:grid-cols-12 xl:items-end">
          <div className="xl:col-span-8">
            <p className="section-kicker">{service.eyebrow}</p>
            <h1 className="mt-7 max-w-5xl text-[clamp(3rem,6.6vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white">
              {service.h1}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              {service.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={contactHref}
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-7 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white"
              >
                Discuss this project
                <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-gold hover:text-gold"
              >
                Compare all services
              </Link>
            </div>
          </div>

          <aside className="border border-gold/30 bg-[#102237]/90 p-7 shadow-[0_35px_90px_rgba(2,8,16,0.3)] md:p-8 xl:col-span-4">
            <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.12em] text-gold">
              What you are buying
            </p>
            <p className="mt-5 text-2xl font-semibold leading-tight text-white">{service.promise}</p>
            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-[15px] leading-7 text-slate-300">{service.searchIntent}</p>
            </div>
          </aside>
        </div>
      </header>

      <section className="relative bg-ivory py-20 text-ink md:py-28">
        <div className="editorial-grid-dark absolute inset-0 opacity-45" aria-hidden="true" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="section-kicker !text-[#74521f]">When the current setup is holding you back</p>
            <h2 className="mt-6 text-[clamp(2.6rem,4.8vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              Start with the commercial constraint, not the channel.
            </h2>
          </div>
          <ul className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:col-span-7">
            {service.challenges.map((challenge, index) => (
              <li key={challenge} className="bg-white p-6 md:p-8">
                <span className="font-mono text-[15px] font-semibold text-[#74521f]">0{index + 1}</span>
                <p className="mt-5 text-lg font-medium leading-8 text-slate-700">{challenge}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#07111d] py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="section-kicker">What changes</p>
              <h2 className="mt-6 max-w-4xl text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1.01] tracking-[-0.035em] text-white">
                A useful engagement leaves the business stronger.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-300 lg:col-span-4">
              The work is judged by operating evidence and the quality of the next decision, not the amount of activity produced.
            </p>
          </div>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-4 bg-[#0d1c2c] p-7 md:p-9">
                <Check aria-hidden="true" className="mt-1 shrink-0 text-gold" size={21} />
                <p className="text-lg font-medium leading-8 text-white">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="section-kicker !text-[#74521f]">Scope and deliverables</p>
            <h2 className="mt-6 text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1.01] tracking-[-0.035em]">
              Tangible work, clearly owned.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {service.deliverables.map((deliverable, index) => {
              const Icon = DELIVERY_ICONS[index % DELIVERY_ICONS.length];
              return (
                <article key={deliverable.title} className="border border-ink/15 bg-white p-7 md:p-9">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center bg-strath-navy text-gold">
                      <Icon aria-hidden="true" size={21} />
                    </span>
                    <span className="font-mono text-[15px] font-semibold text-[#74521f]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-3xl font-semibold">{deliverable.title}</h3>
                  <p className="mt-5 text-base leading-8 text-slate-600">{deliverable.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-strath-navy py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="section-kicker">Delivery route</p>
              <h2 className="mt-6 text-[clamp(2.7rem,5vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
                Evidence earns the next investment.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-300 lg:col-span-4">
              Each phase has an owner, output and decision. A stopped project can be the right result when the evidence does not support scale.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title} className="border border-white/12 bg-white/[0.035] p-7">
                <span className="font-mono text-[15px] font-semibold text-gold">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#e9dfcf] py-20 text-ink md:py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <div className="border border-ink/15 bg-white p-7 md:p-10">
            <div className="flex items-center gap-4">
              <Check aria-hidden="true" className="text-emerald-700" size={24} />
              <h2 className="text-3xl font-semibold">A strong fit</h2>
            </div>
            <ul className="mt-7 space-y-4">
              {service.fit.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-slate-700">
                  <Check aria-hidden="true" className="mt-1 shrink-0 text-emerald-700" size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-white/12 bg-strath-navy p-7 text-white md:p-10">
            <div className="flex items-center gap-4">
              <CircleAlert aria-hidden="true" className="text-gold" size={24} />
              <h2 className="text-3xl font-semibold">Not the right engagement</h2>
            </div>
            <ul className="mt-7 space-y-4">
              {service.exclusions.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                  <CircleAlert aria-hidden="true" className="mt-1 shrink-0 text-gold" size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-kicker !text-[#74521f]">Questions before you commit</p>
            <h2 className="mt-6 text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
              Clear answers, including the limits.
            </h2>
          </div>
          <div className="divide-y divide-ink/15 border-y border-ink/15 lg:col-span-8">
            {service.faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold marker:hidden">
                  {item.question}
                  <span aria-hidden="true" className="text-3xl font-light text-[#74521f] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-2 pt-4 text-base leading-8 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1c2c] py-12">
        <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-base font-semibold text-white">Related expertise</p>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {service.related.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-gold transition-colors hover:text-white">
                {item.label} <ArrowRight aria-hidden="true" size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-strath-navy py-20 md:py-24">
        <div className="editorial-grid absolute inset-0 opacity-45" aria-hidden="true" />
        <div className="section-shell relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker">A useful first conversation</p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1.01] tracking-[-0.035em] text-white">
              Tell me what needs to work better.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Share the last concrete example. I will review it personally and respond within two business days with the most useful next step.
            </p>
          </div>
          <Link
            href={contactHref}
            className="group inline-flex min-h-14 w-full items-center justify-center gap-3 bg-gold px-8 text-[15px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white md:w-auto"
          >
            Start the conversation
            <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

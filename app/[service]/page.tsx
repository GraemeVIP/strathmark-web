import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, CircleX, TrendingUp } from "lucide-react";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/sections/Footer";
import { FAQ } from "@/app/components/sections/FAQ";
import { RevenueFocus } from "@/app/components/sections/RevenueFocus";
import { SectionLink } from "@/app/components/ui/SectionLink";
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
      images: [{ url: SHARE_IMAGE_PATH, width: 1200, height: 630, alt: `${service.h1}, ${SITE_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [SHARE_IMAGE_PATH],
    },
  };
}

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
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: service.areaServed,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: service.eyebrow, item: url },
    ],
  };

  return (
    <main className="min-h-screen bg-paper text-ink">
      {[serviceJsonLd, breadcrumbJsonLd].map((value, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }} />
      ))}
      <Navigation />

      <header className="relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="road-lines absolute inset-0 -z-10" aria-hidden="true" />
        <div className="section-shell grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[13px] text-ink-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span>{service.eyebrow}</span>
            </nav>
            <p className="eyebrow">{service.eyebrow}</p>
            <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[0.97] tracking-[-0.02em] [font-stretch:112%]">
              {service.h1}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-ink-2 md:text-xl md:leading-9">{service.intro}</p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-ink-2">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check aria-hidden="true" size={17} strokeWidth={3} className="text-signal-ink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-[1.5rem] bg-ink p-7 text-white shadow-[0_40px_80px_rgba(13,19,33,0.25)] md:p-8 lg:col-span-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/60">Price</p>
            <p className="mt-2 font-display text-[2.6rem] font-extrabold leading-none text-signal [font-stretch:105%]">{service.price}</p>
            <p className="mt-2 text-[15px] text-white/70">{service.priceNote}</p>
            <SectionLink
              href={contactHref}
              className="group mt-7 flex min-h-14 items-center justify-center gap-2 rounded-full bg-signal px-6 font-bold text-ink transition-colors hover:bg-white"
            >
              Book a free growth review
              <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
            </SectionLink>
            <Link href="/pricing" className="mt-3 flex min-h-11 items-center justify-center text-[15px] font-semibold text-white/75 hover:text-white">
              See all prices
            </Link>
          </aside>
        </div>
      </header>

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Sound familiar?</p>
            <h2 className="section-title mt-5">If this is you, I can help.</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {service.problems.map((problem) => (
              <li key={problem} className="rounded-2xl border border-line bg-paper p-6 text-lg font-medium leading-7 text-ink">
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="eyebrow">What you get</p>
          <h2 className="section-title mt-5 max-w-3xl">Everything included.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {service.included.map((item) => (
              <article key={item.title} className="rounded-[1.25rem] border border-line bg-white p-7 md:p-8">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-signal-soft text-signal-ink">
                  <Check aria-hidden="true" size={20} strokeWidth={3} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold [font-stretch:108%]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink-2">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {service.proof ? (
        <section className="relative overflow-hidden bg-ink py-16 text-white md:py-20">
          <div className="road-lines-dark absolute inset-0" aria-hidden="true" />
          <div className="section-shell relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-signal text-ink">
                <TrendingUp aria-hidden="true" size={26} />
              </span>
              <div>
                <p className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none text-signal [font-stretch:108%]">{service.proof.stat}</p>
                <p className="mt-2 text-lg text-white/75">{service.proof.label}</p>
              </div>
            </div>
            <Link href={service.proof.href} className="group inline-flex min-h-11 items-center gap-2 font-bold text-white underline decoration-signal decoration-2 underline-offset-[6px] hover:text-signal">
              Read the story <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      ) : null}

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title mt-5 max-w-3xl">Four steps, no mystery.</h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title} className="rounded-[1.25rem] border border-line bg-white p-7">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-mono text-sm font-semibold text-white">{index + 1}</span>
                <h3 className="mt-6 font-display text-xl font-bold [font-stretch:108%]">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink-2">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-24">
        <div className="section-shell grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.25rem] bg-white p-7 md:p-10">
            <h2 className="font-display text-2xl font-bold [font-stretch:108%]">A good fit if</h2>
            <ul className="mt-6 space-y-4">
              {service.fit.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink-2">
                  <Check aria-hidden="true" className="mt-1 shrink-0 text-signal-ink" size={18} strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.25rem] border border-line bg-paper p-7 md:p-10">
            <h2 className="font-display text-2xl font-bold [font-stretch:108%]">Probably not for you if</h2>
            <ul className="mt-6 space-y-4">
              {service.notFit.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink-2">
                  <CircleX aria-hidden="true" className="mt-1 shrink-0 text-ink-3" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RevenueFocus compact />

      <FAQ faqs={service.faqs} />

      <section className="border-t border-line bg-white py-10">
        <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-ink">Related</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {service.related.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink hover:text-signal-ink">
                {item.label} <ArrowRight aria-hidden="true" size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

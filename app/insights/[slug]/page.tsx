import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock } from "lucide-react";
import { notes } from "@/lib/notes-data";
import { getNoteSeoData } from "@/lib/notes-seo-data";
import { formatDateOnly } from "@/lib/date-format";
import { Footer } from "@/app/components/sections/Footer";
import { Navigation } from "@/app/components/Navigation";
import { FAQ } from "@/app/components/sections/FAQ";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { GROWTH_REVIEW_HREF } from "@/lib/offers";
import { LOGO_PATH, SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";
import { ReadingProgress } from "@/app/components/ReadingProgress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  const seo = note ? getNoteSeoData(note.slug) : null;
  return {
    title: seo?.seoTitle || "Entry Not Found",
    description: seo?.metaDescription,
    openGraph: {
      title: seo ? `${seo.seoTitle} | ${SITE_NAME}` : "Entry Not Found",
      description: seo?.metaDescription,
      type: "article",
      url: note ? `${SITE_URL}/insights/${note.slug}` : `${SITE_URL}/insights`,
      siteName: SITE_NAME,
      locale: "en_GB",
      images: [{ url: note?.shareImage || SHARE_IMAGE_PATH, alt: note ? note.title : SITE_NAME }],
      ...(note && {
        publishedTime: note.date,
        modifiedTime: seo?.lastModified,
        authors: [note.author],
        section: note.category,
        tags: note.tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: seo ? `${seo.seoTitle} | ${SITE_NAME}` : "Entry Not Found",
      description: seo?.metaDescription,
      images: [note?.shareImage || SHARE_IMAGE_PATH],
    },
    alternates: {
      canonical: note ? `${SITE_URL}/insights/${note.slug}` : `${SITE_URL}/insights`,
    },
  };
}

function getRelatedArticles(currentSlug: string, currentTags: string[]) {
  return notes
    .filter((n) => n.slug !== currentSlug)
    .map((n) => ({ ...n, relevance: n.tags.filter((t) => currentTags.includes(t)).length }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3);
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  const seo = getNoteSeoData(note.slug);
  const related = getRelatedArticles(note.slug, note.tags);
  const url = `${SITE_URL}/insights/${note.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    alternativeHeadline: seo.seoTitle,
    description: seo.metaDescription,
    image: [`${SITE_URL}${note.shareImage || SHARE_IMAGE_PATH}`],
    author: { "@type": "Person", "@id": `${SITE_URL}/#graeme`, name: note.author, url: `${SITE_URL}/about` },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}${LOGO_PATH}` },
    },
    datePublished: note.date,
    dateModified: seo.lastModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: note.category,
    keywords: [seo.primaryKeyword, ...seo.secondaryKeywords, ...note.tags].join(", "),
    isPartOf: { "@type": "Blog", name: "Strathmark Insights", url: `${SITE_URL}/insights` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
      { "@type": "ListItem", position: 3, name: note.title, item: url },
    ],
  };

  return (
    <main className="min-h-screen bg-paper text-ink">
      <ReadingProgress />
      <Navigation />
      {[articleJsonLd, breadcrumbJsonLd].map((value, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }} />
      ))}

      <article>
        <header className="relative isolate overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
          <div className="road-lines absolute inset-0 -z-10" aria-hidden="true" />
          <div className="section-shell grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[13px] text-ink-3">
                <Link href="/" className="hover:text-ink">Home</Link>
                <span aria-hidden="true" className="mx-2">/</span>
                <Link href="/insights" className="hover:text-ink">Insights</Link>
              </nav>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[13px] text-ink-3">
                <span className="font-semibold uppercase tracking-[0.12em] text-signal-ink">{note.category}</span>
                <span>{formatDateOnly(note.date)}</span>
                <span className="flex items-center gap-1.5"><Clock aria-hidden="true" size={13} />{note.readingTime}</span>
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-extrabold leading-[0.98] tracking-[-0.02em] [font-stretch:110%]">
                {note.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-2 md:text-xl md:leading-9">{note.excerpt}</p>
              <div className="mt-8 flex items-center gap-4">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-mist">
                  <Image src="/optimized/founder.webp" alt="" fill sizes="48px" className="object-cover object-[center_15%]" />
                </span>
                <p className="text-sm leading-5 text-ink-2">
                  <Link href="/about" className="font-bold text-ink hover:text-signal-ink">Written by {note.author}</Link>
                  <br />
                  Reviewed {formatDateOnly(seo.lastModified)}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-ink shadow-[0_30px_70px_rgba(13,19,33,0.18)]">
                <Image src={note.shareImage || SHARE_IMAGE_PATH} alt="" fill priority sizes="(max-width: 1024px) 92vw, 500px" className="object-cover" />
              </div>
            </div>
          </div>
        </header>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
            <p className="text-xl leading-9 text-ink md:text-[1.35rem] md:leading-10">{seo.introduction}</p>

            <section aria-labelledby="key-takeaways" className="my-12 rounded-[1.25rem] border border-line bg-paper p-7 md:p-9">
              <p className="eyebrow">The short version</p>
              <h2 id="key-takeaways" className="mt-3 font-display text-2xl font-bold [font-stretch:108%]">Key takeaways</h2>
              <ul className="mt-6 grid gap-4">
                {seo.keyTakeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-base leading-7 text-ink-2 md:text-lg md:leading-8">
                    <Check aria-hidden="true" size={20} strokeWidth={3} className="mt-1 shrink-0 text-signal-ink" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="strath-article" dangerouslySetInnerHTML={{ __html: note.content }} />

            <div className="mt-16 rounded-[1.5rem] bg-ink p-7 text-white md:p-10">
              <h2 className="font-display text-2xl font-extrabold leading-tight [font-stretch:108%] md:text-3xl">Want this looked at for your business?</h2>
              <p className="mt-3 text-base leading-7 text-white/70">
                A free 30 minute look at your site and your numbers, with written notes either way. Judged on sales, not traffic.
              </p>
              <SectionLink
                href={GROWTH_REVIEW_HREF}
                className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-signal px-6 font-bold text-ink transition-colors hover:bg-white"
              >
                Book a free growth review <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
              </SectionLink>
            </div>
          </div>
        </section>

        <FAQ faqs={seo.faqs} />

        {related.length > 0 && (
          <section className="border-t border-line bg-white py-20 md:py-24">
            <div className="section-shell">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="eyebrow">Keep reading</p>
                  <h2 className="section-title mt-5">Related articles</h2>
                </div>
                <Link href="/insights" className="group inline-flex min-h-11 items-center gap-2 font-bold underline decoration-signal decoration-2 underline-offset-[6px]">
                  All articles <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    href={`/insights/${item.slug}`}
                    key={item.slug}
                    className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-line bg-paper transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(13,19,33,0.10)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                      <Image src={item.shareImage || SHARE_IMAGE_PATH} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-signal-ink">{item.category}</p>
                      <h3 className="mt-3 font-display text-xl font-bold leading-tight [font-stretch:106%] group-hover:text-signal-ink">{item.title}</h3>
                      <p className="mt-auto flex items-center justify-between pt-6 font-mono text-[13px] text-ink-3">
                        {item.readingTime}
                        <ArrowRight aria-hidden="true" size={16} className="text-ink transition-transform group-hover:translate-x-1" />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />
    </main>
  );
}

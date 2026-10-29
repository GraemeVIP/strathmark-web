import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { notes } from "@/lib/notes-data";
import { formatDateOnly, getDateOnlyTime } from "@/lib/date-format";
import { Footer } from "@/app/components/sections/Footer";
import { Navigation } from "@/app/components/Navigation";
import { SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";
import { InsightsFilter, type InsightsFilterNote } from "./InsightsFilter";

const DESCRIPTION = "Straight talk on SEO, Google Ads, websites and agencies, written for business owners who care about sales, not traffic.";

export const metadata: Metadata = {
  title: "Insights on SEO, Google Ads and Agencies | Strathmark",
  description: DESCRIPTION,
  openGraph: {
    title: "Insights on SEO, Google Ads and Agencies | Strathmark",
    description: DESCRIPTION,
    url: `${SITE_URL}/insights`,
    images: [SHARE_IMAGE_PATH],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights on SEO, Google Ads and Agencies | Strathmark",
    description: DESCRIPTION,
    images: [SHARE_IMAGE_PATH],
  },
  alternates: {
    canonical: `${SITE_URL}/insights`,
  },
};

const categories = Array.from(new Set(notes.map((n) => n.category)));
const sortedNotes = [...notes].sort((a, b) => getDateOnlyTime(b.date) - getDateOnlyTime(a.date));
const featured = sortedNotes[0];
const restSummaries: InsightsFilterNote[] = sortedNotes.slice(1).map(
  ({ slug, category, title, excerpt, date, readingTime, shareImage }) => ({ slug, category, title, excerpt, date, readingTime, shareImage })
);

export default function InsightsIndex() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Strathmark Insights",
    description: DESCRIPTION,
    url: `${SITE_URL}/insights`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sortedNotes.map((note, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/insights/${note.slug}`,
        name: note.title,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Navigation />

      <header className="relative isolate overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="road-lines absolute inset-0 -z-10" aria-hidden="true" />
        <div className="section-shell">
          <p className="eyebrow">Insights</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.02em] [font-stretch:112%]">
            Straight talk on SEO, Google Ads and agencies.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-2 md:text-xl md:leading-9">
            Written for business owners, not marketers. What I check first, where the money usually leaks, and the questions worth asking anyone who handles your marketing.
          </p>
        </div>
      </header>

      <section className="pb-10">
        <div className="section-shell">
          <h2 className="sr-only">Latest article</h2>
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid overflow-hidden rounded-[1.5rem] border border-line bg-white transition-shadow hover:shadow-[0_30px_70px_rgba(13,19,33,0.12)] md:grid-cols-12"
          >
            <div className="relative min-h-[16rem] overflow-hidden bg-ink md:col-span-5 md:min-h-full">
              <Image
                src={featured.shareImage ?? SHARE_IMAGE_PATH}
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-signal px-3 py-1 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-ink">
                Latest
              </span>
            </div>
            <div className="flex flex-col p-7 md:col-span-7 md:p-10">
              <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[13px] text-ink-3">
                <span className="font-semibold uppercase tracking-[0.12em] text-signal-ink">{featured.category}</span>
                <span>{formatDateOnly(featured.date)}</span>
                <span className="flex items-center gap-1.5"><Clock aria-hidden="true" size={13} />{featured.readingTime}</span>
              </p>
              <h3 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.05] [font-stretch:108%] group-hover:text-signal-ink">
                {featured.title}
              </h3>
              <p className="mt-4 text-lg leading-8 text-ink-2">{featured.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 font-bold">
                Read it <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="section-shell">
          <InsightsFilter categories={categories} notes={restSummaries} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

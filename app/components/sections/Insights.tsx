import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { notes } from "@/lib/notes-data";

// The guides most useful to someone choosing who runs their website, SEO or ads.
const FEATURED_SLUGS = ["google-ads-wasted-spend", "marketing-retainer-failure", "seo-industry-corruption-problem"] as const;

export function Insights() {
  const featured = FEATURED_SLUGS.map((slug) => notes.find((note) => note.slug === slug)).filter(
    (note): note is (typeof notes)[number] => Boolean(note)
  );

  return (
    <section className="bg-white py-20 md:py-28" id="insights">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Insights</p>
            <h2 className="section-title mt-5">Straight talk on SEO, Google Ads and agencies.</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-8 text-ink-2">What I check first, where the money usually leaks, and the questions worth asking anyone who handles your marketing.</p>
            <Link href="/insights" className="group mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-ink underline decoration-signal decoration-2 underline-offset-[6px]">
              All articles <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featured.map((note) => (
            <Link
              key={note.slug}
              href={`/insights/${note.slug}`}
              className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-line bg-paper transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(13,19,33,0.10)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                <Image
                  src={note.shareImage || "/share-image.png"}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 92vw, 410px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-signal px-3 py-1 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-ink">
                  {note.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="flex items-center gap-2 font-mono text-[13px] text-ink-3">
                  <Clock aria-hidden="true" size={14} />
                  {note.readingTime}
                </p>
                <h3 className="mt-4 font-display text-[1.45rem] font-bold leading-tight text-ink [font-stretch:106%] group-hover:text-signal-ink">{note.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink-2">{note.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-ink">
                  Read it <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

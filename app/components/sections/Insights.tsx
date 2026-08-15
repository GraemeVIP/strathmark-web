import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { notes } from "@/lib/notes-data";
import { formatDateOnly, getDateOnlyTime } from "@/lib/date-format";

export function Insights() {
  const latest = [...notes]
    .sort((a, b) => getDateOnlyTime(b.date) - getDateOnlyTime(a.date))
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-ivory py-20 text-ink md:py-28" id="insights">
      <div className="editorial-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-kicker !text-[#74521f]">AI and digital marketing insights</p>
            <h2 className="mt-6 max-w-5xl text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1.01] tracking-[-0.035em]">
              Better decisions need useful evidence, not more noise.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base leading-7 text-slate-600">Practical analysis on AI adoption, websites, SEO, paid media, agencies and commercial measurement.</p>
            <Link href="/insights" className="group mt-5 inline-flex min-h-11 items-center gap-3 text-[15px] font-bold uppercase tracking-[0.1em] text-[#74521f] transition-colors hover:text-ink">
              Browse all insights <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {latest.map((note) => (
            <Link key={note.slug} href={`/insights/${note.slug}`} className="group flex">
              <article className="flex w-full flex-col overflow-hidden border border-ink/15 bg-white shadow-[0_18px_55px_rgba(11,22,36,0.06)] transition-transform group-hover:-translate-y-1">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#101f31]">
                  <Image
                    src={note.shareImage || "/share-image.png"}
                    alt={`${note.title} editorial illustration`}
                    fill
                    sizes="(max-width: 1024px) 92vw, 410px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-strath-navy/65 via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-4 left-4 bg-gold px-3 py-2 text-[15px] font-bold uppercase tracking-[0.08em] text-ink">{note.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[15px] text-slate-500">
                    <time dateTime={note.date}>{formatDateOnly(note.date)}</time>
                    <span className="flex items-center gap-2"><Clock aria-hidden="true" size={15} />{note.readingTime}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight transition-colors group-hover:text-[#74521f]">{note.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{note.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-bold uppercase tracking-[0.1em] text-[#74521f]">
                    Read the analysis <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

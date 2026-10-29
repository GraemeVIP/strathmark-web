"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { clsx } from "clsx";
import type { Note } from "@/lib/notes-data";
import { formatDateOnly } from "@/lib/date-format";

export type InsightsFilterNote = Pick<
  Note,
  "slug" | "category" | "title" | "excerpt" | "date" | "readingTime" | "shareImage"
>;

interface InsightsFilterProps {
  categories: string[];
  notes: InsightsFilterNote[];
}

export function InsightsFilter({ categories, notes }: InsightsFilterProps) {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? notes.filter((n) => n.category === active) : notes;
  const chip = (selected: boolean) =>
    clsx(
      "min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors",
      selected ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-2 hover:border-ink hover:text-ink"
    );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2.5" role="group" aria-label="Filter by topic">
        <button type="button" onClick={() => setActive(null)} aria-pressed={active === null} className={chip(active === null)}>
          All
        </button>
        {categories.map((cat) => (
          <button key={cat} type="button" onClick={() => setActive(cat)} aria-pressed={active === cat} className={chip(active === cat)}>
            {cat}
          </button>
        ))}
      </div>

      <h2 className="sr-only">All articles</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((note) => (
          <Link
            href={`/insights/${note.slug}`}
            key={note.slug}
            className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-line bg-white transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(13,19,33,0.10)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink">
              <Image
                src={note.shareImage ?? "/share-image.png"}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-signal px-3 py-1 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-ink">
                {note.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <h3 className="font-display text-[1.4rem] font-bold leading-tight [font-stretch:106%] group-hover:text-signal-ink">{note.title}</h3>
              <p className="mt-3 line-clamp-3 flex-1 text-base leading-7 text-ink-2">{note.excerpt}</p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5 font-mono text-[13px] text-ink-3">
                <span>{formatDateOnly(note.date)}</span>
                <span className="flex items-center gap-1.5"><Clock aria-hidden="true" size={13} />{note.readingTime}</span>
                <ArrowRight aria-hidden="true" size={16} className="shrink-0 text-ink transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

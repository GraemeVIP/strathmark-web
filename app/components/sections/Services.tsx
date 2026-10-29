import Link from "next/link";
import { ArrowUpRight, LayoutTemplate, MousePointerClick, Search } from "lucide-react";
import { CORE_SERVICES } from "@/lib/offers";

const ICONS = [LayoutTemplate, Search, MousePointerClick] as const;

export function Services() {
  return (
    <section className="bg-paper py-20 md:py-28" id="services">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">What I do</p>
            <h2 className="section-title mt-5">Three services. Done properly.</h2>
          </div>
          <p className="text-lg leading-8 text-ink-2 lg:col-span-5">
            A good website is the shop window. SEO and Google Ads bring people to it. Most businesses need all three working together, and nobody looking after the joins.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CORE_SERVICES.map((service, index) => {
            const Icon = ICONS[index];
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group relative flex flex-col rounded-[1.25rem] border border-line bg-white p-7 transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_30px_60px_rgba(13,19,33,0.10)] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-signal">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <ArrowUpRight aria-hidden="true" size={22} className="text-ink-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>
                <p className="mt-8 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-signal-ink">{service.name}</p>
                <h3 className="mt-2 font-display text-[1.75rem] font-bold leading-tight text-ink [font-stretch:108%]">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-ink-2">{service.copy}</p>
                <p className="mt-auto flex items-baseline gap-2 border-t border-line pt-6">
                  <span className="font-display text-2xl font-extrabold text-ink">{service.price}</span>
                  <span className="text-sm text-ink-3">{service.priceNote}</span>
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

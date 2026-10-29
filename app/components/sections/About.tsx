import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FACTS = [
  ["15 years", "in search, paid media and websites"],
  ["1 person", "from the first call to the monthly report"],
  ["Edinburgh", "working across Scotland and the UK"],
] as const;

export function About({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-white py-20 md:py-28" id="about">
      <div className="section-shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-mist">
            <Image
              src="/optimized/founder.webp"
              alt="Graeme Tudhope"
              fill
              sizes="(max-width: 1024px) 80vw, 380px"
              className="object-cover object-[center_15%]"
            />
          </div>
          <span aria-hidden="true" className="absolute -bottom-4 -right-4 -z-0 h-24 w-24 rounded-2xl bg-signal" />
        </div>

        <div className="lg:col-span-8">
          <p className="eyebrow">Who you’ll work with</p>
          <h2 className="section-title mt-5">Hi, I’m Graeme.</h2>
          <div className="mt-7 grid gap-5 text-lg leading-8 text-ink-2">
            <p>
              I’ve spent 15 years getting businesses found on Google and turning that attention into sales. I’ve worked on everything from a glamping site in Inverness to a national car leasing company, and the job is always the same: get in front of people who are ready to buy, then make it easy for them to get in touch.
            </p>
            <p>
              Strathmark is just me. That’s the point. The person who builds your website is the person who runs your SEO and your ads, so nothing gets lost between departments and nobody hides behind a dashboard. If something isn’t working, I’ll tell you, and if I’m not the right fit, I’ll say so.
            </p>
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {FACTS.map(([value, label]) => (
              <div key={value} className="bg-paper p-5">
                <dt className="font-display text-2xl font-extrabold text-ink [font-stretch:108%]">{value}</dt>
                <dd className="mt-1 text-sm leading-6 text-ink-2">{label}</dd>
              </div>
            ))}
          </dl>

          {showLink ? (
            <Link href="/about" className="group mt-8 inline-flex min-h-11 items-center gap-2 font-bold text-ink underline decoration-signal decoration-2 underline-offset-[6px]">
              More about me
              <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

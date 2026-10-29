import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/app/components/Navigation";
import { About } from "@/app/components/sections/About";
import { Footer } from "@/app/components/sections/Footer";
import { SectionLink } from "@/app/components/ui/SectionLink";
import { GROWTH_REVIEW_HREF } from "@/lib/offers";
import { SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Graeme | Strathmark",
  description: "Graeme builds websites and runs SEO and Google Ads for businesses across Scotland and the UK. 15 years in search, one person from first call to monthly report.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Graeme",
    description: "Websites, SEO and Google Ads from one person who does the work.",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "profile",
    images: [{ url: SHARE_IMAGE_PATH, width: 1200, height: 630, alt: "About Graeme" }],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <header className="relative isolate overflow-hidden pb-10 pt-32 md:pt-40">
        <div className="road-lines absolute inset-0 -z-10" aria-hidden="true" />
        <div className="section-shell">
          <p className="eyebrow">About</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.02em] [font-stretch:112%]">
            One person. Websites, SEO and Google Ads.
          </h1>
        </div>
      </header>
      <About showLink={false} />
      <section className="py-20 md:py-24" aria-labelledby="started-heading">
        <div className="section-shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Where it started</p>
            <h2 id="started-heading" className="section-title mt-5">Fixing things for people.</h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-ink-2 lg:col-span-8">
            <p>
              My first business, <a href="https://www.ayrshiretechhelp.co.uk/" className="font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-signal-ink">Ayrshire Tech Help</a>, grew out of a love of technology and figuring out how things work. I still make time for it because I enjoy practical problem solving and helping people locally.
            </p>
            <p>
              Through it I also offer a small number of free home visits and essential repairs for people who can’t afford help and would otherwise be cut off from family or everyday online services. It works on trust, with each request considered individually.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-ink py-16 text-white">
        <div className="section-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <h2 className="font-display text-3xl font-bold [font-stretch:110%] md:text-4xl">Tell me what you need.</h2>
          <SectionLink href={GROWTH_REVIEW_HREF} className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-signal px-7 font-bold text-ink transition-colors hover:bg-white">
            Book a free growth review <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
          </SectionLink>
        </div>
      </section>
      <Footer />
    </main>
  );
}

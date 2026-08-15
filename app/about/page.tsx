import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/app/components/Navigation";
import { About } from "@/app/components/sections/About";
import { Footer } from "@/app/components/sections/Footer";
import { SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Strathmark | Digital Marketing Consultant Edinburgh",
  description: "Meet the principal-led Edinburgh digital marketing consultancy connecting strategy, branding, web, SEO, paid media, measurement and practical AI.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Strathmark Consulting",
    description: "Independent, principal-led digital marketing expertise for established UK businesses.",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "profile",
    images: [{ url: SHARE_IMAGE_PATH, width: 1200, height: 630, alt: "About Strathmark Consulting" }],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-strath-navy text-slate-200">
      <Navigation />
      <header className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="editorial-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="section-shell relative">
          <p className="section-kicker">About Strathmark</p>
          <h1 className="mt-7 max-w-5xl text-[clamp(3rem,6.2vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-white">
            Senior Digital Marketing Expertise Across the Whole Customer Journey
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Independent advice, direct senior involvement and joined-up implementation for UK businesses that need their marketing to work as one commercial system.
          </p>
        </div>
      </header>
      <About />
      <section className="bg-[#e9dfcf] py-16 text-ink">
        <div className="section-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[15px] font-bold uppercase tracking-[0.1em] text-[#74521f]">A useful first conversation</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Tell me what is getting in the way of growth.</h2>
          </div>
          <Link href="/?service=digital-growth-review#contact" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-strath-navy px-7 text-[15px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#18344f]">
            Request a growth review <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/app/components/sections/Footer";
import { Navigation } from "@/app/components/Navigation";

export const metadata: Metadata = {
  title: "Page Not Found | Strathmark",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <section className="relative isolate overflow-hidden pb-24 pt-36 md:pt-44">
        <div className="road-lines absolute inset-0 -z-10" aria-hidden="true" />
        <div className="section-shell grid gap-8 lg:grid-cols-12 lg:items-center">
          <p aria-hidden="true" className="font-display text-[clamp(7rem,18vw,13rem)] font-extrabold leading-none text-ink/10 [font-stretch:120%] lg:col-span-4">
            404
          </p>
          <div className="lg:col-span-8">
            <p className="eyebrow">Page not found</p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5.4vw,4.4rem)] font-extrabold leading-[0.98] [font-stretch:110%]">
              That page has moved or never existed.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-2">
              Try the homepage, or have a look at the services and prices.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-signal px-7 font-bold text-ink transition-colors hover:bg-ink hover:text-white">
                <ArrowLeft aria-hidden="true" size={18} /> Back to the homepage
              </Link>
              <Link href="/pricing" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-ink px-7 font-bold text-ink transition-colors hover:bg-ink hover:text-white">
                See prices <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

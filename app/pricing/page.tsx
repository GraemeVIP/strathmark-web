import type { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Pricing } from "@/app/components/sections/Pricing";
import { FAQ, HOME_FAQS } from "@/app/components/sections/FAQ";
import { Footer } from "@/app/components/sections/Footer";
import { SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Design Prices, SEO and Google Ads Costs | Strathmark",
  description: "Website builds from £3,500. SEO from £850 a month. Google Ads management from £600 a month. Fixed quotes, no long contracts, and you own everything.",
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Strathmark pricing",
    description: "Websites from £3,500. SEO from £850 a month. Google Ads from £600 a month.",
    url: `${SITE_URL}/pricing`,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [{ url: SHARE_IMAGE_PATH, width: 1200, height: 630, alt: "Strathmark pricing" }],
  },
};

const PRICING_FAQS = HOME_FAQS.filter((item) =>
  ["How much does a website cost?", "Do I have to sign up for a long contract?", "Who owns the website and the accounts?"].includes(item.question)
);

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-paper pt-16 text-ink">
      <Navigation />
      <Pricing headingLevel="h1" />
      <FAQ faqs={PRICING_FAQS} />
      <Footer />
    </main>
  );
}

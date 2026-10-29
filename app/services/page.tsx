import type { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Services } from "@/app/components/sections/Services";
import { HowItWorks } from "@/app/components/sections/HowItWorks";
import { Sectors } from "@/app/components/sections/Sectors";
import { Pricing } from "@/app/components/sections/Pricing";
import { Footer } from "@/app/components/sections/Footer";
import { SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Websites, SEO and Google Ads | Strathmark",
  description: "Website design, SEO for Google and AI search, and Google Ads management. Senior help from one person who does the work, with prices on the site.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Strathmark services",
    description: "Websites, SEO and Google Ads that bring in sales.",
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [{ url: SHARE_IMAGE_PATH, width: 1200, height: 630, alt: "Strathmark services" }],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-paper pt-16 text-ink">
      <Navigation />
      <h1 className="sr-only">Websites, SEO and Google Ads services</h1>
      <Services />
      <HowItWorks />
      <Sectors />
      <Pricing />
      <Footer />
    </main>
  );
}

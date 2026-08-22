import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import { CookieBanner } from "@/app/components/ui/CookieBanner";
import { Analytics } from "@/app/components/ui/Analytics";
import { FirstPartyVisitorTracker } from "@/app/components/ui/FirstPartyVisitorTracker";
import { ScrollBehaviorManager } from "@/app/components/ui/ScrollBehaviorManager";
import { LOGO_PATH, SHARE_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

const playfair = localFont({
  src: "./fonts/playfair-display-latin.woff2",
  variable: "--font-playfair",
  display: "swap",
  weight: "400 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Digital Marketing Consultancy | SEO, PPC, Web & AI",
  description: "Independent digital marketing consultancy working internationally. SEO, Google Ads, Meta Ads, web design, branding and practical AI under one senior-led plan.",
  openGraph: {
    title: "Digital Marketing Consultancy Built to Work as One System",
    description: "International digital marketing consultancy connecting strategy, branding, websites, SEO, paid media, measurement and practical AI.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: SHARE_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Consultancy Built to Work as One System",
    description: "SEO, Google Ads, Meta Ads, web design, branding and practical AI under one senior-led plan.",
    images: [SHARE_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1624",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-strath-navy text-slate-200`}
        style={{ backgroundColor: "#0B1624", color: "#F8FAFC" }}
      >
        <Suspense fallback={null}>
          <FirstPartyVisitorTracker />
        </Suspense>
        <ScrollBehaviorManager />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  inLanguage: "en-GB",
                  publisher: { "@id": `${SITE_URL}/#business` },
                },
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": `${SITE_URL}/#business`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  logo: `${SITE_URL}${LOGO_PATH}`,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Edinburgh",
                    addressRegion: "Scotland",
                    addressCountry: "GB",
                  },
                  description: "Edinburgh-based digital marketing consultancy working internationally across strategy, branding, websites, SEO, paid media, measurement and practical AI.",
                  priceRange: "£££",
                  areaServed: "International",
                  knowsAbout: [
                    "Digital marketing strategy",
                    "Search engine optimisation",
                    "Google Ads management",
                    "Meta Ads management",
                    "Website design and development",
                    "Brand strategy and identity",
                    "Conversion rate optimisation",
                    "Digital analytics",
                    "Marketing agency oversight",
                    "AI consulting",
                    "AI strategy",
                    "Workflow automation",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Digital marketing, AI and automation services",
                    itemListElement: [
                      "Digital Growth Review",
                      "Digital Marketing Strategy",
                      "Website Design and Development",
                      "Brand Strategy and Identity",
                      "SEO Services and Content",
                      "Google Ads Management",
                      "Meta Ads Management",
                      "Paid Media Management",
                      "Marketing Agency Audit",
                      "AI Consulting and Implementation",
                      "AI Strategy Consulting",
                      "Workflow Automation",
                    ].map((name) => ({
                      "@type": "Offer",
                      itemOffered: { "@type": "Service", name },
                    })),
                  },
                },
              ],
            }),
          }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

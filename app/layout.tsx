import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Archivo } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { CookieBanner } from "@/app/components/ui/CookieBanner";
import { Analytics, CONSENT_DEFAULT_SCRIPT } from "@/app/components/ui/Analytics";
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

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Websites, SEO and Google Ads That Bring In Sales | Strathmark",
  description: "Edinburgh web design, SEO and Google Ads from Graeme. Judged on the revenue it brings in, not traffic or clicks. Prices on the site.",
  openGraph: {
    title: "Websites, SEO and Google Ads That Bring In Sales",
    description: "Websites built to win enquiries, then the SEO and Google Ads to fill them. Senior help from one person who does the work.",
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
    title: "Websites, SEO and Google Ads That Bring In Sales",
    description: "Websites built to win enquiries, then the SEO and Google Ads to fill them.",
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
  themeColor: "#f5f6f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }} />
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} antialiased bg-paper text-ink`}
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
                  "@type": "Person",
                  "@id": `${SITE_URL}/#graeme`,
                  name: "Graeme",
                  jobTitle: "Founder",
                  worksFor: { "@id": `${SITE_URL}/#business` },
                  url: `${SITE_URL}/about`,
                },
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": `${SITE_URL}/#business`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  logo: `${SITE_URL}${LOGO_PATH}`,
                  founder: { "@id": `${SITE_URL}/#graeme` },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Edinburgh",
                    addressRegion: "Scotland",
                    addressCountry: "GB",
                  },
                  description: "Edinburgh web design, SEO and Google Ads. Websites built to win enquiries, then the monthly marketing to fill them, with specialist work for car leasing and automotive businesses.",
                  priceRange: "££",
                  areaServed: ["Edinburgh", "Scotland", "United Kingdom"],
                  knowsAbout: [
                    "Website design",
                    "Search engine optimisation",
                    "AI search optimisation",
                    "Google Ads management",
                    "Automotive marketing",
                    "Car leasing marketing",
                    "Conversion rate optimisation",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Websites, SEO and Google Ads",
                    itemListElement: [
                      "Website Design and Build",
                      "SEO for Google and AI Search",
                      "Google Ads Management",
                      "Automotive SEO and Google Ads",
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

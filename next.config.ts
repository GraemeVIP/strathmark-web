import type { NextConfig } from "next";

// Pages retired in the 2026 refocus on websites, SEO and Google Ads.
// Each one points to the closest page that still exists.
const RETIRED_PAGES: [source: string, destination: string][] = [
  ["/meta-ads-management", "/google-ads-management"],
  ["/paid-media", "/google-ads-management"],
  ["/digital-performance", "/google-ads-management"],
  ["/marketing-agency-audit", "/seo-services"],
  ["/branding-services", "/website-design"],
  ["/ai-consulting-services", "/seo-services"],
  ["/ai-strategy-consulting", "/seo-services"],
  ["/workflow-automation", "/services"],
  ["/briefings/industrial-ai-systems-integrator", "/"],
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return RETIRED_PAGES.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;

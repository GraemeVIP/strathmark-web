// One source for prices and offer names, so the homepage, service pages and
// pricing page never disagree.

export const GROWTH_REVIEW_HREF = "/?service=growth-review#contact";

export const CORE_SERVICES = [
  {
    slug: "website-design",
    serviceValue: "website",
    name: "Websites",
    title: "Websites that win enquiries",
    copy: "Fast, properly built sites with the words, structure and tracking to turn visitors into calls and forms. Not a template with your logo on it.",
    price: "from £3,500",
    priceNote: "fixed price build",
  },
  {
    slug: "seo-services",
    serviceValue: "seo",
    name: "SEO",
    title: "SEO for Google and AI search",
    copy: "Get found for the searches that bring in work, on Google and in tools like ChatGPT. Reported in sales and return, not traffic.",
    price: "from £850",
    priceNote: "a month",
  },
  {
    slug: "google-ads-management",
    serviceValue: "google-ads",
    name: "Google Ads",
    title: "Google Ads that pay their way",
    copy: "Campaigns built around what a sale is worth to you, with every pound tracked to an enquiry and a return. Leads from the first week, while SEO builds.",
    price: "from £600",
    priceNote: "a month, plus ad spend",
  },
] as const;

export const PLANS = [
  {
    name: "Website",
    price: "£3,500",
    cadence: "fixed price, from",
    summary: "A new site built to rank and convert. Yours to keep.",
    includes: [
      "Up to 10 pages, written for your customers",
      "Design, build and launch",
      "Enquiry and call tracking set up in GA4",
      "Search basics done properly from day one",
      "You own the site, domain and every account",
    ],
    cta: "website",
    featured: false,
  },
  {
    name: "Growth",
    price: "£1,250",
    cadence: "a month, from",
    summary: "SEO and Google Ads run together, so one feeds the other.",
    includes: [
      "Everything in SEO and Google Ads management",
      "Monthly report on revenue, cost per sale and return",
      "Landing page and conversion improvements",
      "A monthly call with me",
      "Three month minimum, then 30 days notice",
    ],
    cta: "growth-plan",
    featured: true,
  },
  {
    name: "Single channel",
    price: "£600",
    cadence: "a month, from",
    summary: "Just Google Ads (from £600) or just SEO (from £850).",
    includes: [
      "Setup or rebuild of the account",
      "Weekly checks and changes",
      "Monthly report on revenue and return, plus a call",
      "Ad spend paid direct to Google, never marked up",
      "Three month minimum, then 30 days notice",
    ],
    cta: "google-ads",
    featured: false,
  },
] as const;

export const TERMS = [
  "Prices are starting points for a typical small business.",
  "Every quote is fixed before work starts.",
  "You own your website, domain, Google Ads and Analytics accounts. Always.",
] as const;

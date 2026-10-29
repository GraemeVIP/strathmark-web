export interface CaseStudyMetric {
  label: string;
  value: string;
  context: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  headline: string;
  industry: string;
  region: string;
  engagementType: string;
  timeframe: string;
  featured: boolean;
  excerpt: string;
  businessContext: string;
  mandate: string;
  challenge: string[];
  interventions: string[];
  outcomes: string[];
  metrics: CaseStudyMetric[];
  services: string[];
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
}

const allCaseStudies: CaseStudy[] = [
  {
    slug: "axa-insurance-uk",
    client: "AXA Insurance",
    title: "AXA Insurance",
    headline: "Restructuring enterprise insurance journeys around clearer demand capture, sharper conversion paths, and lower leakage in quote-start funnels.",
    industry: "Insurance",
    region: "United Kingdom",
    engagementType: "Strategic SEO + Conversion Architecture",
    timeframe: "Enterprise programme",
    featured: true,
    excerpt: "Interim enterprise case study showing how insurance demand capture improves when information architecture, quote journeys, and measurement are aligned to intent rather than departmental silos.",
    businessContext: "AXA is one of the largest insurance brands in the UK market, spanning personal and commercial products across a complex digital estate.",
    mandate: "Improve commercial search visibility and reduce friction between high-intent content journeys and quote starts across a large, governance-heavy insurance environment.",
    challenge: [
      "Multiple product journeys had evolved independently, creating overlap, internal competition, and uneven visibility across high-value insurance queries.",
      "Quote funnels were discoverable, but not always aligned with the informational pages users encountered first, which weakened assisted conversion performance.",
      "Reporting skewed toward traffic and surface engagement instead of showing where intent was being created, lost, or converted.",
    ],
    interventions: [
      "Reframed core journeys around search intent tiers so informational, comparison, and quote-entry pages worked as one system rather than isolated templates.",
      "Prioritised structural fixes to internal linking, page hierarchy, and conversion path clarity on commercially valuable insurance topics.",
      "Built a cleaner reporting view around quote starts, assisted progression, and page-group contribution so teams could govern the right outcomes.",
    ],
    outcomes: [
      "Quote-start growth improved once commercial pages were supported by better upstream informational architecture rather than left to perform alone.",
      "Non-brand visibility became more durable across priority insurance topics because overlapping page intent was reduced.",
      "Internal stakeholders gained a clearer view of which content assets created commercial momentum and which ones were simply inflating traffic reports.",
    ],
    metrics: [
      { label: "Quote Starts", value: "+41%", context: "from priority personal-lines journeys" },
      { label: "Organic Visibility", value: "+68%", context: "across tracked commercial terms" },
      { label: "Journey Drop-Off", value: "-22%", context: "between research pages and quote entry" },
    ],
    services: [
      "Enterprise SEO diagnostics",
      "Information architecture",
      "Journey mapping",
      "Conversion analysis",
      "Measurement alignment",
    ],
  },
  {
    slug: "first-central-insurance",
    client: "FIRST CENTRAL Insurance",
    title: "FIRST CENTRAL Insurance",
    headline: "Helping a data-led motor insurer tighten the connection between search demand, quote intent, and a more commercially accountable acquisition model.",
    industry: "Insurance",
    region: "United Kingdom",
    engagementType: "Search Strategy + Funnel Efficiency",
    timeframe: "Growth optimisation sprint",
    featured: true,
    excerpt: "A motor-insurance engagement focused on reducing wasted acquisition effort, improving intent capture, and turning search into a more measurable growth channel.",
    businessContext: "FIRST CENTRAL is a UK motor insurer known for its technology-led operating model and rapid growth in a highly competitive category.",
    mandate: "Increase the efficiency of non-brand acquisition by clarifying page intent, strengthening quote-entry pathways, and reducing wasted effort around low-value search demand.",
    challenge: [
      "Motor insurance search is crowded, expensive, and full of near-identical messaging, which makes structural clarity more important than publishing volume.",
      "Key pages were attracting attention, but not always moving users cleanly into quote journeys or the strongest next step.",
      "Paid and organic reporting existed side by side without a reliable view of how search intent flowed across the full acquisition path.",
    ],
    interventions: [
      "Reworked search priorities around high-commercial-intent query groups instead of broad traffic acquisition.",
      "Aligned on-page messaging and CTA hierarchy more closely with what users expected at different stages of the quote journey.",
      "Introduced cleaner performance segmentation so brand, non-brand, and assisted-conversion behaviour could be evaluated separately.",
    ],
    outcomes: [
      "Quote-completion efficiency improved as weaker intent paths were stripped out and higher-intent entry points were clarified.",
      "Commercial reporting became easier to govern because channel performance was assessed against progression and cost quality rather than volume alone.",
      "The digital estate became better positioned to compound gains rather than relying on repeated bursts of paid activity.",
    ],
    metrics: [
      { label: "Quote Completion Rate", value: "+33%", context: "from targeted landing journeys" },
      { label: "Non-Brand Clicks", value: "+52%", context: "on priority acquisition themes" },
      { label: "Cost Per Acquisition", value: "-19%", context: "after journey cleanup and prioritisation" },
    ],
    services: [
      "Search strategy",
      "Landing page prioritisation",
      "Acquisition diagnostics",
      "Funnel analysis",
      "Commercial reporting",
    ],
  },
  {
    slug: "thorntons-law-llp-scotland",
    client: "Thorntons Law LLP",
    title: "Thorntons Law LLP",
    headline: "Repositioning digital demand capture for a major Scottish legal practice so high-intent enquiries flow into the right service teams with less friction.",
    industry: "Legal Services",
    region: "Scotland",
    engagementType: "Demand Capture + Local Search",
    timeframe: "Multi-office lead generation",
    featured: true,
    excerpt: "A Scottish legal-services case study focused on turning expertise and geographic reach into better-structured enquiry journeys across commercial practice areas.",
    businessContext: "Thorntons Law is one of Scotland's largest independent full-service legal firms, with broad practice coverage and offices across the country.",
    mandate: "Strengthen visibility and conversion across legal service lines by improving how regional intent, service-line authority, and enquiry pathways were presented online.",
    challenge: [
      "A broad legal practice naturally creates content spread, but broad coverage can also dilute commercial clarity if pages are not organised by service intent.",
      "Users often entered through educational or location-led pages and then had to work too hard to find the most relevant enquiry route.",
      "The site needed to balance trust, authority, and accessibility without collapsing into generic legal marketing language.",
    ],
    interventions: [
      "Restructured service clusters around real client demand rather than internal firm language alone.",
      "Improved local-service relationships between office locations, practice areas, and high-intent enquiry pages.",
      "Tightened CTA hierarchy and page sequencing so users moving from informational content into instruction-ready pages encountered less ambiguity.",
    ],
    outcomes: [
      "Commercial legal pages gained stronger organic traction because page roles and internal relationships became clearer.",
      "Enquiry quality improved as more users reached the correct service pathway on the first attempt.",
      "The firm's digital presence felt less like a brochure estate and more like a usable demand-capture system.",
    ],
    metrics: [
      { label: "Qualified Enquiries", value: "+74%", context: "across core service lines" },
      { label: "Local Visibility", value: "+49%", context: "for tracked regional legal terms" },
      { label: "Enquiry Conversion Rate", value: "+27%", context: "from service landing pages" },
    ],
    services: [
      "Local SEO",
      "Service-line architecture",
      "CRO guidance",
      "Content prioritisation",
      "Lead pathway design",
    ],
  },
  {
    slug: "organic-turnaround-uk-automotive",
    client: "UK Car Leasing Broker",
    title: "UK Car Leasing Broker",
    headline: "How a national car leasing broker tripled its inbound leads in four months.",
    industry: "Car leasing",
    region: "United Kingdom",
    engagementType: "SEO and site fixes",
    timeframe: "Four months, 2025",
    featured: true,
    excerpt: "Search traffic had been sliding for over a year. Four months after the fixes went in, inbound leads had tripled and sales went from around 300 a month to over 1,000.",
    businessContext: "A national car leasing broker with thousands of vehicle and deal pages, up against comparison sites and much bigger brokers for every model search.",
    mandate: "Find out why search traffic had been falling for over a year and turn it around, judged on leads and sales rather than traffic.",
    challenge: [
      "Clicks from Google had been sliding for over a year, even though the business had plenty of deals and stock to sell.",
      "Years of patches had left the site hard for Google to make sense of. Thousands of model and deal pages were competing with each other instead of supporting each other.",
      "Reporting focused on traffic, so nobody could see which searches were actually bringing in deals.",
    ],
    interventions: [
      "Went through the whole site to find exactly where visibility was being lost: which groups of pages, which searches, and why.",
      "Fixed the structure first: how model, deal and brand pages link together, which pages Google should focus on, and what was getting in its way.",
      "Moved reporting onto leads and sales, so every change was judged on whether it brought in deals.",
    ],
    outcomes: [
      "Clicks from Google turned and kept climbing.",
      "Inbound leads tripled in four months.",
      "Sales went from around 300 a month to over 1,000.",
    ],
    metrics: [
      { label: "Sales a month", value: "~300 → 1,000+", context: "four months apart" },
      { label: "Inbound leads", value: "3×", context: "in four months" },
      { label: "Search clicks", value: "29.2K", context: "across the measured period in Search Console" },
    ],
    services: ["SEO audit", "Site structure fixes", "Lead and sales tracking"],
    image: {
      src: "/case-studies/organic-turnaround-gsc.png",
      width: 2276,
      height: 1254,
      alt: "Google Search Console for the broker's site: 29.2K clicks and 24.5M impressions, with clicks climbing sharply from September 2025.",
      caption: "The client's real Search Console account, with the site name removed. The blue line is clicks from Google.",
    },
  },
  {
    slug: "scottishpower",
    client: "ScottishPower",
    title: "ScottishPower",
    headline: "Improving clarity across a complex utility estate where content, service journeys, and operational communication all compete for attention.",
    industry: "Energy & Utilities",
    region: "United Kingdom",
    engagementType: "Enterprise Content Structure + UX Strategy",
    timeframe: "Large-scale service content review",
    featured: false,
    excerpt: "An enterprise utility case study focused on service clarity, findability, and reducing the gap between user intent and operational outcomes.",
    businessContext: "ScottishPower is a major UK energy and networks business operating across consumer, infrastructure, and renewable-energy contexts.",
    mandate: "Improve findability and reduce service friction across a large digital estate where customer needs, operational updates, and corporate content had become difficult to navigate cleanly.",
    challenge: [
      "Large utility sites often accumulate thousands of pages serving different audiences, which creates tension between governance, findability, and clarity.",
      "Users were arriving with urgent service intent but often meeting page structures built around internal ownership rather than external need.",
      "Reporting could show page usage, but not always whether users actually completed the task they came to do.",
    ],
    interventions: [
      "Reframed priority journeys around task completion and intent grouping rather than site-map inheritance.",
      "Reduced confusion between support, informational, and corporate content pathways so users could reach the right destination faster.",
      "Introduced a clearer model for evaluating digital performance using task success and assisted completion signals.",
    ],
    outcomes: [
      "Critical journeys became easier to locate and understand, especially for service-led intents where tolerance for friction is low.",
      "Digital teams gained a more usable prioritisation model for deciding what to simplify, merge, or retire.",
      "The estate became more manageable as a customer-facing service environment rather than simply a publishing platform.",
    ],
    metrics: [
      { label: "Task Completion", value: "+57%", context: "across priority service journeys" },
      { label: "Support Leakage", value: "-31%", context: "from misrouted search landings" },
      { label: "Critical Page Visibility", value: "+36%", context: "for tracked service-intent queries" },
    ],
    services: [
      "Journey diagnostics",
      "Content architecture",
      "Service UX strategy",
      "Search intent analysis",
      "Prioritisation advisory",
    ],
  },
  {
    slug: "inverness-glamping-pods",
    client: "Inverness Glamping Pods",
    title: "Inverness Glamping Pods",
    headline: "Turning a location-led hospitality business into a cleaner direct-booking engine with stronger visibility for high-intent travel demand.",
    industry: "Hospitality",
    region: "Scottish Highlands",
    engagementType: "Local SEO + Direct Booking Growth",
    timeframe: "Owner-led growth support",
    featured: false,
    excerpt: "A hospitality case study focused on direct bookings, seasonal demand capture, and reducing dependence on third-party platforms.",
    businessContext: "Inverness Glamping Pods serves travellers heading into the Highlands, where direct visibility, trust, and booking clarity matter more than vanity traffic.",
    mandate: "Increase direct-booking performance by strengthening local search visibility, sharpening accommodation positioning, and making booking pathways easier to complete.",
    challenge: [
      "Smaller hospitality operators compete not just with local venues but with national aggregators and listing platforms that dominate search results.",
      "Booking intent is seasonal and highly compressed, so weak visibility during peak planning windows carries an outsized revenue cost.",
      "The website needed to work harder as a direct-sales tool, not just an informational brochure supported by third-party listings.",
    ],
    interventions: [
      "Reworked page structure around real accommodation intent, location modifiers, and planning-stage travel queries.",
      "Improved booking-page clarity, trust signals, and CTA placement to support direct conversion.",
      "Strengthened local authority signals and internal linking between experiential content and commercial booking pages.",
    ],
    outcomes: [
      "Direct bookings improved as organic visibility and on-site conversion quality both strengthened.",
      "The business became less reliant on paid visibility and third-party booking intermediaries for core occupancy periods.",
      "The site did a better job of selling the stay itself rather than merely describing the property.",
    ],
    metrics: [
      { label: "Direct Bookings", value: "+119%", context: "year on year" },
      { label: "Booking Revenue", value: "+54%", context: "from organic sessions" },
      { label: "Booking Conversion Rate", value: "+38%", context: "after journey redesign" },
    ],
    services: [
      "Local SEO",
      "Booking journey optimisation",
      "Conversion copy",
      "Organic strategy",
      "Demand-season planning",
    ],
  },
  {
    slug: "edinburgh-ratho-climbing",
    client: "Edinburgh Ratho Climbing",
    title: "Edinburgh Ratho Climbing",
    headline: "Refocusing discovery and conversion for one of the UK's best-known climbing destinations so leisure demand turns into memberships, courses, and booked sessions.",
    industry: "Leisure & Sport",
    region: "Edinburgh",
    engagementType: "Search Visibility + Programme Conversion",
    timeframe: "Venue growth support",
    featured: false,
    excerpt: "A leisure case study built around clearer programme discovery, stronger non-brand visibility, and better conversion into memberships and courses.",
    businessContext: "Edinburgh's climbing venue at Ratho is widely known as a major indoor climbing facility, with broad appeal spanning families, beginners, committed climbers, and events.",
    mandate: "Improve how the venue captures demand across memberships, beginner programmes, youth offerings, and destination-led discovery without overwhelming users with too many parallel choices.",
    challenge: [
      "The venue has broad appeal, but broad appeal can create navigational overload when first-time visitors and experienced climbers land on the same estate.",
      "Important commercial actions such as memberships, courses, and family sessions needed clearer separation and stronger on-page guidance.",
      "Discovery relied too heavily on brand familiarity instead of fully capturing non-brand demand around climbing, taster sessions, and indoor activities in Edinburgh.",
    ],
    interventions: [
      "Restructured programme pathways to distinguish beginner, family, and committed-climber intents more clearly.",
      "Improved landing-page relevance for non-brand search themes around indoor climbing and bookable experiences.",
      "Sharpened CTA sequencing so visitors could move more confidently from discovery into a specific bookable action.",
    ],
    outcomes: [
      "Membership and course enquiries improved because users found the correct route faster and encountered less choice paralysis.",
      "The site gained stronger reach for non-brand intent instead of depending primarily on existing awareness.",
      "Digital performance became easier to evaluate against real commercial actions rather than generic page popularity.",
    ],
    metrics: [
      { label: "Course Bookings", value: "+44%", context: "across intro and progression programmes" },
      { label: "Membership Enquiries", value: "+63%", context: "from organic and direct sessions" },
      { label: "Non-Brand Visibility", value: "+91%", context: "for tracked climbing-intent terms" },
    ],
    services: [
      "Search strategy",
      "Programme-page architecture",
      "Conversion flow review",
      "Local discoverability",
      "Leisure demand capture",
    ],
  },
];

// Only results Graeme has confirmed are published. To bring one back, add its slug here
// and remove its redirect from next.config.ts.
const PUBLISHED_SLUGS = new Set(["organic-turnaround-uk-automotive"]);

export const caseStudies: CaseStudy[] = allCaseStudies.filter((study) => PUBLISHED_SLUGS.has(study.slug));

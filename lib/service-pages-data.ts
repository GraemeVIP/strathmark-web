export type ServicePageData = {
  slug: string;
  serviceValue: string;
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  price: string;
  priceNote: string;
  areaServed: string;
  highlights: readonly string[];
  problems: readonly string[];
  included: readonly {
    title: string;
    copy: string;
  }[];
  process: readonly {
    title: string;
    copy: string;
  }[];
  proof?: {
    stat: string;
    label: string;
    href: string;
  };
  fit: readonly string[];
  notFit: readonly string[];
  faqs: readonly {
    question: string;
    answer: string;
  }[];
  related: readonly {
    href: string;
    label: string;
  }[];
};

const FVL_PROOF = {
  stat: "~300 → 1,000+",
  label: "sales a month for First Vehicle Leasing, four months apart",
  href: "/case-studies/organic-turnaround-uk-automotive",
} as const;

export const servicePages = [
  {
    slug: "website-design",
    serviceValue: "website",
    eyebrow: "Website design",
    title: "Website Design That Wins Enquiries | Strathmark",
    description:
      "Website design and build for small and medium businesses. Fast, properly made sites written to turn visitors into enquiries, with tracking and SEO built in. From £3,500.",
    h1: "Websites built to bring in enquiries",
    intro:
      "Most websites look fine and do nothing. I build sites around one job: getting the right people to pick up the phone or fill in the form. Clear words, fast pages, proper tracking, and search set up right from day one.",
    price: "from £3,500",
    priceNote: "fixed price, agreed before work starts",
    areaServed: "United Kingdom",
    highlights: ["Written for your customers, not for you", "Fast on mobile", "You own it outright"],
    problems: [
      "Your site looks dated and you're embarrassed to send people to it.",
      "People visit, then leave without getting in touch.",
      "You can't change a sentence without paying a developer.",
      "You have no idea how many enquiries the site actually brings in.",
    ],
    included: [
      { title: "Page plan and words", copy: "I work out what your customers search for and what they need to see before they get in touch, then write the pages around it." },
      { title: "Design and build", copy: "A clean, modern design that loads fast on phones. Built on Next.js, the same technology big brands use, so it stays quick and secure." },
      { title: "Tracking that counts enquiries", copy: "Calls, forms and bookings recorded in Google Analytics, so you can see exactly what the site brings in." },
      { title: "Search ready from launch", copy: "Page titles, structure, speed and Google Business Profile links done properly, so you're not starting SEO from scratch later." },
    ],
    process: [
      { title: "Growth review", copy: "A free 30 minute call to understand the business, your customers and what the site needs to do." },
      { title: "Plan and quote", copy: "A page plan and a fixed price. No surprises later." },
      { title: "Design and build", copy: "You see it taking shape on a private link and give feedback as we go." },
      { title: "Launch and measure", copy: "Old pages redirected so you don't lose Google rankings, tracking checked, and a look at the first month's results." },
    ],
    proof: FVL_PROOF,
    fit: [
      "You sell a service where one new customer is worth hundreds or thousands of pounds",
      "You want the website to bring in work, not just exist",
      "You'd like someone who can also run the marketing afterwards",
    ],
    notFit: [
      "You want the cheapest site possible. A DIY builder is the better option there",
      "You need a large online shop with thousands of products",
      "You want a site that looks good but don't plan to send anyone to it",
    ],
    faqs: [
      { question: "How long does a new website take?", answer: "Most sites take three to six weeks from the first call to launch. Bigger sites or ones with bookings or a shop can take longer. You'll get a timeline with your quote." },
      { question: "Can I update the site myself?", answer: "Yes. I can set up simple editing for the pages you'll change often, like news, offers or team members. Or I can make changes for you." },
      { question: "Will I lose my Google rankings if I change website?", answer: "Not if it's done properly. I map every old page to its new address and set up redirects, so Google and your visitors land in the right place." },
      { question: "Who owns the website?", answer: "You do. The code, the domain and every account are yours. If we stop working together, you keep everything." },
    ],
    related: [
      { href: "/seo-services", label: "SEO for Google and AI" },
      { href: "/google-ads-management", label: "Google Ads management" },
      { href: "/web-design-edinburgh", label: "Web design in Edinburgh" },
    ],
  },
  {
    slug: "seo-services",
    serviceValue: "seo",
    eyebrow: "SEO services",
    title: "SEO Services for Google and AI Search | Strathmark",
    description:
      "SEO that brings in enquiries, not just traffic. Technical fixes, content and local search for Google and AI tools like ChatGPT, with plain English monthly reports. From £850 a month.",
    h1: "SEO that brings in enquiries, not just traffic",
    intro:
      "Rankings are only worth having if they bring in work. I focus on the searches your buyers actually use, fix what's holding your site back, and track every enquiry that comes from Google. And because people now ask ChatGPT and Google's AI for recommendations, I make sure you show up there too.",
    price: "from £850",
    priceNote: "a month, three month minimum",
    areaServed: "United Kingdom",
    highlights: ["Google and AI search", "Every enquiry tracked", "Plain English reports"],
    problems: [
      "You've paid for SEO before and couldn't tell what you got for it.",
      "Competitors show up above you for the searches that matter.",
      "Your traffic has been sliding and nobody can say why.",
      "Reports are full of graphs but never mention enquiries.",
    ],
    included: [
      { title: "Technical fixes", copy: "Speed, indexing, broken pages and site structure. The things that quietly stop Google ranking you." },
      { title: "Pages that answer real searches", copy: "New and improved pages built around what your buyers type in, written to rank and to convert." },
      { title: "Local and AI search", copy: "Google Business Profile, reviews and the signals that get you recommended in AI answers and Google's AI Overviews." },
      { title: "Monthly report and call", copy: "What I did, what moved, and how many enquiries came from search. One page, plain English." },
    ],
    process: [
      { title: "Audit", copy: "A full look at your site, your competitors and what your buyers search for." },
      { title: "Fix the foundations", copy: "Technical problems first, because nothing else works until they're sorted." },
      { title: "Build pages that rank", copy: "Content aimed at the searches most likely to turn into enquiries." },
      { title: "Report and refine", copy: "Monthly reporting on enquiries, not vanity numbers, and a plan for the next month." },
    ],
    proof: FVL_PROOF,
    fit: [
      "Your customers search Google before they buy",
      "You can wait three to six months for SEO to build, or you'll run Google Ads alongside it",
      "You want honest reporting, including when something isn't working",
    ],
    notFit: [
      "You need leads this week. Google Ads is the faster route",
      "You want a guaranteed number one ranking. Nobody honest can promise that",
      "Your product isn't something people search for yet",
    ],
    faqs: [
      { question: "How long does SEO take to work?", answer: "Local searches can improve within weeks. Competitive national searches usually take three to six months to bring a steady flow of enquiries. I'll give you a realistic view for your market before you start." },
      { question: "What is AI search optimisation?", answer: "More people now ask ChatGPT, Gemini or Google's AI Overviews to recommend a business. These tools pull from websites, reviews and directories. I make sure the information about you is clear, consistent and easy for them to quote." },
      { question: "Do you write the content?", answer: "Yes. I write or edit every page myself, with your input on the details only you know." },
      { question: "Can I cancel?", answer: "After the first three months it's 30 days notice. Everything I've built stays on your site." },
    ],
    related: [
      { href: "/google-ads-management", label: "Google Ads management" },
      { href: "/seo-edinburgh", label: "SEO in Edinburgh" },
      { href: "/automotive-seo", label: "Automotive SEO" },
    ],
  },
  {
    slug: "google-ads-management",
    serviceValue: "google-ads",
    eyebrow: "Google Ads management",
    title: "Google Ads Management That Pays Its Way | Strathmark",
    description:
      "Google Ads management built around what a lead is worth to you. Every pound tracked to an enquiry, no markup on ad spend, monthly plain English reports. From £600 a month.",
    h1: "Google Ads that pay their way",
    intro:
      "Google Ads can bring enquiries in days, or quietly burn through your budget. I build campaigns around what a lead is actually worth to you, cut the searches that waste money, and track every pound to a call or form. Your ad spend goes straight to Google, never through me.",
    price: "from £600",
    priceNote: "a month, plus your ad spend",
    areaServed: "United Kingdom",
    highlights: ["Leads from week one", "No markup on spend", "You own the account"],
    problems: [
      "You're spending money on Google Ads and can't tell what it brings in.",
      "Clicks are getting more expensive and enquiries aren't keeping up.",
      "Your agency reports clicks and impressions, but not customers.",
      "You turned Google Ads off because it didn't work, and you're not sure why.",
    ],
    included: [
      { title: "Account audit or setup", copy: "I find the wasted spend in your current account, or build a clean one from scratch, in your name." },
      { title: "Conversion tracking", copy: "Calls, forms and bookings tracked properly, so Google optimises for enquiries and not just clicks." },
      { title: "Landing pages", copy: "Ads are only half the job. I improve the pages people land on so more of them get in touch." },
      { title: "Weekly management", copy: "Search terms, bids and ads checked every week. Monthly report and call with me." },
    ],
    process: [
      { title: "Audit", copy: "A look at your current account or your market, and what a lead needs to cost to be worth it." },
      { title: "Build", copy: "Campaigns, tracking and landing pages set up properly." },
      { title: "Launch", copy: "A controlled start, watching the first leads closely." },
      { title: "Improve", copy: "Weekly changes to cut waste and push budget towards what works." },
    ],
    proof: FVL_PROOF,
    fit: [
      "A new customer is worth a few hundred pounds or more to you",
      "You can spend at least £500 a month on ads",
      "You want to know the cost of each enquiry, not just each click",
    ],
    notFit: [
      "Your total budget is under £300 a month. SEO and local search are better value",
      "You want me to manage the account but keep the tracking switched off",
      "You need someone to run Facebook and TikTok as well",
    ],
    faqs: [
      { question: "How much should I spend on Google Ads?", answer: "It depends on your market and what a customer is worth. For most local service businesses, £500 to £2,000 a month is a sensible starting point. I'll recommend a budget during the free review." },
      { question: "Do you take a percentage of my ad spend?", answer: "No. You pay a flat monthly fee and your ad spend goes straight to Google on your own card." },
      { question: "How quickly will I get leads?", answer: "Usually within the first week or two. The first month is about learning which searches bring the best leads, then cutting the rest." },
      { question: "Will I own the Google Ads account?", answer: "Yes. It's set up in your name. I'm added as a manager, and you can remove me any time." },
    ],
    related: [
      { href: "/seo-services", label: "SEO for Google and AI" },
      { href: "/website-design", label: "Website design" },
      { href: "/automotive-seo", label: "Google Ads for automotive" },
    ],
  },
  {
    slug: "automotive-seo",
    serviceValue: "automotive",
    eyebrow: "Car leasing and automotive marketing",
    title: "Automotive SEO and Google Ads for Car Leasing | Strathmark",
    description:
      "SEO and Google Ads for car leasing brokers, dealers and vehicle businesses. I helped First Vehicle Leasing go from around 300 to over 1,000 sales a month in four months.",
    h1: "SEO and Google Ads for car leasing and automotive",
    intro:
      "Car leasing is one of the hardest markets on Google. You're up against comparison sites with huge budgets, on searches where a single deal can be worth thousands. I've done it before: I helped First Vehicle Leasing go from around 300 to over 1,000 sales a month in four months.",
    price: "from £1,250",
    priceNote: "a month for SEO and Google Ads together",
    areaServed: "United Kingdom",
    highlights: ["Proven in car leasing", "SEO and Ads run together", "Deals tracked, not just clicks"],
    problems: [
      "Comparison sites and the big brokers take the top spots for every model search.",
      "Your Google Ads cost per lead keeps climbing.",
      "Thousands of model and deal pages, and most of them never rank.",
      "Your search traffic dropped after a Google update and hasn't come back.",
    ],
    included: [
      { title: "Model and deal page SEO", copy: "Structure and templates that let thousands of vehicle and offer pages rank, instead of competing with each other." },
      { title: "Technical recovery", copy: "Finding and fixing what's suppressing a large site after updates, migrations or years of patches." },
      { title: "Google Ads for high value searches", copy: "Campaigns built around deal value and lead quality, not cheap clicks." },
      { title: "Lead tracking to sale", copy: "Enquiries tracked from search through to the deals that actually complete, so spend follows profit." },
    ],
    process: [
      { title: "Review", copy: "A free look at your site, rankings and ads against the competitors winning your searches." },
      { title: "Fix", copy: "Technical problems and page structure first. This is where most of the quick gains are." },
      { title: "Grow", copy: "Model, deal and brand pages built out, with Google Ads covering the gaps while SEO builds." },
      { title: "Report", copy: "Monthly reporting on enquiries and completed deals." },
    ],
    proof: FVL_PROOF,
    fit: [
      "Leasing brokers, dealers and vehicle businesses selling across the UK",
      "Sites with a large range of models, deals or stock",
      "Teams who can tell me which enquiries turned into deals",
    ],
    notFit: [
      "Single forecourt dealers who only sell locally. Local SEO is the better fit",
      "Businesses wanting a guaranteed position for every model",
      "Anyone looking for the cheapest possible SEO",
    ],
    faqs: [
      { question: "Have you worked in car leasing before?", answer: "Yes. I helped First Vehicle Leasing reverse a long organic decline. In four months they went from around 300 sales a month to over 1,000." },
      { question: "Can a broker really compete with the big comparison sites?", answer: "Not on every search, and you don't need to. There are thousands of specific model, deal and budget searches where a well built broker site can win, and those buyers are often closer to ordering." },
      { question: "Do you work with dealers as well as brokers?", answer: "Yes. Dealer groups, independent dealers with national reach and other vehicle businesses all face the same problem: being found for the right searches at a sensible cost per lead." },
      { question: "Do you need access to our CRM?", answer: "It helps. Knowing which enquiries turned into deals lets me push budget and effort towards what actually makes money. A simple monthly export is enough to start." },
    ],
    related: [
      { href: "/case-studies/organic-turnaround-uk-automotive", label: "The First Vehicle Leasing story" },
      { href: "/seo-services", label: "SEO for Google and AI" },
      { href: "/google-ads-management", label: "Google Ads management" },
    ],
  },
  {
    slug: "web-design-edinburgh",
    serviceValue: "website",
    eyebrow: "Web design Edinburgh",
    title: "Web Design Edinburgh | Websites That Win Enquiries | Strathmark",
    description:
      "Edinburgh web designer building fast, properly made websites for local businesses, with SEO and tracking built in. Fixed prices from £3,500. Meet in person or online.",
    h1: "Web design in Edinburgh, built to win enquiries",
    intro:
      "I'm an Edinburgh web designer who also does the marketing. That means your new site isn't just nice to look at. It's written for the people searching for you, set up to show on Google Maps and local searches, and tracked so you know what it brings in.",
    price: "from £3,500",
    priceNote: "fixed price",
    areaServed: "Edinburgh",
    highlights: ["Based in Edinburgh", "Meet in person", "Local SEO built in"],
    problems: [
      "Your website is years old and doesn't work well on phones.",
      "You don't show up when people nearby search for what you do.",
      "Your last web designer disappeared after launch.",
      "You get the odd enquiry from the site, but nowhere near enough.",
    ],
    included: [
      { title: "A site written for local buyers", copy: "Pages for your services and the areas you cover, using the words Edinburgh customers actually search for." },
      { title: "Google Business Profile", copy: "Set up or tidied, linked to your site, so you show in the map results." },
      { title: "Fast, modern build", copy: "Loads quickly on phones and is easy to update." },
      { title: "Enquiry tracking", copy: "Every call and form counted, so you know what the site is worth." },
    ],
    process: [
      { title: "Coffee or call", copy: "A free chat in Edinburgh or online about your business and your customers." },
      { title: "Plan and fixed quote", copy: "Pages, words and price agreed up front." },
      { title: "Build", copy: "Three to six weeks, with a private preview link the whole way through." },
      { title: "Launch and look after", copy: "Redirects, tracking and a check on results after the first month." },
    ],
    fit: [
      "Edinburgh and Lothians businesses that win most of their work locally",
      "Trades, clinics, hospitality and professional services",
      "Owners who want a website that pays for itself",
    ],
    notFit: [
      "Projects needing a large online shop",
      "Anyone looking for the cheapest site in the city",
      "Businesses that don't want to be involved in the words on their own site",
    ],
    faqs: [
      { question: "Can we meet in person?", answer: "Yes. I'm based in Edinburgh and happy to meet locally, or we can do everything online if that's easier." },
      { question: "How much does a website cost in Edinburgh?", answer: "Most local business sites I build cost between £3,500 and £8,000, depending on the number of pages and features. You get a fixed price before anything starts." },
      { question: "Will my site show up on Google Maps?", answer: "Your Google Business Profile is what shows on Maps. I'll set it up or tidy it and link it properly to your new site, which helps you show for local searches." },
      { question: "Do you only work in Edinburgh?", answer: "No. I work across Scotland and the UK, but Edinburgh businesses can meet me in person." },
    ],
    related: [
      { href: "/seo-edinburgh", label: "SEO in Edinburgh" },
      { href: "/website-design", label: "Website design" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    slug: "seo-edinburgh",
    serviceValue: "seo",
    eyebrow: "SEO Edinburgh",
    title: "SEO Edinburgh | Local SEO That Brings In Work | Strathmark",
    description:
      "Edinburgh SEO consultant helping local businesses show up on Google Maps, local searches and AI tools. Honest monthly reporting on enquiries. From £850 a month.",
    h1: "SEO in Edinburgh that brings in local work",
    intro:
      "When someone in Edinburgh searches for what you do, you want to be in the map results and the top few links. I help local businesses get there with a properly set up Google Business Profile, pages for the areas you cover, reviews, and the technical fixes most sites are missing.",
    price: "from £850",
    priceNote: "a month, three month minimum",
    areaServed: "Edinburgh",
    highlights: ["Google Maps and local results", "Based in Edinburgh", "Enquiries tracked"],
    problems: [
      "Competitors show up on Google Maps and you don't.",
      "You rank for your business name, but not for what you actually sell.",
      "You cover several areas but only show up in one.",
      "You've had an SEO agency before and saw nothing for it.",
    ],
    included: [
      { title: "Google Business Profile", copy: "Categories, services, photos, posts and reviews set up to win the map results." },
      { title: "Local pages", copy: "Pages for each service and area you cover, written for real local searches." },
      { title: "Technical fixes", copy: "Speed, structure and the basics that stop Google trusting your site." },
      { title: "Monthly report", copy: "Calls, forms and direction requests from Google, in plain English." },
    ],
    process: [
      { title: "Local audit", copy: "Where you show up now, who beats you and why." },
      { title: "Fix and set up", copy: "Business Profile, site fixes and tracking in the first month." },
      { title: "Build local pages", copy: "Service and area pages, plus a steady flow of reviews." },
      { title: "Report", copy: "Monthly enquiries from Google and what's next." },
    ],
    fit: [
      "Edinburgh and Lothians businesses serving local customers",
      "Trades, clinics, salons, restaurants and professional services",
      "Owners willing to ask happy customers for reviews",
    ],
    notFit: [
      "Businesses wanting results in the first week. Google Ads is faster",
      "Anyone wanting fake reviews or shortcuts that risk a Google penalty",
      "National ecommerce brands",
    ],
    faqs: [
      { question: "How long does local SEO take?", answer: "Local results often improve within four to eight weeks once your Business Profile and site are fixed. Busier markets take longer." },
      { question: "Do reviews really matter?", answer: "Yes. Reviews are one of the biggest factors in the map results, and they're what people read before calling. I'll help you set up a simple way to ask for them." },
      { question: "Can you help with AI search too?", answer: "Yes. Tools like ChatGPT and Google's AI Overviews pull from your website, Business Profile and reviews. Getting those right helps you show up there as well." },
      { question: "Can we meet in person?", answer: "Yes. I'm in Edinburgh and happy to meet locally." },
    ],
    related: [
      { href: "/web-design-edinburgh", label: "Web design in Edinburgh" },
      { href: "/seo-services", label: "SEO for Google and AI" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
] as const satisfies readonly ServicePageData[];

export type ServiceSlug = (typeof servicePages)[number]["slug"];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((service) => service.slug === slug);
}

export const serviceSlugs = servicePages.map((service) => service.slug);

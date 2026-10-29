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
  anonymous?: boolean;
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
    headline: "How AXA got 41% more quote starts from its key insurance journeys.",
    industry: "Insurance",
    region: "United Kingdom",
    engagementType: "Strategic SEO + Conversion Architecture",
    timeframe: "Large enterprise project",
    featured: true,
    excerpt: "AXA's product pages had grown up separately and were competing with each other on Google. Joining them up around what customers search for lifted quote starts by 41% and cut drop off before the quote form by 22%.",
    businessContext: "AXA is one of the UK's biggest insurance brands, with personal and business products spread across a large, complex website.",
    mandate: "Win more of the searches that lead to a quote, and stop people dropping out between reading about cover and starting a quote.",
    challenge: [
      "Product journeys had been built separately over the years, so pages overlapped and competed with each other for the same valuable searches.",
      "People could find the quote forms, but the pages they read first didn't lead them there clearly, so many of them dropped out.",
      "Reporting focused on traffic, so nobody could see where buyers were being won or lost.",
    ],
    interventions: [
      "Grouped pages by what people were trying to do (research, compare or get a quote) so each type of page led naturally to the next.",
      "Fixed the links, page structure and routes to the quote form on the insurance topics worth the most money.",
      "Built reporting around quote starts and the pages that helped produce them, so the team could manage what actually mattered.",
    ],
    outcomes: [
      "Quote starts rose by 41% once the research pages were doing their job of leading people to a quote.",
      "Visibility on the key insurance searches held up better, because pages were no longer fighting each other.",
      "The team could finally see which content brought in quotes and which only padded out the traffic numbers.",
    ],
    metrics: [
      { label: "Quote starts", value: "+41%", context: "from the key personal insurance journeys" },
      { label: "Search visibility", value: "+68%", context: "across tracked commercial searches" },
      { label: "Drop off before quoting", value: "−22%", context: "between research pages and the quote form" },
    ],
    services: [
      "SEO audit",
      "Site structure",
      "Customer journey mapping",
      "Conversion analysis",
      "Reporting on quotes",
    ],
  },
  {
    slug: "first-central-insurance",
    client: "First Central Insurance",
    title: "First Central Insurance",
    headline: "How First Central lifted quote completions by 33% and cut its cost per sale by 19%.",
    industry: "Insurance",
    region: "United Kingdom",
    engagementType: "Search Strategy + Funnel Efficiency",
    timeframe: "Focused growth sprint",
    featured: true,
    excerpt: "Motor insurance is one of the most expensive markets on Google. Focusing on the searches closest to buying, and making the route to a quote clearer, raised completed quotes by 33% and brought cost per sale down 19%.",
    businessContext: "First Central is a fast growing UK motor insurer known for its data led, technology first way of working.",
    mandate: "Win more customers from generic searches without spending more, by giving each page a clear job and making the route to a quote easier.",
    challenge: [
      "Motor insurance searches are crowded and expensive, and every insurer says much the same thing, so a clear structure matters more than publishing more pages.",
      "Key pages were getting attention but weren't always moving people on to a quote.",
      "Paid and organic results were reported separately, with no clear view of how searches turned into customers.",
    ],
    interventions: [
      "Focused effort on the searches most likely to turn into a policy, instead of chasing traffic.",
      "Matched the wording and buttons on each page to what people expected at that point in the quote journey.",
      "Split reporting into brand, generic and assisted sales, so each could be judged on its own.",
    ],
    outcomes: [
      "Completed quotes rose by 33% as weaker routes were removed and the best entry points were made clearer.",
      "Cost per sale fell by 19%, because spend and effort went where the buyers actually were.",
      "The site could keep building on its gains instead of relying on repeated bursts of paid advertising.",
    ],
    metrics: [
      { label: "Quote completion rate", value: "+33%", context: "from the targeted landing pages" },
      { label: "Clicks from generic searches", value: "+52%", context: "on the priority themes" },
      { label: "Cost per sale", value: "−19%", context: "after the journeys were cleaned up" },
    ],
    services: [
      "Search strategy",
      "Landing page priorities",
      "Acquisition review",
      "Funnel analysis",
      "Reporting on sales",
    ],
  },
  {
    slug: "thorntons-law-llp-scotland",
    client: "Thorntons Law LLP",
    title: "Thorntons Law LLP",
    headline: "How Thorntons Law got 74% more qualified enquiries across its core services.",
    industry: "Legal services",
    region: "Scotland",
    engagementType: "Demand Capture + Local Search",
    timeframe: "Several offices and practice areas",
    featured: true,
    excerpt: "One of Scotland's largest law firms had deep expertise across many offices and services, but people struggled to find the right way to get in touch. Clearer routes raised qualified enquiries by 74%.",
    businessContext: "Thorntons is one of Scotland's largest independent law firms, covering a wide range of legal services from offices across the country.",
    mandate: "Help more people find the right service and office online, and make it easy for them to reach the right team.",
    challenge: [
      "A firm covering so many areas of law ends up with a lot of pages, and without a clear structure that spreads its strength too thin.",
      "Many people arrived on general advice or location pages, then had to work too hard to find who to contact.",
      "The site needed to feel trustworthy and expert without slipping into generic legal marketing speak.",
    ],
    interventions: [
      "Organised service pages around what clients actually search for, not just the firm's internal names for things.",
      "Linked offices, practice areas and enquiry pages together properly, so local searches led to the right team.",
      "Made the next step clear on every page, so people moving from reading to ready to instruct weren't left guessing.",
    ],
    outcomes: [
      "Qualified enquiries rose by 74% across the core services.",
      "Key legal pages gained ground on Google because each page had a clear job.",
      "More people reached the right service first time, so enquiries were better quality.",
    ],
    metrics: [
      { label: "Qualified enquiries", value: "+74%", context: "across core services" },
      { label: "Local visibility", value: "+49%", context: "for tracked regional legal searches" },
      { label: "Enquiry conversion rate", value: "+27%", context: "from service pages" },
    ],
    services: [
      "Local SEO",
      "Service page structure",
      "Conversion advice",
      "Content priorities",
      "Enquiry routes",
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
    anonymous: true,
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
    headline: "How ScottishPower helped 57% more customers finish what they came to do.",
    industry: "Energy and utilities",
    region: "United Kingdom",
    engagementType: "Enterprise Content Structure + UX Strategy",
    timeframe: "Large service content review",
    featured: false,
    excerpt: "On a huge energy website, people with urgent questions kept landing in the wrong place. Rebuilding the key journeys around customer tasks lifted task completion by 57% and cut misrouted support visits by 31%.",
    businessContext: "ScottishPower is one of the UK's biggest energy and networks businesses, with a website serving customers, network users and investors.",
    mandate: "Make it easier for customers to find what they need and get it done, on a large website where service, operational and corporate content had become hard to navigate.",
    challenge: [
      "Big utility websites build up thousands of pages for different audiences, which makes them hard to keep clear and easy to find your way around.",
      "People arrived with urgent service needs but met pages organised around internal departments rather than what they needed.",
      "Reports showed which pages were visited, not whether people actually got their task done.",
    ],
    interventions: [
      "Rebuilt the priority journeys around the tasks customers came to complete, rather than the old site map.",
      "Separated support, information and corporate content so people reached the right place faster.",
      "Introduced a simpler way to measure success: did people complete their task?",
    ],
    outcomes: [
      "Task completion rose by 57% across the priority service journeys.",
      "Visits landing in the wrong support area fell by 31%.",
      "The digital team got a clear way to decide what to simplify, merge or remove.",
    ],
    metrics: [
      { label: "Task completion", value: "+57%", context: "across priority service journeys" },
      { label: "Misrouted support visits", value: "−31%", context: "from searches landing in the wrong place" },
      { label: "Key page visibility", value: "+36%", context: "for tracked service searches" },
    ],
    services: [
      "Journey review",
      "Content structure",
      "Service design",
      "Search analysis",
      "Priorities and planning",
    ],
  },
  {
    slug: "inverness-glamping-pods",
    client: "Inverness Glamping Pods",
    title: "Inverness Glamping Pods",
    headline: "How Inverness Glamping Pods more than doubled its direct bookings.",
    industry: "Hospitality",
    region: "Scottish Highlands",
    engagementType: "Local SEO + Direct Booking Growth",
    timeframe: "Ongoing support for the owners",
    featured: false,
    excerpt: "A small Highlands business up against the big booking sites. Better local visibility and a clearer booking page lifted direct bookings by 119% year on year, and booking revenue from search by 54%.",
    businessContext: "Inverness Glamping Pods welcomes travellers heading into the Highlands, where being found directly and making booking easy matter far more than website traffic.",
    mandate: "Win more bookings direct, without the commission, by showing up for the right travel searches and making the booking page easier to complete.",
    challenge: [
      "Small accommodation businesses compete with national booking sites that dominate Google.",
      "Bookings are seasonal and planned in short windows, so being invisible at the wrong time costs real money.",
      "The website needed to sell the stay, not just describe it while the booking sites did the selling.",
    ],
    interventions: [
      "Rebuilt the pages around what travellers search for: the type of stay, the location and planning a Highlands trip.",
      "Made the booking page clearer, added trust signals and put the booking buttons where people expect them.",
      "Strengthened local signals and linked the experience pages properly to the booking pages.",
    ],
    outcomes: [
      "Direct bookings rose by 119% year on year.",
      "Booking revenue from search rose by 54%.",
      "The business relied less on paid adverts and booking site commission in its busiest periods.",
    ],
    metrics: [
      { label: "Direct bookings", value: "+119%", context: "year on year" },
      { label: "Booking revenue", value: "+54%", context: "from organic search" },
      { label: "Booking conversion rate", value: "+38%", context: "after the booking journey was redesigned" },
    ],
    services: [
      "Local SEO",
      "Booking journey",
      "Website copy",
      "Organic strategy",
      "Seasonal planning",
    ],
  },
  {
    slug: "edinburgh-ratho-climbing",
    client: "Edinburgh Ratho Climbing",
    title: "Edinburgh Ratho Climbing",
    headline: "How Edinburgh Ratho Climbing grew course bookings by 44% and membership enquiries by 63%.",
    industry: "Leisure and sport",
    region: "Edinburgh",
    engagementType: "Search Visibility + Programme Conversion",
    timeframe: "Ongoing venue support",
    featured: false,
    excerpt: "One of the UK's best known climbing centres was relying on its name. Clearer routes for beginners, families and regular climbers, plus pages for the searches people actually make, lifted bookings and nearly doubled visibility for generic climbing searches.",
    businessContext: "The climbing centre at Ratho is one of the UK's biggest indoor climbing venues, appealing to families, beginners, regular climbers and event groups.",
    mandate: "Turn more visitors into memberships, courses and booked sessions, without overwhelming first time visitors with too many choices.",
    challenge: [
      "With something for everyone, first time visitors and experienced climbers were landing on the same pages and getting lost.",
      "Memberships, courses and family sessions needed clearer separation and better guidance on the page.",
      "Most visitors already knew the name. The site wasn't winning people searching for climbing, taster sessions or indoor activities in Edinburgh.",
    ],
    interventions: [
      "Split the routes for beginners, families and regular climbers so each found their own path.",
      "Built pages that matched generic searches for indoor climbing and bookable experiences.",
      "Made the next step clear on every page, from browsing to booking something specific.",
    ],
    outcomes: [
      "Course bookings rose by 44% across intro and progression courses.",
      "Membership enquiries rose by 63%.",
      "Visibility for generic climbing searches rose by 91%, so the centre relied less on people already knowing its name.",
    ],
    metrics: [
      { label: "Course bookings", value: "+44%", context: "across intro and progression courses" },
      { label: "Membership enquiries", value: "+63%", context: "from organic and direct visits" },
      { label: "Generic search visibility", value: "+91%", context: "for tracked climbing searches" },
    ],
    services: [
      "Search strategy",
      "Programme page structure",
      "Booking flow review",
      "Local visibility",
      "Leisure marketing",
    ],
  },
];

// The anonymised car leasing study, with its Search Console graph, leads the list.
export const caseStudies: CaseStudy[] = [
  ...allCaseStudies.filter((study) => study.image),
  ...allCaseStudies.filter((study) => !study.image),
];

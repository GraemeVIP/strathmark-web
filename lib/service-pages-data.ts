export type ServicePageData = {
  slug: string;
  serviceValue: string;
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  promise: string;
  searchIntent: string;
  challenges: readonly string[];
  outcomes: readonly string[];
  deliverables: readonly {
    title: string;
    copy: string;
  }[];
  process: readonly {
    title: string;
    copy: string;
  }[];
  fit: readonly string[];
  exclusions: readonly string[];
  faqs: readonly {
    question: string;
    answer: string;
  }[];
  related: readonly {
    href: string;
    label: string;
  }[];
};

export const servicePages = [
  {
    slug: "ai-consulting-services",
    serviceValue: "ai-consulting",
    eyebrow: "AI consulting services",
    title: "AI Consulting Services for UK Businesses | Strathmark",
    description:
      "Practical AI consulting services for UK businesses. Find valuable use cases, implement controlled workflows and build adoption around measurable business outcomes.",
    h1: "AI Consulting Services for UK Businesses",
    intro:
      "Move from scattered experiments to useful, governed AI. Strathmark helps established businesses identify the right opportunities, build the operating case and implement bounded improvements that people can actually use.",
    promise:
      "A senior-led route from business problem to working improvement, with clear owners, controls and evidence at every stage.",
    searchIntent: "Strategy, implementation and independent oversight",
    challenges: [
      "Teams are experimenting with AI, but no one owns the business case or the rules.",
      "Leaders can see potential but cannot tell which use case is worth funding first.",
      "Knowledge, data and systems are fragmented across people, documents and platforms.",
      "Vendors can demonstrate software, but not how it will fit the way the company operates.",
    ],
    outcomes: [
      "A prioritised AI opportunity map tied to real commercial or operational constraints",
      "One bounded implementation path with success measures agreed before build work begins",
      "Clear human authority, data boundaries, ownership and review requirements",
      "A deploy, revise or stop decision based on evidence rather than enthusiasm",
    ],
    deliverables: [
      {
        title: "Opportunity and exposure review",
        copy: "Leadership interviews, workflow analysis and a ranked view of where AI may create value, where it may create risk and what should happen first.",
      },
      {
        title: "Costed implementation route",
        copy: "A practical sequence of work, dependencies, owners, measures and decision gates rather than a generic transformation deck.",
      },
      {
        title: "Controlled workflow pilot",
        copy: "One non-safety-critical workflow tested against the current process with human review, traceability and rollback designed in.",
      },
      {
        title: "Adoption and oversight",
        copy: "Evaluation, documentation, team enablement and independent challenge so a useful pilot can become a dependable operating capability.",
      },
    ],
    process: [
      { title: "Review", copy: "Establish the current process, constraint, baseline, available evidence and decision owner." },
      { title: "Design", copy: "Define the smallest useful change, the controls it needs and what success would look like." },
      { title: "Implement", copy: "Build or configure the bounded workflow, integrate it carefully and test it in shadow where appropriate." },
      { title: "Decide", copy: "Compare results with the baseline and agree whether to deploy, revise or stop." },
    ],
    fit: [
      "An established UK business with a real workflow, customer or knowledge constraint",
      "A named leader who can provide access, context and timely decisions",
      "A willingness to start with one valuable problem and measure the result",
    ],
    exclusions: [
      "A company looking for an ungoverned chatbot or a list of fashionable tools",
      "A promise of guaranteed revenue, savings or headcount reduction before a baseline exists",
      "Autonomous safety-critical, regulated or production decisions without qualified authority",
    ],
    faqs: [
      {
        question: "Do you only advise, or can you implement the work?",
        answer: "Both. The first phase establishes what is worth doing and what must be true. Strathmark can then implement a bounded workflow directly, coordinate specialist partners or independently oversee an existing supplier.",
      },
      {
        question: "Do we need to know which AI tool we want?",
        answer: "No. Tool choice follows the workflow, data, security and ownership requirements. Starting with a preferred platform can be useful context, but it should not decide the business case.",
      },
      {
        question: "How quickly can we start?",
        answer: "A focused review is normally the first step. Timing depends on access and scope, but the aim is to reach a useful decision quickly without pretending that a rushed implementation is lower risk.",
      },
    ],
    related: [
      { href: "/ai-strategy-consulting", label: "AI strategy consulting" },
      { href: "/workflow-automation", label: "Workflow automation" },
      { href: "/briefings/industrial-ai-systems-integrator", label: "Industrial AI briefing" },
    ],
  },
  {
    slug: "ai-strategy-consulting",
    serviceValue: "ai-strategy",
    eyebrow: "AI strategy consulting",
    title: "AI Strategy Consulting for UK Businesses | Strathmark",
    description:
      "AI strategy consulting for UK leadership teams. Prioritise use cases, assess risk and turn AI ambition into a costed, governed implementation roadmap.",
    h1: "AI Strategy Consulting Built Around Business Value",
    intro:
      "A useful AI strategy is a sequence of operating decisions, not a technology wish list. Strathmark connects commercial goals, workflow reality, data readiness and governance into a roadmap leadership can fund and teams can execute.",
    promise:
      "Leave with a ranked 90-day plan, explicit assumptions and a clear recommendation to pilot, defer or stop.",
    searchIntent: "Readiness, roadmap and investment decisions",
    challenges: [
      "AI has become a board topic, but the discussion remains vague or tool-led.",
      "Different teams are pursuing disconnected experiments with no shared priority or owner.",
      "The company cannot separate a valuable use case from an expensive demonstration.",
      "Security, intellectual property, adoption and governance questions are delaying action.",
    ],
    outcomes: [
      "A shared definition of the business outcomes AI should support",
      "A ranked portfolio of use cases scored for value, feasibility, readiness and exposure",
      "A realistic view of data, systems, capability, ownership and governance gaps",
      "A costed roadmap with one recommended first pilot and explicit decision gates",
    ],
    deliverables: [
      { title: "Leadership alignment", copy: "A concise view of the commercial priorities, constraints and non-negotiable boundaries that should guide investment." },
      { title: "Use-case portfolio", copy: "Opportunities compared on value, time-to-evidence, effort, data readiness, review burden and operational risk." },
      { title: "Readiness assessment", copy: "A practical review of systems, data, knowledge, security, ownership and team adoption requirements." },
      { title: "90-day roadmap", copy: "A sequenced plan with scope, owners, measures, dependencies, budget considerations and a first pilot recommendation." },
    ],
    process: [
      { title: "Frame", copy: "Agree the decisions the strategy must enable and the business constraints it must respect." },
      { title: "Discover", copy: "Interview leaders and workflow owners, inspect evidence and document what is happening now." },
      { title: "Prioritise", copy: "Score the options and challenge optimistic assumptions before recommending investment." },
      { title: "Mobilise", copy: "Define the first 90 days, the owner, the measures and the conditions for proceeding." },
    ],
    fit: [
      "Leadership needs a company-level AI direction before approving tools or implementation",
      "There are multiple possible use cases and limited time, budget or change capacity",
      "The business wants an independent view rather than a platform-led recommendation",
    ],
    exclusions: [
      "A generic workshop with no access to workflow owners or business evidence",
      "A multi-year forecast presented as certainty",
      "A strategy that ends without an owner, measure or next operating decision",
    ],
    faqs: [
      { question: "What is the difference between AI strategy and AI implementation?", answer: "Strategy determines where to act, why, under what constraints and how value will be measured. Implementation changes the workflow, system or operating practice. Strathmark can support both, but the decision should precede the build." },
      { question: "Can you work with our IT team or existing agency?", answer: "Yes. The work is designed to clarify ownership and give internal teams and suppliers a usable brief. Independent challenge is often most valuable when several parties are involved." },
      { question: "Will the strategy recommend specific tools?", answer: "Where the evidence supports it. Recommendations are tied to the workflow, data, integration, security and operating requirements rather than vendor popularity." },
    ],
    related: [
      { href: "/ai-consulting-services", label: "AI consulting services" },
      { href: "/workflow-automation", label: "Workflow automation" },
      { href: "/marketing-agency-audit", label: "Independent agency audit" },
    ],
  },
  {
    slug: "workflow-automation",
    serviceValue: "workflow-automation",
    eyebrow: "AI workflow automation",
    title: "AI Workflow Automation for UK Businesses | Strathmark",
    description:
      "AI workflow automation for UK businesses. Reduce repeated work, connect systems and introduce practical automation with human review and measurable controls.",
    h1: "AI Workflow Automation That Improves Real Work",
    intro:
      "Automate the friction around valuable work without automating away judgement. Strathmark maps the current process, removes unnecessary steps and uses AI or conventional automation only where it improves the result.",
    promise:
      "One workflow, one accountable owner and one measurable improvement before anything is scaled.",
    searchIntent: "Process improvement, integration and automation",
    challenges: [
      "People copy information between systems, rebuild documents and chase routine approvals.",
      "Customer, project or operational data is trapped in disconnected platforms and spreadsheets.",
      "Previous automation attempts moved a bad process faster or failed when exceptions appeared.",
      "The team needs efficiency without losing review, traceability or customer judgement.",
    ],
    outcomes: [
      "A simpler current-state and future-state workflow with clear ownership",
      "Less repeated administration, avoidable rework and manual handoff",
      "Connected data and systems with explicit exception and review paths",
      "Baseline-versus-pilot evidence on time, quality, completion and human effort",
    ],
    deliverables: [
      { title: "Workflow diagnostic", copy: "Map the trigger, steps, systems, data, owners, exceptions, delays and failure points in one priority process." },
      { title: "Automation design", copy: "Decide which steps should be removed, standardised, integrated, assisted by AI or deliberately left human." },
      { title: "Bounded implementation", copy: "Configure and connect the smallest useful workflow with permissions, logging, review and rollback." },
      { title: "Measurement and handover", copy: "Compare the new workflow with the baseline, document it and transfer ownership to the people who operate it." },
    ],
    process: [
      { title: "Observe", copy: "Follow a real case from trigger to completion and capture workarounds and exceptions." },
      { title: "Simplify", copy: "Remove waste and clarify decisions before introducing software." },
      { title: "Automate", copy: "Build the smallest controlled version and run it alongside the existing process where needed." },
      { title: "Embed", copy: "Measure, refine, document and train the owner before wider rollout." },
    ],
    fit: [
      "A repeated process is consuming skilled time or slowing customers down",
      "The business can provide a real workflow owner and representative cases",
      "Quality, time, rework or completion can be measured before and after",
    ],
    exclusions: [
      "Automating a process no one understands or owns",
      "Removing human review from high-consequence decisions without evidence and authority",
      "A large platform replacement disguised as a quick workflow project",
    ],
    faqs: [
      { question: "Do you only use AI automation?", answer: "No. The right answer may be a better form, a cleaner CRM process, an integration, deterministic rules, AI assistance or a combination. The method follows the constraint rather than forcing a technology." },
      { question: "Which systems can you work with?", answer: "The specific route depends on the existing stack, access and integration options. The diagnostic establishes what can be connected safely and whether a specialist platform partner is needed." },
      { question: "How do you measure the result?", answer: "Measures are agreed before implementation and may include cycle time, first-pass quality, rework, completion rate, exception rate, review minutes and cost per completed case." },
    ],
    related: [
      { href: "/ai-consulting-services", label: "AI consulting services" },
      { href: "/ai-strategy-consulting", label: "AI strategy consulting" },
      { href: "/digital-performance", label: "Digital performance consultancy" },
    ],
  },
  {
    slug: "website-design",
    serviceValue: "website-design",
    eyebrow: "Website design and development",
    title: "Website Design for UK Businesses | Strathmark",
    description:
      "Conversion-focused website design for UK businesses. Strategy, UX, development, SEO foundations and measurement in one commercially accountable engagement.",
    h1: "Website Design Built to Win Better Enquiries",
    intro:
      "Your website should make the company easier to understand, trust and choose. Strathmark combines positioning, conversion design, development, technical SEO and measurement so the finished site supports the commercial job it was built to do.",
    promise:
      "A fast, accessible and search-ready website with a clear message, a useful conversion path and no mystery about what happens after launch.",
    searchIntent: "Strategy, UX, development and conversion",
    challenges: [
      "The site no longer reflects what the company sells or who it is best placed to help.",
      "Visitors can browse services but struggle to understand the value or next step.",
      "Slow pages, weak mobile layouts or technical debt are damaging trust and search visibility.",
      "Marketing activity sends traffic to pages that were never designed to convert it.",
    ],
    outcomes: [
      "A keyword-informed message architecture rooted in customer intent",
      "Responsive pages that explain the offer and make the next step obvious",
      "Fast, accessible development with sound technical SEO foundations",
      "Analytics and lead measurement tied to the conversion journey",
    ],
    deliverables: [
      { title: "Positioning and page strategy", copy: "Audience, alternatives, value themes, keyword intent and the job of each page agreed before visual design." },
      { title: "Conversion-led design", copy: "Responsive layouts, hierarchy, proof, objections and calls to action designed around real buying decisions." },
      { title: "Production development", copy: "A fast, maintainable implementation with accessibility, metadata, structured data and responsive images built in." },
      { title: "Launch and measurement", copy: "Quality assurance, redirects where needed, analytics events, search checks and a clear post-launch improvement backlog." },
    ],
    process: [
      { title: "Discover", copy: "Clarify the audience, offer, current evidence, search opportunity and conversion goal." },
      { title: "Structure", copy: "Define the sitemap, page jobs, messaging, user journeys and measurement plan." },
      { title: "Design and build", copy: "Create the responsive system and production site in short, reviewable stages." },
      { title: "Launch and learn", copy: "Verify the release, measure qualified behaviour and improve from evidence." },
    ],
    fit: [
      "An established service or product business whose website is limiting trust, demand or conversion",
      "A team that can provide access to commercial context, customer evidence and timely decisions",
      "A business that values a strategic, measurable website rather than a decorative refresh",
    ],
    exclusions: [
      "An unscoped visual redesign with no agreed commercial outcome",
      "Guaranteed rankings or lead volume without demand and conversion evidence",
      "A build that leaves ownership, analytics or maintenance unclear",
    ],
    faqs: [
      { question: "Do you design and build the website?", answer: "Yes. Strategy, copy direction, UX, responsive design, development, technical SEO foundations and measurement can be delivered as one engagement, with specialist support brought in where the scope requires it." },
      { question: "Will the site be search-engine friendly?", answer: "Yes. Page intent, crawlability, metadata, structured data, performance, internal linking and responsive delivery are part of the build. Search growth still depends on competition, authority, content and ongoing work." },
      { question: "Can you improve an existing website instead?", answer: "Yes. A focused conversion or technical review may show that the current platform can be improved without a full rebuild." },
    ],
    related: [
      { href: "/seo-services", label: "SEO services" },
      { href: "/branding-services", label: "Branding services" },
      { href: "/digital-performance", label: "Digital performance consultancy" },
    ],
  },
  {
    slug: "seo-services",
    serviceValue: "seo-content",
    eyebrow: "SEO services",
    title: "SEO Services for UK Businesses | Strathmark",
    description:
      "Commercial SEO services for UK businesses. Technical SEO, content strategy, on-page optimisation and measurement focused on qualified demand, not vanity traffic.",
    h1: "SEO Services Focused on Qualified Demand",
    intro:
      "Search should connect the problems your best customers are researching with pages that help them choose. Strathmark fixes technical barriers, aligns content with intent and measures whether visibility is becoming useful commercial demand.",
    promise:
      "A prioritised SEO system that makes the site easier to discover, understand and act on without promising rankings no one controls.",
    searchIntent: "Technical SEO, content and commercial measurement",
    challenges: [
      "Traffic is flat, falling or growing without producing better enquiries.",
      "Important services have no page designed around the way buyers actually search.",
      "Technical debt, migrations or JavaScript are limiting crawling, indexing or performance.",
      "Reporting celebrates activity while commercial questions remain unanswered.",
    ],
    outcomes: [
      "A keyword and intent map linked to commercially useful pages",
      "Resolved crawl, indexation, metadata, internal-linking and performance priorities",
      "Content briefs and pages that answer the buyer’s decision questions",
      "Reporting that separates visibility, visits, qualified actions and revenue evidence",
    ],
    deliverables: [
      { title: "Technical and commercial audit", copy: "A joined review of crawlability, indexation, templates, content, authority, competitors, conversions and measurement quality." },
      { title: "Keyword and page architecture", copy: "A practical map of search intent to existing, improved or new pages, with cannibalisation and prioritisation considered." },
      { title: "On-page and content delivery", copy: "Metadata, headings, internal links, content briefs and production support for the pages most likely to matter." },
      { title: "Measurement and iteration", copy: "A clear baseline, Search Console and analytics readout, and a decision-led backlog reviewed against complete data." },
    ],
    process: [
      { title: "Measure", copy: "Establish the current technical, query, page and conversion evidence and its limitations." },
      { title: "Prioritise", copy: "Choose the fixes and pages most likely to improve qualified discovery." },
      { title: "Implement", copy: "Ship technical, on-page and content improvements in reviewable batches." },
      { title: "Learn", copy: "Allow for indexing and reporting lag, then compare complete periods and refine." },
    ],
    fit: [
      "A business with a valuable offer and buyers who research the problem online",
      "A site where technical, content or conversion weaknesses can be changed",
      "A team prepared to measure qualified demand over a sensible time horizon",
    ],
    exclusions: [
      "Guaranteed positions, traffic or revenue",
      "Bulk pages created only to manipulate search coverage",
      "Reporting that treats impressions or visits as proof of commercial value",
    ],
    faqs: [
      { question: "How long does SEO take?", answer: "Technical fixes can be shipped quickly, but crawling, indexing, ranking and demand compound at different speeds. The plan separates leading indicators from commercial outcomes and avoids judging incomplete reporting periods." },
      { question: "Do you write the content?", answer: "Strathmark can create the strategy, briefs, page structure and copy, or work with subject-matter experts and existing writers. Expert input and evidence matter more than producing volume." },
      { question: "Can you audit our current SEO agency?", answer: "Yes. The independent agency audit reviews strategy, access, work quality, measurement, commercial alignment and what should change next." },
    ],
    related: [
      { href: "/website-design", label: "Website design" },
      { href: "/google-ads-management", label: "Google Ads management" },
      { href: "/marketing-agency-audit", label: "Marketing agency audit" },
      { href: "/insights/seo-audit-checklist", label: "SEO audit insight" },
    ],
  },
  {
    slug: "paid-media",
    serviceValue: "paid-media",
    eyebrow: "Paid media management",
    title: "Paid Media Management for UK Businesses | Strathmark",
    description:
      "Paid media management and independent advertising audits for UK businesses. Clear measurement, controlled testing and commercial accountability across campaigns.",
    h1: "Paid Media Management With Commercial Accountability",
    intro:
      "Paid media should create evidence about demand and acquire customers at an acceptable cost. Strathmark audits the account, fixes the measurement and runs controlled tests around the audience, offer and landing experience.",
    promise:
      "Know what is being tested, what it costs, what happened and what decision follows without confusing platform activity with business progress.",
    searchIntent: "Paid search, social advertising and media oversight",
    challenges: [
      "Spend is increasing while lead quality, attribution or commercial return remains unclear.",
      "Campaigns are busy but the offer, audience or landing page has not been tested properly.",
      "Platform-reported conversions do not match sales or CRM reality.",
      "Leadership cannot tell whether the agency is learning, optimising or simply maintaining activity.",
    ],
    outcomes: [
      "Clean conversion definitions and a credible measurement chain",
      "A prioritised account, audience, offer and landing-page improvement plan",
      "Controlled creative and campaign tests with explicit hypotheses",
      "Reporting that connects spend to qualified actions and available revenue evidence",
    ],
    deliverables: [
      { title: "Account and measurement audit", copy: "Review structure, targeting, creative, search terms, exclusions, tracking, attribution and CRM reconciliation." },
      { title: "Test strategy", copy: "Define the audience, problem, offer, message, landing experience, budget and decision rule for each useful test." },
      { title: "Campaign management", copy: "Build, launch and optimise campaigns with controlled budgets, documented changes and transparent platform access." },
      { title: "Commercial reporting", copy: "Separate spend, delivery, platform conversions, qualified leads, sales evidence and remaining uncertainty." },
    ],
    process: [
      { title: "Audit", copy: "Establish what the account, tracking and sales evidence can and cannot currently prove." },
      { title: "Reset", copy: "Fix the highest-impact structural and measurement problems before adding spend." },
      { title: "Test", copy: "Run small, explicit experiments across audience, offer, creative and landing experience." },
      { title: "Allocate", copy: "Increase, revise or stop spend according to qualified evidence and capacity." },
    ],
    fit: [
      "A business with a credible offer, a defined audience and capacity to handle enquiries",
      "A team willing to connect platform activity with CRM or sales outcomes",
      "Leadership that values transparent access, testing and commercial trade-offs",
    ],
    exclusions: [
      "Guaranteed return or lead volume before measurement and demand are understood",
      "Scaling spend to hide a weak offer or broken conversion journey",
      "Reporting that relies only on the advertising platform’s own attribution",
    ],
    faqs: [
      { question: "Which paid media channels do you manage?", answer: "The appropriate mix depends on how the audience discovers and evaluates the offer. Work can include paid search, Meta and other relevant platforms, but channel choice follows the acquisition problem." },
      { question: "Can you audit our existing account without taking it over?", answer: "Yes. A fixed-scope review can assess setup, spend, measurement, creative and management quality, then provide an independent action plan." },
      { question: "How do you report return?", answer: "The report separates platform metrics from qualified leads and verified sales evidence. Where attribution is incomplete, the uncertainty is stated instead of converted into a confident claim." },
    ],
    related: [
      { href: "/google-ads-management", label: "Google Ads management" },
      { href: "/meta-ads-management", label: "Meta Ads management" },
      { href: "/insights/ad-account-audit", label: "Advertising account audit" },
    ],
  },
  {
    slug: "google-ads-management",
    serviceValue: "google-ads",
    eyebrow: "Google Ads management and PPC",
    title: "Google Ads Management and PPC Services UK | Strathmark",
    description:
      "Google Ads management for UK businesses. Improve PPC structure, tracking, landing pages and lead quality with transparent, commercially accountable campaigns.",
    h1: "Google Ads Management for UK Businesses",
    intro:
      "Turn paid search into a controlled source of qualified demand. Strathmark connects keywords, campaign structure, ad messaging, landing pages and sales evidence so every decision has a commercial reason behind it.",
    promise:
      "Transparent Google Ads management built around qualified leads, sensible testing and account ownership you retain.",
    searchIntent: "PPC audit, campaign management and conversion improvement",
    challenges: [
      "Spend is rising while lead quality or sales contribution remains difficult to verify.",
      "Broad targeting, weak negatives or automated recommendations are consuming budget without a clear test plan.",
      "The advert promises one thing while the landing page makes visitors search for the next step.",
      "Platform conversions do not reconcile with the CRM, sales pipeline or actual customer value.",
    ],
    outcomes: [
      "A cleaner campaign and keyword structure aligned with commercial search intent",
      "Credible conversion tracking that separates enquiries from genuinely qualified opportunities",
      "Landing pages and messages designed around what the searcher is trying to accomplish",
      "A documented test-and-allocation process showing what changed, why and what happens next",
    ],
    deliverables: [
      {
        title: "Account and tracking audit",
        copy: "Review campaign structure, search terms, match types, negatives, bidding, budgets, conversion actions, attribution and account ownership.",
      },
      {
        title: "Search and offer strategy",
        copy: "Map high-value intent to the right offer, message and landing experience instead of treating every click as equal.",
      },
      {
        title: "Campaign build and management",
        copy: "Build or restructure Search, Performance Max, remarketing or other appropriate campaigns with controlled budgets and transparent changes.",
      },
      {
        title: "Commercial reporting",
        copy: "Connect spend and platform conversions with available lead-quality, CRM and revenue evidence, while stating attribution limits clearly.",
      },
    ],
    process: [
      { title: "Audit", copy: "Establish what the account and measurement can currently prove before changing spend." },
      { title: "Prioritise", copy: "Fix structural waste, define the best opportunities and agree the test budget and decision rules." },
      { title: "Launch", copy: "Ship focused campaigns and landing-page improvements with tracking verified before optimisation." },
      { title: "Allocate", copy: "Increase, revise or stop spend according to qualified evidence rather than platform pressure." },
    ],
    fit: [
      "A UK business with a clear offer, sufficient search demand and capacity to handle enquiries",
      "A team prepared to connect Google Ads activity with lead or sales outcomes",
      "A business that wants direct account access and a clear explanation of every material decision",
    ],
    exclusions: [
      "Guaranteed leads, revenue or return before the offer and measurement have been tested",
      "Increasing budget to disguise a weak website, offer or sales follow-up process",
      "Reporting success only through Google Ads' own attribution model",
    ],
    faqs: [
      {
        question: "Can you audit our Google Ads without taking over the account?",
        answer: "Yes. A fixed-scope audit can review structure, search terms, tracking, spend, landing pages and management quality, then provide a prioritised action plan for your existing team or agency.",
      },
      {
        question: "Will we keep ownership of the account?",
        answer: "Yes. The business should retain administrative ownership of its advertising account, conversion data and related assets. Access is granted for delivery, not used to create dependency.",
      },
      {
        question: "How is performance measured?",
        answer: "Reporting separates spend, clicks and platform conversions from qualified leads and verified sales evidence. The commercial measure depends on your sales cycle and the quality of the available data.",
      },
    ],
    related: [
      { href: "/paid-media", label: "Paid media management" },
      { href: "/website-design", label: "Conversion-focused websites" },
      { href: "/insights/google-ads-wasted-spend", label: "Google Ads waste insight" },
    ],
  },
  {
    slug: "meta-ads-management",
    serviceValue: "meta-ads",
    eyebrow: "Meta Ads management",
    title: "Meta Ads Management UK | Facebook & Instagram Ads",
    description:
      "Meta Ads management for UK businesses. Connect audience strategy, creative testing, landing pages and lead quality across Facebook and Instagram campaigns.",
    h1: "Meta Ads Management for UK Businesses",
    intro:
      "Use Facebook and Instagram advertising to create and capture demand without confusing reach with growth. Strathmark connects the audience, offer, creative, landing experience and follow-up into one measurable testing system.",
    promise:
      "A clear creative and audience testing programme with controlled budgets, transparent access and reporting beyond surface engagement.",
    searchIntent: "Facebook and Instagram advertising strategy and management",
    challenges: [
      "Campaigns generate clicks or leads, but sales teams report inconsistent quality and weak intent.",
      "Creative is produced reactively without a structured view of the audience, problem, promise or test hypothesis.",
      "Meta's reported conversions do not match CRM, booking or revenue outcomes.",
      "The landing page and follow-up experience lose the attention paid social worked to create.",
    ],
    outcomes: [
      "A documented audience, offer and message strategy tied to the buying problem",
      "A repeatable creative testing system that learns rather than simply replacing tired adverts",
      "Campaign and landing journeys designed around qualified action, not cheap form fills",
      "Reporting that connects spend with lead quality and the strongest available sales evidence",
    ],
    deliverables: [
      {
        title: "Account and funnel audit",
        copy: "Review account ownership, pixel and Conversions API setup, campaign structure, audiences, creative, forms, landing pages and downstream lead handling.",
      },
      {
        title: "Audience and offer strategy",
        copy: "Define who the campaign is for, what problem earns attention, what promise is credible and where the visitor should act.",
      },
      {
        title: "Creative testing plan",
        copy: "Build a structured set of hooks, formats, messages and proof so each iteration answers a useful question.",
      },
      {
        title: "Campaign management and reporting",
        copy: "Launch, monitor and reallocate spend using platform signals, lead quality and available commercial outcomes together.",
      },
    ],
    process: [
      { title: "Diagnose", copy: "Review the existing audience, creative, offer, journey and measurement before adding new campaigns." },
      { title: "Design", copy: "Agree the test matrix, budget, landing path, conversion definitions and lead-handling responsibilities." },
      { title: "Test", copy: "Launch controlled creative and audience experiments with enough stability to produce a useful signal." },
      { title: "Learn", copy: "Scale, revise or stop from combined advertising and customer evidence rather than engagement alone." },
    ],
    fit: [
      "A business with a credible offer that can be demonstrated or explained visually",
      "A team able to provide customer insight, creative access and timely lead-quality feedback",
      "A company that values disciplined testing over a constant stream of disconnected adverts",
    ],
    exclusions: [
      "Guaranteed return or lead volume before audience, offer and follow-up are understood",
      "Treating low-cost leads as success when they do not become qualified opportunities",
      "High-volume creative production without a learning plan or brand safeguards",
    ],
    faqs: [
      {
        question: "Do you manage both Facebook and Instagram advertising?",
        answer: "Yes. Both sit within Meta's advertising platform. Placement and format decisions follow the audience, creative idea and conversion journey rather than being selected by habit.",
      },
      {
        question: "Do you create the advert creative?",
        answer: "Strathmark can develop the strategy, hooks, copy, briefs and production route. Creative can be produced directly or with appropriate photography, video and design specialists when the brief requires it.",
      },
      {
        question: "Can you audit an existing Meta Ads agency?",
        answer: "Yes. The review can assess account ownership, tracking, structure, creative testing, landing pages, reporting and whether lead quality supports the conclusions being presented.",
      },
    ],
    related: [
      { href: "/branding-services", label: "Branding services" },
      { href: "/website-design", label: "Website design" },
      { href: "/paid-media", label: "Paid media management" },
    ],
  },
  {
    slug: "branding-services",
    serviceValue: "branding",
    eyebrow: "Brand strategy and identity",
    title: "Branding Services for UK Businesses | Strathmark",
    description:
      "Branding services for UK businesses. Clarify positioning, messaging, visual identity and practical brand systems that improve marketing and commercial consistency.",
    h1: "Branding Services for UK Businesses",
    intro:
      "Make the business easier to recognise, understand and choose. Strathmark connects market positioning, verbal identity, visual direction and real customer touchpoints so the brand improves commercial decisions rather than ending as a presentation deck.",
    promise:
      "A clear position and usable brand system designed to strengthen the website, campaigns, sales material and customer experience.",
    searchIntent: "Brand strategy, messaging, identity and implementation",
    challenges: [
      "The business has outgrown its original identity, offer or market position.",
      "Marketing teams describe the company differently across the website, advertising and sales material.",
      "Visual work looks polished but does not make the value, audience or difference any clearer.",
      "A rebrand is being considered without a plan for website, campaign and operational adoption.",
    ],
    outcomes: [
      "A defensible market position rooted in customer alternatives, value and proof",
      "Clear messaging that helps buyers understand who the business is for and why it matters",
      "A coherent visual and verbal system that works across digital and commercial touchpoints",
      "An implementation plan connecting the brand with the website, campaigns and internal ownership",
    ],
    deliverables: [
      {
        title: "Positioning strategy",
        copy: "Clarify the best-fit audience, competitive alternatives, distinctive strengths, proof and market frame before working on visual expression.",
      },
      {
        title: "Messaging system",
        copy: "Create the core proposition, value themes, supporting claims, tone and service language used across marketing and sales.",
      },
      {
        title: "Visual identity direction",
        copy: "Develop or refine identity principles, typography, colour, layout and practical art direction, with specialist design support where required.",
      },
      {
        title: "Digital implementation",
        copy: "Translate the strategy into priority website pages, campaign creative, templates and a usable system the business can maintain.",
      },
    ],
    process: [
      { title: "Discover", copy: "Understand the market, customers, alternatives, existing perceptions and commercial trigger for change." },
      { title: "Position", copy: "Choose the market frame, audience, value themes and proof that the brand should make clear." },
      { title: "Express", copy: "Turn the strategy into messaging and visual direction across the most important touchpoints." },
      { title: "Embed", copy: "Apply the system, document it and establish ownership so the launch stays coherent after handover." },
    ],
    fit: [
      "An established business whose identity or messaging no longer reflects its value or direction",
      "A leadership team prepared to make clear choices about audience, position and trade-offs",
      "A company that needs the brand to improve marketing, sales and customer understanding",
    ],
    exclusions: [
      "A logo-only exercise with no positioning or implementation context",
      "Invented differentiation or superlatives unsupported by customer and commercial evidence",
      "A brand system that cannot be used consistently by the people responsible for growth",
    ],
    faqs: [
      {
        question: "Do you design logos and visual identities?",
        answer: "Yes, where that is the right scope. The work begins with position and use, then develops or coordinates the visual identity needed to express it. Specialist illustration, motion or production partners can be added openly when appropriate.",
      },
      {
        question: "Can branding be completed alongside a new website?",
        answer: "Yes. Combining the work often reduces duplicated discovery and makes the positioning, messaging, visual system and conversion journey more coherent at launch.",
      },
      {
        question: "Do we need a complete rebrand?",
        answer: "Not necessarily. A focused positioning or messaging correction may solve the commercial problem without replacing a recognisable identity. The review distinguishes what should be retained, refined or rebuilt.",
      },
    ],
    related: [
      { href: "/website-design", label: "Website design" },
      { href: "/meta-ads-management", label: "Meta Ads management" },
      { href: "/digital-performance", label: "Digital performance review" },
    ],
  },
  {
    slug: "marketing-agency-audit",
    serviceValue: "agency-audit",
    eyebrow: "Marketing agency audit",
    title: "Marketing Agency Audit and Oversight | Strathmark",
    description:
      "Independent marketing agency audits for UK businesses. Review strategy, spend, access, execution and reporting before renewing, replacing or expanding an agency.",
    h1: "An Independent Marketing Agency Audit",
    intro:
      "Find out whether the current marketing setup is solving the right problem, using the right evidence and earning the next investment. Strathmark reviews the work without a hidden incentive to take over every channel.",
    promise:
      "A direct, evidence-led answer on what is working, what is not, what cannot yet be known and what leadership should do next.",
    searchIntent: "Independent review, due diligence and agency oversight",
    challenges: [
      "Reports show activity, but leadership cannot connect it with qualified demand or revenue.",
      "The business does not control every account, asset, permission or source of truth.",
      "Strategy, website, SEO, paid media and creative work are fragmented across suppliers.",
      "A renewal, pitch or leadership decision is approaching without an independent baseline.",
    ],
    outcomes: [
      "A clear view of access, ownership, measurement and commercial risk",
      "An assessment of strategy, execution quality, spend and supplier accountability",
      "A prioritised fix, retain, renegotiate or replace recommendation",
      "A leadership briefing that can be used with the current agency or in a new selection process",
    ],
    deliverables: [
      { title: "Access and ownership review", copy: "Confirm control of accounts, data, domains, analytics, creative assets, permissions, contracts and handover risk." },
      { title: "Strategy and execution audit", copy: "Assess whether channel work supports the commercial goal and whether technical and creative execution meets the brief." },
      { title: "Measurement challenge", copy: "Reconcile reported results with available analytics, Search Console, CRM, finance or sales evidence and state the gaps." },
      { title: "Decision memo", copy: "Set out the highest-impact corrections, supplier questions, responsibilities, timing and recommended commercial route." },
    ],
    process: [
      { title: "Secure access", copy: "Build an evidence register and identify missing ownership or measurement before judging performance." },
      { title: "Interrogate", copy: "Review the strategy, work, account history, reporting and commercial context." },
      { title: "Verify", copy: "Test material claims against the strongest available source and record what remains uncertain." },
      { title: "Decide", copy: "Present a prioritised route for the current agency, a replacement process or internal ownership." },
    ],
    fit: [
      "A leadership team needs an independent answer before a renewal, pitch or budget change",
      "The business can provide direct account access and relevant reporting or sales context",
      "The objective is better accountability and decisions, not a predetermined verdict",
    ],
    exclusions: [
      "A disguised pitch built around criticising another supplier",
      "A performance conclusion without the access or reporting period required to support it",
      "A promise that changing agencies alone will fix the offer, website or commercial system",
    ],
    faqs: [
      { question: "Will you speak with our current agency?", answer: "Yes, where useful and authorised. A fair review should give the supplier an opportunity to explain the strategy, constraints, work and evidence rather than infer everything from a dashboard." },
      { question: "Do we have to replace the agency after the audit?", answer: "No. The best outcome may be a clearer brief, repaired access, better reporting, a narrower scope or stronger governance. Replacement is recommended only when the evidence supports it." },
      { question: "Can you oversee the agency after the review?", answer: "Yes. Ongoing oversight can provide decision cadence, quality challenge and leadership reporting while the agency continues delivery." },
    ],
    related: [
      { href: "/digital-performance", label: "Digital performance consultancy" },
      { href: "/seo-services", label: "SEO services" },
      { href: "/paid-media", label: "Paid media management" },
    ],
  },
] as const satisfies readonly ServicePageData[];

export type ServiceSlug = (typeof servicePages)[number]["slug"];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export const serviceSlugs = servicePages.map((service) => service.slug);

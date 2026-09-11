import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "web-design-development",
    slug: "web-design-development",
    title: "Web Design & Development",
    eyebrow: "WEB DESIGN & DEVELOPMENT",
    shortDescription: "Websites that turn visitors into customers.\nStrategy, UX/UI design, development, responsiveness, performance, and conversion-focused experiences.",
    description: "Websites Built to Move Your Business Forward.",
    additionalDescription: "We design and develop modern, high-performance websites that look credible, communicate clearly, and help businesses turn attention into action. From strategy and UX to design, development, responsiveness, SEO foundations, and launch, Oveqira brings the entire website experience together under one roof.",
    featured: true,
    order: 1,
    heroImage: "web-design",
    problem: {
      heading: "Your Website Is Often the First Business Decision a Customer Makes.",
      description: "Before someone calls, books, buys, or sends an enquiry, they often visit your website first. If the experience feels outdated, confusing, slow, or disconnected from your brand, you may lose the opportunity before the conversation even begins.",
      points: [
        { title: "Looks Outdated", description: "An outdated interface can make an otherwise capable business appear behind the market." },
        { title: "Confusing Navigation", description: "Visitors should not have to work to understand what you offer or where to go next." },
        { title: "Weak Messaging", description: "Good design cannot compensate for unclear positioning and communication." },
        { title: "Poor Mobile Experience", description: "Your website needs to work naturally across phones, tablets, laptops, and larger screens." },
        { title: "Slow Experience", description: "Performance affects usability, trust, and the overall quality of the digital experience." },
        { title: "No Clear Conversion Path", description: "A website should guide visitors toward meaningful actions instead of leaving them wondering what to do next." }
      ]
    },
    approach: {
      heading: "Strategy Before Pixels.",
      description: "We don't begin by choosing colors or moving boxes around a screen. We first understand the business, audience, positioning, goals, and desired customer journey. Then we design the experience around those decisions.",
      points: [
        { title: "Understand", description: "We learn about the business, audience, offering, competitors, and objectives." },
        { title: "Structure", description: "We organize information into a clear sitemap, content hierarchy, and user journey." },
        { title: "Design", description: "We create a visual system and interface that reflects the brand while making information easy to understand." },
        { title: "Build", description: "We turn the approved experience into a responsive, functional, performance-conscious website." }
      ]
    },
    capabilities: [
      { title: "Website Strategy", description: "Sitemap planning, content structure, positioning, user journeys, and conversion planning." },
      { title: "UX Design", description: "Information architecture, user flows, wireframes, interaction planning, and usability thinking." },
      { title: "UI Design", description: "Modern interfaces, typography systems, responsive layouts, components, and visual hierarchy." },
      { title: "Website Development", description: "Responsive front-end implementation and modern website development." },
      { title: "CMS & WordPress", description: "Flexible content management experiences for businesses that need to update their websites easily." },
      { title: "Responsive Design", description: "Experiences designed for mobile, tablet, laptop, and desktop environments." },
      { title: "SEO Foundations", description: "Technical and on-page foundations that help search engines understand and index the website." },
      { title: "Performance", description: "Thoughtful implementation focused on usability, loading experience, and maintainability." },
      { title: "Conversion Optimization", description: "Clear CTAs, structured journeys, trust elements, forms, and friction reduction." }
    ],
    types: [
      { title: "Business Websites", description: "Professional websites designed to establish credibility and generate enquiries." },
      { title: "Service Websites", description: "Focused experiences for businesses offering specialized services." },
      { title: "Landing Pages", description: "Conversion-focused pages for campaigns, products, launches, and specific offers." },
      { title: "Portfolio Websites", description: "Visual experiences for creators, professionals, studios, and brands." },
      { title: "E-commerce Websites", description: "Structured online stores designed around product discovery, trust, and purchasing." },
      { title: "Corporate Websites", description: "Scalable digital experiences for established organizations and growing companies." },
      { title: "Personal & Professional Websites", description: "Purpose-built websites for individuals, consultants, professionals, and creators." }
    ],
    benefits: [
      { title: "Build Trust Faster", description: "A polished digital presence helps visitors understand that your business takes its work seriously." },
      { title: "Explain What You Do", description: "Clear structure and messaging make complex offerings easier to understand." },
      { title: "Make Decisions Easier", description: "Good UX reduces friction between discovering a business and taking action." },
      { title: "Support Marketing", description: "Your website becomes the destination for campaigns, social traffic, search traffic, referrals, and other acquisition channels." },
      { title: "Create a Stronger Brand", description: "The website becomes an extension of your visual identity and positioning." },
      { title: "Give the Business Room to Grow", description: "A thoughtful foundation makes future pages, campaigns, features, and integrations easier to build." }
    ],
    deliverables: [
      "Website strategy",
      "Sitemap",
      "Information architecture",
      "UX planning",
      "Wireframes",
      "UI design",
      "Responsive layouts",
      "Design system/components",
      "Website development",
      "CMS integration where required",
      "Contact/enquiry forms",
      "Basic technical SEO setup",
      "Performance-conscious implementation",
      "Mobile optimization",
      "Browser/device testing",
      "Launch support"
    ],
    deliverablesDisclaimer: "The exact scope is defined according to your business requirements, website complexity, and project goals.",
    process: [
      { number: "01", title: "Discover", description: "Understand your business, audience, goals, offering, and current digital presence." },
      { number: "02", title: "Strategize", description: "Define the sitemap, content structure, priorities, and conversion journey." },
      { number: "03", title: "Design", description: "Develop the UX, visual direction, interface, responsive layouts, and key components." },
      { number: "04", title: "Develop", description: "Translate the approved design into a responsive, functional website." },
      { number: "05", title: "Test", description: "Check responsiveness, usability, links, forms, browser compatibility, performance, and essential SEO elements." },
      { number: "06", title: "Launch", description: "Prepare the website for production and provide launch support." }
    ],
    technology: {
      heading: "The Technology Follows the Requirement.",
      description: "We choose the technology and implementation approach based on what the project actually needs, rather than forcing every business into the same technical stack.",
      list: [
        "WordPress",
        "Modern front-end development",
        "CMS platforms",
        "APIs & integrations",
        "Analytics",
        "SEO tooling",
        "Automation",
        "Third-party services"
      ]
    },
    relatedServices: ["ui-ux", "seo", "digital-marketing", "ai-automation", "custom-products"],
    whyOveqira: [
      { title: "Strategy Before Execution", description: "We start with the business problem, not just the visual brief." },
      { title: "Built Around Your Brand", description: "The website should feel like your business, not a recycled agency template." },
      { title: "Design That Has a Purpose", description: "Every major interface decision should improve clarity, usability, or perception." },
      { title: "Performance Matters", description: "A beautiful website still needs to function well for real users." },
      { title: "Built for Long-Term Growth", description: "The website should provide a foundation for future marketing, content, and digital expansion." }
    ],
    faq: [
      { id: "faq-1", question: "How long does a website project take?", answer: "Project timelines depend on scope, number of pages, content readiness, integrations, revisions, and technical requirements. A timeline is established after the project scope is defined.", featured: false, order: 1 },
      { id: "faq-2", question: "Do you design the website before development?", answer: "Yes. The experience can be planned and designed before development so structure, interface, and functionality are aligned before implementation.", featured: false, order: 2 },
      { id: "faq-3", question: "Can you redesign an existing website?", answer: "Yes. Existing websites can be redesigned, restructured, rebuilt, or improved depending on their current technology and requirements.", featured: false, order: 3 },
      { id: "faq-4", question: "Can you build WordPress websites?", answer: "Yes. WordPress can be used when a flexible content management system is appropriate for the project.", featured: false, order: 4 },
      { id: "faq-5", question: "Will the website work on mobile?", answer: "Responsive behavior is treated as a core part of the design and development process.", featured: false, order: 5 },
      { id: "faq-6", question: "Can you help with SEO?", answer: "Yes. Oveqira can establish essential SEO foundations as part of website projects. More extensive ongoing SEO can be handled as a separate service.", featured: false, order: 6 },
      { id: "faq-7", question: "Can you integrate forms, analytics, APIs, or other tools?", answer: "Yes, where technically appropriate. Integration requirements are defined during discovery and scope planning.", featured: false, order: 7 },
      { id: "faq-8", question: "Can I update the website myself?", answer: "Where a CMS is used, the website can be structured so appropriate content can be updated without requiring development work.", featured: false, order: 8 }
    ],
    cta: {
      heading: "Let's Build a Website Your Business Can Grow With.",
      description: "Tell us what you're building, where your current website stands, and what you want it to achieve. We'll help you identify the right direction and next steps.",
      primaryLabel: "Start a Project",
      secondaryLabel: "Talk to Oveqira"
    },
    seo: {
      title: "Web Design & Development Services | Oveqira",
      description: "Oveqira designs and develops modern, responsive websites built around your brand, business goals, user experience, performance, and long-term growth."
    }
  },
  {
    id: "ui-ux",
    slug: "ui-ux",
    title: "UI/UX Design",
    eyebrow: "UI/UX DESIGN",
    shortDescription: "Intuitive, accessible, and premium interfaces that resonate with users.",
    description: "Design Digital Experiences People Understand.",
    additionalDescription: "We design intuitive, purposeful digital experiences that make products easier to use, easier to navigate, and easier to trust. From user flows and information architecture to wireframes, interfaces, design systems, and responsive experiences, we turn complexity into clarity.",
    featured: true,
    order: 2,
    heroImage: "ui-ux",
    problem: {
      heading: "When Digital Products Feel Complicated, Users Feel It.",
      description: "People don't experience a digital product as a collection of screens. They experience every decision, interaction, delay, label, form, error, and piece of information as part of one journey. A strong interface can look impressive. A strong experience makes the next step obvious.",
      points: [
        { title: "Too Much Complexity", description: "Users struggle when information and functionality are presented without a clear hierarchy." },
        { title: "Unclear Navigation", description: "People should understand where they are, where they can go, and what happens next." },
        { title: "Inconsistent Interfaces", description: "Inconsistent components create cognitive friction and weaken trust." },
        { title: "Too Many Steps", description: "Unnecessary actions can turn simple tasks into frustrating experiences." },
        { title: "Weak Information Hierarchy", description: "Important information should be easy to discover and understand." },
        { title: "Designing Without the User", description: "Interfaces built around internal assumptions can miss how people actually behave." }
      ]
    },
    uxUiExplainer: {
      eyebrow: "UX + UI",
      heading: "Experience First. Interface Second.",
      ux: {
        title: "UX Design",
        description: "UX focuses on how the product works and how people move through it.",
        items: [
          "user journeys",
          "information architecture",
          "user flows",
          "wireframes",
          "interaction logic",
          "usability",
          "task completion",
          "friction reduction"
        ]
      },
      ui: {
        title: "UI Design",
        description: "UI focuses on how the experience is visually expressed.",
        items: [
          "typography",
          "color",
          "spacing",
          "components",
          "visual hierarchy",
          "interaction states",
          "responsive layouts",
          "visual consistency"
        ]
      },
      closing: "The strongest digital products need both. UX creates the logic. UI gives that logic a clear and usable form."
    },
    approach: {
      heading: "We Design the Experience Before Decorating the Interface.",
      description: "Our process begins with understanding what users need to accomplish and what the business needs the product to achieve. We then build the experience around those priorities.",
      points: [
        { title: "Understand", description: "Identify users, goals, business objectives, constraints, and context." },
        { title: "Map", description: "Create user journeys, information architecture, and interaction flows." },
        { title: "Simplify", description: "Remove unnecessary complexity and create clearer paths through the product." },
        { title: "Design", description: "Build the interface, components, responsive layouts, and interaction states." },
        { title: "Validate", description: "Review the experience for clarity, usability, consistency, and implementation readiness." }
      ]
    },
    capabilities: [
      { title: "UX Strategy", description: "Define user goals, business objectives, product structure, and experience priorities." },
      { title: "User Flows", description: "Map the steps users take to complete important actions." },
      { title: "Information Architecture", description: "Organize content and functionality so users can find and understand what matters." },
      { title: "Wireframing", description: "Create low-fidelity structures before investing heavily in visual design." },
      { title: "UI Design", description: "Create polished interfaces with strong hierarchy, typography, spacing, and interaction design." },
      { title: "Responsive Design", description: "Design experiences that adapt naturally across screen sizes." },
      { title: "Design Systems", description: "Create reusable components, patterns, and rules for consistency and scalability." },
      { title: "Interaction Design", description: "Define how interfaces behave through states, transitions, feedback, and actions." },
      { title: "Usability Review", description: "Identify confusing areas, friction points, inconsistencies, and opportunities for improvement." },
      { title: "Design Handoff", description: "Prepare organized design specifications and components for development." }
    ],
    types: [
      { title: "Websites", description: "UX and UI systems for marketing, corporate, service, and content-driven websites." },
      { title: "SaaS Products", description: "Interfaces designed around workflows, dashboards, data, and recurring user tasks." },
      { title: "Mobile Applications", description: "Mobile-first experiences focused on clarity, navigation, and interaction." },
      { title: "Web Applications", description: "Complex browser-based products structured around real workflows." },
      { title: "Dashboards", description: "Information-dense interfaces designed to make data easier to understand and act on." },
      { title: "E-commerce Experiences", description: "Product discovery, filtering, product pages, checkout flows, and purchasing journeys." },
      { title: "Internal Tools", description: "Interfaces that make operational systems easier for teams to use." },
      { title: "MVP Products", description: "Focused UX/UI systems for validating and launching new digital products." }
    ],
    designSystems: {
      eyebrow: "SYSTEMS, NOT JUST SCREENS",
      heading: "A Good Interface Can Scale Without Losing Its Identity.",
      description: "For products that need to grow, we can create reusable design foundations that help teams maintain consistency as new features and screens are introduced.",
      include: [
        "typography tokens", "spacing rules", "color system", "buttons", "forms", "cards", "navigation", "tables", "modals", "alerts", "states", "responsive behavior", "component variants"
      ],
      supporting: "The goal is not to create more components. The goal is to create the right components."
    },
    benefits: [
      { title: "Reduce Friction", description: "Help users complete important tasks with fewer unnecessary obstacles." },
      { title: "Improve Clarity", description: "Make complex information easier to understand." },
      { title: "Strengthen Trust", description: "Consistency and thoughtful interaction create a more credible experience." },
      { title: "Increase Usability", description: "Make important actions easier to discover and complete." },
      { title: "Support Development", description: "Well-structured designs give developers clearer implementation direction." },
      { title: "Create Scalability", description: "Design systems and reusable patterns make future product growth easier." },
      { title: "Improve Product Decisions", description: "UX thinking can expose problems before they become expensive development problems." }
    ],
    deliverables: [
      "UX strategy",
      "user personas where appropriate",
      "user journeys",
      "information architecture",
      "user flows",
      "wireframes",
      "high-fidelity UI designs",
      "responsive layouts",
      "interaction states",
      "reusable components",
      "design system",
      "prototype",
      "usability review",
      "developer handoff documentation"
    ],
    deliverablesDisclaimer: "The exact deliverables depend on the project's scope, maturity, complexity, and objectives.",
    process: [
      { number: "01", title: "Discover", description: "Understand the product, users, business goals, and constraints." },
      { number: "02", title: "Define", description: "Identify priorities, requirements, user journeys, and experience problems." },
      { number: "03", title: "Structure", description: "Create information architecture, flows, wireframes, and content hierarchy." },
      { number: "04", title: "Design", description: "Develop the visual language, interface, components, and responsive layouts." },
      { number: "05", title: "Validate", description: "Review usability, consistency, interactions, and key user journeys." },
      { number: "06", title: "Handoff", description: "Prepare organized design assets and specifications for implementation." }
    ],
    designTransformation: {
      eyebrow: "DESIGN TRANSFORMATION",
      heading: "From Complexity to Clarity.",
      before: [
        "cluttered hierarchy",
        "unclear CTA",
        "inconsistent components",
        "excessive steps",
        "confusing navigation"
      ],
      after: [
        "clear hierarchy",
        "focused actions",
        "consistent components",
        "simplified journey",
        "intuitive navigation"
      ]
    },
    relatedServices: ["web-design-development", "custom-products", "seo"],
    whyOveqira: [
      { title: "Strategy Before Execution", description: "We understand the problem before designing the interface." },
      { title: "Design That Has a Purpose", description: "Every component should serve a user or business objective." },
      { title: "Built Around Your Brand", description: "The product should have its own visual language and identity." },
      { title: "Performance Matters", description: "The final experience needs to work beyond the design canvas." },
      { title: "One Creative + Digital Team", description: "Design decisions can be considered alongside technology and implementation." },
      { title: "Built for Long-Term Growth", description: "Reusable systems help products evolve without starting from zero." }
    ],
    faq: [
      { id: "faq-1", question: "What is the difference between UI and UX?", answer: "UX focuses on how an experience works and how users move through it. UI focuses on the visual interface and how that experience is presented and interacted with.", featured: false, order: 1 },
      { id: "faq-2", question: "Do you design both UX and UI?", answer: "Yes. Oveqira can handle UX strategy, structure, flows, wireframes, UI design, responsive interfaces, and design systems depending on project scope.", featured: false, order: 2 },
      { id: "faq-3", question: "Can you redesign an existing application?", answer: "Yes. Existing products can be audited, restructured, redesigned, or rebuilt depending on the current product and technical situation.", featured: false, order: 3 },
      { id: "faq-4", question: "Can you design mobile applications?", answer: "Yes. Mobile experiences can be designed around platform conventions, user goals, navigation, and responsive interaction patterns.", featured: false, order: 4 },
      { id: "faq-5", question: "Can you design SaaS dashboards?", answer: "Yes. Dashboard and SaaS experiences can be structured around workflows, information hierarchy, data visibility, and recurring tasks.", featured: false, order: 5 },
      { id: "faq-6", question: "Do you create design systems?", answer: "Yes, when a product's size or future growth makes a reusable component system valuable.", featured: false, order: 6 },
      { id: "faq-7", question: "Do you provide prototypes?", answer: "Prototypes can be included when they are useful for validating flows, demonstrating interactions, or supporting development.", featured: false, order: 7 },
      { id: "faq-8", question: "Can you work with an existing development team?", answer: "Yes. Oveqira can provide organized design files, components, specifications, and handoff material for external development teams where required.", featured: false, order: 8 },
      { id: "faq-9", question: "Can you improve the UX of my existing website?", answer: "Yes. A UX review can identify navigation, hierarchy, interaction, content, and conversion problems before a redesign or development project.", featured: false, order: 9 }
    ],
    cta: {
      heading: "Let's Turn Complexity Into Clarity.",
      description: "Whether you're launching a new product, redesigning an existing experience, or trying to understand why users are struggling, Oveqira can help shape the experience from the ground up.",
      primaryLabel: "Start a Design Project",
      secondaryLabel: "Talk to Oveqira"
    },
    seo: {
      title: "UI/UX Design Services | Oveqira",
      description: "Oveqira designs intuitive digital experiences through UX strategy, user flows, wireframes, UI design, design systems, and responsive interfaces."
    }
  },
  {
    id: "seo",
    slug: "seo",
    title: "SEO",
    eyebrow: "SEARCH ENGINE OPTIMIZATION",
    shortDescription: "Data-driven organic search strategy to capture high-intent traffic.",
    description: "Get Found by the People Looking for You.",
    additionalDescription: "We build SEO strategies that improve search visibility, strengthen website foundations, and connect your business with relevant search intent. From technical SEO and on-page optimization to content structure, keyword research, local search, and ongoing improvements, we approach SEO as a long-term growth system rather than a quick ranking trick.",
    featured: true,
    order: 3,
    heroImage: "seo",
    problem: {
      heading: "A Great Business Is Harder to Grow When Nobody Can Find It.",
      description: "Search is often one of the first places people go when they have a problem, need a service, or are comparing options. If your website is difficult for search engines to understand or difficult for users to navigate, valuable opportunities can disappear before someone reaches you. SEO connects technical foundations, useful content, search intent, website experience, and authority into one system.",
      points: [
        { title: "You're Not Being Found", description: "Your website may exist, but potential customers may not discover it for the searches that matter." },
        { title: "The Wrong Traffic", description: "Visibility alone is not enough if the visitors have little relevance to your business." },
        { title: "Weak Website Structure", description: "Poor architecture can make important pages harder for users and search engines to understand." },
        { title: "Technical Problems", description: "Indexing, performance, mobile experience, metadata, broken links, and other technical issues can limit organic visibility." },
        { title: "Thin or Unclear Content", description: "Pages need to clearly address what users are searching for and why your business is relevant." },
        { title: "SEO Without a Strategy", description: "Random keyword additions and isolated optimizations rarely create a coherent growth system." }
      ]
    },
    approach: {
      heading: "SEO Starts With Understanding Search Intent.",
      description: "We don't optimize websites simply to satisfy search engines. We optimize the relationship between what people search for, what they need, and what your business can provide.",
      points: [
        { title: "Understand", description: "Research the market, audience, search behavior, competitors, and business objectives." },
        { title: "Structure", description: "Build clear website architecture, topic organization, internal linking, and page hierarchy." },
        { title: "Optimize", description: "Improve technical foundations, metadata, content structure, relevance, and on-page elements." },
        { title: "Improve", description: "Measure meaningful signals, identify opportunities, and continuously refine the system." }
      ]
    },
    capabilities: [
      { title: "SEO Audit", description: "Review technical, structural, on-page, content, and search visibility issues." },
      { title: "Keyword Research", description: "Identify relevant search themes, queries, opportunities, and intent." },
      { title: "Search Intent Analysis", description: "Understand what users are actually trying to accomplish with their searches." },
      { title: "Technical SEO", description: "Address important technical foundations affecting crawling, indexing, performance, and discoverability." },
      { title: "On-Page SEO", description: "Optimize titles, descriptions, headings, content structure, internal links, and relevant page elements." },
      { title: "Content Strategy", description: "Build content around meaningful topics and questions relevant to the audience." },
      { title: "Internal Linking", description: "Create logical relationships between pages so users and search engines can navigate the site more effectively." },
      { title: "Local SEO", description: "Improve local search visibility where geographic intent is important to the business." },
      { title: "SEO-Friendly Website Structure", description: "Create page hierarchies and information architecture that support both users and search engines." },
      { title: "Performance & Mobile SEO", description: "Consider page experience, responsiveness, loading behavior, and mobile usability." },
      { title: "SEO Monitoring", description: "Track meaningful search visibility and identify areas for ongoing improvement." }
    ],
    technicalSEO: {
      eyebrow: "THE FOUNDATION",
      heading: "Before You Chase Rankings, Fix the Ground Beneath Them.",
      description: "Technical SEO creates the foundation that allows search engines to discover, understand, and process your website effectively.",
      list: [
        "crawlability", "indexability", "XML sitemaps", "robots directives", "canonicalization", "URL structure", "redirects", "broken links", "structured data where appropriate", "metadata", "heading hierarchy", "mobile responsiveness", "page performance", "image optimization", "internal linking", "duplicate content considerations", "HTTPS/security fundamentals"
      ]
    },
    contentStrategy: {
      eyebrow: "CONTENT THAT DESERVES TO BE FOUND",
      heading: "Don't Write for Keywords. Write for the Question Behind Them.",
      description: "Modern SEO is not simply about repeating phrases. Useful content should address a real search need clearly, accurately, and efficiently.",
      stages: [
        { title: "Discover", description: "Identify relevant topics, queries, audiences, and opportunities." },
        { title: "Understand", description: "Analyze intent and determine what the searcher actually needs." },
        { title: "Create", description: "Develop useful, well-structured content around the topic." },
        { title: "Connect", description: "Link related pages into a broader content architecture." }
      ]
    },
    localSEO: {
      eyebrow: "LOCAL DISCOVERY",
      heading: "Be Visible Where Local Customers Are Looking.",
      description: "For location-based businesses, local search can be a critical discovery channel. We can help strengthen the connection between your business, its location, services, website, and local search presence.",
      list: [
        "Google Business Profile optimization", "local landing pages", "business information consistency", "location-focused content", "local keyword research", "review strategy guidance", "local structured data where appropriate"
      ]
    },
    websiteExperience: {
      eyebrow: "SEO DOESN'T LIVE IN ISOLATION",
      heading: "The Best SEO Strategy Leads to a Better Website Too.",
      description: "Traffic is only one part of the journey. The real goal is creating a website that can turn relevant discovery into meaningful business outcomes.",
      intersections: [
        { title: "UX", description: "Visitors need to understand and navigate pages easily." },
        { title: "Content", description: "Search visibility depends on useful, relevant information." },
        { title: "Performance", description: "A slow or difficult experience can hurt usability." },
        { title: "Technical Architecture", description: "Search engines need to discover and understand site structure." },
        { title: "Conversion", description: "Traffic has limited business value if visitors have no clear next step." }
      ],
      closing: "Visibility → Visit → Understanding → Trust → Action"
    },
    deliverables: [
      "SEO audit",
      "keyword research",
      "search intent analysis",
      "competitor research",
      "technical SEO recommendations",
      "on-page optimization",
      "metadata optimization",
      "heading/content structure",
      "internal linking recommendations",
      "content strategy",
      "content briefs",
      "local SEO work where relevant",
      "structured data recommendations",
      "sitemap/indexing review",
      "performance recommendations",
      "SEO reporting",
      "ongoing optimization recommendations"
    ],
    deliverablesDisclaimer: "The exact scope is defined according to the website, industry, competition, current visibility, goals, and project requirements.",
    process: [
      { number: "01", title: "Audit", description: "Understand the current website, technical condition, visibility, content, and search landscape." },
      { number: "02", title: "Research", description: "Identify relevant search themes, audiences, competitors, and opportunities." },
      { number: "03", title: "Prioritize", description: "Determine which improvements are most valuable and realistic for the business." },
      { number: "04", title: "Optimize", description: "Improve technical foundations, on-page elements, structure, content, and internal relationships." },
      { number: "05", title: "Measure", description: "Monitor meaningful indicators and identify changes or emerging opportunities." },
      { number: "06", title: "Improve", description: "Continue refining the strategy based on evidence, search behavior, business priorities, and results." }
    ],
    maturity: {
      eyebrow: "THINK LONG TERM",
      heading: "SEO Is a Compounding System, Not an Overnight Switch.",
      stages: [
        { title: "Foundation", description: "Technical health, website structure, indexing, metadata, and core on-page elements." },
        { title: "Relevance", description: "Useful content, search intent, topical coverage, internal linking, and stronger page relevance." },
        { title: "Growth", description: "Ongoing optimization, content expansion, authority development, new opportunities, and continuous improvement." }
      ]
    },
    measurement: {
      eyebrow: "WHAT WE LOOK AT",
      heading: "Measure More Than Rankings.",
      description: "SEO evaluation includes multiple signals of health and growth:",
      metrics: [
        "organic impressions", "relevant organic traffic", "search visibility", "indexed pages", "keyword/query trends", "landing-page performance", "engagement signals", "conversions/enquiries", "technical health", "content performance"
      ]
    },
    relatedServices: ["web-design-development", "ui-ux", "digital-marketing", "social-media"],
    whyOveqira: [
      { title: "Strategy Before Execution", description: "We begin with business goals and search intent before choosing tactics." },
      { title: "Design That Has a Purpose", description: "Search visitors still need a clear, credible, usable experience." },
      { title: "Performance Matters", description: "Technical quality and website experience matter beyond search visibility." },
      { title: "One Creative + Digital Team", description: "SEO can work alongside web development, content, design, social media, advertising, and automation." },
      { title: "Built for Long-Term Growth", description: "SEO is approached as an ongoing system rather than a one-time checklist." }
    ],
    faq: [
      { id: "faq-1", question: "How long does SEO take to work?", answer: "SEO timelines vary significantly depending on the website, industry, competition, technical condition, content quality, authority, and search landscape.", featured: false, order: 1 },
      { id: "faq-2", question: "Can you guarantee first-page rankings?", answer: "No. Search rankings depend on many factors outside any agency's direct control. Oveqira focuses on building a technically sound, relevant, useful, and strategically structured SEO foundation.", featured: false, order: 2 },
      { id: "faq-3", question: "Do you provide keyword research?", answer: "Yes. Keyword and search-intent research can be part of an SEO project.", featured: false, order: 3 },
      { id: "faq-4", question: "Can you optimize an existing website?", answer: "Yes. Existing websites can be audited and optimized without necessarily requiring a complete redesign.", featured: false, order: 4 },
      { id: "faq-5", question: "Do you offer technical SEO?", answer: "Yes. Technical SEO can include areas such as crawlability, indexing, site structure, metadata, performance, redirects, and other relevant technical foundations.", featured: false, order: 5 },
      { id: "faq-6", question: "Do you write SEO content?", answer: "Content strategy, briefs, optimization, and content creation can be scoped depending on the project.", featured: false, order: 6 },
      { id: "faq-7", question: "Do you provide local SEO?", answer: "Yes, where local search is relevant to the business.", featured: false, order: 7 },
      { id: "faq-8", question: "Is SEO a one-time service?", answer: "Some projects focus on establishing the foundation, while others require ongoing monitoring, content, optimization, and improvement.", featured: false, order: 8 },
      { id: "faq-9", question: "Can SEO work with Google Ads?", answer: "Yes. Organic search and paid search can complement each other, although they serve different purposes and should not be treated as the same channel.", featured: false, order: 9 },
      { id: "faq-10", question: "Can you do SEO for a new website?", answer: "Yes. Starting SEO alongside website planning and development can help establish stronger foundations from the beginning.", featured: false, order: 10 }
    ],
    cta: {
      heading: "Let's Build Your Search Visibility With a Strategy Behind It.",
      description: "Tell us about your website, your market, and what people should find you for. We'll help identify the opportunities worth pursuing and the foundations needed to support them.",
      primaryLabel: "Start an SEO Project",
      secondaryLabel: "Talk to Oveqira"
    },
    seo: {
      title: "SEO Services | Search Engine Optimization | Oveqira",
      description: "Oveqira provides strategic SEO focused on technical foundations, search intent, content structure, website experience, and sustainable organic visibility."
    }
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    eyebrow: 'DIGITAL MARKETING',
    shortDescription: 'Comprehensive digital strategies to accelerate pipeline and brand presence.',
    description: 'Turn Digital Attention Into Business Growth.',
    additionalDescription: 'We build connected digital marketing strategies that help businesses reach the right audiences, communicate their value, generate demand, and turn digital attention into meaningful action. From strategy and content to SEO, social media, paid campaigns, landing pages, analytics, and optimization, Oveqira brings the moving pieces together around your business goals.',
    featured: true,
    order: 4,
    heroImage: 'digital-marketing',
    problem: {
      eyebrow: "DIGITAL MARKETING GETS MESSY FAST",
      heading: "More Channels Don't Automatically Mean More Growth.",
      description: "A business can have a website, Instagram account, Google profile, ads, content, and email campaigns and still struggle to generate meaningful results if those pieces are working independently. The challenge isn't simply being present everywhere. It's knowing what each channel should do, how the channels connect, and where attention should ultimately lead.",
      points: [
        { title: "No Clear Strategy", description: "Posting and advertising without a defined objective can turn marketing into disconnected activity." },
        { title: "Wrong Audience", description: "Reach is useful only when the people seeing the message are relevant to the business." },
        { title: "Disconnected Channels", description: "Social media, advertising, SEO, content, and the website should support a coherent customer journey." },
        { title: "Weak Creative", description: "Good targeting can still fail when the message or creative does not communicate value clearly." },
        { title: "Poor Conversion Journey", description: "Marketing cannot compensate for a confusing landing page or unclear next step." },
        { title: "No Learning Loop", description: "Campaigns should generate insights that inform the next decision." }
      ]
    },
    approach: {
      eyebrow: "OUR APPROACH",
      heading: "Strategy Before More Activity.",
      description: "We begin with the business objective and work backward to determine the right audience, message, channel, creative, destination, and measurement approach.",
      points: [
        { title: "Understand", description: "Learn the business, offer, audience, market, competitors, and goals." },
        { title: "Position", description: "Clarify the message, value proposition, audience, and reason to choose the business." },
        { title: "Activate", description: "Choose the appropriate channels, campaigns, content, and creative." },
        { title: "Convert", description: "Create clear journeys from attention to enquiry, purchase, booking, or another meaningful action." },
        { title: "Optimize", description: "Review performance and insights, then improve the system continuously." }
      ]
    },
    capabilities: [
      { title: "Digital Strategy", description: "Define goals, audiences, positioning, channels, priorities, and campaign direction." },
      { title: "Social Media Marketing", description: "Plan and execute social content strategies aligned with brand and business objectives." },
      { title: "Social Media Management", description: "Manage publishing, content organization, audience interaction, and ongoing channel activity where included in scope." },
      { title: "Google Ads", description: "Create and optimize paid search campaigns around relevant intent and business objectives." },
      { title: "Meta Ads", description: "Develop paid campaigns across Meta platforms with audience, creative, placement, and conversion considerations." },
      { title: "SEO", description: "Build organic search visibility through technical foundations, content, structure, and search-intent strategy." },
      { title: "Content Marketing", description: "Develop useful content designed to educate, attract, engage, and support the customer journey." },
      { title: "Landing Pages", description: "Create focused destinations for campaigns, offers, products, and conversion objectives." },
      { title: "Creative Strategy", description: "Develop campaign concepts, messaging directions, visual approaches, and content angles." },
      { title: "Analytics & Measurement", description: "Establish meaningful measurement and use available data to guide optimization." }
    ],
    channelEcosystem: {
      eyebrow: "CHANNELS SHOULD WORK TOGETHER",
      heading: "Every Channel Has a Job.",
      closing: "The right mix depends on the business, audience, market, offer, budget, and objectives.",
      channels: [
        { title: "Search", description: "Capture existing demand from people actively looking for solutions." },
        { title: "Social", description: "Build attention, familiarity, community, and ongoing brand presence." },
        { title: "Paid Media", description: "Accelerate targeted reach and test offers, audiences, and creative." },
        { title: "Content", description: "Educate audiences and create useful reasons to engage with the brand." },
        { title: "Website", description: "Turn interest into understanding, trust, and action." },
        { title: "Analytics", description: "Reveal what is happening and where improvements may be needed." }
      ]
    },
    audiencePositioning: {
      eyebrow: "RIGHT MESSAGE. RIGHT PEOPLE.",
      heading: "Marketing Starts Before the Campaign.",
      description: "Before launching campaigns, we clarify who the business is trying to reach, what problem it solves, why the audience should care, and what action should happen next.",
      cards: [
        { title: "Audience", description: "Who are we trying to reach?" },
        { title: "Problem", description: "What does this audience need or struggle with?" },
        { title: "Value", description: "Why should they choose this business?" },
        { title: "Action", description: "What should they do next?" }
      ]
    },
    contentCreative: {
      eyebrow: "CREATIVE THAT EARNS ATTENTION",
      heading: "A Campaign Needs More Than Distribution. It Needs a Reason to Stop.",
      description: "Creative is where strategy becomes something people can actually see, read, watch, or interact with.",
      closing: "Creative formats are selected according to the channel, audience, message, and campaign objective.",
      areas: [
        "campaign concepts",
        "social media content",
        "short-form video",
        "static creatives",
        "carousels",
        "educational content",
        "promotional content",
        "product/service visuals",
        "ad creatives",
        "landing-page messaging",
        "photography",
        "videography"
      ]
    },
    paidOrganic: {
      eyebrow: "PAID & ORGANIC",
      heading: "Build Demand. Capture Demand. Learn From Both.",
      closing: "Paid and organic marketing are different systems. Together, they can create a more informed digital growth strategy.",
      sections: [
        { title: "Organic", description: "Build discoverability, trust, authority, and long-term audience relationships." },
        { title: "Paid", description: "Reach targeted audiences, test messages, generate traffic, and support specific campaigns." },
        { title: "Combined", description: "Use insights from one channel to inform the other where useful." }
      ]
    },
    conversion: {
      eyebrow: "ATTENTION ISN'T THE FINISH LINE",
      heading: "The Click Has to Lead Somewhere Worthwhile.",
      description: "A campaign can attract attention without creating business value. That's why we consider the experience after the click.",
      path: ["Ad / Post / Search", "Landing Page", "Understanding", "Trust", "CTA", "Enquiry / Purchase / Booking"],
      elements: [
        "landing-page structure",
        "strong CTA",
        "clear offer",
        "trust signals",
        "enquiry forms",
        "booking journeys",
        "product pages",
        "contact paths",
        "mobile experience"
      ]
    },
    deliverables: [
      "digital marketing strategy",
      "audience research",
      "channel strategy",
      "campaign planning",
      "content strategy",
      "social media planning",
      "paid campaign setup",
      "ad creative direction",
      "landing-page recommendations",
      "SEO strategy",
      "content recommendations",
      "analytics setup/review",
      "campaign reporting",
      "optimization recommendations"
    ],
    deliverablesDisclaimer: "The exact scope depends on the selected channels, campaign objectives, budget, frequency, and engagement model.",
    process: [
      { number: "01", title: "Discover", description: "Understand the business, audience, market, offer, and objectives." },
      { number: "02", title: "Strategize", description: "Define positioning, channels, campaign priorities, content direction, and measurement." },
      { number: "03", title: "Create", description: "Develop the content, creative, campaigns, landing experiences, and supporting assets." },
      { number: "04", title: "Launch", description: "Activate the selected channels and campaigns." },
      { number: "05", title: "Measure", description: "Review meaningful performance signals and audience behavior." },
      { number: "06", title: "Optimize", description: "Improve targeting, messaging, creative, landing experiences, and channel strategy based on evidence." }
    ],
    measurement: {
      eyebrow: "MEASURE WHAT MATTERS",
      heading: "Numbers Should Help You Make Better Decisions.",
      description: "The right KPIs depend on the business model and campaign objective. Measurement may include:",
      metrics: [
        "reach", "impressions", "clicks", "engagement", "website traffic", "enquiries", "leads", "purchases", "conversion actions", "cost metrics", "search visibility", "content performance", "campaign-level performance"
      ]
    },
    relatedServices: ["seo", "google-meta-ads", "social-media", "web-design-development", "ui-ux", "photography-videography", "ai-automation"],
    whyOveqira: [
      { title: "Strategy Before Execution", description: "We start with the business objective rather than immediately choosing a platform." },
      { title: "Built Around Your Brand", description: "Campaigns and content should feel connected to the identity of the business." },
      { title: "Design That Has a Purpose", description: "Creative should communicate something, not simply fill a feed." },
      { title: "Performance Matters", description: "Marketing decisions should be informed by meaningful signals." },
      { title: "One Creative + Digital Team", description: "Strategy, creative, websites, SEO, advertising, and technology can work together." },
      { title: "Built for Long-Term Growth", description: "The goal is to build a system that learns and improves." }
    ],
    faq: [
      { id: "faq-1", question: "What does digital marketing include?", answer: "Digital marketing can include strategy, SEO, social media, paid advertising, content, landing pages, analytics, and other digital channels depending on the business and objectives.", featured: false, order: 1 },
      { id: "faq-2", question: "Do you manage social media?", answer: "Yes. Social media marketing and management can be provided as a dedicated service or as part of a broader digital marketing engagement.", featured: false, order: 2 },
      { id: "faq-3", question: "Do you run Google Ads and Meta Ads?", answer: "Yes. Paid advertising can be scoped across Google and Meta depending on the business, audience, offer, and campaign goals.", featured: false, order: 3 },
      { id: "faq-4", question: "Do you create the ad creatives?", answer: "Creative strategy and asset creation can be included depending on the selected scope.", featured: false, order: 4 },
      { id: "faq-5", question: "Do you provide SEO as part of digital marketing?", answer: "SEO can be included when appropriate, or handled as a dedicated service.", featured: false, order: 5 },
      { id: "faq-6", question: "Can you build landing pages for campaigns?", answer: "Yes. Landing pages can be designed and developed as part of a campaign or separately.", featured: false, order: 6 },
      { id: "faq-7", question: "How do you measure digital marketing performance?", answer: "Measurement depends on the objective and can include traffic, engagement, enquiries, purchases, conversions, campaign costs, and other relevant indicators.", featured: false, order: 7 },
      { id: "faq-8", question: "Do you guarantee leads or sales?", answer: "No. Marketing outcomes depend on factors including market demand, offer, competition, audience, budget, creative, website experience, and many external variables.", featured: false, order: 8 },
      { id: "faq-9", question: "How long does digital marketing take to work?", answer: "There is no universal timeline. Some campaigns can generate early signals quickly, while organic and long-term strategies typically require continued work and learning.", featured: false, order: 9 },
      { id: "faq-10", question: "Can you work with our existing marketing team?", answer: "Yes. Oveqira can operate as a dedicated partner, specialist team, or extension of an existing internal marketing function.", featured: false, order: 10 }
    ],
    cta: {
      heading: "Let's Build a Digital Marketing System Around Your Business.",
      description: "Tell us where your business is today, what you're trying to achieve, and where your current marketing feels stuck. We'll help identify the channels and priorities that make the most sense.",
      primaryLabel: "Build My Growth Strategy",
      secondaryLabel: "Talk to Oveqira"
    },
    seo: {
      title: "Digital Marketing Services | Oveqira",
      description: "Oveqira builds connected digital marketing strategies across SEO, social media, paid advertising, content, landing pages, analytics, and digital growth."
    }
  },
  {
    id: 'google-meta-ads',
    slug: 'google-meta-ads',
    title: 'Google & Meta Ads',
    eyebrow: 'GOOGLE & META ADS',
    shortDescription: 'Targeted paid acquisition focused on intent, audience, and measurable conversion.',
    description: 'Put Your Offer in Front of the Right People.',
    additionalDescription: 'We build and manage paid advertising campaigns across Google and Meta with a focus on audience, intent, creative, landing experience, measurement, and continuous optimization. The goal isn\'t simply to buy more clicks. It\'s to build a paid acquisition system where targeting, messaging, creative, destination, and measurement work together.',
    featured: true,
    order: 5,
    heroImage: 'google-meta-ads',
    problem: {
      eyebrow: 'PAID MEDIA IS EASY TO LAUNCH. HARDER TO DO WELL.',
      heading: 'Buying Attention Is Not the Same as Creating Demand.',
      description: 'Anyone can launch an advertisement. The difficult part is deciding who should see it, what they should see, where they should land, what action they should take, and how the campaign should learn from the outcome.',
      points: [
        { title: 'Targeting Without Strategy', description: 'Reaching more people doesn\'t necessarily mean reaching more relevant people.' },
        { title: 'Weak Creative', description: 'A well-targeted campaign still needs a message that earns attention.' },
        { title: 'Poor Landing Experience', description: 'A click has little value when the destination is confusing or disconnected from the advertisement.' },
        { title: 'Unclear Conversion', description: 'Campaigns need a clearly defined action to optimize toward.' },
        { title: 'Poor Measurement', description: 'Without meaningful tracking, campaign decisions become guesswork.' },
        { title: 'Set-and-Forget Campaigns', description: 'Paid media requires learning, testing, monitoring, and refinement.' }
      ]
    },
    platformComparison: {
      eyebrow: 'TWO CHANNELS. DIFFERENT JOBS.',
      heading: 'Meet People Where They Search. Or Where They Discover.',
      closing: 'The right platform depends on the business, offer, audience, market, buying journey, and objective.',
      platforms: [
        {
          name: 'GOOGLE ADS',
          positioning: 'Existing Intent',
          description: 'Google Ads can help businesses appear when people are actively searching for products, services, solutions, or information related to their needs.',
          areas: ['Search campaigns', 'branded search', 'non-branded search', 'location-focused campaigns', 'remarketing'],
          strengths: ['intent capture', 'demand capture', 'location targeting', 'query-based discovery']
        },
        {
          name: 'META ADS',
          positioning: 'Audience Discovery',
          description: 'Meta advertising can help businesses reach defined audiences while introducing offers, products, services, and ideas through visual and social environments.',
          areas: ['Facebook advertising', 'Instagram advertising', 'prospecting', 'remarketing', 'creative testing', 'audience testing'],
          strengths: ['audience discovery', 'visual storytelling', 'creative testing', 'remarketing']
        }
      ]
    },
    approach: {
      eyebrow: 'OUR APPROACH',
      heading: 'Strategy Before Spend.',
      description: 'Before allocating budget, we define what the campaign needs to accomplish and how the customer should move from first impression to meaningful action.',
      points: [
        { title: 'Understand', description: 'Study the business, offer, audience, market, competitors, and objective.' },
        { title: 'Define', description: 'Determine campaign goals, conversion actions, audience strategy, and key messages.' },
        { title: 'Structure', description: 'Build campaign architecture, targeting logic, ad groups or audience structures, and landing destinations.' },
        { title: 'Create', description: 'Develop ad concepts, copy directions, creative variations, and supporting landing experiences.' },
        { title: 'Launch', description: 'Deploy campaigns with appropriate tracking and configuration.' },
        { title: 'Optimize', description: 'Analyze performance, test variables, adjust campaigns, and continue learning.' }
      ]
    },
    capabilities: [
      { title: 'Campaign Strategy', description: 'Define objectives, audiences, offers, channels, and campaign direction.' },
      { title: 'Google Ads', description: 'Plan, create, configure, and optimize appropriate Google advertising campaigns.' },
      { title: 'Meta Ads', description: 'Plan, create, configure, and optimize advertising campaigns across Meta platforms.' },
      { title: 'Audience Research', description: 'Understand potential audiences, customer characteristics, interests, intent, and behaviors.' },
      { title: 'Keyword Research', description: 'Identify relevant search themes and queries for search advertising.' },
      { title: 'Ad Copy', description: 'Develop clear messaging aligned with the audience, offer, and campaign objective.' },
      { title: 'Creative Direction', description: 'Plan visual concepts and variations for paid social campaigns.' },
      { title: 'Landing Pages', description: 'Create or optimize focused destinations aligned with the advertisement.' },
      { title: 'Conversion Tracking', description: 'Set up or review relevant conversion actions and measurement where technically possible.' },
      { title: 'Remarketing', description: 'Build remarketing approaches where appropriate and legally/technically supported.' },
      { title: 'Campaign Optimization', description: 'Review performance and refine targeting, creative, structure, bidding/settings, and landing experience as appropriate.' }
    ],
    campaignStructure: {
      eyebrow: 'BUILD THE SYSTEM',
      heading: 'Every Campaign Needs a Clear Architecture.',
      stages: [
        { title: 'Objective', question: 'What business outcome are we trying to support?' },
        { title: 'Audience', question: 'Who should see the campaign?' },
        { title: 'Message', question: 'Why should they care?' },
        { title: 'Creative', question: 'What should make them stop and pay attention?' },
        { title: 'Destination', question: 'Where does the click take them?' },
        { title: 'Conversion', question: 'What action matters?' },
        { title: 'Measurement', question: 'How do we know what happened?' },
        { title: 'Optimization', question: 'What should change next?' }
      ]
    },
    adsCreative: {
      eyebrow: 'CREATIVE MATTERS',
      heading: 'The Algorithm Can Deliver an Ad. It Can\'t Invent Your Value Proposition.',
      description: 'Targeting determines who may see an advertisement. Creative and messaging determine whether they understand why it matters.',
      areas: [
        'ad headlines', 'primary copy', 'calls to action', 'static ads', 'carousels', 'short-form video concepts', 'product/service visuals', 'campaign themes', 'creative variations'
      ],
      testing: {
        vs: [
          { a: 'Message A', b: 'Message B' },
          { a: 'Creative A', b: 'Creative B' },
          { a: 'Audience A', b: 'Audience B' }
        ],
        disclaimer: '* A testing methodology, not a guarantee that every variable will be tested in every single campaign.'
      }
    },
    landingExperience: {
      eyebrow: 'AFTER THE CLICK',
      heading: 'A Good Ad Deserves a Good Destination.',
      description: 'The advertising experience doesn\'t end when someone clicks. The landing experience needs to continue the same message and make the intended next step clear.',
      path: ['Ad', 'Landing Page', 'Proof', 'Offer', 'CTA'],
      considerations: [
        'message consistency', 'page speed', 'mobile usability', 'headline clarity', 'offer clarity', 'trust signals', 'CTA visibility', 'form simplicity', 'relevant information', 'reduced friction'
      ],
      link: { text: 'Explore Web Design & Development', url: '/services/web-design-development' }
    },
    adsMeasurement: {
      eyebrow: 'MEASURE THE JOURNEY',
      heading: 'If You Can\'t Understand What Happened, You Can\'t Improve It.',
      metrics: [
        'impressions', 'reach', 'clicks', 'click-through rate', 'cost metrics', 'landing-page visits', 'leads', 'enquiries', 'purchases', 'conversion actions', 'campaign-level performance', 'audience performance', 'creative performance'
      ],
      technicalAreas: [
        'analytics', 'conversion tracking', 'event configuration', 'platform pixels/tags', 'UTM structures', 'reporting'
      ]
    },
    adsOptimization: {
      eyebrow: 'THE CAMPAIGN LEARNS',
      heading: 'Launch Is the Beginning, Not the Finish Line.',
      description: 'Paid media creates feedback. The job is to turn that feedback into better decisions.',
      categories: [
        { title: 'Audience', description: 'Review which audience segments appear relevant.' },
        { title: 'Creative', description: 'Identify stronger messages and creative patterns.' },
        { title: 'Placement', description: 'Review where campaigns are performing appropriately.' },
        { title: 'Budget', description: 'Allocate spend according to objectives and evidence.' },
        { title: 'Search Terms', description: 'Review query relevance and refine targeting.' },
        { title: 'Landing Experience', description: 'Identify friction or disconnect after the click.' },
        { title: 'Conversion Quality', description: 'Look beyond volume and consider whether actions are valuable to the business.' }
      ]
    },
    adsBudget: {
      eyebrow: 'BUDGET ≠ STRATEGY',
      heading: 'More Spend Doesn\'t Automatically Create Better Results.',
      description: 'Advertising budget determines how much opportunity a campaign can access, but strategy determines how intelligently that budget is used.',
      formula: [
        'Budget', 'Audience', 'Offer', 'Creative', 'Landing Experience', 'Measurement', 'Campaign System'
      ],
      closing: 'Recommended budgets should be determined according to the market, offer, objectives, audience size, competition, economics, and testing requirements.'
    },
    deliverables: [
      'campaign strategy', 'audience research', 'keyword research', 'campaign structure', 'Google Ads setup', 'Meta Ads setup', 'ad copy', 'creative direction', 'ad creative assets', 'landing-page recommendations', 'conversion tracking setup/review', 'campaign monitoring', 'optimization', 'reporting', 'strategic recommendations'
    ],
    deliverablesDisclaimer: 'Exact deliverables depend on the platform, campaign type, account condition, creative requirements, budget, and engagement scope.',
    process: [
      { number: '01', title: 'Discover', description: 'Understand the business, offer, audience, market, and goals.' },
      { number: '02', title: 'Plan', description: 'Define the campaign objective, audience, platform, messaging, budget direction, and conversion action.' },
      { number: '03', title: 'Build', description: 'Create campaign structures, targeting, copy, creative, tracking, and landing experience.' },
      { number: '04', title: 'Launch', description: 'Activate campaigns and verify that key components are functioning correctly.' },
      { number: '05', title: 'Analyze', description: 'Review meaningful performance signals and identify patterns.' },
      { number: '06', title: 'Optimize', description: 'Refine campaigns based on evidence, testing, business priorities, and campaign objectives.' }
    ],
    relatedServices: ['digital-marketing', 'seo', 'social-media', 'web-design-development', 'ui-ux', 'photography-videography', 'ai-automation'],
    whyOveqira: [
      { title: 'Strategy Before Execution', description: 'We define the objective before deciding where to spend.' },
      { title: 'Built Around Your Brand', description: 'Your campaigns should sound and look like your business.' },
      { title: 'Design That Has a Purpose', description: 'Creative should communicate a clear idea and action.' },
      { title: 'Performance Matters', description: 'Campaigns should be measured and improved using meaningful signals.' },
      { title: 'One Creative + Digital Team', description: 'Advertising can connect with websites, SEO, social, content, design, and automation.' },
      { title: 'Built for Long-Term Growth', description: 'The goal is to create a learning system, not simply launch isolated campaigns.' }
    ],
    faq: [
      { id: 'faq-1', question: 'Do you manage both Google Ads and Meta Ads?', answer: 'Yes. Campaigns can be managed on either platform or across both depending on the business and objectives.', featured: false, order: 1 },
      { id: 'faq-2', question: 'Which is better, Google Ads or Meta Ads?', answer: 'Neither is universally better. Google can be particularly useful for capturing existing search intent, while Meta can be useful for audience discovery and visual advertising. The appropriate choice depends on the business, audience, offer, and buying journey.', featured: false, order: 2 },
      { id: 'faq-3', question: 'Can you create the ad creatives?', answer: 'Creative direction and asset production can be included depending on the project scope.', featured: false, order: 3 },
      { id: 'faq-4', question: 'Do you create landing pages?', answer: 'Yes. Landing pages can be designed and developed or recommendations can be provided depending on the engagement.', featured: false, order: 4 },
      { id: 'faq-5', question: 'Do you guarantee leads?', answer: 'No. Campaign performance depends on factors including the offer, market, audience, creative, competition, budget, landing experience, and many external variables.', featured: false, order: 5 },
      { id: 'faq-6', question: 'Do you guarantee ROAS?', answer: 'No. A responsible campaign strategy should not promise a specific return before the relevant market and campaign data exists.', featured: false, order: 6 },
      { id: 'faq-7', question: 'Can you work with our existing ad account?', answer: 'Yes. Existing accounts can be audited, restructured, optimized, or managed depending on their condition.', featured: false, order: 7 },
      { id: 'faq-8', question: 'Can you set up conversion tracking?', answer: 'Tracking setup or review can be included where the required technical access and infrastructure are available.', featured: false, order: 8 },
      { id: 'faq-9', question: 'How much should we spend on ads?', answer: 'There is no universal number. Budget should be considered alongside market size, competition, economics, campaign objectives, audience, and testing needs.', featured: false, order: 9 },
      { id: 'faq-10', question: 'How often do you optimize campaigns?', answer: 'Optimization frequency depends on campaign scale, spend, data volume, objectives, and the engagement model.', featured: false, order: 10 },
      { id: 'faq-11', question: 'Can you run ads for a new business?', answer: 'Yes. New businesses can run paid campaigns, but the offer, audience, website/landing experience, tracking, and campaign objective should be established clearly before significant spend is committed.', featured: false, order: 11 }
    ],
    cta: {
      heading: 'Let\'s Build a Paid Campaign With a Strategy Behind It.',
      description: 'Tell us what you\'re selling, who you\'re trying to reach, where you\'re currently advertising, and what you want the campaign to achieve. We\'ll help identify the right direction.',
      primaryLabel: 'Plan My Campaign',
      secondaryLabel: 'Talk to Oveqira'
    },
    seo: {
      title: 'Google & Meta Ads Management | Oveqira',
      description: 'Oveqira creates and manages Google Ads and Meta Ads campaigns around audience, intent, creative, landing experiences, conversion tracking, and optimization.'
    }
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Marketing & Management',
    eyebrow: 'SOCIAL MEDIA MARKETING & MANAGEMENT',
    shortDescription: 'Build a strategic social presence with intentional content, community management, and consistent branding.',
    description: 'Give Your Brand Something Worth Following.',
    additionalDescription: 'We build social media strategies that combine positioning, content, creative, publishing, audience understanding, and continuous improvement to create a stronger digital presence. From content planning and creative production to publishing, management, community interaction, and performance analysis, Oveqira helps businesses turn social media into an intentional brand and growth channel.',
    featured: true,
    order: 6,
    heroImage: 'social-media',
    problem: {
      eyebrow: 'POSTING IS NOT THE STRATEGY',
      heading: 'A Busy Feed Doesn\'t Necessarily Mean a Strong Brand.',
      description: 'A business can post every day and still struggle to build recognition, trust, or meaningful engagement. Without a clear purpose, social media quickly becomes a cycle of creating content simply because something needs to be posted.',
      points: [
        { title: 'No Clear Direction', description: 'Content needs a reason to exist beyond filling the calendar.' },
        { title: 'Inconsistent Brand', description: 'Different styles, messages, and visuals can make a brand difficult to recognize.' },
        { title: 'Repetitive Content', description: 'Audiences need useful, interesting, entertaining, educational, or meaningful reasons to pay attention.' },
        { title: 'Weak Creative', description: 'Good ideas can disappear when the execution doesn\'t earn attention.' },
        { title: 'No Content System', description: 'Without planning, content production becomes reactive and difficult to sustain.' },
        { title: 'No Learning Loop', description: 'Performance should inform future content rather than simply becoming a monthly report.' }
      ]
    },
    approach: {
      eyebrow: 'OUR APPROACH',
      heading: 'Build the Brand. Don\'t Just Fill the Feed.',
      description: 'We treat social media as an extension of the brand. That means understanding what the business should be known for, who it wants to reach, what those people care about, and what kind of content can earn attention consistently.',
      points: [
        { title: 'Position', description: 'Define what the brand should communicate and be known for.' },
        { title: 'Plan', description: 'Create content pillars, themes, formats, campaigns, and publishing direction.' },
        { title: 'Create', description: 'Turn ideas into useful, visually strong, platform-appropriate content.' },
        { title: 'Engage', description: 'Maintain an active presence and support meaningful audience interaction where included.' },
        { title: 'Learn', description: 'Use content and audience signals to improve future decisions.' }
      ]
    },
    capabilities: [
      { title: 'Social Media Strategy', description: 'Define objectives, audiences, positioning, content direction, platforms, and priorities.' },
      { title: 'Content Strategy', description: 'Build content pillars, themes, formats, campaigns, and recurring content concepts.' },
      { title: 'Content Planning', description: 'Develop structured content calendars and publishing plans.' },
      { title: 'Social Media Management', description: 'Manage publishing, organization, scheduling, and channel activity according to scope.' },
      { title: 'Creative Development', description: 'Create visual directions for posts, carousels, stories, reels, campaigns, and other formats.' },
      { title: 'Short-Form Video', description: 'Develop concepts and content directions for short-form video where relevant.' },
      { title: 'Copywriting', description: 'Create captions, hooks, calls to action, educational copy, promotional messaging, and other social copy.' },
      { title: 'Community Management', description: 'Support audience interaction, comments, messages, and community activity where included in scope.' },
      { title: 'Content Production', description: 'Support photography, videography, graphics, and other creative production where required.' },
      { title: 'Analytics', description: 'Review relevant social performance indicators and audience signals.' },
      { title: 'Optimization', description: 'Refine content themes, formats, creative, and publishing direction based on evidence.' }
    ],
    contentPillars: {
      eyebrow: 'CONTENT WITH A PURPOSE',
      heading: 'Every Post Should Have a Job.',
      pillars: [
        { title: 'Educate', description: 'Teach something useful and demonstrate expertise.' },
        { title: 'Build Trust', description: 'Show the people, process, thinking, experience, and values behind the business.' },
        { title: 'Engage', description: 'Create content that invites conversation, participation, or curiosity.' },
        { title: 'Demonstrate', description: 'Show products, services, work, processes, transformations, or capabilities.' },
        { title: 'Convert', description: 'Present relevant offers, services, products, or next steps.' },
        { title: 'Humanize', description: 'Give the audience a reason to connect with the brand beyond the transaction.' }
      ],
      closing: 'Note: Not every brand needs every pillar. The final content mix should depend on the business and audience.'
    },
    platformStrategy: {
      eyebrow: 'THE PLATFORM CHANGES THE PLAY',
      heading: 'One Idea Doesn\'t Have to Mean One Identical Post Everywhere.',
      platforms: [
        { name: 'Instagram', description: 'Visual storytelling, short-form video, carousels, brand presence, community, and discovery.' },
        { name: 'Facebook', description: 'Community, local audiences, content distribution, advertising support, and broader reach where relevant.' },
        { name: 'LinkedIn', description: 'Professional expertise, company perspective, thought leadership, and B2B communication.' },
        { name: 'YouTube', description: 'Long-form education, short-form video, demonstrations, explainers, and deeper content.' },
        { name: 'Other Platforms', description: 'Consider only where the audience and business objective justify the investment.' }
      ],
      closing: 'The strategy should adapt to the platform rather than copying the same content everywhere without context.'
    },
    contentProduction: {
      eyebrow: 'FROM IDEA TO ASSET',
      heading: 'Strategy Becomes Real When Something Gets Made.',
      description: 'Oveqira supports content production through graphic design, carousels, stories, short-form video, photography, and campaign creatives scoped specifically to the project.',
      areas: [
        'graphic design', 'carousels', 'static posts', 'stories', 'short-form video', 'reels', 'photography', 'videography', 'product visuals', 'campaign creatives', 'educational content', 'promotional content'
      ],
      link: { text: 'Explore Photography & Videography', url: '/services/photography-videography' }
    },
    contentSystem: {
      eyebrow: 'CONSISTENCY WITHOUT REPETITION',
      heading: 'A Strong Content System Makes Consistency Easier.',
      stages: [
        { title: 'Monthly Direction', description: 'Define the major themes and priorities.' },
        { title: 'Content Pillars', description: 'Assign content ideas to strategic categories.' },
        { title: 'Formats', description: 'Choose the most appropriate formats.' },
        { title: 'Production', description: 'Create and review the assets.' },
        { title: 'Publishing', description: 'Schedule and publish according to the agreed plan.' },
        { title: 'Analysis', description: 'Review what audiences responded to.' },
        { title: 'Improvement', description: 'Use the learning to shape the next cycle.' }
      ]
    },
    brandConsistency: {
      eyebrow: 'RECOGNITION MATTERS',
      heading: 'Your Feed Should Look Like One Brand, Not Fifty Different Ideas.',
      description: 'Consistency does not mean making every post identical. It means creating recognizable visual and verbal patterns that help people understand who the brand is.',
      areas: [
        'typography', 'color', 'imagery', 'layouts', 'tone of voice', 'illustration style', 'photography direction', 'video treatment', 'CTA language', 'content structure'
      ]
    },
    businessJourney: {
      eyebrow: 'SOCIAL SHOULD CONNECT SOMEWHERE',
      heading: 'The Best Social Strategy Doesn\'t End at the Post.',
      path: ['Social Discovery', 'Profile', 'Website', 'Offer', 'Trust', 'Action'],
      description: 'Different businesses prioritize different outcomes. Depending on the objective, a strategic presence can support multiple parts of the customer journey.',
      outcomes: [
        'website traffic', 'brand awareness', 'enquiries', 'product discovery', 'event promotion', 'content distribution', 'community building', 'customer education', 'remarketing', 'campaign support'
      ]
    },
    socialAnalytics: {
      eyebrow: 'LEARN FROM THE AUDIENCE',
      heading: 'The Feed Gives You Feedback. Pay Attention.',
      metrics: [
        'reach', 'impressions', 'engagement', 'saves', 'shares', 'comments', 'profile visits', 'link clicks', 'video views', 'watch time', 'audience growth', 'website actions'
      ],
      description: 'Metrics should be interpreted according to the content format and business objective. A high-view video and a high-converting service post may play very different roles.'
    },
    deliverables: [
      'social media strategy', 'audience research', 'platform strategy', 'content pillars', 'content calendar', 'content concepts', 'social copy', 'creative direction', 'graphic content', 'short-form video concepts', 'photography/videography support', 'publishing', 'social media management', 'community management', 'analytics', 'reporting', 'optimization recommendations'
    ],
    deliverablesDisclaimer: 'Exact deliverables depend on platforms, posting frequency, content volume, production requirements, management scope, and engagement model.',
    process: [
      { number: '01', title: 'Discover', description: 'Understand the business, audience, brand, market, competitors, and goals.' },
      { number: '02', title: 'Strategize', description: 'Define positioning, platforms, content pillars, formats, themes, and priorities.' },
      { number: '03', title: 'Plan', description: 'Build content calendars, campaigns, production requirements, and publishing schedules.' },
      { number: '04', title: 'Create', description: 'Develop visual assets, videos, copy, photography, and supporting content.' },
      { number: '05', title: 'Publish & Engage', description: 'Publish according to the agreed schedule and support audience interaction where included.' },
      { number: '06', title: 'Analyze & Improve', description: 'Review meaningful signals and use them to shape future content.' }
    ],
    contentFormats: {
      eyebrow: 'FORMAT LIBRARY',
      heading: 'Adapting to the Medium.',
      formats: [
        { title: 'Carousels', description: 'Educational, narrative, comparison, checklist, and insight-led content.' },
        { title: 'Reels & Short Videos', description: 'Hooks, explainers, demonstrations, stories, behind-the-scenes, and trend-aware formats.' },
        { title: 'Static Posts', description: 'Announcements, insights, offers, quotes, visual explanations, and brand communication.' },
        { title: 'Stories', description: 'Quick updates, interaction, behind-the-scenes, reminders, and supporting content.' },
        { title: 'Photography', description: 'Products, people, spaces, processes, events, and brand storytelling.' },
        { title: 'Video', description: 'Brand films, explainers, demonstrations, interviews, campaigns, and short-form content.' },
        { title: 'Long-Form', description: 'Thought leadership, educational content, articles, and deeper brand communication.' }
      ]
    },
    relatedServices: ['digital-marketing', 'google-meta-ads', 'photography-videography', 'web-design-development', 'seo', 'ai-automation', 'ui-ux'],
    whyOveqira: [
      { title: 'Strategy Before Execution', description: 'We decide what the content needs to achieve before deciding what to publish.' },
      { title: 'Built Around Your Brand', description: 'Your content should build recognition rather than imitate whatever is trending.' },
      { title: 'Design That Has a Purpose', description: 'Every visual should communicate something meaningful.' },
      { title: 'Performance Matters', description: 'Audience signals should inform future content decisions.' },
      { title: 'One Creative + Digital Team', description: 'Strategy, design, content, websites, advertising, SEO, photography, and technology can work together.' },
      { title: 'Built for Long-Term Growth', description: 'The goal is a sustainable content system, not a short burst of activity.' }
    ],
    faq: [
      { id: 'faq-1', question: 'Which social media platforms do you manage?', answer: 'Platform selection depends on the audience and business objectives. Oveqira can scope management around the platforms that make strategic sense.', featured: false, order: 1 },
      { id: 'faq-2', question: 'Do you create the content?', answer: 'Yes. Content strategy, copy, graphic content, short-form video, photography, and videography can be included depending on scope.', featured: false, order: 2 },
      { id: 'faq-3', question: 'Do you provide a content calendar?', answer: 'Yes. Content planning and calendars can be part of a social media engagement.', featured: false, order: 3 },
      { id: 'faq-4', question: 'How often should a business post?', answer: 'There is no universal ideal frequency. It depends on the platform, audience, content quality, production capacity, and business objectives.', featured: false, order: 4 },
      { id: 'faq-5', question: 'Do you guarantee follower growth?', answer: 'No. Audience growth depends on content quality, consistency, audience fit, platform dynamics, market conditions, and many other factors.', featured: false, order: 5 },
      { id: 'faq-6', question: 'Do you respond to comments and messages?', answer: 'Community management can be included when specifically scoped.', featured: false, order: 6 },
      { id: 'faq-7', question: 'Can you manage an existing social media account?', answer: 'Yes. Existing accounts can be audited, restructured, refreshed, and managed.', featured: false, order: 7 },
      { id: 'faq-8', question: 'Can you create reels and short-form videos?', answer: 'Yes. Short-form video concepts and production can be included depending on scope.', featured: false, order: 8 },
      { id: 'faq-9', question: 'Do you provide photography and videography?', answer: 'Yes. Oveqira offers photography and videography as part of its broader creative services.', featured: false, order: 9 },
      { id: 'faq-10', question: 'Can social media help generate leads?', answer: 'It can support awareness, discovery, trust, traffic, and enquiries, but outcomes depend on the business, offer, audience, content, conversion journey, and broader marketing system.', featured: false, order: 10 },
      { id: 'faq-11', question: 'Can you run paid ads alongside social media management?', answer: 'Yes. Paid advertising can be integrated where appropriate through the Google & Meta Ads service.', featured: false, order: 11 }
    ],
    cta: {
      heading: 'Let\'s Give Your Brand Something Worth Saying.',
      description: 'Tell us about your business, audience, current social presence, and what you want your content to accomplish. We\'ll help shape a strategy that fits the brand and the business.',
      primaryLabel: 'Build My Social Strategy',
      secondaryLabel: 'Talk to Oveqira'
    },
    seo: {
      title: 'Social Media Marketing & Management | Oveqira',
      description: 'Oveqira provides social media strategy, content planning, creative production, publishing, management, community support, analytics, and optimization.'
    }
  },
  {
    id: 'photography-videography',
    slug: 'photography-videography',
    title: 'Photography & Videography',
    eyebrow: 'PHOTOGRAPHY & VIDEOGRAPHY',
    shortDescription: 'Purposeful visual storytelling designed to build brand perception and commercial impact.',
    description: 'Make Your Brand Worth Looking At.',
    additionalDescription: 'We create purposeful photography and video content that helps businesses communicate their products, people, spaces, stories, and identity with greater clarity and impact. From creative direction and production planning to photography, videography, short-form content, and campaign assets, Oveqira creates visuals designed for the places your audience actually sees them.',
    featured: true,
    order: 7,
    heroImage: 'photography-videography',
    problem: {
      eyebrow: 'PEOPLE SEE BEFORE THEY READ',
      heading: 'Your Visuals Shape the Story Before Your Words Do.',
      description: 'A product image, website banner, social post, campaign video, or team photograph can influence how people perceive a business before they understand everything it offers. When visual content feels inconsistent, generic, outdated, or disconnected from the brand, it can weaken an otherwise strong business.',
      points: [
        { title: 'Generic Visuals', description: 'Stock imagery can make a brand feel interchangeable.' },
        { title: 'Inconsistent Identity', description: 'Different photography styles can make the brand feel fragmented.' },
        { title: 'Poor Product Presentation', description: 'Good products can lose perceived value when photographed without intention.' },
        { title: 'Content Shortage', description: 'Without a planned content library, businesses constantly struggle to find something relevant to publish.' },
        { title: 'Wrong Format', description: 'A website hero, Instagram Reel, product page, and advertisement all have different visual requirements.' },
        { title: 'No Creative Direction', description: 'A camera can capture an image. Strategy determines what the image needs to communicate.' }
      ]
    },
    approach: {
      eyebrow: 'OUR APPROACH',
      heading: 'We Don\'t Just Capture the Shot. We Plan What It Needs to Say.',
      description: 'Strong visual content begins before the camera turns on. We consider the brand, audience, platform, message, environment, subject, composition, and intended use before production begins.',
      points: [
        { title: 'Understand', description: 'Learn the brand, audience, products, people, campaign, and intended outcomes.' },
        { title: 'Concept', description: 'Define the visual direction, mood, story, references, formats, and creative requirements.' },
        { title: 'Prepare', description: 'Plan locations, subjects, props, shot lists, production requirements, and logistics.' },
        { title: 'Produce', description: 'Capture photography and video with attention to composition, lighting, movement, detail, and brand consistency.' },
        { title: 'Deliver', description: 'Prepare organized assets according to the agreed formats and intended channels.' }
      ]
    },
    photographyCapabilities: {
      eyebrow: 'PHOTOGRAPHY',
      heading: 'Images Built to Represent the Business.',
      items: [
        { title: 'Product Photography', description: 'Purposeful imagery for products, catalogues, websites, e-commerce, campaigns, and marketing.' },
        { title: 'Brand Photography', description: 'Visuals that communicate the identity, personality, and world of a business.' },
        { title: 'Corporate Photography', description: 'Professional imagery for teams, offices, leadership, websites, and communications.' },
        { title: 'Portrait Photography', description: 'Professional portraits designed around personal or professional brand identity.' },
        { title: 'Lifestyle Photography', description: 'Natural, contextual imagery that shows products or services in use.' },
        { title: 'Event Photography', description: 'Coverage for launches, conferences, celebrations, corporate events, and other occasions.' },
        { title: 'Architectural & Interior', description: 'Spaces, buildings, interiors, and environments photographed with visual precision.' },
        { title: 'Social Media Photography', description: 'Content designed around the formats and creative requirements of social platforms.' }
      ]
    },
    videographyCapabilities: {
      eyebrow: 'VIDEOGRAPHY',
      heading: 'Motion Gives the Brand Another Dimension.',
      items: [
        { title: 'Brand Films', description: 'Visual stories designed to communicate the identity and perspective of a business.' },
        { title: 'Promotional Videos', description: 'Focused videos supporting products, services, offers, launches, or campaigns.' },
        { title: 'Social Media Videos', description: 'Short-form video designed for modern social platforms.' },
        { title: 'Reels & Short-Form', description: 'Fast, focused visual content built around hooks, ideas, products, people, or stories.' },
        { title: 'Product Videos', description: 'Demonstrate products through movement, detail, usage, and visual storytelling.' },
        { title: 'Explainer Videos', description: 'Simplify a product, service, process, or concept.' },
        { title: 'Corporate Videos', description: 'Professional business communication for teams, organizations, announcements, and presentations.' },
        { title: 'Event Videography', description: 'Capture key moments, atmosphere, activities, and experiences.' },
        { title: 'Interviews', description: 'Structured interview-based content for brands, founders, professionals, and organizations.' }
      ]
    },
    multiChannelContent: {
      eyebrow: 'ONE SHOOT. MANY USES.',
      heading: 'Create a Visual Library, Not a Single Asset.',
      description: 'A well-planned production can create a broader library of visual assets that supports multiple parts of the digital presence.',
      flowStart: 'Photoshoot / Video Shoot',
      channels: ['Website', 'Social Media', 'Google Ads', 'Meta Ads', 'Campaigns', 'Blog & Content', 'Presentations', 'Brand Assets'],
      closing: 'The exact deliverables and formats depend on the production plan and project scope.'
    },
    creativeDirection: {
      eyebrow: 'CREATIVE DIRECTION',
      heading: 'The Difference Is Often Decided Before the Camera Rolls.',
      description: 'Creative direction establishes the visual language of the production so the final assets feel intentional rather than accidental.',
      areas: ['visual references', 'moodboards', 'composition', 'lighting direction', 'color direction', 'styling', 'location', 'props', 'talent/subjects', 'shot lists', 'framing', 'camera movement', 'storytelling', 'platform formats']
    },
    socialFirstProduction: {
      eyebrow: 'BUILT FOR ATTENTION',
      heading: 'Content Designed for the Way People Consume It.',
      description: 'Modern content may need to work across multiple aspect ratios, platforms, and orientations. We plan productions around the medium.',
      formats: ['vertical video (9:16)', 'square content (1:1)', 'portrait imagery (4:5)', 'short-form video', 'stories', 'reels', 'carousels', 'website banners', 'product pages', 'advertisements']
    },
    commercialPurpose: {
      eyebrow: 'BEAUTY WITH A JOB TO DO',
      heading: 'Beautiful Content Should Still Have a Purpose.',
      purposes: [
        { title: 'Build Perception', description: 'Present the business with greater visual credibility.' },
        { title: 'Explain', description: 'Show products, processes, environments, or services clearly.' },
        { title: 'Attract', description: 'Create content capable of earning attention across digital channels.' },
        { title: 'Differentiate', description: 'Give the brand original visual material instead of relying on generic assets.' },
        { title: 'Support Conversion', description: 'Use stronger visuals to support product pages, landing pages, campaigns, and customer decisions.' }
      ],
      closing: 'Creative quality and commercial purpose don\'t need to compete. The strongest work considers both.'
    },
    visualPortfolio: {
      eyebrow: 'THE WORK',
      heading: 'Frames That Say Something.',
      images: [
        { span: 'lg:col-span-2 lg:row-span-2', label: 'Campaign Visual' },
        { span: 'lg:col-span-1 lg:row-span-1', label: 'Commercial Portrait' },
        { span: 'lg:col-span-1 lg:row-span-1', label: 'Product Detail' },
        { span: 'lg:col-span-2 lg:row-span-1', label: 'Cinematic Motion Frame' },
        { span: 'lg:col-span-1 lg:row-span-2', label: 'Editorial Composition' },
        { span: 'lg:col-span-1 lg:row-span-1', label: 'Studio Lighting' },
        { span: 'lg:col-span-2 lg:row-span-1', label: 'Architectural Composition' }
      ]
    },
    productionTypes: {
      eyebrow: 'PRODUCTION TYPES',
      heading: 'Production Scaled to the Requirement.',
      types: [
        { title: 'Single-Day Shoot', description: 'Focused production around a specific campaign, product, event, or content requirement.' },
        { title: 'Recurring Content Production', description: 'Planned recurring shoots for brands that need a consistent visual pipeline.' },
        { title: 'Campaign Production', description: 'Purpose-built photography and video for launches, promotions, advertising, or major campaigns.' },
        { title: 'Product Content', description: 'Focused product photography and video for websites, e-commerce, social media, and marketing.' },
        { title: 'Brand Content', description: 'A broader visual library designed to establish a recognizable brand world.' },
        { title: 'Event Coverage', description: 'Photography and/or video coverage for important business events.' }
      ]
    },
    process: [
      { number: '01', title: 'Brief', description: 'Understand the business, objective, audience, visual requirements, and intended use.' },
      { number: '02', title: 'Concept', description: 'Develop the creative direction, mood, references, and production idea.' },
      { number: '03', title: 'Plan', description: 'Prepare locations, shot lists, schedules, subjects, props, equipment, and logistics.' },
      { number: '04', title: 'Shoot', description: 'Capture the agreed photography and video content.' },
      { number: '05', title: 'Edit', description: 'Select, edit, retouch, color-correct, cut, and prepare the agreed assets.' },
      { number: '06', title: 'Deliver', description: 'Organize and deliver final assets according to the agreed formats and requirements.' }
    ],
    deliverables: [
      'Photography: Selected high-resolution photographs',
      'Photography: Web-ready images & social-ready crops',
      'Photography: Product imagery, portraits, and campaign imagery',
      'Video: Edited video, short-form cuts, and social-ready formats',
      'Video: Campaign videos, product videos, and interview edits',
      'Creative: Visual direction and shot list',
      'Creative: Production planning and format planning',
      'Creative: Asset organization and delivery'
    ],
    deliverablesDisclaimer: 'Final deliverables are defined before production begins. Raw files and source footage are provided only when specifically included in the agreed project scope.',
    relatedServices: ['social-media', 'google-meta-ads', 'web-design-development', 'digital-marketing', 'ui-ux', 'ai-automation'],
    whyOveqira: [
      { title: 'Strategy Before Execution', description: 'We understand what the content needs to accomplish before production begins.' },
      { title: 'Built Around Your Brand', description: 'Visuals are created around the identity and personality of the business.' },
      { title: 'Design That Has a Purpose', description: 'Composition, format, and storytelling are considered intentionally.' },
      { title: 'One Creative + Digital Team', description: 'Photography and video can connect directly with websites, social media, advertising, and campaigns.' },
      { title: 'Built for Long-Term Growth', description: 'A good production can create a reusable visual library rather than a single moment of content.' }
    ],
    faq: [
      { id: 'faq-1', question: 'What types of photography do you offer?', answer: 'Oveqira can support product, brand, corporate, portrait, lifestyle, event, architectural, interior, and social-media photography depending on project requirements.', featured: false, order: 1 },
      { id: 'faq-2', question: 'What types of videos do you create?', answer: 'Services can include brand films, promotional videos, product videos, social videos, reels, explainers, corporate videos, interviews, and event coverage.', featured: false, order: 2 },
      { id: 'faq-3', question: 'Do you provide both photography and videography?', answer: 'Yes. Projects can include photography, videography, or both depending on the production brief.', featured: false, order: 3 },
      { id: 'faq-4', question: 'Can you create content specifically for Instagram and social media?', answer: 'Yes. Production can be planned around vertical video, reels, stories, social imagery, and other platform-specific requirements.', featured: false, order: 4 },
      { id: 'faq-5', question: 'Do you provide editing and retouching?', answer: 'Editing and appropriate post-production can be included according to the agreed production scope.', featured: false, order: 5 },
      { id: 'faq-6', question: 'Can you help plan the shoot?', answer: 'Yes. Creative direction, shot lists, visual references, production planning, and format planning can be included.', featured: false, order: 6 },
      { id: 'faq-7', question: 'Do you provide models or talent?', answer: 'Talent requirements can be discussed and scoped according to the production.', featured: false, order: 7 },
      { id: 'faq-8', question: 'Can you shoot at our location?', answer: 'Location requirements can be planned around the project and production needs.', featured: false, order: 8 },
      { id: 'faq-9', question: 'Do you provide raw photos or footage?', answer: 'Raw files are provided only when specifically included in the agreed project scope.', featured: false, order: 9 },
      { id: 'faq-10', question: 'Can one shoot create content for multiple platforms?', answer: 'Yes. Productions can be planned to create a broader content library across multiple formats, provided this is defined during planning.', featured: false, order: 10 },
      { id: 'faq-11', question: 'Do you also manage the social media where the content is used?', answer: 'Yes. Oveqira offers Social Media Marketing & Management as a separate service.', featured: false, order: 11 }
    ],
    cta: {
      heading: 'Let\'s Create Visuals Your Brand Can Actually Use.',
      description: 'Tell us what you\'re launching, promoting, documenting, or trying to communicate. We\'ll help shape the creative direction and production approach around the job the content needs to do.',
      primaryLabel: 'Plan a Shoot',
      secondaryLabel: 'Talk to Oveqira'
    },
    seo: {
      title: 'Photography & Videography Services | Oveqira',
      description: 'Oveqira creates professional photography and videography for brands, products, businesses, campaigns, websites, social media, and digital marketing.'
    }
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Automation',
    eyebrow: 'AI & AUTOMATION',
    shortDescription: 'Practical AI and automation systems designed to connect tools and improve operational efficiency.',
    description: 'Make Your Business Run Smarter.',
    additionalDescription: 'We design practical AI and automation systems that reduce repetitive work, connect tools, improve customer journeys, and help businesses operate more efficiently. From AI assistants and chatbots to WhatsApp workflows, email automation, lead routing, API integrations, and internal processes, Oveqira builds systems around the way your business actually works.',
    featured: true,
    order: 8,
    heroImage: 'ai-automation',
    problem: {
      eyebrow: 'REPETITION HAS A COST',
      heading: 'Your Team Shouldn\'t Have to Do the Same Digital Task Every Day.',
      description: 'Many businesses lose time moving information between tools, replying to repetitive questions, following up with leads, copying data, sending routine emails, or manually managing processes that could be structured more efficiently. Automation doesn\'t mean removing people from the process. It means allowing technology to handle predictable work so people can spend more time on work that requires judgment, creativity, and relationships.',
      points: [
        { title: 'Repetitive Tasks', description: 'The same actions happen repeatedly without adding much strategic value.' },
        { title: 'Manual Data Entry', description: 'Information is copied between forms, spreadsheets, CRMs, emails, and other tools.' },
        { title: 'Slow Lead Follow-Up', description: 'Important enquiries can become harder to convert when responses and routing depend entirely on manual work.' },
        { title: 'Too Many Tools', description: 'Disconnected systems create unnecessary operational friction.' },
        { title: 'Repetitive Customer Questions', description: 'Teams repeatedly answer the same common questions.' },
        { title: 'No Workflow Visibility', description: 'When processes live in people\'s heads, it becomes harder to manage, measure, and improve them.' }
      ]
    },
    aiVsAutomation: {
      eyebrow: 'USE THE RIGHT TOOL',
      heading: 'Not Everything Needs AI.',
      description: 'Some workflows need predictable automation. Others benefit from AI\'s ability to interpret language, classify information, generate responses, or handle less structured inputs. We determine which approach fits the problem.',
      automation: {
        title: 'AUTOMATION',
        points: ['Predictable processes', 'Scheduled tasks', 'Notifications', 'Data movement', 'Rule-based decisions', 'Repetitive actions', 'System integrations'],
        example: 'Form Submission → CRM → Email Notification → Task Creation'
      },
      ai: {
        title: 'AI',
        points: ['Natural-language conversations', 'Classification & summarization', 'Content generation', 'Document understanding', 'Intelligent routing', 'Contextual assistance', 'Handling less structured information'],
        example: 'Customer Message → AI Understanding → Intent Detection → Appropriate Response / Human Handoff'
      },
      closing: 'The goal is not to add AI everywhere. The goal is to build the simplest system that solves the actual problem.'
    },
    approach: {
      eyebrow: 'OUR APPROACH',
      heading: 'Start With the Workflow, Not the Technology.',
      description: 'We first understand how work currently moves through the business. Then we identify repetitive steps, bottlenecks, decisions, handoffs, and opportunities for improvement before selecting the technology.',
      points: [
        { title: 'Map', description: 'Understand the current workflow.' },
        { title: 'Identify', description: 'Find repetitive work, bottlenecks, delays, and unnecessary manual steps.' },
        { title: 'Simplify', description: 'Improve the process before automating it.' },
        { title: 'Connect', description: 'Integrate the tools and systems involved.' },
        { title: 'Automate', description: 'Introduce rules, workflows, AI, or a combination where appropriate.' },
        { title: 'Monitor', description: 'Review how the system behaves and improve it over time.' }
      ]
    },
    capabilities: [
      { title: 'Workflow Automation', description: 'Connect business steps so information moves automatically between processes.' },
      { title: 'Lead Automation', description: 'Capture, classify, route, notify, and follow up with new enquiries.' },
      { title: 'Email Automation', description: 'Create triggered notifications, follow-ups, sequences, and internal workflows.' },
      { title: 'WhatsApp Automation', description: 'Build appropriate automated communication and workflow experiences through supported WhatsApp integrations.' },
      { title: 'AI Chatbots', description: 'Create conversational assistants for common questions, information retrieval, lead qualification, and support workflows.' },
      { title: 'AI Assistants', description: 'Build specialized AI workflows for internal or customer-facing tasks.' },
      { title: 'API Integrations', description: 'Connect platforms and systems through APIs where appropriate.' },
      { title: 'CRM Automation', description: 'Move and organize lead/customer information across systems.' },
      { title: 'Data Workflows', description: 'Automate structured information movement between tools.' },
      { title: 'Notifications & Alerts', description: 'Trigger internal notifications when defined events occur.' },
      { title: 'Document Workflows', description: 'Use automation or AI for appropriate document processing, extraction, classification, or routing.' },
      { title: 'Reporting Automation', description: 'Automate recurring data collection or reporting workflows where technically appropriate.' }
    ],
    useCases: {
      eyebrow: 'WHERE AUTOMATION HELPS',
      heading: 'Turn Repetitive Steps Into Connected Workflows.',
      cases: [
        { title: 'Lead Capture', flow: ['Website Form', 'Lead Database', 'Internal Notification', 'Follow-Up'] },
        { title: 'Customer Enquiries', flow: ['Message', 'AI Classification', 'Relevant Information', 'Human Handoff'] },
        { title: 'Appointment Requests', flow: ['Request', 'Availability/Workflow', 'Confirmation', 'Reminder'] },
        { title: 'Internal Notifications', flow: ['Business Event', 'Rule', 'Relevant Team', 'Notification'] },
        { title: 'Email Follow-Up', flow: ['Trigger', 'Personalized Message', 'Delay', 'Follow-Up', 'Escalation'] },
        { title: 'Content Workflow', flow: ['Idea', 'Draft', 'Review', 'Approval', 'Publishing'] },
        { title: 'Data Synchronization', flow: ['System A', 'API/Integration', 'System B'] },
        { title: 'Customer Support', flow: ['Question', 'Knowledge Source', 'AI/Automation', 'Response or Escalation'] }
      ]
    },
    aiChatbots: {
      eyebrow: 'AI CONVERSATIONAL SYSTEMS',
      heading: 'Give Customers a Faster Way to Get Answers.',
      description: 'AI assistants can help handle common questions, guide visitors through information, qualify enquiries, and route conversations when human attention is needed.',
      workflows: ['FAQ responses', 'Service information', 'Product information', 'Lead qualification', 'Guided conversations', 'Knowledge retrieval', 'Basic customer support', 'Enquiry collection', 'Human handoff', 'Multilingual experiences'],
      limitations: ['Avoids inventing information (hallucinations)', 'Escalates uncertain or sensitive questions', 'Protects private information', 'Uses approved knowledge sources', 'Provides human handoff when appropriate']
    },
    whatsappAutomation: {
      eyebrow: 'WHATSAPP WORKFLOWS',
      heading: 'Turn Conversations Into Structured Workflows.',
      description: 'For businesses that communicate heavily through WhatsApp, appropriate automation can help structure repetitive communication and connect conversations with internal systems.',
      workflows: ['Enquiry capture', 'FAQs', 'Lead qualification', 'Notifications', 'Appointment reminders', 'Follow-ups', 'Order/status updates', 'Internal routing'],
      limitations: ['Depends on WhatsApp Business requirements', 'Requires available APIs', 'Must adhere to platform policies', 'Requires business verification', 'Uses approved message templates', 'Subject to technical access constraints']
    },
    integrations: {
      eyebrow: 'CONNECTED SYSTEMS',
      heading: 'Your Tools Should Talk to Each Other.',
      description: 'Integrations can reduce manual data movement and create more connected workflows between the tools a business already uses.',
      categories: ['Website', 'CRM', 'Email', 'WhatsApp', 'Analytics', 'Payments', 'Databases', 'Internal Tools', 'APIs'],
      closing: 'Available integrations depend on the platform\'s APIs, permissions, technical constraints, and project requirements.'
    },
    humanInTheLoop: {
      eyebrow: 'AUTOMATION WITH OVERSIGHT',
      heading: 'Smart Systems Know When to Hand the Work Back.',
      description: 'Not every decision should be automated. For sensitive, uncertain, complex, or high-value situations, the workflow should allow a person to review or take over.',
      flowStart: 'Automation',
      check: 'Confidence / Rule Check',
      paths: [
        { label: 'Clear & Safe', outcome: 'Continue automatically' },
        { label: 'Uncertain / Sensitive', outcome: 'Escalate to Human' },
        { label: 'High-Value Decision', outcome: 'Human Review' }
      ]
    },
    security: {
      eyebrow: 'BUILT RESPONSIBLY',
      heading: 'Automation Should Reduce Risk, Not Create New Problems.',
      points: [
        'Access control',
        'Permissions',
        'Data minimization',
        'Secure API credentials',
        'Logging where appropriate',
        'Human review',
        'Privacy considerations',
        'Failure handling',
        'Fallback workflows',
        'Third-party platform limitations'
      ],
      closing: 'The appropriate security and privacy architecture depends on the systems, data, industry, and use case involved.'
    },
    transformation: {
      eyebrow: 'WORKFLOW TRANSFORMATION',
      heading: 'From Manual Chain to Connected System.',
      before: {
        title: 'BEFORE (Manual)',
        flow: ['Customer Enquiry', 'Manual Reading', 'Copy Information', 'Find Team Member', 'Send Email', 'Update Spreadsheet', 'Follow Up Manually']
      },
      after: {
        title: 'AFTER (Automated)',
        flow: ['Customer Enquiry', 'Automated Capture', 'Classification', 'CRM Update', 'Team Notification', 'Follow-Up Workflow', 'Human Handoff When Needed']
      }
    },
    measurement: {
      eyebrow: 'KNOW WHAT THE SYSTEM IS DOING',
      heading: 'Automation Should Be Observable.',
      description: 'We ensure you can track workflow completion, processing time, manual steps reduced, response time, errors, and human intervention rates.',
      metrics: [
        'Workflow completion',
        'Processing time',
        'Manual steps reduced',
        'Task volume',
        'Response time',
        'Errors and failed workflows',
        'Escalation rate',
        'Customer interactions',
        'Automation usage',
        'Human intervention'
      ]
    },
    process: [
      { number: '01', title: 'Discover', description: 'Understand how the business currently works.' },
      { number: '02', title: 'Map', description: 'Document the workflow, tools, decisions, inputs, outputs, and handoffs.' },
      { number: '03', title: 'Simplify', description: 'Remove unnecessary steps before introducing automation.' },
      { number: '04', title: 'Build', description: 'Configure workflows, integrations, AI systems, and supporting interfaces.' },
      { number: '05', title: 'Test', description: 'Test normal conditions, edge cases, errors, fallbacks, permissions, and human handoffs.' },
      { number: '06', title: 'Launch & Improve', description: 'Deploy the system and refine it based on real-world usage.' }
    ],
    deliverables: [
      'Workflow discovery and process mapping',
      'Automation strategy and workflow architecture',
      'Automation setup',
      'AI assistant/chatbot',
      'WhatsApp workflows',
      'Email automation and lead routing',
      'API integrations and CRM workflows',
      'Notifications and data synchronization',
      'Documentation, testing, and launch support',
      'Optimization recommendations'
    ],
    deliverablesDisclaimer: 'Exact deliverables depend on the workflow, platforms, integrations, technical complexity, and project scope.',
    relatedServices: ['web-design-development', 'ui-ux', 'digital-marketing', 'google-meta-ads', 'social-media', 'custom-digital-products'],
    whyOveqira: [
      { title: 'Strategy Before Execution', description: 'Understand the workflow before choosing the technology.' },
      { title: 'Built Around Your Business', description: 'Systems should fit the way the business actually operates.' },
      { title: 'Design That Has a Purpose', description: 'Customer-facing automation should still feel clear and human.' },
      { title: 'Performance Matters', description: 'Systems should be reliable, testable, and observable.' },
      { title: 'One Creative + Digital Team', description: 'Automation can connect with websites, marketing, design, content, and digital products.' },
      { title: 'Built for Long-Term Growth', description: 'Systems should be maintainable and adaptable as the business changes.' }
    ],
    faq: [
      { id: 'faq-1', question: 'What kind of business processes can you automate?', answer: 'Common examples include lead capture, notifications, email workflows, data synchronization, customer enquiries, reporting, repetitive internal tasks, and other structured processes.', featured: false, order: 1 },
      { id: 'faq-2', question: 'Do you only build AI solutions?', answer: 'No. Traditional automation can often be the better solution for predictable workflows. AI is used where it provides meaningful value.', featured: false, order: 2 },
      { id: 'faq-3', question: 'Can you build an AI chatbot for our website?', answer: 'Yes. AI chatbots can be designed for appropriate use cases such as FAQs, lead qualification, information retrieval, and customer guidance.', featured: false, order: 3 },
      { id: 'faq-4', question: 'Can you automate WhatsApp?', answer: 'Yes, where the required WhatsApp Business/API infrastructure and platform requirements are available.', featured: false, order: 4 },
      { id: 'faq-5', question: 'Can AI answer every customer question?', answer: 'No. AI systems should operate within defined knowledge and business boundaries and provide human escalation when appropriate.', featured: false, order: 5 },
      { id: 'faq-6', question: 'Can you connect our CRM with our website?', answer: 'Potentially, depending on the CRM, available APIs, permissions, and technical requirements.', featured: false, order: 6 },
      { id: 'faq-7', question: 'Can you connect multiple tools?', answer: 'Yes, where appropriate integrations or APIs are available.', featured: false, order: 7 },
      { id: 'faq-8', question: 'Will automation remove the need for employees?', answer: 'The goal is not necessarily to replace people. Automation can handle repetitive or predictable work while people remain responsible for judgment, relationships, and complex decisions.', featured: false, order: 8 },
      { id: 'faq-9', question: 'Can you automate lead follow-up?', answer: 'Yes. Lead workflows can capture, route, notify, and follow up with prospects according to the defined process.', featured: false, order: 9 },
      { id: 'faq-10', question: 'Can you integrate AI with existing systems?', answer: 'Potentially. Integration depends on the systems, APIs, access, data structure, and use case.', featured: false, order: 10 },
      { id: 'faq-11', question: 'How secure is an AI automation system?', answer: 'Security depends on the architecture, platforms, data involved, permissions, credentials, and implementation. Security and privacy requirements should be considered during system design.', featured: false, order: 11 },
      { id: 'faq-12', question: 'Can you maintain the automation after launch?', answer: 'Ongoing maintenance and optimization can be scoped depending on the system and engagement model.', featured: false, order: 12 }
    ],
    cta: {
      heading: 'Let\'s Find the Work Your Business Shouldn\'t Have to Do Manually.',
      description: 'Tell us about the process that keeps consuming time, the tools involved, and what you wish happened automatically. We\'ll help determine whether automation, AI, integration, or a simpler process is the right answer.',
      primaryLabel: 'Automate a Workflow',
      secondaryLabel: 'Talk to Oveqira'
    },
    seo: {
      title: 'AI & Automation Services | Oveqira',
      description: 'Oveqira builds practical AI and automation systems including chatbots, WhatsApp workflows, email automation, API integrations, lead workflows, and business process automation.'
    }
  }
];

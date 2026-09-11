import * as fs from 'fs';
let content = fs.readFileSync('src/data/services.ts', 'utf-8');

const newData = `
  {
    id: "custom-digital-products",
    number: "09",
    slug: "custom-digital-products",
    title: "Custom Digital Products",
    eyebrow: "CUSTOM DIGITAL PRODUCTS",
    shortDescription: "Turn a Business Idea Into a Digital Product.",
    description: "We design and build custom digital products for businesses that need more than a standard website or off-the-shelf tool can provide.",
    additionalDescription: "From MVPs and web applications to dashboards, portals, internal systems, and custom platforms, Oveqira brings strategy, UX, design, development, integrations, and automation together.",
    icon: "layers",
    featured: true,
    order: 9,
    problem: {
      eyebrow: "WHEN STANDARD TOOLS STOP FITTING",
      heading: "Sometimes the Business Doesn't Fit the Software.",
      description: "Off-the-shelf tools can be excellent until the business needs something highly specific. Unique workflows, customer experiences, internal operations, integrations, or product ideas may require a system designed around the actual problem.",
      points: [
        { title: "Existing Tools Don't Fit", description: "The workflow may be too specific for generic software." },
        { title: "Too Many Disconnected Systems", description: "Teams may have to move information manually between multiple tools." },
        { title: "Manual Operations", description: "Important processes can become difficult to manage as volume grows." },
        { title: "Poor Customer Experience", description: "Generic tools may force customers through workflows that don't fit the business." },
        { title: "Product Idea With No Technical Path", description: "A strong concept still needs structure, UX, technology, and execution." },
        { title: "Growing Complexity", description: "What worked at small scale may become inefficient as users, data, and processes increase." }
      ]
    },
    websiteVsProduct: {
      eyebrow: "NOT EVERY PROJECT NEEDS CUSTOM SOFTWARE",
      heading: "Know When a Website Stops Being Enough.",
      website: {
        points: ["communicating information", "establishing credibility", "presenting services/products", "generating enquiries", "publishing content", "supporting marketing"],
        examples: ["business website", "service website", "portfolio", "landing page", "corporate website"]
      },
      product: {
        points: ["user accounts", "workflows", "data", "transactions", "dashboards", "permissions", "recurring interactions", "business logic", "system integrations"],
        examples: ["SaaS product", "web application", "customer portal", "internal tool", "dashboard", "marketplace", "workflow platform"]
      },
      closing: "The right solution is the simplest system that effectively solves the problem."
    },
    approach: {
      eyebrow: "OUR APPROACH",
      heading: "Build the Right Product Before Building More Product.",
      description: "Custom software can become expensive quickly when requirements are unclear. We use product thinking to understand the problem, define the essential experience, validate assumptions, and build toward a practical first version.",
      points: [
        { title: "Understand", description: "Research the business problem, users, workflows, constraints, and objectives." },
        { title: "Define", description: "Identify the core problem, requirements, user journeys, and product scope." },
        { title: "Structure", description: "Design the product architecture, information structure, workflows, and technical direction." },
        { title: "Design", description: "Create UX, UI, responsive interfaces, and reusable components." },
        { title: "Build", description: "Develop the product, integrations, backend logic, and supporting infrastructure according to scope." },
        { title: "Learn", description: "Test, launch, gather feedback, and identify the next product improvements." }
      ],
      visualSequence: ["Problem", "Product Strategy", "UX", "Technology", "Launch", "Learning"]
    },
    productTypes: {
      eyebrow: "WHAT WE CAN BUILD",
      heading: "Digital Products Designed Around the Problem.",
      items: [
        { title: "MVPs", description: "Focused first versions designed to test an idea and establish the core product experience." },
        { title: "Web Applications", description: "Browser-based products with user interactions, workflows, data, and business logic." },
        { title: "SaaS Products", description: "Software products designed around recurring user needs and scalable workflows." },
        { title: "Customer Portals", description: "Secure digital spaces where customers can access information, services, workflows, or account functionality." },
        { title: "Internal Tools", description: "Custom systems designed to make internal business processes easier to manage." },
        { title: "Dashboards", description: "Interfaces that organize operational, business, or analytical information." },
        { title: "Business Platforms", description: "Purpose-built systems connecting multiple workflows, users, or operational processes." },
        { title: "Marketplaces", description: "Platforms connecting different user groups, listings, transactions, or workflows where appropriate." },
        { title: "Booking & Workflow Systems", description: "Custom experiences for scheduling, requests, approvals, and process management." },
        { title: "Data-Driven Applications", description: "Products that collect, organize, transform, display, or use business data." }
      ],
      note: "Do not claim that every product type is automatically included. Each product should be evaluated based on feasibility and scope."
    },
    productStrategy: {
      eyebrow: "PRODUCT THINKING",
      heading: "The Feature List Is Not the Product.",
      description: "A product becomes useful when its features work together to solve a meaningful problem. Before development, we focus on what users need to accomplish and what the business needs the product to achieve.",
      questions: [
        { question: "Who?", answer: "Who will use the product?" },
        { question: "Why?", answer: "What problem are they trying to solve?" },
        { question: "What?", answer: "What is the minimum functionality required?" },
        { question: "How?", answer: "What should the experience look and feel like?" },
        { question: "What Next?", answer: "How will the product evolve after the first version?" }
      ],
      visualSequence: "User Need + Business Goal + Feasibility = Product Direction"
    },
    mvp: {
      eyebrow: "START SMALL. LEARN EARLY.",
      heading: "Your First Version Doesn't Need to Do Everything.",
      description: "An MVP can help turn a broad product idea into a focused first version that tests the most important assumptions before significant resources are invested in unnecessary features.",
      stages: [
        { title: "Define the Core", description: "Identify the smallest useful version of the product." },
        { title: "Build the Essential Experience", description: "Focus development on the workflows that matter most." },
        { title: "Learn From Real Use", description: "Use feedback and evidence to decide what should come next." }
      ],
      closing: "MVP does not mean low quality. It means focused scope."
    },
    productUX: {
      eyebrow: "DESIGNED FOR REAL USERS",
      heading: "Complex Products Need Clear Experiences.",
      description: "Product UX is critical for ensuring user satisfaction and adoption.",
      points: [
        "user journeys", "information architecture", "onboarding", "authentication flows",
        "dashboards", "navigation", "forms", "search", "filtering", "notifications",
        "permissions", "empty states", "error states", "responsive behavior", "interaction design"
      ],
      link: { text: "Learn more about UI/UX Design", url: "/services/ui-ux" }
    },
    productDevelopment: {
      eyebrow: "FROM DESIGN TO FUNCTION",
      heading: "Turn the Product Experience Into Working Software.",
      description: "Once the product direction and experience are defined, development turns those decisions into functional systems.",
      areas: [
        "frontend development", "backend development", "databases", "authentication",
        "user roles", "APIs", "integrations", "dashboards", "business logic",
        "notifications", "file handling", "search", "payments where appropriate",
        "analytics", "automation"
      ],
      note: "Only include functionality relevant to the project. Do not imply every technology or feature is part of every build."
    },
    integrations: {
      eyebrow: "CONNECTED PRODUCTS",
      heading: "Your Product Doesn't Have to Live Alone.",
      description: "Custom products often need to exchange information with other systems. APIs and integrations can connect the product with existing business tools and services.",
      categories: [
        "CRM", "payment systems", "email", "WhatsApp", "analytics", "authentication providers",
        "databases", "third-party APIs", "internal systems", "automation platforms"
      ],
      closing: "Available integrations depend on the third-party platform, API availability, permissions, security requirements, and technical constraints."
    },
    productAI: {
      eyebrow: "INTELLIGENT PRODUCTS",
      heading: "Add Intelligence Where It Creates Real Value.",
      applications: [
        { title: "AI Assistance", description: "Help users understand, search, summarize, or interact with information." },
        { title: "Intelligent Classification", description: "Categorize incoming information or requests." },
        { title: "Recommendations", description: "Support appropriate recommendation workflows." },
        { title: "Content Generation", description: "Assist with structured content creation where suitable." },
        { title: "Workflow Automation", description: "Move predictable processes forward automatically." },
        { title: "Smart Search", description: "Help users find relevant information through natural-language interaction where appropriate." }
      ],
      closing: "AI should be introduced where it improves the product. It should not exist simply because the product can use AI.",
      link: { text: "Learn more about AI & Automation", url: "/services/ai-automation" }
    },
    scalability: {
      eyebrow: "BUILD FOR THE NEXT VERSION",
      heading: "A Product Should Be Able to Evolve.",
      considerations: [
        "reusable components", "modular architecture", "structured code", "clear data models",
        "API boundaries", "documentation", "environment configuration", "testing",
        "monitoring", "maintainable workflows"
      ],
      closing: "The appropriate architecture depends on the product's current requirements and expected growth. Do not over-engineer early-stage products unnecessarily."
    },
    security: {
      eyebrow: "TRUST IS PART OF THE PRODUCT",
      heading: "User Data and Access Need Thoughtful Design.",
      points: [
        "authentication", "authorization", "role-based access", "secure credentials",
        "data validation", "input handling", "secure API communication", "session management",
        "logging where appropriate", "backups", "error handling", "privacy considerations"
      ],
      closing: "Security requirements should be considered according to the type of product, data involved, users, infrastructure, and applicable obligations."
    },
    processSection: {
      eyebrow: "THE PROCESS",
      heading: "From Idea to Working Product.",
      steps: [
        { number: "01", title: "Discover", description: "Understand the problem, users, business, and constraints." },
        { number: "02", title: "Define", description: "Establish the core product requirements and priorities." },
        { number: "03", title: "Structure", description: "Create user flows, information architecture, product logic, and technical direction." },
        { number: "04", title: "Design", description: "Develop UX, UI, responsive layouts, components, and key interactions." },
        { number: "05", title: "Develop", description: "Build the product and its supporting systems." },
        { number: "06", title: "Test", description: "Test functionality, usability, responsiveness, integrations, errors, and key workflows." },
        { number: "07", title: "Launch & Learn", description: "Deploy the product, gather feedback, and define the next improvements." }
      ]
    },
    productRoadmap: {
      eyebrow: "BUILD IN PHASES",
      heading: "A Strong Product Can Grow One Useful Version at a Time.",
      phases: [
        { phase: "PHASE 01", title: "Core Product", description: "Essential problem-solving functionality." },
        { phase: "PHASE 02", title: "Improve", description: "User feedback, usability, reliability, and important refinements." },
        { phase: "PHASE 03", title: "Expand", description: "Additional features, workflows, integrations, or user capabilities." },
        { phase: "PHASE 04", title: "Scale", description: "Performance, infrastructure, automation, analytics, and broader product requirements where necessary." }
      ],
      note: "This is a conceptual framework. Actual product roadmaps vary by project."
    },
    deliverables: [
      "product discovery", "requirements definition", "product strategy", "user flows",
      "information architecture", "UX design", "UI design", "design system", "prototype",
      "frontend development", "backend development", "database architecture", "authentication",
      "user roles", "API integrations", "third-party integrations", "dashboards", "testing",
      "deployment support", "technical documentation", "post-launch improvement planning"
    ],
    deliverablesDisclaimer: "Exact deliverables depend on the product, technical requirements, scope, timeline, and project phase.",
    relatedServices: [
      "ui-ux", "web-design-development", "ai-automation", "digital-marketing", "google-meta-ads", "seo", "social-media", "photography-videography"
    ],
    whyOveqira: [
      { heading: "Strategy Before Execution", description: "Understand the problem before building features." },
      { heading: "Built Around Your Business", description: "The product should fit the workflow rather than forcing the workflow to fit the software." },
      { heading: "Design That Has a Purpose", description: "User experience should make complex functionality easier to understand." },
      { heading: "Performance Matters", description: "Products need to work reliably for real users." },
      { heading: "One Creative + Digital Team", description: "Strategy, UX, development, automation, content, and marketing can connect." },
      { heading: "Built for Long-Term Growth", description: "Build a foundation that can evolve as the product learns." }
    ],
    faq: [
      { question: "What is a custom digital product?", answer: "It is a purpose-built software experience designed around a specific business, customer, operational, or market problem." },
      { question: "Do I need custom software?", answer: "Not necessarily. If an existing tool can solve the problem effectively, it may be a better option. Custom development makes more sense when the requirements are sufficiently specific or strategic." },
      { question: "Can you build an MVP?", answer: "Yes. MVP development can focus on validating the core product idea with a deliberately focused first version." },
      { question: "Can you build SaaS products?", answer: "Yes, where the project's requirements and scope are appropriate." },
      { question: "Can you build dashboards and internal tools?", answer: "Yes. Custom dashboards and internal applications can be designed around specific workflows and data needs." },
      { question: "Can you build customer portals?", answer: "Yes. Customer-facing portals can be developed around appropriate account, information, workflow, and access requirements." },
      { question: "Can you integrate third-party APIs?", answer: "Yes, where suitable APIs, permissions, and technical access are available." },
      { question: "Can you add AI to a digital product?", answer: "Yes. AI can be incorporated where it provides meaningful product value." },
      { question: "Can you redesign an existing digital product?", answer: "Yes. Existing products can be audited, redesigned, restructured, or rebuilt depending on the situation." },
      { question: "Do you provide both design and development?", answer: "Yes. Oveqira can connect product strategy, UX/UI design, and development within the same engagement where appropriate." },
      { question: "How long does a custom product take to build?", answer: "There is no universal timeline. Complexity, scope, integrations, number of user roles, design requirements, technical architecture, testing, and revisions all affect the schedule." },
      { question: "How much does custom software cost?", answer: "Cost depends heavily on scope and complexity. A clear estimate can be developed after understanding the product requirements." },
      { question: "Can you continue developing the product after launch?", answer: "Ongoing maintenance, improvements, new features, and product development can be scoped separately or as a continuing engagement." }
    ],
    cta: {
      eyebrow: "HAVE AN IDEA?",
      heading: "Let's Turn the Right Idea Into the Right Product.",
      description: "Tell us what you're trying to build, what problem it solves, who will use it, and where the idea currently stands. We'll help determine the right product direction and the most practical next step.",
      primaryButton: { text: "Build a Digital Product", url: "/contact" },
      secondaryButton: { text: "Discuss Your Idea", url: "/contact" }
    },
    seo: {
      title: "Custom Digital Product Development | Oveqira",
      description: "Oveqira designs and develops custom digital products including MVPs, web applications, SaaS products, dashboards, portals, internal tools, and business platforms.",
      canonical: "/services/custom-digital-products",
      ogTitle: "Custom Digital Products | Oveqira",
      ogDescription: "From product strategy and UX to development, integrations, automation, and launch, we build digital products around real business problems."
    }
  }
`;

content = content.replace('export const services: Service[] = [', 'export const services: Service[] = [\n' + newData + ',');
fs.writeFileSync('src/data/services.ts', content);

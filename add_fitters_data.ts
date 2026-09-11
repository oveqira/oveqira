import * as fs from 'fs';

// 1. PROJECTS
let projectsContent = fs.readFileSync('src/data/projects.ts', 'utf-8');
const projectToAdd = `  {
    id: "the-fitters",
    number: "03",
    title: "The Fitters",
    slug: "the-fitters",
    client: "Chandan Kushwaha",
    brand: "The Fitters",
    type: "client",
    status: "completed",
    featured: true,
    categories: [
      "website",
      "seo",
      "digital-marketing",
      "social-media",
      "content",
      "branding"
    ],
    services: [
      "Web Design & Development",
      "Landing Page",
      "SEO",
      "Meta Ads",
      "Social Media Marketing & Management",
      "Content Creation",
      "Branding & Logo Design",
      "Maintenance & Support"
    ],
    shortDescription:
      "A premium digital presence developed for The Fitters across website, SEO, marketing, social media, content, and branding.",
    description:
      "OVEQIRA worked with The Fitters to develop a premium digital presence for its home decoration and furniture business, combining website development with SEO, Meta Ads, social media management, content creation, branding, and ongoing support.",
    caseStudyReady: true,
    coverImage: "",
    gallery: []
  }`;

projectsContent = projectsContent.replace(/\];$/, `,\n${projectToAdd}\n];`);
fs.writeFileSync('src/data/projects.ts', projectsContent);


// 2. CASE STUDIES
let caseStudiesContent = fs.readFileSync('src/data/caseStudies.ts', 'utf-8');
const caseStudyToAdd = `  {
    id: "the-fitters",
    projectId: "the-fitters",
    title: "Building a Premium Digital Presence for The Fitters",
    client: "Chandan Kushwaha",
    brand: "The Fitters",
    overview: "The Fitters is a home decoration and furniture business offering premium flooring, carpets, chairs, wall wallpapers, and interior solutions. OVEQIRA worked across its digital presence to create a more polished platform for presenting the business, its offerings, and its work to potential customers.",
    challenge: {
      title: "Creating a Stronger Digital Presence",
      description: "The Fitters needed a premium online presence that could present its products, services, and work professionally while creating clearer opportunities for visitors to enquire and connect with the business. This required a professional website, product and service presentation, work showcase, clear enquiry pathways, WhatsApp communication, search visibility, digital marketing support, and consistent brand presentation.",
      verified: true
    },
    approach: {
      title: "From Brand Presence to Digital Growth",
      description: "OVEQIRA approached the project as a connected digital system rather than treating the website as an isolated deliverable. We structured the work across six phases: 01 — Understand the business, products, services, audience, and project goals; 02 — Position to create a premium digital direction aligned with the business and its offerings; 03 — Design to structure the website and visual experience around clarity, trust, and product/service presentation; 04 — Build to develop the website and landing-page experience; 05 — Connect to support the website with SEO, Meta Ads, social media, content, and branding; and 06 — Maintain to provide ongoing maintenance and support.",
      verified: true
    },
    solution: {
      title: "One Connected Digital Presence",
      description: "The solution brought multiple digital requirements together into one connected digital presence. This flowed from Branding to the Website and Landing Page, supported by SEO, Content, Social Media, and Meta Ads, leading ultimately to Enquiries.",
      verified: true
    },
    deliverables: [
      "Website Design & Development",
      "Landing Page",
      "SEO",
      "Meta Ads",
      "Social Media Management",
      "Content Creation",
      "Branding & Logo Design",
      "Maintenance & Support"
    ],
    outcomes: [
      "Professional online presence",
      "Product and service presentation",
      "Dedicated website experience",
      "Digital enquiry pathways",
      "SEO foundation",
      "Marketing support",
      "Social media presence",
      "Ongoing technical support"
    ],
    metrics: [],
    testimonialId: "the-fitters-testimonial"
  }`;

caseStudiesContent = caseStudiesContent.replace(/\];$/, `,\n${caseStudyToAdd}\n];`);
fs.writeFileSync('src/data/caseStudies.ts', caseStudiesContent);


// 3. TESTIMONIALS
let testimonialsContent = fs.readFileSync('src/data/testimonials.ts', 'utf-8');
const testimonialToAdd = `  {
    id: "the-fitters-testimonial",
    client: "Chandan Kushwaha",
    name: "Chandan Kushwaha",
    role: "Founder",
    company: "The Fitters",
    quote: "OVEQIRA helped us build a professional digital presence for The Fitters, from the website and branding to SEO, social media, content, and digital marketing support. The team helped bring different parts of our online presence together in a much more structured way.",
    approved: false,
    projectId: "the-fitters",
    featured: true,
    order: 3
  }`;

testimonialsContent = testimonialsContent.replace(/\];$/, `,\n${testimonialToAdd}\n];`);
fs.writeFileSync('src/data/testimonials.ts', testimonialsContent);


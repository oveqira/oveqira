import * as fs from 'fs';

const newContent = `import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project-concept-alpha',
    number: '01',
    title: 'Brand Experience Website',
    slug: 'brand-experience-website',
    category: 'website',
    type: 'concept',
    industry: 'Financial Technology',
    shortDescription: 'A digital experience designed to make the brand clearer, more credible, and easier to engage with.',
    description: 'A complete overhaul of a legacy financial platform, focusing on user retention and transaction clarity through purposeful design and modern web architecture.',
    coverImage: '', 
    services: ['Web Design', 'UI/UX', 'Development', 'Content Strategy'],
    challenge: 'The legacy system suffered from complex navigation and outdated visual language, causing friction for both new and returning users.',
    approach: 'We began with a comprehensive UX audit, mapping user journeys to identify bottlenecks, then structured the information architecture around core user needs before applying a refined visual system.',
    solution: 'A fully responsive, high-performance web application featuring an intuitive dashboard, seamless onboarding flow, and a modular design system built for long-term scalability.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    year: '2024',
    featured: true,
    status: 'concept',
    seo: {
      title: 'Brand Experience Website | Selected Work | Oveqira',
      description: 'A conceptual digital experience designed to improve brand clarity and user engagement.',
    }
  },
  {
    id: 'project-concept-beta',
    number: '02',
    title: 'Digital Operations Dashboard',
    slug: 'digital-operations-dashboard',
    category: 'digital-product',
    type: 'concept',
    industry: 'Supply Chain & Logistics',
    shortDescription: 'A custom internal tool designed to organize operational data and improve workflow visibility.',
    description: 'When manual tracking tools stop scaling, a custom dashboard can provide the clarity and control needed to manage complex logistics operations efficiently.',
    coverImage: '', 
    services: ['UI/UX', 'Web Applications', 'Internal Tools'],
    challenge: 'Manual data entry across disparate systems led to operational blind spots, inefficient communication, and delayed decision-making.',
    approach: 'By collaborating closely with the operations team, we identified the most critical data points and designed an interface that surfaces actionable insights over raw data.',
    solution: 'A unified digital product that integrates multiple data sources into a single, clean dashboard, utilizing clear typography and data visualization to streamline daily operations.',
    technologies: ['Next.js', 'PostgreSQL', 'D3.js', 'REST APIs'],
    year: '2024',
    featured: true,
    status: 'concept',
    seo: {
      title: 'Digital Operations Dashboard | Selected Work | Oveqira',
      description: 'A conceptual internal tool designed to organize operational data and improve workflow visibility.',
    }
  },
  {
    id: 'project-concept-gamma',
    number: '03',
    title: 'Automated Lead Routing System',
    slug: 'automated-lead-routing-system',
    category: 'ai-automation',
    type: 'concept',
    industry: 'Professional Services',
    shortDescription: 'An intelligent workflow that categorizes and routes inbound enquiries to the appropriate team automatically.',
    description: 'Speed and context matter in professional services. This concept explores how AI and automation can seamlessly connect initial contact forms with internal CRM and notification systems.',
    coverImage: '', 
    services: ['AI & Automation', 'API Integrations', 'Workflow Architecture'],
    challenge: 'High volumes of inbound requests were previously sorted manually, leading to delayed response times and a disjointed initial customer experience.',
    approach: 'We designed a system that leverages natural language processing to understand the intent of incoming messages before routing them through predefined business rules.',
    solution: 'A silent, efficient backend workflow that captures form data, classifies the request type, updates the CRM, and alerts the correct department—all in real-time.',
    technologies: ['Node.js', 'OpenAI API', 'Zapier/Make', 'CRM Integration'],
    year: '2023',
    featured: true,
    status: 'concept',
    seo: {
      title: 'Automated Lead Routing | Selected Work | Oveqira',
      description: 'An automated workflow system concept for intelligent enquiry classification and routing.',
    }
  },
  {
    id: 'project-concept-delta',
    number: '04',
    title: 'Editorial Campaign Visuals',
    slug: 'editorial-campaign-visuals',
    category: 'photography',
    type: 'concept',
    industry: 'Lifestyle & Apparel',
    shortDescription: 'A premium visual direction focused on brand perception and commercial storytelling.',
    description: 'Visual content is a business asset. This concept demonstrates a cohesive photography direction designed to elevate brand perception and support a multi-channel digital campaign.',
    coverImage: '', 
    services: ['Commercial Photography', 'Creative Direction', 'Campaign Production'],
    challenge: 'The brand needed to shift its perception from utility to premium lifestyle, requiring a completely new visual language that could scale across web and social.',
    approach: 'Focusing on lighting, composition, and authentic environments, we developed a visual framework that prioritized narrative depth and high-end aesthetics.',
    solution: 'A robust library of editorial assets, ready for deployment across the e-commerce platform, social media channels, and paid acquisition campaigns.',
    technologies: ['Studio Lighting', 'Medium Format Digital', 'Capture One'],
    year: '2023',
    featured: false,
    status: 'concept',
    seo: {
      title: 'Editorial Campaign Visuals | Selected Work | Oveqira',
      description: 'A premium photography concept focused on commercial storytelling and brand perception.',
    }
  }
];
`;
fs.writeFileSync('src/data/projects.ts', newContent);

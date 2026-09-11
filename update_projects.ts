import * as fs from 'fs';

const content = `import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "bioxplo",
    number: "01",
    title: "BioXPLO",
    slug: "bioxplo",
    client: "Sanjay Kumar Gupta",
    brand: "BioXPLO",
    type: "client",
    status: "completed",
    featured: true,
    categories: [
      "website",
      "seo",
      "social-media",
      "content",
      "video"
    ],
    services: [
      "Web Design & Development",
      "Social Media Marketing & Management",
      "SEO",
      "Reel Editing",
      "Script Writing",
      "Article Writing"
    ],
    shortDescription: "A connected digital presence supported through website development, SEO, social media, short-form video, scripts, and articles.",
    description: "OVEQIRA worked with BioXPLO across website development, social media management, SEO, reel editing, script writing, and article writing.",
    caseStudyReady: true,
    coverImage: "",
    gallery: []
  },
  {
    id: "m-tech-digital-studio",
    number: "02",
    title: "M Tech Digital Studio",
    slug: "m-tech-digital-studio",
    client: "Aman Maurya",
    brand: "M Tech Digital Studio",
    type: "client",
    status: "completed",
    featured: true,
    categories: [
      "website"
    ],
    services: [
      "Web Design & Development"
    ],
    shortDescription: "A professional website designed and developed for M Tech Digital Studio.",
    description: "OVEQIRA designed and developed a website for M Tech Digital Studio.",
    caseStudyReady: true,
    coverImage: "",
    gallery: []
  }
];
`;

fs.writeFileSync('src/data/projects.ts', content);

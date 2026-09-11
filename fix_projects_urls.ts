import * as fs from 'fs';
let content = fs.readFileSync('src/data/projects.ts', 'utf-8');

// The Fitters
content = content.replace(
  'brand: "The Fitters",\n    type: "client",',
  'brand: "The Fitters",\n    type: "client",\n    websiteUrl: "https://thefitters.in",'
);

// BioXPLO
content = content.replace(
  'brand: "BioXPLO",\n    type: "client",',
  'brand: "BioXPLO",\n    type: "client",\n    websiteUrl: "https://bioxplo.com",'
);

// Add Maurya Printers
const mauryaProject = `,
  {
    id: "maurya-printers",
    number: "03",
    title: "Maurya Printers",
    slug: "maurya-printers",
    client: "Maurya Printers",
    brand: "Maurya Printers",
    type: "client",
    websiteUrl: "https://mauryaprinters.netlify.app/",
    status: "completed",
    industry: "Printing Services",
    featured: true,
    categories: [
      "website"
    ],
    services: [
      "Web Design & Development"
    ],
    shortDescription: "A dedicated digital presence built for Maurya Printers.",
    description: "OVEQIRA designed and developed a dedicated website for Maurya Printers, establishing their digital presence.",
    caseStudyReady: true,
    coverImage: "",
    gallery: []
  }
];`;

content = content.replace('\n];', mauryaProject);

fs.writeFileSync('src/data/projects.ts', content);

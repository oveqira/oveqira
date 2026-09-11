import * as fs from 'fs';
let content = fs.readFileSync('src/data/caseStudies.ts', 'utf-8');

const mauryaCaseStudy = `,
  {
    id: "maurya-printers",
    projectId: "maurya-printers",
    title: "Creating a Professional Digital Home for Maurya Printers",
    client: "Maurya Printers",
    brand: "Maurya Printers",
    overview: "OVEQIRA designed and developed a dedicated website for Maurya Printers.",
    challenge: {
      title: "The Challenge",
      description: "Maurya Printers needed a dedicated website to establish its digital presence and provide a professional online destination for the brand.",
      verified: true
    },
    approach: {
      title: "The Approach",
      description: "OVEQIRA focused on creating a clear, professional website experience around the identity and requirements of Maurya Printers.",
      verified: true
    },
    solution: {
      title: "The Solution",
      description: "OVEQIRA designed and developed a dedicated website for Maurya Printers.",
      verified: true
    },
    deliverables: [
      "Website Design",
      "Website Development"
    ],
    outcomes: [
      "Dedicated website presence"
    ],
    metrics: [],
    testimonialId: "maurya-printers-testimonial"
  }
];`;

content = content.replace('\n];', mauryaCaseStudy);
fs.writeFileSync('src/data/caseStudies.ts', content);

let testimonialsContent = fs.readFileSync('src/data/testimonials.ts', 'utf-8');
const mauryaTestimonial = `,
  {
    id: "maurya-printers-testimonial",
    client: "Aman Maurya",
    name: "Aman Maurya",
    company: "Maurya Printers",
    quote: "OVEQIRA helped us create a professional website for Maurya Printers and handled the website development process from design through implementation. The result gives our studio a dedicated digital presence that we can build on.",
    approved: false,
    projectId: "maurya-printers",
    featured: true,
    order: 3
  }
];`;

testimonialsContent = testimonialsContent.replace('\n];', mauryaTestimonial);
fs.writeFileSync('src/data/testimonials.ts', testimonialsContent);

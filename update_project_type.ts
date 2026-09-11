import * as fs from 'fs';
let content = fs.readFileSync('src/types/index.ts', 'utf-8');

const regex = /export interface Project \{[\s\S]*?\n\}/;

const newProjectInterface = `export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: "website" | "ui-ux" | "branding" | "digital-marketing" | "social-media" | "photography" | "videography" | "ai-automation" | "digital-product" | string;
  type: "client" | "concept" | "internal";
  industry?: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  gallery?: string[];
  services: string[];
  challenge?: string;
  approach?: string;
  solution?: string;
  outcome?: string;
  technologies?: string[];
  year?: string;
  testimonial?: {
    quote: string;
    name: string;
    role?: string;
  };
  featured?: boolean;
  status?: "completed" | "ongoing" | "concept";
  seo?: {
    title: string;
    description: string;
    ogImage?: string;
  };
}`;

content = content.replace(regex, newProjectInterface);
fs.writeFileSync('src/types/index.ts', content);

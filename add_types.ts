import * as fs from 'fs';

let content = fs.readFileSync('src/types/index.ts', 'utf-8');

const newTypes = `
export interface ServiceContentPillars {
  eyebrow?: string;
  heading: string;
  pillars: { title: string; description: string }[];
  closing?: string;
}

export interface ServicePlatformStrategy {
  eyebrow?: string;
  heading: string;
  platforms: { name: string; description: string }[];
  closing: string;
}

export interface ServiceContentProduction {
  eyebrow?: string;
  heading: string;
  description: string;
  areas: string[];
  link: { text: string; url: string };
}

export interface ServiceContentSystem {
  eyebrow?: string;
  heading: string;
  stages: { title: string; description: string }[];
}

export interface ServiceBrandConsistency {
  eyebrow?: string;
  heading: string;
  description: string;
  areas: string[];
}

export interface ServiceBusinessJourney {
  eyebrow?: string;
  heading: string;
  path: string[];
  description: string;
  outcomes: string[];
}

export interface ServiceSocialAnalytics {
  eyebrow?: string;
  heading: string;
  metrics: string[];
  description: string;
}

export interface ServiceContentFormats {
  eyebrow?: string;
  heading: string;
  formats: { title: string; description: string }[];
}
`;

content = content.replace('export interface Service {', newTypes + '\nexport interface Service {');

const insertProps = `  contentPillars?: ServiceContentPillars;
  platformStrategy?: ServicePlatformStrategy;
  contentProduction?: ServiceContentProduction;
  contentSystem?: ServiceContentSystem;
  brandConsistency?: ServiceBrandConsistency;
  businessJourney?: ServiceBusinessJourney;
  socialAnalytics?: ServiceSocialAnalytics;
  contentFormats?: ServiceContentFormats;
`;

content = content.replace('adsBudget?: ServiceAdsBudget;', 'adsBudget?: ServiceAdsBudget;\n' + insertProps);

fs.writeFileSync('src/types/index.ts', content);

import * as fs from 'fs';
let content = fs.readFileSync('src/types/index.ts', 'utf-8');

const newTypes = `
export interface ServiceAiVsAutomation {
  eyebrow?: string;
  heading: string;
  description: string;
  automation: { title: string; points: string[]; example: string };
  ai: { title: string; points: string[]; example: string };
  closing: string;
}

export interface ServiceUseCases {
  eyebrow?: string;
  heading: string;
  cases: { title: string; flow: string[] }[];
}

export interface ServiceAiFeature {
  eyebrow?: string;
  heading: string;
  description: string;
  capabilities?: string[];
  limitations?: string[];
  workflows?: string[];
}

export interface ServiceIntegrations {
  eyebrow?: string;
  heading: string;
  description: string;
  categories: string[];
  closing: string;
}

export interface ServiceHumanInTheLoop {
  eyebrow?: string;
  heading: string;
  description: string;
  flowStart: string;
  check: string;
  paths: { label: string; outcome: string }[];
}

export interface ServiceSecurity {
  eyebrow?: string;
  heading: string;
  points: string[];
  closing: string;
}

export interface ServiceTransformation {
  eyebrow?: string;
  heading: string;
  before: { title: string; flow: string[] };
  after: { title: string; flow: string[] };
}

export interface ServiceMeasurement {
  eyebrow?: string;
  heading: string;
  indicators: string[];
}
`;

content = content.replace('export interface Service {', newTypes + '\nexport interface Service {');

const insertProps = `  aiVsAutomation?: ServiceAiVsAutomation;
  useCases?: ServiceUseCases;
  aiChatbots?: ServiceAiFeature;
  whatsappAutomation?: ServiceAiFeature;
  integrations?: ServiceIntegrations;
  humanInTheLoop?: ServiceHumanInTheLoop;
  security?: ServiceSecurity;
  transformation?: ServiceTransformation;
  measurement?: ServiceMeasurement;
`;

content = content.replace('visualPortfolio?: ServiceVisualPortfolio;', 'visualPortfolio?: ServiceVisualPortfolio;\n' + insertProps);

fs.writeFileSync('src/types/index.ts', content);

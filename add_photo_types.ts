import * as fs from 'fs';
let content = fs.readFileSync('src/types/index.ts', 'utf-8');

const newTypes = `
export interface ServiceCapabilityGrid {
  eyebrow?: string;
  heading: string;
  items: { title: string; description: string }[];
}

export interface ServiceMultiChannelContent {
  eyebrow?: string;
  heading: string;
  description: string;
  flowStart: string;
  channels: string[];
  closing: string;
}

export interface ServiceCreativeDirection {
  eyebrow?: string;
  heading: string;
  description: string;
  areas: string[];
}

export interface ServiceSocialFirstProduction {
  eyebrow?: string;
  heading: string;
  description: string;
  formats: string[];
}

export interface ServiceCommercialPurpose {
  eyebrow?: string;
  heading: string;
  purposes: { title: string; description: string }[];
  closing: string;
}

export interface ServiceProductionTypes {
  eyebrow?: string;
  heading: string;
  types: { title: string; description: string }[];
}

export interface ServiceVisualPortfolio {
  eyebrow?: string;
  heading: string;
  images: { span?: string; label?: string }[];
}
`;

content = content.replace('export interface Service {', newTypes + '\nexport interface Service {');

const insertProps = `  photographyCapabilities?: ServiceCapabilityGrid;
  videographyCapabilities?: ServiceCapabilityGrid;
  multiChannelContent?: ServiceMultiChannelContent;
  creativeDirection?: ServiceCreativeDirection;
  socialFirstProduction?: ServiceSocialFirstProduction;
  commercialPurpose?: ServiceCommercialPurpose;
  productionTypes?: ServiceProductionTypes;
  visualPortfolio?: ServiceVisualPortfolio;
`;

content = content.replace('contentFormats?: ServiceContentFormats;', 'contentFormats?: ServiceContentFormats;\n' + insertProps);

fs.writeFileSync('src/types/index.ts', content);

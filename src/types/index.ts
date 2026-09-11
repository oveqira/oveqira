export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  websiteUrl: string;
  copyright: string;
  defaultSeo: {
    title: string;
    description: string;
    ogImage: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  order: number;
}

export interface NavigationItem {
  label: string;
  path: string;
  order: number;
}

export interface ServiceProblem {
  eyebrow?: string;
  heading: string;
  description: string;
  points: (string | { title: string; description: string })[];
  visualSequence?: string[];
}

export interface ServiceApproach {
  eyebrow?: string;
  heading: string;
  description: string;
  points: (string | { title: string; description: string })[];
}

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceType {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcess {
  number: string;
  title: string;
  description: string;
}

export interface ServiceWhyOveqira {
  title: string;
  description: string;
}

export interface ServiceCTA {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export interface ServiceSEO {
  title: string;
  description: string;
  ogImage?: string;
}

export interface ServiceTechnology {
  heading: string;
  description: string;
  list: string[];
}

export interface ServiceUXUIExplainer {
  eyebrow?: string;
  heading: string;
  ux: {
    title: string;
    description: string;
    items: string[];
  };
  ui: {
    title: string;
    description: string;
    items: string[];
  };
  closing: string;
}

export interface ServiceDesignSystems {
  eyebrow?: string;
  heading: string;
  description: string;
  include: string[];
  supporting: string;
}

export interface ServiceDesignTransformation {
  eyebrow?: string;
  heading: string;
  before: string[];
  after: string[];
}

export interface ServiceTechnicalSEO {
  eyebrow?: string;
  heading: string;
  description: string;
  list: string[];
}

export interface ServiceContentStrategy {
  eyebrow?: string;
  heading: string;
  description: string;
  stages: { title: string; description: string }[];
}

export interface ServiceLocalSEO {
  eyebrow?: string;
  heading: string;
  description: string;
  list: string[];
}

export interface ServiceWebsiteExperience {
  eyebrow?: string;
  heading: string;
  description: string;
  intersections: { title: string; description: string }[];
  closing: string;
}

export interface ServiceMaturity {
  eyebrow?: string;
  heading: string;
  stages: { title: string; description: string }[];
}

export interface ServiceMeasurement {
  eyebrow?: string;
  heading: string;
  description: string;
  metrics: string[];
}


export interface ServiceChannelEcosystem {
  eyebrow?: string;
  heading: string;
  channels: { title: string; description: string }[];
  closing: string;
}

export interface ServiceAudiencePositioning {
  eyebrow?: string;
  heading: string;
  description: string;
  cards: { title: string; description: string }[];
}

export interface ServiceContentCreative {
  eyebrow?: string;
  heading: string;
  description: string;
  areas: string[];
  closing: string;
}

export interface ServicePaidOrganic {
  eyebrow?: string;
  heading: string;
  sections: { title: string; description: string }[];
  closing: string;
}

export interface ServiceConversionJourney {
  eyebrow?: string;
  heading: string;
  description: string;
  path: string[];
  elements: string[];
}


export interface ServicePlatformComparison {
  eyebrow?: string;
  heading: string;
  platforms: {
    name: string;
    positioning: string;
    description: string;
    areas: string[];
    strengths: string[];
  }[];
  closing: string;
}

export interface ServiceCampaignStructure {
  eyebrow?: string;
  heading: string;
  stages: { title: string; question: string }[];
}

export interface ServiceAdsCreative {
  eyebrow?: string;
  heading: string;
  description: string;
  areas: string[];
  testing: {
    vs: { a: string; b: string }[];
    disclaimer: string;
  };
}

export interface ServiceLandingExperience {
  eyebrow?: string;
  heading: string;
  description: string;
  path: string[];
  considerations: string[];
  link: { text: string; url: string };
}

export interface ServiceAdsMeasurement {
  eyebrow?: string;
  heading: string;
  metrics: string[];
  technicalAreas: string[];
}

export interface ServiceAdsOptimization {
  eyebrow?: string;
  heading: string;
  description: string;
  categories: { title: string; description: string }[];
}

export interface ServiceAdsBudget {
  eyebrow?: string;
  heading: string;
  description: string;
  formula: string[];
  closing: string;
}


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



export interface ServiceWebsiteVsProduct {
  eyebrow?: string;
  heading: string;
  website: { points: string[]; examples: string[] };
  product: { points: string[]; examples: string[] };
  closing: string;
}

export interface ServiceProductTypes {
  eyebrow?: string;
  heading: string;
  items: { title: string; description: string }[];
  note: string;
}

export interface ServiceProductStrategy {
  eyebrow?: string;
  heading: string;
  description: string;
  questions: { question: string; answer: string }[];
  visualSequence: string;
}

export interface ServiceMVP {
  eyebrow?: string;
  heading: string;
  description: string;
  stages: { title: string; description: string }[];
  closing: string;
}

export interface ServiceProductUX {
  eyebrow?: string;
  heading: string;
  description: string;
  points: string[];
  link: { text: string; url: string };
}

export interface ServiceProductDevelopment {
  eyebrow?: string;
  heading: string;
  description: string;
  areas: string[];
  note: string;
}

export interface ServiceProductAI {
  eyebrow?: string;
  heading: string;
  applications: { title: string; description: string }[];
  closing: string;
  link: { text: string; url: string };
}

export interface ServiceScalability {
  eyebrow?: string;
  heading: string;
  considerations: string[];
  closing: string;
}

export interface ServiceProcessSection {
  eyebrow?: string;
  heading: string;
  steps: ServiceProcess[];
}

export interface ServiceProductRoadmap {
  eyebrow?: string;
  heading: string;
  phases: { phase: string; title: string; description: string }[];
  note: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description?: string;
  additionalDescription?: string;
  icon?: string;
  featured: boolean;
  order: number;
  
  // Extended Service Page details
  eyebrow?: string;
  heroImage?: string;
  problem?: ServiceProblem;
  uxUiExplainer?: ServiceUXUIExplainer;
  approach?: ServiceApproach;
  capabilities?: ServiceCapability[];
  types?: ServiceType[];
  designSystems?: ServiceDesignSystems;
  technicalSEO?: ServiceTechnicalSEO;
  contentStrategy?: ServiceContentStrategy;
  localSEO?: ServiceLocalSEO;
  websiteExperience?: ServiceWebsiteExperience;
  channelEcosystem?: ServiceChannelEcosystem;
  audiencePositioning?: ServiceAudiencePositioning;
  contentCreative?: ServiceContentCreative;
  paidOrganic?: ServicePaidOrganic;
  conversion?: ServiceConversionJourney;
  platformComparison?: ServicePlatformComparison;
  campaignStructure?: ServiceCampaignStructure;
  adsCreative?: ServiceAdsCreative;
  landingExperience?: ServiceLandingExperience;
  adsMeasurement?: ServiceAdsMeasurement;
  adsOptimization?: ServiceAdsOptimization;
  adsBudget?: ServiceAdsBudget;
  contentPillars?: ServiceContentPillars;
  platformStrategy?: ServicePlatformStrategy;
  contentProduction?: ServiceContentProduction;
  contentSystem?: ServiceContentSystem;
  brandConsistency?: ServiceBrandConsistency;
  businessJourney?: ServiceBusinessJourney;
  socialAnalytics?: ServiceSocialAnalytics;
  contentFormats?: ServiceContentFormats;
  photographyCapabilities?: ServiceCapabilityGrid;
  videographyCapabilities?: ServiceCapabilityGrid;
  multiChannelContent?: ServiceMultiChannelContent;
  creativeDirection?: ServiceCreativeDirection;
  socialFirstProduction?: ServiceSocialFirstProduction;
  commercialPurpose?: ServiceCommercialPurpose;
  productionTypes?: ServiceProductionTypes;
  visualPortfolio?: ServiceVisualPortfolio;
  aiVsAutomation?: ServiceAiVsAutomation;
  useCases?: ServiceUseCases;
  aiChatbots?: ServiceAiFeature;
  whatsappAutomation?: ServiceAiFeature;
  integrations?: ServiceIntegrations;
  humanInTheLoop?: ServiceHumanInTheLoop;
  security?: ServiceSecurity;
  transformation?: ServiceTransformation;
  measurement?: ServiceMeasurement;
  websiteVsProduct?: ServiceWebsiteVsProduct;
  productTypes?: ServiceProductTypes;
  productStrategy?: ServiceProductStrategy;
  mvp?: ServiceMVP;
  productUX?: ServiceProductUX;
  productDevelopment?: ServiceProductDevelopment;
  productAI?: ServiceProductAI;
  scalability?: ServiceScalability;
  processSection?: ServiceProcessSection;
  productRoadmap?: ServiceProductRoadmap;

  maturity?: ServiceMaturity;




  benefits?: ServiceBenefit[];
  deliverables?: string[];
  deliverablesDisclaimer?: string;
  process?: ServiceProcess[];
  designTransformation?: ServiceDesignTransformation;
  technology?: ServiceTechnology;
  relatedServices?: string[];
  whyOveqira?: ServiceWhyOveqira[];
  faq?: FAQItem[];
  cta?: ServiceCTA;
  seo?: ServiceSEO;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;

  client: string;
  websiteUrl?: string;
  brand?: string;

  type: "client" | "concept" | "internal";

  services: string[];
  categories: string[];

  shortDescription: string;
  description: string;

  coverImage: string;
  gallery?: string[];

  challenge?: {
    heading: string;
    description: string;
    verified: boolean;
  };

  approach?: {
    heading: string;
    description: string;
    verified: boolean;
  };

  solution?: {
    heading: string;
    description: string;
    verified: boolean;
  };

  outcomes?: {
    verifiedMetrics: {
      label: string;
      value: string;
    }[];
    qualitativeOutcomes: string[];
  };

  testimonialId?: string;
  caseStudyReady: boolean;
  featured: boolean;
  status: "completed" | "ongoing";

  industry?: string; // keeping these for backward compatibility during transition if needed
  technologies?: string[];
  year?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  client?: string; // from prompt
  name?: string; // from earlier
  role?: string;
  company: string;
  image?: string;
  projectId?: string;
  approved: boolean;
  featured?: boolean;
  order?: number;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  featured: boolean;
  order: number;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  order: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  featured: boolean;
  order: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featuredImage?: string;
  featured: boolean;
  tags?: string[];
  seo?: {
    title?: string;
    description?: string;
  };
}

export interface CTAConfig {
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface CaseStudy {
  id: string;
  projectId: string;
  title: string;
  client: string;
  websiteUrl?: string;
  brand?: string;
  overview: string;
  challenge: {
    title: string;
    description: string;
    verified: boolean;
  };
  approach: {
    title: string;
    description: string;
    verified: boolean;
  };
  solution: {
    title: string;
    description: string;
    verified: boolean;
  };
  deliverables: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
  testimonialId?: string;
}

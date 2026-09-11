import { SiteConfig, CTAConfig } from '../types';

export const siteConfig = {
  brandName: 'OVEQIRA',
  tagline: 'Digital Growth Partner for Modern Businesses',
  description: 'OVEQIRA helps businesses build and grow through web design, development, UI/UX, SEO, digital marketing, automation, and creative solutions.',
  
  contact: {
    email: 'info@oveqira.com',
    whatsapp: '+919319123293',
    whatsappDisplay: '+91 93191 23293',
    phone: '+911205383914',
    phoneDisplay: '+91 120 538 3914'
  },
  
  // Legacy fields for backward compatibility if any components still use them directly
  email: 'info@oveqira.com',
  phone: '+91 120 538 3914',
  
  location: '[ADD LOCATION]',
  websiteUrl: 'https://oveqira.com',
  copyright: 'OVEQIRA. All rights reserved.',
  
  defaultSeo: {
    title: 'OVEQIRA | Digital Growth Partner for Modern Businesses',
    description: 'OVEQIRA helps businesses build and grow through web design, development, UI/UX, SEO, digital marketing, automation, and creative solutions.',
    ogImage: 'https://oveqira.com/og-image.jpg',
  },
};

export const ctaConfig: CTAConfig = {
  primaryCta: {
    label: 'Start a Project',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Explore All Work',
    href: '/work',
  },
};

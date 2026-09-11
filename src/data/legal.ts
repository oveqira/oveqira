import { siteConfig } from './site';

export const legalConfig = {
  lastUpdated: "8 September 2026",
  companyName: siteConfig.brandName,
  jurisdiction: "[INSERT APPLICABLE JURISDICTION]",
  disputeResolution: "[INSERT CONFIRMED PROCESS]",
  contactEmail: siteConfig.contact.email,
  
  privacy: {
    title: "Privacy Policy",
    route: "/privacy-policy",
    contactEmail: siteConfig.contact.email
  },
  
  terms: {
    title: "Terms & Conditions",
    route: "/terms"
  },
  
  cookies: {
    title: "Cookie Policy",
    route: "/cookie-policy"
  },
  
  refund: {
    title: "Refund & Cancellation Policy",
    route: "/refund-policy",
    requestEmail: siteConfig.contact.email
  },
  
  disclaimer: {
    title: "Disclaimer",
    route: "/disclaimer"
  }
};

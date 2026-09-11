import { NavigationItem } from '../types';

export const navigationLinks: NavigationItem[] = [
  { label: 'Home', path: '/', order: 1 },
  { label: 'Services', path: '/services', order: 2 },
  { label: 'Work', path: '/work', order: 3 },
  { label: 'About', path: '/about', order: 4 },
  { label: 'Blog', path: '/blog', order: 5 },
  { label: 'Contact', path: '/contact', order: 6 },
];

export const footerNavigation: NavigationItem[] = [
  { label: 'Home', path: '/', order: 1 },
  { label: 'About', path: '/about', order: 2 },
  { label: 'Services', path: '/services', order: 3 },
  { label: 'Work', path: '/work', order: 4 },
  { label: 'Blog', path: '/blog', order: 5 },
  { label: 'Contact', path: '/contact', order: 6 },
];

export const footerResources: NavigationItem[] = [
  { label: 'Blog', path: '/blog', order: 1 },
  { label: 'Case Studies', path: '/work', order: 2 },
  { label: 'FAQ', path: '/#faq', order: 3 },
];

export const footerLegal: NavigationItem[] = [
  { label: 'Privacy Policy', path: '/privacy-policy', order: 1 },
  { label: 'Terms & Conditions', path: '/terms', order: 2 },
  { label: 'Cookie Policy', path: '/cookie-policy', order: 3 },
  { label: 'Refund Policy', path: '/refund-policy', order: 4 },
  { label: 'Disclaimer', path: '/disclaimer', order: 5 }
];

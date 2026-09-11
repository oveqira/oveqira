import * as fs from 'fs';
let content = fs.readFileSync('src/data/navigation.ts', 'utf-8');

const regex = /export const footerLegal: NavigationItem\[\] = \[\s*\{ label: 'Privacy Policy'[\s\S]*?\];/;

const newLegal = `export const footerLegal: NavigationItem[] = [
  { label: 'Privacy Policy', path: '/privacy-policy', order: 1 },
  { label: 'Terms & Conditions', path: '/terms-conditions', order: 2 },
  { label: 'Cookie Policy', path: '/cookie-policy', order: 3 },
  { label: 'Refund & Cancellation Policy', path: '/refund-policy', order: 4 },
  { label: 'Disclaimer', path: '/disclaimer', order: 5 }
];`;

content = content.replace(regex, newLegal);
fs.writeFileSync('src/data/navigation.ts', content);

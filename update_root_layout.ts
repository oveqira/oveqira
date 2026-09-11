import * as fs from 'fs';
let content = fs.readFileSync('src/components/layout/RootLayout.tsx', 'utf-8');

// Add imports
if (!content.includes('CookieBanner')) {
  content = content.replace(
    "import { GlobalFooter } from './GlobalFooter';", 
    "import { GlobalFooter } from './GlobalFooter';\nimport { CookieBanner } from './CookieBanner';\nimport { WhatsAppButton } from './WhatsAppButton';"
  );
  
  content = content.replace(
    '<GlobalFooter />',
    '<GlobalFooter />\n      <CookieBanner />\n      <WhatsAppButton />'
  );
  
  fs.writeFileSync('src/components/layout/RootLayout.tsx', content);
}

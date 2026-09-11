import * as fs from 'fs';
import * as path from 'path';

const pages = [
  'PrivacyPolicyPage.tsx',
  'TermsPage.tsx',
  'CookiePolicyPage.tsx',
  'RefundPolicyPage.tsx',
  'DisclaimerPage.tsx'
];

for (const page of pages) {
  const filePath = path.join('src/pages', page);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // We'll just replace anything that looks like "Last updated: <some date>"
    // or just hard replace it. Let's first check what's there.
    content = content.replace(/Last updated: [a-zA-Z0-9, ]+/gi, 'Last updated: 8 September 2026');
    fs.writeFileSync(filePath, content);
  }
}

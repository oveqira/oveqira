import * as fs from 'fs';
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf-8');

if (!content.includes('ClientCredibilitySection')) {
  content = content.replace(
    "import { IntroSection } from '../components/home/IntroSection';",
    "import { IntroSection } from '../components/home/IntroSection';\nimport { ClientCredibilitySection } from '../components/home/ClientCredibilitySection';"
  );
  
  content = content.replace(
    '</Section>',
    '</Section>\n      <ClientCredibilitySection />'
  );
  
  fs.writeFileSync('src/pages/HomePage.tsx', content);
}

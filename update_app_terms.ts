import * as fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add import
const importRegex = /import PrivacyPolicyPage from '\.\/pages\/PrivacyPolicyPage';/;
const newImport = `import PrivacyPolicyPage from './pages/PrivacyPolicyPage';\nimport TermsPage from './pages/TermsPage';`;
content = content.replace(importRegex, newImport);

// Add route
const routeRegex = /<Route path="\/privacy-policy" element=\{<PrivacyPolicyPage \/>\} \/>/;
const newRoute = `<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />\n            <Route path="/terms" element={<TermsPage />} />`;
content = content.replace(routeRegex, newRoute);

fs.writeFileSync('src/App.tsx', content);

import * as fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add import
const importRegex = /import TermsPage from '\.\/pages\/TermsPage';/;
const newImport = `import TermsPage from './pages/TermsPage';\nimport CookiePolicyPage from './pages/CookiePolicyPage';`;
content = content.replace(importRegex, newImport);

// Add route
const routeRegex = /<Route path="\/terms" element=\{<TermsPage \/>\} \/>/;
const newRoute = `<Route path="/terms" element={<TermsPage />} />\n            <Route path="/cookie-policy" element={<CookiePolicyPage />} />`;
content = content.replace(routeRegex, newRoute);

fs.writeFileSync('src/App.tsx', content);

import * as fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add import
const importRegex = /import CookiePolicyPage from '\.\/pages\/CookiePolicyPage';/;
const newImport = `import CookiePolicyPage from './pages/CookiePolicyPage';\nimport RefundPolicyPage from './pages/RefundPolicyPage';`;
content = content.replace(importRegex, newImport);

// Add route
const routeRegex = /<Route path="\/cookie-policy" element=\{<CookiePolicyPage \/>\} \/>/;
const newRoute = `<Route path="/cookie-policy" element={<CookiePolicyPage />} />\n            <Route path="/refund-policy" element={<RefundPolicyPage />} />`;
content = content.replace(routeRegex, newRoute);

fs.writeFileSync('src/App.tsx', content);

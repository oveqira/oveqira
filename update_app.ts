import * as fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add import
const importRegex = /import NotFoundPage from '\.\/pages\/NotFoundPage';/;
const newImport = `import NotFoundPage from './pages/NotFoundPage';\nimport PrivacyPolicyPage from './pages/PrivacyPolicyPage';`;
content = content.replace(importRegex, newImport);

// Add route
const routeRegex = /<Route path="\*" element=\{<NotFoundPage \/>\} \/>/;
const newRoute = `<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />\n            <Route path="*" element={<NotFoundPage />} />`;
content = content.replace(routeRegex, newRoute);

fs.writeFileSync('src/App.tsx', content);

import * as fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add import
const importRegex = /import RefundPolicyPage from '\.\/pages\/RefundPolicyPage';/;
const newImport = `import RefundPolicyPage from './pages/RefundPolicyPage';\nimport DisclaimerPage from './pages/DisclaimerPage';`;
content = content.replace(importRegex, newImport);

// Add route
const routeRegex = /<Route path="\/refund-policy" element=\{<RefundPolicyPage \/>\} \/>/;
const newRoute = `<Route path="/refund-policy" element={<RefundPolicyPage />} />\n            <Route path="/disclaimer" element={<DisclaimerPage />} />`;
content = content.replace(routeRegex, newRoute);

fs.writeFileSync('src/App.tsx', content);

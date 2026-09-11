import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/ClientCredibilitySection.tsx', 'utf-8');
content = content.replace(
  '<span className="font-semibold text-xl tracking-tight text-[var(--foreground)]">BioXPLO</span>',
  '<span className="font-semibold text-xl tracking-tight text-[var(--foreground)]">BioXPLO</span>\n            <span className="font-semibold text-xl tracking-tight text-[var(--foreground)]">Maurya Printers</span>'
);
fs.writeFileSync('src/components/home/ClientCredibilitySection.tsx', content);

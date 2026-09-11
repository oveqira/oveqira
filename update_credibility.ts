import * as fs from 'fs';

let content = fs.readFileSync('src/components/home/ClientCredibilitySection.tsx', 'utf-8');
content = content.replace(
  /<span className="font-semibold text-xl tracking-tight text-\[var\(--foreground\)\]">M Tech Digital Studio<\/span>/,
  '<span className="font-semibold text-xl tracking-tight text-[var(--foreground)]">M Tech Digital Studio</span>\n            <span className="font-semibold text-xl tracking-tight text-[var(--foreground)]">The Fitters</span>'
);

fs.writeFileSync('src/components/home/ClientCredibilitySection.tsx', content);

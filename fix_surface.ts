import * as fs from 'fs';

const files = [
  'src/components/home/ServicesSection.tsx',
  'src/components/home/ProcessSection.tsx',
  'src/components/home/CtaSection.tsx',
  'src/components/home/PrinciplesSection.tsx'
];

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/surface="dark"/g, '');
  // Fix background hardcodes if any
  content = content.replace(/bg-\[#11141A\]/g, 'bg-[var(--surface-hover)]');
  content = content.replace(/bg-\[#161B26\]/g, 'bg-[var(--surface-subtle)]');
  content = content.replace(/bg-\[#0A0C10\]/g, 'bg-[var(--surface-subtle)]');
  
  fs.writeFileSync(filePath, content);
});

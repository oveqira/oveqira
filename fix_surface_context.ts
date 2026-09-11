import * as fs from 'fs';

const files = [
  'src/components/design-system/ButtonSection.tsx',
  'src/components/layout/GlobalHeader.tsx',
  'src/components/home/ServicesSection.tsx',
  'src/components/home/CtaSection.tsx',
  'src/components/services/ServiceDetailBlocks.tsx',
  'src/pages/WorkPage.tsx',
  'src/pages/NotFoundPage.tsx',
  'src/pages/ContactPage.tsx'
];

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/ surfaceContext="dark"/g, '');
  content = content.replace(/surfaceContext="dark"/g, '');
  
  fs.writeFileSync(filePath, content);
});

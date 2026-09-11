import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/IntroSection.tsx', 'utf-8');

content = content.replace(/surface="dark"/g, '');
content = content.replace(/shadow-2xl/g, 'shadow-sm');
content = content.replace(/bg-tech-grid/g, 'bg-tech-grid-light');

content = content.replace(
  '<Eyebrow prefix="MORE THAN A SERVICE //">A Digital Growth Partner</Eyebrow>',
  '<Eyebrow>A DIGITAL GROWTH PARTNER</Eyebrow>'
);

fs.writeFileSync('src/components/home/IntroSection.tsx', content);

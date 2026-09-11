import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/TestimonialsSection.tsx', 'utf-8');

content = content.replace(/surface="dark"/g, '');
content = content.replace(/bg-\[#11141A\]/g, 'bg-[var(--surface-hover)]');
content = content.replace(/bg-\[#161B26\]/g, 'bg-[var(--surface)]');
content = content.replace(/group-hover:bg-\[#1A202C\]/g, 'group-hover:bg-[var(--surface-hover)]');
content = content.replace(
  '<Eyebrow prefix="OUR APPROACH //" hasIndicator indicatorColor="accent">Credibility</Eyebrow>',
  '<Eyebrow>CREDIBILITY</Eyebrow>'
);

fs.writeFileSync('src/components/home/TestimonialsSection.tsx', content);

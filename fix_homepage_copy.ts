import * as fs from 'fs';
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf-8');
content = content.replace(
  'Websites, design, SEO, marketing, content, AI automation, and digital products built around your business.',
  'OVEQIRA helps businesses build better websites, stronger digital brands, and smarter growth systems through strategy, design, technology, and digital marketing.'
);
fs.writeFileSync('src/pages/HomePage.tsx', content);

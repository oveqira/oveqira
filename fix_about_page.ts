import * as fs from 'fs';
let content = fs.readFileSync('src/pages/AboutPage.tsx', 'utf-8');

content = content.replace(/surface="dark"/g, '');

content = content.replace(
  '<Eyebrow prefix="IDENTITY //" hasIndicator indicatorColor="accent">About Oveqira</Eyebrow>',
  '<Eyebrow>ABOUT OVEQIRA</Eyebrow>'
);

content = content.replace(
  'Strategic.<br/>Modern.<br/>Human.',
  'Built for Business.'
);

content = content.replace(
  'We are a collective of digital architects, designers, and growth strategists dedicated to building premium digital experiences that drive real business value.',
  'Oveqira is a digital growth partner. We combine strategy, design, technology, and marketing to help businesses build stronger digital foundations.'
);

fs.writeFileSync('src/pages/AboutPage.tsx', content);

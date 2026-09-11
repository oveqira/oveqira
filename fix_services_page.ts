import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ServicesPage.tsx', 'utf-8');

content = content.replace(/surface="dark"/g, '');
content = content.replace(/bg-\[#11141A\]/g, 'bg-[var(--surface-hover)]');

content = content.replace(
  '<Eyebrow prefix="CAPABILITIES //" hasIndicator indicatorColor="accent">What We Do</Eyebrow>',
  '<Eyebrow>SERVICES</Eyebrow>'
);

content = content.replace(
  'Comprehensive<br/>Digital Growth.',
  'Capabilities.'
);

content = content.replace(
  'We provide end-to-end digital solutions designed to scale your business, optimize conversions, and elevate your brand\'s technical foundation.',
  'Strategy, design, technology, and marketing designed to help businesses grow.'
);

fs.writeFileSync('src/pages/ServicesPage.tsx', content);

import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/PrinciplesSection.tsx', 'utf-8');

const newPrinciples = `const PRINCIPLES = [
  {
    id: '01',
    title: 'Strategy First',
    description: 'We understand the business before building the solution.'
  },
  {
    id: '02',
    title: 'Built Around Your Brand',
    description: 'Every digital experience is designed around your identity and audience.'
  },
  {
    id: '03',
    title: 'One Connected Team',
    description: 'Strategy, design, development, marketing, content, and technology work together.'
  },
  {
    id: '04',
    title: 'Built for Growth',
    description: 'The goal is not simply to launch. It is to create a foundation that can grow with the business.'
  }
];`;

content = content.replace(/const PRINCIPLES = \[[\s\S]*?\];/, newPrinciples);

// Clean up the left column
content = content.replace(
  '<Eyebrow prefix="WHY OVEQIRA //">Differentiation</Eyebrow>',
  '<Eyebrow>WHY OVEQIRA</Eyebrow>'
);

content = content.replace(
  'Strategy Before Execution.',
  'Digital built for business.'
);

content = content.replace(
  'Great digital work isn\'t just about how it looks. It starts with understanding what the business needs to achieve.',
  'We focus on the intersection of strong design, technical capability, and clear business outcomes.'
);

fs.writeFileSync('src/components/home/PrinciplesSection.tsx', content);

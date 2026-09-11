import * as fs from 'fs';

let content = fs.readFileSync('src/data/projects.ts', 'utf-8');
content = content.replace(
  'type: "client",\n    status: "completed",',
  'type: "client",\n    status: "completed",\n    industry: "Home Decoration & Furniture",'
);
content = content.replace(
  'brand: "BioXPLO",\n    type: "client",\n    status: "completed",',
  'brand: "BioXPLO",\n    type: "client",\n    status: "completed",\n    industry: "Health & Wellness",'
);
content = content.replace(
  'brand: "M Tech Digital Studio",\n    type: "client",\n    status: "completed",',
  'brand: "M Tech Digital Studio",\n    type: "client",\n    status: "completed",\n    industry: "Digital Services",'
);
fs.writeFileSync('src/data/projects.ts', content);

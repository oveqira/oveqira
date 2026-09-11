import * as fs from 'fs';
let content = fs.readFileSync('src/data/projects.ts', 'utf-8');

// Fix BioXPLO
content = content.replace(
  'industry: "Health & Wellness",\n    industry: "Home Decoration & Furniture",',
  'industry: "Health & Wellness",'
);

// BioXPLO matched both `brand: "BioXPLO",\n    type: "client",\n    status: "completed",` replace, AND the global one `type: "client",\n    status: "completed",`
// Let's ensure The Fitters actually has the industry.
if (!content.includes('brand: "The Fitters",\n    type: "client",\n    status: "completed",\n    industry: "Home Decoration & Furniture",')) {
  content = content.replace(
    'brand: "The Fitters",\n    type: "client",\n    status: "completed",',
    'brand: "The Fitters",\n    type: "client",\n    status: "completed",\n    industry: "Home Decoration & Furniture",'
  );
}

fs.writeFileSync('src/data/projects.ts', content);

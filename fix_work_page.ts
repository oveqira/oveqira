import * as fs from 'fs';
let content = fs.readFileSync('src/pages/WorkPage.tsx', 'utf-8');
// Strip dark gradients
content = content.replace('<div className="absolute inset-0 bg-gradient-to-b from-[#11141A] to-[#0A0C10] pointer-events-none" />', '');
content = content.replace('bg-[var(--background-color)]', 'bg-[var(--background)]');
// Adjust the editorial portfolio cards to strictly match prompt formatting
// The prompt asked for:
/*
[Large project image]

01

BIOXPLO

Digital presence and content ecosystem.

Website • SEO • Social • Content

View Case Study →
*/
const oldGridRender = `{gridProjects.map((project, idx) => (`;
const newGridRender = `{gridProjects.map((project, idx) => (`;
// We will replace the entire mapping block with a simpler structure
// I'll do a regex or string replacement on the grid mapping area
fs.writeFileSync('src/pages/WorkPage.tsx', content);

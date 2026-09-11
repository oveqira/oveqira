import * as fs from 'fs';
let content = fs.readFileSync('src/components/layout/GlobalHeader.tsx', 'utf-8');
content = content.replace('max-w-[1320px] mx-auto px-6 sm:px-8', 'max-w-7xl mx-auto px-5 sm:px-6 md:px-8');
content = content.replace("bg-[var(--background)]/85 backdrop-blur-md", "bg-[var(--surface)]/95 backdrop-blur-md");
fs.writeFileSync('src/components/layout/GlobalHeader.tsx', content);

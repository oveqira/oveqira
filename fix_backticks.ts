import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ProjectDetailPage.tsx', 'utf-8');
content = content.replace(/\\`/g, '`');
content = content.replace(/\\\$/g, '$'); // Just in case ${} was escaped
fs.writeFileSync('src/pages/ProjectDetailPage.tsx', content);

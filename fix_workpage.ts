import * as fs from 'fs';
let content = fs.readFileSync('src/pages/WorkPage.tsx', 'utf-8');

// The error was caused by doing \${...} which translates to \${...} literally in TS, but the shell interpreted the EOF and we escaped the backticks. Wait, I used \` and \${ in the EOF.
// Actually, with cat << 'EOF', variable expansion is disabled, so we don't need to escape $ and `. I shouldn't have escaped them.

content = content.replace(/\\\`/g, '`');
content = content.replace(/\\\$/g, '$');

fs.writeFileSync('src/pages/WorkPage.tsx', content);

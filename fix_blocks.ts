import * as fs from 'fs';
let content = fs.readFileSync('src/components/services/ServiceDetailBlocks.tsx', 'utf-8');

// Undo the latest sed
content = content.replace(/bg-\[var\(--surface-hover\)\]">/g, 'bg-[var(--surface-hover)]');

// Now explicitly fix the ones that need closing quote and brace
content = content.replace(
  /bg-\[var\(--surface-hover\)\]\n        \{data\.channels\.map/g,
  'bg-[var(--surface-hover)]">\n        {data.channels.map'
);

content = content.replace(
  /bg-\[var\(--surface-hover\)\]\n          <div className="w-3 h-3/g,
  'bg-[var(--surface-hover)]">\n          <div className="w-3 h-3'
);

fs.writeFileSync('src/components/services/ServiceDetailBlocks.tsx', content);

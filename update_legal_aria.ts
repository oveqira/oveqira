import * as fs from 'fs';
let content = fs.readFileSync('src/components/legal/LegalPageLayout.tsx', 'utf-8');

content = content.replace(
  'className={`flex items-center gap-3 transition-colors ${isActive ? \'text-[var(--accent)] font-medium\' : \'text-[var(--foreground-muted)] hover:text-[var(--foreground)]\'}`}',
  'className={`flex items-center gap-3 transition-colors ${isActive ? \'text-[var(--accent)] font-medium\' : \'text-[var(--foreground-muted)] hover:text-[var(--foreground)]\'}`}\n                    aria-current={isActive ? "page" : undefined}'
);

fs.writeFileSync('src/components/legal/LegalPageLayout.tsx', content);

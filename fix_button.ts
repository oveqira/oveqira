import * as fs from 'fs';
let content = fs.readFileSync('src/components/ui/Button.tsx', 'utf-8');

content = content.replace(
  /const variantClasses = \{[\s\S]*?\};\n\n  const isTertiary/m,
  `const variantClasses = {
    primary: 'bg-[var(--button-primary)] text-white hover:bg-[var(--button-primary-hover)] active:scale-[0.99] border border-transparent shadow-sm hover:shadow-md',
    secondary: 'bg-[var(--button-secondary)] text-[var(--foreground)] border border-[var(--border-strong)] hover:border-[var(--foreground)] hover:bg-[#F7F8FA] active:scale-[0.99]',
    tertiary: 'bg-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)] p-0 border-b border-transparent hover:border-[var(--foreground)] rounded-none',
    ghost: 'bg-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] rounded-[4px]'
  };

  const isTertiary`
);

fs.writeFileSync('src/components/ui/Button.tsx', content);

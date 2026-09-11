import * as fs from 'fs';
import * as path from 'path';

function replaceBackgrounds(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/bg-\[#FFFFFF\]/g, 'bg-[var(--surface)]');
  content = content.replace(/bg-\[#F8F9FA\]/g, 'bg-[var(--surface-subtle)]');
  content = content.replace(/bg-\[#F7F8FA\]/g, 'bg-[var(--surface-hover)]');
  content = content.replace(/bg-\[#F3F4F6\]/g, 'bg-[var(--surface-hover)]');
  
  content = content.replace(/text-\[#0D1117\]/g, 'text-[var(--foreground)]');
  content = content.replace(/text-\[#4B5563\]/g, 'text-[var(--foreground-muted)]');
  content = content.replace(/text-\[#9CA3AF\]/g, 'text-[var(--foreground-subtle)]');
  
  content = content.replace(/border-\[#E2E4E8\]/g, 'border-[var(--border)]');
  content = content.replace(/border-\[#CBD1D9\]/g, 'border-[var(--border-strong)]');
  content = content.replace(/border-\[#E2E4E8\]\/80/g, 'border-[var(--border)]');
  
  content = content.replace(/surface-light/g, '');
  
  fs.writeFileSync(filePath, content);
}

const files = [
  'src/components/ui/Button.tsx',
  'src/components/ui/Textarea.tsx',
  'src/components/ui/Section.tsx',
  'src/components/ui/Input.tsx',
  'src/components/ui/Card.tsx',
  'src/components/ui/IconWrapper.tsx'
];

files.forEach(replaceBackgrounds);

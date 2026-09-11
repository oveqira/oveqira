import * as fs from 'fs';
import * as path from 'path';

function replaceBackgrounds(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/bg-\[#11141A\]/g, 'bg-[var(--surface-hover)]');
  content = content.replace(/bg-\[#161B26\]/g, 'bg-[var(--surface-subtle)]');
  content = content.replace(/bg-\[#0A0C10\]/g, 'bg-[var(--surface-subtle)]');
  content = content.replace(/bg-\[#0B0D11\]/g, 'bg-[var(--surface)]');
  content = content.replace(/bg-\[#141822\]/g, 'bg-[var(--surface-subtle)]');
  content = content.replace(/bg-\[#0E1117\]/g, 'bg-[var(--surface-subtle)]');
  content = content.replace(/bg-\[#0E1016\]/g, 'bg-[var(--surface-subtle)]');
  content = content.replace(/bg-\[#1F2430\]/g, 'bg-[var(--surface-hover)]');
  content = content.replace(/bg-\[#1C222F\]/g, 'bg-[var(--surface-hover)]');
  content = content.replace(/bg-\[#161922\]/g, 'bg-[var(--surface-hover)]');
  
  content = content.replace(/border-\[#1F2430\]/g, 'border-[var(--border)]');
  content = content.replace(/border-\[#2D3546\]/g, 'border-[var(--border-strong)]');
  content = content.replace(/border-\[#1F2430\]\/70/g, 'border-[var(--border)]');
  content = content.replace(/border-\[#2D3546\]\/60/g, 'border-[var(--border-strong)]');
  
  content = content.replace(/text-\[#F3F4F6\]/g, 'text-[var(--foreground)]');
  content = content.replace(/text-\[#E2E8F0\]/g, 'text-[var(--foreground)]');
  content = content.replace(/text-\[#94A3B8\]/g, 'text-[var(--foreground-muted)]');
  content = content.replace(/text-\[#64748B\]/g, 'text-[var(--foreground-subtle)]');
  
  content = content.replace(/surface-dark/g, '');
  content = content.replace(/surface="dark"/g, '');
  
  fs.writeFileSync(filePath, content);
}

const files = [
  'src/components/ui/Badge.tsx',
  'src/components/ui/Textarea.tsx',
  'src/components/ui/Section.tsx',
  'src/components/ui/Typography.tsx',
  'src/components/ui/TechnicalFrame.tsx',
  'src/components/ui/ImageContainer.tsx',
  'src/components/ui/Input.tsx',
  'src/components/ui/Card.tsx',
  'src/components/ui/IconWrapper.tsx',
  'src/components/home/FaqSection.tsx',
  'src/components/home/InsightsSection.tsx',
  'src/components/home/IndustriesSection.tsx',
  'src/pages/CookiePolicyPage.tsx',
  'src/components/legal/LegalPageLayout.tsx',
  'src/pages/DesignSystemApp.tsx'
];

files.forEach(replaceBackgrounds);

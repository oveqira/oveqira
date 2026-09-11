import * as fs from 'fs';
let content = fs.readFileSync('src/components/legal/LegalPageLayout.tsx', 'utf-8');

// Add noticeText to interface
content = content.replace(
  '  children: ReactNode;\n}',
  '  children: ReactNode;\n  noticeText?: ReactNode;\n}'
);

// Add noticeText to props
content = content.replace(
  '= ({ title, lastUpdated, intro, children }) => {',
  '= ({ title, lastUpdated, intro, children, noticeText }) => {'
);

// Replace hardcoded notice
const oldNotice = `This Privacy Policy is provided for general website and business use and should be reviewed and adapted to OVEQIRA's actual data practices and applicable legal requirements before publication.`;
const newNoticeCode = `{noticeText || "This Privacy Policy is provided for general website and business use and should be reviewed and adapted to OVEQIRA's actual data practices and applicable legal requirements before publication."}`;
content = content.replace(oldNotice, newNoticeCode);

fs.writeFileSync('src/components/legal/LegalPageLayout.tsx', content);

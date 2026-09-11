import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ProjectDetailPage.tsx', 'utf-8');

const replacement = `      } else if (project.id === 'the-fitters') {
        document.title = 'The Fitters | OVEQIRA Case Study';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', 'See how OVEQIRA developed a premium digital presence for The Fitters across website design, SEO, digital marketing, social media, content, and branding.');
      } else if (project.id === 'maurya-printers') {
        document.title = 'Maurya Printers Website | OVEQIRA';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', 'Portfolio showcase for Maurya Printers, designed and developed by OVEQIRA.');`;

content = content.replace(`      } else if (project.id === 'the-fitters') {
        document.title = 'The Fitters | OVEQIRA Case Study';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', 'See how OVEQIRA developed a premium digital presence for The Fitters across website design, SEO, digital marketing, social media, content, and branding.');`, replacement);

fs.writeFileSync('src/pages/ProjectDetailPage.tsx', content);

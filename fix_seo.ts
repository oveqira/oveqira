import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ProjectDetailPage.tsx', 'utf-8');
content = content.replace(
`      } else if (project.id === 'mtech') {
        document.title = 'M Tech Digital Studio Website | OVEQIRA';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', 'Portfolio showcase for M Tech Digital Studio, designed and developed by OVEQIRA.');
`, ''
);
fs.writeFileSync('src/pages/ProjectDetailPage.tsx', content);

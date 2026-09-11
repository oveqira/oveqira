import * as fs from 'fs';

let content = fs.readFileSync('src/index.css', 'utf-8');

content = content.replace(/--surface-hover: #F1F3F5;/g, '--surface-hover: #F1F3F5;\n    --surface-subtle: #F8F9FA;');
content = content.replace(/--surface-hover: #F4F4F5;/g, '--surface-hover: #F4F4F5;\n    --surface-subtle: #FAFAFA;');

fs.writeFileSync('src/index.css', content);

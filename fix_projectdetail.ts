import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ProjectDetailPage.tsx', 'utf-8');
content = content.replace("import { services } from '../data/services';", "import { servicesData } from '../data/services';");
content = content.replace("const foundService = services.find", "const foundService = servicesData.find");
fs.writeFileSync('src/pages/ProjectDetailPage.tsx', content);

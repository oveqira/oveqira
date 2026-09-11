import * as fs from 'fs';
let content = fs.readFileSync('src/data/services.ts', 'utf-8');

// Web Design
content = content.replace(
  'shortDescription: "Custom, high-performance web architecture built for scalability and conversion."',
  'shortDescription: "Websites that turn visitors into customers.\\nStrategy, UX/UI design, development, responsiveness, performance, and conversion-focused experiences."'
);

// SEO
content = content.replace(
  'shortDescription: "Technical search optimization and organic content systems."',
  'shortDescription: "Help the right people find your business.\\nTechnical SEO, content strategy, search optimization, and local visibility."'
);

// Digital Marketing
content = content.replace(
  'shortDescription: "Connected multi-channel performance and brand campaigns."',
  'shortDescription: "Turn digital attention into business growth.\\nConnected campaigns across content, social media, search, advertising, and landing pages."'
);

// AI & Automation
content = content.replace(
  'shortDescription: "Intelligent workflow orchestration and repetitive task elimination."',
  'shortDescription: "Reduce repetitive work and make your business run smarter.\\nAI workflows, automation, chatbots, integrations, and business process automation."'
);

fs.writeFileSync('src/data/services.ts', content);

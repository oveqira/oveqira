import * as fs from 'fs';
let content = fs.readFileSync('src/data/legal.ts', 'utf-8');

// Add requestEmail to refund block
const refundRegex = /refund: \{\s*title: "Refund & Cancellation Policy",\s*route: "\/refund-policy"\s*\}/;
const newRefund = `refund: {
    title: "Refund & Cancellation Policy",
    route: "/refund-policy",
    requestEmail: "[REFUND EMAIL]"
  }`;
content = content.replace(refundRegex, newRefund);

fs.writeFileSync('src/data/legal.ts', content);

const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf-8');

const regex = /measurement: \{[\s\S]*?\},/;
const replacement = `
    measurement: {
      eyebrow: 'KNOW WHAT THE SYSTEM IS DOING',
      heading: 'Automation Should Be Observable.',
      description: 'We ensure you can track workflow completion, processing time, manual steps reduced, response time, errors, and human intervention rates.',
      metrics: [
        'Workflow completion',
        'Processing time',
        'Manual steps reduced',
        'Task volume',
        'Response time',
        'Errors and failed workflows',
        'Escalation rate',
        'Customer interactions',
        'Automation usage',
        'Human intervention'
      ]
    },`;

content = content.replace(/transformation: \{[\s\S]*?after: \{[\s\S]*?\}[\s\S]*?\},/, (match) => match + replacement);
fs.writeFileSync('src/data/services.ts', content);

import * as fs from 'fs';
let content = fs.readFileSync('src/types/index.ts', 'utf-8');

if (!content.includes('maturity?: ServiceMaturity;')) {
  content = content.replace('measurement?: ServiceMeasurement;', 'measurement?: ServiceMeasurement;\n  maturity?: ServiceMaturity;');
  fs.writeFileSync('src/types/index.ts', content);
}

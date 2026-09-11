import * as fs from 'fs';
let content = fs.readFileSync('src/components/services/ServiceDetailBlocks.tsx', 'utf-8');

if (!content.includes('CheckCircle,')) {
  content = content.replace(/import \{([^}]+)\} from 'lucide-react';/, "import { $1, CheckCircle, AlertCircle } from 'lucide-react';");
  fs.writeFileSync('src/components/services/ServiceDetailBlocks.tsx', content);
}

import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ContactPage.tsx', 'utf-8');

const privacyNotice = `
                    <div className="pt-2 pb-4">
                      <p className="text-xs text-[var(--foreground-muted)] text-center leading-relaxed">
                        By submitting this form, you acknowledge that your information may be used to respond to your inquiry. See our <Link to="/privacy-policy" className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">Privacy Policy</Link> for more information.
                      </p>
                    </div>
`;

if (!content.includes('By submitting this form')) {
  // Add import Link if not present
  if (!content.includes('import { Link }')) {
    content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { Link } from 'react-router-dom';");
  }
  
  content = content.replace('<div className="pt-2">', privacyNotice + '\n                    <div className="pt-2">');
  fs.writeFileSync('src/pages/ContactPage.tsx', content);
}

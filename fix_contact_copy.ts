import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ContactPage.tsx', 'utf-8');
content = content.replace("Let's Build Something Exceptional.", "Let's Build Something That Moves Your Business Forward.");
content = content.replace(
  "Whether you need a complete digital overhaul or a targeted growth strategy, we're ready to partner with you.",
  "Tell us what you're building, what you're trying to improve, or where you need help."
);
fs.writeFileSync('src/pages/ContactPage.tsx', content);

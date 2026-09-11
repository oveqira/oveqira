import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ProjectDetailPage.tsx', 'utf-8');

// Replace standard visual block with the image layout specified
const oldCover = `<div className="aspect-[16/9] bg-[#11141A] border border-[var(--border)] rounded-[6px] overflow-hidden flex items-center justify-center">
              {project.coverImage ? (
                <img src={project.coverImage} alt={\`\${project.title} project designed and developed by OVEQIRA\`} className="w-full h-full object-cover" />
              ) : (
                <span className="font-mono text-[10px] text-[var(--foreground-subtle)] uppercase tracking-widest">Project visuals will be added here.</span>
              )}
            </div>`;
const newCover = `<div className="aspect-[4/3] md:aspect-[16/9] w-full bg-[var(--surface-hover)] overflow-hidden flex items-center justify-center mt-12 mb-24">
              {project.coverImage ? (
                <img src={project.coverImage} alt={\`\${project.title} project designed and developed by OVEQIRA\`} className="w-full h-full object-cover" />
              ) : (
                <span className="font-mono text-[10px] text-[var(--foreground-subtle)] uppercase tracking-widest">Project visuals will be added here.</span>
              )}
            </div>`;
content = content.replace(oldCover, newCover);

// Adjust headers and spacing
content = content.replace(
  '<Eyebrow prefix="CLIENT PROJECT · " hasIndicator indicatorColor="accent">{project.number}</Eyebrow>',
  '<Eyebrow>{project.client} {project.brand && project.brand !== project.client ? ` / ${project.brand}` : ""}</Eyebrow>'
);

content = content.replace(
  '<Heading level="display" className="!leading-[1.1]">{project.title}</Heading>',
  '<Heading level="display" className="!leading-[1.1] text-4xl md:text-5xl lg:text-6xl">{project.title}</Heading>'
);

// We need to move the cover image right after the short introduction (before the grid)
// Let's reorganize the container structure inside main content area

const startMainContent = '{/* Main Content Area */}';
const mainContentEnd = '{/* Testimonial */}';

if (content.includes(startMainContent)) {
  let mainContentStr = content.substring(content.indexOf(startMainContent), content.indexOf(mainContentEnd));
  
  // Remove cover from old place
  mainContentStr = mainContentStr.replace(newCover, '');
  
  // Insert it after the top grid (or rather after the hero section)
  // Let's just do a manual string replace for the whole structure to be safe.
}

fs.writeFileSync('src/pages/ProjectDetailPage.tsx', content);

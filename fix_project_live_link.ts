import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ProjectDetailPage.tsx', 'utf-8');

if (!content.includes('ExternalLink')) {
  content = content.replace("import { ArrowLeft } from 'lucide-react';", "import { ArrowLeft, ExternalLink } from 'lucide-react';");
}

if (!content.includes('project.websiteUrl')) {
  const insertTarget = '<Text variant="large" muted className="text-xl md:text-2xl leading-relaxed max-w-3xl">{caseStudy ? caseStudy.title : project.shortDescription}</Text>';
  const replacement = insertTarget + `
            {project.websiteUrl && (
              <div className="pt-4">
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px] inline-block">
                  <Button as="span" variant="secondary" className="group inline-flex items-center">
                    View Live Website <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </a>
              </div>
            )}`;
  content = content.replace(insertTarget, replacement);
}

fs.writeFileSync('src/pages/ProjectDetailPage.tsx', content);

import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/FeaturedWorkSection.tsx', 'utf-8');

const replacement = `                    <div className={\`lg:col-span-5 \${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-8\`}>
                      <div className="space-y-4">
                        <span className="font-mono text-xs text-[var(--foreground-muted)] tracking-widest block">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <Text variant="small" subtle className="font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                          {project.client} {project.brand && project.brand !== project.client ? \` / \${project.brand}\` : ''}
                        </Text>
                        <Heading level="h3" className="group-hover:text-[var(--accent)] transition-colors duration-200">
                          {project.title}
                        </Heading>
                      </div>
                      
                      <div className="pt-2 space-y-6">
                        {project.shortDescription && <Text variant="small" muted className="leading-relaxed">{project.shortDescription}</Text>}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.services.map((service, idx) => (
                          <span key={idx} className="px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[11px] font-medium text-[var(--foreground-muted)]">
                            {service}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 pt-6 border-t border-[var(--border)]">
                        <span className="text-sm font-semibold tracking-wide text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-200">View case study</span>
                        <ArrowUpRight className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--accent)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>`;

const searchStart = '<div className={`lg:col-span-5 ${index % 2 === 0 ? \'lg:order-2\' : \'lg:order-1\'} space-y-8`}>';
const searchEnd = '</div>\n                  </div>';

if(content.includes(searchStart)){
    const parts = content.split(searchStart);
    const subParts = parts[1].split(searchEnd);
    content = parts[0] + replacement + '\n                  </div>' + subParts.slice(1).join(searchEnd);
}

// Clean up intro text
content = content.replace(
  '<Eyebrow prefix="SELECTED WORK //" hasIndicator indicatorColor="accent">Selected Work</Eyebrow>',
  '<Eyebrow>SELECTED WORK</Eyebrow>'
);
content = content.replace('Explore All Work', 'Explore Our Work');

// Remove abstract visual inside image wrapper
content = content.replace(
  /<div className="absolute inset-0 flex flex-col items-center justify-center text-\[var\(--foreground-subtle\)\] space-y-4 transition-transform duration-500 ease-out group-hover:scale-\[1\.02\]">[\s\S]*?<\/div>/,
  `{project.coverImage ? (
                          <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface-hover)]">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">Project Visuals Pending</span>
                          </div>
                        )}`
);

fs.writeFileSync('src/components/home/FeaturedWorkSection.tsx', content);

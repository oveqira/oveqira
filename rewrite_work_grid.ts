import * as fs from 'fs';
let content = fs.readFileSync('src/pages/WorkPage.tsx', 'utf-8');

const oldGrid = `{gridProjects.map((project, idx) => (
                      <Link 
                        key={project.id} 
                        to={\`/work/\${project.slug}\`}
                        className={\`group block \${idx % 3 === 0 ? 'md:col-span-2' : ''}\`}
                      >
                        <div className={\`w-full bg-[var(--surface-hover)] border border-[var(--border)] rounded-2xl overflow-hidden mb-6 relative transition-all duration-500 group-hover:border-[var(--accent)]/50 \${idx % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}\`}>
                           <div className="absolute inset-0 flex items-center justify-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out">
                             <span className="font-mono text-xs text-[var(--foreground-subtle)] uppercase tracking-widest">{project.type === 'concept' ? 'Concept Visual' : 'Project Visual'}</span>
                           </div>
                           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                        <div className="flex justify-between items-start gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="font-serif text-lg text-[var(--foreground-subtle)]">{project.number}</span>
                              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)]">{project.categories[0].replace('-', ' ')}</span>
                            </div>
                            <Heading level="h4" className="text-xl md:text-2xl group-hover:text-[var(--accent)] transition-colors">
                              {project.title}
                            </Heading>
                            <Text muted className="line-clamp-2 pr-8">{project.shortDescription}</Text>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all duration-300">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </Link>
                    ))}`;

const newGrid = `{gridProjects.map((project, idx) => (
                      <Link 
                        key={project.id} 
                        to={\`/work/\${project.slug}\`}
                        className="group block"
                      >
                        <div className="w-full bg-[var(--surface-hover)] border border-[var(--border)] rounded-[8px] overflow-hidden mb-6 relative transition-all duration-500 group-hover:border-[var(--border-strong)] aspect-[4/3] md:aspect-[16/9]">
                          {project.coverImage ? (
                            <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface-hover)]">
                              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">Project Visuals Pending</span>
                            </div>
                          )}
                        </div>
                        <div className="space-y-4">
                          <span className="font-mono text-xs text-[var(--foreground-muted)] tracking-widest block">
                            {project.number || String(idx + 2).padStart(2, '0')}
                          </span>
                          <Heading level="h3" className="uppercase tracking-tight text-xl group-hover:text-[var(--accent)] transition-colors">
                            {project.client} {project.brand && project.brand !== project.client ? \` / \${project.brand}\` : ''}
                          </Heading>
                          <Text muted className="text-sm">
                            {project.shortDescription}
                          </Text>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.services.map((service, sIdx) => (
                              <span key={sIdx} className="px-2 py-1 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[4px] text-[10px] uppercase font-mono tracking-widest text-[var(--foreground-muted)]">
                                {service}
                              </span>
                            ))}
                          </div>
                          <div className="pt-4 mt-auto flex items-center">
                            <span className="text-sm font-semibold tracking-wide text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors flex items-center gap-2">
                              View Case Study <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}`;

content = content.replace(oldGrid, newGrid);
fs.writeFileSync('src/pages/WorkPage.tsx', content);

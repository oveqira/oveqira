import * as fs from 'fs';
let content = fs.readFileSync('src/pages/WorkPage.tsx', 'utf-8');

const oldFeatured = `<div className="lg:col-span-7 order-2 lg:order-1">
                      <Link to={\`/work/\${featuredProject.slug}\`} className="block group rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-hover)] relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-mono text-xs text-[var(--foreground-subtle)] uppercase tracking-widest">{featuredProject.type === 'concept' ? 'Concept Visual' : 'Project Visual'}</span>
                        </div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      </Link>
                    </div>
                    <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="font-serif text-3xl font-light text-[var(--accent)]/50">{featuredProject.number}</span>
                          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] bg-[var(--border)]/50 px-3 py-1 rounded-full">{featuredProject.categories[0].replace('-', ' ')}</span>
                        </div>
                        <Heading level="h3" className="text-3xl md:text-4xl">{featuredProject.title}</Heading>
                        <Text className="text-lg text-[var(--foreground)] ">
                          {featuredProject.shortDescription}
                        </Text>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--border)]">
                        <div className="space-y-2">
                          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)]">Industry</span>
                          <p className="text-sm font-medium">{featuredProject.industry}</p>
                        </div>
                        <div className="space-y-2">
                          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)]">Status</span>
                          <p className="text-sm font-medium capitalize">{featuredProject.status}</p>
                        </div>
                        <div className="space-y-2 col-span-2">
                          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)]">Services</span>
                          <p className="text-sm font-medium">{featuredProject.services.join(' • ')}</p>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button as={Link} to={\`/work/\${featuredProject.slug}\`} variant="primary" iconType="arrow-right">
                          View Project
                        </Button>
                      </div>
                    </div>`;

const newFeatured = `<div className="lg:col-span-7 order-2 lg:order-1">
                      <Link to={\`/work/\${featuredProject.slug}\`} className="block group rounded-[8px] overflow-hidden border border-[var(--border)] bg-[var(--surface-hover)] relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] hover:border-[var(--border-strong)] transition-colors">
                        {featuredProject.coverImage ? (
                          <img src={featuredProject.coverImage} alt={featuredProject.title} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface-hover)]">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">Project Visuals Pending</span>
                          </div>
                        )}
                      </Link>
                    </div>
                    <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                      <div className="space-y-4">
                        <span className="font-mono text-xs text-[var(--foreground-muted)] tracking-widest block">
                          {featuredProject.number || '01'}
                        </span>
                        <Heading level="h3" className="uppercase tracking-tight text-3xl md:text-4xl text-[var(--foreground)]">
                          {featuredProject.client} {featuredProject.brand && featuredProject.brand !== featuredProject.client ? \` / \${featuredProject.brand}\` : ''}
                        </Heading>
                        <Text muted className="text-lg">
                          {featuredProject.shortDescription}
                        </Text>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {featuredProject.services.map((service, sIdx) => (
                          <span key={sIdx} className="px-2 py-1 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[4px] text-[10px] uppercase font-mono tracking-widest text-[var(--foreground-muted)]">
                            {service}
                          </span>
                        ))}
                      </div>
                      
                      <div className="pt-4">
                        <Link to={\`/work/\${featuredProject.slug}\`} className="flex items-center">
                          <span className="text-sm font-semibold tracking-wide text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-2 group">
                            View Case Study <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </span>
                        </Link>
                      </div>
                    </div>`;

content = content.replace(oldFeatured, newFeatured);
fs.writeFileSync('src/pages/WorkPage.tsx', content);

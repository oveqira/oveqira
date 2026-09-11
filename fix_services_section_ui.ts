import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/ServicesSection.tsx', 'utf-8');

const oldGrid = `          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
            {services.slice(0, 4).map((service, index) => {
              // We only want to show 4 main services on the homepage for clarity
              // If there are more, we just take the first 4.
              return (
                <Link
                  key={service.id}
                  to={\`/services/\${service.slug}\`}
                  className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
                >
                  <div className="flex flex-col space-y-6">
                    <span className="font-mono text-xs text-[var(--foreground-muted)] tracking-widest border-b border-[var(--border)] pb-4 block w-full">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-4">
                      <Heading level="h3" className="uppercase tracking-tight text-xl md:text-2xl group-hover:text-[var(--accent)] transition-colors duration-200">
                        {service.title.replace('&', '\\n&')}
                      </Heading>
                      <Text muted className="whitespace-pre-line leading-relaxed text-[var(--foreground-muted)]">
                        {service.shortDescription}
                      </Text>
                    </div>
                  </div>
                  
                  <div className="pt-8 mt-auto flex items-center">
                    <span className="text-sm font-semibold tracking-wide text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      Explore service <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>`;

const newGrid = `          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <Link
                key={service.id}
                to={\`/services/\${service.slug}\`}
                className="group flex flex-col justify-between bg-[var(--surface)] border border-[var(--border)] rounded-[8px] p-8 md:p-10 hover:border-[var(--accent)] hover:shadow-sm hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <div>
                  <span className="font-mono text-sm text-[var(--foreground-muted)] tracking-widest block mb-6">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Heading level="h3" className="mb-4 text-xl">
                    {service.title}
                  </Heading>
                  <Text muted className="mb-8">
                    {service.shortDescription}
                  </Text>
                </div>
                <div className="mt-auto flex items-center">
                  <span className="text-sm font-semibold tracking-wide text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors flex items-center gap-2">
                    Explore service <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>`;

content = content.replace(oldGrid, newGrid);

const sectionIntroOld = `            <div className="space-y-6">
              <Heading level="h2" className="!leading-tight !tracking-tight">
                Everything a modern business needs to grow digitally.
              </Heading>
            </div>
            <div className="lg:pb-2">
              <Text variant="large" muted constrained>
                We focus on the foundations of digital growth: clear communication, strong design, search visibility, and intelligent automation.
              </Text>
            </div>`;

const sectionIntroNew = `            <div className="space-y-4">
              <Eyebrow>WHAT WE DO</Eyebrow>
              <Heading level="h2" className="!leading-tight !tracking-tight max-w-xl">
                Digital solutions built around your business.
              </Heading>
            </div>
            <div className="lg:pb-2">
              <Text variant="large" muted constrained>
                From websites and design to SEO, marketing, content, automation, and digital products.
              </Text>
            </div>`;

content = content.replace(sectionIntroOld, sectionIntroNew);
fs.writeFileSync('src/components/home/ServicesSection.tsx', content);

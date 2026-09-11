import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/FeaturedWorkSection.tsx', 'utf-8');

// 1. Remove order sorting
content = content.replace('const projects = projectsData.filter(p => p.featured).sort((a, b) => a.order - b.order);', 'const projects = projectsData.filter(p => p.featured).slice(0, 3);');

// 2. Remove project.imageType references, simplify layout.
// I will just completely rewrite FeaturedWorkSection.tsx to a clean, simple version.

const rewrite = `import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Button } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data';

export const FeaturedWorkSection: React.FC = () => {
  const projects = projectsData.filter(p => p.featured).slice(0, 3);

  return (
    <Section surface="dark" className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="xl">
        <div className="space-y-16 lg:space-y-24">
          <div className="max-w-3xl space-y-6">
            <Eyebrow prefix="SELECTED WORK //" hasIndicator indicatorColor="accent">Proof</Eyebrow>
            <Heading level="h2">Work That Speaks for Itself.</Heading>
            <Text variant="large" muted constrained>
              Explore selected digital experiences, websites, brands, and growth projects created by Oveqira.
            </Text>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <Link to={\`/work/\${project.slug}\`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[6px]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    <div className={\`lg:col-span-7 \${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}\`}>
                      <div className="relative aspect-[4/3] lg:aspect-[16/9] w-full bg-[#11141A] border border-[var(--border)] rounded-[6px] overflow-hidden transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--foreground-subtle)] space-y-4 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                           <div className="w-16 h-16 rounded-full bg-[#161B26] border border-[var(--border)] flex items-center justify-center">
                             <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]" />
                           </div>
                           <span className="font-mono text-[10px] uppercase tracking-widest">{project.category}</span>
                        </div>
                      </div>
                    </div>

                    <div className={\`lg:col-span-5 \${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-8\`}>
                      <div>
                        <Heading level="h3" className="mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                          {project.title}
                        </Heading>
                        <Text variant="small" subtle className="font-mono uppercase tracking-widest">
                          {project.industry}
                        </Text>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.services.slice(0, 3).map((service, idx) => (
                          <span key={idx} className="px-3 py-1 bg-[#161B26] border border-[var(--border)] rounded-full text-[11px] font-medium text-[var(--foreground-muted)]">
                            {service}
                          </span>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-[var(--border)] space-y-6">
                        <div className="space-y-2">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">Challenge</span>
                          <Text variant="small" muted className="line-clamp-3">{project.challenge}</Text>
                        </div>
                        <div className="space-y-2">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">Solution</span>
                          <Text variant="small" muted className="line-clamp-3">{project.solution}</Text>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 pt-4">
                        <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-200">View Project</span>
                        <ArrowUpRight className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--accent)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="pt-16 border-t border-[var(--border)] flex justify-center">
            <Link to="/work" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
              <Button as="span" variant="secondary" size="lg" surfaceContext="dark" iconType="arrow-right">
                Explore All Work
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
`;

fs.writeFileSync('src/components/home/FeaturedWorkSection.tsx', rewrite);

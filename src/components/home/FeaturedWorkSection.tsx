import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Button } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data';

export const FeaturedWorkSection: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  if (featuredProjects.length === 0) return null;

  return (
    <Section className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="xl">
        <div className="space-y-16 lg:space-y-24">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>SELECTED WORK</Eyebrow>
            <Heading level="h2">Real work. Real businesses.</Heading>
            <Text variant="large" muted constrained>
              A growing collection of digital work created for real businesses and brands.
            </Text>
          </div>
          <div className="space-y-24 lg:space-y-32">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <Link to={`/work/${project.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[6px]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative aspect-[4/3] lg:aspect-[16/9] w-full bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px] overflow-hidden transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                        {project.coverImage ? (
                          <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface-hover)]">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">Project Visuals Pending</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-8`}>
                      <div className="space-y-4">
                        <span className="font-mono text-xs text-[var(--foreground-muted)] tracking-widest block">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <Text variant="small" subtle className="font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                          {project.client} {project.brand && project.brand !== project.client ? ` / ${project.brand}` : ''}
                        </Text>
                        <Heading level="h3" className="group-hover:text-[var(--accent)] transition-colors duration-200">
                          {project.title}
                        </Heading>
                      </div>
                      
                      <div className="pt-2 space-y-6">
                        {project.shortDescription && <Text variant="small" muted className="leading-relaxed line-clamp-3">{project.shortDescription}</Text>}
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
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="pt-16 border-t border-[var(--border)] flex justify-center">
            <Link to="/work" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
              <Button as="span" variant="secondary" size="lg" iconType="arrow-right">
                Explore Our Work
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

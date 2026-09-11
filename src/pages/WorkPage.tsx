import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text, Eyebrow } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

const FILTER_CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Websites', value: 'website' },
  { label: 'UI/UX', value: 'ui-ux' },
  { label: 'Branding', value: 'branding' },
  { label: 'Digital Marketing', value: 'digital-marketing' },
  { label: 'Social Media', value: 'social-media' },
  { label: 'Photography', value: 'photography' },
  { label: 'Videography', value: 'videography' },
  { label: 'AI & Automation', value: 'ai-automation' },
  { label: 'Digital Products', value: 'digital-product' }
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.categories[0] === activeFilter);

  const featuredProject = projects.find(p => p.featured) || projects[0];
  const gridProjects = filteredProjects.filter(p => p.id !== featuredProject?.id);

  return (
    <div className="bg-[var(--background)] min-h-screen">
      
      {/* 1. PAGE HERO */}
      <Section  className="pt-32 pb-16 md:pb-24 overflow-hidden relative">
        
        <Container size="xl" className="relative z-10">
          <div className="max-w-4xl space-y-8">
            <Eyebrow prefix="//" className="text-[var(--accent)] tracking-[0.2em]">SELECTED WORK</Eyebrow>
            <Heading level="display" className="!leading-[1.1] md:!leading-[1.05]">
              Work That Moves Businesses Forward.
            </Heading>
            <Text variant="large" muted className="max-w-2xl">
              Showcase selected digital experiences, creative work, and growth-focused projects built around real business needs.
            </Text>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button as={Link} to="/contact" variant="primary" size="lg">Start a Project</Button>
              <Button as={Link} to="/services" variant="ghost" size="lg">View Services</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. INTRODUCTION */}
      <Section className="py-16 md:py-24 border-b border-[var(--border)]">
        <Container size="md" className="mx-auto text-center space-y-8">
          <Heading level="h2">Every Project Starts With a Problem.</Heading>
          <div className="space-y-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            <p>
              A website, campaign, product, or content system should do more than exist. It should solve something.
            </p>
            <p>
              Maybe the business needs more clarity. Maybe the brand needs a stronger digital presence. Maybe customers are struggling to understand the offer. Maybe the existing system simply isn't built to scale.
            </p>
            <p className="font-medium text-[var(--foreground)]">
              OVEQIRA approaches each project by understanding the problem first, then building the right solution around it.
            </p>
          </div>
        </Container>
      </Section>

      {/* PORTFOLIO SECTION */}
      <Section className="py-24" id="portfolio">
        <Container size="xl">
          
          {/* 3. PROJECT FILTER SYSTEM */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 md:mb-24">
            {FILTER_CATEGORIES.map(cat => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${
                  activeFilter === cat.value 
                    ? 'border-[var(--accent)] bg-[var(--accent)]/5 text-[var(--accent)]'
                    : 'border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-32 space-y-6 border border-[var(--border)] rounded-2xl bg-[var(--surface-subtle)]"
              >
                <Heading level="h3">We're building the collection.</Heading>
                <Text muted>We're building a growing collection of real OVEQIRA projects. Check back soon for selected work.</Text>
                <Button onClick={() => setActiveFilter('all')} variant="secondary" className="mt-4">
                  View All Work
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="space-y-16 md:space-y-32"
              >
                {/* 4. FEATURED PROJECT (only show if 'all' or if the featured project matches the filter) */}
                {featuredProject && (activeFilter === 'all' || activeFilter === featuredProject.categories[0]) && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <Link to={`/work/${featuredProject.slug}`} className="block group rounded-[8px] overflow-hidden border border-[var(--border)] bg-[var(--surface-hover)] relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] hover:border-[var(--border-strong)] transition-colors">
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
                          {featuredProject.client} {featuredProject.brand && featuredProject.brand !== featuredProject.client ? ` / ${featuredProject.brand}` : ''}
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
                        <Link to={`/work/${featuredProject.slug}`} className="flex items-center">
                          <span className="text-sm font-semibold tracking-wide text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-2 group">
                            View Case Study <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. PROJECT GRID */}
                {gridProjects.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {gridProjects.map((project, idx) => (
                      <Link 
                        key={project.id} 
                        to={`/work/${project.slug}`}
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
                            {project.client} {project.brand && project.brand !== project.client ? ` / ${project.brand}` : ''}
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
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Section>

      {/* 8. CASE STUDY PREVIEW */}
      <Section className="py-24 bg-[var(--surface-subtle)] border-t border-[var(--border)]">
        <Container size="md" className="text-center space-y-8">
          <Heading level="h2">Built for Results.</Heading>
          <div className="space-y-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            <p>Behind every strong digital project is a strategic decision designed to achieve a business outcome.</p>
<p className="italic text-sm pt-4">We are documenting more case studies.</p>
          </div>
        </Container>
      </Section>

      {/* 20. FINAL CTA */}
      <Section className="py-24 md:py-32 bg-[var(--surface-hover)] border-t border-[var(--border)]">
        <Container size="md" className="text-center space-y-10">
          <div className="space-y-6">
            <Eyebrow className="justify-center" prefix="//">HAVE SOMETHING IN MIND?</Eyebrow>
            <Heading level="display" className="!leading-[1.1]">
              Let's Build What Your Business Needs Next.
            </Heading>
            <Text variant="large" muted className="max-w-2xl mx-auto">
              Whether you need a better website, stronger digital presence, smarter automation, better content, or a completely new digital product, let's start with the problem.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/contact" variant="primary" size="lg">Start a Project</Button>
            <Button as={Link} to="/services" variant="secondary" size="lg">Explore Services</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

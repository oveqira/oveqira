import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { ArrowUpRight } from 'lucide-react';
import { testimonials } from '../../data';
import { projects } from '../../data/projects';

export const TestimonialsSection: React.FC = () => {
  const approvedTestimonials = testimonials.filter(t => t.approved && t.featured).sort((a, b) => (a.order || 0) - (b.order || 0));
  
  if (approvedTestimonials.length === 0) {
    // Show alternative credibility section with projects
    const featuredProjects = projects.filter(p => p.featured).slice(0, 2);
    
    return (
      <Section  className="py-24 border-t border-[var(--border)]">
        <Container size="md">
          <div className="space-y-16">
            <div className="text-center space-y-6 flex flex-col items-center">
              <Eyebrow>CREDIBILITY</Eyebrow>
              <Heading level="h2">Built Through Real Work</Heading>
              <Text variant="large" muted constrained>
                OVEQIRA is building its portfolio through real client engagements across websites, content, SEO, social media, and digital growth.
              </Text>
            </div>
            
            <div className="space-y-6">
              {featuredProjects.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to={`/work/${project.slug}`} className="block group border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] p-6 md:p-8 hover:border-[var(--border-strong)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] flex flex-col sm:flex-row justify-between sm:items-center gap-6">
                    <div className="space-y-2">
                      <Heading level="h4" className="group-hover:text-[var(--accent)] transition-colors">{project.title}</Heading>
                      <Text variant="small" muted className="font-mono uppercase tracking-widest">{project.services.join(' · ')}</Text>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:bg-[var(--surface-hover)] transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section  className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="md">
        <div className="space-y-16">
          <div className="space-y-6 text-center flex flex-col items-center">
            <Eyebrow prefix="CLIENT PERSPECTIVE //" hasIndicator indicatorColor="accent">
              Trust
            </Eyebrow>
            <Heading level="h2">
              Trusted by People Building Something.
            </Heading>
            <Text variant="large" muted constrained>
              Good digital work starts with understanding the people and businesses behind it.
            </Text>
          </div>
          <div className="space-y-8">
            {approvedTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12 border border-[var(--border)] rounded-[8px] bg-[var(--surface-hover)] relative"
              >
                <div className="absolute top-8 left-8 text-6xl text-[var(--border-strong)] opacity-50 font-serif leading-none select-none">
                  "
                </div>
                <div className="relative z-10 pt-4">
                  <Heading level="h3" className="!leading-relaxed font-normal text-[var(--foreground)]">
                    {testimonial.quote}
                  </Heading>
                  <div className="mt-8 pt-8 border-t border-[var(--border)] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] overflow-hidden flex items-center justify-center">
                       {testimonial.image ? (
                         <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                       ) : (
                         <span className="font-mono text-[10px] text-[var(--foreground-subtle)]">IMG</span>
                       )}
                    </div>
                    <div>
                      <p className="text-[var(--foreground)] font-medium text-sm">{testimonial.name}</p>
                      <p className="text-[var(--foreground-muted)] text-xs">{testimonial.role ? `${testimonial.role} · ` : ''}{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

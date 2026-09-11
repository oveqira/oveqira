import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Button } from '../ui/Button';

export const CtaSection: React.FC = () => {
  return (
    <Section  className="pt-24 pb-32">
      <Container size="lg">
                <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface-hover)]"
        >
          {/* Technical Abstract Background */}
          <div className="absolute inset-0 z-0">
            {/* Fine Grid */}
            <div className="absolute inset-0 bg-tech-grid-light opacity-30 mix-blend-overlay" />
          </div>
          <div className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-3xl mx-auto space-y-10">
            <div className="space-y-6 flex flex-col items-center">
              <Eyebrow>
                START A PROJECT
              </Eyebrow>
              <Heading level="display" className="!leading-[0.95] !tracking-tight">
                Ready to start your project?
              </Heading>
              <Text variant="large" muted constrained className="max-w-[50ch]">
                Tell us what you're building, what isn't working, or where you want to go next. We'll help you find the right digital path forward.
              </Text>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                <Button as="span" variant="primary" size="lg" iconType="arrow-right" className="w-full justify-center">
                  Start a Project
                </Button>
              </Link>
              <Link to="/work" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                <Button as="span" variant="secondary" size="lg" iconType="arrow-up-right" className="w-full justify-center">
                  Explore Our Work
                </Button>
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <div className="w-6 h-[1px] bg-[var(--border-strong)]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--foreground-subtle)]">
                No complicated process. Start with a conversation.
              </span>
              <div className="w-6 h-[1px] bg-[var(--border-strong)]" />
            </div>
          </div>

        </motion.div>
      </Container>
    </Section>
  );
};

import * as fs from 'fs';
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf-8');

const replacement = `import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text, Eyebrow } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { ArrowDown } from 'lucide-react';

import { IntroSection } from '../components/home/IntroSection';
import { ClientCredibilitySection } from '../components/home/ClientCredibilitySection';
import { ServicesSection } from '../components/home/ServicesSection';
import { PrinciplesSection } from '../components/home/PrinciplesSection';
import { FeaturedWorkSection } from '../components/home/FeaturedWorkSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { InsightsSection } from '../components/home/InsightsSection';
import { FaqSection } from '../components/home/FaqSection';
import { CtaSection } from '../components/home/CtaSection';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 400, damping: 40 },
  },
};

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <Section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        <Container size="xl" className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="max-w-4xl space-y-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <Eyebrow hasIndicator indicatorColor="accent">
                  DIGITAL GROWTH PARTNER
                </Eyebrow>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Heading level="display" className="!leading-[1.1] !tracking-tight">
                  We Build Digital Experiences That Move Businesses Forward.
                </Heading>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Text variant="large" muted className="max-w-2xl text-lg md:text-xl">
                  Websites, design, SEO, marketing, content, AI automation, and digital products built around your business.
                </Text>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
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
              </motion.div>
              <motion.div variants={fadeInUp} className="pt-4 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[var(--border-strong)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-subtle)] font-medium">
                  Strategy • Design • Technology • Growth
                </span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>
      <ClientCredibilitySection />
      <div className="flex flex-col">
        <IntroSection />
        <ServicesSection />
        <PrinciplesSection />
      </div>
      <FeaturedWorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <IndustriesSection />
      <InsightsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}`;

fs.writeFileSync('src/pages/HomePage.tsx', replacement);

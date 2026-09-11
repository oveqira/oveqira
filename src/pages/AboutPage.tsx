import React from 'react';
import { motion } from 'motion/react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text, Eyebrow } from '../components/ui/Typography';

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <Section  className="pt-32 pb-16">
        <Container size="md">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <Eyebrow>ABOUT OVEQIRA</Eyebrow>
            <Heading level="display" className="!leading-[0.9]">Built for Business.</Heading>
            <Text variant="large" muted constrained>
              Oveqira is a digital growth partner. We combine strategy, design, technology, and marketing to help businesses build stronger digital foundations.
            </Text>
          </motion.div>
        </Container>
      </Section>

      <Section  className="pb-32">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-[var(--border)]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <Heading level="h3">Our Approach</Heading>
              <Text muted variant="small">We combine technical precision with human-centric design. Every decision we make is driven by data, aesthetic intention, and the specific business goals of our partners.</Text>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <Heading level="h3">Our Values</Heading>
              <Text muted variant="small">Transparency, Quality, Velocity, and Partnership. We don't just act as an agency; we integrate with your team to ensure every project exceeds expectations.</Text>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <Heading level="h3">Our Mission</Heading>
              <Text muted variant="small">To empower modern businesses with scalable digital architecture. We believe that exceptional design and robust engineering should be accessible and deeply impactful.</Text>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

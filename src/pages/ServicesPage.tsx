import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text, Eyebrow } from '../components/ui/Typography';
import { servicesData as SERVICES } from '../data';

export default function ServicesPage() {
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
            <Eyebrow>SERVICES</Eyebrow>
            <Heading level="display" className="!leading-[0.9]">Capabilities.</Heading>
            <Text variant="large" muted constrained>
              Strategy, design, technology, and marketing designed to help businesses grow.
            </Text>
          </motion.div>
        </Container>
      </Section>

      <Section  className="pb-32">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] space-y-4 hover:border-[var(--border-strong)] transition-colors duration-300 flex flex-col"
              >
                <Heading level="h3" className="group-hover:text-[var(--accent)] transition-colors">{service.title}</Heading>
                <Text muted variant="small" className="mb-6">{service.description || service.shortDescription}</Text>
                <div className="pt-4 mt-auto">
                  <Link to={`/services/${service.slug}`} className="text-sm font-semibold text-[var(--accent)] hover:opacity-80 transition-opacity">
                    Explore Service →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

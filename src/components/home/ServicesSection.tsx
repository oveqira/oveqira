import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Button } from '../ui/Button';

import { servicesData, ctaConfig } from '../../data';

export const ServicesSection: React.FC = () => {
  const services = servicesData.filter(s => s.featured).sort((a, b) => a.order - b.order);

  return (
    <Section  className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="space-y-4">
              <Eyebrow>WHAT WE DO</Eyebrow>
              <Heading level="h2" className="!leading-tight !tracking-tight max-w-xl">
                Digital solutions built around your business.
              </Heading>
            </div>
            <div className="lg:pb-2">
              <Text variant="large" muted constrained>
                From websites and design to SEO, marketing, content, automation, and digital products.
              </Text>
            </div>
          </div>

          {/* Service Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
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
          </div>

          {/* Section Footer / CTA */}
          <div className="pt-16 mt-16 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-8">
            <Heading level="h4" className="!leading-tight">
              Need something specific? Let's find the right solution.
            </Heading>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                <Button as="span" variant="primary" size="lg" iconType="arrow-right" className="w-full justify-center">
                  Talk to Oveqira
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                <Button as="span" variant="secondary" size="lg" iconType="arrow-up-right" className="w-full justify-center">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

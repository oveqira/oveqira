import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Typography';

export const ClientCredibilitySection: React.FC = () => {
  return (
    <Section className="py-12 border-b border-[var(--border)] bg-[var(--surface-subtle)]">
      <Container size="lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-70">
          <Heading level="h4" className="text-sm font-mono tracking-widest uppercase text-[var(--foreground-muted)] mb-4 md:mb-0">Selected Clients</Heading>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <span className="font-semibold text-xl tracking-tight text-[var(--foreground)]">The Fitters</span>
            <span className="font-semibold text-xl tracking-tight text-[var(--foreground)]">BioXPLO</span>
            <span className="font-semibold text-xl tracking-tight text-[var(--foreground)]">Maurya Printers</span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text, Eyebrow } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <Section className="pt-32 pb-32 flex-1 flex items-center justify-center">
      <Container size="sm" className="text-center space-y-8">
        <Eyebrow prefix="404">ERROR</Eyebrow>
        <Heading level="display">This page couldn't be found.</Heading>
        <Text variant="large" muted className="max-w-md mx-auto">
          The page may have moved or no longer exists.
        </Text>
        <div className="pt-4 flex gap-4 justify-center">
          <Link to="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
            <Button as="span" variant="primary" size="lg" iconType="arrow-right">
              Back Home
            </Button>
          </Link>
          <Link to="/work" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
            <Button as="span" variant="secondary" size="lg" iconType="arrow-up-right">
              View Our Work
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

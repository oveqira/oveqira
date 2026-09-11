import React from 'react';
import { motion } from 'motion/react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';

const PRINCIPLES = [
  {
    id: '01',
    title: 'Strategy First',
    description: 'We understand the business before building the solution.'
  },
  {
    id: '02',
    title: 'Built Around Your Brand',
    description: 'Every digital experience is designed around your identity and audience.'
  },
  {
    id: '03',
    title: 'One Connected Team',
    description: 'Strategy, design, development, marketing, content, and technology work together.'
  },
  {
    id: '04',
    title: 'Built for Growth',
    description: 'The goal is not simply to launch. It is to create a foundation that can grow with the business.'
  }
];

export const PrinciplesSection: React.FC = () => {
  return (
    <Section  className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Context & Abstract Visual */}
          <div className="lg:col-span-5 flex flex-col space-y-16">
            <div className="space-y-8">
              <Eyebrow>WHY OVEQIRA</Eyebrow>
              <Heading level="h2" className="!leading-tight !tracking-tight">
                Digital built for business.
              </Heading>
              <Text variant="large" muted constrained>
                We focus on the intersection of strong design, technical capability, and clear business outcomes.
              </Text>
            </div>

            {/* Differentiation Visual (Strategy + Design + Tech + Growth = Oveqira) */}
            <div className="hidden md:flex flex-col space-y-6 pt-8 border-t border-[var(--border)]">
              {['Strategy', 'Design', 'Technology', 'Growth'].map((item, i) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-4 h-[1px] bg-[var(--border-strong)]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                    {item}
                  </span>
                  {i === 3 && (
                    <div className="flex-1 flex items-center gap-4 ml-4">
                      <div className="flex-1 h-[1px] bg-[var(--border)]" />
                      <span className="font-mono text-[10px] text-[var(--accent)] font-semibold tracking-[0.2em]">
                        = OVEQIRA
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Principles List */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col border-t border-[var(--border)]">
              {PRINCIPLES.map((principle) => (
                <div 
                  key={principle.id}
                  className="group relative flex flex-col sm:flex-row gap-6 sm:gap-12 py-8 border-b border-[var(--border)] hover:bg-[var(--surface-hover)] transition-colors duration-300 px-4 sm:px-6 -mx-4 sm:-mx-6"
                >
                  <div className="pt-1">
                    <span className="font-mono text-xs font-semibold tracking-widest text-[var(--foreground-subtle)] group-hover:text-[var(--accent)] transition-colors duration-300">
                      {principle.id}
                    </span>
                  </div>
                  <div className="space-y-3 flex-1">
                    <Heading level="h4" className="group-hover:text-[var(--accent)] transition-colors duration-300">
                      {principle.title}
                    </Heading>
                    <Text muted>
                      {principle.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

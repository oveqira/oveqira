import React from 'react';
import { motion } from 'motion/react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { processData } from '../../data';

export const ProcessSection: React.FC = () => {
  const processSteps = [
  { number: '01', title: 'Understand', description: 'We learn about your business, audience, goals, and challenges.' },
  { number: '02', title: 'Plan', description: 'We define the right strategy, scope, and direction.' },
  { number: '03', title: 'Build', description: 'We design and develop the solution.' },
  { number: '04', title: 'Launch', description: 'We test, refine, and launch.' },
  { number: '05', title: 'Grow', description: 'We improve the digital experience as your business evolves.' }
];

  return (
    <Section  className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Section Header */}
          <div className="lg:col-span-4 space-y-8 lg:pr-8">
            <div className="space-y-6">
              <Eyebrow prefix="OUR PROCESS //" hasIndicator indicatorColor="accent">
                Methodology
              </Eyebrow>
              <Heading level="h2">
                From Idea to Impact.
              </Heading>
              <Text variant="large" muted constrained>
                A clear process keeps strategy, design, technology, and execution moving in the same direction.
              </Text>
            </div>
            
            <div className="pt-8 border-t border-[var(--border)] hidden lg:block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">
                Clear thinking creates better digital work.
              </span>
            </div>
          </div>

          {/* Process Grid */}
          <div className="lg:col-span-8">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-4 relative">
              {/* Horizontal line for desktop timeline */}
              <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-[var(--border)] z-0" />
              
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative flex flex-col flex-1"
                >
                  {/* Timeline Node */}
                  <div className="flex items-center gap-4 md:mb-6">
                    <div className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center font-mono text-sm tracking-widest text-[var(--foreground-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors">
                      {step.number}
                    </div>
                    {/* Vertical line for mobile */}
                    {index !== processSteps.length - 1 && (
                       <div className="md:hidden absolute left-[27px] top-14 bottom-[-32px] w-px bg-[var(--border)] z-0" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="pl-18 md:pl-0 mt-[-36px] md:mt-0 pb-8 md:pb-0">
                     <Heading level="h4" className="mb-2 text-lg">
                       {step.title}
                     </Heading>
                     <Text muted className="text-sm md:text-base leading-relaxed">
                       {step.description}
                     </Text>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-12 border-t border-[var(--border)] mt-12 lg:hidden">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">
                Clear thinking creates better digital work.
              </span>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

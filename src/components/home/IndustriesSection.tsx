import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { ArrowUpRight } from 'lucide-react';
import { industriesData } from '../../data';

export const IndustriesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const industries = industriesData.filter(i => i.featured).sort((a, b) => a.order - b.order);

  return (
    <Section  className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 space-y-6 lg:pr-8">
            <Eyebrow prefix="WHO WE WORK WITH //" hasIndicator indicatorColor="accent">
              Focus Areas
            </Eyebrow>
            <Heading level="h2">
              Built for Different Businesses.
            </Heading>
            <Text variant="large" muted constrained>
              Different industries have different challenges. The digital foundation should adapt to the business, not the other way around.
            </Text>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-[var(--border)]">
              {industries.map((industry, index) => (
                <div 
                  key={industry.id}
                  className="group relative border-b border-[var(--border)] transition-colors duration-300 hover:bg-[var(--surface-hover)]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button 
                    className="w-full text-left py-6 px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:bg-[var(--surface-hover)] rounded-sm"
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                    onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                    aria-expanded={hoveredIndex === index}
                  >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className="font-mono text-[10px] text-[var(--foreground-subtle)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        {industry.id}
                      </span>
                      <Heading level="h3" className="text-[20px] md:text-[24px] text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        {industry.name}
                      </Heading>
                    </div>
                    
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="md:max-w-xs mt-4 md:mt-0 overflow-hidden"
                        >
                          <Text variant="small" subtle className="md:text-right">
                            {industry.description}
                          </Text>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};

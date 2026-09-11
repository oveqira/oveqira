import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Plus, Minus } from 'lucide-react';
import { faqsData } from '../../data';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const faqs = faqsData.filter(f => f.featured).sort((a, b) => a.order - b.order);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section  className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="md">
        <div className="space-y-16">
          
          <div className="space-y-6 text-center flex flex-col items-center">
            <Eyebrow prefix="FAQ //" hasIndicator indicatorColor="accent">
              Clarification
            </Eyebrow>
            <Heading level="h2">
              Questions, Answered.
            </Heading>
            <Text variant="large" muted constrained>
              A few things clients often want to know before starting a project.
            </Text>
          </div>

          <div className="border-t border-[var(--border)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-[var(--border)]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left py-6 md:py-8 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:bg-[var(--surface-hover)] transition-colors group rounded-sm"
                    aria-expanded={isOpen}
                  >
                    <Heading level="h4" className={`font-medium transition-colors duration-200 ${isOpen ? 'text-[var(--accent)]' : 'group-hover:text-[var(--accent)]'}`}>
                      {faq.question}
                    </Heading>
                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 ${isOpen ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]' : 'border-[var(--border)] text-[var(--foreground-subtle)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]'}`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pr-12 md:pr-24">
                          <Text muted leading="relaxed">
                            {faq.answer}
                          </Text>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
};

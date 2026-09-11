import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text, Eyebrow } from '../components/ui/Typography';
import { blogPosts as ARTICLES } from '../data';

export default function BlogPage() {
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
            <Eyebrow prefix="INSIGHTS //" hasIndicator indicatorColor="accent">The Journal</Eyebrow>
            <Heading level="display" className="!leading-[0.9]">Perspectives<br/>on Digital<br/>Growth.</Heading>
            <Text variant="large" muted constrained>
              Strategic insights, technical deep dives, and industry analysis from the Oveqira team.
            </Text>
          </motion.div>
        </Container>
      </Section>

      <Section  className="pb-32">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.length === 0 ? (
            <div className="text-center py-32 space-y-6 border border-[var(--border)] rounded-2xl bg-[var(--surface-hover)] col-span-full">
              <Heading level="h3">Insights Coming Soon</Heading>
              <Text muted>We're preparing practical insights on digital growth, design, technology, and business.</Text>
            </div>
          ) : (
            ARTICLES.map((article, idx) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to="#" className="block group border border-[var(--border)] rounded-[6px] overflow-hidden bg-[var(--surface-hover)] p-6 space-y-4 hover:border-[var(--border-strong)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-[var(--foreground-subtle)] uppercase tracking-wider mb-4">
                      <span>{article.category}</span>
                      <span>{article.readingTime}</span>
                    </div>
                    <Heading level="h4" className="group-hover:text-[var(--accent)] transition-colors">
                      {article.title}
                    </Heading>
                  </div>
                  <Text muted variant="small" className="font-mono text-xs pt-4 border-t border-[var(--border)] mt-6">
                    {article.publishedAt}
                  </Text>
                </Link>
              </motion.div>
            )))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

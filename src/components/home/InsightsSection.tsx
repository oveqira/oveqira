import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../../data';

export const InsightsSection: React.FC = () => {
  const articles = blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  if (articles.length === 0) return null;
  
  return (
    <Section  className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="xl">
        <div className="space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-6">
              <Eyebrow prefix="INSIGHTS //" hasIndicator indicatorColor="accent">
                Education
              </Eyebrow>
              <Heading level="h2">
                Ideas for Building Better Digital Businesses.
              </Heading>
              <Text variant="large" muted constrained>
                Practical perspectives on websites, design, technology, SEO, marketing, automation, and digital growth.
              </Text>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 group text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors focus:outline-none">
              View All Insights
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Featured Article */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 group cursor-pointer"
            >
              <Link to={`/blog/${articles[0].slug}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[6px]">
                <div className="flex flex-col h-full border border-[var(--border)] rounded-[6px] overflow-hidden bg-[var(--surface-hover)] transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                  <div className="aspect-[16/9] bg-[var(--surface-subtle)] border-b border-[var(--border)] relative overflow-hidden flex items-center justify-center">
                    <span className="font-mono text-[10px] text-[var(--foreground-subtle)] uppercase tracking-widest z-10">Visual Pending</span>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col flex-1 justify-between gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">
                        <span className="text-[var(--accent)]">{articles[0].category}</span>
                        <span>·</span>
                        <span>{articles[0].publishedAt}</span>
                        <span>·</span>
                        <span>{articles[0].readingTime}</span>
                      </div>
                      <Heading level="h3" className="group-hover:text-[var(--accent)] transition-colors duration-300">
                        {articles[0].title}
                      </Heading>
                      <Text muted className="line-clamp-2">
                        {articles[0].excerpt}
                      </Text>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      Read Article
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Smaller Articles */}
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              {articles.slice(1).map((article, idx) => (
                <motion.div 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1), ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer h-full"
                >
                  <Link to={`/blog/${article.slug}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[6px]">
                    <div className="flex flex-col h-full border border-[var(--border)] rounded-[6px] overflow-hidden bg-[var(--surface-hover)] transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                      <div className="aspect-[2/1] lg:aspect-auto lg:flex-1 bg-[var(--surface-subtle)] border-b border-[var(--border)] relative overflow-hidden flex items-center justify-center">
                        <span className="font-mono text-[10px] text-[var(--foreground-subtle)] uppercase tracking-widest z-10">Visual Pending</span>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)]">
                            <span className="text-[var(--accent)]">{article.category}</span>
                            <span>·</span>
                            <span>{article.publishedAt}</span>
                          </div>
                          <Heading level="h4" className="text-lg group-hover:text-[var(--accent)] transition-colors duration-300">
                            {article.title}
                          </Heading>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                          Read Article
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>
          
          <div className="md:hidden flex justify-center pt-8 border-t border-[var(--border)]">
            <Link to="/blog" className="flex items-center gap-2 group text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors focus:outline-none">
              View All Insights
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>
      </Container>
    </Section>
  );
};

import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Link, useLocation } from 'react-router-dom';
import { footerLegal } from '../../data/navigation';
import { useSeo } from '../../hooks/useSeo';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  intro: string;
  children: ReactNode;
  noticeText?: ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, intro, children, noticeText }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  useSeo({
    title: title,
    description: intro,
    path: currentPath
  });

  return (
    <div className="bg-[var(--background-color)] min-h-screen">
      {/* HERO SECTION */}
      <Section className="pt-24 pb-12 border-b border-[var(--border)]">
        <Container size="md">
          {/* Breadcrumbs */}
          <nav className="mb-12 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)]">
            <Link to="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
            <span>/</span>
            <span>Legal</span>
            <span>/</span>
            <span className="text-[var(--foreground)]">{title}</span>
          </nav>
          
          <div className="space-y-6">
            <Eyebrow prefix="//">LEGAL</Eyebrow>
            <Heading level="display" className="!leading-[1.1]">{title}</Heading>
            <Text variant="large" muted className="max-w-2xl">
              {intro}
            </Text>
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] pt-4">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </Section>

      {/* IMPORTANT NOTICE */}
      <Section className="py-8 bg-[var(--surface-subtle)] border-b border-[var(--border)]">
        <Container size="md">
          <div className="p-6 border border-[var(--border)] rounded-lg bg-[var(--background)]">
            <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
              {noticeText || "This Privacy Policy is provided for general website and business use and should be reviewed and adapted to OVEQIRA's actual data practices and applicable legal requirements before publication."}
            </p>
          </div>
        </Container>
      </Section>

      {/* CONTENT */}
      <Section className="py-16 md:py-24 border-b border-[var(--border)]">
        <Container size="md">
          <div className="space-y-16">
            {children}
          </div>
        </Container>
      </Section>
      
      {/* LEGAL FOOTER NAVIGATION */}
      <Section className="py-16 bg-[var(--surface-subtle)]">
        <Container size="md">
          <Heading level="h3" className="mb-8">Legal</Heading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none pl-0">
            {footerLegal.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.path} className="pl-0">
                  <Link 
                    to={item.path} 
                    className={`flex items-center gap-3 transition-colors ${isActive ? 'text-[var(--accent)] font-medium' : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { siteConfig, navigationLinks, ctaConfig } from '../../data';

export const GlobalHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Trap focus / prevent body scroll when menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-[var(--surface)]/95 backdrop-blur-md border-b border-[var(--border)] py-4'
            : 'bg-transparent py-6 lg:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 z-[60] relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
          >
            <div className="w-6 h-6 bg-[var(--accent)] rounded-sm" />
            <span className="text-xl font-bold tracking-tight uppercase text-[var(--foreground)]">
              {siteConfig.brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-semibold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm px-1 ${
                  location.pathname === link.path
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block z-[60] relative">
            <Link to={ctaConfig.primaryCta.href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px]">
              <Button as="span" variant="primary" size="sm">
                {ctaConfig.primaryCta.label}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center gap-2 p-2 -mr-2 z-[60] relative text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="text-[11px] font-mono tracking-widest font-semibold uppercase group-hover:text-[var(--accent)] transition-colors">
              {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 group-hover:text-[var(--accent)] transition-colors" />
            ) : (
              <Menu className="w-5 h-5 group-hover:text-[var(--accent)] transition-colors" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[var(--background)] flex flex-col pt-32 px-6 pb-12 lg:hidden"
            aria-modal="true"
            role="dialog"
          >
            {/* Architectural Grid Lines for Mobile Menu */}
            <div className="absolute inset-0 bg-tech-grid-light opacity-20 pointer-events-none" />
            
            <nav className="flex flex-col gap-8 flex-1 relative z-10">
              {navigationLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl font-bold tracking-tight block ${
                      location.pathname === link.path
                        ? 'text-[var(--foreground)]'
                        : 'text-[var(--foreground-muted)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 relative z-10"
            >
              <Link to={ctaConfig.primaryCta.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[6px]">
                <Button
                  as="span"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                 
                  iconType="arrow-right"
                >
                  {ctaConfig.primaryCta.label}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { GlobalHeader } from './GlobalHeader';
import { GlobalFooter } from './GlobalFooter';
import { CookieBanner } from './CookieBanner';
import { WhatsAppButton } from './WhatsAppButton';

export const RootLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Ensure the body has the dark surface styling required by the Elegant Dark theme
  useEffect(() => {
    document.documentElement.setAttribute('data-surface', 'dark');
    document.body.classList.add('surface-dark');
    document.body.style.backgroundColor = 'var(--background)';
    document.body.style.color = 'var(--foreground)';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <GlobalHeader />
      {/* 
        The pt-24 provides padding to ensure content isn't hidden behind the fixed header. 
        Main will expand to fill available space, pushing the footer down.
      */}
      <main className="flex-1 pt-24 pb-16">
        <Outlet />
      </main>
      <GlobalFooter />
      <CookieBanner />
      <WhatsAppButton />
    </div>
  );
};

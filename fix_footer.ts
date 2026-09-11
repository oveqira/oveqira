import * as fs from 'fs';
let content = `import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, footerNavigation, footerLegal } from '../../data';

export const GlobalFooter: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm w-fit">
              <span className="text-xl font-bold tracking-tight uppercase text-[var(--foreground)]">{siteConfig.brandName}</span>
            </Link>
            <p className="text-[var(--foreground-muted)] text-base max-w-sm leading-relaxed">
              Strategy, design, technology,<br/>and digital growth solutions<br/>built around your business.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <ul className="space-y-4">
              {footerNavigation.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-base text-[var(--foreground)] hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <ul className="space-y-4 text-base text-[var(--foreground)]">
              <li>
                <a href={\`mailto:\${siteConfig.contact.email}\`} className="hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                  Email
                </a>
              </li>
              <li>
                <a href={\`https://wa.me/\${siteConfig.contact.whatsapp.replace(/[^0-9+]/g, '')}\`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={\`tel:\${siteConfig.contact.phone}\`} className="hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border)]">
          <div className="mb-6">
            <nav aria-label="Legal" className="flex flex-wrap gap-x-8 gap-y-4">
              {footerLegal.map((item) => (
                <Link 
                  key={item.label}
                  to={item.path}
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex justify-start items-center">
            <p className="text-sm text-[var(--foreground-subtle)]">
              © 2026 {siteConfig.brandName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
`
fs.writeFileSync('src/components/layout/GlobalFooter.tsx', content);

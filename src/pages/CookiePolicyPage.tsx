import React from 'react';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';
import { legalConfig, cookieInventory } from '../data';

export default function CookiePolicyPage() {
  const noticeText = "The cookies and technologies actually used on this website depend on the current website configuration. This policy should be reviewed and updated whenever analytics, advertising, embedded content, consent tools, or other tracking technologies are added or removed.";

  return (
    <LegalPageLayout 
      title="Cookie Policy"
      lastUpdated={legalConfig.lastUpdated}
      intro="This policy explains how cookies and similar technologies may be used on the OVEQIRA website and how you can manage your preferences."
      noticeText={noticeText}
    >
      <div className="prose prose-invert max-w-none prose-headings:text-[var(--foreground)] prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-[var(--foreground-muted)] prose-p:leading-relaxed prose-a:text-[var(--accent)] prose-ul:text-[var(--foreground-muted)] prose-li:text-[var(--foreground-muted)]">
        
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small pieces of information stored on a device by a website or related service. They may help websites function correctly, remember preferences, understand website usage, improve performance, support security, and provide relevant functionality. 
        </p>
        <p>
          This policy also applies to similar technologies where relevant, such as local storage, pixels, tags, and scripts.
        </p>

        <h2>2. How OVEQIRA May Use Cookies</h2>
        <p>Depending on the website configuration, we may use cookies for the following purposes:</p>
        <ul>
          <li><strong>Website Functionality:</strong> To enable essential website features.</li>
          <li><strong>Preferences:</strong> To remember settings or choices where applicable.</li>
          <li><strong>Analytics:</strong> To understand how visitors interact with the website and identify areas for improvement.</li>
          <li><strong>Advertising:</strong> Where advertising technologies are implemented, they may be used to measure campaigns or support advertising functionality.</li>
          <li><strong>Security:</strong> Certain technologies may support security, fraud prevention, or abuse detection.</li>
        </ul>

        <h2>3. Cookie Categories</h2>
        
        <h3>Essential</h3>
        <p>
          Required for basic website functionality, security, or requested services. These generally cannot be disabled through a cookie-preference interface when they are necessary for the website to operate.
        </p>

        <h3>Preferences</h3>
        <p>
          Used to remember choices made by visitors. Examples may include language, interface preferences, and consent settings.
        </p>

        <h3>Analytics</h3>
        <p>
          Used to understand website usage and performance. Examples may include page visits, interaction data, traffic sources, and device information.
        </p>

        <h3>Advertising</h3>
        <p>
          May be used to measure advertising campaigns, build audiences, or provide advertising-related functionality.
        </p>

        <h2>4. Cookie Inventory</h2>
        {cookieInventory.length > 0 ? (
          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)] text-[var(--foreground)]">
                  <th className="py-4 font-semibold pr-4">Cookie</th>
                  <th className="py-4 font-semibold pr-4">Provider</th>
                  <th className="py-4 font-semibold pr-4">Category</th>
                  <th className="py-4 font-semibold pr-4">Duration</th>
                  <th className="py-4 font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-[var(--foreground-muted)]">
                {cookieInventory.map((cookie, index) => (
                  <tr key={index} className="border-b border-[var(--border)]/50">
                    <td className="py-4 pr-4 font-mono text-xs">{cookie.name}</td>
                    <td className="py-4 pr-4">{cookie.provider}</td>
                    <td className="py-4 pr-4 capitalize">{cookie.category}</td>
                    <td className="py-4 pr-4">{cookie.duration}</td>
                    <td className="py-4 leading-relaxed">{cookie.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-[var(--surface-subtle)] border border-[var(--border)] p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 !mt-0">Current Cookie Inventory</h3>
            <p className="text-[var(--foreground-muted)] !mb-0">
              No non-essential cookies are currently documented for this website.
            </p>
          </div>
        )}

        <h2>5. Essential Cookies</h2>
        <p>
          Certain cookies or technologies may be necessary for security, authentication, session management, consent preferences, and core functionality. Where technically necessary, these may not require the same consent treatment as optional technologies, subject to applicable requirements.
        </p>

        <h2>6. Preference Cookies</h2>
        <p>
          Optional preference technologies may be used to remember visitor choices to provide an enhanced and personalized experience.
        </p>

        <h2>7. Analytics Cookies</h2>
        <p>
          Analytics technologies may help OVEQIRA understand which pages receive visits, how visitors navigate the site, which content is useful, technical performance, and general usage patterns.
        </p>

        <h2>8. Advertising Cookies</h2>
        <p>
          If utilized, advertising technologies may be used for campaign measurement, audience creation, advertising delivery, and conversion measurement. 
        </p>

        <h2>9. Third-Party Technologies</h2>
        <p>
          Our website may incorporate third-party technologies that place cookies or collect information. Possible sources include embedded videos, maps, social media embeds, payment systems, scheduling tools, analytics platforms, advertising platforms, or chat systems. These services are governed by their respective providers' privacy policies.
        </p>

        <h2>10. Cookie Duration</h2>
        <p>The lifespan of the cookies we use falls into two categories:</p>
        <ul>
          <li><strong>Session Cookies:</strong> These are temporary and are generally removed when the browsing session ends or you close your browser.</li>
          <li><strong>Persistent Cookies:</strong> These remain on your device for a defined period or until you manually delete them.</li>
        </ul>

        <h2>11. Managing Cookies</h2>
        <p>
          Visitors may manage cookies through their browser settings and device settings. Disabling certain cookies may affect website functionality and your experience.
        </p>
        <p>
          You can also manage your consent preferences for this website at any time:
        </p>
        <button 
          onClick={() => document.dispatchEvent(new CustomEvent('open-cookie-preferences'))}
          className="px-4 py-2 mt-2 border border-[var(--border-strong)] bg-[var(--surface-hover)] text-[var(--foreground)] rounded-md hover:bg-[var(--surface-subtle)] hover:border-[var(--accent)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          Manage Cookie Preferences
        </button>

        <h2>12. Browser Controls</h2>
        <p>
          Common browsers provide controls for blocking cookies, deleting cookies, allowing cookies, and clearing site data. You can usually find these settings in the "Options" or "Preferences" menu of your browser.
        </p>

        <h2>13. Changes to This Policy</h2>
        <p>
          OVEQIRA may update this policy when website technologies change, analytics or advertising technologies are added or modified, third-party services change, or when legal and operational requirements change.
        </p>

        <h2>14. Contact Us</h2>
        <p>
          If you have questions about this Cookie Policy or how cookies are used on the OVEQIRA website, contact us using the official business contact information below:
        </p>
        <p className="mt-4 font-mono text-sm bg-[var(--border)]/30 p-4 rounded-md">
          Privacy Inquiries: {legalConfig.contactEmail}
        </p>
      </div>
    </LegalPageLayout>
  );
}

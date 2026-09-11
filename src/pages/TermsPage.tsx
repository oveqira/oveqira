import React from 'react';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';
import { legalConfig } from '../data';

export default function TermsPage() {
  const noticeText = "These Terms & Conditions establish the general rules for using the OVEQIRA website. For specific client engagements, projects, or services, a separate formal agreement (such as a Statement of Work, Proposal, or Master Services Agreement) will apply and govern that relationship.";

  return (
    <LegalPageLayout 
      title="Terms & Conditions"
      lastUpdated={legalConfig.lastUpdated}
      intro="These Terms & Conditions govern your access to and use of the OVEQIRA website, content, and digital infrastructure."
      noticeText={noticeText}
    >
      <div className="prose prose-invert max-w-none prose-headings:text-[var(--foreground)] prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-[var(--foreground-muted)] prose-p:leading-relaxed prose-a:text-[var(--accent)] prose-ul:text-[var(--foreground-muted)] prose-li:text-[var(--foreground-muted)]">
        
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using the {legalConfig.companyName} ("we", "our", or "us") website, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access the website.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          The website and its original content, features, designs, and functionality are owned by {legalConfig.companyName} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>
        <p>You may not:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Modify, reproduce, or copy our website materials</li>
          <li>Use our materials for any commercial purpose without written consent</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Attempt to decompile or reverse engineer any software contained on the website</li>
        </ul>

        <h2>3. Services and Client Work</h2>
        <p>
          The information provided on this website regarding our services (including web design, development, marketing, and automation) is for general informational purposes. All formal client engagements are subject to separate, specific agreements (e.g., a Statement of Work, Quotation, or Master Services Agreement) which will supersede these general website terms regarding the delivery of those services.
        </p>

        <h2>4. Accuracy of Materials</h2>
        <p>
          The materials appearing on the website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice, but we do not make any commitment to update the materials.
        </p>

        <h2>5. Portfolio and Case Studies</h2>
        <p>
          Our website displays examples of past work, case studies, and design concepts. These are provided for illustrative purposes only. Past performance or creative outcomes do not guarantee similar results for future projects, as every business and project requires a custom approach based on distinct variables.
        </p>

        <h2>6. Third-Party Links and Tools</h2>
        <p>
          Our website may contain links to third-party web sites or services that are not owned or controlled by {legalConfig.companyName}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          In no event shall {legalConfig.companyName}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Your access to or use of or inability to access or use the website</li>
          <li>Any conduct or content of any third party on the website</li>
          <li>Any content obtained from the website</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content</li>
        </ul>

        <h2>8. Disclaimer</h2>
        <p>
          Your use of the website is at your sole risk. The website is provided on an "AS IS" and "AS AVAILABLE" basis. The website is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of {legalConfig.jurisdiction}, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>

        <h2>10. Dispute Resolution</h2>
        <p>
          Any disputes arising from or relating to the use of this website shall be resolved through {legalConfig.disputeResolution}.
        </p>

        <h2>11. Severability</h2>
        <p>
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
        </p>

        <h2>12. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2>13. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="mt-4 font-mono text-sm bg-[var(--border)]/30 p-4 rounded-md">
          Legal Inquiries: {legalConfig.contactEmail}
        </p>
      </div>
    </LegalPageLayout>
  );
}

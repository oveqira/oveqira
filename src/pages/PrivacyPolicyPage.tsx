import React from 'react';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';
import { legalConfig } from '../data';

export default function PrivacyPolicyPage() {
  const noticeText = "This Privacy Policy is provided for general website and business use and should be reviewed and adapted to OVEQIRA's actual data practices and applicable legal requirements before publication.";

  return (
    <LegalPageLayout 
      title="Privacy Policy"
      lastUpdated={legalConfig.lastUpdated}
      intro="This Privacy Policy explains how OVEQIRA collects, uses, and protects personal information when you use our website, contact us, or engage our services."
      noticeText={noticeText}
    >
      <div className="prose prose-invert max-w-none prose-headings:text-[var(--foreground)] prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-[var(--foreground-muted)] prose-p:leading-relaxed prose-a:text-[var(--accent)] prose-ul:text-[var(--foreground-muted)] prose-li:text-[var(--foreground-muted)]">
        
        <h2>1. Introduction</h2>
        <p>
          At {legalConfig.companyName} ("we", "our", or "us"), we respect your privacy and are committed to protecting it. This Privacy Policy governs your access to and use of our website and services.
        </p>
        
        <h2>2. Information We Collect</h2>
        <p>Depending on how you interact with our website and services, we may collect:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Name and contact details (email address, phone number)</li>
          <li>Company or organization information</li>
          <li>Project requirements and goals</li>
          <li>Messages submitted through contact forms</li>
          <li>Billing or business information where required for services</li>
        </ul>

        <h2>3. Automatically Collected Information</h2>
        <p>Where enabled, we may potentially collect technical information when you visit our website, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>IP address and browser type</li>
          <li>Device type and operating system</li>
          <li>Pages visited and approximate usage information</li>
          <li>Referral source and timestamps</li>
          <li>Technical logs to ensure security and performance</li>
        </ul>

        <h2>4. How We Use Information</h2>
        <p>We may use the collected information for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Responding to inquiries and understanding project requirements</li>
          <li>Providing requested services and communicating with clients</li>
          <li>Improving website performance and our service offerings</li>
          <li>Maintaining security, preventing abuse, and understanding website usage</li>
          <li>Fulfilling contractual or legal obligations</li>
        </ul>

        <h2>5. Cookies and Similar Technologies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to function correctly and understand usage. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For detailed information, please review our Cookie Policy.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          We may employ third-party companies and individuals to facilitate our website, provide the website on our behalf, perform website-related services, or assist us in analyzing how our website is used. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>

        <h2>7. Advertising and Analytics</h2>
        <p>
          If we use advertising platforms or third-party analytics services, those services may collect information about your interactions with our website to provide relevant advertising or analyze usage. These services are governed by their respective privacy policies.
        </p>

        <h2>8. Data Security</h2>
        <p>
          We prioritize the security of your data and use reasonable, commercially acceptable means to protect it. However, remember that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>9. Data Retention</h2>
        <p>
          We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as required by law, resolving disputes, and enforcing our legal agreements and policies.
        </p>

        <h2>10. Your Privacy Rights</h2>
        <p>Depending on your location and applicable jurisdiction, you may have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to certain processing of your data</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>

        <h2>11. External Links</h2>
        <p>
          Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2>12. International Data Transfers</h2>
        <p>
          Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.
        </p>

        <h2>13. Children's Privacy</h2>
        <p>
          Our website is not intentionally designed to collect personal information from children. If we become aware that we have collected personal data from a child without verification of parental consent, we take steps to remove that information from our servers.
        </p>

        <h2>14. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time when our business practices, technologies, or legal requirements change. The updated version will be indicated by an updated "Last Updated" date.
        </p>

        <h2>15. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or want to make a privacy-related request, please contact us at:
        </p>
        <p className="mt-4 font-mono text-sm bg-[var(--border)]/30 p-4 rounded-md">
          Privacy Inquiries: {legalConfig.privacy.contactEmail}
        </p>
      </div>
    </LegalPageLayout>
  );
}

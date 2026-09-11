import React from 'react';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';
import { legalConfig } from '../data';

export default function DisclaimerPage() {
  const noticeText = "The information on this website is intended to provide general information about OVEQIRA, our capabilities, services, and areas of expertise. It should not be interpreted as a guarantee of specific business, financial, technical, marketing, legal, or other professional outcomes.";

  return (
    <LegalPageLayout 
      title="Disclaimer"
      lastUpdated={legalConfig.lastUpdated}
      intro="Information published by OVEQIRA is provided for general informational and business purposes. This page explains important limitations and responsibilities when using our website and services."
      noticeText={noticeText}
    >
      <div className="prose prose-invert max-w-none prose-headings:text-[var(--foreground)] prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-[var(--foreground-muted)] prose-p:leading-relaxed prose-a:text-[var(--accent)] prose-ul:text-[var(--foreground-muted)] prose-li:text-[var(--foreground-muted)]">
        
        <h2>1. General Information</h2>
        <p>
          Information on the OVEQIRA website may include service descriptions, educational content, business insights, marketing information, examples, opinions, recommendations, technical explanations, project information, and blog content. This information is provided for general purposes. It may not address the specific circumstances of every business or individual.
        </p>

        <h2>2. No Professional Advice</h2>
        <p>
          Website content should not automatically be treated as legal advice, financial advice, tax advice, investment advice, medical advice, accounting advice, cybersecurity certification, or regulatory advice. Where specialized professional advice is required, users should consult an appropriately qualified professional. OVEQIRA does not provide regulated professional services in these areas.
        </p>

        <h2>3. Service Information</h2>
        <p>
          OVEQIRA's website describes services at a general level. Actual scope, deliverables, timeline, pricing, responsibilities, technical specifications, support, licensing, and ownership may differ between projects. The applicable proposal, quotation, statement of work, or service agreement should define the specific engagement.
        </p>

        <div className="bg-[var(--border)]/10 border-l-2 border-[var(--accent)] p-6 my-8 rounded-r-lg">
          <h3 className="!mt-0 !mb-4 text-xl font-semibold text-[var(--foreground)]">Results Depend on Many Variables.</h3>
          <p className="!my-0 text-[var(--foreground-muted)] leading-relaxed">
            OVEQIRA does not automatically guarantee specific business outcomes from digital services. Potential outcomes may depend on market conditions, competition, client offer, pricing, audience, budget, implementation, existing brand strength, website quality, platform algorithms, customer behavior, and external economic conditions. Specific performance commitments, if any, should be defined in a signed agreement.
          </p>
        </div>

        <h2>4. Marketing and Performance</h2>
        <p>
          Examples, strategies, recommendations, or performance discussions presented by OVEQIRA are not promises of future results. We do not claim guaranteed revenue, guaranteed leads, guaranteed conversions, guaranteed customer acquisition, guaranteed ROI, or guaranteed growth unless a specific contractual commitment actually exists.
        </p>

        <h2>5. SEO Disclaimer</h2>
        <p>
          SEO outcomes can be influenced by search engine algorithms, competition, website history, content quality, technical factors, industry, location, search behavior, and search engine policies. OVEQIRA does not guarantee specific Google rankings, search positions, traffic levels, leads, or revenue unless expressly agreed otherwise in writing and legally permissible.
        </p>

        <h2>6. Google Ads & Meta Ads Disclaimer</h2>
        <p>
          Advertising results depend on factors including campaign setup, budget, audience, creative, offer, landing page, competition, platform algorithms, platform policies, and market conditions. Advertising platforms control their own approval systems, auctions, delivery, targeting, policies, and pricing. OVEQIRA cannot guarantee a specific advertising result. Furthermore, OVEQIRA's service fees are completely separate from advertising platform spend.
        </p>

        <h2>7. Social Media Disclaimer</h2>
        <p>
          Social media results may depend on platform algorithms, content quality, audience behavior, posting frequency, account history, competition, trends, and platform policies. We do not guarantee viral content, follower counts, engagement levels, reach, leads, or sales.
        </p>

        <h2>8. Photography & Videography</h2>
        <p>
          Visual examples on the website are intended to demonstrate creative capabilities. Final production outcomes may vary based on location, lighting, subject, equipment, production conditions, creative direction, client requirements, and post-production requirements. We clearly label client work, concept work, internal work, and sample work where applicable.
        </p>

        <h2>9. AI & Automation Disclaimer</h2>
        <p>
          AI and automated systems may produce inaccurate information, incomplete information, unexpected outputs, or inconsistent results. AI systems should not automatically be treated as infallible. For important business decisions, users should verify outputs where appropriate. Automation may also depend on third-party APIs, platform availability, integrations, permissions, data quality, software updates, and service outages. OVEQIRA does not promise 100% AI accuracy, zero errors, guaranteed automation savings, or guaranteed productivity improvements.
        </p>

        <h2>10. Custom Digital Products</h2>
        <p>
          Custom software and digital products may depend on hosting infrastructure, third-party APIs, browsers, operating systems, integrations, external platforms, user configuration, and future software updates. No software system should be represented as permanently immune from bugs, downtime, compatibility problems, or security risks. Project-specific warranties and support commitments should be defined by the applicable agreement.
        </p>

        <h2>11. Third-Party Services</h2>
        <p>
          OVEQIRA may use or integrate third-party services (such as hosting, domains, analytics, advertising, APIs, payment providers, cloud infrastructure, CMS platforms, plugins, automation platforms, and communication platforms). Third-party services may change their pricing, features, policies, availability, APIs, or security requirements. OVEQIRA cannot control third-party services.
        </p>

        <h2>12. External Links</h2>
        <p>
          The website may contain links to third-party websites. External links are provided for convenience or reference. OVEQIRA does not necessarily control third-party content, availability, security, privacy practices, accuracy, or terms. Users should review the relevant third party's own policies.
        </p>

        <h2>13. Client Responsibilities</h2>
        <p>
          Clients remain responsible for information, materials, and instructions they provide. This may include business information, product information, claims, images, videos, trademarks, documents, customer data, credentials, and legal statements. Clients should ensure that information supplied to OVEQIRA is accurate and that they have the necessary rights to use it.
        </p>

        <h2>14. Website Availability</h2>
        <p>
          OVEQIRA aims to maintain website availability but cannot guarantee uninterrupted access. Possible causes of interruption include hosting problems, maintenance, software updates, infrastructure failures, cybersecurity incidents, third-party outages, network problems, and circumstances beyond reasonable control. 
        </p>

        <h2>15. Information Accuracy</h2>
        <p>
          Reasonable efforts may be made to keep website information current and accurate. However, information may become outdated, service offerings may change, prices may change, technologies may change, and external information may change. Visitors should confirm important information before relying on it.
        </p>

        <h2>16. Errors and Omissions</h2>
        <p>
          The website may occasionally contain typographical errors, outdated information, technical errors, or omissions. OVEQIRA may correct or update information without prior notice where appropriate.
        </p>

        <h2>17. Intellectual Property</h2>
        <p>
          Website materials may include text, graphics, logos, designs, photographs, videos, layouts, software, and branding elements. These materials may be owned by OVEQIRA or third parties and may be protected by applicable intellectual property laws. Visitors should not reproduce, modify, distribute, or commercially exploit protected materials without appropriate authorization. Client work displayed on the website may be subject to separate ownership or confidentiality arrangements.
        </p>

        <h2>18. Portfolio and Examples</h2>
        <p>
          Portfolio examples may include completed client projects, concept projects, internal projects, experimental work, and illustrative examples. Every project is categorized accordingly. We never present concept work as completed client work, nor do we fabricate client relationships.
        </p>

        <h2>19. Testimonials and Reviews</h2>
        <p>
          Where testimonials are displayed on the website, they represent genuine feedback. OVEQIRA does not generate fictional testimonials, client quotes, ratings, reviews, or endorsements.
        </p>

        <h2>20. Results and Case Studies</h2>
        <p>
          Where case studies are published, we clearly distinguish between verified results (supported by actual client/project information), qualitative outcomes (observations without numerical claims), and conceptual examples (illustrative scenarios). We never create fictional performance statistics.
        </p>

        <h2>21. Limitation of Responsibility</h2>
        <p>
          To the extent permitted by applicable law, OVEQIRA does not accept responsibility for losses arising solely from reliance on general website information where such exclusion is legally permitted.
        </p>

        <h2>22. No Warranties</h2>
        <p>
          Website information may be provided on a general informational basis and OVEQIRA does not make unrestricted guarantees concerning accuracy, completeness, availability, suitability, uninterrupted access, or specific business outcomes. Specific contractual warranties, where any exist, should be governed by the applicable agreement.
        </p>

        <h2>23. Changes to This Disclaimer</h2>
        <p>
          OVEQIRA may update this Disclaimer when services change, website content changes, technologies change, legal requirements change, or business practices change. 
        </p>

        <h2>24. Questions About This Disclaimer?</h2>
        <p>
          If you have questions about information presented on the OVEQIRA website or this Disclaimer, contact us at:
        </p>
        <p className="mt-4 font-mono text-sm bg-[var(--border)]/30 p-4 rounded-md">
          Business Inquiries: {legalConfig.contactEmail}
        </p>
      </div>
    </LegalPageLayout>
  );
}

import React from 'react';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';
import { legalConfig } from '../data';

export default function RefundPolicyPage() {
  const noticeText = "Refund and cancellation terms may vary depending on the service, project stage, payment structure, and applicable agreement. Where a signed proposal, statement of work, quotation, or service agreement contains specific refund or cancellation terms, those terms should be reviewed alongside this policy.";

  return (
    <LegalPageLayout 
      title="Refund & Cancellation Policy"
      lastUpdated={legalConfig.lastUpdated}
      intro="This policy explains the general principles that may apply to cancellations, refunds, project changes, and service termination at OVEQIRA."
      noticeText={noticeText}
    >
      <div className="prose prose-invert max-w-none prose-headings:text-[var(--foreground)] prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-[var(--foreground-muted)] prose-p:leading-relaxed prose-a:text-[var(--accent)] prose-ul:text-[var(--foreground-muted)] prose-li:text-[var(--foreground-muted)]">
        
        <h2>1. General Policy</h2>
        <p>
          OVEQIRA provides a mixture of digital services, creative services, project-based work, ongoing services, consulting or strategy, digital development, advertising management, content production, and automation and software work. Because these services involve time, resources, planning, production, and potentially third-party costs, refund eligibility may depend on the work already performed at the time of cancellation.
        </p>

        <h2>2. Project-Based Services</h2>
        <p>
          Project-based services may include website development, UI/UX design, branding, custom digital products, photography, videography, automation development, and marketing projects. For these projects, the applicable proposal or agreement should define the project scope, fees, payment schedule, deliverables, milestones, revisions, and cancellation terms.
        </p>
        <p>
          Where work has already been performed, the amount potentially refundable may depend on the applicable agreement and work completed.
        </p>

        <h2>3. Deposits and Advance Payments</h2>
        <p>
          Some projects may require an advance payment before work begins. Where an advance payment or deposit applies, its refundability will depend on the applicable proposal, agreement, project status, and applicable law.
        </p>

        <h2>4. Cancellation Before Work Begins</h2>
        <p>
          If a client requests cancellation before meaningful project work begins, refund eligibility may depend on the applicable agreement, whether resources have already been committed, third-party costs, administrative or preparation work, and applicable law.
        </p>

        <h2>5. Cancellation After Work Begins</h2>
        <p>
          Once work has started, OVEQIRA may already have invested strategy time, research, design, development, production, project management, and third-party resources. Therefore, cancellation after work begins may not result in a full refund. Any refund should be determined according to the applicable agreement and actual circumstances.
        </p>

        <h2>6. Completed Deliverables</h2>
        <p>
          Once a digital deliverable—such as a website, landing page, UI design, branding assets, software, automation workflow, video, photography, or marketing assets—has been substantially completed, delivered, approved, or transferred according to the applicable agreement, refund eligibility may be limited.
        </p>

        <h2>7. Revisions and Change Requests</h2>
        <p>
          Dissatisfaction with a deliverable does not automatically constitute grounds for a refund where the deliverable follows the agreed brief, requested revisions remain available, and the work is within the agreed scope. Clients should communicate reasonable feedback according to the agreed revision process. Additional work caused by changed requirements may be treated as new scope.
        </p>

        <h2>8. Third-Party Costs</h2>
        <p>
          Third-party charges are separate from OVEQIRA service fees. Potential third-party costs include domain registration, hosting, premium plugins, software subscriptions, stock assets, fonts, APIs, cloud services, payment processing, advertising platforms, and external production costs. Where OVEQIRA has already paid a third-party provider on behalf of a client, that amount may not be refundable if the third party does not provide a refund, subject to the provider's terms.
        </p>

        <h2>9. Advertising Spend</h2>
        <p>
          Advertising budgets paid to platforms such as Google or Meta are separate from OVEQIRA's management fees unless otherwise agreed. Once advertising funds have been spent by the advertising platform, OVEQIRA cannot independently reverse that spend. Any platform-issued refunds are subject to the platform's own policies.
        </p>

        <h2>10. Social Media and Content Services</h2>
        <p>
          For ongoing content services, cancellation may depend on the billing cycle, work already completed, content already produced, scheduled campaigns, approved content, third-party expenses, and the applicable agreement. If content has already been created specifically for a client, that work may be treated as completed work according to the applicable agreement.
        </p>

        <h2>11. SEO Services</h2>
        <p>
          SEO is an ongoing service. Fees may cover work such as audits, keyword research, content planning, technical optimization, on-page optimization, reporting, and strategy. Because this work involves ongoing professional effort, refund eligibility may depend on work already completed and the applicable agreement.
        </p>

        <h2>12. Subscriptions and Recurring Services</h2>
        <p>
          For recurring services such as SEO retainers, social media management, marketing management, website maintenance, automation support, hosting, or technical support, the applicable agreement should define the billing frequency, cancellation notice, renewal, service period, and refund rules.
        </p>

        <h2>13. Client-Caused Delays</h2>
        <p>
          Delays caused by the client may affect project delivery. Examples include missing content, unavailable access, delayed approvals, repeated absence of feedback, incomplete information, or delayed payments. Client-caused delays do not automatically create a refund entitlement. The project may instead be rescheduled or otherwise handled according to the applicable agreement.
        </p>

        <h2>14. Client Change of Direction</h2>
        <p>
          Substantial changes to the agreed project direction may require a revised scope, revised timeline, or additional fees. Examples include changing website structure, business requirements, target audience, brand direction, functionality, platform, or product requirements after significant work has already been completed. These changes should not automatically be treated as defects.
        </p>

        <h2>15. OVEQIRA-Initiated Cancellation</h2>
        <p>
          OVEQIRA may, where permitted by the applicable agreement, discontinue or terminate a project due to circumstances such as inability to continue the project, serious client breach, non-payment, unlawful activity, or prolonged lack of required cooperation. Where OVEQIRA terminates a project for reasons attributable to OVEQIRA, any applicable refund or outstanding obligations should be handled according to the project agreement and applicable law.
        </p>

        <h2>16. Service Quality Issues</h2>
        <p>
          If a client believes a service does not meet the agreed scope, we encourage the client to contact OVEQIRA first. Potential remedies may include, depending on the circumstances: correction, revision, replacement, completion of outstanding work, or reasonable remediation. Refunds should not automatically be presented as the first remedy when the issue can reasonably be corrected within the agreed scope.
        </p>

        <h2>17. Non-Refundable Items</h2>
        <p>
          Certain costs may be non-refundable where they have already been incurred, a third party does not provide a refund, work has already been completed, the applicable agreement identifies them as non-refundable, or applicable law permits such treatment.
        </p>

        <h2>18. Exceptional Circumstances</h2>
        <p>
          Exceptional situations may be considered individually. Examples include serious technical issues, significant service failure, extraordinary circumstances, or mutually agreed project termination. 
        </p>

        <h2>19. How to Request a Refund or Cancellation</h2>
        <div className="space-y-6 mt-6">
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)] !mt-0 !mb-2">Step 1</h3>
            <p className="text-[var(--foreground-muted)] !my-0">Contact OVEQIRA using the official business contact method.</p>
          </div>
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)] !mt-0 !mb-2">Step 2</h3>
            <p className="text-[var(--foreground-muted)] !my-0">Provide your name, company (if applicable), project/service, invoice or reference number, reason for the request, and relevant supporting information.</p>
          </div>
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)] !mt-0 !mb-2">Step 3</h3>
            <p className="text-[var(--foreground-muted)] !my-0">OVEQIRA reviews the request against the applicable agreement, project status, payments, work completed, third-party costs, and relevant circumstances.</p>
          </div>
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)] !mt-0 !mb-2">Step 4</h3>
            <p className="text-[var(--foreground-muted)] !my-0">OVEQIRA communicates the decision and any applicable next steps.</p>
          </div>
        </div>

        <h2>20. Refund Processing</h2>
        <p>
          Approved refunds will be processed through the appropriate payment method where reasonably possible. Processing time may depend on the payment provider, banking system, payment method, and transaction processing.
        </p>

        <h2>21. Taxes and Payment Processing Fees</h2>
        <p>
          Refunds involving taxes, transaction fees, gateway charges, or other costs may be handled according to the applicable agreement, payment provider rules, and applicable law.
        </p>

        <h2>22. Need Help With a Cancellation or Refund?</h2>
        <p>
          We're happy to review your situation and explain the applicable terms. For questions regarding these policies, contact us at:
        </p>
        <p className="mt-4 font-mono text-sm bg-[var(--border)]/30 p-4 rounded-md">
          Refund Inquiries: {legalConfig.refund.requestEmail}
        </p>
      </div>
    </LegalPageLayout>
  );
}

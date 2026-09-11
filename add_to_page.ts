import * as fs from 'fs';

let content = fs.readFileSync('src/pages/ServiceDetailPage.tsx', 'utf-8');

const imports = `
  ServiceContentPillars,
  ServicePlatformStrategy,
  ServiceContentProduction,
  ServiceContentSystem,
  ServiceBrandConsistency,
  ServiceBusinessJourney,
  ServiceSocialAnalytics,
  ServiceContentFormats,
`;
content = content.replace(/ServiceAdsBudget,/, 'ServiceAdsBudget,\n' + imports);

const sections = `
      {/* Social Media Specialized Sections */}
      {(service.contentPillars || service.platformStrategy || service.contentProduction || service.contentSystem || service.brandConsistency || service.businessJourney || service.socialAnalytics || service.contentFormats) && (
        <Section surface="dark" className="py-24 lg:py-32 border-b border-[var(--border)] bg-[#11141A]/20">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            {service.contentPillars && <ServiceContentPillars data={service.contentPillars} />}
            {service.platformStrategy && <ServicePlatformStrategy data={service.platformStrategy} />}
            {service.contentProduction && <ServiceContentProduction data={service.contentProduction} />}
            {service.contentSystem && <ServiceContentSystem data={service.contentSystem} />}
            {service.brandConsistency && <ServiceBrandConsistency data={service.brandConsistency} />}
            {service.businessJourney && <ServiceBusinessJourney data={service.businessJourney} />}
            {service.socialAnalytics && <ServiceSocialAnalytics data={service.socialAnalytics} />}
            {service.contentFormats && <ServiceContentFormats data={service.contentFormats} />}
          </Container>
        </Section>
      )}
`;

content = content.replace(/\{\/\* Digital Marketing Specialized Sections \*\/}/, sections + '\n      {/* Digital Marketing Specialized Sections */}');

fs.writeFileSync('src/pages/ServiceDetailPage.tsx', content);

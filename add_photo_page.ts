import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ServiceDetailPage.tsx', 'utf-8');

const imports = `
  ServiceCapabilityGridBlock,
  ServiceMultiChannelContent,
  ServiceCreativeDirection,
  ServiceSocialFirstProduction,
  ServiceCommercialPurpose,
  ServiceProductionTypes,
  ServiceVisualPortfolio,
`;
content = content.replace(/ServiceContentFormats,/, 'ServiceContentFormats,\n' + imports);

const sections = `
      {/* Photography & Videography Specialized Sections */}
      {(service.photographyCapabilities || service.videographyCapabilities || service.multiChannelContent || service.creativeDirection || service.socialFirstProduction || service.commercialPurpose || service.productionTypes || service.visualPortfolio) && (
        <Section surface="dark" className="py-24 lg:py-32 border-b border-[var(--border)] bg-[#0A0C10]">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            {service.visualPortfolio && <ServiceVisualPortfolio data={service.visualPortfolio} />}
            {service.photographyCapabilities && <ServiceCapabilityGridBlock data={service.photographyCapabilities} />}
            {service.videographyCapabilities && <ServiceCapabilityGridBlock data={service.videographyCapabilities} />}
            {service.multiChannelContent && <ServiceMultiChannelContent data={service.multiChannelContent} />}
            {service.creativeDirection && <ServiceCreativeDirection data={service.creativeDirection} />}
            {service.socialFirstProduction && <ServiceSocialFirstProduction data={service.socialFirstProduction} />}
            {service.commercialPurpose && <ServiceCommercialPurpose data={service.commercialPurpose} />}
            {service.productionTypes && <ServiceProductionTypes data={service.productionTypes} />}
          </Container>
        </Section>
      )}
`;
content = content.replace(/\{\/\* Social Media Specialized Sections \*\/}/, sections + '\n      {/* Social Media Specialized Sections */}');

fs.writeFileSync('src/pages/ServiceDetailPage.tsx', content);

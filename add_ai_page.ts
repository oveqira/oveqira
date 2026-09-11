import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ServiceDetailPage.tsx', 'utf-8');

const imports = `
  ServiceAiVsAutomation,
  ServiceUseCases,
  ServiceAiFeature,
  ServiceIntegrations,
  ServiceHumanInTheLoop,
  ServiceTransformation,
`;
content = content.replace(/ServiceVisualPortfolio,/, 'ServiceVisualPortfolio,\n' + imports);

const sections = `
      {/* AI & Automation Specialized Sections */}
      {(service.aiVsAutomation || service.useCases || service.aiChatbots || service.whatsappAutomation || service.integrations || service.humanInTheLoop || service.transformation) && (
        <Section surface="dark" className="py-24 lg:py-32 border-b border-[var(--border)] bg-[#0A0C10]">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            {service.aiVsAutomation && <ServiceAiVsAutomation data={service.aiVsAutomation} />}
            {service.useCases && <ServiceUseCases data={service.useCases} />}
            {service.aiChatbots && <ServiceAiFeature data={service.aiChatbots} />}
            {service.whatsappAutomation && <ServiceAiFeature data={service.whatsappAutomation} />}
            {service.integrations && <ServiceIntegrations data={service.integrations} />}
            {service.humanInTheLoop && <ServiceHumanInTheLoop data={service.humanInTheLoop} />}
            {service.transformation && <ServiceTransformation data={service.transformation} />}
          </Container>
        </Section>
      )}
`;
content = content.replace(/\{\/\* Photography & Videography Specialized Sections \*\/}/, sections + '\n      {/* Photography & Videography Specialized Sections */}');

fs.writeFileSync('src/pages/ServiceDetailPage.tsx', content);

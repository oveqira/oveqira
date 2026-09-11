import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { ArrowRight } from 'lucide-react';

import {
  ServiceBreadcrumbs,
  ServiceHero,
  ServiceProblem,
  ServiceUXUIExplainer,
  ServiceApproach,
  ServiceCapabilities,
  ServiceWebsiteTypes,
  ServiceDesignSystems,
  
  ServiceTechnicalSEO,
  ServiceContentStrategy,
  ServiceLocalSEO,
  ServiceWebsiteExperience,
  
  ServicePlatformComparison,
  ServiceCampaignStructure,
  ServiceAdsCreative,
  ServiceLandingExperience,
  ServiceAdsMeasurement,
  ServiceAdsOptimization,
  ServiceAdsBudget,

  ServiceContentPillars,
  ServicePlatformStrategy,
  ServiceContentProduction,
  ServiceContentSystem,
  ServiceBrandConsistency,
  ServiceBusinessJourney,
  ServiceSocialAnalytics,
  ServiceContentFormats,

  ServiceCapabilityGridBlock,
  ServiceMultiChannelContent,
  ServiceCreativeDirection,
  ServiceSocialFirstProduction,
  ServiceCommercialPurpose,
  ServiceProductionTypes,
  ServiceVisualPortfolio,

  ServiceAiVsAutomation,
  ServiceUseCases,
  ServiceAiFeature,
  ServiceIntegrations,
  ServiceHumanInTheLoop,
  ServiceTransformation,




  ServiceChannelEcosystem,
  ServiceAudiencePositioning,
  ServiceContentCreative,
  ServicePaidOrganic,
  ServiceConversionJourney,

  ServiceBenefits,
  ServiceDeliverables,
  ServiceProcess,
  ServiceDesignTransformation,
  ServiceMaturity,
  ServiceMeasurement,
  ServiceTechnology,
  ServiceRelatedWork,
  ServiceWhyOveqira,
  ServiceFAQ,
  ServiceCTA
} from '../components/services/ServiceDetailBlocks';
import NotFoundPage from './NotFoundPage';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = service.seo?.title || `Oveqira | ${service.title}`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.seo?.description || service.shortDescription);
      }
    }
  }, [service]);

  if (!service) {
    return <NotFoundPage />;
  }

  // Helper to find related services
  const relatedServices = service.relatedServices
    ? servicesData.filter(s => service.relatedServices?.includes(s.id))
    : [];

  return (
    <div className="bg-[var(--background)]">
      {/* 01 Breadcrumbs & 02 Service Hero */}
      <Section  className="pt-32 pb-16 lg:pb-24 border-b border-[var(--border)]">
        <Container size="xl">
          <ServiceBreadcrumbs serviceName={service.title} />
          <ServiceHero service={service} />
        </Container>
      </Section>

      {/* 03 Problem & UX Explainer & 04 Approach */}
      {(service.problem || service.uxUiExplainer || service.approach) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)]">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            <ServiceProblem problem={service.problem} />
            <ServiceUXUIExplainer explainer={service.uxUiExplainer} />
            <ServiceApproach approach={service.approach} />
          </Container>
        </Section>
      )}

      {/* 05 Capabilities & 06 Types & Design Systems */}
      {(service.capabilities || service.types || service.designSystems) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)]">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            <ServiceCapabilities capabilities={service.capabilities} />
            <ServiceWebsiteTypes types={service.types} />
            <ServiceDesignSystems systems={service.designSystems} />
          </Container>
        </Section>
      )}

      
      {/* SEO Specialized Sections */}
      {(service.technicalSEO || service.contentStrategy || service.localSEO || service.websiteExperience) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface-hover)]">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            <ServiceTechnicalSEO data={service.technicalSEO} />
            <ServiceContentStrategy data={service.contentStrategy} />
            <ServiceLocalSEO data={service.localSEO} />
            <ServiceWebsiteExperience data={service.websiteExperience} />
          </Container>
        </Section>
      )}

      
      {/* Ads Specialized Sections */}
      {(service.platformComparison || service.campaignStructure || service.adsCreative || service.landingExperience || service.adsMeasurement || service.adsOptimization || service.adsBudget) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface-hover)]">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            <ServicePlatformComparison data={service.platformComparison} />
            <ServiceCampaignStructure data={service.campaignStructure} />
            <ServiceAdsCreative data={service.adsCreative} />
            <ServiceLandingExperience data={service.landingExperience} />
            <ServiceAdsMeasurement data={service.adsMeasurement} />
            <ServiceAdsOptimization data={service.adsOptimization} />
            <ServiceAdsBudget data={service.adsBudget} />
          </Container>
        </Section>
      )}

      
      
      
      {/* AI & Automation Specialized Sections */}
      {(service.aiVsAutomation || service.useCases || service.aiChatbots || service.whatsappAutomation || service.integrations || service.humanInTheLoop || service.transformation) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface-subtle)]">
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

      {/* Photography & Videography Specialized Sections */}
      {(service.photographyCapabilities || service.videographyCapabilities || service.multiChannelContent || service.creativeDirection || service.socialFirstProduction || service.commercialPurpose || service.productionTypes || service.visualPortfolio) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface-subtle)]">
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

      {/* Social Media Specialized Sections */}
      {(service.contentPillars || service.platformStrategy || service.contentProduction || service.contentSystem || service.brandConsistency || service.businessJourney || service.socialAnalytics || service.contentFormats) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface-hover)]">
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

      {/* Digital Marketing Specialized Sections */}
      {(service.channelEcosystem || service.audiencePositioning || service.contentCreative || service.paidOrganic || service.conversion) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface-hover)]">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            <ServiceChannelEcosystem data={service.channelEcosystem} />
            <ServiceAudiencePositioning data={service.audiencePositioning} />
            <ServiceContentCreative data={service.contentCreative} />
            <ServicePaidOrganic data={service.paidOrganic} />
            <ServiceConversionJourney data={service.conversion} />
          </Container>
        </Section>
      )}
{/* 07 Benefits & 08 Deliverables */}
      {(service.benefits || service.deliverables) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface-hover)]">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            <ServiceBenefits benefits={service.benefits} />
            <ServiceDeliverables deliverables={service.deliverables} disclaimer={service.deliverablesDisclaimer} />
          </Container>
        </Section>
      )}

      {/* 09 Process & Transformation & Maturity & Measurement */}
      {(service.process || service.designTransformation || service.maturity || service.measurement) && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)]">
          <Container size="xl" className="space-y-24 lg:space-y-32">
            <ServiceProcess process={service.process} />
            <ServiceDesignTransformation transformation={service.designTransformation} />
            <ServiceMaturity data={service.maturity} />
            <ServiceMeasurement data={service.measurement} />
          </Container>
        </Section>
      )}

      {/* 10 Technology */}
      {service.technology && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface-hover)]">
          <Container size="xl">
            <ServiceTechnology technology={service.technology} />
          </Container>
        </Section>
      )}

      {/* 11 Relevant Work */}
      <Section  className="py-24 lg:py-32 border-b border-[var(--border)]">
        <Container size="xl">
          <ServiceRelatedWork serviceTitle={service.title} serviceId={service.id} />
        </Container>
      </Section>

      {/* 12 Why Oveqira */}
      {service.whyOveqira && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface-hover)]">
          <Container size="xl">
            <ServiceWhyOveqira whyItems={service.whyOveqira} />
          </Container>
        </Section>
      )}

      {/* 13 FAQ */}
      {service.faq && (
        <Section  className="py-24 lg:py-32 border-b border-[var(--border)]">
          <Container size="xl">
            <ServiceFAQ faqs={service.faq} />
          </Container>
        </Section>
      )}

      {/* 14 Related Services (Bonus) */}
      {relatedServices.length > 0 && (
        <Section  className="py-24 border-b border-[var(--border)] bg-[var(--surface)]">
          <Container size="xl">
            <Heading level="h3" className="mb-12">You May Also Need</Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(rs => (
                <Link key={rs.id} to={`/services/${rs.slug}`} className="group p-6 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] hover:border-[var(--accent)] transition-colors flex flex-col h-full">
                  <Heading level="h4" className="mb-2 group-hover:text-[var(--accent)] transition-colors">{rs.title}</Heading>
                  <Text muted variant="small" className="mb-6">{rs.shortDescription}</Text>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 15 Final CTA */}
      <Section  className="pb-0">
        <Container size="xl">
          <ServiceCTA cta={service.cta} />
        </Container>
      </Section>
    </div>
  );
}

import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

import { Container } from '../components/ui/Container';
import { Heading, Text, Eyebrow } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

import { GlobalFooter } from '../components/layout/GlobalFooter';
import { CookieBanner } from '../components/layout/CookieBanner';
import { WhatsAppButton } from '../components/layout/WhatsAppButton';

import { projects } from '../data/projects';
import { caseStudies } from '../data/caseStudies';

const getServiceLink = (service: string) => {
  const s = service.toLowerCase();
  if (s.includes('web design') || s.includes('website')) return '/services/web-design-development';
  if (s.includes('seo')) return '/services/seo';
  if (s.includes('social media')) return '/services/social-media';
  return null;
};

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);
  const caseStudy = caseStudies.find(cs => cs.projectId === project?.id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO
    if (project) {
      if (project.id === 'bioxplo') {
        document.title = 'BioXPLO Case Study | OVEQIRA';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', 'How OVEQIRA built a comprehensive digital foundation for BioXPLO, a fast-growing health and wellness brand.');
      } else if (project.id === 'the-fitters') {
        document.title = 'The Fitters | OVEQIRA Case Study';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', 'See how OVEQIRA developed a premium digital presence for The Fitters across website design, SEO, digital marketing, social media, content, and branding.');
      } else if (project.id === 'maurya-printers') {
        document.title = 'Maurya Printers Website | OVEQIRA';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', 'Portfolio showcase for Maurya Printers, designed and developed by OVEQIRA.');
      } else {
        document.title = `${project.title} | OVEQIRA`;
      }
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--background)]">
        <main className="flex-grow flex items-center justify-center pt-32 pb-32">
          <Container size="sm" className="text-center space-y-6">
            <Heading level="h2">Project Not Found</Heading>
            <Text muted>The project you're looking for doesn't exist or has been moved.</Text>
            <div className="pt-8">
              <Button onClick={() => navigate('/work')} variant="primary" iconType="arrow-left">
                Back to Work
              </Button>
            </div>
          </Container>
        </main>
        <GlobalFooter />
      </div>
    );
  }

  const whatsappNumber = "+919319123293";
  const whatsappMessage = encodeURIComponent(`Hi, I saw the ${project.title} project and I'd like to discuss something similar for my business.`);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <main className="flex-grow pt-32 pb-32">
        <Container size="lg">
          {/* Back Navigation */}
          <div className="mb-16">
            <button 
              onClick={() => navigate('/work')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </button>
          </div>

          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-b border-[var(--border)] pb-8">
              <div>
                <Eyebrow>{project.client} {project.brand && project.brand !== project.client ? ` / ${project.brand}` : ''}</Eyebrow>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((cat, i) => (
                  <span key={i} className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest px-3 py-1 bg-[var(--surface-hover)] border border-[var(--border)] rounded-full">
                    {cat.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>

            <Heading level="display" className="!leading-[1.1] !tracking-tight text-4xl md:text-5xl lg:text-6xl">{project.title}</Heading>
            <Text variant="large" muted className="text-xl md:text-2xl leading-relaxed max-w-3xl">{caseStudy ? caseStudy.title : project.shortDescription}</Text>
            {project.websiteUrl && (
              <div className="pt-4">
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px] inline-block">
                  <Button as="span" variant="secondary" className="group inline-flex items-center">
                    View Live Website <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </a>
              </div>
            )}
          </motion.div>
        </Container>

        {/* Large Project Image */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24">
          <div className="aspect-[4/3] md:aspect-[21/9] w-full bg-[var(--surface-hover)] overflow-hidden flex items-center justify-center rounded-[6px] border border-[var(--border)]">
            {project.coverImage ? (
              <img src={project.coverImage} alt={`${project.title} project designed and developed by OVEQIRA`} className="w-full h-full object-cover" />
            ) : (
              <span className="font-mono text-[10px] text-[var(--foreground-subtle)] uppercase tracking-widest">Project visuals will be added here.</span>
            )}
          </div>
        </div>

        <Container size="md">
          <div className="space-y-24">
            
            {/* Overview */}
            {caseStudy && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4 space-y-8">
                   <div>
                     <Heading level="h4" className="text-sm text-[var(--foreground-muted)] uppercase tracking-widest mb-2">Overview</Heading>
                     <Text className="font-medium">{caseStudy.client}</Text>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                     <div>
                       <span className="block text-[10px] uppercase tracking-widest text-[var(--foreground-muted)] font-mono mb-1">Brand</span>
                       <span className="text-sm font-medium">{caseStudy.brand}</span>
                     </div>
                     <div>
                       <span className="block text-[10px] uppercase tracking-widest text-[var(--foreground-muted)] font-mono mb-1">Industry</span>
                       <span className="text-sm font-medium">{project.id === 'the-fitters' ? 'Home Decoration & Furniture' : (project.id === 'bioxplo' ? 'Health & Wellness' : 'Digital Services')}</span>
                     </div>
                     <div>
                       <span className="block text-[10px] uppercase tracking-widest text-[var(--foreground-muted)] font-mono mb-1">Location</span>
                       <span className="text-sm font-medium">{project.id === 'the-fitters' ? 'Gurgaon, Haryana' : 'India'}</span>
                     </div>
                   </div>
                   
                   <div>
                     <span className="block text-[10px] uppercase tracking-widest text-[var(--foreground-muted)] font-mono mb-2">Services</span>
                     <div className="flex flex-wrap gap-1.5">
                       {project.services.map((s, i) => (
                         <span key={i} className="text-xs bg-[var(--surface-hover)] border border-[var(--border)] px-2 py-1 rounded-[4px] text-[var(--foreground-muted)]">
                           {s.replace('Social Media Marketing & Management', 'Social Media').replace('Web Design & Development', 'Website').replace('Maintenance & Support', 'Support')}
                         </span>
                       ))}
                     </div>
                   </div>
                </div>
                <div className="md:col-span-8 space-y-6 md:pl-8 md:border-l border-[var(--border)]">
                   <Text muted className="text-lg md:text-xl leading-relaxed">{caseStudy.overview}</Text>
                </div>
              </div>
            )}

            {/* Challenge */}
            {caseStudy?.challenge?.verified && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-8 border-t border-[var(--border)]">
                <div className="md:col-span-4">
                   <Heading level="h4" className="text-lg">{caseStudy.challenge.title}</Heading>
                </div>
                <div className="md:col-span-8 space-y-6">
                   <Text muted className="text-lg leading-relaxed">{caseStudy.challenge.description}</Text>
                </div>
              </div>
            )}

            {/* Approach */}
            {caseStudy?.approach?.verified && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-8 border-t border-[var(--border)]">
                <div className="md:col-span-4">
                   <Heading level="h4" className="text-lg">{caseStudy.approach.title}</Heading>
                </div>
                <div className="md:col-span-8 space-y-6">
                   <Text muted className="text-lg leading-relaxed">{caseStudy.approach.description}</Text>
                </div>
              </div>
            )}

            {/* Solution */}
            {caseStudy?.solution?.verified && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-8 border-t border-[var(--border)]">
                <div className="md:col-span-4">
                   <Heading level="h4" className="text-lg">{caseStudy.solution.title}</Heading>
                </div>
                <div className="md:col-span-8 space-y-6">
                   <Text muted className="text-lg leading-relaxed">{caseStudy.solution.description}</Text>
                </div>
              </div>
            )}
            
            {/* What OVEQIRA Delivered */}
            {caseStudy && caseStudy.deliverables.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-8 border-t border-[var(--border)]">
                <div className="md:col-span-4">
                   <Heading level="h4" className="text-lg">What OVEQIRA Delivered</Heading>
                </div>
                <div className="md:col-span-8">
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {caseStudy.deliverables.map((item, i) => (
                       <li key={i} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                         <Text muted>{item}</Text>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            )}
            
            {/* Business Offering Showcase (Specific to The Fitters) */}
            {project.id === 'the-fitters' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-16 border-t border-[var(--border)]">
                <div className="md:col-span-4">
                   <Heading level="h4" className="text-lg">Business Offering</Heading>
                </div>
                <div className="md:col-span-8">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {['Premium Flooring', 'Carpets', 'Chairs', 'Wall Wallpapers', 'Interior Solutions'].map((item, idx) => (
                       <div key={idx} className="p-6 md:p-8 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px] flex items-center justify-center text-center">
                         <Heading level="h4" className="text-lg text-[var(--foreground)]">{item}</Heading>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            )}

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-8 pt-16">
                {project.gallery.map((img, i) => (
                  <div key={i} className="aspect-[16/9] bg-[var(--surface-hover)] overflow-hidden flex items-center justify-center rounded-[6px] border border-[var(--border)]">
                    <img src={img} alt={`${project.title} showcase detail by OVEQIRA`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            )}
            
            {/* Outcomes */}
            {caseStudy && caseStudy.outcomes.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-16 border-t border-[var(--border)]">
                <div className="md:col-span-4">
                   <Heading level="h4" className="text-lg">Outcome</Heading>
                </div>
                <div className="md:col-span-8">
                   <ul className="space-y-4">
                     {caseStudy.outcomes.map((item, i) => (
                       <li key={i} className="flex items-start gap-4">
                         <span className="font-mono text-xs text-[var(--accent)] pt-1">{String(i + 1).padStart(2, '0')}</span>
                         <Text muted className="text-lg">{item}</Text>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            )}

            {/* Related Services */}
            {project.services && project.services.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-16 border-t border-[var(--border)]">
                <div className="md:col-span-4">
                   <Heading level="h4" className="text-lg">Related Services</Heading>
                </div>
                <div className="md:col-span-8">
                   <div className="flex flex-wrap gap-3">
                     {project.services.map((service, i) => {
                       const link = getServiceLink(service);
                       return link ? (
                         <Link key={i} to={link} className="px-4 py-2 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors rounded-full text-sm font-medium text-[var(--foreground)]">
                           {service}
                         </Link>
                       ) : (
                         <span key={i} className="px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full text-sm font-medium text-[var(--foreground-muted)]">
                           {service}
                         </span>
                       );
                     })}
                   </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-32 pb-16 text-center space-y-8 max-w-2xl mx-auto">
              <Heading level="h2" className="text-3xl md:text-4xl">Have a Business That Needs a Stronger Digital Presence?</Heading>
              <Text variant="large" muted>Let's build a digital experience that helps your business present itself better, reach the right audience, and create more opportunities to grow.</Text>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link to="/contact" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                  <Button as="span" variant="primary" size="lg" className="w-full justify-center">
                    Start a Project
                  </Button>
                </Link>
                <a href={`https://wa.me/${whatsappNumber.replace(/[^0-9+]/g, '')}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                  <Button as="span" variant="secondary" size="lg" className="w-full justify-center">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </Container>
      </main>
      <GlobalFooter />
      <CookieBanner />
      <WhatsAppButton />
    </div>
  );
}

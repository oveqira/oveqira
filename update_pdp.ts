import * as fs from 'fs';

let content = fs.readFileSync('src/pages/ProjectDetailPage.tsx', 'utf-8');

// 1. Update SEO block
const seoReplacement = `      } else if (project.id === 'the-fitters') {
        document.title = 'The Fitters | OVEQIRA Case Study';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', 'See how OVEQIRA developed a premium digital presence for The Fitters across website design, SEO, digital marketing, social media, content, and branding.');
      } else {`;
content = content.replace(/      \} else \{/, seoReplacement);


// 2. Update Overview to include metadata
const overviewReplacement = `            {/* Overview */}
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
            )}`;
content = content.replace(/            \{\/\* Overview \*\/\}.*?            \{\/\* Challenge \*\/\}/s, overviewReplacement + '\n\n            {/* Challenge */}');

// 3. Add Business Offering Showcase for The Fitters
const businessOfferingStr = `
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
            
            {/* Project Gallery */}`;
content = content.replace(/            \{\/\* Project Gallery \*\/\}/, businessOfferingStr);

// 4. Update CTA
const ctaReplacement = `            {/* CTA */}
            <div className="pt-32 pb-16 text-center space-y-8 max-w-2xl mx-auto">
              <Heading level="h2" className="text-3xl md:text-4xl">Have a Business That Needs a Stronger Digital Presence?</Heading>
              <Text variant="large" muted>Let's build a digital experience that helps your business present itself better, reach the right audience, and create more opportunities to grow.</Text>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link to="/contact" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                  <Button as="span" variant="primary" size="lg" className="w-full justify-center">
                    Start a Project
                  </Button>
                </Link>
                <a href={\`https://wa.me/\${whatsappNumber.replace(/[^0-9+]/g, '')}?text=\${whatsappMessage}\`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                  <Button as="span" variant="secondary" size="lg" className="w-full justify-center">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>`;
content = content.replace(/            \{\/\* CTA \*\/\}.*?          <\/div>/s, ctaReplacement + '\n          </div>');

fs.writeFileSync('src/pages/ProjectDetailPage.tsx', content);


import * as fs from 'fs';
let content = fs.readFileSync('src/pages/ProjectDetailPage.tsx', 'utf-8');

const replacement = `  return (
    <div className="bg-[var(--background)] min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-32">
        <Container size="md" className="space-y-16">
          
          <Button 
            variant="ghost" 
            onClick={() => navigate('/work')}
            className="!px-0 hover:bg-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 max-w-4xl"
          >
            <Eyebrow>{project.client} {project.brand && project.brand !== project.client ? \` / \${project.brand}\` : ""}</Eyebrow>
            <Heading level="display" className="!leading-[1.1] text-4xl md:text-5xl lg:text-6xl">{project.title}</Heading>
            <Text variant="large" muted className="text-xl md:text-2xl leading-relaxed max-w-3xl">{caseStudy ? caseStudy.title : project.shortDescription}</Text>
          </motion.div>

        </Container>

        {/* Large Project Image */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24">
          <div className="aspect-[4/3] md:aspect-[21/9] w-full bg-[var(--surface-hover)] overflow-hidden flex items-center justify-center">
            {project.coverImage ? (
              <img src={project.coverImage} alt={\`\${project.title} project designed and developed by OVEQIRA\`} className="w-full h-full object-cover" />
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
                <div className="md:col-span-4">
                   <Heading level="h4" className="text-lg">Overview</Heading>
                </div>
                <div className="md:col-span-8 space-y-6">
                   <Text muted className="text-lg leading-relaxed">{caseStudy.overview}</Text>
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

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-8 pt-16">
                {project.gallery.map((img, i) => (
                  <div key={i} className="aspect-[16/9] bg-[var(--surface-hover)] overflow-hidden flex items-center justify-center">
                    <img src={img} alt={\`\${project.title} showcase detail by OVEQIRA\`} className="w-full h-full object-cover" loading="lazy" />
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
            <div className="pt-32 pb-16 text-center space-y-10 max-w-2xl mx-auto">
              <Heading level="h2" className="text-3xl md:text-4xl">Ready to start your project?</Heading>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                  <Button as="span" variant="primary" size="lg" className="w-full justify-center">
                    Start a Project
                  </Button>
                </Link>
                <a href={\`https://wa.me/\${whatsappNumber.replace(/[^0-9+]/g, '')}?text=\${whatsappMessage}\`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
                  <Button as="span" variant="secondary" size="lg" className="w-full justify-center">
                    Discuss on WhatsApp
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
}`;

content = content.replace(/  return \([\s\S]*?\);\n\}/, replacement);

fs.writeFileSync('src/pages/ProjectDetailPage.tsx', content);

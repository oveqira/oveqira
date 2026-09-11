import * as fs from 'fs';

let content = fs.readFileSync('src/components/services/ServiceDetailBlocks.tsx', 'utf-8');

const newComponents = `
// ============================================================================
// SOCIAL MEDIA SPECIALIZED BLOCKS
// ============================================================================

export const ServiceContentPillars: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.pillars.map((pillar: any, idx: number) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="p-8 border border-[var(--border)] rounded-[6px] bg-[#11141A] relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent)] transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
          <Heading level="h4" className="mb-4 text-lg">{pillar.title}</Heading>
          <Text muted className="text-sm">{pillar.description}</Text>
        </motion.div>
      ))}
    </div>
    {data.closing && (
      <div className="p-6 border-l-2 border-[var(--accent)] bg-[var(--accent)]/5 rounded-r-[6px]">
        <Text muted>{data.closing}</Text>
      </div>
    )}
  </div>
);

export const ServicePlatformStrategy: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {data.platforms.map((platform: any, idx: number) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="p-8 md:p-10 border border-[var(--border)] rounded-[6px] bg-[#11141A]/60 flex flex-col gap-4"
        >
          <Heading level="h3" className="text-xl text-[var(--accent)]">{platform.name}</Heading>
          <Text muted>{platform.description}</Text>
        </motion.div>
      ))}
    </div>
    {data.closing && (
      <div className="max-w-3xl">
        <Text muted className="text-sm font-medium">{data.closing}</Text>
      </div>
    )}
  </div>
);

export const ServiceContentProduction: React.FC<{ data: any }> = ({ data }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    <div className="space-y-8 sticky top-32">
      <div className="space-y-6">
        {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
        <Text muted variant="large">{data.description}</Text>
      </div>
      <Link to={data.link.url} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group">
        {data.link.text} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
    <div className="flex flex-wrap gap-3">
      {data.areas.map((area: string, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="px-5 py-3 border border-[var(--border)] rounded-[4px] bg-[#11141A] text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-default"
        >
          {area}
        </motion.div>
      ))}
    </div>
  </div>
);

export const ServiceContentSystem: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="relative">
      <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-[var(--border)] via-[var(--accent)]/50 to-[var(--border)] hidden md:block" />
      <div className="space-y-12">
        {data.stages.map((stage: any, idx: number) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 relative"
          >
            <div className="md:w-12 h-12 rounded-full border-2 border-[var(--accent)] bg-[#0A0C10] flex items-center justify-center text-[var(--accent)] font-mono text-sm shrink-0 z-10">
              {(idx + 1).toString().padStart(2, '0')}
            </div>
            <div className="p-8 border border-[var(--border)] rounded-[6px] bg-[#11141A] flex-1">
              <Heading level="h4" className="mb-3">{stage.title}</Heading>
              <Text muted>{stage.description}</Text>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const ServiceBrandConsistency: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-12">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
      <Text muted variant="large">{data.description}</Text>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {data.areas.map((area: string, idx: number) => (
        <div key={idx} className="p-4 border border-[var(--border)] rounded-[4px] bg-[#11141A]/40 flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span className="text-sm font-medium text-[var(--foreground-muted)]">{area}</span>
        </div>
      ))}
    </div>
  </div>
);

export const ServiceBusinessJourney: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-4 overflow-x-auto pb-4 hide-scrollbar">
      {data.path.map((step: string, idx: number) => (
        <React.Fragment key={idx}>
          <div className="flex-1 min-w-[140px] p-6 border border-[var(--border)] rounded-[6px] bg-[#11141A] flex items-center justify-center text-center">
            <span className="text-sm font-semibold tracking-wide">{step}</span>
          </div>
          {idx < data.path.length - 1 && (
            <div className="hidden lg:flex items-center justify-center px-2 text-[var(--foreground-subtle)]">
              <ArrowRight className="w-5 h-5" />
            </div>
          )}
          {idx < data.path.length - 1 && (
            <div className="lg:hidden flex items-center justify-center py-2 text-[var(--foreground-subtle)]">
              <ArrowRight className="w-5 h-5 rotate-90" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
    <div className="pt-12 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
      <div className="lg:col-span-1">
        <Text muted>{data.description}</Text>
      </div>
      <div className="lg:col-span-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {data.outcomes.map((outcome: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
              <span className="text-sm text-[var(--foreground-muted)]">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const ServiceSocialAnalytics: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
      <Text muted variant="large">{data.description}</Text>
    </div>
    <div className="flex flex-wrap gap-4">
      {data.metrics.map((metric: string, idx: number) => (
        <div key={idx} className="px-5 py-3 rounded-full border border-[var(--border-strong)] bg-[#11141A] text-sm font-mono tracking-wide text-[var(--foreground-muted)] flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          {metric}
        </div>
      ))}
    </div>
  </div>
);

export const ServiceContentFormats: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {data.formats.map((format: any, idx: number) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="p-8 border border-[var(--border)] rounded-[6px] bg-[#11141A] flex flex-col gap-4"
        >
          <div className="w-10 h-10 rounded-[4px] bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
          </div>
          <Heading level="h4">{format.title}</Heading>
          <Text muted className="text-sm">{format.description}</Text>
        </motion.div>
      ))}
    </div>
  </div>
);
`;

const insertIndex = content.lastIndexOf('// ============================================================================');
content = content.substring(0, insertIndex) + newComponents + '\n' + content.substring(insertIndex);

fs.writeFileSync('src/components/services/ServiceDetailBlocks.tsx', content);

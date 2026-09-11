import * as fs from 'fs';
let content = fs.readFileSync('src/components/services/ServiceDetailBlocks.tsx', 'utf-8');
const newComponents = `
// ============================================================================
// PHOTOGRAPHY & VIDEOGRAPHY SPECIALIZED BLOCKS
// ============================================================================

export const ServiceCapabilityGridBlock: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {data.items.map((item: any, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className="space-y-4 group"
        >
          <div className="h-px w-12 bg-[var(--border-strong)] group-hover:bg-[var(--accent)] group-hover:w-full transition-all duration-500 mb-6" />
          <Heading level="h4" className="text-lg">{item.title}</Heading>
          <Text muted className="text-sm">{item.description}</Text>
        </motion.div>
      ))}
    </div>
  </div>
);

export const ServiceMultiChannelContent: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6 mx-auto text-center">
      {data.eyebrow && <Eyebrow prefix="//" className="justify-center">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
      <Text muted variant="large">{data.description}</Text>
    </div>
    <div className="flex flex-col items-center">
      <div className="p-8 border-2 border-[var(--accent)]/50 rounded-[6px] bg-[var(--accent)]/5 text-center min-w-[280px]">
        <Heading level="h3" className="text-xl text-[var(--accent)]">{data.flowStart}</Heading>
      </div>
      <div className="h-16 w-px bg-gradient-to-b from-[var(--accent)]/50 to-[var(--border)]" />
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border border-[var(--border)] rounded-[6px] bg-[#11141A]">
        {data.channels.map((channel: string, idx: number) => (
          <div key={idx} className="flex items-center justify-center p-4 border border-[var(--border-strong)] rounded-[4px] bg-[#161B26] text-center hover:border-[var(--accent)] transition-colors">
            <span className="text-sm font-medium tracking-wide text-[var(--foreground-muted)]">{channel}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-3xl mx-auto text-center">
      <Text muted className="text-sm font-mono tracking-wide">{data.closing}</Text>
    </div>
  </div>
);

export const ServiceCreativeDirection: React.FC<{ data: any }> = ({ data }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
    <div className="lg:col-span-5 space-y-8 sticky top-32">
      <div className="space-y-6">
        {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
        <Text muted variant="large">{data.description}</Text>
      </div>
    </div>
    <div className="lg:col-span-7 bg-[#11141A] border border-[var(--border)] p-8 md:p-12 rounded-[6px] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 4v16m8-8H4"/></svg>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4 relative z-10">
        {data.areas.map((area: string, idx: number) => (
          <div key={idx} className="space-y-2">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="block text-sm font-medium text-[var(--foreground)]">{area}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ServiceSocialFirstProduction: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
      <Text muted variant="large">{data.description}</Text>
    </div>
    <div className="flex flex-wrap gap-4">
      {data.formats.map((format: string, idx: number) => (
        <div key={idx} className="px-6 py-4 rounded-[6px] border border-[var(--border)] bg-[#11141A] text-sm font-mono tracking-wide text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-default">
          {format}
        </div>
      ))}
    </div>
  </div>
);

export const ServiceCommercialPurpose: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {data.purposes.map((purpose: any, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="p-6 border-l-2 border-[var(--border-strong)] hover:border-[var(--accent)] transition-colors bg-[#11141A]/40 flex flex-col gap-3"
        >
          <Heading level="h5" className="text-base text-[var(--foreground)]">{purpose.title}</Heading>
          <Text muted className="text-sm">{purpose.description}</Text>
        </motion.div>
      ))}
    </div>
    <div className="p-6 bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-[6px] text-center max-w-3xl mx-auto">
      <Text className="font-medium text-[var(--accent)]">{data.closing}</Text>
    </div>
  </div>
);

export const ServiceProductionTypes: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.types.map((type: any, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="group p-8 border border-[var(--border)] bg-[#11141A] hover:bg-[#161B26] transition-colors rounded-[6px] flex flex-col gap-4"
        >
          <div className="w-10 h-10 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-2 group-hover:border-[var(--accent)] transition-colors">
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </div>
          <Heading level="h4">{type.title}</Heading>
          <Text muted className="text-sm">{type.description}</Text>
        </motion.div>
      ))}
    </div>
  </div>
);

export const ServiceVisualPortfolio: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6 mx-auto text-center">
      {data.eyebrow && <Eyebrow prefix="//" className="justify-center">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
      {data.images.map((img: any, idx: number) => (
        <div key={idx} className={\`relative overflow-hidden bg-[#161B26] border border-[var(--border)] group flex items-center justify-center \${img.span || ''}\`}>
          <span className="font-mono text-[10px] text-[var(--foreground-subtle)] uppercase tracking-widest z-10 flex flex-col items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            {img.label || 'Visual Pending'}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      ))}
    </div>
  </div>
);
`;
const insertIndex = content.lastIndexOf('// ============================================================================');
content = content.substring(0, insertIndex) + newComponents + '\n' + content.substring(insertIndex);
fs.writeFileSync('src/components/services/ServiceDetailBlocks.tsx', content);

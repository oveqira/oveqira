
// ============================================================================
// SOCIAL MEDIA SPECIALIZED BLOCKS

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
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)]">
        {data.channels.map((channel: string, idx: number) => (
          <div key={idx} className="flex items-center justify-center p-4 border border-[var(--border-strong)] rounded-[4px] bg-[var(--surface)] text-center hover:border-[var(--accent)] transition-colors">
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
    <div className="lg:col-span-7 bg-[var(--surface-hover)] border border-[var(--border)] p-8 md:p-12 rounded-[6px] relative overflow-hidden">
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
        <div key={idx} className="px-6 py-4 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] text-sm font-mono tracking-wide text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-default">
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
          className="p-6 border-l-2 border-[var(--border-strong)] hover:border-[var(--accent)] transition-colors bg-[var(--surface-hover)] flex flex-col gap-3"
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
          className="group p-8 border border-[var(--border)] bg-[var(--surface-hover)] hover:bg-[var(--surface)] transition-colors rounded-[6px] flex flex-col gap-4"
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
        <div key={idx} className={`relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] group flex items-center justify-center ${img.span || ''}`}>
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


// ============================================================================
// AI & AUTOMATION SPECIALIZED BLOCKS
// ============================================================================

export const ServiceAiVsAutomation: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6 mx-auto text-center">
      {data.eyebrow && <Eyebrow prefix="//" className="justify-center">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
      <Text muted variant="large">{data.description}</Text>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      <div className="p-8 md:p-12 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] space-y-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--border-strong)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <Heading level="h3" className="text-xl text-[var(--foreground)]">{data.automation.title}</Heading>
        <ul className="space-y-3">
          {data.automation.points.map((point: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--foreground-muted)] mt-2 shrink-0" />
              <Text muted>{point}</Text>
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-[var(--border-strong)]">
          <Text className="text-sm font-mono tracking-wide text-[var(--accent)] mb-4">EXAMPLE</Text>
          <div className="flex flex-wrap items-center gap-2">
            {data.automation.example.split('→').map((step: string, idx: number, arr: any[]) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1.5 bg-[var(--surface)] border border-[var(--border-strong)] rounded-[4px] text-xs font-medium text-[var(--foreground-muted)]">
                  {step.trim()}
                </span>
                {idx < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[var(--border-strong)]" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="p-8 md:p-12 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] space-y-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <Heading level="h3" className="text-xl text-[var(--foreground)]">{data.ai.title}</Heading>
        <ul className="space-y-3">
          {data.ai.points.map((point: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
              <Text muted>{point}</Text>
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-[var(--border-strong)]">
          <Text className="text-sm font-mono tracking-wide text-[var(--accent)] mb-4">EXAMPLE</Text>
          <div className="flex flex-wrap items-center gap-2">
            {data.ai.example.split('→').map((step: string, idx: number, arr: any[]) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-[4px] text-xs font-medium text-[var(--accent)]">
                  {step.trim()}
                </span>
                {idx < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[var(--border-strong)]" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-3xl mx-auto text-center border-t border-[var(--border)] pt-8">
      <Text className="font-medium text-[var(--foreground)]">{data.closing}</Text>
    </div>
  </div>
);

export const ServiceUseCases: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.cases.map((uc: any, idx: number) => (
        <div key={idx} className="p-6 md:p-8 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px] space-y-6 hover:border-[var(--accent)]/50 transition-colors">
          <Heading level="h4" className="text-lg border-b border-[var(--border-strong)] pb-4">{uc.title}</Heading>
          <div className="space-y-4 relative before:absolute before:inset-y-2 before:left-[7px] before:w-px before:bg-[var(--border-strong)]">
            {uc.flow.map((step: string, stepIdx: number) => (
              <div key={stepIdx} className="flex items-start gap-4 relative z-10">
                <div className={`w-4 h-4 rounded-full mt-0.5 shrink-0 border-2 ${stepIdx === 0 ? 'bg-[var(--foreground)] border-[var(--foreground)]' : stepIdx === uc.flow.length - 1 ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--surface-hover)] border-[var(--border-strong)]'}`} />
                <span className={`text-sm font-medium ${stepIdx === 0 ? 'text-[var(--foreground)]' : 'text-[var(--foreground-muted)]'}`}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ServiceAiFeature: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-12">
    <div className="max-w-3xl space-y-6">
      {data.eyebrow && <Eyebrow prefix="//">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
      <Text muted variant="large">{data.description}</Text>
    </div>
    {(data.capabilities || data.workflows || data.limitations) && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(data.capabilities || data.workflows) && (
          <div className="p-8 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px]">
            <Text className="text-sm font-mono tracking-wide text-[var(--accent)] mb-6 uppercase">Capabilities & Workflows</Text>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {(data.capabilities || data.workflows).map((item: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span className="text-sm text-[var(--foreground-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {data.limitations && (
          <div className="p-8 bg-[var(--surface)] border border-red-900/30 rounded-[6px]">
            <Text className="text-sm font-mono tracking-wide text-red-400 mb-6 uppercase">Important Limitations</Text>
            <ul className="space-y-4">
              {data.limitations.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--foreground-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )}
  </div>
);

export const ServiceIntegrations: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6 mx-auto text-center">
      {data.eyebrow && <Eyebrow prefix="//" className="justify-center">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
      <Text muted variant="large">{data.description}</Text>
    </div>
    <div className="relative max-w-4xl mx-auto py-12">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent -translate-y-1/2 hidden md:block" />
      <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 relative z-10">
        {data.categories.map((cat: string, idx: number) => (
          <div key={idx} className="flex items-center justify-center p-4 md:px-8 md:py-4 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px] shadow-lg text-center hover:border-[var(--accent)] transition-colors">
            <span className="text-sm font-medium tracking-widest uppercase text-[var(--foreground-muted)]">{cat}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-3xl mx-auto text-center">
      <Text muted className="text-sm">{data.closing}</Text>
    </div>
  </div>
);

export const ServiceHumanInTheLoop: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6 mx-auto text-center">
      {data.eyebrow && <Eyebrow prefix="//" className="justify-center">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
      <Text muted variant="large">{data.description}</Text>
    </div>
    <div className="max-w-4xl mx-auto border border-[var(--border)] bg-[var(--surface-hover)] rounded-[6px] p-8 md:p-16 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent)] pointer-events-none" />
      <div className="px-6 py-3 border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] font-mono text-sm tracking-widest rounded-full mb-8 relative z-10">
        {data.flowStart}
      </div>
      <div className="w-px h-12 bg-gradient-to-b from-[var(--accent)]/50 to-[var(--border-strong)] mb-8" />
      <div className="w-32 h-32 rotate-45 border-2 border-[var(--border-strong)] flex items-center justify-center mb-16 hover:border-[var(--accent)] transition-colors relative z-10">
        <span className="-rotate-45 text-sm font-medium text-center px-4 leading-tight">{data.check}</span>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="hidden md:block absolute top-[-64px] left-1/6 right-1/6 h-px bg-[var(--border-strong)]" />
        <div className="hidden md:block absolute top-[-64px] left-1/6 w-px h-16 bg-[var(--border-strong)]" />
        <div className="hidden md:block absolute top-[-64px] left-1/2 w-px h-16 bg-[var(--border-strong)]" />
        <div className="hidden md:block absolute top-[-64px] right-1/6 w-px h-16 bg-[var(--border-strong)]" />
        
        {data.paths.map((path: any, idx: number) => (
          <div key={idx} className="p-6 border border-[var(--border-strong)] bg-[var(--surface)] rounded-[6px] text-center flex flex-col items-center justify-center gap-3">
            <span className={`text-xs font-mono uppercase tracking-widest ${idx === 0 ? 'text-green-400' : idx === 1 ? 'text-yellow-400' : 'text-[var(--accent)]'}`}>{path.label}</span>
            <span className="text-sm text-[var(--foreground)] font-medium">{path.outcome}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ServiceTransformation: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-16">
    <div className="max-w-3xl space-y-6 mx-auto text-center">
      {data.eyebrow && <Eyebrow prefix="//" className="justify-center">{data.eyebrow}</Eyebrow>}
      <Heading level="h2">{data.heading}</Heading>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Before */}
      <div className="p-8 md:p-12 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[6px] opacity-75">
        <Heading level="h4" className="text-lg font-mono text-[var(--foreground-subtle)] mb-8 uppercase tracking-widest">{data.before.title}</Heading>
        <div className="flex flex-col gap-3">
          {data.before.flow.map((step: string, idx: number) => (
            <div key={idx} className="flex items-center gap-4">
              {idx > 0 && <div className="w-px h-6 bg-[var(--border-strong)] ml-[11px]" />}
              <div className="flex items-center gap-4 w-full">
                <div className="w-6 h-6 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
                </div>
                <div className="flex-1 p-4 border border-[var(--border-strong)] rounded-[4px] bg-[var(--surface-subtle)] text-sm text-[var(--foreground-muted)]">
                  {step}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* After */}
      <div className="p-8 md:p-12 border border-[var(--accent)]/30 bg-[var(--surface-hover)] rounded-[6px] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <Heading level="h4" className="text-lg font-mono text-[var(--accent)] mb-8 uppercase tracking-widest">{data.after.title}</Heading>
        <div className="flex flex-col gap-3 relative z-10">
          {data.after.flow.map((step: string, idx: number) => (
            <div key={idx} className="flex items-center gap-4">
              {idx > 0 && <div className="w-px h-6 bg-[var(--accent)]/50 ml-[11px]" />}
              <div className="flex items-center gap-4 w-full">
                <div className="w-6 h-6 rounded-full border-2 border-[var(--accent)] bg-[var(--surface)] shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                </div>
                <div className="flex-1 p-4 border border-[var(--accent)]/20 rounded-[4px] bg-[var(--accent)]/5 text-sm font-medium text-[var(--foreground)]">
                  {step}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="max-w-3xl mx-auto text-center">
      <Text muted className="text-sm italic">Conceptual Example — exact workflows vary by project requirements.</Text>
    </div>
  </div>
);

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
          className="p-8 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] relative overflow-hidden group"
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
          className="p-8 md:p-10 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] flex flex-col gap-4"
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
          className="px-5 py-3 border border-[var(--border)] rounded-[4px] bg-[var(--surface-hover)] text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-default"
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
            <div className="md:w-12 h-12 rounded-full border-2 border-[var(--accent)] bg-[var(--surface-subtle)] flex items-center justify-center text-[var(--accent)] font-mono text-sm shrink-0 z-10">
              {(idx + 1).toString().padStart(2, '0')}
            </div>
            <div className="p-8 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] flex-1">
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
        <div key={idx} className="p-4 border border-[var(--border)] rounded-[4px] bg-[var(--surface-hover)] flex items-center gap-3">
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
          <div className="flex-1 min-w-[140px] p-6 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] flex items-center justify-center text-center">
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
        <div key={idx} className="px-5 py-3 rounded-full border border-[var(--border-strong)] bg-[var(--surface-hover)] text-sm font-mono tracking-wide text-[var(--foreground-muted)] flex items-center gap-3">
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
          className="p-8 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] flex flex-col gap-4"
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Service, Project, FAQItem } from '../../types';
import {  ArrowUpRight, Plus, Minus, Check, ArrowRight , CheckCircle, AlertCircle } from 'lucide-react';
import { projects } from '../../data';

// --- Breadcrumbs ---
export const ServiceBreadcrumbs: React.FC<{ serviceName: string }> = ({ serviceName }) => (
  <nav aria-label="Breadcrumb" className="mb-12">
    <ol className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)]">
      <li>
        <Link to="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
      </li>
      <li className="select-none">/</li>
      <li>
        <Link to="/services" className="hover:text-[var(--accent)] transition-colors">Services</Link>
      </li>
      <li className="select-none">/</li>
      <li className="text-[var(--foreground)]" aria-current="page">{serviceName}</li>
    </ol>
  </nav>
);

// --- Hero ---
export const ServiceHero: React.FC<{ service: Service }> = ({ service }) => (
  <div className="space-y-16">
    <div className="max-w-4xl space-y-8">
      <Eyebrow prefix="SERVICE //" hasIndicator indicatorColor="accent">
        {service.eyebrow || service.title}
      </Eyebrow>
      <Heading level="display" className="!leading-[0.9]">
        {service.description || service.shortDescription}
      </Heading>
      
      {service.additionalDescription && (
        <Text variant="large" muted className="max-w-3xl">
          {service.additionalDescription}
        </Text>
      )}

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
        <Link to="/contact" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
          <Button as="span" variant="primary" size="lg" iconType="arrow-right" className="w-full justify-center">
            {service.cta?.primaryLabel || 'Start Your Project'}
          </Button>
        </Link>
        <Link to="/work" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
          <Button as="span" variant="secondary" size="lg" iconType="arrow-up-right" className="w-full justify-center">
            View Our Work
          </Button>
        </Link>
      </div>
    </div>
    
    {/* Sophisticated Service Visual */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full aspect-[16/9] lg:aspect-[21/9] bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px] overflow-hidden relative flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--background)]/80 to-transparent z-10" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
      
      {/* Abstract UI Composition */}
      <div className="relative z-20 w-3/4 max-w-3xl border border-[var(--border-strong)] bg-[var(--surface)] rounded-t-lg shadow-2xl overflow-hidden self-end translate-y-8 flex flex-col h-full">
        <div className="flex items-center gap-2 p-4 border-b border-[var(--border)] bg-[var(--surface-hover)]">
          <div className="w-3 h-3 rounded-full bg-[var(--border-strong)]"></div>
          <div className="w-3 h-3 rounded-full bg-[var(--border-strong)]"></div>
          <div className="w-3 h-3 rounded-full bg-[var(--border-strong)]"></div>
        </div>
        <div className="p-8 grid grid-cols-12 gap-8 flex-1">
          <div className="col-span-4 space-y-4">
            <div className="h-6 w-3/4 bg-[var(--border)] rounded-sm"></div>
            <div className="h-4 w-full bg-[var(--border)]/50 rounded-sm"></div>
            <div className="h-4 w-5/6 bg-[var(--border)]/50 rounded-sm"></div>
            <div className="pt-6 space-y-3">
              <div className="h-12 w-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-md"></div>
              <div className="h-12 w-full bg-[var(--border)]/20 rounded-md"></div>
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-4">
            <div className="flex-1 bg-[var(--border)]/10 border border-[var(--border)] rounded-md flex items-center justify-center">
              <span className="font-mono text-[10px] text-[var(--foreground-subtle)] uppercase tracking-widest">{service.heroImage ? `Visual: ${service.heroImage}` : 'Service Visual'}</span>
            </div>
            <div className="h-24 grid grid-cols-3 gap-4">
              <div className="bg-[var(--border)]/20 rounded-md"></div>
              <div className="bg-[var(--border)]/20 rounded-md"></div>
              <div className="bg-[var(--border)]/20 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

// --- Problem / Opportunity ---
export const ServiceProblem: React.FC<{ problem: Service['problem'] }> = ({ problem }) => {
  if (!problem) return null;
  
  const isComplex = problem.points.length > 0 && typeof problem.points[0] !== 'string';
  
  if (isComplex) {
    return (
      <div className="space-y-16">
        <div className="max-w-3xl space-y-6">
          {problem.eyebrow ? <Eyebrow prefix="CHALLENGE //" hasIndicator indicatorColor="accent">{problem.eyebrow}</Eyebrow> : <Eyebrow prefix="CHALLENGE //" hasIndicator indicatorColor="accent">A Website Is More Than A Digital Brochure</Eyebrow>}
          <Heading level="h2" className="!leading-tight">{problem.heading}</Heading>
          <Text variant="large" muted>{problem.description}</Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problem.points.map((point, idx) => {
            const p = point as { title: string; description: string };
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px] space-y-4 hover:border-[var(--border-strong)] transition-colors duration-300"
              >
                <Heading level="h4">{p.title}</Heading>
                <Text muted variant="small">{p.description}</Text>
              </motion.div>
            )
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-5 space-y-6">
        <Heading level="h2" className="!leading-tight">{problem.heading}</Heading>
        <Text variant="large" muted>{problem.description}</Text>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="space-y-6">
          {problem.points.map((point, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start gap-4 p-6 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px]"
            >
              <div className="mt-1 p-1 bg-[var(--surface)] border border-[var(--border)] rounded-sm text-[var(--foreground-subtle)] flex-shrink-0">
                <Minus className="w-4 h-4" />
              </div>
              <span className="text-[var(--foreground)]">{point as string}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- UX vs UI Explainer ---
export const ServiceUXUIExplainer: React.FC<{ explainer: Service['uxUiExplainer'] }> = ({ explainer }) => {
  if (!explainer) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {explainer.eyebrow && <Eyebrow prefix="UX + UI //" hasIndicator indicatorColor="accent">{explainer.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{explainer.heading}</Heading>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="space-y-8 p-8 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px]"
        >
          <div className="space-y-4 border-b border-[var(--border)] pb-8">
            <Heading level="h3" className="text-2xl text-[var(--foreground)]">{explainer.ux.title}</Heading>
            <Text muted variant="base">{explainer.ux.description}</Text>
          </div>
          <ul className="space-y-3">
            {explainer.ux.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--foreground-muted)] flex-shrink-0" />
                <span className="text-[var(--foreground-muted)] font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-8 p-8 border border-[var(--accent)]/30 bg-[var(--accent)]/5 rounded-[8px]"
        >
          <div className="space-y-4 border-b border-[var(--accent)]/20 pb-8">
            <Heading level="h3" className="text-2xl text-[var(--accent)]">{explainer.ui.title}</Heading>
            <Text muted variant="base">{explainer.ui.description}</Text>
          </div>
          <ul className="space-y-3">
            {explainer.ui.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)]/50 flex-shrink-0" />
                <span className="text-[var(--foreground-muted)] font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full mt-12 p-6 md:p-8 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] flex flex-col items-center justify-center space-y-8"
      >
        <Text variant="large" className="text-center font-medium max-w-3xl">
          {explainer.closing}
        </Text>
        <div className="flex items-center space-x-2 md:space-x-4 min-w-max text-xs md:text-sm font-mono uppercase tracking-widest overflow-x-auto hide-scrollbar max-w-full pb-2 md:pb-0">
          <span className="text-[var(--foreground)] px-3 py-1.5 md:px-4 md:py-2 border border-[var(--border-strong)] rounded-full bg-[var(--background)] whitespace-nowrap">Problem</span>
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-[var(--foreground-subtle)] flex-shrink-0" />
          <span className="text-[var(--foreground)] px-3 py-1.5 md:px-4 md:py-2 border border-[var(--border-strong)] rounded-full bg-[var(--background)] whitespace-nowrap">Journey</span>
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-[var(--foreground-subtle)] flex-shrink-0" />
          <span className="text-[var(--foreground)] px-3 py-1.5 md:px-4 md:py-2 border border-[var(--border-strong)] rounded-full bg-[var(--background)] whitespace-nowrap">Structure</span>
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-[var(--foreground-subtle)] flex-shrink-0" />
          <span className="text-[var(--foreground)] px-3 py-1.5 md:px-4 md:py-2 border border-[var(--border-strong)] rounded-full bg-[var(--background)] whitespace-nowrap">Interface</span>
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-[var(--accent)] flex-shrink-0" />
          <span className="text-[var(--accent)] px-3 py-1.5 md:px-4 md:py-2 border border-[var(--accent)] bg-[var(--accent)]/10 rounded-full whitespace-nowrap">Experience</span>
        </div>
      </motion.div>
    </div>
  );
};

// --- Approach ---
export const ServiceApproach: React.FC<{ approach: Service['approach'] }> = ({ approach }) => {
  if (!approach) return null;
  
  const isComplex = approach.points.length > 0 && typeof approach.points[0] !== 'string';

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-6">
          <Eyebrow prefix="APPROACH //" hasIndicator indicatorColor="accent">Methodology</Eyebrow>
          <Heading level="h2" className="!leading-tight">{approach.heading}</Heading>
          <Text variant="large" muted>{approach.description}</Text>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className={`grid ${isComplex ? 'grid-cols-1 gap-8' : 'grid-cols-1 sm:grid-cols-2 gap-6'}`}>
            {approach.points.map((point, idx) => {
              if (isComplex) {
                const p = point as { title: string; description: string };
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex flex-col space-y-2 pb-6 border-b border-[var(--border)] last:border-0 last:pb-0"
                  >
                    <Heading level="h4" className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[var(--accent)]">{(idx + 1).toString().padStart(2, '0')}</span> 
                      {p.title}
                    </Heading>
                    <Text muted variant="small" className="pl-8">{p.description}</Text>
                  </motion.div>
                );
              }
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 border border-[var(--accent)]/20 bg-[var(--accent)]/5 rounded-[6px] flex flex-col justify-between"
                >
                  <Check className="w-5 h-5 text-[var(--accent)] mb-6" />
                  <span className="text-[var(--foreground)] font-medium leading-snug">{point as string}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Visual Progression for Complex Approach */}
      {isComplex && (
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="w-full mt-12 p-6 md:p-8 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] flex items-center overflow-x-auto overflow-y-hidden hide-scrollbar"
        >
          <div className="flex items-center space-x-4 min-w-max text-sm font-mono uppercase tracking-widest">
            <span className="text-[var(--foreground)] px-4 py-2 border border-[var(--border-strong)] rounded-full bg-[var(--background)]">Business</span>
            <ArrowRight className="w-4 h-4 text-[var(--foreground-subtle)]" />
            <span className="text-[var(--foreground)] px-4 py-2 border border-[var(--border-strong)] rounded-full bg-[var(--background)]">Strategy</span>
            <ArrowRight className="w-4 h-4 text-[var(--foreground-subtle)]" />
            <span className="text-[var(--foreground)] px-4 py-2 border border-[var(--border-strong)] rounded-full bg-[var(--background)]">Experience</span>
            <ArrowRight className="w-4 h-4 text-[var(--foreground-subtle)]" />
            <span className="text-[var(--foreground)] px-4 py-2 border border-[var(--border-strong)] rounded-full bg-[var(--background)]">Interface</span>
            <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-[var(--accent)] px-4 py-2 border border-[var(--accent)] bg-[var(--accent)]/10 rounded-full">Website</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// --- Capabilities ---
export const ServiceCapabilities: React.FC<{ capabilities: Service['capabilities'] }> = ({ capabilities }) => {
  if (!capabilities?.length) return null;
  return (
    <div className="space-y-16">
      <Eyebrow prefix="WHAT WE DO //" hasIndicator indicatorColor="accent">Capabilities</Eyebrow>
      <Heading level="h2">Everything Your Website Needs to Work Harder.</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-8 border border-[var(--border)] rounded-[8px] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] transition-colors duration-300 flex flex-col h-full"
          >
            <span className="font-mono text-xs text-[var(--foreground-muted)] group-hover:text-[var(--accent)] transition-colors duration-300 font-semibold tracking-widest mb-8 block">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div className="mt-auto space-y-4">
              <Heading level="h4" className="group-hover:text-[var(--accent)] transition-colors duration-300">
                {cap.title}
              </Heading>
              <Text muted variant="small">{cap.description}</Text>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Technical SEO ---
export const ServiceTechnicalSEO: React.FC<{ data: Service['technicalSEO'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-6">
          {data.eyebrow && <Eyebrow prefix="THE FOUNDATION //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
          <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
          <Text variant="large" muted>{data.description}</Text>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="p-8 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px] h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {data.list.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-3 border-b border-[var(--border-strong)] pb-4 last:border-0 sm:[&:nth-last-child(-n+2)]:border-0"
                >
                  <Check className="mt-0.5 w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <span className="text-[var(--foreground-muted)] text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Content Strategy ---
export const ServiceContentStrategy: React.FC<{ data: Service['contentStrategy'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow prefix="CONTENT //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
        <Text variant="large" muted>{data.description}</Text>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.stages.map((stage, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-8 border border-[var(--border)] rounded-[8px] bg-[var(--background)] flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 text-[var(--border-strong)] opacity-50 font-mono text-4xl font-light">
              {(idx + 1).toString().padStart(2, '0')}
            </div>
            <Heading level="h3" className="text-xl text-[var(--foreground)] mt-8 mb-4">{stage.title}</Heading>
            <Text muted variant="small">{stage.description}</Text>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Local SEO ---
export const ServiceLocalSEO: React.FC<{ data: Service['localSEO'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 space-y-6">
          {data.eyebrow && <Eyebrow prefix="LOCAL //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
          <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
          <Text variant="large" muted>{data.description}</Text>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="p-8 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px]">
            <ul className="space-y-4">
              {data.list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                  <span className="text-[var(--foreground-muted)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Website Experience (SEO) ---
export const ServiceWebsiteExperience: React.FC<{ data: Service['websiteExperience'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow prefix="UX + SEO //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
        <Text variant="large" muted>{data.description}</Text>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data.intersections.map((item, idx) => (
          <div key={idx} className="p-6 border border-[var(--border)] bg-[var(--background)] rounded-[6px]">
            <Heading level="h4" className="text-[var(--foreground)] mb-2">{item.title}</Heading>
            <Text muted variant="small">{item.description}</Text>
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full mt-8 p-6 md:p-8 border border-[var(--accent)]/30 rounded-[6px] bg-[var(--accent)]/5 flex justify-center overflow-x-auto hide-scrollbar"
      >
        <div className="flex items-center space-x-2 md:space-x-4 min-w-max text-xs md:text-sm font-mono tracking-widest uppercase">
          {data.closing.split('→').map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <span className={`px-3 py-1.5 md:px-4 md:py-2 border rounded-full whitespace-nowrap ${
                idx === arr.length - 1 
                  ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]' 
                  : 'border-[var(--border-strong)] bg-[var(--surface-hover)] text-[var(--foreground)]'
              }`}>
                {step.trim()}
              </span>
              {idx < arr.length - 1 && (
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-[var(--foreground-subtle)] flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// --- What We Can Build (Types) ---
export const ServiceWebsiteTypes: React.FC<{ types: Service['types'] }> = ({ types }) => {
  if (!types?.length) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        <Eyebrow prefix="BUILT AROUND THE BUSINESS //" hasIndicator indicatorColor="accent">Scope</Eyebrow>
        <Heading level="h2" className="!leading-tight">From First Impression to Final Click.</Heading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {types.map((type, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-6 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px] hover:border-[var(--accent)]/50 transition-colors"
          >
            <Heading level="h4" className="text-lg mb-3">{type.title}</Heading>
            <Text muted variant="small">{type.description}</Text>
          </motion.div>
        ))}
      </div>
      <div className="pt-4">
         <Text muted variant="small" className="italic text-[var(--foreground-subtle)]">
           *Scope is always customized according to project requirements. We do not force businesses into rigid templates.
         </Text>
      </div>
    </div>
  );
};

// --- Design Systems ---
export const ServiceDesignSystems: React.FC<{ systems: Service['designSystems'] }> = ({ systems }) => {
  if (!systems) return null;
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-6">
          {systems.eyebrow && <Eyebrow prefix="SYSTEMS //" hasIndicator indicatorColor="accent">{systems.eyebrow}</Eyebrow>}
          <Heading level="h2" className="!leading-tight">{systems.heading}</Heading>
          <Text variant="large" muted>{systems.description}</Text>
          <div className="pt-8">
            <Text muted variant="small" className="italic border-l-2 border-[var(--accent)] pl-4">
              {systems.supporting}
            </Text>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="p-8 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px] h-full flex flex-col justify-center">
            <div className="flex flex-wrap gap-3">
              {systems.include.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="px-4 py-2 border border-[var(--border-strong)] rounded-full text-sm font-mono tracking-wide text-[var(--foreground)] bg-[var(--background)]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Benefits ---
export const ServiceBenefits: React.FC<{ benefits: Service['benefits'] }> = ({ benefits }) => {
  if (!benefits?.length) return null;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-5 space-y-6">
        <Eyebrow prefix="WHY IT MATTERS //" hasIndicator indicatorColor="accent">Value</Eyebrow>
        <Heading level="h2" className="sticky top-32">A Better Website Creates a Better Business Experience.</Heading>
      </div>
      <div className="lg:col-span-7">
        <div className="border-t border-[var(--border)]">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="py-8 border-b border-[var(--border)] grid grid-cols-1 md:grid-cols-2 gap-4">
              <Heading level="h4" className="text-xl text-[var(--foreground)]">{benefit.title}</Heading>
              <Text muted>{benefit.description}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Deliverables ---
export const ServiceDeliverables: React.FC<{ deliverables: Service['deliverables'], disclaimer?: string }> = ({ deliverables, disclaimer }) => {
  if (!deliverables?.length) return null;
  return (
    <div className="p-8 md:p-16 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4 space-y-6">
          <Eyebrow prefix="WHAT YOU RECEIVE //" hasIndicator indicatorColor="accent">Deliverables</Eyebrow>
          <Heading level="h2" className="!text-3xl">From Strategy to Launch.</Heading>
        </div>
        <div className="lg:col-span-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 py-3 border-b border-[var(--border)]">
                <Check className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span className="text-[var(--foreground)] font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
          {disclaimer && (
            <div className="mt-8 p-4 bg-[var(--background)] border border-[var(--border)] rounded-md">
              <Text muted variant="small">{disclaimer}</Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Process ---
export const ServiceProcess: React.FC<{ process: Service['process'] }> = ({ process }) => {
  if (!process?.length) return null;
  return (
    <div className="space-y-16">
      <Eyebrow prefix="METHODOLOGY //" hasIndicator indicatorColor="accent">Process</Eyebrow>
      <Heading level="h2">How We Get There.</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {process.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-8 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)] hover:border-[var(--border-strong)] transition-colors"
          >
            <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest mb-6 block">
              {step.number}
            </span>
            <Heading level="h4" className="mb-3">{step.title}</Heading>
            <Text muted variant="small">{step.description}</Text>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Technology ---
export const ServiceTechnology: React.FC<{ technology: Service['technology'] }> = ({ technology }) => {
  if (!technology) return null;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-5 space-y-6">
        <Eyebrow prefix="BUILT WITH PURPOSE //" hasIndicator indicatorColor="accent">Technology</Eyebrow>
        <Heading level="h2" className="!leading-tight">{technology.heading}</Heading>
        <Text variant="large" muted>{technology.description}</Text>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {technology.list.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--foreground)] font-medium font-mono text-sm uppercase tracking-wider">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Design Transformation ---
export const ServiceDesignTransformation: React.FC<{ transformation: Service['designTransformation'] }> = ({ transformation }) => {
  if (!transformation) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6 text-center mx-auto">
        {transformation.eyebrow && <Eyebrow prefix="TRANSFORMATION //" hasIndicator indicatorColor="accent" className="justify-center">{transformation.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{transformation.heading}</Heading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* BEFORE */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="p-8 border border-[var(--border-strong)] bg-[var(--background)] rounded-[8px] space-y-8 relative overflow-hidden opacity-75 grayscale"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>
          <Heading level="h3" className="text-xl text-[var(--foreground-muted)] uppercase tracking-widest border-b border-[var(--border-strong)] pb-4">Before</Heading>
          <ul className="space-y-4">
            {transformation.before.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Minus className="mt-1 w-4 h-4 text-[var(--foreground-subtle)] flex-shrink-0" />
                <span className="text-[var(--foreground-muted)] line-through decoration-[var(--border-strong)] decoration-2">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AFTER */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 border border-[var(--accent)] bg-[var(--accent)]/5 rounded-[8px] space-y-8 relative overflow-hidden shadow-[0_0_40px_-10px_rgba(0,188,212,0.1)]"
        >
          <Heading level="h3" className="text-xl text-[var(--accent)] uppercase tracking-widest border-b border-[var(--accent)]/30 pb-4 flex items-center justify-between">
            After
            <Check className="w-5 h-5 text-[var(--accent)]" />
          </Heading>
          <ul className="space-y-4 relative z-10">
            {transformation.after.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                <span className="text-[var(--foreground)] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

// --- Maturity ---
export const ServiceMaturity: React.FC<{ data: Service['maturity'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow prefix="LONG TERM //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-[var(--border-strong)] z-0" />
        
        {data.stages.map((stage, idx) => (
          <div key={idx} className="relative z-10 pt-8 md:pt-0">
            <div className="w-6 h-6 rounded-full bg-[var(--surface-hover)] border-2 border-[var(--accent)] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,188,212,0.3)]">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            </div>
            <Heading level="h4" className="text-xl mb-4 text-[var(--foreground)]">{stage.title}</Heading>
            <Text muted variant="small" className="leading-relaxed">{stage.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Measurement ---
export const ServiceMeasurement: React.FC<{ data: Service['measurement'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 space-y-6">
          {data.eyebrow && <Eyebrow prefix="METRICS //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
          <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
          <Text variant="large" muted>{data.description}</Text>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="p-8 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px] flex flex-wrap gap-3">
            {data.metrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="px-4 py-2 border border-[var(--border-strong)] rounded-[4px] text-sm font-medium text-[var(--foreground-muted)] bg-[var(--background)] flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/50" />
                {metric}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Channel Ecosystem ---
export const ServiceChannelEcosystem: React.FC<{ data: Service['channelEcosystem'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow prefix="ECOSYSTEM //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.channels.map((channel, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-8 border border-[var(--border)] rounded-[8px] bg-[var(--background)] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Heading level="h4" className="text-[var(--foreground)] mb-3 relative z-10">{channel.title}</Heading>
            <Text muted variant="small" className="relative z-10">{channel.description}</Text>
          </motion.div>
        ))}
      </div>

      <div className="p-6 md:p-8 border border-[var(--border-strong)] bg-[var(--surface-hover)] rounded-[8px]">
        <Text variant="small" className="text-center text-[var(--foreground-muted)]">{data.closing}</Text>
      </div>
    </div>
  );
};

// --- Audience Positioning ---
export const ServiceAudiencePositioning: React.FC<{ data: Service['audiencePositioning'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow prefix="FOUNDATION //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
        <Text variant="large" muted>{data.description}</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.cards.map((card, idx) => (
          <div key={idx} className="p-8 border-t-2 border-[var(--accent)] bg-[var(--surface)] relative group">
            <div className="font-mono text-xs text-[var(--foreground-subtle)] mb-4 tracking-widest uppercase">
              {card.title}
            </div>
            <Text muted variant="small">{card.description}</Text>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-mono tracking-widest uppercase text-[var(--foreground-muted)] pt-8">
        {data.cards.map((card, idx, arr) => (
          <React.Fragment key={idx}>
            <span>{card.title}</span>
            {idx < arr.length - 1 && <span className="text-[var(--accent)]">+</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// --- Content & Creative ---
export const ServiceContentCreative: React.FC<{ data: Service['contentCreative'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-6">
          {data.eyebrow && <Eyebrow prefix="CREATIVE //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
          <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
          <Text variant="large" muted>{data.description}</Text>
          <div className="pt-6">
            <Text variant="small" className="text-[var(--foreground-subtle)] italic">{data.closing}</Text>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="flex flex-wrap gap-3">
            {data.areas.map((area, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 border border-[var(--border)] rounded-[4px] bg-[var(--background)] text-sm text-[var(--foreground-muted)]"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Paid & Organic ---
export const ServicePaidOrganic: React.FC<{ data: Service['paidOrganic'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6 text-center mx-auto">
        {data.eyebrow && <Eyebrow prefix="SYNERGY //" hasIndicator indicatorColor="accent" className="justify-center">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.sections.map((section, idx) => (
          <div key={idx} className="p-8 border border-[var(--border)] bg-[var(--surface)] text-center rounded-[8px]">
            <Heading level="h4" className="text-[var(--accent)] mb-4">{section.title}</Heading>
            <Text muted variant="small">{section.description}</Text>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-8">
        <Text variant="large" className="text-[var(--foreground-muted)] max-w-2xl mx-auto">{data.closing}</Text>
      </div>
    </div>
  );
};

// --- Conversion Journey ---
export const ServiceConversionJourney: React.FC<{ data: Service['conversion'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow prefix="CONVERSION //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
        <Text variant="large" muted>{data.description}</Text>
      </div>

      {/* Path Visual */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full p-6 md:p-8 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px] flex justify-center overflow-x-auto hide-scrollbar"
      >
        <div className="flex items-center space-x-2 md:space-x-4 min-w-max text-xs md:text-sm font-mono tracking-widest uppercase">
          {data.path.map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <span className={`px-3 py-1.5 md:px-4 md:py-2 border rounded-[4px] whitespace-nowrap ${
                idx === arr.length - 1 
                  ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]' 
                  : 'border-[var(--border-strong)] bg-[var(--background)] text-[var(--foreground-muted)]'
              }`}>
                {step.trim()}
              </span>
              {idx < arr.length - 1 && (
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-[var(--foreground-subtle)] flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Elements Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.elements.map((el, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
            <span className="text-xs text-[var(--foreground-muted)]">{el}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- Platform Comparison (Google vs Meta) ---
export const ServicePlatformComparison: React.FC<{ data: Service['platformComparison'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6 text-center mx-auto">
        {data.eyebrow && <Eyebrow prefix="PLATFORMS //" hasIndicator indicatorColor="accent" className="justify-center">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {data.platforms.map((platform, idx) => (
          <div key={idx} className="p-8 border-t-2 border-[var(--accent)] bg-[var(--surface-hover)] rounded-b-[8px]">
            <Heading level="h3" className="text-2xl mb-2">{platform.name}</Heading>
            <div className="font-mono text-sm text-[var(--accent)] tracking-widest uppercase mb-6">
              {platform.positioning}
            </div>
            <Text muted variant="small" className="mb-8">{platform.description}</Text>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[var(--foreground-subtle)] mb-3">Potential Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {platform.areas.map((area, i) => (
                    <span key={i} className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-[4px] text-xs text-[var(--foreground-muted)]">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[var(--foreground-subtle)] mb-3">Core Strengths</h4>
                <ul className="space-y-2">
                  {platform.strengths.map((strength, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--foreground-muted)]">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <Text variant="large" className="text-[var(--foreground-muted)] max-w-2xl mx-auto">{data.closing}</Text>
      </div>
    </div>
  );
};

// --- Campaign Structure ---
export const ServiceCampaignStructure: React.FC<{ data: Service['campaignStructure'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow prefix="ARCHITECTURE //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
      </div>
      
      <div className="relative">
        {/* Connection line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[var(--border-strong)] -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-2 relative z-10">
          {data.stages.map((stage, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-4 border border-[var(--border-strong)] bg-[var(--surface-hover)] rounded-[6px] text-center shadow-lg"
            >
              <div className="font-mono text-[10px] text-[var(--accent)] tracking-widest uppercase mb-2">
                {stage.title}
              </div>
              <Text variant="small" className="text-xs text-[var(--foreground-muted)] leading-tight">{stage.question}</Text>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Ads Creative & Copy ---
export const ServiceAdsCreative: React.FC<{ data: Service['adsCreative'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 space-y-6">
          {data.eyebrow && <Eyebrow prefix="CREATIVE //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
          <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
          <Text variant="large" muted>{data.description}</Text>
          <div className="pt-6 flex flex-wrap gap-2">
            {data.areas.map((area, idx) => (
              <span key={idx} className="text-xs px-3 py-1 border border-[var(--border)] rounded-[4px] text-[var(--foreground-subtle)]">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="p-8 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px]">
            <div className="space-y-6">
              {data.testing.vs.map((test, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-[var(--border-strong)] bg-[var(--background)] rounded-[6px]">
                  <span className="text-sm font-medium text-[var(--foreground)] w-[40%] text-center">{test.a}</span>
                  <span className="font-mono text-xs text-[var(--accent)] uppercase px-4 w-[20%] text-center">vs</span>
                  <span className="text-sm font-medium text-[var(--foreground)] w-[40%] text-center">{test.b}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Text variant="small" className="text-xs text-[var(--foreground-subtle)] italic">{data.testing.disclaimer}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Landing Experience ---
export const ServiceLandingExperience: React.FC<{ data: Service['landingExperience'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow prefix="DESTINATION //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
        <Text variant="large" muted>{data.description}</Text>
      </div>

      <div className="w-full p-6 md:p-8 border border-[var(--border-strong)] bg-[var(--surface-hover)] rounded-[8px] overflow-x-auto hide-scrollbar">
        <div className="flex items-center space-x-3 md:space-x-6 min-w-max text-xs md:text-sm font-mono tracking-widest uppercase">
          {data.path.map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <span className={`px-4 py-2 border rounded-[4px] whitespace-nowrap ${
                idx === arr.length - 1 
                  ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]' 
                  : 'border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]'
              }`}>
                {step.trim()}
              </span>
              {idx < arr.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[var(--foreground-subtle)] flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.considerations.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
            <span className="text-xs text-[var(--foreground-muted)]">{item}</span>
          </div>
        ))}
      </div>

      <div>
        <Link to={data.link.url} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:opacity-80 transition-opacity">
          {data.link.text} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

// --- Ads Measurement ---
export const ServiceAdsMeasurement: React.FC<{ data: Service['adsMeasurement'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 space-y-6">
          {data.eyebrow && <Eyebrow prefix="MEASUREMENT //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
          <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-8">
          <div className="p-8 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px] flex flex-wrap gap-3">
            {data.metrics.map((metric, idx) => (
              <span key={idx} className="px-3 py-1.5 border border-[var(--border-strong)] rounded-[4px] text-xs font-medium text-[var(--foreground-muted)] bg-[var(--background)]">
                {metric}
              </span>
            ))}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--foreground-subtle)] mb-4">Technical Infrastructure</h4>
            <div className="flex flex-wrap gap-4">
              {data.technicalAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <span className="text-sm text-[var(--foreground-muted)]">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Ads Optimization ---
export const ServiceAdsOptimization: React.FC<{ data: Service['adsOptimization'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow prefix="OPTIMIZATION //" hasIndicator indicatorColor="accent">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
        <Text variant="large" muted>{data.description}</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.categories.map((category, idx) => (
          <div key={idx} className="p-6 border-l-2 border-[var(--accent)] bg-[var(--surface)]">
            <Heading level="h4" className="text-lg text-[var(--foreground)] mb-2">{category.title}</Heading>
            <Text muted variant="small">{category.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Ads Budget ---
export const ServiceAdsBudget: React.FC<{ data: Service['adsBudget'] }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="space-y-16">
      <div className="max-w-3xl space-y-6 text-center mx-auto">
        {data.eyebrow && <Eyebrow prefix="BUDGET //" hasIndicator indicatorColor="accent" className="justify-center">{data.eyebrow}</Eyebrow>}
        <Heading level="h2" className="!leading-tight">{data.heading}</Heading>
        <Text variant="large" muted>{data.description}</Text>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto p-8 border border-[var(--border)] bg-[var(--surface-hover)] rounded-[8px]"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base font-mono tracking-widest uppercase">
          {data.formula.map((item, idx, arr) => (
            <React.Fragment key={idx}>
              <span className={`${idx === arr.length - 1 ? 'text-[var(--accent)] font-bold' : 'text-[var(--foreground)]'}`}>
                {item}
              </span>
              {idx < arr.length - 2 && <span className="text-[var(--foreground-subtle)] px-2">×</span>}
              {idx === arr.length - 2 && <span className="text-[var(--foreground-subtle)] px-2">=</span>}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <div className="text-center">
        <Text variant="small" className="text-[var(--foreground-subtle)] max-w-2xl mx-auto">{data.closing}</Text>
      </div>
    </div>
  );
};

// --- Related Work ---

export const ServiceRelatedWork: React.FC<{ serviceTitle: string; serviceId: string }> = ({ serviceTitle, serviceId }) => {
  const relatedProjects = projects.filter(p => 
    p.services.includes(serviceTitle) || 
    p.services.some(s => s.toLowerCase().includes(serviceId.split('-')[0])) // naive matching fallback
  ).slice(0, 2);

  return (
    <div className="space-y-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <Heading level="h2">See It in Practice.</Heading>
        {relatedProjects.length > 0 && (
          <Link to="/work" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors flex items-center gap-2">
            View All Work <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {relatedProjects.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {relatedProjects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/work/${project.slug}`} className="block focus:outline-none">
                <div className="aspect-[4/3] bg-[var(--surface-hover)] border border-[var(--border)] rounded-[6px] overflow-hidden mb-6 transition-colors duration-300 group-hover:border-[var(--border-strong)] relative flex items-center justify-center">
                  <span className="font-mono text-[10px] text-[var(--foreground-subtle)] uppercase tracking-widest z-10">Visual Pending</span>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.services.slice(0, 3).map(svc => (
                      <span key={svc} className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded-sm">
                        {svc}
                      </span>
                    ))}
                  </div>
                  <Heading level="h3" className="group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </Heading>
                  <Text muted className="line-clamp-2">{project.shortDescription}</Text>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="p-12 md:p-24 bg-[var(--surface-hover)] border border-[var(--border)] rounded-[8px] text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <Heading level="h3" className="mb-4">We're building the next one.</Heading>
          <Text variant="large" muted className="mb-8">Projects matching this specific capability are currently in progress or under NDA.</Text>
          <Link to="/contact">
            <Button as="span" variant="primary" size="lg" iconType="arrow-right">
              Start Your Project
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

// --- Why Oveqira ---
export const ServiceWhyOveqira: React.FC<{ whyItems: Service['whyOveqira'] }> = ({ whyItems }) => {
  if (!whyItems?.length) return null;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-4">
        <Heading level="h2">Why Oveqira</Heading>
      </div>
      <div className="lg:col-span-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {whyItems.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <Heading level="h4" className="text-xl">{item.title}</Heading>
              <Text muted>{item.description}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- FAQ ---
export const ServiceFAQ: React.FC<{ faqs: Service['faq'] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  if (!faqs?.length) return null;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Heading level="h2" className="sticky top-32">Common Questions</Heading>
      </div>
      <div className="lg:col-span-7">
        <div className="border-t border-[var(--border)]">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-[var(--border)] overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm group"
                aria-expanded={openIndex === index}
              >
                <span className={`text-lg md:text-xl font-medium pr-8 transition-colors duration-200 ${openIndex === index ? 'text-[var(--accent)]' : 'text-[var(--foreground)] group-hover:text-[var(--foreground-muted)]'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full border transition-colors duration-200 flex-shrink-0 ${openIndex === index ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]' : 'border-[var(--border)] text-[var(--foreground-muted)] group-hover:border-[var(--border-strong)]'}`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="pb-8 pr-12">
                      <Text muted className="!leading-relaxed">{faq.answer}</Text>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- CTA ---
export const ServiceCTA: React.FC<{ cta: Service['cta'] }> = ({ cta }) => {
  return (
    <div className="py-24 md:py-32 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl space-y-8">
        <Heading level="h2" className="!leading-tight">
          {cta?.heading || 'Ready to Build Something Better?'}
        </Heading>
        <Text variant="large" muted constrained className="mx-auto">
          {cta?.description || 'Tell us what you\'re trying to achieve. We\'ll help you figure out the right way forward.'}
        </Text>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/contact" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
            <Button as="span" variant="primary" size="lg" iconType="arrow-right" className="w-full justify-center">
              {cta?.primaryLabel || 'Start Your Project'}
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">
            <Button as="span" variant="secondary" size="lg" iconType="arrow-up-right" className="w-full justify-center">
              {cta?.secondaryLabel || 'Talk to Oveqira'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import * as fs from 'fs';
let content = fs.readFileSync('src/components/services/ServiceDetailBlocks.tsx', 'utf-8');

const newComponents = `
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
      <div className="p-8 md:p-12 border border-[var(--border)] rounded-[6px] bg-[#11141A] space-y-8 relative overflow-hidden group">
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
                <span className="px-3 py-1.5 bg-[#161B26] border border-[var(--border-strong)] rounded-[4px] text-xs font-medium text-[var(--foreground-muted)]">
                  {step.trim()}
                </span>
                {idx < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[var(--border-strong)]" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="p-8 md:p-12 border border-[var(--border)] rounded-[6px] bg-[#11141A] space-y-8 relative overflow-hidden group">
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
        <div key={idx} className="p-6 md:p-8 bg-[#11141A] border border-[var(--border)] rounded-[6px] space-y-6 hover:border-[var(--accent)]/50 transition-colors">
          <Heading level="h4" className="text-lg border-b border-[var(--border-strong)] pb-4">{uc.title}</Heading>
          <div className="space-y-4 relative before:absolute before:inset-y-2 before:left-[7px] before:w-px before:bg-[var(--border-strong)]">
            {uc.flow.map((step: string, stepIdx: number) => (
              <div key={stepIdx} className="flex items-start gap-4 relative z-10">
                <div className={\`w-4 h-4 rounded-full mt-0.5 shrink-0 border-2 \${stepIdx === 0 ? 'bg-[var(--foreground)] border-[var(--foreground)]' : stepIdx === uc.flow.length - 1 ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[#11141A] border-[var(--border-strong)]'}\`} />
                <span className={\`text-sm font-medium \${stepIdx === 0 ? 'text-[var(--foreground)]' : 'text-[var(--foreground-muted)]'}\`}>{step}</span>
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
          <div className="p-8 bg-[#11141A] border border-[var(--border)] rounded-[6px]">
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
          <div className="p-8 bg-[#161B26] border border-red-900/30 rounded-[6px]">
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
          <div key={idx} className="flex items-center justify-center p-4 md:px-8 md:py-4 bg-[#11141A] border border-[var(--border)] rounded-[6px] shadow-lg text-center hover:border-[var(--accent)] transition-colors">
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
    <div className="max-w-4xl mx-auto border border-[var(--border)] bg-[#11141A] rounded-[6px] p-8 md:p-16 flex flex-col items-center relative overflow-hidden">
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
          <div key={idx} className="p-6 border border-[var(--border-strong)] bg-[#161B26] rounded-[6px] text-center flex flex-col items-center justify-center gap-3">
            <span className={\`text-xs font-mono uppercase tracking-widest \${idx === 0 ? 'text-green-400' : idx === 1 ? 'text-yellow-400' : 'text-[var(--accent)]'}\`}>{path.label}</span>
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
      <div className="p-8 md:p-12 border border-[var(--border)] bg-[#11141A] rounded-[6px] opacity-75">
        <Heading level="h4" className="text-lg font-mono text-[var(--foreground-subtle)] mb-8 uppercase tracking-widest">{data.before.title}</Heading>
        <div className="flex flex-col gap-3">
          {data.before.flow.map((step: string, idx: number) => (
            <div key={idx} className="flex items-center gap-4">
              {idx > 0 && <div className="w-px h-6 bg-[var(--border-strong)] ml-[11px]" />}
              <div className="flex items-center gap-4 w-full">
                <div className="w-6 h-6 rounded-full border border-[var(--border-strong)] bg-[#161B26] shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
                </div>
                <div className="flex-1 p-4 border border-[var(--border-strong)] rounded-[4px] bg-[#0A0C10] text-sm text-[var(--foreground-muted)]">
                  {step}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* After */}
      <div className="p-8 md:p-12 border border-[var(--accent)]/30 bg-[#11141A] rounded-[6px] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <Heading level="h4" className="text-lg font-mono text-[var(--accent)] mb-8 uppercase tracking-widest">{data.after.title}</Heading>
        <div className="flex flex-col gap-3 relative z-10">
          {data.after.flow.map((step: string, idx: number) => (
            <div key={idx} className="flex items-center gap-4">
              {idx > 0 && <div className="w-px h-6 bg-[var(--accent)]/50 ml-[11px]" />}
              <div className="flex items-center gap-4 w-full">
                <div className="w-6 h-6 rounded-full border-2 border-[var(--accent)] bg-[#161B26] shrink-0 flex items-center justify-center">
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
`;

const insertIndex = content.lastIndexOf('// ============================================================================');
content = content.substring(0, insertIndex) + newComponents + '\n' + content.substring(insertIndex);
fs.writeFileSync('src/components/services/ServiceDetailBlocks.tsx', content);

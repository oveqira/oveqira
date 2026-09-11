import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { TechnicalFrame } from '../ui/TechnicalFrame';
import { ImageContainer } from '../ui/ImageContainer';
import { IconWrapper } from '../ui/IconWrapper';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import {
  Code2,
  Terminal,
  Activity,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  Globe,
  Database,
  Lock,
  Search,
  MonitorCheck,
} from 'lucide-react';

export const TechnicalSection: React.FC<{ surfaceContext: 'dark' | 'light' }> = ({
  surfaceContext,
}) => {
  const [selectedRatio, setSelectedRatio] = useState<'16/9' | '4/3' | '1/1' | '21/9'>('16/9');

  const icons = [
    { icon: <MonitorCheck className="w-4 h-4" strokeWidth={1.75} />, label: 'Web Platform' },
    { icon: <Code2 className="w-4 h-4" strokeWidth={1.75} />, label: 'Architecture' },
    { icon: <Cpu className="w-4 h-4" strokeWidth={1.75} />, label: 'AI Engine' },
    { icon: <TrendingUp className="w-4 h-4" strokeWidth={1.75} />, label: 'Growth Vector' },
    { icon: <Database className="w-4 h-4" strokeWidth={1.75} />, label: 'Data Lake' },
    { icon: <Lock className="w-4 h-4" strokeWidth={1.75} />, label: 'Security' },
    { icon: <Search className="w-4 h-4" strokeWidth={1.75} />, label: 'SEO Analysis' },
    { icon: <Globe className="w-4 h-4" strokeWidth={1.75} />, label: 'Global CDN' },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Eyebrow prefix="05 //" hasIndicator indicatorColor="accent">
          TECHNICAL VISUAL LANGUAGE & ASSETS
        </Eyebrow>
        <Heading level="h2" className="mt-2">
          Precision Engineering Aesthetic
        </Heading>
        <Text muted constrained className="mt-2">
          Subtle interface telemetry, fine hairline grid lines, and technical framing establish
          Oveqira's authority as a digital technology company without devolving into cyberpunk clichés.
        </Text>
      </div>

      {/* Technical Browser / Window Frame */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[var(--foreground)]">
            Interactive Technical Frame Container
          </h3>
          <Badge variant="accent" size="sm" mono>
            SYS_VIEWPORT // 01
          </Badge>
        </div>

        <TechnicalFrame
          title="OVEQIRA // CORE ENGINE WORKBENCH"
          statusText="PIPELINE: SYNCHRONIZED"
          badge="BUILD: PRODUCTION"
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
              <div>
                <span className="text-xs font-mono text-[#00F2FE]">ENV // PRODUCTION-READY</span>
                <h4 className="text-base font-semibold text-[var(--foreground)] mt-0.5">
                  High-Conversion Digital Engine Protocol
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success" dot dotColor="success" size="sm">
                  100% AUDIT PASS
                </Badge>
                <Badge variant="outline" size="sm" mono>
                  LATENCY &lt; 20MS
                </Badge>
              </div>
            </div>

            {/* Code / Telemetry Fragment */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3 rounded-[4px] bg-[var(--surface-hover)] border border-[var(--border)]">
                <span className="text-[var(--foreground-subtle)] block text-[10px]">THROUGHPUT</span>
                <span className="text-[#00F2FE] text-base font-semibold">12,480 REQ/S</span>
                <span className="text-[10px] text-[var(--foreground-muted)] block mt-1">Zero downtime SLA</span>
              </div>
              <div className="p-3 rounded-[4px] bg-[var(--surface-hover)] border border-[var(--border)]">
                <span className="text-[var(--foreground-subtle)] block text-[10px]">AVG CONVERSION LIFT</span>
                <span className="text-[#10B981] text-base font-semibold">+42.6%</span>
                <span className="text-[10px] text-[var(--foreground-muted)] block mt-1">Over legacy baseline</span>
              </div>
              <div className="p-3 rounded-[4px] bg-[var(--surface-hover)] border border-[var(--border)]">
                <span className="text-[var(--foreground-subtle)] block text-[10px]">LIGHTHOUSE SCORE</span>
                <span className="text-[var(--foreground)] text-base font-semibold">99 / 100</span>
                <span className="text-[10px] text-[var(--foreground-muted)] block mt-1">Core Web Vitals green</span>
              </div>
            </div>
          </div>
        </TechnicalFrame>
      </div>

      {/* Media & Image Container Language */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Modular Image Container & Ratio System
            </h3>
            <p className="text-xs text-[var(--foreground-muted)]">
              Engineered with coordinate stamps, corner registration ticks, and ratio flexibility.
            </p>
          </div>
          <div className="flex items-center gap-1">
            {(['16/9', '4/3', '1/1', '21/9'] as const).map((ratio) => (
              <button
                key={ratio}
                onClick={() => setSelectedRatio(ratio)}
                className={`px-2.5 py-1 text-xs font-mono rounded-[3px] border transition-colors cursor-pointer ${
                  selectedRatio === ratio
                    ? 'border-[#00F2FE] bg-[#00F2FE]/10 text-[#00F2FE]'
                    : 'border-[var(--border-strong)] text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {ratio}
              </button>
            ))}
          </div>
        </div>

        <ImageContainer
          aspectRatio={selectedRatio}
          technicalLabel={`PORTFOLIO_ASSET // RATIO_${selectedRatio.replace('/', '_')}`}
          caption="Production visual placeholder with technical reticle for high-resolution case study media."
        />
      </div>

      {/* Iconography Standards */}
      <Card variant="default" surfaceContext={surfaceContext} padding="lg">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                Uniform Iconography Standards
              </h3>
              <p className="text-xs text-[var(--foreground-muted)]">
                Strict 1.75px geometric stroke width • Consistent bounding box • Zero 3D or cartoon emojis
              </p>
            </div>
            <Badge variant="outline" size="sm" mono>
              LUCIDE UNIFIED
            </Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {icons.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-[4px] border border-[var(--border)] bg-[var(--surface-hover)] flex items-center gap-3"
              >
                <IconWrapper variant="accent" size="md">
                  {item.icon}
                </IconWrapper>
                <div>
                  <span className="text-xs font-medium text-[var(--foreground)] block">{item.label}</span>
                  <span className="font-mono text-[9px] text-[var(--foreground-subtle)] block">1.75px stroke</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

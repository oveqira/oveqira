import React from 'react';
import { Card } from '../ui/Card';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { OVEQIRA_BRAND } from '../../design-system/tokens';
import {
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  Compass,
  ArrowRight,
  Check,
} from 'lucide-react';

export const BrandOverviewSection: React.FC<{
  surfaceContext: 'dark' | 'light';
  onExploreSystem: () => void;
}> = ({ surfaceContext, onExploreSystem }) => {
  const pillars = [
    {
      title: 'Strategic',
      desc: 'Digital architecture oriented around conversion velocity, scalable pipelines, and verified enterprise business value.',
    },
    {
      title: 'Modern & Intelligent',
      desc: 'Autonomous AI workflows, clean typography, and zero clutter — prioritizing speed, precision, and clarity.',
    },
    {
      title: 'Premium & Technical',
      desc: 'Sophisticated neutral balance, subtle telemetry framing, and surgical use of Oveqira electric cyan.',
    },
    {
      title: 'Reliable & Human',
      desc: 'Intuitive UX, WCAG AA accessibility, transparent communication, and authentic partnership.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Brand Hero Manifesto */}
      <div className="relative p-6 sm:p-10 rounded-[8px] border border-[var(--border)] bg-[var(--surface-hover)] overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="accent" dot dotColor="accent" mono size="sm">
              STEP 01 OF 08
            </Badge>
            <Badge variant="outline" size="sm" mono>
              BRAND & DESIGN SYSTEM FOUNDATION
            </Badge>
          </div>

          <div className="space-y-3">
            <Eyebrow prefix="BRAND ETHOS //">OVEQIRA DIGITAL GROWTH PARTNER</Eyebrow>
            <Heading level="display" className="text-3xl sm:text-5xl lg:text-6xl font-bold">
              Less Visual Noise. <br className="hidden sm:inline" />
              <span className="text-[#00F2FE]">More Visual Intention.</span>
            </Heading>
            <Text variant="large" muted constrained className="text-base sm:text-lg pt-1">
              Oveqira combines the aesthetic restraint of a premium digital studio, the engineering
              rigor of a technology company, and the measurable discipline of a strategic growth
              partner.
            </Text>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              surfaceContext={surfaceContext}
              onClick={onExploreSystem}
            >
              Explore Design System Tokens
            </Button>
            <span className="text-xs font-mono text-[var(--foreground-subtle)] pl-2 hidden sm:inline">
              READY FOR STEP 02 REVIEW
            </span>
          </div>
        </div>
      </div>

      {/* Brand Positioning Pillars */}
      <div>
        <div className="mb-6">
          <Eyebrow prefix="01 //" hasIndicator indicatorColor="accent">
            BRAND POSITIONING PILLARS
          </Eyebrow>
          <Heading level="h2" className="mt-1">
            Premium Studio + Tech Company + Strategic Growth
          </Heading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              variant="default"
              surfaceContext={surfaceContext}
              padding="md"
              className="space-y-2"
            >
              <span className="font-mono text-xs text-[#00F2FE] font-bold">
                0{idx + 1} //
              </span>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">{pillar.title}</h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                {pillar.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Core Capabilities Roster */}
      <Card
        variant="technical"
        surfaceContext={surfaceContext}
        padding="lg"
        technicalCode="SYSTEM // 10_CAPABILITIES"
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-[var(--foreground)]">
              Core Capabilities Represented by this Design System
            </h3>
            <p className="text-xs text-[var(--foreground-muted)]">
              All forthcoming steps (Steps 02 through 08) will compose experiences utilizing these
              calibrated tokens and components.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            {OVEQIRA_BRAND.coreCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-3 rounded-[4px] border border-[var(--border)] bg-[var(--surface-hover)] flex items-center gap-2 text-xs"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] shrink-0" />
                <span className="text-[var(--foreground)] font-medium leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

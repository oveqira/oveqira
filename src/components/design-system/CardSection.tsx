import React from 'react';
import { Card } from '../ui/Card';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Code, Cpu, TrendingUp, Sparkles, Layers } from 'lucide-react';

export const CardSection: React.FC<{ surfaceContext: 'dark' | 'light' }> = ({
  surfaceContext,
}) => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Eyebrow prefix="04 //" hasIndicator indicatorColor="accent">
          CARD & SURFACE ARCHITECTURE
        </Eyebrow>
        <Heading level="h2" className="mt-2">
          Content-Focused Framing
        </Heading>
        <Text muted constrained className="mt-2">
          Cards provide structural containment without visual clutter. By using thin 1px neutral
          borders, calibrated 6px corner radii, and restrained hover elevations, content takes center
          stage.
        </Text>
      </div>

      {/* 4 Core Card Variants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Default Card */}
        <Card variant="default" surfaceContext={surfaceContext} padding="lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--foreground-muted)] uppercase">
                VARIANT: DEFAULT
              </span>
              <Badge variant="neutral" size="sm" mono>
                PANEL #141822
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Digital Product Architecture
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Engineered web applications built for speed, conversion, and seamless multi-device responsiveness.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-[var(--border)] pt-4">
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">PERF: 99.8%</span>
              <span className="text-xs text-[var(--accent)] font-medium">Learn more →</span>
            </div>
          </div>
        </Card>

        {/* Technical Card */}
        <Card
          variant="technical"
          surfaceContext={surfaceContext}
          padding="lg"
          technicalCode="MOD // 02_AI"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--accent)] uppercase">
                VARIANT: TECHNICAL FRAME
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Intelligent AI & Automation
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Autonomous workflows and intelligent agents that streamline enterprise operations and lower acquisition costs.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-[var(--border)] pt-4">
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">SYS: ACTIVE</span>
              <span className="text-xs text-[var(--accent)] font-medium">Inspect specs →</span>
            </div>
          </div>
        </Card>

        {/* Elevated Card */}
        <Card variant="elevated" surfaceContext={surfaceContext} padding="lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--foreground-muted)] uppercase">
                VARIANT: ELEVATED MODAL/HERO
              </span>
              <Badge variant="accent" size="sm" mono>
                HIGHLIGHT
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Full-Funnel Growth Engineering
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Unified SEO, PPC marketing, and customer journey optimization designed for sustainable enterprise ROI.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-[var(--border)] pt-4">
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">ROAS: 4.8X</span>
              <span className="text-xs text-[var(--accent)] font-medium">Case details →</span>
            </div>
          </div>
        </Card>

        {/* Interactive Hover Card */}
        <Card
          variant="default"
          surfaceContext={surfaceContext}
          padding="lg"
          interactive
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--accent)] uppercase">
                VARIANT: INTERACTIVE (HOVER ME)
              </span>
              <Badge variant="outline" size="sm" mono>
                HOVER STATE
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              Brand Identity & Design Systems
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Clean visual identities that communicate authority, credibility, and technical excellence across every touchpoint.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-[var(--border)] pt-4">
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">ASSETS: READY</span>
              <span className="text-xs text-[var(--foreground)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all inline-flex items-center gap-1 font-medium">
                Explore system →
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Border & Radius Rules */}
      <Card variant="technical" surfaceContext={surfaceContext} padding="lg" technicalCode="RULES // RADII">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-[var(--foreground)]">
            Border & Radius Mathematical Discipline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[var(--foreground-muted)]">
            <div className="p-3 rounded-[4px] border border-[var(--border)] bg-[var(--surface-hover)]">
              <span className="font-mono text-[var(--accent)] block font-semibold">4px — Elements</span>
              Buttons, input fields, badges, and inline tags.
            </div>
            <div className="p-3 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)]">
              <span className="font-mono text-[var(--accent)] block font-semibold">6px — Cards</span>
              Standard content cards, modules, and dialogs.
            </div>
            <div className="p-3 rounded-[8px] border border-[var(--border)] bg-[var(--surface-hover)]">
              <span className="font-mono text-[var(--accent)] block font-semibold">8px — Frames</span>
              Large hero displays, code viewports, and outer shells.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

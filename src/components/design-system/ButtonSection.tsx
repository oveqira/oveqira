import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { ArrowRight, ArrowUpRight, Zap, Code2 } from 'lucide-react';

export const ButtonSection: React.FC<{ surfaceContext: 'dark' | 'light' }> = ({
  surfaceContext,
}) => {
  const [clickedCount, setClickedCount] = useState<number>(0);
  const [simulatedLoading, setSimulatedLoading] = useState<boolean>(false);

  const triggerSimulation = () => {
    setSimulatedLoading(true);
    setTimeout(() => {
      setSimulatedLoading(false);
      setClickedCount((prev) => prev + 1);
    }, 1200);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Eyebrow prefix="03 //" hasIndicator indicatorColor="accent">
          BUTTON & INTERACTION ARCHITECTURE
        </Eyebrow>
        <Heading level="h2" className="mt-2">
          Precision Interaction Triggers
        </Heading>
        <Text muted constrained className="mt-2">
          Buttons are purposeful signals, not generic templates. With 2:1 horizontal-to-vertical
          proportions, subtle directional vector transitions, and strict accessibility focus rings,
          every interaction confirms intent.
        </Text>
      </div>

      {/* Core Button Archetypes Requested in Prompt */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Primary */}
        <Card variant="default" surfaceContext={surfaceContext} padding="lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">
                PRIMARY ACTION
              </span>
              <Badge variant="accent" size="sm" mono>
                HIGH CONVERSION
              </Badge>
            </div>
            <p className="text-xs text-[var(--foreground-muted)]">
              Flagship conversion trigger. High-contrast solid fill with smooth directional arrow translation.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                surfaceContext={surfaceContext}
                onClick={triggerSimulation}
                isLoading={simulatedLoading}
              >
                Start Your Project
              </Button>
            </div>

            <div className="pt-2 font-mono text-[10px] text-[var(--foreground-subtle)]">
              Hover: Arrow shifts +4px • Subtle cyan glow
            </div>
          </div>
        </Card>

        {/* Secondary */}
        <Card variant="default" surfaceContext={surfaceContext} padding="lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--foreground-muted)] font-semibold uppercase">
                SECONDARY ACTION
              </span>
              <Badge variant="outline" size="sm" mono>
                EDITORIAL
              </Badge>
            </div>
            <p className="text-xs text-[var(--foreground-muted)]">
              Minimal hairline outline designed for navigation to case studies and secondary pathways.
            </p>

            <div className="pt-2">
              <Button
                variant="secondary"
                size="md"
                iconType="arrow-up-right"
                surfaceContext={surfaceContext}
                onClick={() => setClickedCount((p) => p + 1)}
              >
                View Our Work
              </Button>
            </div>

            <div className="pt-2 font-mono text-[10px] text-[var(--foreground-subtle)]">
              Hover: Border snaps to accent • Arrow +2px diag
            </div>
          </div>
        </Card>

        {/* Tertiary */}
        <Card variant="default" surfaceContext={surfaceContext} padding="lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--foreground-subtle)] font-semibold uppercase">
                TERTIARY / LINK
              </span>
              <Badge variant="neutral" size="sm" mono>
                INLINE TEXT
              </Badge>
            </div>
            <p className="text-xs text-[var(--foreground-muted)]">
              Refined textual link treatment for in-paragraph and card footer discoverability.
            </p>

            <div className="pt-2">
              <Button
                variant="tertiary"
                size="md"
                iconType="arrow-right"
                surfaceContext={surfaceContext}
                onClick={() => setClickedCount((p) => p + 1)}
              >
                Explore Capabilities
              </Button>
            </div>

            <div className="pt-2 font-mono text-[10px] text-[var(--foreground-subtle)]">
              Hover: Color transitions to cyan • Border reveal
            </div>
          </div>
        </Card>
      </div>

      {/* Button Size & State Matrix */}
      <Card variant="technical" surfaceContext={surfaceContext} padding="lg" technicalCode="MATRIX // BTN_STATES">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Scale & State Matrix (Small / Medium / Large / Disabled / Loading)
            </h3>
            <span className="text-xs font-mono text-[#00F2FE]">
              INTERACTION DISPATCHES: {clickedCount}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm" surfaceContext={surfaceContext}>
              Small CTA
            </Button>
            <Button variant="primary" size="md" surfaceContext={surfaceContext}>
              Medium CTA
            </Button>
            <Button variant="primary" size="lg" surfaceContext={surfaceContext}>
              Large CTA
            </Button>
            <Button variant="secondary" size="md" surfaceContext={surfaceContext} disabled>
              Disabled State
            </Button>
            <Button variant="secondary" size="md" surfaceContext={surfaceContext} isLoading>
              Syncing
            </Button>
            <Button variant="ghost" size="md" surfaceContext={surfaceContext}>
              Ghost Action
            </Button>
          </div>
        </div>
      </Card>

      {/* Dual Surface Demonstration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dark Surface Context */}
        <div className="p-6 rounded-[6px] bg-[var(--surface)] border border-[var(--border)] space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#00F2FE]">SURFACE // DARK (CHARCOAL #0B0D11)</span>
            <span className="text-[10px] font-mono text-[var(--foreground-subtle)]">AAA CONTRAST</span>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <Button variant="primary" size="md">
              Start Your Project
            </Button>
            <Button variant="secondary" size="md" iconType="arrow-up-right">
              View Our Work
            </Button>
          </div>
        </div>

        {/* Light Surface Context */}
        <div className="p-6 rounded-[6px] bg-[#FFFFFF] border border-[#E2E4E8] space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#008B9A] font-semibold">
              SURFACE // LIGHT (PURE WHITE #FFFFFF)
            </span>
            <span className="text-[10px] font-mono text-[#5A6170]">AAA CONTRAST</span>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <Button variant="primary" size="md" surfaceContext="light">
              Start Your Project
            </Button>
            <Button variant="secondary" size="md" surfaceContext="light" iconType="arrow-up-right">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

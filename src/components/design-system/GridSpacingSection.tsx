import React from 'react';
import { Card } from '../ui/Card';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { SPACING_TOKENS } from '../../design-system/tokens';

export const GridSpacingSection: React.FC<{ surfaceContext: 'dark' | 'light' }> = ({
  surfaceContext,
}) => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Eyebrow prefix="06 //" hasIndicator indicatorColor="accent">
          GRID & SPACING SYSTEM
        </Eyebrow>
        <Heading level="h2" className="mt-2">
          Architectural Rhythm & Breathability
        </Heading>
        <Text muted constrained className="mt-2">
          Whitespace is an active structural material in Oveqira's brand identity. Rather than
          packing information into dense pockets, our scale provides predictable rhythmic pacing
          from 4px micro-gaps to 96px editorial section separations.
        </Text>
      </div>

      {/* 12-Column Grid Simulation */}
      <Card variant="technical" surfaceContext={surfaceContext} padding="lg" technicalCode="GRID // 12_COL">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                12-Column Responsive Editorial Grid
              </h3>
              <p className="text-xs text-[var(--foreground-muted)]">
                Max container 1320px • 24px column gutters • Fluid margins (16px mobile, 32px desktop)
              </p>
            </div>
            <Badge variant="accent" size="sm" mono>
              MAX: 1320PX
            </Badge>
          </div>

          {/* Interactive column visualizer */}
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-3 py-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-16 sm:h-24 rounded-[3px] border border-[#00F2FE]/25 bg-[#00F2FE]/5 flex flex-col items-center justify-between p-1.5 text-center transition-all hover:bg-[#00F2FE]/15"
              >
                <span className="font-mono text-[9px] text-[#00F2FE] font-semibold">
                  C{i + 1}
                </span>
                <div className="w-full h-1 bg-[#00F2FE]/20 rounded-full" />
                <span className="font-mono text-[8px] text-[var(--foreground-subtle)] hidden sm:block">
                  8.33%
                </span>
              </div>
            ))}
          </div>

          {/* Common Layout Compositions Supported */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono text-[var(--foreground-subtle)] uppercase block">
              Supported Editorial Archetypes:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-[4px] border border-[var(--border)] bg-[var(--surface-hover)]">
                <span className="text-[#00F2FE] block font-semibold">Split 6 / 6</span>
                <span className="text-[var(--foreground-muted)] text-[11px]">Headline & Narrative Lead</span>
              </div>
              <div className="p-3 rounded-[4px] border border-[var(--border)] bg-[var(--surface-hover)]">
                <span className="text-[#00F2FE] block font-semibold">Editorial 4 / 8</span>
                <span className="text-[var(--foreground-muted)] text-[11px]">Sticky Sidebar & Case Study</span>
              </div>
              <div className="p-3 rounded-[4px] border border-[var(--border)] bg-[var(--surface-hover)]">
                <span className="text-[#00F2FE] block font-semibold">Bento 8 / 4</span>
                <span className="text-[var(--foreground-muted)] text-[11px]">Flagship Feature & Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Spacing Scale Visualizer */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-[var(--foreground)]">
              Consistent Spacing Token Scale
            </h3>
            <p className="text-xs text-[var(--foreground-muted)]">
              Geometric 8pt-based rhythm for micro and macro layout separation
            </p>
          </div>
          <Badge variant="outline" size="sm" mono>
            XS TO 4XL
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SPACING_TOKENS.map((token, idx) => (
            <div
              key={idx}
              className="p-4 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#00F2FE]">{token.name}</span>
                  <span className="font-mono text-xs text-[var(--foreground-muted)]">
                    {token.size} ({token.rem})
                  </span>
                </div>
                <p className="text-xs text-[var(--foreground-subtle)]">{token.usage}</p>
              </div>

              {/* Visual bar */}
              <div className="w-24 flex justify-end">
                <div
                  className="h-5 bg-[#00F2FE]/20 border border-[#00F2FE]/40 rounded-[2px]"
                  style={{ width: `${Math.min(token.px, 96)}px` }}
                  title={`${token.size}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

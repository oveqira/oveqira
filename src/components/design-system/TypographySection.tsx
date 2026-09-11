import React from 'react';
import { Card } from '../ui/Card';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { TYPOGRAPHY_TOKENS } from '../../design-system/tokens';
import { AlignLeft, CheckCircle2 } from 'lucide-react';

export const TypographySection: React.FC<{ surfaceContext: 'dark' | 'light' }> = ({
  surfaceContext,
}) => {
  return (
    <div className="space-y-12">
      {/* Section Intro */}
      <div>
        <Eyebrow prefix="02 //" hasIndicator indicatorColor="accent">
          TYPOGRAPHY SYSTEM
        </Eyebrow>
        <Heading level="h2" className="mt-2">
          Editorial Confidence Without Shouting
        </Heading>
        <Text muted constrained className="mt-2">
          Oveqira's typography balances geometric precision with human warmth. Tight negative
          letterspacing on large titles delivers impact without artificial decoration, while
          meticulously ratioed line-heights guarantee effortless reading comfort.
        </Text>
      </div>

      {/* Flagship Example from Section 6 */}
      <Card
        variant="technical"
        surfaceContext={surfaceContext}
        padding="lg"
        technicalCode="SPEC: TYPO_RELATION // SECTION 6"
      >
        <div className="max-w-2xl space-y-4">
          <Eyebrow prefix="01 //" hasIndicator indicatorColor="accent">
            STRATEGIC GROWTH CAPABILITIES
          </Eyebrow>

          <Heading level="h1">
            We Build Digital Experiences That Move Businesses Forward.
          </Heading>

          <Text variant="large" muted constrained>
            From high-converting web architecture to automated growth engines, Oveqira partners
            with modern enterprises to craft digital systems that scale with measurable velocity.
          </Text>

          <div className="pt-2 flex items-center gap-3">
            <span className="font-mono text-[10px] text-[var(--accent)] tracking-wider uppercase">
              • 65ch Line-Length Protected
            </span>
            <span className="text-[var(--foreground-subtle)]">•</span>
            <span className="font-mono text-[10px] text-[var(--foreground-subtle)] tracking-wider uppercase">
              Inter Var / Geometric Display
            </span>
          </div>
        </div>
      </Card>

      {/* Typography Hierarchy Specimen */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-[var(--foreground)]">
            Type Scale & Hierarchy Ladder
          </h3>
          <span className="font-mono text-xs text-[var(--foreground-subtle)]">
            RATIO: 1.25+ MAJOR THIRD / PERFECT FOURTH
          </span>
        </div>

        <div className="space-y-4">
          {/* Display */}
          <div className="p-6 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--foreground-muted)]">
              <span className="text-[#00F2FE]">Display • 84px (Desktop) / 64px (Mobile)</span>
              <span>Weight: 700 • Leading: 1.08 • Track: -0.035em</span>
            </div>
            <Heading level="display">Digital Growth Partner</Heading>
            <p className="text-xs text-[var(--foreground-subtle)]">Flagship hero headline, flagship brand moments</p>
          </div>

          {/* H1 */}
          <div className="p-6 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--foreground-muted)]">
              <span className="text-[#00F2FE]">Heading 1 • 48px / 32px</span>
              <span>Weight: 700 • Leading: 1.15 • Track: -0.03em</span>
            </div>
            <Heading level="h1">Enterprise Systems & Architecture</Heading>
            <p className="text-xs text-[var(--foreground-subtle)]">Major section headers, primary page titles</p>
          </div>

          {/* H2 */}
          <div className="p-5 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--foreground-muted)]">
              <span className="text-[#00F2FE]">Heading 2 • 36px / 26px</span>
              <span>Weight: 600 • Leading: 1.20 • Track: -0.025em</span>
            </div>
            <Heading level="h2">Intelligent Automation & Scalability</Heading>
            <p className="text-xs text-[var(--foreground-subtle)]">Sub-section titles, capability groupings</p>
          </div>

          {/* H3 */}
          <div className="p-5 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--foreground-muted)]">
              <span className="text-[#00F2FE]">Heading 3 • 24px / 20px</span>
              <span>Weight: 600 • Leading: 1.30 • Track: -0.02em</span>
            </div>
            <Heading level="h3">Custom Product Development & Performance</Heading>
            <p className="text-xs text-[var(--foreground-subtle)]">Card headers, feature modules, metric titles</p>
          </div>

          {/* H4 */}
          <div className="p-4 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--foreground-muted)]">
              <span className="text-[#00F2FE]">Heading 4 • 18px / 16px</span>
              <span>Weight: 600 • Leading: 1.40 • Track: -0.01em</span>
            </div>
            <Heading level="h4">Conversion Rate Optimization Protocol</Heading>
            <p className="text-xs text-[var(--foreground-subtle)]">Granular module titles, list titles</p>
          </div>

          {/* Body Levels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2">
              <span className="font-mono text-xs text-[#00F2FE] block">Body Large • 18px</span>
              <Text variant="large">
                High-impact lead copy designed to establish narrative pacing for executive readers.
              </Text>
            </div>

            <div className="p-4 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2">
              <span className="font-mono text-xs text-[#00F2FE] block">Body Base • 16px</span>
              <Text variant="body">
                Standard editorial paragraph text with generous 1.65 line-height and strict 70ch constraint.
              </Text>
            </div>

            <div className="p-4 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2">
              <span className="font-mono text-xs text-[#00F2FE] block">Body Small • 14px</span>
              <Text variant="small" muted>
                Supplementary descriptions, card annotations, and technical footnotes.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

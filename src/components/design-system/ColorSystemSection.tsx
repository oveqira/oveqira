import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { COLOR_TOKENS } from '../../design-system/tokens';
import { Copy, Check, Info, ShieldCheck } from 'lucide-react';

export const ColorSystemSection: React.FC<{ surfaceContext: 'dark' | 'light' }> = ({
  surfaceContext,
}) => {
  const [copiedVar, setCopiedVar] = useState<string | null>(null);

  const handleCopy = (variable: string) => {
    navigator.clipboard.writeText(`var(${variable})`);
    setCopiedVar(variable);
    setTimeout(() => setCopiedVar(null), 2000);
  };

  const paletteGroups = [
    {
      title: 'Primary Charcoal & Near-Black',
      subtitle: 'Authoritative canvas, primary headers, navigations, and strong structural surfaces',
      swatches: [
        { name: 'Canvas Black', hex: '#0B0D11', desc: 'Base dark background & app container' },
        { name: 'Charcoal Deep', hex: '#11141A', desc: 'Secondary dark surface & alternate rhythm' },
        { name: 'Panel Dark', hex: '#141822', desc: 'Standard card & surface element fill' },
        { name: 'Elevated Slate', hex: '#161B26', desc: 'Elevated components & modal overlays' },
      ],
    },
    {
      title: 'Light & Off-White Contrast Surfaces',
      subtitle: 'Clean white, off-white, and warm neutral zones for high-clarity editorial sections',
      swatches: [
        { name: 'Pure White', hex: '#FFFFFF', desc: 'Light surface base & clean card fill' },
        { name: 'Off-White Neutral', hex: '#F8F9FA', desc: 'Secondary light section alternating fill' },
        { name: 'Warm Mist Gray', hex: '#F3F4F6', desc: 'Card hover & interactive light surface' },
        { name: 'Contrast Border Light', hex: '#E2E4E8', desc: 'Light mode 1px hairline divider' },
      ],
    },
    {
      title: 'Signature Accent: Electric Cyan / Technical Teal',
      subtitle: 'Restrained precision signal — used strictly for CTAs, active telemetry, and links',
      swatches: [
        { name: 'Electric Cyan', hex: '#00F2FE', desc: 'Dark surface primary signal & active focal point' },
        { name: 'Technical Teal', hex: '#008B9A', desc: 'Light surface accessible high-contrast accent' },
        { name: 'Hover Neon Cyan', hex: '#38F9D7', desc: 'Active hover illumination & link transition' },
        { name: 'Cyan Muted (12%)', hex: 'rgba(0,242,254,0.12)', desc: 'Badge backing & indicator halo' },
      ],
    },
    {
      title: 'Neutral Structural Grayscale',
      subtitle: 'Carefully measured intermediate values ensuring WCAG AA compliant hierarchy',
      swatches: [
        { name: 'Border Subtle', hex: '#1F2430', desc: 'Base 1px hairline divider in dark mode' },
        { name: 'Border Strong', hex: '#2D3546', desc: 'Input outlines & highlighted card edges' },
        { name: 'Text Muted', hex: '#94A3B8', desc: 'Secondary descriptive text & subtitles' },
        { name: 'Text Subtle', hex: '#64748B', desc: 'Technical coordinate labels & timestamps' },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div>
        <Eyebrow prefix="01 //" hasIndicator indicatorColor="accent">
          COLOR ARCHITECTURE & TOKENS
        </Eyebrow>
        <Heading level="h2" className="mt-2">
          Restrained, High-Contrast Palette
        </Heading>
        <Text muted constrained className="mt-2">
          Oveqira's color system rejects rainbow gradients and noisy neon aesthetics. It relies on
          deep charcoal, pure white contrast, and a razor-sharp electric cyan accent deployed with
          surgical restraint.
        </Text>
      </div>

      {/* Strategic Rule Callout */}
      <div className="p-4 sm:p-5 rounded-[6px] border border-[#00F2FE]/30 bg-[#00F2FE]/5 flex items-start gap-3.5">
        <Info className="w-5 h-5 text-[#00F2FE] shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-[var(--foreground)] space-y-1">
          <p className="font-semibold text-[var(--foreground)]">Strategic Signal Principle:</p>
          <p className="text-[var(--foreground-muted)]">
            The electric cyan accent occupies <strong className="text-[#00F2FE]">less than 5%</strong>{' '}
            of total viewport surface. It acts as an optical signal for action points (CTA buttons,
            active route indicators, and key metrics) rather than background decoration.
          </p>
        </div>
      </div>

      {/* Visual Palette Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {paletteGroups.map((group, idx) => (
          <Card key={idx} variant="default" surfaceContext={surfaceContext} padding="md">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-[var(--foreground)]">{group.title}</h3>
              <p className="text-xs text-[var(--foreground-subtle)] mt-0.5">{group.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {group.swatches.map((swatch, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-[4px] p-2.5 border border-[var(--border-strong)]/60 bg-[var(--surface-hover)] flex flex-col justify-between h-28"
                >
                  <div
                    className="w-full h-10 rounded-[2px] border border-black/10 shadow-inner"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="mt-2">
                    <span className="font-mono text-[10px] font-semibold text-[var(--foreground)] block truncate">
                      {swatch.name}
                    </span>
                    <span className="font-mono text-[9px] text-[#00F2FE] block truncate">
                      {swatch.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Design Tokens Table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-semibold text-[var(--foreground)]">
              Engineered CSS Token Ledger
            </h3>
            <p className="text-xs text-[var(--foreground-muted)]">
              Implemented in <code className="font-mono text-[#00F2FE]">src/index.css</code> for automated theme & surface inheritance.
            </p>
          </div>
          <Badge variant="outline" size="sm" mono>
            12 TOKENS ACTIVE
          </Badge>
        </div>

        <div className="overflow-x-auto rounded-[6px] border border-[var(--border)]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface-hover)] font-mono text-[10px] tracking-wider text-[var(--foreground-muted)] uppercase">
                <th className="py-3 px-4">CSS Variable</th>
                <th className="py-3 px-4">Dark Surface Value</th>
                <th className="py-3 px-4">Light Surface Value</th>
                <th className="py-3 px-4">Role & Application</th>
                <th className="py-3 px-4 text-right">Copy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F2430]/70 font-mono text-[11px] bg-[var(--surface-subtle)]">
              {COLOR_TOKENS.map((token, idx) => (
                <tr key={idx} className="hover:bg-[var(--surface-subtle)] transition-colors">
                  <td className="py-2.5 px-4 text-[#00F2FE] font-medium flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-[2px] border border-black/20"
                      style={{ backgroundColor: token.darkValue }}
                    />
                    <span>{token.variable}</span>
                  </td>
                  <td className="py-2.5 px-4 text-[#CBD5E1]">{token.darkValue}</td>
                  <td className="py-2.5 px-4 text-[var(--foreground-muted)]">{token.lightValue}</td>
                  <td className="py-2.5 px-4 text-[var(--foreground-subtle)] font-sans text-xs">{token.role}</td>
                  <td className="py-2.5 px-4 text-right font-sans">
                    <button
                      onClick={() => handleCopy(token.variable)}
                      className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-[3px] border border-[var(--border-strong)] hover:border-[#00F2FE] hover:text-[#00F2FE] text-[var(--foreground-muted)] transition-colors cursor-pointer"
                      title="Copy var to clipboard"
                    >
                      {copiedVar === token.variable ? (
                        <>
                          <Check className="w-3 h-3 text-[#10B981]" />
                          <span className="text-[#10B981]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

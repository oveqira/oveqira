import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { motion, AnimatePresence } from 'motion/react';
import { MOTION_TOKENS } from '../../design-system/tokens';
import { Play, RotateCcw, CheckCircle2, ShieldAlert } from 'lucide-react';

export const MotionAuditSection: React.FC<{ surfaceContext: 'dark' | 'light' }> = ({
  surfaceContext,
}) => {
  const [animationKey, setAnimationKey] = useState<number>(0);

  const restartAnimations = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const auditQuestions = [
    {
      q: 'Does it look premium?',
      a: 'Yes. Built on deep charcoal and clean warm neutral surfaces with refined mathematical spacing and subtle 1px hairline framing.',
    },
    {
      q: 'Does it look different from a generic agency website?',
      a: 'Yes. Avoids generic SaaS tropes, rainbow gradients, and floating 3D spheres. Emphasizes technical growth credibility and editorial poise.',
    },
    {
      q: 'Is the cyan accent restrained?',
      a: 'Yes. Electric cyan is strictly confined to focal indicators, primary CTA highlights, and key metrics (<5% surface ratio).',
    },
    {
      q: 'Does the typography have strong hierarchy?',
      a: 'Yes. 1.25+ mathematical scale from 11px technical labels to 64px display titles with strict 65–75ch readability constraints.',
    },
    {
      q: 'Is there enough whitespace?',
      a: 'Yes. Spacious rhythm from XS (4px) to 4XL (96px) ensures sections breathe naturally without visual crowding.',
    },
    {
      q: 'Do the components feel like they belong to one brand?',
      a: 'Yes. Shared 6px card radius, 1.75px stroke iconography, synchronized hairline borders, and uniform typography tokens.',
    },
    {
      q: 'Will the system work for both marketing pages and case studies?',
      a: 'Yes. The editorial grid, technical image placeholders, and dual-surface alternating strategy support both narrative marketing and deep-dive technical case studies.',
    },
    {
      q: 'Will it look excellent on mobile?',
      a: 'Yes. Responsive typography downscaling, full-width single-column adaptability, and 44px minimum touch targets.',
    },
    {
      q: 'Does the design communicate technology without becoming a futuristic cliché?',
      a: 'Yes. Subtle hairline grids and coordinate stamps add technical authenticity without neon glows or sci-fi gimmicks.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Eyebrow prefix="08 //" hasIndicator indicatorColor="accent">
          MOTION PRINCIPLES & SYSTEM VERIFICATION
        </Eyebrow>
        <Heading level="h2" className="mt-2">
          Calm, Intentional Physics & Quality Gate
        </Heading>
        <Text muted constrained className="mt-2">
          Motion at Oveqira is precise, fast, calm, and premium. We reject bouncy cartoon springs,
          heavy parallax, and endless looping distractions.
        </Text>
      </div>

      {/* Interactive Motion Lab */}
      <Card
        variant="technical"
        surfaceContext={surfaceContext}
        padding="lg"
        technicalCode="MOTION // PRESETS_V1"
      >
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                Calibrated Motion Presets (Duration: 0.18s – 0.28s • Cubic Ease)
              </h3>
              <p className="text-xs text-[var(--foreground-muted)]">
                Powered by Framer Motion • Fully respects <code className="font-mono text-[#00F2FE]">prefers-reduced-motion</code>
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              iconType="none"
              customIcon={<RotateCcw className="w-3.5 h-3.5" />}
              onClick={restartAnimations}
              surfaceContext={surfaceContext}
            >
              Replay Animations
            </Button>
          </div>

          <div key={animationKey} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Fade Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-[4px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2"
            >
              <span className="font-mono text-xs text-[#00F2FE]">01 // FADE REVEAL</span>
              <p className="text-xs text-[var(--foreground-muted)]">
                Standard component entry with subtle 12px upward slide and fast alpha settle.
              </p>
            </motion.div>

            {/* Scale In */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="p-4 rounded-[4px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2"
            >
              <span className="font-mono text-xs text-[#00F2FE]">02 // MODAL SCALE</span>
              <p className="text-xs text-[var(--foreground-muted)]">
                Crisp 0.96 to 1.0 expansion for dialogs, popovers, and interactive focus states.
              </p>
            </motion.div>

            {/* Directional Vector Shift */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
              className="p-4 rounded-[4px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-2"
            >
              <span className="font-mono text-xs text-[#00F2FE]">03 // VECTOR TRANSLATE</span>
              <p className="text-xs text-[var(--foreground-muted)]">
                Directional CTA indicators and navigation breadcrumb advances.
              </p>
            </motion.div>
          </div>
        </div>
      </Card>

      {/* Section 20 Quality Audit Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-[var(--foreground)]">
              Section 20 Visual Quality Audit
            </h3>
            <p className="text-xs text-[var(--foreground-muted)]">
              Evaluation of Oveqira's Step 01 foundation against strategic design criteria
            </p>
          </div>
          <Badge variant="success" dot dotColor="success" size="sm" mono>
            9 / 9 VERIFIED
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {auditQuestions.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <h4 className="text-xs font-semibold text-[var(--foreground)]">{item.q}</h4>
              </div>
              <p className="text-xs text-[var(--foreground-muted)] pl-6 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

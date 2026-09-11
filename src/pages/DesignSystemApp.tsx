import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { DSHeader } from '../components/design-system/DSHeader';
import { BrandOverviewSection } from '../components/design-system/BrandOverviewSection';
import { ColorSystemSection } from '../components/design-system/ColorSystemSection';
import { TypographySection } from '../components/design-system/TypographySection';
import { ButtonSection } from '../components/design-system/ButtonSection';
import { CardSection } from '../components/design-system/CardSection';
import { GridSpacingSection } from '../components/design-system/GridSpacingSection';
import { TechnicalSection } from '../components/design-system/TechnicalSection';
import { FormControlsSection } from '../components/design-system/FormControlsSection';
import { MotionAuditSection } from '../components/design-system/MotionAuditSection';
import { Divider } from '../components/ui/Divider';
import { Badge } from '../components/ui/Badge';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function DesignSystemApp() {
  const [surfaceContext, setSurfaceContext] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState<string>('overview');

  const toggleSurface = () => {
    setSurfaceContext((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-surface', surfaceContext);
    if (surfaceContext === 'light') {
      document.body.classList.add('surface-light');
      document.body.classList.remove('');
      document.body.style.backgroundColor = '#F4F4F5';
      document.body.style.color = '#09090B';
    } else {
      document.body.classList.add('');
      document.body.classList.remove('surface-light');
      document.body.style.backgroundColor = '#0A0A0A';
      document.body.style.color = '#F4F4F5';
    }
  }, [surfaceContext]);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        surfaceContext === 'light' ? 'bg-[#F4F4F5] text-[#09090B]' : 'bg-[#0A0A0A] text-[#F4F4F5]'
      }`}
    >
      {/* Design System Header */}
      <DSHeader
        currentSurface={surfaceContext}
        onToggleSurface={toggleSurface}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main Workspace Container */}
      <main className="py-8 sm:py-12">
        <Container size="lg">
          {/* Active Tab Views */}
          {activeTab === 'overview' && (
            <div className="space-y-16">
              <BrandOverviewSection
                surfaceContext={surfaceContext}
                onExploreSystem={() => setActiveTab('colors')}
              />
              <Divider label="QUICK ACCESS SPECIMENS" align="left" hasNode />
              <ButtonSection surfaceContext={surfaceContext} />
              <Divider label="SURFACE ARCHITECTURE" align="left" hasNode />
              <CardSection surfaceContext={surfaceContext} />
            </div>
          )}

          {activeTab === 'colors' && (
            <ColorSystemSection surfaceContext={surfaceContext} />
          )}

          {activeTab === 'typography' && (
            <TypographySection surfaceContext={surfaceContext} />
          )}

          {activeTab === 'components' && (
            <div className="space-y-16">
              <ButtonSection surfaceContext={surfaceContext} />
              <Divider label="SURFACE CONTAINMENT" align="left" hasNode />
              <CardSection surfaceContext={surfaceContext} />
              <Divider label="INTERACTIVE FORMS & SIGNALS" align="left" hasNode />
              <FormControlsSection surfaceContext={surfaceContext} />
            </div>
          )}

          {activeTab === 'grid' && (
            <GridSpacingSection surfaceContext={surfaceContext} />
          )}

          {activeTab === 'technical' && (
            <TechnicalSection surfaceContext={surfaceContext} />
          )}

          {activeTab === 'motion' && (
            <MotionAuditSection surfaceContext={surfaceContext} />
          )}
        </Container>
      </main>

      {/* Design System Step 1 Footer */}
      <footer className="border-t border-[#27272A] py-10 bg-[#0A0A0A] text-[#A1A1AA]">
        <Container size="lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#00F5FF]" />
              <span className="font-mono text-xs text-[#F4F4F5] font-semibold tracking-wider uppercase">
                OVEQIRA DESIGN SYSTEM // STEP 01 COMPLETE
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#71717A]">
              <span>REUSABLE TOKENS CONFIGURED</span>
              <span>•</span>
              <span className="text-[#00F5FF]">READY FOR STEP 02 ARCHITECTURE</span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

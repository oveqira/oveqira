import React from 'react';
import { Badge } from '../ui/Badge';
import { OVEQIRA_BRAND } from '../../design-system/tokens';
import { Sun, Moon, ShieldCheck, Layers } from 'lucide-react';

interface DSHeaderProps {
  currentSurface: 'dark' | 'light';
  onToggleSurface: () => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const DSHeader: React.FC<DSHeaderProps> = ({
  currentSurface,
  onToggleSurface,
  activeTab,
  onSelectTab,
}) => {
  const tabs = [
    { id: 'overview', label: 'Brand & Ethos' },
    { id: 'colors', label: 'Color Tokens' },
    { id: 'typography', label: 'Typography' },
    { id: 'components', label: 'Components' },
    { id: 'grid', label: 'Grid & Spacing' },
    { id: 'technical', label: 'Technical Visuals' },
    { id: 'motion', label: 'Motion & Audit' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--surface)]/90 border-b border-[var(--border)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Tag */}
          <div className="flex items-center gap-3.5">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-[4px] bg-[var(--surface-hover)] border border-[var(--border-strong)] group">
              <span className="font-mono text-sm font-bold text-[var(--foreground)] tracking-tighter">O</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#00F2FE] shadow-[0_0_6px_#00F2FE]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-[-0.03em] text-base sm:text-lg text-[var(--foreground)]">
                  {OVEQIRA_BRAND.name}
                </span>
                <span className="hidden sm:inline-block text-[var(--foreground-subtle)]">/</span>
                <span className="hidden sm:inline-block text-xs font-mono text-[var(--foreground-muted)] tracking-wider uppercase">
                  Design System
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-[var(--foreground-subtle)] font-mono tracking-tight hidden md:block">
                STEP 01 OF 08 • FOUNDATIONAL SPECIFICATION
              </p>
            </div>
          </div>

          {/* Quick Info & Surface Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Badge variant="accent" dot dotColor="accent" mono size="sm" className="hidden sm:inline-flex">
              SYS_ACTIVE // V1.0
            </Badge>

            <button
              id="surface-toggle-btn"
              onClick={onToggleSurface}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-[4px] border border-[var(--border-strong)] bg-[var(--surface-subtle)] text-[var(--foreground)] hover:border-[#00F2FE] hover:text-[#00F2FE] transition-colors focus-ring cursor-pointer"
              title="Toggle surface preview mode"
            >
              {currentSurface === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span className="hidden md:inline">Surface: Dark</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span className="hidden md:inline">Surface: Light</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-1 overflow-x-auto py-2 -mb-[1px] scrollbar-none border-t border-[var(--border)]/60">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => onSelectTab(tab.id)}
                className={`relative px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-[3px] transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30'
                    : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-subtle)]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

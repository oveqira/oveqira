import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { Activity, LayoutTemplate, BarChart3, Terminal } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center select-none z-10">
      {/* Background Frame: Architectural Base */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-4 lg:inset-8 bg-[var(--surface)] border border-[var(--border)] rounded-[8px] overflow-hidden shadow-2xl"
      >
        {/* Subtle technical grid texture */}
        <div className="absolute inset-0 bg-tech-grid opacity-40" />

        {/* Frame Header / Browser Mockup */}
        <div className="h-10 border-b border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-sm flex items-center justify-between px-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
          </div>
          <div className="font-mono text-[9px] text-[var(--foreground-subtle)] tracking-widest uppercase">
            SYS.WORKSPACE // 01
          </div>
        </div>

        {/* Inner Grid Lines (Architectural) */}
        <div className="absolute top-10 bottom-0 left-1/3 w-[1px] bg-[var(--border)]/50" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[var(--border)]/50" />
      </motion.div>

      {/* Floating Layer 1: Code / Terminal Interface */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.2 },
          x: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
        }}
        className="absolute top-[25%] left-[5%] lg:left-[0%] w-[55%] max-w-[280px] bg-[var(--background)] border border-[var(--border)] rounded-[6px] shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--border)] bg-[var(--surface)]">
          <Terminal className="w-3 h-3 text-[var(--foreground-muted)]" />
          <span className="font-mono text-[9px] text-[var(--foreground-muted)] uppercase tracking-wider">
            Build_Process.sh
          </span>
        </div>
        <div className="p-4 space-y-2">
          <div className="h-2 w-3/4 bg-[var(--surface-hover)] rounded-full" />
          <div className="h-2 w-1/2 bg-[var(--surface-hover)] rounded-full" />
          <div className="h-2 w-5/6 bg-[var(--accent)]/20 rounded-full" />
          <div className="h-2 w-2/3 bg-[var(--surface-hover)] rounded-full" />
        </div>
      </motion.div>

      {/* Floating Layer 2: Metric / Growth Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.4 },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
        }}
        className="absolute bottom-[20%] right-[5%] lg:right-[0%] w-[50%] max-w-[240px] bg-[var(--background)] border border-[var(--border-strong)] rounded-[6px] shadow-2xl p-4 flex flex-col gap-4 z-20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[var(--accent)]" />
            <span className="font-mono text-[10px] text-[var(--foreground-muted)] tracking-wider">
              CONVERSION
            </span>
          </div>
          <Badge variant="accent" dot size="sm" mono>
            +142%
          </Badge>
        </div>
        <div className="flex items-end gap-1.5 h-12 pt-2 border-b border-[var(--border)]">
          {[40, 25, 60, 45, 80, 65, 100].map((height, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-sm ${
                i === 6 ? 'bg-[var(--accent)]' : 'bg-[var(--surface-hover)]'
              }`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Layer 3: UI Wireframe Component */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.6 },
          x: { duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
          y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
        }}
        className="absolute top-[15%] right-[15%] lg:right-[10%] w-[45%] max-w-[200px] bg-[var(--background)] border border-[var(--border)] rounded-[6px] shadow-2xl p-3 z-10"
      >
        <div className="flex items-center gap-2 mb-3">
          <LayoutTemplate className="w-3 h-3 text-[var(--foreground-muted)]" />
          <span className="font-mono text-[9px] text-[var(--foreground-muted)] uppercase tracking-wider">
            Layout_Grid
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square bg-[var(--surface)] rounded-[3px] border border-[var(--border)]" />
          <div className="aspect-square bg-[var(--surface)] rounded-[3px] border border-[var(--border)]" />
          <div className="col-span-2 h-8 bg-[var(--surface-hover)] rounded-[3px]" />
        </div>
      </motion.div>

      {/* Corner Technical Marks */}
      <div className="absolute top-4 left-4 lg:top-8 lg:left-8 w-3 h-3 border-t border-l border-[var(--accent)] z-20" />
      <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 w-3 h-3 border-b border-r border-[var(--accent)] z-20" />
      
      {/* Coordinate Labels */}
      <div className="absolute top-6 right-6 lg:top-10 lg:right-10 font-mono text-[8px] text-[var(--foreground-subtle)] uppercase tracking-widest z-20">
        X: 144.02 / Y: 92.10
      </div>
      <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 font-mono text-[8px] text-[var(--accent)] uppercase tracking-widest z-20 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" />
        SYS.READY
      </div>
    </div>
  );
};

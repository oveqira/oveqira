import React from 'react';

export interface TechnicalFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  statusText?: string;
  badge?: string;
  showDots?: boolean;
}

export const TechnicalFrame: React.FC<TechnicalFrameProps> = ({
  children,
  title = 'SYS_PREVIEW // V1.0',
  statusText = 'STATUS: SYNCHRONIZED',
  badge = '24MS',
  showDots = true,
  className = '',
  id,
  ...props
}) => {
  return (
    <div
      id={id}
      className={`w-full rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] ${className}`}
      {...props}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface-subtle)] text-[11px] font-mono text-[var(--foreground-subtle)]">
        <div className="flex items-center gap-3">
          {showDots && (
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]/70" />
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]/70" />
              <span className="w-2 h-2 rounded-full bg-[#10B981]/70" />
            </div>
          )}
          <span className="text-[var(--foreground-muted)] font-medium tracking-wider">{title}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] tracking-wider text-[#475569]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-pulse" />
            {statusText}
          </span>
          <span className="px-1.5 py-0.5 rounded-[2px] bg-[var(--surface-hover)] text-[#00F2FE] text-[10px] border border-[var(--border-strong)]">
            {badge}
          </span>
        </div>
      </div>

      {/* Frame Content */}
      <div className="p-4 sm:p-6 bg-[var(--surface)] relative">{children}</div>
    </div>
  );
};

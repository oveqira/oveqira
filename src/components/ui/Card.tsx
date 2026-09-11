import React from 'react';
import { CardVariant } from '../../types/design-system';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  surfaceContext?: 'dark' | 'light';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  technicalCode?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  surfaceContext = 'dark',
  padding = 'md',
  interactive = false,
  technicalCode,
  className = '',
  id,
  ...props
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-9',
    xl: 'p-10 sm:p-12',
  };

  const isDark = surfaceContext === 'dark';

  const baseSurfaceClasses = {
    default: isDark
      ? 'bg-[var(--surface-subtle)] border border-[var(--border)] text-[var(--foreground)]'
      : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)]',
    subtle: isDark
      ? 'bg-[var(--surface-hover)] border border-[var(--border)]/70 text-[var(--foreground)]'
      : 'bg-[var(--surface-subtle)] border border-[var(--border)]/80 text-[var(--foreground)]',
    elevated: isDark
      ? 'bg-[var(--surface-subtle)] border border-[var(--border-strong)] shadow-[0_4px_24px_rgba(0,0,0,0.4)] text-[var(--foreground)]'
      : 'bg-[var(--surface)] border border-[var(--border-strong)] shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-[var(--foreground)]',
    outline: isDark
      ? 'bg-transparent border border-[var(--border)] text-[var(--foreground)]'
      : 'bg-transparent border border-[var(--border)] text-[var(--foreground)]',
    technical: isDark
      ? 'bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--foreground)] relative'
      : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] relative',
  };

  const interactiveClasses = interactive
    ? isDark
      ? 'transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)] cursor-pointer group'
      : 'transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)] cursor-pointer group'
    : '';

  return (
    <div
      id={id}
      className={`rounded-[6px] relative ${baseSurfaceClasses[variant]} ${paddingClasses[padding]} ${interactiveClasses} ${className}`}
      {...props}
    >
      {/* Subtle technical corner ticks for technical variant */}
      {variant === 'technical' && (
        <>
          <span
            className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--accent)]"
            aria-hidden="true"
          />
          <span
            className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--accent)]"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--border)]"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--border)]"
            aria-hidden="true"
          />
          {technicalCode && (
            <div className="absolute top-2.5 right-3 font-mono text-[9px] tracking-widest text-[var(--foreground-subtle)] uppercase">
              {technicalCode}
            </div>
          )}
        </>
      )}
      {children}
    </div>
  );
};

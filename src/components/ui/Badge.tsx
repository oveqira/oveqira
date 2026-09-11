import React from 'react';
import { BadgeVariant } from '../../types/design-system';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  dot?: boolean;
  dotColor?: 'accent' | 'success' | 'neutral';
  mono?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  dotColor = 'accent',
  mono = false,
  className = '',
  id,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-2',
  };

  const variantClasses = {
    default: 'bg-[var(--surface-hover)] text-[var(--foreground)] border border-[var(--border-strong)]',
    accent: 'bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/25',
    neutral: 'bg-[var(--surface-hover)] text-[var(--foreground-muted)] border border-[var(--border)]',
    success: 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25',
    outline: 'bg-transparent text-[var(--foreground-muted)] border border-[var(--border)]',
  };

  const dotColorClasses = {
    accent: 'bg-[#00F2FE]',
    success: 'bg-[#10B981]',
    neutral: 'bg-[#94A3B8]',
  };

  return (
    <span
      id={id}
      className={`inline-flex items-center justify-center font-medium rounded-[4px] whitespace-nowrap select-none transition-colors ${
        mono ? 'font-mono uppercase tracking-wider text-[10px]' : ''
      } ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColorClasses[dotColor]} animate-pulse`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};

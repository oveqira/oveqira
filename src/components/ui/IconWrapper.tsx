import React from 'react';

export interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'accent' | 'subtle' | 'ghost';
  surfaceContext?: 'dark' | 'light';
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  size = 'md',
  variant = 'default',
  surfaceContext = 'dark',
  className = '',
  id,
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs rounded-[3px]',
    md: 'w-9 h-9 text-sm rounded-[4px]',
    lg: 'w-11 h-11 text-base rounded-[6px]',
    xl: 'w-14 h-14 text-lg rounded-[8px]',
  };

  const isDark = surfaceContext === 'dark';

  const variantClasses = {
    default: isDark
      ? 'bg-[var(--surface-subtle)] text-[var(--foreground)] border border-[var(--border-strong)]'
      : 'bg-[var(--surface-hover)] text-[var(--foreground)] border border-[var(--border-strong)]',
    accent: isDark
      ? 'bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/30'
      : 'bg-[#008B9A]/10 text-[#008B9A] border border-[#008B9A]/30',
    subtle: isDark
      ? 'bg-[var(--surface-hover)] text-[var(--foreground-muted)] border border-[var(--border)]'
      : 'bg-[var(--surface-subtle)] text-[var(--foreground-muted)] border border-[var(--border)]',
    ghost: 'bg-transparent text-current border-transparent',
  };

  return (
    <div
      id={id}
      className={`inline-flex items-center justify-center shrink-0 transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

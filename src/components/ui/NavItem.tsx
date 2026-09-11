import React from 'react';

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  code?: string;
  surfaceContext?: 'dark' | 'light';
}

export const NavItem: React.FC<NavItemProps> = ({
  children,
  active = false,
  code,
  surfaceContext = 'dark',
  className = '',
  id,
  ...props
}) => {
  const isDark = surfaceContext === 'dark';

  const baseColor = isDark
    ? active
      ? 'text-[#F3F4F6]'
      : 'text-[#94A3B8] hover:text-[#F3F4F6]'
    : active
    ? 'text-[#0D1117]'
    : 'text-[#4B5563] hover:text-[#0D1117]';

  return (
    <a
      id={id}
      className={`relative inline-flex items-center gap-1.5 py-1.5 px-1 text-sm font-medium transition-colors select-none group focus-ring rounded-[2px] ${baseColor} ${className}`}
      {...props}
    >
      {code && (
        <span className="font-mono text-[10px] text-[var(--foreground-subtle)] group-hover:text-[var(--accent)] transition-colors">
          {code}
        </span>
      )}
      <span>{children}</span>
      {active && (
        <span
          className="absolute bottom-0 left-1 right-1 h-[2px] bg-[var(--accent)] rounded-full"
          aria-hidden="true"
        />
      )}
    </a>
  );
};

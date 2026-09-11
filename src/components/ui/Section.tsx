import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  surface?: 'dark' | 'light' | 'secondary' | 'subtle';
  spacing?: 'compact' | 'default' | 'spacious' | 'hero';
  borderTop?: boolean;
  borderBottom?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  surface = 'dark',
  spacing = 'default',
  borderTop = false,
  borderBottom = false,
  className = '',
  id,
  ...props
}) => {
  const surfaceClasses = {
    dark: 'bg-[var(--surface)] text-[var(--foreground)] ',
    light: 'bg-[var(--surface)] text-[var(--foreground)] ',
    secondary: 'bg-[var(--surface-hover)] text-[var(--foreground)] ',
    subtle: 'bg-[var(--surface-subtle)] text-[var(--foreground)] ',
  };

  const spacingClasses = {
    compact: 'py-12 sm:py-16',
    default: 'py-16 sm:py-24',
    spacious: 'py-24 sm:py-32 lg:py-36',
    hero: 'pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32',
  };

  const borderClasses = [
    borderTop ? 'border-t border-[var(--border)]' : '',
    borderBottom ? 'border-b border-[var(--border)]' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      id={id}
      data-surface={surface === 'light' || surface === 'subtle' ? 'light' : 'dark'}
      className={`relative w-full transition-colors duration-200 ${surfaceClasses[surface]} ${spacingClasses[spacing]} ${borderClasses} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

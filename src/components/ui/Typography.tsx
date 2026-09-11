import React from 'react';
import { TypographyVariant } from '../../types/design-system';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 'display' | 'h1' | 'h2' | 'h3' | 'h4';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 'h1',
  as,
  className = '',
  id,
  ...props
}) => {
  const Component = as || (level === 'display' ? 'h1' : level);

  const levelClasses = {
    display:
      'text-[40px] sm:text-[52px] md:text-[64px] lg:text-[84px] font-semibold leading-[0.95] md:leading-[0.88] tracking-tighter text-[var(--foreground)]',
    h1:
      'text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold leading-[1.14] tracking-[-0.03em] text-[var(--foreground)]',
    h2:
      'text-[24px] sm:text-[28px] md:text-[30px] lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.025em] text-[var(--foreground)]',
    h3:
      'text-[20px] sm:text-[22px] lg:text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--foreground)]',
    h4:
      'text-[16px] sm:text-[17px] lg:text-[18px] font-semibold leading-[1.4] tracking-[-0.01em] text-[var(--foreground)]',
  };

  return (
    <Component id={id} className={`${levelClasses[level]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'large' | 'body' | 'small' | 'caption';
  muted?: boolean;
  subtle?: boolean;
  constrained?: boolean; // 65-75ch readability standard
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  muted = false,
  subtle = false,
  constrained = false,
  className = '',
  id,
  ...props
}) => {
  const variantClasses = {
    large: 'text-base sm:text-lg leading-[1.6] tracking-[-0.01em]',
    body: 'text-sm sm:text-base leading-[1.65] tracking-normal',
    small: 'text-xs sm:text-sm leading-[1.55] tracking-normal',
    caption: 'text-[11px] sm:text-xs leading-[1.45] tracking-[0.01em]',
  };

  let colorClass = 'text-[var(--foreground)]';
  if (muted) colorClass = 'text-[var(--foreground-muted)]';
  if (subtle) colorClass = 'text-[var(--foreground-subtle)]';

  const constraintClass = constrained ? 'max-w-[68ch]' : '';

  return (
    <p
      id={id}
      className={`${variantClasses[variant]} ${colorClass} ${constraintClass} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefix?: string;
  hasIndicator?: boolean;
  indicatorColor?: 'accent' | 'neutral' | 'success';
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  prefix,
  hasIndicator = false,
  indicatorColor = 'accent',
  className = '',
  id,
  ...props
}) => {
  const indicatorColorMap = {
    accent: 'bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]',
    neutral: 'bg-[#94A3B8]',
    success: 'bg-[#10B981] shadow-[0_0_8px_#10B981]',
  };

  return (
    <div className="inline-flex items-center gap-2">
      {hasIndicator && (
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full ${indicatorColorMap[indicatorColor]}`}
          aria-hidden="true"
        />
      )}
      <span
        id={id}
        className={`font-mono text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold text-[var(--foreground-subtle)] select-none ${className}`}
        {...props}
      >
        {prefix && <span className="text-[var(--accent)] mr-1.5">{prefix}</span>}
        {children}
      </span>
    </div>
  );
};

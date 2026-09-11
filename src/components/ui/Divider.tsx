import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  align?: 'left' | 'center' | 'right';
  hasNode?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  label,
  align = 'left',
  hasNode = false,
  className = '',
  id,
  ...props
}) => {
  if (!label) {
    return (
      <div
        id={id}
        className={`w-full h-[1px] bg-[var(--border)] relative my-6 ${className}`}
        {...props}
      >
        {hasNode && (
          <span
            className="absolute -top-[3px] left-8 w-[7px] h-[7px] bg-[var(--accent)] rounded-[1px]"
            aria-hidden="true"
          />
        )}
      </div>
    );
  }

  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div
      id={id}
      className={`w-full flex items-center gap-4 my-8 ${alignmentClasses[align]} ${className}`}
      {...props}
    >
      <div className="h-[1px] bg-[var(--border)] flex-grow" />
      <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-[var(--foreground-subtle)] px-2 whitespace-nowrap select-none bg-[var(--background)]">
        {hasNode && (
          <span className="inline-block w-1.5 h-1.5 bg-[var(--accent)] rounded-full mr-2 align-middle" />
        )}
        {label}
      </span>
      <div className="h-[1px] bg-[var(--border)] flex-grow" />
    </div>
  );
};

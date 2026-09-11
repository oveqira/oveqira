import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  surfaceContext?: 'dark' | 'light';
  iconLeft?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      surfaceContext = 'dark',
      iconLeft,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const isDark = surfaceContext === 'dark';

    const surfaceClasses = isDark
      ? 'bg-[var(--surface-hover)] text-[var(--foreground)] border-[var(--border-strong)] placeholder-[#64748B] focus:border-[#00F2FE]'
      : 'bg-[var(--surface)] text-[var(--foreground)] border-[var(--border-strong)] placeholder-[#9CA3AF] focus:border-[#008B9A]';

    const errorClasses = error
      ? '!border-[#EF4444] focus:!ring-[#EF4444]/30'
      : 'focus:ring-2 focus:ring-[var(--accent)]/20';

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-[var(--foreground-muted)] tracking-wide select-none"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {iconLeft && (
            <div className="absolute left-3 text-[var(--foreground-subtle)] pointer-events-none">
              {iconLeft}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={`w-full text-sm rounded-[4px] border px-3.5 py-2.5 transition-colors duration-150 outline-none ${
              iconLeft ? 'pl-9' : ''
            } ${surfaceClasses} ${errorClasses} ${className}`}
            {...props}
          />
        </div>
        {error && <span className="text-[11px] text-[#EF4444]">{error}</span>}
        {!error && helperText && (
          <span className="text-[11px] text-[var(--foreground-subtle)]">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

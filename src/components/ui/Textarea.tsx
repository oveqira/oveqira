import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  surfaceContext?: 'dark' | 'light';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      surfaceContext = 'dark',
      className = '',
      id,
      rows = 4,
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
        <textarea
          id={inputId}
          ref={ref}
          rows={rows}
          className={`w-full text-sm rounded-[4px] border px-3.5 py-2.5 transition-colors duration-150 outline-none resize-y ${surfaceClasses} ${errorClasses} ${className}`}
          {...props}
        />
        {error && <span className="text-[11px] text-[#EF4444]">{error}</span>}
        {!error && helperText && (
          <span className="text-[11px] text-[var(--foreground-subtle)]">{helperText}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

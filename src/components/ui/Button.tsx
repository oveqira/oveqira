import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Loader2 } from 'lucide-react';
import { ButtonVariant, ButtonSize } from '../../types/design-system';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconType?: 'arrow-right' | 'arrow-up-right' | 'none' | 'custom';
  customIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  surfaceContext?: 'dark' | 'light';
  as?: 'button' | 'span' | 'div';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  iconType = 'arrow-right',
  customIcon,
  isLoading = false,
  fullWidth = false,
  surfaceContext = 'dark',
  className = '',
  disabled,
  id,
  as = 'button',
  ...props
}) => {
  // Sizing definitions: exactly 2x horizontal padding vs vertical padding
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-[7px] gap-2 rounded-[4px]',
    md: 'text-sm px-5 py-2.5 gap-2.5 rounded-[4px]',
    lg: 'text-base px-6 py-3 gap-3 rounded-[6px]',
  };

  // Base styling: premium sans typography, fast transition, accessible focus
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus-ring whitespace-nowrap group min-h-[44px]';

  // Variant classes tailored for dark and light surfaces
  const variantClasses = {
    primary: 'bg-[var(--button-primary)] text-white hover:bg-[var(--button-primary-hover)] active:scale-[0.99] border border-transparent shadow-sm hover:shadow-md',
    secondary: 'bg-[var(--button-secondary)] text-[var(--foreground)] border border-[var(--border-strong)] hover:border-[var(--foreground)] hover:bg-[var(--surface-hover)] active:scale-[0.99]',
    tertiary: 'bg-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)] p-0 border-b border-transparent hover:border-[var(--foreground)] rounded-none',
    ghost: 'bg-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] rounded-[4px]'
  };

  const isTertiary = variant === 'tertiary';
  const computedSizeClasses = isTertiary ? 'text-sm py-1' : sizeClasses[size];

  const renderIcon = () => {
    if (isLoading) {
      return <Loader2 className="w-4 h-4 animate-spin text-current" />;
    }
    if (customIcon) {
      return customIcon;
    }
    if (iconType === 'arrow-right') {
      return (
        <motion.span
          className="inline-flex transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <ArrowRight className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} strokeWidth={2} />
        </motion.span>
      );
    }
    if (iconType === 'arrow-up-right') {
      return (
        <motion.span
          className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <ArrowUpRight className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} strokeWidth={2} />
        </motion.span>
      );
    }
    return null;
  };

  const Component = as;

  return (
    <Component
      id={id}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${computedSizeClasses} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...(props as any)}
    >
      <span>{children}</span>
      {renderIcon()}
    </Component>
  );
};

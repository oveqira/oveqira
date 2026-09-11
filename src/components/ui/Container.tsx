import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  size = 'lg',
  className = '',
  id,
  ...props
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl', // 1280px
    xl: 'max-w-[1440px]',
  };

  return (
    <div
      id={id}
      className={`w-full mx-auto px-5 sm:px-6 md:px-8 ${
        fluid ? 'max-w-none' : sizeClasses[size]
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

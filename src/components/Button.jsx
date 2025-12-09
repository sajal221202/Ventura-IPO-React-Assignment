import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const baseClasses =
  'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

const variantClasses = {
  primary:
    'bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand shadow-soft',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-300',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-200',
  outline:
    'border border-slate-300 text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-300'
};

const sizeClasses = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base'
};

export const Button = React.forwardRef(function Button(
  { variant = 'primary', size = 'md', className, children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      className={twMerge(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        clsx('tracking-tight'),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});



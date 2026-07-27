'use client';

import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, error, type = 'text', ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--muted)]">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'w-full bg-[var(--neutral-800)] border border-[rgba(255,255,255,0.03)] rounded-lg px-4 py-2.5 text-[var(--neutral-50)] placeholder:[color:var(--muted)] transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-[var(--accent-600)] focus:ring-offset-2 focus:ring-offset-[var(--surface-200)]',
            'disabled:opacity-60 disabled:cursor-not-allowed',
            icon && 'pl-10',
            error && 'border-[var(--danger)] focus:ring-[var(--danger)]',
            className
          )}
          ref={ref}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[var(--danger)]" role="alert">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };

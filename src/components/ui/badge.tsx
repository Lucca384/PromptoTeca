import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'violet';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  const variants: Record<string, string> = {
    default: 'bg-[rgba(255,255,255,0.02)] text-[var(--neutral-400)] border border-[rgba(255,255,255,0.03)]',
    success: 'bg-[rgba(16,185,129,0.08)] text-[var(--success)] border border-[rgba(16,185,129,0.12)]',
    warning: 'bg-[rgba(250,204,21,0.06)] text-[var(--muted)]',
    danger: 'bg-[rgba(239,68,68,0.06)] text-[var(--danger)] border border-[rgba(239,68,68,0.08)]',
    info: 'bg-[rgba(14,165,233,0.06)] text-[var(--muted)]',
    violet: 'bg-[rgba(139,92,246,0.06)] text-[var(--accent-500)] border border-[rgba(139,92,246,0.08)]',
  };

  const sizes: Record<string, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return (
    <span className={cn('inline-flex items-center font-medium rounded-full', variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}

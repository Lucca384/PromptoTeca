'use client';

import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';

export interface ToastProps {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: (id: string) => void;
}

export function Toast({ id, message, type = 'success', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 220);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const icons: Record<string, ReactNode> = {
    success: <CheckCircle className="w-5 h-5 text-[var(--success)]" />,
    error: <XCircle className="w-5 h-5 text-[var(--danger)]" />,
    warning: <AlertCircle className="w-5 h-5 text-[var(--muted)]" />,
    info: <Info className="w-5 h-5 text-[var(--muted)]" />,
  };

  const styles: Record<string, string> = {
    success: 'border-[rgba(16,185,129,0.12)] bg-[rgba(16,185,129,0.06)]',
    error: 'border-[rgba(239,68,68,0.08)] bg-[rgba(239,68,68,0.06)]',
    warning: 'border-[rgba(250,204,21,0.06)] bg-[rgba(250,204,21,0.04)]',
    info: 'border-[rgba(14,165,233,0.06)] bg-[rgba(14,165,233,0.04)]',
  };

  return (
    <div
      role="status"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-md border backdrop-blur-sm shadow-soft-sm transition-all duration-[var(--motion)]',
        styles[type],
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-2'
      )}
    >
      {icons[type]}
      <span className="text-sm text-[var(--neutral-50)] flex-1">{message}</span>
      <button
        onClick={() => onClose(id)}
        className="p-1 rounded hover:bg-[rgba(255,255,255,0.03)] text-[var(--neutral-400)] hover:text-[var(--neutral-50)] transition-colors"
        aria-label="Fechar alerta"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export function ToastContainer({ toasts, onClose }: { toasts: ToastProps[]; onClose: (id: string) => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      <div className="pointer-events-auto">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={onClose} />
        ))}
      </div>
    </div>
  );
}

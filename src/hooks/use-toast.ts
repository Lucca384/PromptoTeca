'use client';

import { useState, useCallback } from 'react';
import { ToastProps } from '@/components/ui/toast';

type ToastType = 'success' | 'error' | 'warning' | 'info';

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (message: string, type: ToastType = 'success', duration = 3000) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastProps = {
        id,
        message,
        type,
        duration,
        onClose: () => removeToast(id),
      };
      setToasts((prev) => [...prev, newToast]);
      return id;
    },
    [removeToast]
  );

  const success = useCallback((message: string) => addToast(message, 'success'), [addToast]);
  const error = useCallback((message: string) => addToast(message, 'error'), [addToast]);
  const warning = useCallback((message: string) => addToast(message, 'warning'), [addToast]);
  const info = useCallback((message: string) => addToast(message, 'info'), [addToast]);

  return { toasts, addToast, removeToast, success, error, warning, info };
}

'use client';

import { useState, useCallback } from 'react';

export function useCopy() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = useCallback(async (text: string, id?: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      if (id) {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      }
      return true;
    } catch {
      // Fallback for older browsers
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (id) {
          setCopiedId(id);
          setTimeout(() => setCopiedId(null), 2000);
        }
        return true;
      } catch {
        return false;
      }
    }
  }, []);

  const isCopied = useCallback((id: string) => copiedId === id, [copiedId]);

  return { copy, isCopied, copiedId };
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEYS } from '@/lib/constants';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    if (typeof window === 'undefined') return;
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    setIsAuthenticated(!!token);
    setIsLoading(false);
  };

  const login = async (password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
        setIsAuthenticated(true);
        return { success: true };
      }

      return { success: false, error: data.error || 'Senha incorreta' };
    } catch {
      return { success: false, error: 'Erro de conexão. Tente novamente.' };
    }
  };

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, isLoading, login, logout, checkAuth };
}

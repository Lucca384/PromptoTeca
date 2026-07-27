'use client';

import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEYS } from '@/lib/constants';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  const saveFavorites = useCallback((newFavorites: string[]) => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }, []);

  const toggleFavorite = useCallback((promptId: string) => {
    const newFavorites = favorites.includes(promptId)
      ? favorites.filter(id => id !== promptId)
      : [...favorites, promptId];
    saveFavorites(newFavorites);
    return !favorites.includes(promptId);
  }, [favorites, saveFavorites]);

  const isFavorite = useCallback((promptId: string) => {
    return favorites.includes(promptId);
  }, [favorites]);

  const clearFavorites = useCallback(() => {
    saveFavorites([]);
  }, [saveFavorites]);

  return { favorites, toggleFavorite, isFavorite, clearFavorites };
}

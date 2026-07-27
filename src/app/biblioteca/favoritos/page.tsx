'use client';

import { useEffect, useState } from 'react';
import { PromptGrid } from '@/components/prompts/prompt-grid';
import { Prompt } from '@/types';
import { useFavorites } from '@/hooks/use-favorites';
import { Heart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';

export default function FavoritosPage() {
  const { favorites, clearFavorites } = useFavorites();
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showClearModal, setShowClearModal] = useState(false);

  useEffect(() => {
    const fetchFavoritePrompts = async () => {
      if (favorites.length === 0) {
        setPrompts([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch('/api/prompts');
        const data = await res.json();
        const allPrompts: Prompt[] = data.prompts || [];
        const favoritePrompts = allPrompts.filter(p => favorites.includes(p.id));
        setPrompts(favoritePrompts);
      } catch (error) {
        console.error('Error fetching favorite prompts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavoritePrompts();
  }, [favorites]);

  const handleClearAll = () => {
    clearFavorites();
    setShowClearModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[rgba(239,68,68,0.16)]">
            <Heart className="w-6 h-6 text-[var(--danger)]" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-[var(--neutral-50)]">Seus Favoritos</h1>
            <p className="text-sm text-[var(--neutral-400)]">
              {prompts.length} prompt{prompts.length !== 1 ? 's' : ''} salvo{prompts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {prompts.length > 0 && (
          <Button
            variant="ghost"
            onClick={() => setShowClearModal(true)}
            className="text-[var(--danger)] hover:text-[var(--neutral-50)] hover:bg-[rgba(239,68,68,0.12)]"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Remover todos
          </Button>
        )}
      </div>

      {/* Prompts Grid */}
      <PromptGrid 
        prompts={prompts} 
        isLoading={isLoading}
        emptyMessage="Você ainda não tem favoritos. Clique no ❤️ em qualquer prompt para salvá-lo aqui."
      />

      {/* Clear Confirmation Modal */}
      <Modal
        isOpen={showClearModal}
        onClose={() => setShowClearModal(false)}
        className="max-w-md"
      >
        <div className="p-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-[rgba(239,68,68,0.16)] mb-4">
            <Trash2 className="w-6 h-6 text-[var(--danger)]" />
          </div>
          <h3 className="text-xl font-semibold text-[var(--neutral-50)] text-center mb-2">
            Remover todos os favoritos?
          </h3>
          <p className="text-sm text-[var(--neutral-400)] text-center mb-6">
            Esta ação não pode ser desfeita. Todos os {prompts.length} prompts serão removidos dos seus favoritos.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => setShowClearModal(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="danger"
              className="flex-1"
              onClick={handleClearAll}
            >
              Remover todos
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

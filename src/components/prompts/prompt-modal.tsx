'use client';

import { Prompt } from '@/types';
import { Modal } from '@/components/ui/modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Copy, Check, Sparkles, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useFavorites } from '@/hooks/use-favorites';
import { useCopy } from '@/hooks/use-copy';
import { useToast } from '@/hooks/use-toast';
import { formatNumber } from '@/lib/utils';
import { useState } from 'react';
import { getParentCategory } from '@/data/categories';

interface PromptModalProps {
  prompt: Prompt | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PromptModal({ prompt, isOpen, onClose }: PromptModalProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { copy, isCopied } = useCopy();
  const { success } = useToast();
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);

  if (!prompt) return null;

  const favorite = isFavorite(prompt.id);
  const copied = isCopied(prompt.id);
  const parentCategory = prompt.category?.parentId ? getParentCategory(prompt.categoryId) : null;

  const handleFavorite = () => {
    const added = toggleFavorite(prompt.id);
    setIsHeartAnimating(true);
    setTimeout(() => setIsHeartAnimating(false), 300);
    if (added) {
      success('Adicionado aos favoritos');
    }
  };

  const handleCopy = async () => {
    const didCopy = await copy(prompt.content, prompt.id);
    if (didCopy) {
      success('Prompt copiado com sucesso!');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl">
      <div className="max-h-[90vh] overflow-hidden">
        <div className="sticky top-0 z-10 border-b border-[rgba(255,255,255,0.05)] bg-[var(--neutral-900)]/95 backdrop-blur-sm px-6 py-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--neutral-500)]">
                {parentCategory && (
                  <>
                    <span className="flex items-center gap-2">
                      {parentCategory.icon} {parentCategory.name}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
                {prompt.category && (
                  <span className="flex items-center gap-2">
                    {prompt.category.icon} {prompt.category.name}
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-[var(--neutral-50)] leading-tight">{prompt.title}</h2>
                <p className="text-sm text-[var(--neutral-400)] max-w-3xl">{prompt.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {prompt.type === 'mega' && (
                  <Badge variant="violet" size="md" className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Mega Prompt
                  </Badge>
                )}
                {prompt.isNew && (
                  <Badge variant="success" size="md">Novo</Badge>
                )}
                {prompt.aiCompatible?.map((ai) => (
                  <Badge key={ai} variant="default" size="md">
                    {ai}
                  </Badge>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleFavorite}
              aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.05)] transition-all duration-[var(--motion)]',
                favorite
                  ? 'bg-[rgba(139,92,246,0.16)] text-[var(--accent-300)] hover:bg-[rgba(139,92,246,0.24)]'
                  : 'text-[var(--neutral-300)] hover:text-[var(--neutral-50)] hover:bg-[rgba(255,255,255,0.04)]'
              )}
            >
              <Heart
                className={cn(
                  'w-6 h-6 transition-transform',
                  favorite && 'fill-current',
                  isHeartAnimating && 'animate-heart'
                )}
              />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8 overflow-y-auto">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <section className="space-y-4">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--neutral-400)]">Prompt</h3>
                    <p className="text-xs text-[var(--neutral-500)]">Copie e use este prompt diretamente na sua ferramenta preferida.</p>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.05)] bg-[var(--surface-100)] p-5">
                  <pre className="prose-prompt text-[var(--neutral-100)] whitespace-pre-wrap">
                    {prompt.content}
                  </pre>
                </div>
              </div>
            </section>

            <aside className="space-y-6 rounded-[1.5rem] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-5">
              <div>
                <h3 className="text-sm font-semibold text-[var(--neutral-400)] mb-2">Resumo</h3>
                <p className="text-sm text-[var(--neutral-300)]">{prompt.description}</p>
              </div>

              {prompt.tags && prompt.tags.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-[var(--neutral-400)] mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {prompt.tags.map((tag) => (
                      <Badge key={tag} variant="violet" size="sm">#{tag}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {prompt.aiCompatible && prompt.aiCompatible.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-[var(--neutral-400)] mb-3">Compatibilidade</h3>
                  <div className="flex flex-wrap gap-2">
                    {prompt.aiCompatible.map((ai) => (
                      <Badge key={ai} variant="default" size="sm">
                        {ai}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>

        <div className="sticky bottom-0 z-10 border-t border-[rgba(255,255,255,0.05)] bg-[var(--neutral-900)]/95 backdrop-blur-sm px-6 py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-[var(--neutral-400)]">
              {formatNumber(prompt.copyCount || 0)} cópias
            </span>

            <Button
              onClick={handleCopy}
              size="lg"
              className={cn(
                'min-w-[180px]',
                copied && 'bg-[var(--success)] hover:bg-[#0f766e]'
              )}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copiar Prompt
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

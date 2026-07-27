'use client';

import { Prompt } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Heart, Copy, Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useFavorites } from '@/hooks/use-favorites';
import { useCopy } from '@/hooks/use-copy';
import { useToast } from '@/hooks/use-toast';
import { formatNumber } from '@/lib/utils';
import { useState } from 'react';

interface PromptCardProps {
  prompt: Prompt;
  onClick: () => void;
}

export function PromptCard({ prompt, onClick }: PromptCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { copy, isCopied } = useCopy();
  const { success } = useToast();
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const added = toggleFavorite(prompt.id);
    setIsHeartAnimating(true);
    setTimeout(() => setIsHeartAnimating(false), 300);
    if (added) {
      success('Adicionado aos favoritos');
    }
  };

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const copied = await copy(prompt.content, prompt.id);
    if (copied) {
      success('Prompt copiado!');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  const favorite = isFavorite(prompt.id);
  const copied = isCopied(prompt.id);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`Abrir prompt ${prompt.title}`}
      className={cn(
        'group relative bg-[var(--neutral-900)] border border-[rgba(255,255,255,0.04)] rounded-[1.25rem] p-6 cursor-pointer transition-transform duration-[var(--motion)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-200)]',
        'hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.08)] hover:shadow-soft-md'
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-2">
          {prompt.type === 'mega' && (
            <Badge variant="violet" size="sm" className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Mega Prompt
            </Badge>
          )}
          {prompt.isNew && (
            <Badge variant="success" size="sm">Novo</Badge>
          )}
          {prompt.category && (
            <Badge variant="default" size="sm">
              {prompt.category.icon} {prompt.category.name}
            </Badge>
          )}
        </div>

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--neutral-500)]">
          {prompt.type === 'mega' ? 'Mega' : 'Prompt'}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-[var(--neutral-50)] mb-3 line-clamp-2 transition-colors group-hover:text-[var(--accent-400)]">
        {prompt.title}
      </h3>

      <p className="text-sm text-[var(--neutral-400)] mb-5 line-clamp-2">
        {prompt.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {prompt.aiCompatible?.slice(0, 3).map((ai) => (
          <Badge key={ai} variant="default" size="sm">
            {ai}
          </Badge>
        ))}
        {(prompt.aiCompatible?.length || 0) > 3 && (
          <Badge variant="default" size="sm">+{(prompt.aiCompatible?.length || 0) - 3}</Badge>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-[rgba(255,255,255,0.05)]">
        <span className="text-xs text-[var(--neutral-400)]">
          {formatNumber(prompt.copyCount || 0)} cópias
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleFavorite}
            aria-label={favorite ? 'Remover favorito' : 'Adicionar aos favoritos'}
            aria-pressed={favorite}
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.06)] transition-all duration-[var(--motion)]',
              favorite
                ? 'bg-[rgba(139,92,246,0.14)] text-[var(--accent-300)] hover:bg-[rgba(139,92,246,0.2)]'
                : 'text-[var(--neutral-400)] hover:text-[var(--neutral-50)] hover:bg-[rgba(255,255,255,0.06)]'
            )}
          >
            <Heart
              className={cn(
                'w-5 h-5 transition-transform',
                favorite && 'fill-current',
                isHeartAnimating && 'animate-heart'
              )}
            />
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className={cn(
              'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-[var(--motion)]',
              copied
                ? 'bg-[var(--success)] text-[var(--neutral-900)] hover:bg-[#059669]'
                : 'bg-[var(--accent-500)] text-white hover:bg-[var(--accent-600)]'
            )}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copiar
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

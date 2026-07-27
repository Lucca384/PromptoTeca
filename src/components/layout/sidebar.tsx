'use client';

import { Category } from '@/types';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight, Filter, X } from 'lucide-react';
import { useState } from 'react';
import { AI_MODELS, PROMPT_TYPES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  selectedAI: string[];
  selectedType: string;
  onCategoryChange: (category: string | null) => void;
  onAIChange: (ai: string[]) => void;
  onTypeChange: (type: string) => void;
  onClearFilters: () => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export function Sidebar({
  categories,
  selectedCategory,
  selectedAI,
  selectedType,
  onCategoryChange,
  onAIChange,
  onTypeChange,
  onClearFilters,
  isMobile,
  onClose,
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleAIToggle = (aiId: string) => {
    onAIChange(
      selectedAI.includes(aiId)
        ? selectedAI.filter(id => id !== aiId)
        : [...selectedAI, aiId]
    );
  };

  const hasActiveFilters = !!(selectedCategory || selectedAI.length < AI_MODELS.length || selectedType !== 'all');

  return (
    <aside className={cn(
      'bg-[var(--neutral-900)] border-r border-[rgba(255,255,255,0.04)] overflow-y-auto',
      isMobile ? 'w-full h-full' : 'w-80 min-h-screen sticky top-16'
    )}>
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-[var(--accent-400)]" />
            <span className="font-semibold text-[var(--neutral-50)]">Filtros</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-[var(--neutral-300)] hover:text-[var(--neutral-50)] hover:bg-[rgba(255,255,255,0.04)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="p-5 space-y-6">
        {hasActiveFilters && (
          <div className="rounded-3xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="violet" size="sm">Filtros ativos</Badge>
              {selectedCategory && <Badge size="sm">Categoria: {selectedCategory}</Badge>}
              {selectedType !== 'all' && <Badge size="sm">Tipo: {selectedType}</Badge>}
              {selectedAI.length < AI_MODELS.length && <Badge size="sm">IA: {selectedAI.length}</Badge>}
              <Button variant="ghost" size="sm" onClick={onClearFilters} className="ml-auto">
                Limpar
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--neutral-400)] mb-3">
              Categorias
            </h2>

            <button
              type="button"
              onClick={() => onCategoryChange(null)}
              className={cn(
                'w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-[var(--motion)] mb-3 border border-[rgba(255,255,255,0.05)]',
                !selectedCategory
                  ? 'bg-[rgba(139,92,246,0.14)] text-[var(--neutral-50)] border-[rgba(139,92,246,0.2)]'
                  : 'bg-[rgba(255,255,255,0.02)] text-[var(--neutral-300)] hover:bg-[rgba(255,255,255,0.05)]'
              )}
            >
              <span className="inline-flex items-center gap-2">📚 Todas as categorias</span>
            </button>

            <div className="space-y-2">
              {categories.map((category) => {
                const isExpanded = expandedCategories.includes(category.id);
                const isSelected = selectedCategory === category.slug;
                const hasSubcategories = category.subcategories && category.subcategories.length > 0;

                return (
                  <div key={category.id}>
                    <div className="flex items-center gap-2">
                      {hasSubcategories && (
                        <button
                          type="button"
                          onClick={() => toggleCategory(category.id)}
                          aria-expanded={isExpanded}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-2xl text-[var(--neutral-400)] hover:text-[var(--neutral-50)] hover:bg-[rgba(255,255,255,0.04)] transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => onCategoryChange(category.slug)}
                        className={cn(
                          'flex-1 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-[var(--motion)] border border-[rgba(255,255,255,0.05)]',
                          isSelected
                            ? 'bg-[rgba(139,92,246,0.14)] text-[var(--neutral-50)] border-[rgba(139,92,246,0.2)]'
                            : 'bg-[rgba(255,255,255,0.02)] text-[var(--neutral-300)] hover:bg-[rgba(255,255,255,0.05)]'
                        )}
                      >
                        <span className="truncate">{category.icon} {category.name}</span>
                        <span className="text-xs text-[var(--neutral-400)]">{category.promptCount}</span>
                      </button>
                    </div>

                    {isExpanded && hasSubcategories && (
                      <div className="space-y-2 pl-10 mt-2">
                        {category.subcategories?.map((sub) => (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => onCategoryChange(sub.slug)}
                            className={cn(
                              'w-full flex items-center justify-between rounded-2xl px-4 py-2 text-sm transition-all duration-[var(--motion)] border border-[rgba(255,255,255,0.05)]',
                              selectedCategory === sub.slug
                                ? 'bg-[rgba(139,92,246,0.12)] text-[var(--neutral-50)] border-[rgba(139,92,246,0.18)]'
                                : 'bg-[rgba(255,255,255,0.02)] text-[var(--neutral-300)] hover:bg-[rgba(255,255,255,0.05)]'
                            )}
                          >
                            <span className="truncate">{sub.name}</span>
                            <span className="text-xs text-[var(--neutral-400)]">{sub.promptCount}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--neutral-400)] mb-3">
              IA Compatível
            </h2>
            <div className="space-y-2">
              {AI_MODELS.map((ai) => (
                <label key={ai.id} className="group block rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] p-3 cursor-pointer transition-colors hover:border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedAI.includes(ai.id)}
                      onChange={() => handleAIToggle(ai.id)}
                      className="h-4 w-4 rounded border-[rgba(255,255,255,0.08)] bg-[var(--neutral-900)] text-[var(--accent-600)] focus:ring-[var(--accent-600)] focus:ring-offset-[var(--surface-200)]"
                    />
                    <span className="text-sm text-[var(--neutral-300)] transition-colors group-hover:text-[var(--neutral-50)]">
                      {ai.icon} {ai.name}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--neutral-400)] mb-3">
              Tipo
            </h2>
            <div className="space-y-2">
              {PROMPT_TYPES.map((type) => (
                <label key={type.id} className="group block rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] p-3 cursor-pointer transition-colors hover:border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === type.id}
                      onChange={() => onTypeChange(type.id)}
                      className="h-4 w-4 rounded-full border-[rgba(255,255,255,0.08)] bg-[var(--neutral-900)] text-[var(--accent-600)] focus:ring-[var(--accent-600)] focus:ring-offset-[var(--surface-200)]"
                    />
                    <span className="text-sm text-[var(--neutral-300)] transition-colors group-hover:text-[var(--neutral-50)]">
                      {type.name}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="w-full text-[var(--neutral-300)]"
          >
            Limpar filtros
          </Button>
        )}

        {isMobile && (
          <Button onClick={onClose} className="w-full mt-4">
            Aplicar Filtros
          </Button>
        )}
      </div>
    </aside>
  );
}

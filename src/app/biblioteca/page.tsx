'use client';

import { useMemo, useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { PromptGrid } from '@/components/prompts/prompt-grid';
import { Category } from '@/types';
import { AI_MODELS, SORT_OPTIONS } from '@/lib/constants';
import { Filter, Sparkles, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CategoryGrid } from '@/components/categories/category-grid';
import { getAllCategories } from '@/data/categories';
import { filterPrompts, getFeaturedPrompts, getNewPrompts, getPromptCountByCategorySlug } from '@/data/prompts';

export default function BibliotecaPage() {
  const categories = useMemo(() => {
    return getAllCategories().map((category) => ({
      ...category,
      promptCount: getPromptCountByCategorySlug(category.slug),
      subcategories: category.subcategories?.map((sub) => ({
        ...sub,
        promptCount: getPromptCountByCategorySlug(sub.slug),
      })),
    }));
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAI, setSelectedAI] = useState<string[]>(AI_MODELS.map((a) => a.id));
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const featuredPrompts = useMemo(() => getFeaturedPrompts().slice(0, 4), []);
  const newPrompts = useMemo(() => getNewPrompts().slice(0, 4), []);

  const prompts = useMemo(() => {
    return filterPrompts({
      category: selectedCategory ?? undefined,
      type: selectedType,
      aiModels: selectedAI.length === AI_MODELS.length ? undefined : selectedAI,
      search: searchQuery,
      sort: sortBy,
    });
  }, [selectedCategory, selectedAI, selectedType, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedAI(AI_MODELS.map((a) => a.id));
    setSelectedType('all');
    setSearchQuery('');
  };

  const hasActiveFilters = Boolean(
    selectedCategory || selectedAI.length < AI_MODELS.length || selectedType !== 'all' || searchQuery
  );

  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          selectedAI={selectedAI}
          selectedType={selectedType}
          onCategoryChange={setSelectedCategory}
          onAIChange={setSelectedAI}
          onTypeChange={setSelectedType}
          onClearFilters={clearFilters}
        />
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-[var(--neutral-900)] animate-slide-up">
            <Sidebar
              categories={categories}
              selectedCategory={selectedCategory}
              selectedAI={selectedAI}
              selectedType={selectedType}
              onCategoryChange={setSelectedCategory}
              onAIChange={setSelectedAI}
              onTypeChange={setSelectedType}
              onClearFilters={clearFilters}
              isMobile
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="lg:hidden mb-6">
            <Button
              variant="secondary"
              onClick={() => setIsSidebarOpen(true)}
              className="w-full justify-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filtros
              {hasActiveFilters && (
                <span className="ml-2 rounded-full bg-[rgba(139,92,246,0.18)] px-2 py-0.5 text-xs font-semibold text-[var(--accent-300)]">
                  Ativos
                </span>
              )}
            </Button>
          </div>

          <div className="mb-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--neutral-500)]">Biblioteca</p>
                <h1 className="text-3xl font-semibold text-[var(--neutral-50)]">Biblioteca de Prompts</h1>
                <p className="max-w-2xl text-sm text-[var(--neutral-400)]">
                  Explore nossa coleção de prompts profissionais com filtros inteligentes e recomendações de uso.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--neutral-300)]">
                {hasActiveFilters ? (
                  <span className="rounded-full bg-[rgba(139,92,246,0.14)] px-3 py-2 text-[var(--accent-300)]">Filtros ativados</span>
                ) : (
                  <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-2">Navegue pela biblioteca</span>
                )}
              </div>
            </div>
          </div>

          {!hasActiveFilters ? (
            <>
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-[rgba(139,92,246,0.16)]">
                    <Sparkles className="w-5 h-5 text-[var(--accent-300)]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--neutral-500)]">Seleções</p>
                    <h2 className="text-2xl font-semibold text-[var(--neutral-50)]">Em Destaque</h2>
                  </div>
                </div>
                <PromptGrid prompts={featuredPrompts} isLoading={false} />
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-[rgba(16,185,129,0.12)]">
                    <TrendingUp className="w-5 h-5 text-[var(--success)]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--neutral-500)]">Navegue</p>
                    <h2 className="text-2xl font-semibold text-[var(--neutral-50)]">Categorias</h2>
                  </div>
                </div>
                <CategoryGrid categories={categories} />
              </section>

              {newPrompts.length > 0 && (
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-[rgba(245,158,11,0.14)]">
                      <Clock className="w-5 h-5 text-[var(--neutral-50)]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--neutral-500)]">Atualizações</p>
                      <h2 className="text-2xl font-semibold text-[var(--neutral-50)]">Adicionados Recentemente</h2>
                    </div>
                  </div>
                  <PromptGrid prompts={newPrompts} isLoading={false} />
                </section>
              )}
            </>
          ) : (
            <>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                <p className="text-sm text-[var(--neutral-400)]">
                  {prompts.length} prompt{prompts.length !== 1 ? 's' : ''} encontrado{prompts.length !== 1 ? 's' : ''}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <span className="text-sm text-[var(--neutral-400)]">Ordenar por</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-4 py-2 text-sm text-[var(--neutral-100)] outline-none transition-all duration-[var(--motion)] focus:border-[var(--accent-500)] focus:ring-2 focus:ring-[var(--accent-500)] focus:ring-offset-2 focus:ring-offset-[var(--surface-200)]"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>{opt.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <PromptGrid
                prompts={prompts}
                isLoading={false}
                emptyMessage="Nenhum prompt encontrado com os filtros selecionados. Tente ajustar seus filtros."
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { PromptGrid } from '@/components/prompts/prompt-grid';
import { Prompt } from '@/types';
import { SORT_OPTIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { getAllPrompts, getPromptCountByCategorySlug } from '@/data/prompts';
import { getCategoryBySlug, getParentCategory } from '@/data/categories';

interface CategoryPageClientProps {
  slug: string;
}

export default function CategoryPageClient({ slug }: CategoryPageClientProps) {
  const [sortBy, setSortBy] = useState('recent');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const category = useMemo(() => getCategoryBySlug(slug), [slug]);
  const parentCategory = useMemo(
    () => (category?.parentId ? getParentCategory(category.parentId) : null),
    [category]
  );

  const prompts = useMemo(() => {
    if (!category) {
      return [];
    }

    const categorySlug = selectedSubcategory || slug;
    const targetCategory = getCategoryBySlug(categorySlug);
    if (!targetCategory) {
      return [];
    }

    const allPrompts = getAllPrompts();
    let filteredPrompts = allPrompts;

    if (!targetCategory.parentId) {
      const subcategoryIds = targetCategory.subcategories?.map((sub) => sub.id) || [];
      filteredPrompts = allPrompts.filter(
        (prompt) => prompt.categoryId === targetCategory.id || subcategoryIds.includes(prompt.categoryId)
      );
    } else {
      filteredPrompts = allPrompts.filter((prompt) => prompt.categoryId === targetCategory.id);
    }

    switch (sortBy) {
      case 'popular':
        filteredPrompts.sort((a, b) => (b.copyCount || 0) - (a.copyCount || 0));
        break;
      case 'az':
        filteredPrompts.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
        break;
      case 'za':
        filteredPrompts.sort((a, b) => b.title.localeCompare(a.title, 'pt-BR'));
        break;
      case 'recent':
      default:
        filteredPrompts.sort((a, b) => (b.order || 0) - (a.order || 0));
        break;
    }

    return filteredPrompts.map((prompt) => ({
      ...prompt,
      category: getCategoryBySlug(prompt.categoryId) || getParentCategory(prompt.categoryId),
    } as Prompt));
  }, [category, selectedSubcategory, sortBy, slug]);

  const categoryCount = useMemo(() => {
    if (!category) {
      return 0;
    }
    return getPromptCountByCategorySlug(slug);
  }, [category, slug]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[var(--neutral-900)] p-10 text-center">
          <p className="text-sm text-[var(--neutral-400)] mb-4">Categoria não encontrada.</p>
          <Link href="/biblioteca" className="text-sm font-semibold text-[var(--accent-300)] hover:text-[var(--accent-100)]">
            Voltar para a biblioteca
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <nav className="flex items-center gap-2 text-sm text-[var(--neutral-400)] mb-6">
        <Link href="/biblioteca" className="flex items-center gap-1 hover:text-white transition-colors">
          <Home className="w-4 h-4" />
          Biblioteca
        </Link>
        <ChevronRight className="w-4 h-4" />
        {parentCategory && (
          <>
            <Link
              href={`/biblioteca/categoria/${parentCategory.slug}`}
              className="hover:text-white transition-colors"
            >
              {parentCategory.icon} {parentCategory.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
          </>
        )}
        <span className="text-white">
          {category.icon} {category.name}
        </span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-4xl">{category.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-white">{category.name}</h1>
            {category.description && (
              <p className="text-[var(--neutral-400)] mt-1">{category.description}</p>
            )}
          </div>
        </div>
      </div>

      {category.subcategories && category.subcategories.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setSelectedSubcategory(null)}
            className={cn(
              'px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-[var(--motion)] border border-[rgba(255,255,255,0.05)]',
              !selectedSubcategory
                ? 'bg-[rgba(139,92,246,0.16)] text-[var(--neutral-50)] border-[rgba(139,92,246,0.24)]'
                : 'bg-[rgba(255,255,255,0.02)] text-[var(--neutral-300)] hover:bg-[rgba(255,255,255,0.05)]'
            )}
          >
            Todos ({categoryCount})
          </button>
          {category.subcategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setSelectedSubcategory(sub.slug)}
              className={cn(
                'px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-[var(--motion)] border border-[rgba(255,255,255,0.05)]',
                selectedSubcategory === sub.slug
                  ? 'bg-[rgba(139,92,246,0.16)] text-[var(--neutral-50)] border-[rgba(139,92,246,0.24)]'
                  : 'bg-[rgba(255,255,255,0.02)] text-[var(--neutral-300)] hover:bg-[rgba(255,255,255,0.05)]'
              )}
            >
              {sub.name} ({getPromptCountByCategorySlug(sub.slug)})
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <p className="text-sm text-[var(--neutral-400)]">
          {prompts.length} prompt{prompts.length !== 1 ? 's' : ''}
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

      <PromptGrid prompts={prompts} isLoading={false} emptyMessage={`Nenhum prompt encontrado em ${category.name}`} />
    </div>
  );
}

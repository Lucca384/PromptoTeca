'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { PromptGrid } from '@/components/prompts/prompt-grid';
import { Category, Prompt } from '@/types';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { SORT_OPTIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [category, setCategory] = useState<Category | null>(null);
  const [parentCategory, setParentCategory] = useState<Category | null>(null);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('recent');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const fetchCategoryData = useCallback(async () => {
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      const categories: Category[] = data.categories || [];
      
      // Find the category
      let foundCategory: Category | null = null;
      let foundParent: Category | null = null;
      
      for (const cat of categories) {
        if (cat.slug === slug) {
          foundCategory = cat;
          break;
        }
        if (cat.subcategories) {
          const sub = cat.subcategories.find(s => s.slug === slug);
          if (sub) {
            foundCategory = sub;
            foundParent = cat;
            break;
          }
        }
      }
      
      setCategory(foundCategory);
      setParentCategory(foundParent);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  }, [slug]);

  const fetchPrompts = useCallback(async () => {
    setIsLoading(true);
    try {
      const categorySlug = selectedSubcategory || slug;
      const res = await fetch(`/api/prompts?category=${categorySlug}&sort=${sortBy}`);
      const data = await res.json();
      setPrompts(data.prompts || []);
    } catch (error) {
      console.error('Error fetching prompts:', error);
    } finally {
      setIsLoading(false);
    }
  }, [slug, sortBy, selectedSubcategory]);

  useEffect(() => {
    fetchCategoryData();
  }, [fetchCategoryData]);

  useEffect(() => {
    fetchPrompts();
  }, [fetchPrompts]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="animate-pulse">
          <div className="h-6 w-48 rounded-full bg-[rgba(255,255,255,0.04)] mb-4" />
          <div className="h-10 w-64 rounded-2xl bg-[rgba(255,255,255,0.04)] mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 rounded-[1.25rem] bg-[rgba(255,255,255,0.04)]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
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

      {/* Header */}
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

      {/* Subcategories Pills */}
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
            Todos ({category.promptCount})
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
              {sub.name} ({sub.promptCount})
            </button>
          ))}
        </div>
      )}

      {/* Sort & Count */}
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

      {/* Prompts Grid */}
      <PromptGrid 
        prompts={prompts} 
        isLoading={isLoading}
        emptyMessage={`Nenhum prompt encontrado em ${category.name}`}
      />
    </div>
  );
}

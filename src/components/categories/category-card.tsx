'use client';

import { Category } from '@/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CategoryCardProps {
  category: Category;
  size?: 'sm' | 'md';
}

export function CategoryCard({ category, size = 'md' }: CategoryCardProps) {
  return (
    <Link
      href={`/biblioteca/categoria/${category.slug}`}
      className={cn(
        'group block bg-[var(--neutral-900)] border border-[rgba(255,255,255,0.05)] rounded-[1.5rem] transition-all duration-[var(--motion)]',
        'hover:border-[rgba(139,92,246,0.18)] hover:shadow-soft-md hover:-translate-y-0.5',
        size === 'sm' ? 'p-4' : 'p-6'
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          'flex items-center justify-center rounded-3xl transition-colors',
          size === 'sm' ? 'w-10 h-10 text-xl' : 'w-14 h-14 text-3xl'
        )}>
          <span className="flex h-full w-full items-center justify-center rounded-3xl bg-[rgba(139,92,246,0.12)] text-[var(--accent-300)]">
            {category.icon}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={cn(
              'font-semibold text-[var(--neutral-50)] group-hover:text-[var(--accent-300)] transition-colors truncate',
              size === 'sm' ? 'text-base' : 'text-lg'
            )}>
              {category.name}
            </h3>
            {category.isNew && (
              <span className="rounded-full bg-[rgba(16,185,129,0.14)] px-2.5 py-0.5 text-xs font-medium text-[var(--success)]">
                Novo
              </span>
            )}
          </div>
          {size === 'md' && category.description && (
            <p className="text-sm text-[var(--neutral-400)] mt-2 line-clamp-2">
              {category.description}
            </p>
          )}
          <p className={cn(
            'text-[var(--neutral-500)]',
            size === 'sm' ? 'text-xs mt-2' : 'text-sm mt-3'
          )}>
            {category.promptCount || 0} prompts
          </p>
        </div>
      </div>
    </Link>
  );
}

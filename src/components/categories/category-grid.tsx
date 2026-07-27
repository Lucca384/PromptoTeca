'use client';

import { Category } from '@/types';
import { CategoryCard } from './category-card';

interface CategoryGridProps {
  categories: Category[];
  size?: 'sm' | 'md';
}

export function CategoryGrid({ categories, size = 'md' }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {categories.map(category => (
        <CategoryCard key={category.id} category={category} size={size} />
      ))}
    </div>
  );
}

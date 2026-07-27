import { NextResponse } from 'next/server';
import { getAllCategories } from '@/data/categories';
import { getPromptsByCategory, getAllPrompts } from '@/data/prompts';

export async function GET() {
  try {
    const categories = getAllCategories();
    const allPrompts = getAllPrompts();

    // Add prompt count to each category
    const categoriesWithCount = categories.map(cat => {
      // Get prompts directly in this category
      let count = getPromptsByCategory(cat.id).length;
      
      // Add prompts from subcategories
      if (cat.subcategories) {
        cat.subcategories.forEach(sub => {
          count += getPromptsByCategory(sub.id).length;
        });

        // Add count to subcategories too
        cat.subcategories = cat.subcategories.map(sub => ({
          ...sub,
          promptCount: getPromptsByCategory(sub.id).length,
        }));
      }

      return {
        ...cat,
        promptCount: count,
      };
    });

    return NextResponse.json({
      categories: categoriesWithCount,
      total: categoriesWithCount.length,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar categorias' },
      { status: 500 }
    );
  }
}

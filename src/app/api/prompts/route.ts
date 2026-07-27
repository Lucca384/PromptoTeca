import { NextRequest, NextResponse } from 'next/server';
import { getAllPrompts, searchPrompts, getPromptsByCategory, getFeaturedPrompts, getNewPrompts } from '@/data/prompts';
import { getAllCategories, getCategoryBySlug } from '@/data/categories';
import { Prompt } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const type = searchParams.get('type');
    const ai = searchParams.get('ai');
    const sort = searchParams.get('sort') || 'recent';
    const featured = searchParams.get('featured');
    const isNew = searchParams.get('new');

    let prompts: Prompt[] = getAllPrompts();
    const categories = getAllCategories();

    // Search filter
    if (search) {
      prompts = searchPrompts(search);
    }

    // Category filter
    if (category) {
      const cat = getCategoryBySlug(category);
      if (cat) {
        // Check if it's a parent category
        const parentCat = categories.find(c => c.slug === category);
        if (parentCat && parentCat.subcategories) {
          // Get prompts from all subcategories
          const subIds = parentCat.subcategories.map(s => s.id);
          prompts = prompts.filter(p => subIds.includes(p.categoryId) || p.categoryId === parentCat.id);
        } else {
          prompts = prompts.filter(p => p.categoryId === cat.id);
        }
      }
    }

    // Type filter
    if (type && type !== 'all') {
      prompts = prompts.filter(p => p.type === type);
    }

    // AI filter
    if (ai) {
      const aiModels = ai.split(',');
      prompts = prompts.filter(p => 
        p.aiCompatible?.some(a => aiModels.includes(a))
      );
    }

    // Featured filter
    if (featured === 'true') {
      prompts = getFeaturedPrompts().filter(p => prompts.some(pr => pr.id === p.id));
    }

    // New filter
    if (isNew === 'true') {
      prompts = getNewPrompts().filter(p => prompts.some(pr => pr.id === p.id));
    }

    // Sort
    switch (sort) {
      case 'popular':
        prompts.sort((a, b) => (b.copyCount || 0) - (a.copyCount || 0));
        break;
      case 'az':
        prompts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'za':
        prompts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'recent':
      default:
        prompts.sort((a, b) => (b.order || 0) - (a.order || 0));
        break;
    }

    // Add category info to each prompt
    const promptsWithCategory = prompts.map(p => {
      const cat = getCategoryBySlug(p.categoryId) || 
                  categories.flatMap(c => c.subcategories || []).find(s => s.id === p.categoryId);
      return { ...p, category: cat };
    });

    return NextResponse.json({
      prompts: promptsWithCategory,
      total: promptsWithCategory.length,
    });
  } catch (error) {
    console.error('Error fetching prompts:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar prompts' },
      { status: 500 }
    );
  }
}

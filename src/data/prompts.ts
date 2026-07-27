import { Prompt } from '@/types';
import { marketingPrompts } from './prompts-marketing';
import { socialPrompts } from './prompts-social';
import { businessPrompts } from './prompts-business';
import { techPrompts } from './prompts-tech';
import { productivityPrompts } from './prompts-productivity';
import { nichePrompts } from './prompts-niches';
import { megaPrompts } from './prompts-mega';
import { extendedPrompts } from './prompts-extended';
import { bulkPrompts } from './prompts-bulk';
import { getCategoryBySlug } from '@/data/categories';

// Combine all prompts
export const promptsData: Prompt[] = [
  ...marketingPrompts,
  ...socialPrompts,
  ...businessPrompts,
  ...techPrompts,
  ...productivityPrompts,
  ...nichePrompts,
  ...megaPrompts,
  ...extendedPrompts,
  ...bulkPrompts,
];

// Get all prompts
export function getAllPrompts(): Prompt[] {
  return promptsData;
}

// Get prompt by ID
export function getPromptById(id: string): Prompt | undefined {
  return promptsData.find(p => p.id === id);
}

// Get prompt by slug
export function getPromptBySlug(slug: string): Prompt | undefined {
  return promptsData.find(p => p.slug === slug);
}

// Get prompts by category
export function getPromptsByCategory(categoryId: string): Prompt[] {
  return promptsData.filter(p => p.categoryId === categoryId);
}

export function getPromptsByCategorySlug(slug: string): Prompt[] {
  const category = getCategoryBySlug(slug);
  if (!category) {
    return [];
  }

  if (!category.parentId) {
    const subcategoryIds = category.subcategories?.map(s => s.id) || [];
    return promptsData.filter(
      p => p.categoryId === category.id || subcategoryIds.includes(p.categoryId)
    );
  }

  return promptsData.filter(p => p.categoryId === category.id);
}

export function getPromptCountByCategorySlug(slug: string): number {
  return getPromptsByCategorySlug(slug).length;
}

// Get featured prompts
export function getFeaturedPrompts(): Prompt[] {
  return promptsData.filter(p => p.isFeatured);
}

// Get new prompts
export function getNewPrompts(): Prompt[] {
  return promptsData.filter(p => p.isNew);
}

// Get popular prompts (by copy count)
export function getPopularPrompts(limit: number = 10): Prompt[] {
  return [...promptsData]
    .sort((a, b) => (b.copyCount || 0) - (a.copyCount || 0))
    .slice(0, limit);
}

// Search prompts
export function searchPrompts(query: string): Prompt[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return promptsData;
  
  const searchTerms = lowerQuery.split(' ').filter(t => t.length > 1);
  
  return promptsData.filter(p => {
    const searchableText = [
      p.title,
      p.description,
      p.categoryId,
      ...(p.tags || [])
    ].join(' ').toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
}

// Get prompts count per category
export function getPromptCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = {};
  promptsData.forEach(p => {
    counts[p.categoryId] = (counts[p.categoryId] || 0) + 1;
  });
  return counts;
}

// Get mega prompts
export function getMegaPrompts(): Prompt[] {
  return promptsData.filter(p => p.type === 'mega');
}

// Filter prompts
export function filterPrompts(options: {
  category?: string;
  type?: string;
  aiModels?: string[];
  search?: string;
  sort?: string;
}): Prompt[] {
  let filtered = options.category ? getPromptsByCategorySlug(options.category) : [...promptsData];
   
  // Type filter
  if (options.type && options.type !== 'all') {
    filtered = filtered.filter(p => p.type === options.type);
  }
  
  // AI models filter
  if (options.aiModels && options.aiModels.length > 0) {
    filtered = filtered.filter(p => 
      p.aiCompatible?.some(ai => options.aiModels!.includes(ai))
    );
  }
  
  // Search filter
  if (options.search) {
    const query = options.search.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags?.some(t => t.toLowerCase().includes(query))
    );
  }
  
  // Sort
  switch (options.sort) {
    case 'popular':
      filtered.sort((a, b) => (b.copyCount || 0) - (a.copyCount || 0));
      break;
    case 'az':
      filtered.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
      break;
    case 'za':
      filtered.sort((a, b) => b.title.localeCompare(a.title, 'pt-BR'));
      break;
    case 'recent':
    default:
      // Keep original order (by order field)
      filtered.sort((a, b) => (a.order || 0) - (b.order || 0));
      break;
  }
  
  return filtered;
}

// Stats
export function getStats() {
  const total = promptsData.length;
  const mega = promptsData.filter(p => p.type === 'mega').length;
  const featured = promptsData.filter(p => p.isFeatured).length;
  const newPrompts = promptsData.filter(p => p.isNew).length;
  const totalCopies = promptsData.reduce((sum, p) => sum + (p.copyCount || 0), 0);
  
  return {
    total,
    mega,
    featured,
    newPrompts,
    totalCopies,
  };
}

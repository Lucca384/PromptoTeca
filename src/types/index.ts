export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  parentId: string | null;
  order: number | null;
  isNew: boolean | null;
  promptCount?: number;
  subcategories?: Category[];
}

export interface Prompt {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  categoryId: string;
  type: string | null;
  aiCompatible: string[] | null;
  tags: string[] | null;
  copyCount: number | null;
  isNew: boolean | null;
  isFeatured: boolean | null;
  order: number | null;
  category?: Category;
}

export interface FilterState {
  category: string | null;
  subcategory: string | null;
  aiModels: string[];
  type: string;
  search: string;
  sort: string;
  favoritesOnly: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

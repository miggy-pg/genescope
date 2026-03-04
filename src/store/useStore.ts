import { create } from 'zustand';
import { Category, Article, SearchResult } from '@/types';
import { categories } from '@/data/categories';

interface EncartaState {
  // Categories
  categories: Category[];
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;

  // Articles
  articles: Article[];
  currentArticle: Article | null;
  setCurrentArticle: (article: Article | null) => void;

  // Search
  searchQuery: string;
  searchResults: SearchResult[];
  setSearchQuery: (query: string) => void;
  performSearch: (query: string) => void;

  // Navigation
  favorites: string[];
  addFavorite: (articleId: string) => void;
  removeFavorite: (articleId: string) => void;
  isFavorite: (articleId: string) => boolean;

  // UI State
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useStore = create<EncartaState>((set, get) => ({
  // Categories
  categories: categories,
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  // Articles
  articles: [],
  currentArticle: null,
  setCurrentArticle: (article) => set({ currentArticle: article }),

  // Search
  searchQuery: '',
  searchResults: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  performSearch: (query) => {
    const { categories } = get();
    const results: SearchResult[] = [];

    // Search categories
    categories.forEach((category) => {
      if (category.name.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          id: category.id,
          title: category.name,
          type: 'category',
          slug: category.slug,
          excerpt: category.description,
        });
      }
    });

    set({ searchResults: results, searchQuery: query });
  },

  // Favorites
  favorites: [],
  addFavorite: (articleId) =>
    set((state) => ({
      favorites: [...state.favorites, articleId],
    })),
  removeFavorite: (articleId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== articleId),
    })),
  isFavorite: (articleId) => get().favorites.includes(articleId),

  // UI State
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

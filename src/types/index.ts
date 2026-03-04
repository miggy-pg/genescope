export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  position: 'left' | 'right';
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  summary: string;
  content: string;
  featuredImage: string;
  media: MediaItem[];
  relatedArticles: string[];
  tags: string[];
  readingLevel: 'easy' | 'medium' | 'advanced';
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'audio';
  url: string;
  caption: string;
  thumbnail?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  type: 'article' | 'category';
  slug: string;
  excerpt: string;
}

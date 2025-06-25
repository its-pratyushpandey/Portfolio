export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content?: string; // Full blog content (optional for preview)
  excerpt: string; // Short excerpt for cards
  date: string; // ISO date string
  publishedDate: Date;
  tags: string[];
  category: string;
  slug: string; // URL-friendly slug
  readTime: number; // Estimated read time in minutes
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  author: {
    name: string;
    avatar?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  socialLinks?: {
    devTo?: string;
    medium?: string;
    hashnode?: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  color: string;
}

export interface BlogFilters {
  category?: string;
  tags?: string[];
  featured?: boolean;
}

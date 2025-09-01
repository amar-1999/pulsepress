export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  author: Author;
  category: Category;
  featured: boolean;
  readingTime: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  twitter?: string;
}
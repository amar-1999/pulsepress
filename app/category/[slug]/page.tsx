import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getArticlesByCategory, getAllCategories } from '@/lib/api';
import { ArticleCard } from '@/components/ui/article-card';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Ensure this function is properly exported and handles any potential errors
export async function generateStaticParams() {
  try {
    const categories = await getAllCategories();
    
    if (!categories || !Array.isArray(categories)) {
      return [];
    }
    
    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  return {
    title: `${category.name} - Articles and News`,
    description: category.description,
    openGraph: {
      title: `${category.name} - PulsePress`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }

  const articles = await getArticlesByCategory(params.slug);

  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          {category.name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {category.description}
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      
      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            No articles found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
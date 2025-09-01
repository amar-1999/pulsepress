import { Article } from '@/types';
import { ArticleCard } from '@/components/ui/article-card';

interface FeaturedArticlesProps {
  articles: Article[];
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  // Get the main featured article and the rest for the sidebar
  const mainFeatured = articles[0];
  const sidebarArticles = articles.slice(1, 4);

  return (
    <section className="container py-12">
      <h2 className="font-serif text-3xl font-bold mb-8 after:content-[''] after:block after:w-24 after:h-1 after:bg-primary after:mt-2">
        Featured Articles
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main featured article */}
        <div className="lg:col-span-8">
          {mainFeatured && <ArticleCard article={mainFeatured} variant="featured" />}
        </div>
        
        {/* Sidebar featured articles */}
        <div className="lg:col-span-4 space-y-6">
          {sidebarArticles.map(article => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
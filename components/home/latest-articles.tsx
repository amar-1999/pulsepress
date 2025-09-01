import { Article } from '@/types';
import { ArticleCard } from '@/components/ui/article-card';

interface LatestArticlesProps {
  articles: Article[];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
  return (
    <section className="container py-12">
      <h2 className="font-serif text-3xl font-bold mb-8 after:content-[''] after:block after:w-24 after:h-1 after:bg-primary after:mt-2">
        Latest Articles
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
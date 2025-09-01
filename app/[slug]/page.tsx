import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Share2, Twitter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Markdown } from '@/components/ui/markdown';
import { formatDate } from '@/lib/utils';
import { getArticleBySlug, getLatestArticles, getAllArticles } from '@/lib/api';
import { ArticleCard } from '@/components/ui/article-card';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  // Get related articles from the same category
  const relatedArticles = await getLatestArticles(3);

  return (
    <div className="container py-8">
      <article className="mx-auto max-w-4xl">
        {/* Article Header */}
        <header className="mb-8">
          <Link href={`/category/${article.category.slug}`}>
            <Badge variant="secondary" className="mb-3">
              {article.category.name}
            </Badge>
          </Link>
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {article.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="font-medium">{article.author.name}</div>
                {article.author.twitter && (
                  <Link 
                    href={`https://twitter.com/${article.author.twitter}`}
                    className="text-muted-foreground hover:text-primary text-xs flex items-center gap-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-3 w-3" />
                    @{article.author.twitter}
                  </Link>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{article.readingTime} min read</span>
            </div>
          </div>
        </header>
        
        {/* Feature Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
        
        {/* Article Content */}
        <div className="prose dark:prose-invert max-w-none">
          <Markdown content={article.content} />
        </div>
        
        {/* Article Footer */}
        <footer className="mt-12 pt-6 border-t">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <h3 className="font-serif font-bold text-lg">About the Author</h3>
              <div className="flex items-center gap-3 mt-3">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium">{article.author.name}</div>
                  <p className="text-sm text-muted-foreground">{article.author.bio}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </footer>
      </article>
      
      {/* Related Articles */}
      <Separator className="my-12" />
      
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  if (variant === 'featured') {
    return (
      <div className="group relative overflow-hidden rounded-lg transition-all hover:shadow-lg">
        <div className="aspect-[16/9] w-full overflow-hidden relative">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Link href={`/category/${article.category.slug}`}>
            <Badge variant="secondary" className="mb-3 hover:bg-secondary/80">
              {article.category.name}
            </Badge>
          </Link>

          <Link href={`/${article.slug}`}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary-foreground/80 transition-colors">
              {article.title}
            </h2>
          </Link>

          <p className="mb-4 line-clamp-2 text-gray-200">{article.excerpt}</p>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={24}
                height={24}
                className="rounded-[50%] w-[30px] h-[30px] transition-transform object-cover shadow-md"
              />
              <span className="ml-2">{article.author.name}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-200">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-200">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="group flex gap-4">
        <div className="flex-shrink-0 overflow-hidden rounded-md">
          <Image
            src={article.coverImage}
            alt={article.title}
            width={100}
            height={100}
            className="h-20 w-20 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div>
          <Link href={`/category/${article.category.slug}`}>
            <Badge variant="outline" className="mb-1 text-xs">
              {article.category.name}
            </Badge>
          </Link>
          <Link href={`/${article.slug}`}>
            <h3 className="font-serif font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
          </Link>
          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{formatDate(article.publishedAt)}</span>
            <span>•</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>
    );
  }

  // Default card
  return (
    <div className="group overflow-hidden rounded-lg border transition-all hover:shadow-md">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.title}
          width={600}
          height={338}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <Link href={`/category/${article.category.slug}`}>
          <Badge variant="outline" className="mb-2">
            {article.category.name}
          </Badge>
        </Link>

        <Link href={`/${article.slug}`}>
          <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>

        <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={24}
              height={24}
              className="rounded-[50%] w-[30px] h-[30px] transition-transform object-cover shadow-md"
            />
            <span className="text-sm">{article.author.name}</span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{article.readingTime} min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
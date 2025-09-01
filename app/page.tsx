import { Suspense } from 'react';
import { FeaturedArticles } from '@/components/home/featured-articles';
import { LatestArticles } from '@/components/home/latest-articles';
import { CategoryTabs } from '@/components/home/category-tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { getFeaturedArticles, getLatestArticles, getAllCategories, getArticlesByCategory } from '@/lib/api';

export default async function Home() {
  // Fetch data for the homepage
  const featuredArticles = await getFeaturedArticles();
  const latestArticles = await getLatestArticles(6);
  const categories = await getAllCategories();
  
  // Fetch articles for each category
  const articlesByCategory: Record<string, any> = {};
  
  for (const category of categories) {
    articlesByCategory[category.slug] = await getArticlesByCategory(category.slug);
  }

  return (
    <div className="pb-12">
      <div className="pt-10">
        <Suspense fallback={<FeaturedArticlesSkeleton />}>
          <FeaturedArticles articles={featuredArticles} />
        </Suspense>
      </div>

      <Suspense fallback={<LatestArticlesSkeleton />}>
        <LatestArticles articles={latestArticles} />
      </Suspense>

      <Suspense fallback={<CategoryTabsSkeleton />}>
        <CategoryTabs categories={categories} articlesByCategory={articlesByCategory} />
      </Suspense>
    </div>
  );
}

function FeaturedArticlesSkeleton() {
  return (
    <section className="container py-12">
      <Skeleton className="h-12 w-64 mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <Skeleton className="aspect-[16/9] w-full rounded-lg" />
        </div>
        <div className="lg:col-span-4 space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="h-20 w-20 rounded-md flex-shrink-0" />
              <div className="flex-grow space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestArticlesSkeleton() {
  return (
    <section className="container py-12">
      <Skeleton className="h-12 w-64 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="aspect-[16/9] w-full" />
            <div className="p-4 space-y-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryTabsSkeleton() {
  return (
    <section className="container py-12">
      <Skeleton className="h-12 w-64 mb-8" />
      <div className="mb-8 flex gap-2">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-md" />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="aspect-[16/9] w-full" />
            <div className="p-4 space-y-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Article, Category } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArticleCard } from '@/components/ui/article-card';
import { Button } from '@/components/ui/button';

interface CategoryTabsProps {
  categories: Category[];
  articlesByCategory: Record<string, Article[]>;
}

export function CategoryTabs({ categories, articlesByCategory }: CategoryTabsProps) {
  const [activeTab, setActiveTab] = useState(categories[0]?.slug || '');

  return (
    <section className="container py-12">
      <h2 className="font-serif text-3xl font-bold mb-8 after:content-[''] after:block after:w-24 after:h-1 after:bg-primary after:mt-2">
        Explore by Category
      </h2>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 flex flex-wrap h-auto">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.slug}
              value={category.slug}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => {
          const articles = articlesByCategory[category.slug] || [];
          
          return (
            <TabsContent key={category.slug} value={category.slug}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.slice(0, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
              
              {articles.length > 3 && (
                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link href={`/category/${category.slug}`}>
                      View all {category.name} articles
                    </Link>
                  </Button>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}
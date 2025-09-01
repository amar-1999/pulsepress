"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArticleCard } from '@/components/ui/article-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, Loader2 } from 'lucide-react';
import { searchArticles } from '@/lib/api';
import { Article } from '@/types';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) {
      setSearchQuery(query);
      setLoading(true);
      try {
        const articles = await searchArticles(query);
        setResults(articles);
      } catch (error) {
        console.error('Error searching articles:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (initialQuery) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  return (
    <div className="container py-12">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">
        Search Articles
      </h1>
      
      <div className="max-w-2xl mx-auto mb-10">
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="search"
            placeholder="Search articles..."
            className="flex-1"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <SearchIcon className="h-4 w-4 mr-2" />
            )}
            Search
          </Button>
        </form>
      </div>

      {searchQuery && (
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-1">
            {loading ? 'Searching...' : `Search results for "${searchQuery}"`}
          </h2>
          <p className="text-muted-foreground">
            {!loading && `Found ${results.length} result${results.length === 1 ? '' : 's'}`}
          </p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {searchQuery && results.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-xl mb-2">No articles found</p>
          <p className="text-muted-foreground">
            Try a different search term or browse our categories.
          </p>
        </div>
      )}
    </div>
  );
}
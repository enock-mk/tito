// app/(marketing)/resources/documentation/page.tsx
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { docArticles } from '@/data/documentation'; // Changed import
import { SearchForm } from '@/components/forms/SearchForm';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { cn } from '@/lib/utils';
import { BookOpen, Clock, ChevronRight, FileText, Star, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

// Group articles by category
const getCategories = () => {
  const categories: Record<string, { id: string; title: string; articles: typeof docArticles }> = {};
  
  docArticles.forEach((article) => {
    const categoryId = article.category;
    if (!categories[categoryId]) {
      categories[categoryId] = {
        id: categoryId,
        title: categoryId
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        articles: [],
      };
    }
    categories[categoryId].articles.push(article);
  });
  
  return Object.values(categories);
};

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const docCategories = getCategories();

  // Flatten all articles
  const allArticles = docCategories.flatMap((cat) =>
    cat.articles.map((article) => ({
      ...article,
      categoryTitle: cat.title,
      categoryId: cat.id,
    }))
  );

  // Filter articles based on search and category
  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || article.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        title="Documentation"
        description="Comprehensive guides and documentation to help you get the most out of TiTO."
        variant="centered"
        badge="Resources"
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <SearchForm
              placeholder="Search documentation..."
              onSearch={(query) => setSearchQuery(query)}
              variant="expanded"
              autoFocus
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <SlideIn>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all',
                  !selectedCategory
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
                )}
              >
                All Topics
              </button>
              {docCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all',
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
                  )}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </SlideIn>

          {/* Articles */}
          {filteredArticles.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/documentation/${article.slug}`}
                  className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {article.popular && (
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      )}
                      {article.new && (
                        <Badge className="bg-green-500 text-white hover:bg-green-600">
                          New
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-neutral-500">
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="mt-3 font-semibold group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {article.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      {article.categoryTitle}
                    </span>
                    <span className="flex items-center text-sm text-primary">
                      Read more
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-neutral-300" />
              <h3 className="mt-4 text-lg font-semibold">No articles found</h3>
              <p className="text-neutral-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection variant="simple" />
    </>
  );
}
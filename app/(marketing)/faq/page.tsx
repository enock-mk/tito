// app/(marketing)/faq/page.tsx
'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { faqs, faqCategories } from '@/data/faqs';
import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Search, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SlideIn } from '@/components/animations/SlideIn';
import { SearchForm } from '@/components/forms/SearchForm';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Getting Started');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on search and category
  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    // If search query exists, search across all categories
    if (searchQuery) {
      return matchesSearch;
    }
    return matchesCategory;
  });

  // Get unique categories from FAQs for filter display
  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === 'All' ? 'Getting Started' : category);
    setOpenId(null);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setOpenId(null);
  };

  // Count FAQs per category
  const getCategoryCount = (category: string) => {
    if (category === 'All') return faqs.length;
    return faqs.filter(faq => faq.category === category).length;
  };

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about TiTO, our features, pricing, and support."
        badge="Help Center"
        variant="centered"
      />

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <SearchForm
              placeholder="Search FAQs..."
              onSearch={handleSearch}
              variant="expanded"
              autoFocus
            />
            {searchQuery && (
              <p className="mt-2 text-center text-sm text-neutral-500">
                Showing results for `&quos;`{searchQuery}`&quos;`
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-2 text-primary hover:underline"
                >
                  Clear search
                </button>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="flex flex-wrap justify-center gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={cn(
                    'group relative rounded-full px-4 py-2 text-sm font-medium transition-all',
                    selectedCategory === category || (category === 'All' && !selectedCategory)
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
                  )}
                >
                  {category}
                  <span className={cn(
                    'ml-1.5 rounded-full px-1.5 py-0.5 text-xs',
                    selectedCategory === category || (category === 'All' && !selectedCategory)
                      ? 'bg-white/20 text-white'
                      : 'bg-neutral-200 text-neutral-500 dark:bg-neutral-700'
                  )}>
                    {getCategoryCount(category)}
                  </span>
                </button>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-3">
                {filteredFAQs.map((faq, index) => (
                  <SlideIn key={faq.id} delay={index * 0.05}>
                    <div
                      className={cn(
                        'group rounded-2xl border bg-white transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900',
                        openId === faq.id && 'shadow-lg ring-1 ring-primary/20'
                      )}
                    >
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-2xl transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 rounded-full bg-primary/10 p-1.5 text-primary">
                            <HelpCircle className="h-4 w-4" />
                          </div>
                          <span className="font-medium text-neutral-900 dark:text-white">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300',
                            openId === faq.id && 'rotate-180 text-primary'
                          )}
                        />
                      </button>

                      {/* Answer */}
                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-300 ease-in-out',
                          openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        )}
                      >
                        <div className="border-t border-neutral-100 px-6 py-4 dark:border-neutral-800">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 h-5 w-0.5 rounded-full bg-primary/30" />
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                          <div className="mt-3 flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs font-normal">
                              {faq.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SlideIn>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="mx-auto h-12 w-12 text-neutral-300" />
                <h3 className="mt-4 text-lg font-semibold">No FAQs found</h3>
                <p className="text-neutral-500">
                  {searchQuery 
                    ? `No results found for "${searchQuery}". Try a different search term.`
                    : 'No FAQs available for this category.'}
                </p>
                {searchQuery && (
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear Search
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 via-primary/10 to-transparent p-8 text-center dark:border-neutral-800 md:p-12">
              <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <pattern
                    id="faq-grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-primary"
                    />
                  </pattern>
                  <rect width="100" height="100" fill="url(#faq-grid)" />
                </svg>
              </div>

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                  Still Have Questions?
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
                  Our support team is here to help. Reach out and we`&apos;`ll get back to you as soon as possible.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="group">
                      Contact Support
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/resources/help-center">
                    <Button size="lg" variant="outline">
                      Visit Help Center
                    </Button>
                  </Link>
                </div>
                <p className="mt-4 text-sm text-neutral-500">
                  Average response time: 2-4 hours
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      <CTASection variant="default" />
    </>
  );
}
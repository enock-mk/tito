// components/blog/BlogSidebar.tsx
'use client';

import Link from 'next/link';
import { BlogPost } from '@/data/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, TrendingUp, Calendar, Clock } from 'lucide-react';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

interface BlogSidebarProps {
  currentPost?: BlogPost;
  popularPosts?: BlogPost[];
}

export function BlogSidebar({ currentPost, popularPosts = [] }: BlogSidebarProps) {
  // Get 4 popular posts excluding current
  const displayPosts = popularPosts
    .filter((p) => p.id !== currentPost?.id)
    .slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="rounded-2xl border bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="font-semibold">Search</h3>
        <div className="mt-3 flex gap-2">
          <Input
            placeholder="Search articles..."
            className="flex-1"
          />
          <Button variant="default" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-2xl border bg-gradient-to-br from-primary/10 to-primary/5 p-6 dark:border-neutral-800">
        <h3 className="font-semibold">Subscribe to Our Newsletter</h3>
        <p className="mt-1 text-sm text-neutral-500">
          Get the latest posts delivered to your inbox.
        </p>
        <div className="mt-4">
          <NewsletterForm variant="inline" />
        </div>
      </div>

      {/* Popular Posts */}
      {displayPosts.length > 0 && (
        <div className="rounded-2xl border bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="font-semibold">Popular Posts</h3>
          <div className="mt-4 space-y-4">
            {displayPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="flex gap-3">
                  {post.featuredImage && (
                    <div
                      className="h-16 w-16 shrink-0 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.featuredImage})` }}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium group-hover:text-primary line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="mt-1 text-xs text-neutral-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="rounded-2xl border bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="font-semibold">Categories</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Hospitality', 'Transportation', 'Events', 'Fundraising', 'Church', 'Technology'].map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase()}`}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium hover:bg-primary hover:text-white dark:bg-neutral-800 dark:hover:bg-primary"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
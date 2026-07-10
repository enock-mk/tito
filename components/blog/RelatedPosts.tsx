// components/blog/RelatedPosts.tsx
'use client';

import Link from 'next/link';
import { BlogPost } from '@/data/blog';
import { ArrowRight, Calendar } from 'lucide-react';

interface RelatedPostsProps {
  posts: BlogPost[];
  title?: string;
}

export function RelatedPosts({ posts, title = 'Related Posts' }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="border-t pt-8 dark:border-neutral-800">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border bg-white p-4 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h4 className="font-medium group-hover:text-primary line-clamp-2">
              {post.title}
            </h4>
            <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-2 flex items-center gap-3 text-xs text-neutral-500">
              <span>{post.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="mt-2 flex items-center text-sm font-medium text-primary">
              Read more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
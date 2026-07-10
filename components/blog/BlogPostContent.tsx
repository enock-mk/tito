// components/blog/BlogPostContent.tsx
'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlogPostContentProps {
  content: string;
  className?: string;
}

export function BlogPostContent({ content, className }: BlogPostContentProps) {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <div
      className={cn(
        'prose prose-neutral dark:prose-invert max-w-none',
        'prose-headings:font-bold prose-headings:tracking-tight',
        'prose-h2:text-2xl prose-h2:mt-8',
        'prose-h3:text-xl prose-h3:mt-6',
        'prose-p:text-neutral-700 dark:prose-p:text-neutral-300',
        'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
        'prose-ul:list-disc prose-ul:space-y-1',
        'prose-ol:list-decimal prose-ol:space-y-1',
        'prose-li:text-neutral-700 dark:prose-li:text-neutral-300',
        'prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4 prose-blockquote:rounded-lg',
        'prose-img:rounded-xl prose-img:shadow-lg',
        'prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:p-1 prose-code:rounded',
        'prose-pre:bg-neutral-900 prose-pre:text-white',
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
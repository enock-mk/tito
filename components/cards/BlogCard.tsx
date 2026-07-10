// components/cards/BlogCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blog';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  // Get first 3 tags for display
  const displayTags = post.tags.slice(0, 3);
  const remainingTags = post.tags.length - 3;

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (isFeatured) {
    return (
      <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-main-yellow-300 hover:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] dark:border-slate-700 dark:bg-slate-900">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative h-64 w-full overflow-hidden md:h-80">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {post.featured && (
              <span className="absolute left-4 top-4 rounded-full bg-main-yellow-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-main-yellow-900">
                Featured
              </span>
            )}
          </div>
        )}

        <div className="p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-main-yellow-600">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-main-yellow-50 px-3 py-1 text-main-yellow-700 dark:bg-main-yellow-500/10 dark:text-main-yellow-200"
              >
                {tag}
              </span>
            ))}
            {remainingTags > 0 && (
              <span className="rounded-full bg-main-yellow-50 px-3 py-1 text-main-yellow-700 dark:bg-main-yellow-500/10 dark:text-main-yellow-200">
                +{remainingTags}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="mt-6 text-2xl font-semibold text-slate-950 transition-colors group-hover:text-main-yellow-600 dark:text-white">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              )}
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {post.author.name}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>
          </div>

          {/* Read More */}
          <Link
            href={`/blog/${post.slug}`}
            className="mt-6 inline-flex items-center text-sm font-semibold text-main-yellow-600 transition hover:text-main-yellow-700"
          >
            Read article
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    );
  }

  if (isCompact) {
    return (
      <article className="group rounded-[1.5rem] border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-main-yellow-300 hover:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.12)] dark:border-slate-700 dark:bg-slate-900">
        <div className="flex gap-4">
          {/* Thumbnail */}
          {post.featuredImage && (
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-main-yellow-600">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-main-yellow-50 px-2 py-0.5 text-main-yellow-700 dark:bg-main-yellow-500/10 dark:text-main-yellow-200"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="rounded-full bg-main-yellow-50 px-2 py-0.5 text-main-yellow-700 dark:bg-main-yellow-500/10 dark:text-main-yellow-200">
                  +{post.tags.length - 2}
                </span>
              )}
            </div>

            {/* Title */}
            <h4 className="mt-1 text-sm font-semibold text-slate-950 transition-colors group-hover:text-main-yellow-600 dark:text-white line-clamp-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h4>

            {/* Meta */}
            <div className="mt-1 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {post.author.name}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-main-yellow-300 hover:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] dark:border-slate-700 dark:bg-slate-900">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-main-yellow-600">
        {displayTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-main-yellow-50 px-3 py-1 text-main-yellow-700 dark:bg-main-yellow-500/10 dark:text-main-yellow-200"
          >
            {tag}
          </span>
        ))}
        {remainingTags > 0 && (
          <span className="rounded-full bg-main-yellow-50 px-3 py-1 text-main-yellow-700 dark:bg-main-yellow-500/10 dark:text-main-yellow-200">
            +{remainingTags}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-semibold text-slate-950 transition-colors group-hover:text-main-yellow-600 dark:text-white">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Author & Meta */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          {post.author.avatar && (
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full"
            />
          )}
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {post.author.name}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>
      </div>

      {/* Read More */}
      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex items-center text-sm font-semibold text-main-yellow-600 transition hover:text-main-yellow-700"
      >
        Read article
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
// components/cards/BlogCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blog';
import { Calendar, Clock, User, ArrowRight, Tag, Eye, Heart, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  index?: number;
}

export function BlogCard({ post, variant = 'default', index = 0 }: BlogCardProps) {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.05 },
    },
  };

  if (isFeatured) {
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-500 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
      >
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative h-72 w-full overflow-hidden md:h-96">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {post.featured && (
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                Featured
              </span>
            )}
            {/* Category Badge */}
            <span className="absolute bottom-4 left-4 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
              {post.category}
            </span>
          </div>
        )}

        <div className="p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
              >
                {tag}
              </span>
            ))}
            {remainingTags > 0 && (
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                +{remainingTags}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-primary dark:text-white">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 pt-6 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full ring-2 ring-primary/10"
                />
              )}
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
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
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Read article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.article>
    );
  }

  if (isCompact) {
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="group rounded-xl border bg-white p-4 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="flex gap-4">
          {/* Thumbnail */}
          {post.featuredImage && (
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                  +{post.tags.length - 2}
                </span>
              )}
            </div>

            {/* Title */}
            <h4 className="mt-1.5 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-primary dark:text-white line-clamp-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h4>

            {/* Meta */}
            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
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
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Default variant
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {displayTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {tag}
          </span>
        ))}
        {remainingTags > 0 && (
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            +{remainingTags}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-primary dark:text-white">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Author & Meta */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
        <div className="flex items-center gap-2.5">
          {post.author.avatar && (
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full ring-2 ring-primary/10"
            />
          )}
          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              {post.author.name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-neutral-500">
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
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
      >
        Read article
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>

      {/* Hover Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
    </motion.article>
  );
}
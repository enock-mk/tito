'use client';

import { blogPosts } from '@/data/blog';
import { BlogCard } from '@/components/cards/BlogCard';

export function BlogSection() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-main-yellow-600">Blog</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Industry insights for ticketing and hospitality leaders.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore stories, trends, and product best practices from the TiTO team.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

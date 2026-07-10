// components/blog/BlogPostHeader.tsx
'use client';

import { Calendar, Clock, User, Tag, Eye, Heart, MessageSquare } from 'lucide-react';
import { BlogPost } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="space-y-6">
      {/* Category */}
      <div className="flex items-center gap-3">
        <Badge className="bg-primary text-white hover:bg-primary/90">
          {post.category}
        </Badge>
        {post.featured && (
          <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
            Featured
          </Badge>
        )}
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-neutral-900 dark:text-white">
            {post.author.name}
          </span>
        </div>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {post.readingTime}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Stats */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
        <span className="flex items-center gap-1">
          <Eye className="h-4 w-4" />
          {post.views.toLocaleString()} views
        </span>
        <span className="flex items-center gap-1">
          <Heart className="h-4 w-4" />
          {post.likes} likes
        </span>
        <span className="flex items-center gap-1">
          <MessageSquare className="h-4 w-4" />
          {post.comments} comments
        </span>
      </div>
    </header>
  );
}
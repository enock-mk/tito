// components/shared/AuthorBio.tsx
'use client';

import { BlogAuthor } from '@/data/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Check } from 'lucide-react';

interface AuthorBioProps {
  author: BlogAuthor;
  className?: string;
}

export function AuthorBio({ author, className }: AuthorBioProps) {
  return (
    <div className={`rounded-2xl border bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 ${className}`}>
      <div className="flex gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="text-lg">{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h4 className="font-semibold">{author.name}</h4>
          <p className="text-sm text-neutral-500">{author.role}</p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {author.bio}
          </p>
          <div className="mt-2 flex gap-2">
            {author.social?.twitter && (
              <a
                href={`https://twitter.com/${author.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#1DA1F2]"
              >
                <Check className="h-4 w-4" />
              </a>
            )}
            {author.social?.linkedin && (
              <a
                href={`https://linkedin.com/in/${author.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#0A66C2]"
              >
                <Check className="h-4 w-4" />
              </a>
            )}
            {author.social?.github && (
              <a
                href={`https://github.com/${author.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              >
                <Check className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
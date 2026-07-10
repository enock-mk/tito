// components/shared/ShareButtons.tsx
'use client';

import {  Link2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
  className?: string;
}

export function ShareButtons({ title, url, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title,
    url: typeof window !== 'undefined' ? `${window.location.origin}${url}` : url,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Check,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareData.url)}`,
      color: 'hover:bg-[#1DA1F2] hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Check,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`,
      color: 'hover:bg-[#0A66C2] hover:text-white',
    },
    {
      name: 'Facebook',
      icon: Check,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`,
      color: 'hover:bg-[#1877F2] hover:text-white',
    },
  ];

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-neutral-500">Share:</span>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg p-2 transition-colors ${link.color}`}
          >
            <link.icon className="h-4 w-4" />
          </a>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="gap-1 text-sm"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
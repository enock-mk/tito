// app/(marketing)/media-kit/page.tsx
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { mediaKitItems } from '@/data/pages';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Download, FileType, File, Image as ImageIcon, Video, FileText, Palette } from 'lucide-react';
import Link from 'next/link';


export default function MediaKitPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const types = ['all', 'Image', 'Document', 'Video', 'Archive'];
  
  const filteredItems = selectedType
    ? mediaKitItems.filter((item) => {
        const itemType = item.type.includes('SVG') ? 'Image' :
                        item.type.includes('PDF') || item.type.includes('DOCX') ? 'Document' :
                        item.type.includes('MP4') ? 'Video' :
                        item.type.includes('ZIP') ? 'Archive' : 'Other';
        return itemType === selectedType;
      })
    : mediaKitItems;

  const getIconForType = (type: string) => {
    if (type.includes('SVG') || type.includes('PNG') || type.includes('JPG')) return ImageIcon;
    if (type.includes('PDF') || type.includes('DOCX')) return FileText;
    if (type.includes('MP4')) return Video;
    if (type.includes('ZIP')) return File;
    return File;
  };

  return (
    <>
      <PageHeader
        title="Media Kit"
        description="Download official TiTO logos, images, and brand assets for use in your media and promotional materials."
        variant="centered"
        badge="Resources"
      />

      {/* Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="flex flex-wrap justify-center gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type === 'all' ? null : type)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    (selectedType === null && type === 'all') || selectedType === type
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Media Kit Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => {
              const Icon = getIconForType(item.type);
              return (
                <div
                  key={item.id}
                  className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-neutral-500">{item.size}</span>
                  </div>

                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-neutral-500">{item.type}</span>
                    <Link href={item.downloadUrl} download>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <File className="mx-auto h-12 w-12 text-neutral-300" />
              <h3 className="mt-4 text-lg font-semibold">No items found</h3>
              <p className="text-neutral-500">Try selecting a different filter.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection variant="simple" />
    </>
  );
}
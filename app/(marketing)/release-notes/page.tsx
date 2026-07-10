// app/(marketing)/resources/release-notes/page.tsx
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { releaseNotes } from '@/data/resources';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  GitBranch,
  CheckCircle,
  TrendingUp,
  Bug,
  AlertTriangle,
  Calendar,
  Download,
  ExternalLink,
  Sparkles,
  Rocket,
  RefreshCw,
  Shield,
} from 'lucide-react';


export default function ReleaseNotesPage() {
  const [filterType, setFilterType] = useState<string | null>(null);

  const types = ['all', 'major', 'minor', 'patch', 'beta'];
  
  const filteredNotes = filterType
    ? releaseNotes.filter((note) => note.type === filterType)
    : releaseNotes;

  const getTypeIcon = (type: string) => {
    const icons = {
      major: Rocket,
      minor: TrendingUp,
      patch: Bug,
      beta: Sparkles,
    };
    return icons[type as keyof typeof icons] || GitBranch;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      major: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      minor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      patch: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      beta: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    };
    return colors[type as keyof typeof colors] || 'bg-neutral-100 text-neutral-700';
  };

  return (
    <>
      <PageHeader
        title="Release Notes"
        description="Stay up to date with the latest TiTO releases and updates."
        variant="centered"
        badge="Changelog"
      />

      {/* Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="flex flex-wrap justify-center gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type === 'all' ? null : type)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium capitalize transition-all',
                    (filterType === null && type === 'all') || filterType === type
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Release Notes */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            {filteredNotes.map((note, index) => {
              const Icon = getTypeIcon(note.type);
              return (
                <SlideIn key={note.id} delay={index * 0.1}>
                  <div className="rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                    {/* Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
                            getTypeColor(note.type)
                          )}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-xl font-bold">
                              {note.version}
                            </h3>
                            <Badge className={cn('font-normal capitalize', getTypeColor(note.type))}>
                              {note.type}
                            </Badge>
                            {note.type === 'major' && (
                              <Badge className="bg-primary/10 text-primary font-normal">
                                <Rocket className="mr-1 h-3 w-3" />
                                Major Release
                              </Badge>
                            )}
                          </div>
                          <p className="mt-1 text-lg font-medium">{note.title}</p>
                          <div className="mt-1 flex items-center gap-2 text-sm text-neutral-500">
                            <Calendar className="h-4 w-4" />
                            {new Date(note.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </div>
                        </div>
                      </div>
                      {note.downloadUrl && (
                        <Button variant="outline" size="sm" className="shrink-0">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      )}
                    </div>

                    {/* Description */}
                    {note.description && (
                      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                        {note.description}
                      </p>
                    )}

                    {/* Features */}
                    {note.features && note.features.length > 0 && (
                      <div className="mt-4">
                        <h4 className="flex items-center gap-2 text-sm font-semibold">
                          <Sparkles className="h-4 w-4 text-primary" />
                          New Features
                        </h4>
                        <ul className="mt-2 space-y-1">
                          {note.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Improvements */}
                    {note.improvements && note.improvements.length > 0 && (
                      <div className="mt-4">
                        <h4 className="flex items-center gap-2 text-sm font-semibold">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          Improvements
                        </h4>
                        <ul className="mt-2 space-y-1">
                          {note.improvements.map((improvement) => (
                            <li
                              key={improvement}
                              className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Fixes */}
                    {note.fixes && note.fixes.length > 0 && (
                      <div className="mt-4">
                        <h4 className="flex items-center gap-2 text-sm font-semibold">
                          <Bug className="h-4 w-4 text-yellow-500" />
                          Bug Fixes
                        </h4>
                        <ul className="mt-2 space-y-1">
                          {note.fixes.map((fix) => (
                            <li
                              key={fix}
                              className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                              {fix}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Breaking Changes */}
                    {note.breaking && note.breaking.length > 0 && (
                      <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/10">
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-400">
                          <AlertTriangle className="h-4 w-4" />
                          Breaking Changes
                        </h4>
                        <ul className="mt-2 space-y-1">
                          {note.breaking.map((change) => (
                            <li
                              key={change}
                              className="flex items-start gap-2 text-sm text-red-600 dark:text-red-300"
                            >
                              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                              {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* View Details Link */}
                    <div className="mt-4 pt-4 border-t dark:border-neutral-800">
                      <button className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                        View full details
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </SlideIn>
              );
            })}

            {filteredNotes.length === 0 && (
              <div className="text-center py-12">
                <GitBranch className="mx-auto h-12 w-12 text-neutral-300" />
                <h3 className="mt-4 text-lg font-semibold">No release notes found</h3>
                <p className="text-neutral-500">Try selecting a different filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection variant="simple" />
    </>
  );
}
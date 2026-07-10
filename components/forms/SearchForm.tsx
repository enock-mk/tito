// components/forms/SearchForm.tsx
'use client';

import { useEffect, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import  {zodResolver}  from '@hookform/resolvers/zod';
import { searchFormSchema, SearchFormValues } from '@/lib/forms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchFormProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string, category?: string) => void;
  onClose?: () => void;
  autoFocus?: boolean;
  variant?: 'default' | 'expanded' | 'compact';
}

export function SearchForm({
  className,
  placeholder = 'Search documentation, features, solutions...',
  onSearch,
  onClose,
  autoFocus = false,
  variant = 'default',
}: SearchFormProps) {
  const isExpanded = variant === 'expanded';
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
      category: 'all',
    },
  });

  const query = useWatch({
    control,
    name: 'query',
  });

  const category = useWatch({
    control,
    name: 'category',
  });

  const onSubmit = (data: SearchFormValues) => {
    if (onSearch) {
      onSearch(data.query, data.category);
    }
    reset();
    if (onClose) {
      onClose();
    }
  };

  const handleClear = () => {
    setValue('query', '');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (onClose) {
        onClose();
      }
      reset();
    }
  };

  // Auto-focus when expanded
  useEffect(() => {
    if (variant === 'expanded' && autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [variant, autoFocus]);

  const categories: { value: SearchFormValues['category']; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'platform', label: 'Platform' },
    { value: 'solutions', label: 'Solutions' },
    { value: 'industries', label: 'Industries' },
    { value: 'blog', label: 'Blog' },
    { value: 'documentation', label: 'Documentation' },
  ];

  if (variant === 'compact') {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('relative', className)}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <Input
            {...register('query')}
            ref={inputRef}
            type="search"
            placeholder={placeholder}
            className="pl-9 pr-20"
            onKeyDown={handleKeyDown}
            autoFocus={autoFocus}
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="rounded-md p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <X className="h-4 w-4 text-neutral-400" />
              </button>
            )}
            <Button
              type="submit"
              size="sm"
              className="h-7 text-xs"
              disabled={!query}
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-4', className)}
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
        <Input
          {...register('query')}
          ref={inputRef}
          type="search"
          placeholder={placeholder}
          className={cn(
            'pl-10 pr-10',
            variant === 'expanded' && 'h-12 text-lg',
            errors.query && 'border-red-500'
          )}
          onKeyDown={handleKeyDown}
          autoFocus={autoFocus}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <X className="h-4 w-4 text-neutral-400" />
          </button>
        )}
        {errors.query && (
          <p className="mt-1 text-sm text-red-500">{errors.query.message}</p>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-neutral-500">Filter by:</span>
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setValue('category', cat.value)}
            className={cn(
              'rounded-full px-3 py-1 text-xs font-medium transition-all',
              category === cat.value
                ? 'bg-primary text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <Button type="submit" className="w-full" disabled={!query}>
        Search
      </Button>
    </form>
  );
}
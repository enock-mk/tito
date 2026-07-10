// components/shared/PageHeader.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface Breadcrumb {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
  variant?: 'default' | 'centered' | 'minimal' | 'with-image';
  image?: string;
  badge?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  noPadding?: boolean; 
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  className,
  variant = 'default',
  image,
  badge,
  actions,
  children,
  noPadding = false,
}: PageHeaderProps) {
  const pathname = usePathname();

  // Auto-generate breadcrumbs if not provided
  const autoBreadcrumbs = !breadcrumbs && pathname
    ? generateBreadcrumbs(pathname)
    : breadcrumbs;

  const renderContent = () => {
    switch (variant) {
      case 'centered':
        return <CenteredHeader title={title} description={description} badge={badge} actions={actions} />;
      case 'minimal':
        return <MinimalHeader title={title} description={description} />;
      case 'with-image':
        return <ImageHeader title={title} description={description} image={image} badge={badge} />;
      default:
        return <DefaultHeader title={title} description={description} badge={badge} actions={actions} />;
    }
  };

  return (
    <header
      className={cn(
        'border-b bg-neutral-50/50 dark:bg-neutral-900/50',
        variant === 'with-image' && 'border-0',
        !noPadding && 'py-16 md:py-20 ',
        className
      )}
    >
      {/* Breadcrumbs */}
      {autoBreadcrumbs && (
        <div className="container mx-auto px-4 pt-4">
          <BreadcrumbNav items={autoBreadcrumbs} />
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {renderContent()}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  );
}

// Sub-components
function DefaultHeader({ 
  title, 
  description, 
  badge, 
  actions 
}: Pick<PageHeaderProps, 'title' | 'description' | 'badge' | 'actions'>) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        {badge && (
          <span className="inline-flex items-center rounded-full border bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {badge}
          </span>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex-shrink-0">{actions}</div>}
    </div>
  );
}

function CenteredHeader({ 
  title, 
  description, 
  badge, 
  actions 
}: Pick<PageHeaderProps, 'title' | 'description' | 'badge' | 'actions'>) {
  return (
    <div className="flex flex-col items-center text-center">
      {badge && (
        <span className="inline-flex items-center rounded-full border bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {badge}
        </span>
      )}
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-2 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
      {actions && <div className="mt-4">{actions}</div>}
    </div>
  );
}

function MinimalHeader({ 
  title, 
  description 
}: Pick<PageHeaderProps, 'title' | 'description'>) {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}

function ImageHeader({ 
  title, 
  description, 
  image, 
  badge 
}: Pick<PageHeaderProps, 'title' | 'description' | 'image' | 'badge'>) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white md:p-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <pattern
            id="header-grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#header-grid)" />
        </svg>
      </div>

      {/* Image */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      <div className="relative">
        {badge && (
          <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {badge}
          </span>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-2xl text-lg text-white/90">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Breadcrumb Navigation
function BreadcrumbNav({ items }: { items: Breadcrumb[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className="flex items-center text-neutral-500 transition-colors hover:text-primary dark:text-neutral-400"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-neutral-300 dark:text-neutral-600" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-neutral-500 transition-colors hover:text-primary dark:text-neutral-400"
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-neutral-900 dark:text-white">
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbs(pathname: string): Breadcrumb[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: Breadcrumb[] = [];

  let currentPath = '';
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbs.push({
      label,
      href: currentPath,
    });
  });

  return breadcrumbs;
}
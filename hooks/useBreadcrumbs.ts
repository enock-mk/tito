// hooks/useBreadcrumbs.ts
'use client';

import { usePathname } from 'next/navigation';
import { Breadcrumb } from '@/components/shared/PageHeader';

export function useBreadcrumbs(customMapping?: Record<string, string>): Breadcrumb[] {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs: Breadcrumb[] = [];
  let currentPath = '';

  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    let label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Apply custom mapping if provided
    if (customMapping && customMapping[segment]) {
      label = customMapping[segment];
    }

    breadcrumbs.push({
      label,
      href: currentPath,
    });
  });

  return breadcrumbs;
}
// components/navigation/NavItem.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { NavItem as NavItemType } from '@/data/navigation';

interface NavItemProps {
  item: NavItemType;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export function NavItem({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: NavItemProps) {
  const pathname = usePathname();
  const isCurrent = pathname === item.href;

  if (item.megaMenu) {
    return (
      <button
        className={cn(
          'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          'hover:bg-neutral-100 dark:hover:bg-neutral-800',
          isActive && 'bg-neutral-100 dark:bg-neutral-800'
        )}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            isActive && 'rotate-180'
          )}
        />
      </button>
    );
  }

  if (item.dropdown) {
    return (
      <div className="relative">
        <button
          className={cn(
            'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            'hover:bg-neutral-100 dark:hover:bg-neutral-800'
          )}
          onClick={onClick}
        >
          {item.label}
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        'hover:bg-neutral-100 dark:hover:bg-neutral-800',
        isCurrent && 'bg-neutral-100 text-primary dark:bg-neutral-800'
      )}
    >
      {item.label}
    </Link>
  );
}
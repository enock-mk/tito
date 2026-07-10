// components/dashboard/DashboardSidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { sidebarItems, SidebarItem } from '@/data/dashboard';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, LogOut } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DashboardSidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export function DashboardSidebar({
  className,
  isOpen = true,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Bookings']);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const renderSidebarItem = (item: SidebarItem, depth: number = 0) => {
    const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.label);
    const Icon = item.icon;

    return (
      <div key={item.href || item.label}>
        <Link
          href={item.href}
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.label);
            }
            if (onClose) {
              onClose();
            }
          }}
          className={cn(
            'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
            'hover:bg-neutral-100 dark:hover:bg-neutral-800',
            isActive
              ? 'bg-primary/10 text-primary hover:bg-primary/15 dark:bg-primary/20'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
            depth > 0 && 'ml-4'
          )}
        >
          <Icon
            className={cn(
              'h-5 w-5 shrink-0',
              isActive ? 'text-primary' : 'text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'
            )}
          />
          <span className="flex-1">{item.label}</span>
          {item.badge && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {item.badge}
            </span>
          )}
          {hasChildren && (
            <span className="ml-auto">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </span>
          )}
        </Link>

        {hasChildren && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-1 space-y-0.5">
              {item.children?.map((child) => renderSidebarItem(child, depth + 1))}
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r bg-white dark:border-neutral-800 dark:bg-neutral-950',
        !isOpen && '-translate-x-full',
        className
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-4 dark:border-neutral-800">
        <Logo />
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {sidebarItems.map((item) => renderSidebarItem(item))}
        </nav>
      </ScrollArea>

      {/* Bottom Actions */}
      <div className="border-t p-4 dark:border-neutral-800">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Button>
      </div>
    </aside>
  );
}
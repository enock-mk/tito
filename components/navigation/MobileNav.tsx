// components/navigation/MobileNav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LayoutDashboard, LogIn, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mainNavItems, megaMenuData } from '@/data/navigation';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const toggleItem = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[87.5] bg-background text-foreground dark:bg-slate-950 dark:text-slate-100"
      >
        <div className="flex h-full flex-col bg-background text-foreground dark:bg-slate-950 dark:text-slate-100">
          <div className="flex items-center justify-between border-b pb-4 dark:border-neutral-800">
            <span className="text-lg font-bold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMenu}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2">
              {mainNavItems.map((item) => {
                const isExpanded = expandedItems.includes(item.label);
                const isActive = pathname === item.href;
                const sections = item.megaMenu ? megaMenuData[item.label] : undefined;
                const hasChildren =
                  (item.dropdown && item.items?.length) ||
                  (item.megaMenu && sections?.length);

                if (hasChildren) {
                  return (
                    <li key={item.label}>
                      <button
                        className={cn(
                          'flex w-full min-w-0 items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                          'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                          isActive && 'bg-neutral-100 dark:bg-neutral-800'
                        )}
                        onClick={() => toggleItem(item.label)}
                      >
                        <span className="truncate">{item.label}</span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            isExpanded && 'rotate-180'
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {sections ? (
                              <div className="space-y-4 px-3 pt-2">
                                {sections.map((section) => (
                                  <div key={section.title}>
                                    <p className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                      {section.title}
                                    </p>
                                    <ul className="space-y-1">
                                      {section.items.map((subItem) => (
                                        <li key={subItem.label}>
                                          <Link
                                            href={subItem.href}
                                            className="block w-full rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-neutral-100 dark:text-foreground dark:hover:bg-neutral-800"
                                            onClick={closeMenu}
                                          >
                                            {subItem.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <ul className="ml-4 mt-2 space-y-1 border-l pl-3 dark:border-neutral-800">
                                {item.items?.map((subItem) => (
                                  <li key={subItem.label}>
                                    <Link
                                      href={subItem.href}
                                      className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-neutral-100 dark:text-foreground dark:hover:bg-neutral-800"
                                      onClick={closeMenu}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                        isActive && 'bg-neutral-100 text-primary dark:bg-neutral-800'
                      )}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t pt-4 dark:border-neutral-800">
            <div className="space-y-3">
              {/*<Link href="/auth/login" onClick={closeMenu}>
                <Button variant="outline" className="w-full">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
              */}

              <Link href="/partner" onClick={closeMenu}>
                <Button className="w-full">Become a Partner</Button>
              </Link>

              <Link href="/book-demo" onClick={closeMenu}>
                <Button variant="outline" className="w-full">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
// components/navigation/MegaMenu.tsx
'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { megaMenuData } from '@/data/navigation';

interface MegaMenuProps {
  activeMenu: string | null;
  onClose: () => void;
}

export function MegaMenu({ activeMenu, onClose }: MegaMenuProps) {
  if (!activeMenu || !megaMenuData[activeMenu]) return null;

  const sections = megaMenuData[activeMenu];

  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="absolute left-0 top-full w-full z-50 border-t bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
                          onClick={onClose}
                        >
                          <div className="flex-1">
                            <div className="font-medium group-hover:text-primary">
                              {item.label}
                            </div>
                            
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
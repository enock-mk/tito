// components/navigation/Dropdown.tsx
'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DropdownItem } from '@/data/navigation';

interface DropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Dropdown({ items, isOpen, onClose, className }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className={cn(
            'absolute left-0 top-full pt-2',
            className
          )}
          onMouseLeave={onClose}
        >
          <div className="min-w-[200px] rounded-lg border bg-white p-2 shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
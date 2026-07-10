// components/shared/PageHeaderAnimated.tsx
'use client';

import { motion } from 'framer-motion';
import { PageHeader, PageHeaderProps } from './PageHeader';
import { cn } from '@/lib/utils';

interface PageHeaderAnimatedProps extends PageHeaderProps {
  animationDelay?: number;
}

export function PageHeaderAnimated({
  className,
  animationDelay = 0,
  ...props
}: PageHeaderAnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className={cn(className)}
    >
      <PageHeader {...props} />
    </motion.div>
  );
}
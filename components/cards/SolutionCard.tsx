'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef, useState } from 'react';
import type { SpringOptions } from 'motion/react';

interface SolutionCardProps {
  solution: {
    id: string;
    name: string;
    description: string;
    icon: string;
    accent: string;
    features?: string[];
    stats?: string;
    category?: string;
  };
  index?: number;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export function SolutionCard({ solution, index = 0 }: SolutionCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isPressedRef = useRef(false);

  // Motion values for tilt effect
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || isPressedRef.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotateAmplitude = 8;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    setIsHovered(true);
    if (!isPressedRef.current) {
      scale.set(1.02);
    }
  }

  function handleMouseLeave() {
    setIsHovered(false);
    isPressedRef.current = false;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  function handleMouseDown() {
    isPressedRef.current = true;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  function handleMouseUp() {
    isPressedRef.current = false;
    if (isHovered) {
      scale.set(1.02);
    }
  }

  return (
    <div
      ref={ref}
      className="group relative h-full cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Link href={`/solutions/${solution.id}`} className="block h-full">
        <motion.div
          className="h-full rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 md:p-8"
          style={{
            rotateX,
            rotateY,
            scale,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Gradient Background on Hover */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Icon */}
          <div
            className={cn(
              'inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl',
              solution.accent
            )}
          >
            {solution.icon}
          </div>

          {/* Badge (Optional) */}
          {/*{solution.stats && (
            <span className="ml-3 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {solution.stats}
            </span>
          )} */}

          {/* Title */}
          <h3 className="mt-4 text-xl font-bold tracking-tight group-hover:text-primary md:text-2xl">
            {solution.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
            {solution.description}
          </p>

          {/* Features Preview */}
          {solution.features && solution.features.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {solution.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {feature}
                </span>
              ))}
              {solution.features.length > 3 && (
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                  +{solution.features.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* CTA - Visual indicator */}
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
            View solution
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>

          {/* Hover Glow */}
          <div
            className={cn(
              'absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20',
              solution.accent
            )}
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      </Link>
    </div>
  );
}
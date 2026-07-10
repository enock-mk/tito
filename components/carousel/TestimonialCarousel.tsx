// components/carousel/TestimonialCarousel.tsx
'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  className?: string;
  variant?: 'default' | 'featured' | 'compact';
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export function TestimonialCarousel({
  testimonials,
  className,
  variant = 'default',
  autoplay = true,
  autoplaySpeed = 5000,
}: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  
  // Use refs to track initialization and prevent duplicate state updates
  const isInitialized = useRef(false);
  const isUpdating = useRef(false);
  const autoplayRef = useRef<number | null>(null); // Use number | null for browser compatibility

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle select events from Embla - this is a callback, so setState is fine here
  const onSelect = useCallback(() => {
    if (!emblaApi || isUpdating.current) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Initialize Embla and set up event listeners - only runs once
  useEffect(() => {
    if (!emblaApi || isInitialized.current) return;

    // Mark as initializing to prevent any state updates during setup
    isUpdating.current = true;

    // Get initial values
    const snapList = emblaApi.scrollSnapList();
    const initialSnap = emblaApi.selectedScrollSnap();

    // Batch all state updates together
    setScrollSnaps(snapList);
    setSelectedIndex(initialSnap);
    
    // Mark as initialized
    isInitialized.current = true;
    isUpdating.current = false;

    // Subscribe to select events
    emblaApi.on('select', onSelect);

    // Cleanup
    return () => {
      emblaApi.off('select', onSelect);
      isInitialized.current = false;
    };
  }, [emblaApi, onSelect]);

  // Update scroll snaps when emblaApi changes - but only if not updating
  useEffect(() => {
    if (!emblaApi || isUpdating.current || !isInitialized.current) return;
    
    const snapList = emblaApi.scrollSnapList();
    setScrollSnaps(snapList);
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || !emblaApi || !isInitialized.current) return;

    // Clear any existing interval
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }

    autoplayRef.current = window.setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, autoplaySpeed);

    return () => {
      if (autoplayRef.current !== null) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [autoplay, autoplaySpeed, emblaApi]);

  // Pause autoplay on hover
  const handleMouseEnter = useCallback(() => {
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!autoplay || !emblaApi || !isInitialized.current) return;

    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }

    autoplayRef.current = window.setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, autoplaySpeed);
  }, [autoplay, autoplaySpeed, emblaApi]);

  return (
    <div 
      className={cn('relative', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                'flex min-w-0 flex-[0_0_100%] items-center justify-center px-4',
                'md:flex-[0_0_50%]',
                'lg:flex-[0_0_33.333%]'
              )}
            >
              <TestimonialCard
                testimonial={testimonial}
                variant={variant}
                index={index}
                className={cn(
                  'h-full w-full transition-opacity duration-300',
                  index === selectedIndex ? 'opacity-100' : 'opacity-60'
                )}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="h-10 w-10 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white dark:bg-neutral-900 dark:hover:bg-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700'
              )}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="h-10 w-10 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white dark:bg-neutral-900 dark:hover:bg-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Active Quote Indicator */}
      <div className="mt-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm text-neutral-500 dark:text-neutral-400"
          >
            {testimonials[selectedIndex]?.name} · {testimonials[selectedIndex]?.company}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
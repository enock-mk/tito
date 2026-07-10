// components/carousel/MultiDeviceCarousel.tsx
'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LaptopMockup } from '@/components/showcase/LaptopMockup';
import { TabletMockup } from '@/components/showcase/TabletMockup';
import { PhoneMockup } from '@/components/showcase/PhoneMockup';
import { DashboardImage } from '@/data/showcase';

interface MultiDeviceCarouselProps {
  dashboards: DashboardImage[];
  className?: string;
}

export function MultiDeviceCarousel({
  dashboards,
  className,
}: MultiDeviceCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  
  // Use refs to track initialization and prevent duplicate state updates
  const isInitialized = useRef(false);
  const isUpdating = useRef(false);

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

  const renderDevice = (dashboard: DashboardImage) => {
    const commonProps = {
      src: dashboard.image,
      alt: dashboard.title,
      title: dashboard.title,
    };

    switch (dashboard.device) {
      case 'laptop':
        return <LaptopMockup {...commonProps} className="w-full max-w-2xl" />;
      case 'tablet':
        return <TabletMockup {...commonProps} className="max-w-sm" />;
      case 'phone':
        return <PhoneMockup {...commonProps} className="max-w-xs" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {dashboards.map((dashboard, index) => (
            <div
              key={dashboard.id}
              className={cn(
                'flex min-w-0 flex-[0_0_100%] items-center justify-center px-4',
                index === selectedIndex ? 'opacity-100' : 'opacity-50'
              )}
            >
              {renderDevice(dashboard)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white dark:bg-neutral-900 dark:hover:bg-primary"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white dark:bg-neutral-900 dark:hover:bg-primary"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
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

      {/* Info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-4 text-center"
        >
          <h4 className="text-lg font-semibold">
            {dashboards[selectedIndex]?.title}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {dashboards[selectedIndex]?.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
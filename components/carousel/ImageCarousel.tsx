"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/*
    import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Framer Motion Carousel</h1>
      <ImageCarousel images={images} />
    </main>
  );
}

*/

// Props for the carousel
interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  // Wrap index to loop images
  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <div className="relative h-64">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[imageIndex]}
              alt={`Slide ${imageIndex + 1}`}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}

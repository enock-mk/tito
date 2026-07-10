"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/*
    import ProductCarousel from "@/components/ProductCarousel";

const products = [
  { id: 1, name: "Wireless Headphones", image: "/images/headphones.jpg", price: "$99" },
  { id: 2, name: "Smart Watch", image: "/images/watch.jpg", price: "$149" },
  { id: 3, name: "Gaming Mouse", image: "/images/mouse.jpg", price: "$59" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <ProductCarousel products={products} />
    </main>
  );
}

*/

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <div className="flex justify-between absolute top-1/2 w-full px-4 z-10">
        <button
          onClick={prevSlide}
          className="bg-white/80 hover:bg-white text-gray-800 px-3 py-1 rounded-full shadow"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/80 hover:bg-white text-gray-800 px-3 py-1 rounded-full shadow"
        >
          ▶
        </button>
      </div>

      <div className="relative h-64">
        <AnimatePresence mode="wait">
          <motion.div
            key={products[index].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4"
          >
            <Image
              src={products[index].image}
              alt={products[index].name}
              className="w-40 h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{products[index].name}</h3>
            <p className="text-gray-600">{products[index].price}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

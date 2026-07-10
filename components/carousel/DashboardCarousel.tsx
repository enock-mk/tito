"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/*
    import DashboardCarousel from "@/components/DashboardCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <DashboardCarousel />
    </main>
  );
}

*/

interface Slide {
  id: number;
  title: string;
  description: string;
  color: string;
}

const slides: Slide[] = [
  { id: 1, title: "Analytics", description: "Track your KPIs in real time", color: "bg-blue-500" },
  { id: 2, title: "Sales", description: "Monitor revenue and growth", color: "bg-green-500" },
  { id: 3, title: "Users", description: "Manage your customer base", color: "bg-purple-500" },
];

export default function DashboardCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 flex flex-col items-center justify-center text-white ${slides[index].color}`}
          >
            <h2 className="text-2xl font-bold">{slides[index].title}</h2>
            <p className="mt-2">{slides[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}

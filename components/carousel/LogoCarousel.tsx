"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

/*
    import LogoCarousel from "@/components/LogoCarousel";

export default function Home() {
  const logos = [
    { src: "/logos/react.svg", alt: "React" },
    { src: "/logos/nextjs.svg", alt: "Next.js" },
    { src: "/logos/typescript.svg", alt: "TypeScript" },
    { src: "/logos/framer.svg", alt: "Framer Motion" },
    { src: "/logos/nodejs.svg", alt: "Node.js" },
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Our Partners</h1>
      <LogoCarousel logos={logos} speed={60} />
    </main>
  );
}

*/

// Props for flexibility
interface LogoCarouselProps {
  logos: { src: string; alt: string }[];
  speed?: number; // pixels per second
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos, speed = 50 }) => {
  // Duplicate the logos array to create a seamless loop
  const repeatedLogos = [...logos, ...logos];

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        background: "#fff",
        padding: "1rem 0",
      }}
    >
      <motion.div
        style={{ display: "inline-flex" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: (logos.length * 100) / speed, // Adjust speed
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              padding: "0 2rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;

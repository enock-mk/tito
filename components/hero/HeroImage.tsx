// components/hero/HeroImage.tsx
'use client';

import { AnimatedDashboard } from '@/components/animations/AnimatedDashboard';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Shield, Gauge} from 'lucide-react';
import { useState } from 'react';

interface HeroImageProps {
  className?: string;
  showDashboard?: boolean;
}

export function HeroImage({ className, showDashboard = false }: HeroImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Main Image Container */}
        <motion.div 
          className="relative w-full max-w-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow Effect - Softer */}
          <div className="absolute -inset-4 -z-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl opacity-70" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-blue-500/10 via-purple-500/10 to-transparent blur-3xl opacity-50" />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-6 -right-6 z-10 hidden md:block"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 shadow-lg">
              <Gauge className='2xl'/>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 z-10 hidden md:block"
            animate={{
              y: [0, 6, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 shadow-lg">
              <Shield className='2xl'/>
            </div>
          </motion.div>

          {/* Image with Soft Glare */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Soft Glare Overlay - Much softer */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {/* Main soft glare */}
              <div 
                className="absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)',
                  transform: `translateX(${isHovered ? '100%' : '-100%'})`,
                  transition: 'transform 1.2s ease-in-out',
                }}
              />
              
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
              
              {/* Soft corner glow */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-2xl" />
            </div>

            {/* Image */}
            <Image 
              src="/hero2.png" 
              alt="TiTO Platform Dashboard" 
              height={800} 
              width={800}
              className="relative z-0 w-full h-auto"
              priority
              quality={75}
            />

            {/* Soft border glow on hover */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-primary/0 transition-all duration-500 ${isHovered ? 'border-primary/20 shadow-[0_0_40px_-12px_rgba(37,99,235,0.15)]' : ''}`} />
          </div>

          {/* Bottom Glow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-primary/10 to-transparent blur-2xl opacity-50" />
        </motion.div>

        {/* Decorative dots - softer */}
        <div className="absolute -z-20 inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </motion.div>
  );
}
// components/showcase/MobileAppContent.tsx
'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MobileAppContentProps {
  children?: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export function MobileAppContent({ children, className, variant = 'dark' }: MobileAppContentProps) {
  const isDark = variant === 'dark';
  const bgColor = isDark ? 'bg-[#0A1A35]' : 'bg-[#f5f5f5]';
  const textColor = isDark ? 'text-white' : 'text-black';
  const mutedColor = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={cn('px-4 py-3 space-y-3', bgColor, className)}>
      {/* Header with Logo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn(
            'rounded-xl p-1.5 w-8 h-8 flex items-center justify-center border',
            isDark ? 'bg-black border-[#FDB71A]/20' : 'bg-white border-[#FDB71A]/30'
          )}>
            <svg viewBox="0 0 40 40" className="w-5 h-5">
              <rect x="3" y="9" width="34" height="22" rx="5" fill="#FDB71A" />
              <circle cx="3" cy="20" r="5" fill={isDark ? '#0A1A35' : '#f5f5f5'} />
              <circle cx="37" cy="20" r="5" fill={isDark ? '#0A1A35' : '#f5f5f5'} />
            </svg>
          </div>
          <span className={cn('font-black text-sm', isDark ? 'text-white' : 'text-black')}>
            Ti<span className="text-[#FDB71A]">TO</span>
          </span>
        </div>
        <div className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center border',
          isDark ? 'bg-[#FDB71A]/10 border-[#FDB71A]/20' : 'bg-[#FDB71A]/20 border-[#FDB71A]/30'
        )}>
          <span className={cn('text-xs font-bold', isDark ? 'text-[#FDB71A]' : 'text-[#FDB71A]')}>MN</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className={cn(
        'rounded-2xl px-3 py-2.5 flex items-center gap-2 border',
        isDark ? 'bg-white/8 border-white/5' : 'bg-black/5 border-black/10'
      )}>
        <span className={cn('text-xs', isDark ? 'text-gray-500' : 'text-gray-400')}>🔍</span>
        <span className={cn('text-xs', isDark ? 'text-gray-500' : 'text-gray-400')}>Search events, hotels, buses...</span>
      </div>

      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <p className={cn('font-bold text-sm', isDark ? 'text-white' : 'text-black')}>Hello, JULIET! 👋</p>
          <p className={cn('text-[10px]', mutedColor)}>Discover experiences near you</p>
        </div>
        <div className="w-8 h-8 bg-gradient-to-br from-[#FDB71A] to-[#F59E0B] rounded-xl flex items-center justify-center">
          <span className="text-[#0F2447] text-xs font-black">🔔</span>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { emoji: '🚌', label: 'Bus Tickets', color: isDark ? 'from-blue-600/30 to-blue-800/30' : 'from-blue-200 to-blue-300/50' },
          { emoji: '🎵', label: 'Concerts', color: isDark ? 'from-purple-600/30 to-purple-800/30' : 'from-purple-200 to-purple-300/50' },
          { emoji: '🎬', label: 'Cinema', color: isDark ? 'from-red-600/30 to-red-800/30' : 'from-red-200 to-red-300/50' },
          { emoji: '🏨', label: 'Hotels', color: isDark ? 'from-green-600/30 to-green-800/30' : 'from-green-200 to-green-300/50' },
        ].map(({ emoji, label, color }) => (
          <div key={label} className={cn(
            'bg-gradient-to-br rounded-2xl p-3 flex flex-col items-center gap-1 border',
            color,
            isDark ? 'border-white/5' : 'border-black/5'
          )}>
            <span className="text-xl">{emoji}</span>
            <span className={cn('text-[10px] font-semibold', isDark ? 'text-white' : 'text-black')}>{label}</span>
          </div>
        ))}
      </div>

      {/* Popular Events */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className={cn('font-bold text-xs', isDark ? 'text-white' : 'text-black')}>Popular Events</p>
          <span className="text-[#FDB71A] text-[10px] font-semibold">See all</span>
        </div>
        <div className="space-y-1.5">
          {[
            { name: 'Yo Maps - Live!', price: 'K350', color: isDark ? 'from-purple-500 to-pink-600' : 'from-purple-300 to-pink-400', emoji: '🎤' },
            { name: 'FAZ League', price: 'K120', color: isDark ? 'from-green-500 to-emerald-600' : 'from-green-300 to-emerald-400', emoji: '⚽' },
            { name: 'Movie Night', price: 'K45', color: isDark ? 'from-orange-500 to-red-600' : 'from-orange-300 to-red-400', emoji: '🎬' },
          ].map(({ name, price, color, emoji }) => (
            <div key={name} className={cn(
              'bg-gradient-to-r rounded-xl p-2.5 flex items-center justify-between',
              color
            )}>
              <div className="flex items-center gap-2">
                <span className="text-sm">{emoji}</span>
                <span className={cn('text-[10px] font-semibold', isDark ? 'text-white' : 'text-black')}>{name}</span>
              </div>
              <span className={cn('text-[10px] font-black rounded-lg', isDark ? 'text-white bg-black/20 px-2 py-0.5' : 'text-black bg-white/30 px-2 py-0.5')}>
                {price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
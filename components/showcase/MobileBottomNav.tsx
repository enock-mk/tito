// components/showcase/MobileBottomNav.tsx
'use client';

import { cn } from '@/lib/utils';

interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
}

interface MobileBottomNavProps {
  items?: NavItem[];
  variant?: 'light' | 'dark';
  className?: string;
}

const defaultItems: NavItem[] = [
  { icon: '🏠', label: 'Home', active: true },
  { icon: '🎫', label: 'Tickets', active: false },
  { icon: '🎵', label: 'Events', active: false },
  { icon: '📅', label: 'Bookings', active: false },
];

export function MobileBottomNav({
  items = defaultItems,
  variant = 'dark',
  className,
}: MobileBottomNavProps) {
  const isDark = variant === 'dark';

  return (
    <div className={cn(
      'border-t px-4 py-3 flex justify-around',
      isDark ? 'bg-[#081828] border-white/5' : 'bg-[#f0f0f0] border-black/5',
      className
    )}>
      {items.map(({ icon, label, active }) => (
        <div key={label} className={cn(
          'flex flex-col items-center gap-0.5 transition-opacity',
          active ? 'opacity-100' : 'opacity-30'
        )}>
          <span className="text-base">{icon}</span>
          <span className={cn(
            'text-[8px] font-semibold',
            active ? 'text-[#FDB71A]' : isDark ? 'text-gray-400' : 'text-gray-600'
          )}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
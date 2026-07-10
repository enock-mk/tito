// components/sections/PlatformOverviewComplete.tsx
'use client';

import { useState } from 'react';
import { platformFeatures, platformStats } from '@/data/platform';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { PlatformTabs } from './PlatformTabs';
import {PlatformOverview} from './PlatformOverview';
import { SlideIn } from '@/components/animations/SlideIn';
import { Button } from '@/components/ui/button';
import { LayoutGrid, LayoutList } from 'lucide-react';

export function PlatformOverviewComplete() {
  const [view, setView] = useState<'grid' | 'tabs'>('grid');

  return (
    <>
      {view === 'grid' ? (
        <PlatformOverview />
      ) : (
        <PlatformTabs />
      )}
    </>
  );
}
// app/(marketing)/platform/why/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: 'Why Choose TiTO | Platform',
  description: 'Discover why businesses choose TiTO for their booking and management needs.',
};

export default function WhyChoosePage() {
  return (
    <>
      <PageHeader
        title="Why Choose TiTO"
        description="Built for businesses that need reliable, secure, and scalable solutions to manage their operations."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Platform', href: '/platform' },
          { label: 'Why TiTO' },
        ]}
      />
      <WhyChoose />
      <ComparisonTable />
      <CTASection />
    </>
  );
}
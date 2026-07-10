import { PageHeader } from '@/components/shared/PageHeader';
import { PlatformOverviewComplete } from '@/components/sections/PlatformOverviewComplete';
import { WorkflowWithStats } from '@/components/sections/WorkflowWithStats';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: 'Platform | TiTO',
  description: 'Explore TiTO platform capabilities for bookings, payments, reporting, and operations management.',
};

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        title="Platform Overview"
        description="Discover the platform features that power modern ticketing and operations for transport, hospitality, and events."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Platform' },
        ]}
      />
      <PlatformOverviewComplete />
      <WorkflowWithStats />
      <ComparisonTable />
      <CTASection />
    </>
  );
}

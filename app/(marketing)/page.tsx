import { PageHeader } from '@/components/shared/PageHeader';
import { PlatformOverviewComplete } from '@/components/sections/PlatformOverviewComplete';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: 'Marketing | TiTO',
  description: 'Marketing pages and product overviews for TiTO.',
};

export default function MarketingHomePage() {
  return (
    <>
      <PageHeader
        title="Marketing Hub"
        description="Explore TiTO product pages, case studies, and solution overviews for transport, hospitality, and fundraising businesses."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Marketing' },
        ]}
      />
      <PlatformOverviewComplete />
      <TrustedBy />
      <CTASection />
    </>
  );
}

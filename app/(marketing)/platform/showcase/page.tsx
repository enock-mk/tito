// app/(marketing)/platform/showcase/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: 'Product Showcase | TiTO',
  description: 'See TiTO in action across different devices and industries.',
};

export default function ShowcasePage() {
  return (
    <>
      <PageHeader
        title="Product Showcase"
        description="Explore real product screenshots across different devices and industries. See how TiTO transforms business operations."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Platform', href: '/platform' },
          { label: 'Showcase' },
        ]}
      />
      <ProductShowcase />
      <CTASection />
    </>
  );
}
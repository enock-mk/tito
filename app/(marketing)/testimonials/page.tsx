// app/(marketing)/testimonials/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { Testimonials } from '@/components/sections/Testimonials';
import { TestimonialsGrid } from '@/components/sections/TestimonialsGrid';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: 'Testimonials | TiTO',
  description: 'Hear from businesses and organizations that have transformed their operations with TiTO.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Partner Testimonials"
        description="Hear from businesses and organizations that have transformed their operations with TiTO."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Testimonials' },
        ]}
      />
      <Testimonials />
      <TestimonialsGrid />
      <CTASection />
    </>
  );
}
// app/(marketing)/solutions/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: 'Solutions | TiTO',
  description: 'Explore TiTO solutions for transport, hospitality, events, fundraising, and fleet operations.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Solutions for Every Business"
        description="Find the TiTO solution that fits your industry, from bus ticketing to hotel reservations and event management."
        badge="Our Solutions"
        variant="centered"
      />
      <SolutionsSection />
      <Testimonials />
    </>
  );
}
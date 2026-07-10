// app/(marketing)/cta/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { CTAWithParticles } from '@/components/sections/CTAWithParticles';
import { CTAMinimal } from '@/components/sections/CTAMinimal';
import { CTAWithTrust } from '@/components/sections/CTAWithTrust';

export const metadata = {
  title: 'Call to Action | TiTO',
  description: 'Ready to digitize your business? Join TiTO today.',
};

export default function CTAPage() {
  return (
    <>
      <PageHeader
        title="Call to Action Examples"
        description="Different CTA variants for testing and inspiration."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'CTA Examples' },
        ]}
      />
      <CTASection variant="default" />
      <CTASection variant="simple" />
      <CTASection variant="gradient" />
      <CTASection variant="with-image" />
      <CTAWithParticles />
      <CTAMinimal />
      <CTAWithTrust />
    </>
  );
}
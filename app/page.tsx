import { HeroSection } from '@/components/sections/HeroSection';
import { Contact } from '@/components/sections/contact';
import { Downloads } from '@/components/sections/download-view';
import { CTASection } from '@/components/sections/CTASection';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { Industries } from '@/components/sections/Industries';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { Workflow } from '@/components/sections/Workflow';
import { Testimonials } from '@/components/sections/Testimonials';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_45%)]" />
      <div className="pointer-events-none absolute right-0 top-64 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.16),_transparent_60%)]" />
      <HeroSection />
      <TrustedBy />
      <PlatformOverview />
      <Industries />
      <WhyChoose />
      <ProductShowcase />
      <Workflow />
      <Testimonials />
      <Downloads />
      <Contact />
      <CTASection variant="default" />
    </div>
  );
}

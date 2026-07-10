import { PageHeader } from '@/components/shared/PageHeader';
import { BlogSection } from '@/components/sections/BlogSection';
import { CTASection } from '@/components/sections/CTASection';


export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Latest Insights"
        description="Read the latest stories from the world of modern ticketing, hospitality, events, and transportation."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />
      <BlogSection />
      <CTASection />
    </>
  );
}

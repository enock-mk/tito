// app/(marketing)/platform/workflow/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { Workflow } from '@/components/sections/Workflow';
import { WorkflowWithStats } from '@/components/sections/WorkflowWithStats';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: 'Platform Workflow | TiTO',
  description: 'Learn how TiTO works from sign-up to success.',
};

export default function WorkflowPage() {
  return (
    <>
      <PageHeader
        title="How TiTO Works"
        description="From sign-up to success — follow the journey of businesses using TiTO to manage their operations."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Platform', href: '/platform' },
          { label: 'Workflow' },
        ]}
      />
      <Workflow />
      <WorkflowWithStats />
      <CTASection />
    </>
  );
}
// app/(marketing)/industries/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { industries } from '@/data/industries';
import { DetailPage } from '@/components/sections/DetailPage';

// Generate static params for all industry pages
export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug || industry.id,
  }));
}

// Find an industry by slug
async function getIndustry(slug: string) {
  return industries.find((industry) => (industry.slug || industry.id) === slug);
}

// Generate metadata - params is now a Promise
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) return {};

  return {
    title: `${industry.title} | TiTO Industries`,
    description: industry.description,
  };
}

// Page component - params is now a Promise
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) notFound();

  // Map industry data to the DetailPage format
  const pageData = {
    id: industry.id,
    title: industry.title,
    description: industry.description,
    heroIntro: industry.heroIntro || `Industry Solutions`,
    heroText: industry.heroText || `Transform your ${industry.title} operations with TiTO`,
    problemQuestions: industry.problemQuestions || [
      'Manual processes slowing you down?',
      'Limited visibility into operations?',
      'Customer expectations evolving?',
      'Revenue leakage going unnoticed?'
    ],
    solutionText: industry.solutionText || `TiTO provides comprehensive ${industry.title} solutions to streamline operations, enhance customer experiences, and drive growth.`,
    features: industry.features,
    workflow: industry.workflow || [
      'Get Started',
      'Configure Settings',
      'Launch Operations',
      'Monitor Performance'
    ],
    faqs: industry.faqs || [
      {
        question: `How does TiTO help with ${industry.title} operations?`,
        answer: `TiTO provides a comprehensive platform to manage all aspects of your ${industry.title} operations, from booking to analytics.`
      },
      {
        question: `Is TiTO suitable for small ${industry.title} businesses?`,
        answer: `Yes, TiTO is designed to scale with your business, whether you're a small startup or a large enterprise.`
      }
    ],
    industry: industry.industryCategory || industry.title,
  };

  return (
    <DetailPage
      page={pageData}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: industry.title },
      ]}
    />
  );
}
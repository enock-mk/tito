// app/(marketing)/solutions/[solution]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailPage } from '@/components/sections/DetailPage';
import { solutionPages } from '@/data/solutionDetails';

// Generate static params for all solution pages
export async function generateStaticParams() {
  return solutionPages.map((page) => ({
    solution: page.id,
  }));
}

// Generate metadata - params is now a Promise
export async function generateMetadata({ params }: { params: Promise<{ solution: string }> }): Promise<Metadata> {
  const { solution } = await params;
  const page = solutionPages.find((item) => item.id === solution);

  if (!page) {
    return {
      title: 'Solutions | TiTO',
      description: 'Find the right TiTO solution for your business.',
    };
  }

  return {
    title: `${page.title} | TiTO Solutions`,
    description: page.description,
    openGraph: {
      title: `${page.title} | TiTO Solutions`,
      description: page.description,
      url: `https://tito.com/solutions/${page.id}`,
      type: 'website',
    },
  };
}

interface SolutionPageProps {
  params: Promise<{ solution: string }>;
}

// Page component - params is now a Promise
export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { solution } = await params;
  const page = solutionPages.find((item) => item.id === solution);

  if (!page) {
    notFound();
  }

  return (
    <DetailPage
      page={page}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions' },
        { label: page.title },
      ]}
    />
  );
}
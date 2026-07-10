// app/(marketing)/resources/documentation/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { docArticles } from '@/data/documentation';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Clock, Calendar, Tag } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

// Generate static params for all doc articles
export async function generateStaticParams() {
  // Log to verify data is being loaded
  console.log('📚 Documentation articles:', docArticles.length);
  console.log('📚 Slugs:', docArticles.map(a => a.slug));
  
  return docArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Find an article by slug
async function getArticle(slug: string) {
  // Log the slug being searched
  console.log('🔍 Looking for slug:', slug);
  const article = docArticles.find((article) => article.slug === slug);
  if (article) {
    console.log('✅ Found article:', article.title);
  } else {
    console.log('❌ Article not found for slug:', slug);
    console.log('📚 Available slugs:', docArticles.map(a => a.slug));
  }
  return article;
}

// Find related articles
function getRelatedArticles(article: typeof docArticles[0]) {
  if (!article.relatedArticles) return [];
  return docArticles.filter((a) => article.relatedArticles?.includes(a.id));
}

// Get table of contents
function getTableOfContents(content: string) {
  const headings = content.match(/<h2[^>]*>(.*?)<\/h2>/g) || [];
  return headings.map((heading, index) => {
    const title = heading.replace(/<[^>]*>/g, '');
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return { id, title, level: 2 };
  });
}

// Generate metadata - params is now a Promise
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} | TiTO Documentation`,
    description: article.description,
  };
}

// Page component - params is now a Promise
export default async function DocumentationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article);
  const toc = article.tableOfContents || getTableOfContents(article.content);

  // Get category color
  const categoryColors: Record<string, string> = {
    'getting-started': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    bookings: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    payments: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    integrations: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    security: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    mobile: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Table of Contents - Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h4 className="font-semibold">On this page</h4>
              <ul className="space-y-2 text-sm">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-neutral-600 hover:text-primary dark:text-neutral-400"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm text-neutral-500">
                <Link href="/documentation" className="hover:text-primary">
                  Documentation
                </Link>
                <span>/</span>
                <span className="text-neutral-900 dark:text-white">
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </span>
                <span>/</span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  {article.title}
                </span>
              </nav>

              {/* Article Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className={categoryColors[article.category] || 'bg-neutral-100'}>
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </Badge>
                  {article.popular && (
                    <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
                      Popular
                    </Badge>
                  )}
                  {article.new && (
                    <Badge className="bg-green-500 text-white hover:bg-green-600">
                      New
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {article.title}
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  {article.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readingTime}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Updated {new Date(article.updatedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-neutral dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:mt-8
                  prose-h3:text-xl prose-h3:mt-6
                  prose-p:text-neutral-700 dark:prose-p:text-neutral-300
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-ul:list-disc prose-ul:space-y-1
                  prose-ol:list-decimal prose-ol:space-y-1
                  prose-li:text-neutral-700 dark:prose-li:text-neutral-300
                  prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4 prose-blockquote:rounded-lg
                  prose-img:rounded-xl prose-img:shadow-lg
                  prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:p-1 prose-code:rounded
                  prose-pre:bg-neutral-900 prose-pre:text-white
                  prose-table:border-collapse prose-table:w-full
                  prose-th:border prose-th:border-neutral-200 prose-th:bg-neutral-50 prose-th:p-2 prose-th:text-left dark:prose-th:border-neutral-800 dark:prose-th:bg-neutral-800
                  prose-td:border prose-td:border-neutral-200 prose-td:p-2 dark:prose-td:border-neutral-800"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Mobile TOC */}
              {toc.length > 0 && (
                <div className="rounded-xl border bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-800/50 lg:hidden">
                  <h4 className="font-semibold">On this page</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-neutral-600 hover:text-primary dark:text-neutral-400"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="border-t pt-8 dark:border-neutral-800">
                  <h3 className="text-xl font-bold">Related Articles</h3>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        href={`/documentation/${related.slug}`}
                        className="group rounded-xl border bg-white p-4 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                      >
                        <h4 className="font-medium group-hover:text-primary">
                          {related.title}
                        </h4>
                        <p className="mt-1 text-sm text-neutral-500">
                          {related.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {related.readingTime}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="border-t pt-6 dark:border-neutral-800">
                <div className="flex justify-between">
                  <Link
                    href="/documentation"
                    className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    All Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection variant="simple" />
    </>
  );
}
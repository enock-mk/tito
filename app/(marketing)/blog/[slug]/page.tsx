// app/(marketing)/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/shared/PageHeader';
import { BlogPostContent } from '@/components/blog/BlogPostContent';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { CTASection } from '@/components/sections/CTASection';
import { blogPosts } from '@/data/blog';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Find a post by slug - now async since we need to await params
async function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

// Get related posts
function getRelatedPosts(post: typeof blogPosts[0]) {
  if (!post.relatedPosts) return [];
  return blogPosts.filter((p) => post.relatedPosts?.includes(p.id));
}

// Generate metadata - params is now a Promise
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | TiTO Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

// Page component - params is now a Promise
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="space-y-8">
              <BlogPostHeader post={post} />

              {/* Featured Image */}
              {post.featuredImage && (
                <div
                  className="aspect-video w-full rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.featuredImage})` }}
                />
              )}

              <BlogPostContent content={post.content} />

              {/* Share */}
              <ShareButtons
                title={post.title}
                url={`/blog/${post.slug}`}
                className="border-t pt-6 dark:border-neutral-800"
              />

              {/* Author Bio */}
              <AuthorBio author={post.author} />

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <RelatedPosts posts={relatedPosts} />
              )}
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar currentPost={post} popularPosts={blogPosts} />
          </div>
        </div>
      </div>
      <CTASection variant="simple" />
    </>
  );
}
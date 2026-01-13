import {
  getPost,
  getCategoryBySlug,
  getPostsByCategorySlug,
  getRelatedPostsById,
  getAllPostSlugs,
  getAllCategorySlugs,
} from "@/lib/wp-api";
import { redirect } from "next/navigation";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogHero from "@/components/blog/BlogHero";
import { BlogDetailHero } from "@/components/blog/BlogDetailHero";
import { BlogContent } from "@/components/blog/BlogContent";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Metadata } from "next";

// 1. Required for static export
export const dynamicParams = false;

// 2. Generate static paths
export async function generateStaticParams() {
  const [postSlugs, categorySlugs] = await Promise.all([
    getAllPostSlugs(),
    getAllCategorySlugs(),
  ]);

  const allPaths = [...postSlugs, ...categorySlugs].map((slug) => ({
    slug,
  }));

  return allPaths;
}

// 3. Generate page metadata dynamically
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;

  const category = await getCategoryBySlug(slug);
  if (category) {
    return {
      title: `${category.name} | MaxiLife`,
      description: `Explore articles under the ${category.name} category.`,
      alternates: { canonical: `https://maxilife.com/blog/${slug}` },
    };
  }

  const post = await getPost(slug);
  if (post) {
    return {
      title: post.title.rendered,
      description: post.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "Read this article on MaxiLife.",
      alternates: { canonical: `https://maxilife.com/blog/${slug}` },
    };
  }

  return {
    title: "Page Not Found | MaxiLife",
    description: "The page you are looking for does not exist.",
  };
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // 1️⃣ Try category first
  const category = await getCategoryBySlug(slug);
  if (category) {
    const posts = await getPostsByCategorySlug(slug);
    const featured = await getPostsByCategorySlug(slug, 1, true);

    return (
      <main className="max-w-[1280px] mx-auto px-8 py-24">
        <h1 className="font-serif text-4xl font-medium mb-12 capitalize">
          {category.name}
        </h1>
        {featured?.[0] && <BlogHero hero={featured[0]} />}
        {posts?.length ? <BlogGrid posts={posts} /> : <p className="text-muted-foreground">No posts found.</p>}
        {/* Structured Data for Category Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": `${category.name} | MaxiLife`,
              "description": `Explore articles under the ${category.name} category.`,
              "url": `https://maxilife.com/blog/${slug}`,
              "hasPart": posts.map((post: any) => ({
                "@type": "Article",
                "headline": post.title.rendered,
                "url": `https://maxilife.com/blog/${post.slug}`,
                "datePublished": post.date,
                "image": post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "/placeholder.jpg"
              }))
            }),
          }}
        />
      </main>
    );
  }

  // 2️⃣ Try post
  const post = await getPost(slug);
  if (!post) redirect("/404");

  const relatedPosts = await getRelatedPostsById(post.id);
  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "/placeholder.jpg";

  return (
    <main className="w-full px-6 py-24">
      <section className="max-w-4xl mx-auto">
        <BlogDetailHero title={post.title.rendered} date={post.date} featuredImage={featuredImage} />
        <BlogContent content={post.content.rendered} />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title.rendered,
              "image": [featuredImage],
              "author": { "@type": "Organization", "name": "MaxiLife" },
              "datePublished": post.date,
              "url": `https://maxilife.com/blog/${slug}`,
              "description": post.excerpt?.rendered?.replace(/<[^>]+>/g, "")
            }),
          }}
        />
      </section>

      {relatedPosts.length > 0 && (
        <section className="mt-32 mx-6">
          <RelatedPosts posts={relatedPosts.filter((p: any) => p.id !== post.id)} />
        </section>
      )}
    </main>
  );
}

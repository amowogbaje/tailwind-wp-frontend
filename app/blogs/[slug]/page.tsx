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


// 1. Required for 'output: export': Tells Next.js to 404 if a slug wasn't generated at build time
export const dynamicParams = false;

// 2. The magic function that solves your build error
export async function generateStaticParams() {
  const [postSlugs, categorySlugs] = await Promise.all([
    getAllPostSlugs(),
    getAllCategorySlugs(),
  ]);

  // Combine both lists into the format Next.js expects
  const allPaths = [...postSlugs, ...categorySlugs].map((slug) => ({
    slug: slug,
  }));

  return allPaths;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (category) {
    return {
      title: `${category.name} | MaxiLife`,
      description: `Explore articles under the ${category.name} category.`,
      alternates: { canonical: `https://maxilife.com/blogs/${slug}` },
    };
  }

  const post = await getPost(slug);
  if (post) {
    return {
      title: post.title.rendered,
      description: post.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "Read this article on MaxiLife.",
      alternates: { canonical: `https://maxilife.com/blogs/${slug}` },
    };
  }

  return {
    title: "Page Not Found | MaxiLife",
    description: "The page you are looking for does not exist.",
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

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

        {posts && posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <p className="text-muted-foreground">No posts found.</p>
        )}
      </main>
    );
  }

  // 2️⃣ Try post
  const post = await getPost(slug);

  if (!post) {
    redirect("/404");
  }

  const relatedPosts = await getRelatedPostsById(post.id);
  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    "/placeholder.jpg";

  return (
    <main className="w-full px-6 py-24">
      <section className="max-w-4xl mx-auto">
        <BlogDetailHero 
          title={post.title.rendered} 
          date={post.date} 
          featuredImage={featuredImage} 
        />
        <BlogContent content={post.content.rendered} />
      </section>
      
      {relatedPosts.length > 0 && (
        <section className="mt-32 mx-6">
          <RelatedPosts posts={relatedPosts.filter((p: any) => p.id !== post.id)} />
        </section>
      )}
    </main>
  );
}
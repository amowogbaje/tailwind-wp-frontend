import {
  getPost,
  getCategoryBySlug,
  getPostsByCategorySlug,
  getRelatedPostsById,
} from "@/lib/wp-api";
import { cleanHtml, stripHtml } from "@/lib/cleanHtml";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogHero from "@/components/blog/BlogHero";
import { BlogDetailHero } from "@/components/blog/BlogDetailHero";
import { BlogContent } from "@/components/blog/BlogContent";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { get } from "http";

// NOTE: params is NOT a Promise
export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // unwrap the promise

  // 1️⃣ Try category first
  const category = await getCategoryBySlug(slug);

  if (category) {
    const posts = await getPostsByCategorySlug(slug);
    const featured = await getPostsByCategorySlug(slug, 1, true);
    console.log("Featured Category posts:", featured);

    return (
      <main className="max-w-[1280px] mx-auto px-8 py-24">
        <h1 className="font-serif text-4xl font-medium mb-12 capitalize">
          {category.name}
        </h1>
        <BlogHero hero={featured?.[0]} />

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
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-semibold">Not found</h1>
      </div>
    );
  }
  const relatedPosts = await getRelatedPostsById(post.id);
  console.log("Related posts:", relatedPosts);

  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    "/placeholder.jpg";

  return (
    <main className="w-full px-6 py-24">
      <section className="max-w-4xl mx-auto">
        <BlogDetailHero title={post.title.rendered} date={post.date} featuredImage={featuredImage} />
        <BlogContent content={post.content.rendered} />
      </section>
      <section className="mt-32 mx-6">
        <RelatedPosts posts={relatedPosts.filter(p => p.id !== post.id)} />
      </section>

    </main>
  );
}

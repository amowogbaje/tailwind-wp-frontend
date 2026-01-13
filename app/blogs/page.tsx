import { getFeaturedPosts, getPosts } from "@/lib/wp-api";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | MaxiLife",
  description: "Read the latest insights and articles on health and lifestyle.",
  alternates: { canonical: "https://maxilife.com/blog" },
};

export default async function BlogLanding() {
  const featured = await getFeaturedPosts();
  const posts = await getPosts();

  return (
    <main>
      <BlogHero hero={featured?.[0]} />

      <section className="bg-secondary/30 py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="mb-2 font-serif text-3xl font-medium">Latest Articles</h2>
              <p className="text-muted-foreground max-w-xl">
                Insights and stories that capture the essence of contemporary culture.
              </p>
            </div>

            <a href="/blogs" className="hidden md:inline-flex uppercase text-sm font-medium">
              View All →
            </a>
          </div>

          <BlogGrid posts={posts} />
        </div>
      </section>

      {/* Structured Data for Blog Landing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Blog | MaxiLife",
            "description": "Read the latest insights and articles on health and lifestyle.",
            "url": "https://maxilife.com/blog"
          }),
        }}
      />
    </main>
  );
}

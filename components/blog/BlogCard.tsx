import { cleanHtml, stripHtml } from "@/lib/cleanHtml";

export default function BlogCard({ post }: { post: any }) {
  const img =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    "/placeholder.jpg";

  return (
    <article className="bg-white rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
      <a href={`/blogs/${post.slug}`} className="block">
        <img
          src={img}
          alt={post.title.rendered}
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          {/* <span className="text-primary mb-3 block text-xs font-medium uppercase tracking-wider">
            {post.categories?.[0] ?? "General"}
          </span> */}

          <h3 className="mb-3 font-serif text-xl font-medium">
            {cleanHtml(post.title.rendered)}
          </h3>

          <p className="text-muted-foreground mb-4 text-xl">
            {stripHtml(post.excerpt.rendered)}
          </p>

          <div className="text-muted-foreground flex justify-between text-md">
            {/* <span>{post.author ?? "Admin"}</span> */}
            <span>{new Date(post.date).toDateString()}</span>
          </div>
        </div>
      </a>
    </article>
  );
}

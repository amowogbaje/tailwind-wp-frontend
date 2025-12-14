import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }: { posts: any[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
    
  );
}

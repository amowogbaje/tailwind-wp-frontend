import React from "react";
import BlogGrid from "./BlogGrid";

interface RelatedPostsProps {
  posts: any[];
  title?: string;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, title = "Related Posts" }) => {
  if (!posts.length) return null;
  return (
    <section className="mt-16">
      <h2 className="font-serif text-3xl font-medium mb-6">{title}</h2>
      <BlogGrid posts={posts} />
    </section>
  );
};

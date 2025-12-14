import { cleanHtml } from "@/lib/cleanHtml";
import React from "react";

interface BlogContentProps {
  content: string;
}

export const BlogContent: React.FC<BlogContentProps> = ({ content }) => (
  <article className="prose prose-lg max-w-none">
          {cleanHtml(content)}
        </article>
);

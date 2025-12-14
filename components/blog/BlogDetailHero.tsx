import React from "react";
import { stripHtml } from "@/lib/cleanHtml";

interface BlogDetailHeroProps {
  title: string;
  date: string;
  featuredImage: string;
}

export const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({ title, date, featuredImage }) => (
  <div className="mb-12">
    <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">{title}</h1>
    <div className="text-muted-foreground mb-6 text-sm">{new Date(date).toDateString()}</div>
    <img src={featuredImage} alt={stripHtml(title)} className="w-full h-[450px] object-cover rounded-lg" />
  </div>
);

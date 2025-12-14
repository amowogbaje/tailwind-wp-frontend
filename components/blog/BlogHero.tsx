import { cleanHtml, stripHtml } from "@/lib/cleanHtml";
import PhotographyCredit from "./PhotographyCredit";

export default function BlogHero({ hero }: { hero: any }) {
  if (!hero) return null;

  const media = hero?._embedded?.["wp:featuredmedia"]?.[0];
  const heroImg =
    media?.source_url ?? "/placeholder.jpg";

  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-8">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Text */}
          <div>
            <span className="bg-primary/5 text-primary mb-5 inline-block rounded-full px-3 py-1 text-xs tracking-widest uppercase">
              Featured Story
            </span>

            <h1 className="mb-6 font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
              {cleanHtml(hero.title.rendered)}
            </h1>

            <p className="text-muted-foreground mb-8 max-w-lg text-lg leading-relaxed">
              {stripHtml(hero.excerpt.rendered)}
            </p>

            <a
              href={`/blogs/${hero.slug}`}
              className="group inline-flex items-center text-sm font-medium tracking-wider uppercase"
            >
              Read Article
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={heroImg}
              alt={hero.title.rendered}
              className="h-[500px] w-full rounded-lg object-cover hover:scale-105 duration-700"
            />

            <PhotographyCredit media={media} />
          </div>

        </div>
      </div>
    </section>
  );
}

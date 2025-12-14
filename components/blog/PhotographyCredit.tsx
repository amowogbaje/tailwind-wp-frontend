import { stripHtml } from "@/lib/cleanHtml";

export default function PhotographyCredit({ media }: { media: any }) {
  if (!media) return null;

  const credit =
    media?.media_details?.image_meta?.credit ||
    (media?.caption?.rendered
      ? stripHtml(media.caption.rendered)
      : null) ||
    media?.alt_text;

  if (!credit) return null;

  return (
    <div className="absolute bottom-4 right-4 max-w-[220px] rounded-md bg-white/80 backdrop-blur px-3 py-3 text-xs font-medium line-clamp-2">
      {credit}
    </div>
  );
}

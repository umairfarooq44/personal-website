import type { Testimonial } from "@/content/profile";

export default function Recommendation({ item }: { item: Testimonial }) {
  return (
    <figure className="flex flex-col border-l-4 border-mark pl-5">
      <blockquote className="flex-1">
        <p>“{item.quote}”</p>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <img src={item.photo} alt="" width={44} height={44} loading="lazy" className="size-11 rounded-full" />
        <span>
          <span className="block font-semibold text-ink">{item.name}</span>
          <span className="block text-sm text-muted">{item.title}</span>
        </span>
      </figcaption>
    </figure>
  );
}

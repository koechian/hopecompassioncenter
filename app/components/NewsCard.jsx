import Link from "next/link";

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export function formatPostDate(isoDate) {
  return dateFormat.format(new Date(`${isoDate}T00:00:00`));
}

export default function NewsCard({ post }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10">
      {post.image && (
        <div className="aspect-[3/2] overflow-hidden">
          <img src={post.image.src} alt={post.image.alt} loading="lazy" className="size-full object-cover transition-transform duration-500 ease-out-quart group-hover:scale-[1.03]" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold tracking-[0.14em] text-rust uppercase">
          {post.category} · <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </p>
        <h3 className="mt-3 text-xl leading-snug font-semibold">
          <Link href={`/news/${post.slug}/`} className="after:absolute after:inset-0 hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-charcoal/80">{post.summary}</p>
      </div>
    </article>
  );
}

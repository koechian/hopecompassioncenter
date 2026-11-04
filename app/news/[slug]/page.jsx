import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { newsPosts } from "@/content/news";
import { formatPostDate } from "../../components/NewsCard";

export const dynamicParams = false;

// A static export must generate at least one route. Until the first post exists, a placeholder
// slug renders the not-found page; nothing links to it.
const PLACEHOLDER_SLUG = "no-posts-yet";

export function generateStaticParams() {
  const slugs = newsPosts.map((post) => post.slug);
  return (slugs.length > 0 ? slugs : [PLACEHOLDER_SLUG]).map((slug) => ({ slug }));
}

function findPost(slug) {
  return newsPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }) {
  const post = findPost((await params).slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function NewsPostPage({ params }) {
  const post = findPost((await params).slug);
  if (!post) notFound();

  return (
    <article>
      <header className="bg-forest text-white">
        <div className="container-page max-w-3xl py-14 sm:py-20">
          <Link href="/news/" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
            <LuArrowLeft aria-hidden="true" className="size-4" />
            News & Stories
          </Link>
          <p className="mt-6 text-xs font-bold tracking-[0.14em] text-white/75 uppercase">
            {post.category} · <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </p>
          <h1 className="mt-3 text-4xl leading-tight font-semibold text-white sm:text-5xl">{post.title}</h1>
        </div>
      </header>
      <div className="container-page max-w-3xl py-12 lg:py-16">
        {post.image && <img src={post.image.src} alt={post.image.alt} className="mb-10 w-full rounded-3xl object-cover" />}
        <div className="space-y-5 text-lg text-charcoal/90">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

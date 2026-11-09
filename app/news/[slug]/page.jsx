import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { getNewsPosts } from "@/lib/content_repository";
import { formatPostDate } from "../../components/NewsCard";
import RichText from "../../components/RichText";

export const dynamicParams = false;

// A static export must generate at least one route. Until the first post exists, a placeholder
// slug renders the not-found page; nothing links to it.
const PLACEHOLDER_SLUG = "no-posts-yet";

export async function generateStaticParams() {
  const slugs = (await getNewsPosts()).map((post) => post.slug);
  return (slugs.length > 0 ? slugs : [PLACEHOLDER_SLUG]).map((slug) => ({ slug }));
}

async function findPost(slug) {
  return (await getNewsPosts()).find((post) => post.slug === slug);
}

export async function generateMetadata({ params }) {
  const post = await findPost((await params).slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function NewsPostPage({ params }) {
  const post = await findPost((await params).slug);
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
        <RichText value={post.body} className="space-y-5 text-lg text-charcoal/90" />
      </div>
    </article>
  );
}

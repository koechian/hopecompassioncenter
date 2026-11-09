import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { LuArrowLeft } from "react-icons/lu";
import { getNewsPosts } from "@/lib/content_repository";
import { imageUrl } from "@/lib/sanity_client";
import { formatPostDate } from "../../components/NewsCard";

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

// How the rich text written in the Studio is rendered.
const bodyComponents = {
  block: {
    h2: ({ children }) => <h2 className="pt-4 text-3xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="pt-2 text-2xl font-semibold">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gold pl-5 text-xl italic">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal space-y-2 pl-6">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} className="font-medium text-rust underline hover:text-rust-deep">
        {children}
      </a>
    ),
  },
  types: {
    bodyImage: ({ value }) => (
      <figure>
        <img src={imageUrl(value, 1600)} alt={value.alt} loading="lazy" className="w-full rounded-2xl object-cover" />
        {value.caption && <figcaption className="mt-2 text-sm text-charcoal/70">{value.caption}</figcaption>}
      </figure>
    ),
  },
};

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
        <div className="space-y-5 text-lg text-charcoal/90">
          <PortableText value={post.body} components={bodyComponents} />
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { newsCategories, newsPosts } from "@/content/news";
import ButtonLink from "../components/ButtonLink";
import NewsCard, { formatPostDate } from "../components/NewsCard";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "News & Stories",
  description: "Updates, community stories and events from Hope Compassion Center.",
};

function FeaturedStory({ post }) {
  return (
    <article className="relative grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-forest/10 lg:grid-cols-2">
      {post.image && <img src={post.image.src} alt={post.image.alt} className="aspect-[4/3] size-full object-cover" />}
      <div className="flex flex-col justify-center p-8 lg:p-12">
        <p className="text-xs font-bold tracking-[0.14em] text-rust uppercase">
          Featured · {post.category} · <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </p>
        <h2 className="mt-4 text-3xl leading-tight font-semibold">
          <Link href={`/news/${post.slug}/`} className="after:absolute after:inset-0 hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-lg text-charcoal/85">{post.summary}</p>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-forest/10">
      <h2 className="text-2xl font-semibold">Our first stories are on their way</h2>
      <p className="mt-4 text-lg text-charcoal/85">
        We will share updates on our programmes, stories from the communities we serve and news from our events here.
        In the meantime, see our work in the gallery.
      </p>
      <ButtonLink href="/gallery/" className="mt-8">
        View Gallery
      </ButtonLink>
    </div>
  );
}

export default function NewsPage() {
  const featured = newsPosts.find((post) => post.featured) ?? newsPosts[0];
  const remaining = newsPosts.filter((post) => post !== featured);

  return (
    <>
      <PageHeader title="News & Stories" tagline={["Updates", "Community Stories", "Events"]} />
      <section>
        <div className="container-page space-y-16 py-16 lg:py-24">
          {featured ? <FeaturedStory post={featured} /> : <EmptyState />}
          {newsCategories.map((category) => {
            const posts = remaining.filter((post) => post.category === category);
            if (posts.length === 0) return null;
            return (
              <div key={category}>
                <h2 className="text-3xl font-semibold">{category}</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                    <NewsCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

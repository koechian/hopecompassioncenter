import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { home } from "@/content/home";
import { values } from "@/content/values";
import { getGalleryPhotos, getNewsPosts, getProgrammesAndImpact } from "@/lib/content_repository";
import ButtonLink from "./components/ButtonLink";
import CallToAction from "./components/CallToAction";
import Icon from "./components/Icon";
import NewsCard from "./components/NewsCard";
import SectionHeading from "./components/SectionHeading";

const GALLERY_PREVIEW_SIZE = 6;

// Photographs marked for the home page, or the newest ones if none are marked.
function selectGalleryPreview(photos) {
  const marked = photos.filter((photo) => photo.onHomePage);
  return (marked.length > 0 ? marked : photos).slice(0, GALLERY_PREVIEW_SIZE);
}

function Hero() {
  const { headline, paragraphs, image } = home.hero;
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-20">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.18em] text-rust uppercase">Community Development · Nairobi, Kenya</p>
          <h1 className="text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">{headline}</h1>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-5 text-lg text-charcoal/85">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/programmes/">Explore Our Programmes</ButtonLink>
            <ButtonLink href="/partner-with-us/" variant="outline">
              Partner With Us
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <div aria-hidden="true" className="absolute -right-4 -bottom-4 h-2/3 w-2/3 rounded-3xl bg-gold/40" />
          <img src={image.src} alt={image.alt} className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const { title, paragraphs } = home.whoWeAre;
  return (
    <section className="bg-white">
      <div className="container-page grid gap-8 py-16 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:py-24">
        <div>
          <SectionHeading eyebrow="About Us" title={title} />
          <ButtonLink href="/about/" variant="outline" className="mt-8">
            About Us
          </ButtonLink>
        </div>
        <div className="space-y-5 text-lg text-charcoal/85">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact({ impactFigures }) {
  const { eyebrow, title, introduction } = home.impact;
  return (
    <section className="bg-forest">
      <div className="container-page py-16 lg:py-20">
        <SectionHeading eyebrow={eyebrow} title={title} introduction={introduction} tone="light" />
        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {impactFigures.map((figure) => (
            <div key={figure.label} className="flex flex-col bg-forest p-6">
              <dt className="order-2 mt-2 font-semibold text-white">{figure.label}</dt>
              <dd className="order-1 font-display text-5xl font-semibold text-gold">{figure.value}</dd>
              <dd className="order-3 mt-2 text-sm text-white/75">{figure.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Programmes({ programmes }) {
  return (
    <section>
      <div className="container-page py-16 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Our Programmes" title="Five areas of work, one commitment to people" />
          <ButtonLink href="/programmes/" variant="outline" className="shrink-0">
            Explore Our Programmes
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme) => (
            <li key={programme.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={programme.image.src}
                  alt={programme.image.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 ease-out-quart group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl leading-snug font-semibold">{programme.title}</h3>
                <p className="mt-3 flex-1 text-charcoal/80">{programme.summary}</p>
                <Link
                  href={`/programmes/#${programme.id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rust after:absolute after:inset-0 hover:underline"
                >
                  Learn more<span className="sr-only"> about {programme.title}</span>
                  <LuArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OurStory() {
  const { title, paragraphs, image } = home.story;
  return (
    <section className="bg-cream-deep">
      <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/5] w-full max-w-md rounded-3xl object-cover shadow-md lg:justify-self-center" />
        <div>
          <SectionHeading eyebrow="Since 2017" title={title} />
          <div className="mt-6 space-y-5 text-lg text-charcoal/85">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <ButtonLink href="/about/#founder" className="mt-8">
            Read Our Story
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-white">
      <div className="container-page py-16 lg:py-24">
        <SectionHeading eyebrow="What Guides Us" title="Our Values" align="center" />
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <li key={value.name} className="flex gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cream text-forest">
                <Icon name={value.icon} className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{value.name}</h3>
                <p className="mt-1 text-charcoal/80">{value.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PostsSection({ eyebrow, title, posts, action }) {
  return (
    <section>
      <div className="container-page py-16 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <ButtonLink href="/news/" variant="outline" className="shrink-0">
            {action}
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview({ photos }) {
  return (
    <section>
      <div className="container-page py-16 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Gallery" title="Moments from our community" />
          <ButtonLink href="/gallery/" variant="outline" className="shrink-0">
            View Gallery
          </ButtonLink>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {photos.map((photo) => (
            <li key={photo.src} className="aspect-square overflow-hidden rounded-xl sm:aspect-[4/3]">
              <img src={photo.thumbnailSrc} alt={photo.caption} loading="lazy" className="size-full object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Partnerships() {
  const { title, text } = home.partnerships;
  return (
    <section className="bg-cream-deep">
      <div className="container-page flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between lg:py-20">
        <div className="max-w-2xl">
          <SectionHeading eyebrow="Working Together" title={title} />
          <p className="mt-4 text-lg text-charcoal/85">{text}</p>
        </div>
        <ButtonLink href="/partner-with-us/" className="shrink-0">
          Partner With Us
        </ButtonLink>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const [{ programmes, impactFigures }, galleryPhotos, newsPosts] = await Promise.all([
    getProgrammesAndImpact(),
    getGalleryPhotos(),
    getNewsPosts(),
  ]);
  const communityStories = newsPosts.filter((post) => post.category === "Community Stories").slice(0, 3);
  const latestPosts = newsPosts.slice(0, 3);
  const galleryPreview = selectGalleryPreview(galleryPhotos);

  return (
    <>
      <Hero />
      <WhoWeAre />
      <Impact impactFigures={impactFigures} />
      <Programmes programmes={programmes} />
      <OurStory />
      <Values />
      {communityStories.length > 0 && (
        <PostsSection eyebrow="Stories of Change" title="Stories from the communities we serve" posts={communityStories} action="Read More Stories" />
      )}
      {galleryPreview.length > 0 && <GalleryPreview photos={galleryPreview} />}
      <Partnerships />
      {latestPosts.length > 0 && (
        <PostsSection eyebrow="Latest Updates" title="News from Hope Compassion Center" posts={latestPosts} action="View News & Stories" />
      )}
      <CallToAction
        title={home.getInvolved.title}
        text={home.getInvolved.text}
        action="Get Involved"
        href="/partner-with-us/"
      />
    </>
  );
}

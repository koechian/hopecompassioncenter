import { about } from "@/content/about";
import { futurePriorities } from "@/content/programmes";
import { site } from "@/content/site";
import { values } from "@/content/values";
import CallToAction from "../components/CallToAction";
import Icon from "../components/Icon";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import FuturePriorities from "../components/FuturePriorities";

export const metadata = {
  title: "About Us",
  description: "Who we are, our mission and values, and the story of how Hope Compassion Center began in Mathare, Nairobi.",
};

function Founder() {
  const { founder } = about;
  return (
    <section id="founder" className="bg-white">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[20rem_1fr] lg:gap-16 lg:py-24">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <img src={founder.photo.src} alt={founder.photo.alt} className="aspect-[4/5] w-full max-w-xs rounded-3xl object-cover object-top shadow-md" />
          <p className="mt-5 font-display text-2xl font-semibold text-forest">{founder.name}</p>
          <p className="text-sm font-bold tracking-[0.14em] text-rust uppercase">{founder.role}</p>
          <img src={founder.signature.src} alt={founder.signature.alt} className="mt-4 h-14 w-auto" />
        </aside>
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Our Founder" title={founder.title} />
          {founder.chapters.map((chapter) => (
            <div key={chapter.title ?? "opening"} className="mt-8">
              {chapter.title && <h3 className="mb-4 text-2xl font-semibold">{chapter.title}</h3>}
              {chapter.image && (
                <img src={chapter.image.src} alt={chapter.image.alt} loading="lazy" className="mb-6 aspect-[16/9] w-full rounded-2xl object-cover" />
              )}
              <div className="space-y-5 text-lg text-charcoal/85">
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-12">
            <h3 className="mb-4 text-2xl font-semibold">Meet Our Founder</h3>
            <iframe
              className="aspect-video w-full rounded-2xl"
              src={`https://www.youtube-nocookie.com/embed/${site.founderVideoId}`}
              title="Meet our founder, Kelvin Otieno"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" tagline={["Who We Are", "Our Values", "Our Story"]} />

      <section>
        <div className="container-page grid gap-8 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-24">
          <SectionHeading eyebrow="Who We Are" title={about.whoWeAre.title} />
          <div className="space-y-5 text-lg text-charcoal/85">
            {about.whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest">
        <div className="container-page grid gap-6 py-16 md:grid-cols-2 lg:py-20">
          <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/15">
            <h2 className="font-sans text-sm font-bold tracking-[0.18em] text-gold uppercase">Our Mission</h2>
            <p className="mt-4 font-display text-xl leading-relaxed text-white">{about.mission}</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/15">
            <h2 className="font-sans text-sm font-bold tracking-[0.18em] text-gold uppercase">Our Vision</h2>
            <p className="mt-4 font-display text-xl leading-relaxed text-white">{about.vision}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 lg:py-24">
          <SectionHeading eyebrow="What Guides Us" title="Our Core Values" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10">
                <span className="flex size-12 items-center justify-center rounded-full bg-cream text-forest">
                  <Icon name={value.icon} className="size-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{value.name}</h3>
                <p className="mt-2 text-charcoal/80">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream-deep">
        <div className="container-page py-16 lg:py-24">
          <SectionHeading eyebrow="How We Work" title="Our Approach" />
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {about.approach.map((item) => (
              <li key={item.title} className="border-l-2 border-gold pl-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-lg text-charcoal/85">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Founder />

      <FuturePriorities priorities={futurePriorities} title="Looking Ahead: Our Vision for the Future" />

      <CallToAction
        title={about.workingTogether.title}
        text={about.workingTogether.text}
        action="Partner With Us"
        href="/partner-with-us/"
      />
    </>
  );
}

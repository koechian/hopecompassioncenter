import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowRight, LuClock, LuMapPin } from "react-icons/lu";
import { getEvents, getSiteSections } from "@/lib/content_repository";
import ButtonLink from "../components/ButtonLink";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Events",
  description: "Upcoming and recent events from Hope Compassion Center in Nairobi and Migori, Kenya.",
};

// Times are entered and shown in Kenyan time, whatever the time zone of the machine building the site.
const TIME_ZONE = "Africa/Nairobi";
const dayFormat = new Intl.DateTimeFormat("en-GB", { timeZone: TIME_ZONE, day: "numeric" });
const monthFormat = new Intl.DateTimeFormat("en-GB", { timeZone: TIME_ZONE, month: "short" });
const dateFormat = new Intl.DateTimeFormat("en-GB", { timeZone: TIME_ZONE, weekday: "long", day: "numeric", month: "long", year: "numeric" });
const timeFormat = new Intl.DateTimeFormat("en-GB", { timeZone: TIME_ZONE, hour: "numeric", minute: "2-digit", hour12: true });

function formatSchedule({ start, end }) {
  const startDate = new Date(start);
  if (!end) return `${dateFormat.format(startDate)}, ${timeFormat.format(startDate)}`;
  const endDate = new Date(end);
  const sameDay = dateFormat.format(startDate) === dateFormat.format(endDate);
  return sameDay
    ? `${dateFormat.format(startDate)}, ${timeFormat.format(startDate)} – ${timeFormat.format(endDate)}`
    : `${dateFormat.format(startDate)} – ${dateFormat.format(endDate)}`;
}

function EventLink({ item }) {
  if (!item.linkUrl) return null;
  return (
    <Link href={item.linkUrl} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rust hover:underline">
      {item.linkLabel || "More details"}
      <span className="sr-only">: {item.title}</span>
      <LuArrowRight aria-hidden="true" className="size-4" />
    </Link>
  );
}

function EventCard({ item }) {
  const start = new Date(item.start);
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10 sm:flex-row">
      {item.image && <img src={item.image.src} alt={item.image.alt} loading="lazy" className="aspect-[3/2] w-full object-cover sm:aspect-auto sm:w-64" />}
      <div className="flex flex-1 gap-5 p-6">
        <p aria-hidden="true" className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-forest text-white">
          <span className="font-display text-2xl leading-none font-semibold">{dayFormat.format(start)}</span>
          <span className="mt-1 text-xs font-bold tracking-wider text-gold uppercase">{monthFormat.format(start)}</span>
        </p>
        <div>
          <h3 className="text-xl leading-snug font-semibold">{item.title}</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-charcoal/80">
            <li className="flex items-start gap-2">
              <LuClock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-rust" />
              <time dateTime={item.start}>{formatSchedule(item)}</time>
            </li>
            <li className="flex items-start gap-2">
              <LuMapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-rust" />
              {item.location}
            </li>
          </ul>
          <p className="mt-4 text-charcoal/85">{item.summary}</p>
          <EventLink item={item} />
        </div>
      </div>
    </article>
  );
}

function EventList({ events }) {
  return (
    <div className="mt-10 space-y-6">
      {events.map((item) => (
        <EventCard key={`${item.start}-${item.title}`} item={item} />
      ))}
    </div>
  );
}

export default async function EventsPage() {
  const sections = await getSiteSections();
  if (!sections.events) notFound();
  const { upcoming, past } = await getEvents();

  return (
    <>
      <PageHeader
        title="Events"
        introduction="Join us at community activities, outreach visits and celebrations, or catch up on recent events."
      />
      <section>
        <div className="container-page max-w-5xl py-16 lg:py-24">
          <SectionHeading eyebrow="Coming Up" title="Upcoming events" />
          {upcoming.length > 0 ? (
            <EventList events={upcoming} />
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-forest/30 p-8">
              <p className="text-lg text-charcoal/85">There are no upcoming events at the moment. Follow our news for the next one.</p>
              <ButtonLink href="/news/" variant="outline" className="mt-6">
                News & Stories
              </ButtonLink>
            </div>
          )}
        </div>
      </section>
      {past.length > 0 && (
        <section className="bg-cream-deep">
          <div className="container-page max-w-5xl py-16 lg:py-24">
            <SectionHeading eyebrow="Looking Back" title="Recent events" />
            <EventList events={past} />
          </div>
        </section>
      )}
    </>
  );
}

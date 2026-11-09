import { notFound } from "next/navigation";
import { LuCalendarClock, LuMail, LuMapPin } from "react-icons/lu";
import { getOpenOpportunities, getSiteSections } from "@/lib/content_repository";
import ButtonLink from "../components/ButtonLink";
import PageHeader from "../components/PageHeader";
import RichText from "../components/RichText";

export const metadata = {
  title: "Opportunities",
  description: "Volunteer roles, jobs, internships and calls for proposals at Hope Compassion Center in Kenya.",
};

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

function ApplyAction({ item }) {
  if (item.applyUrl) {
    return (
      <ButtonLink href={item.applyUrl} variant="accent">
        Apply
      </ButtonLink>
    );
  }
  if (item.applyEmail) {
    return (
      <a href={`mailto:${item.applyEmail}?subject=${encodeURIComponent(`Application: ${item.title}`)}`} className="inline-flex items-center gap-2 font-semibold text-rust hover:underline">
        <LuMail aria-hidden="true" className="size-5" />
        Apply by email to {item.applyEmail}
      </a>
    );
  }
  return (
    <ButtonLink href="/contact/" variant="outline">
      Contact us to apply
    </ButtonLink>
  );
}

function OpportunityCard({ item }) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10 sm:p-8">
      <p className="text-xs font-bold tracking-[0.14em] text-rust uppercase">{item.kind}</p>
      <h2 className="mt-2 text-2xl leading-snug font-semibold">{item.title}</h2>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-charcoal/80">
        {item.location && (
          <li className="flex items-center gap-2">
            <LuMapPin aria-hidden="true" className="size-4 text-rust" />
            {item.location}
          </li>
        )}
        <li className="flex items-center gap-2">
          <LuCalendarClock aria-hidden="true" className="size-4 text-rust" />
          {item.closingDate ? (
            <span>
              Closes <time dateTime={item.closingDate}>{dateFormat.format(new Date(`${item.closingDate}T00:00:00`))}</time>
            </span>
          ) : (
            "Open until filled"
          )}
        </li>
      </ul>
      <p className="mt-4 text-lg text-charcoal/85">{item.summary}</p>
      {item.details?.length > 0 && (
        <details className="group mt-4">
          <summary className="cursor-pointer font-semibold text-forest hover:underline">Full details</summary>
          <RichText value={item.details} className="mt-4 space-y-4 text-charcoal/85" />
        </details>
      )}
      <div className="mt-6">
        <ApplyAction item={item} />
      </div>
    </article>
  );
}

export default async function OpportunitiesPage() {
  const sections = await getSiteSections();
  if (!sections.opportunities) notFound();
  const opportunities = await getOpenOpportunities();

  return (
    <>
      <PageHeader
        title="Opportunities"
        tagline={["Volunteer", "Work With Us", "Calls for Proposals"]}
        introduction="Give your time and skills, join our team, or collaborate on a project with us."
      />
      <section>
        <div className="container-page max-w-4xl space-y-6 py-16 lg:py-24">
          {opportunities.length > 0 ? (
            opportunities.map((item) => <OpportunityCard key={item._id} item={item} />)
          ) : (
            <div className="rounded-2xl border border-dashed border-forest/30 p-8">
              <p className="text-lg text-charcoal/85">
                There are no open roles right now. We always welcome volunteers; tell us how you would like to help.
              </p>
              <ButtonLink href="/partner-with-us/?type=Volunteering#enquiry" className="mt-6">
                Offer to Volunteer
              </ButtonLink>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

import { futurePriorities, programmes } from "@/content/programmes";
import CallToAction from "../components/CallToAction";
import FuturePriorities from "../components/FuturePriorities";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "Our Programmes",
  description:
    "Child welfare and education, women empowerment, youth development, support for elderly women and community outreach in Mathare and Migori.",
};

function ProgrammeSection({ programme, index }) {
  const imageFirst = index % 2 === 1;
  return (
    <section id={programme.id} className={index % 2 === 0 ? "bg-white" : ""}>
      <div className="container-page grid items-start gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <img
          src={programme.image.src}
          alt={programme.image.alt}
          loading={index === 0 ? "eager" : "lazy"}
          className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-md lg:sticky lg:top-28 ${imageFirst ? "" : "lg:order-2"}`}
        />
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-rust uppercase">Programme {index + 1}</p>
          <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">{programme.title}</h2>
          <p className="mt-5 text-lg text-charcoal/85">{programme.introduction}</p>
          <ul className="mt-8 space-y-6">
            {programme.activities.map((activity) => (
              <li key={activity.title} className="border-l-2 border-gold pl-5">
                <h3 className="text-xl font-semibold">{activity.title}</h3>
                <p className="mt-2 text-charcoal/85">{activity.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function ProgrammesPage() {
  return (
    <>
      <PageHeader
        title="Our Programmes"
        introduction="Our work spans five programme areas, each responding to the needs of the children, women, young people, elderly women and families we serve."
      />

      <nav aria-label="Programmes" className="border-b border-forest/10 bg-cream">
        <ul className="container-page flex flex-wrap gap-2 py-4">
          {programmes.map((programme) => (
            <li key={programme.id}>
              <a
                href={`#${programme.id}`}
                className="inline-block rounded-full border border-forest/25 px-4 py-2 text-sm font-medium text-forest hover:border-forest hover:bg-forest hover:text-white"
              >
                {programme.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {programmes.map((programme, index) => (
        <ProgrammeSection key={programme.id} programme={programme} index={index} />
      ))}

      <FuturePriorities priorities={futurePriorities} title="Future Programme Priorities" />

      <CallToAction
        title="Support or collaborate with our programmes"
        text="Your support, skills and partnership help sustain these programmes and extend them to more children, women, young people and families."
        action="Support Our Work"
        href="/partner-with-us/?type=Programme%20Sponsorship#enquiry"
      />
    </>
  );
}

import { about } from "@/content/about";
import { partnership, partnershipTypes } from "@/content/partnership";
import ButtonLink from "../components/ButtonLink";
import EnquiryForm from "../components/EnquiryForm";
import Icon from "../components/Icon";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Partner With Us",
  description:
    "Give, volunteer or collaborate with Hope Compassion Center. We welcome individuals, churches, foundations, NGOs, businesses and development organisations.",
};

function enquiryHref(type) {
  return `/partner-with-us/?type=${encodeURIComponent(type)}#enquiry`;
}

export default function PartnerWithUsPage() {
  const { opening, ways, closing } = partnership;
  return (
    <>
      <PageHeader title={partnership.title} tagline={partnership.tagline} />

      <section>
        <div className="container-page grid gap-8 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-24">
          <SectionHeading eyebrow="Why Partnership Matters" title={opening.title} />
          <div className="space-y-5 text-lg text-charcoal/85">
            {opening.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 lg:py-24">
          <SectionHeading eyebrow="Get Involved" title="Ways to Partner With Us" />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {ways.map((way) => (
              <li key={way.title} className="flex flex-col rounded-2xl bg-cream p-7 ring-1 ring-forest/10">
                <span className="flex size-12 items-center justify-center rounded-full bg-forest text-white">
                  <Icon name={way.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">{way.title}</h3>
                <div className="mt-3 flex-1 space-y-3 text-charcoal/85">
                  {way.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
                <ButtonLink href={enquiryHref(way.enquiryType)} variant="accent" className="mt-6 self-start">
                  {way.action}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest">
        <div className="container-page py-16 lg:py-24">
          <SectionHeading title={partnership.whyPartnerTitle} tone="light" />
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {about.approach.map((item) => (
              <li key={item.title} className="border-l-2 border-gold pl-5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-lg text-white/80">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquiry">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-24">
          <SectionHeading
            eyebrow="Partnership Enquiry"
            title="Start a conversation"
            introduction="Tell us a little about yourself or your organisation and how you would like to work with us. We will respond by email."
          />
          <EnquiryForm
            variant="partnership"
            categories={partnershipTypes}
            categoryLabel="Type of Partnership"
            nameLabel="Name or Organisation"
          />
        </div>
      </section>

      <section className="bg-forest-deep text-white">
        <div className="container-page py-16 text-center lg:py-20">
          <h2 className="mx-auto max-w-3xl text-3xl leading-tight font-semibold text-white sm:text-4xl">{closing.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">{closing.text}</p>
          <p className="mt-6 font-display text-2xl text-gold">{closing.signature}</p>
        </div>
      </section>
    </>
  );
}

import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { contact, enquiryCategories } from "@/content/contact";
import { site } from "@/content/site";
import ButtonLink from "../components/ButtonLink";
import EnquiryForm from "../components/EnquiryForm";
import Icon from "../components/Icon";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "Contact",
  description: "Contact Hope Compassion Center in Nairobi, Kenya, with a general enquiry, partnership proposal or volunteering question.",
};

function whatsappHref(number) {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}

export default function ContactPage() {
  const details = [
    site.email && { icon: <LuMail className="size-5" aria-hidden="true" />, label: "Email", text: site.email, href: `mailto:${site.email}` },
    site.phone && { icon: <LuPhone className="size-5" aria-hidden="true" />, label: "Telephone", text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    site.whatsapp && { icon: <Icon name="WhatsApp" className="size-5" />, label: "WhatsApp", text: site.whatsapp, href: whatsappHref(site.whatsapp) },
    { icon: <LuMapPin className="size-5" aria-hidden="true" />, label: "Location", text: site.location },
  ].filter(Boolean);

  return (
    <>
      <PageHeader title={contact.title} tagline={contact.tagline} introduction={contact.introduction} />

      <section>
        <div className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-24">
          <div>
            <h2 className="text-3xl font-semibold">Contact Details</h2>
            <ul className="mt-8 space-y-6">
              {details.map((detail) => (
                <li key={detail.label} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest text-white">{detail.icon}</span>
                  <div>
                    <p className="text-sm font-bold tracking-[0.14em] text-rust uppercase">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="text-lg break-all text-charcoal hover:text-forest hover:underline">
                        {detail.text}
                      </a>
                    ) : (
                      <p className="text-lg">{detail.text}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {site.socialLinks.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold">Connect With Us</h2>
                <ul className="mt-4 flex gap-3">
                  {site.socialLinks.map((link) => (
                    <li key={link.platform}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener"
                        aria-label={link.platform}
                        className="flex size-11 items-center justify-center rounded-full bg-forest text-white hover:bg-forest-deep"
                      >
                        <Icon name={link.platform} className="size-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-semibold">Send Us an Enquiry</h2>
            <EnquiryForm variant="contact" categories={enquiryCategories} categoryLabel="Enquiry Type" nameLabel="Full Name" />
          </div>
        </div>
      </section>

      <section className="bg-cream-deep">
        <div className="container-page flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">{contact.partnershipInvitation.title}</h2>
            <p className="mt-4 text-lg text-charcoal/85">{contact.partnershipInvitation.text}</p>
          </div>
          <ButtonLink href="/partner-with-us/" className="shrink-0">
            Partner With Us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

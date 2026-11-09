import { notFound } from "next/navigation";
import { LuChevronDown } from "react-icons/lu";
import { getFaqs, getSiteSections } from "@/lib/content_repository";
import CallToAction from "../components/CallToAction";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "FAQs",
  description: "Answers to common questions about Hope Compassion Center, our programmes, volunteering and partnerships.",
};

export default async function FaqsPage() {
  const sections = await getSiteSections();
  if (!sections.faqs) notFound();
  const faqs = await getFaqs();

  return (
    <>
      <PageHeader title="Frequently Asked Questions" introduction="Answers to the questions we are asked most often." />
      <section>
        <div className="container-page max-w-3xl py-16 lg:py-24">
          <div className="divide-y divide-forest/15 border-y border-forest/15">
            {faqs.map((item) => (
              <details key={item.question} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-forest [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <LuChevronDown aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="space-y-3 pb-5 text-charcoal/85">
                  {item.answer.split(/\n\s*\n/).map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CallToAction
        title="Still have a question?"
        text="Get in touch and we will be glad to help."
        action="Contact Us"
        href="/contact/"
      />
    </>
  );
}

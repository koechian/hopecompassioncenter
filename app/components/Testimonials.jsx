import SectionHeading from "./SectionHeading";

export default function Testimonials({ quotes }) {
  return (
    <section className="bg-cream-deep">
      <div className="container-page py-16 lg:py-24">
        <SectionHeading eyebrow="In Their Words" title="Voices from our community" align="center" />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((item) => (
            <li key={`${item.name}-${item.quote.slice(0, 24)}`}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-forest/10">
                <span aria-hidden="true" className="font-display text-6xl leading-none text-gold">
                  “
                </span>
                <blockquote className="mt-1 flex-1 text-lg text-charcoal/90">{item.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {item.photoSrc && <img src={item.photoSrc} alt="" loading="lazy" className="size-12 rounded-full object-cover" />}
                  <span>
                    <span className="block font-semibold text-forest">{item.name}</span>
                    {item.context && <span className="block text-sm text-charcoal/70">{item.context}</span>}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

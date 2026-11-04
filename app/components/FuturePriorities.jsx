import SectionHeading from "./SectionHeading";

// Future priorities must read as plans, not as running programmes, so the section is labelled explicitly.
export default function FuturePriorities({ priorities, title }) {
  return (
    <section>
      <div className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Future Priorities"
          title={title}
          introduction="Areas we hope to develop as resources and partnerships become available. These are not yet running programmes."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {priorities.map((priority) => (
            <li key={priority.title} className="rounded-2xl border border-dashed border-forest/30 p-6">
              <p className="text-xs font-bold tracking-[0.14em] text-rust uppercase">Planned</p>
              <h3 className="mt-2 text-xl font-semibold">{priority.title}</h3>
              <p className="mt-2 text-charcoal/80">{priority.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

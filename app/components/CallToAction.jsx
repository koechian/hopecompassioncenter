import ButtonLink from "./ButtonLink";

// Closing invitation band used at the end of pages.
export default function CallToAction({ title, text, action, href, signature }) {
  return (
    <section className="bg-forest-deep text-white">
      <div className="container-page flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-semibold text-white">{title}</h2>
          <p className="mt-4 text-lg text-white/85">{text}</p>
          {signature && <p className="mt-4 font-display text-xl text-gold">{signature}</p>}
        </div>
        <ButtonLink href={href} variant="accent" className="shrink-0">
          {action}
        </ButtonLink>
      </div>
    </section>
  );
}

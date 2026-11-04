export default function SectionHeading({ eyebrow, title, introduction, align = "left", tone = "dark", as: Heading = "h2" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const light = tone === "light";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-bold tracking-[0.18em] uppercase ${light ? "text-gold" : "text-rust"}`}>{eyebrow}</p>
      )}
      <Heading className={`text-3xl leading-tight font-semibold sm:text-4xl ${light ? "text-white" : ""}`}>{title}</Heading>
      {introduction && <p className={`mt-4 text-lg ${light ? "text-white/85" : "text-charcoal/80"}`}>{introduction}</p>}
    </div>
  );
}

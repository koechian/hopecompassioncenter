// Partner and supporter logos on white tiles, so logos made for light backgrounds stay legible.
// Organisations without a logo are shown by name.
function PartnerMark({ organisation }) {
  return organisation.logoSrc ? (
    <img src={organisation.logoSrc} alt={organisation.name} loading="lazy" className="max-h-16 w-auto max-w-full object-contain" />
  ) : (
    <span className="text-center font-semibold text-forest">{organisation.name}</span>
  );
}

export default function PartnerLogos({ organisations }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {organisations.map((organisation) => (
        <li key={organisation.name}>
          {organisation.url ? (
            <a
              href={organisation.url}
              target="_blank"
              rel="noopener"
              className="flex h-28 items-center justify-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-forest/10 hover:ring-forest/30"
            >
              <PartnerMark organisation={organisation} />
            </a>
          ) : (
            <div className="flex h-28 items-center justify-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-forest/10">
              <PartnerMark organisation={organisation} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

// Opening band shared by every page except the home page.
export default function PageHeader({ title, tagline, introduction }) {
  return (
    <header className="bg-forest text-white">
      <div className="container-page py-16 sm:py-20">
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl">{title}</h1>
        {tagline && (
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold tracking-[0.14em] text-gold uppercase">
            {tagline.map((item, index) => (
              <span key={item} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-gold/70" />}
                {item}
              </span>
            ))}
          </p>
        )}
        {introduction && <p className="mt-6 max-w-2xl text-lg text-white/85">{introduction}</p>}
      </div>
    </header>
  );
}

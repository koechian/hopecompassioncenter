import ButtonLink from "./components/ButtonLink";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section>
      <div className="container-page flex flex-col items-start py-24 lg:py-32">
        <p className="text-xs font-bold tracking-[0.18em] text-rust uppercase">Error 404</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">We could not find that page</h1>
        <p className="mt-5 max-w-xl text-lg text-charcoal/85">
          The page may have moved during our website update. Try the home page or the menu above.
        </p>
        <ButtonLink href="/" className="mt-8">
          Go to the Home Page
        </ButtonLink>
      </div>
    </section>
  );
}

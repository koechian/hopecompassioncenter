"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { navigation } from "@/content/site";
import ButtonLink from "./ButtonLink";

const partnerHref = "/partner-with-us/";
const desktopLinks = navigation.filter((item) => item.href !== partnerHref);

function normalise(path) {
  return path === "/" ? path : path.replace(/\/?$/, "/");
}

function isCurrent(pathname, href) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = normalise(usePathname() ?? "/");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur-sm">
      <div className="container-page flex h-18 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <img src="/brand/logo_mark.svg" alt="Hope Compassion Center home" className="h-9 w-auto sm:hidden" />
          <img src="/brand/logo_wordmark.svg" alt="Hope Compassion Center home" className="hidden h-8 w-auto sm:block" />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7 text-[0.95rem] font-medium">
            {desktopLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                  className="relative py-2 text-charcoal transition-colors hover:text-forest aria-[current=page]:text-forest aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={partnerHref} variant="accent" arrow={false} className="px-4 py-2 text-xs whitespace-nowrap sm:text-sm" onClick={() => setMenuOpen(false)}>
            Partner With Us
          </ButtonLink>
          <button
            type="button"
            className="rounded-full p-2 text-forest hover:bg-forest/10 xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <LuX aria-hidden="true" className="size-6" /> : <LuMenu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Main" className="border-t border-forest/10 bg-cream xl:hidden">
          <ul className="container-page flex flex-col py-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-lg font-medium text-charcoal hover:bg-forest/5 aria-[current=page]:bg-forest/5 aria-[current=page]:text-forest"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

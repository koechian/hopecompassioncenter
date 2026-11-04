import Link from "next/link";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { navigation, site } from "@/content/site";
import Icon from "./Icon";

export default function SiteFooter() {
  const contactLines = [
    site.email && { icon: LuMail, text: site.email, href: `mailto:${site.email}` },
    site.phone && { icon: LuPhone, text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: LuMapPin, text: site.location },
  ].filter(Boolean);

  return (
    <footer className="bg-forest text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/brand/logo_wordmark_reversed.svg" alt="Hope Compassion Center" className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-white/80 italic">{site.tagline}</p>
          {site.socialLinks.length > 0 && (
            <div className="mt-6">
              <h2 className="font-sans text-sm font-bold tracking-[0.14em] text-gold uppercase">Follow Us</h2>
              <ul className="mt-3 flex gap-3">
                {site.socialLinks.map((link) => (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener"
                      aria-label={link.platform}
                      className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <Icon name={link.platform} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-bold tracking-[0.14em] text-gold uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-bold tracking-[0.14em] text-gold uppercase">Contact Us</h2>
          <ul className="mt-4 space-y-3">
            {contactLines.map(({ icon: LineIcon, text, href }) => (
              <li key={text} className="flex items-start gap-3 text-white/85">
                <LineIcon aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
                {href ? (
                  <a href={href} className="break-all hover:text-white hover:underline">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="container-page py-5 text-sm text-white/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

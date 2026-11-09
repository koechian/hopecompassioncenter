import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import { footerLinks, navigation } from "@/content/site";
import { getSiteSections } from "@/lib/content_repository";
import { enabledLinks } from "@/lib/navigation";
import AnnouncementBanner from "./components/AnnouncementBanner";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

const description =
  "Hope Compassion Center is a faith-inspired, community-based organisation in Nairobi, Kenya, improving the lives of vulnerable children, women, young people, older persons and families.";

export const metadata = {
  metadataBase: new URL("https://hopecompassioncenter.com"),
  title: {
    default: "Hope Compassion Center",
    template: "%s | Hope Compassion Center",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Hope Compassion Center",
    title: "Hope Compassion Center",
    description,
    images: ["/photos/hero.jpg"],
  },
};

export default async function RootLayout({ children }) {
  const sections = await getSiteSections();
  const mainMenu = enabledLinks(navigation, sections);

  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {sections.announcement && <AnnouncementBanner announcement={sections.announcement} />}
        <SiteHeader navigation={mainMenu} />
        <main id="main-content">{children}</main>
        <SiteFooter links={[...mainMenu, ...enabledLinks(footerLinks, sections)]} />
      </body>
    </html>
  );
}

import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

// A short notice above the header on every page, switched on in Sanity (Site Sections).
export default function AnnouncementBanner({ announcement }) {
  const { message, linkLabel, linkUrl } = announcement;
  return (
    <aside aria-label="Announcement" className="bg-rust text-white">
      <p className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-sm font-medium">
        <span>{message}</span>
        {linkUrl && (
          <Link href={linkUrl} className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:no-underline">
            {linkLabel || "Find out more"}
            <LuArrowRight aria-hidden="true" className="size-4" />
          </Link>
        )}
      </p>
    </aside>
  );
}

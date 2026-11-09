import { notFound } from "next/navigation";
import { LuFileText } from "react-icons/lu";
import { getPublications, getSiteSections } from "@/lib/content_repository";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "Reports & Publications",
  description: "Annual reports, financial statements and policies from Hope Compassion Center.",
};

function formatFileSize(bytes) {
  if (!bytes) return null;
  return bytes >= 1_000_000 ? `${(bytes / 1_000_000).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1000))} KB`;
}

function groupByYear(publications) {
  const years = [...new Set(publications.map((item) => item.year))];
  return years.map((year) => ({ year, items: publications.filter((item) => item.year === year) }));
}

function PublicationItem({ item }) {
  const size = formatFileSize(item.fileSize);
  return (
    <li className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10">
      <LuFileText aria-hidden="true" className="mt-1 size-6 shrink-0 text-rust" />
      <div>
        <p className="text-xs font-bold tracking-[0.14em] text-rust uppercase">{item.kind}</p>
        <h3 className="mt-1 text-xl font-semibold">
          <a href={item.fileUrl} target="_blank" rel="noopener" className="hover:underline">
            {item.title}
          </a>
        </h3>
        {item.description && <p className="mt-2 text-charcoal/80">{item.description}</p>}
        <p className="mt-2 text-sm text-charcoal/65">PDF{size && ` · ${size}`}</p>
      </div>
    </li>
  );
}

export default async function ReportsPage() {
  const sections = await getSiteSections();
  if (!sections.reports) notFound();
  const publications = await getPublications();

  return (
    <>
      <PageHeader
        title="Reports & Publications"
        tagline={["Annual Reports", "Financial Statements", "Policies"]}
        introduction="We are accountable to the communities we serve and to everyone who supports our work. These documents set out what we do and how we use the resources entrusted to us."
      />
      <section>
        <div className="container-page max-w-4xl space-y-14 py-16 lg:py-24">
          {publications.length === 0 && <p className="text-lg text-charcoal/85">Our first reports will be published here.</p>}
          {groupByYear(publications).map(({ year, items }) => (
            <div key={year}>
              <h2 className="text-3xl font-semibold">{year}</h2>
              <ul className="mt-6 space-y-4">
                {items.map((item) => (
                  <PublicationItem key={item._id} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

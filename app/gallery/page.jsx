import { galleryCategories } from "@/content/gallery";
import { getGalleryPhotos, getGalleryVideos } from "@/lib/content_repository";
import GalleryBrowser from "../components/GalleryBrowser";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Gallery",
  description: "Photographs from Hope Compassion Center's programmes, outreach and community events.",
};

export default async function GalleryPage() {
  const [galleryPhotos, galleryVideos] = await Promise.all([getGalleryPhotos(), getGalleryVideos()]);

  return (
    <>
      <PageHeader
        title="Gallery"
        introduction="Moments from our programmes, outreach visits and community events. Select a photograph to view it larger."
      />
      <section>
        <div className="container-page py-12 lg:py-16">
          <GalleryBrowser categories={galleryCategories} photos={galleryPhotos} />
        </div>
      </section>
      {galleryVideos.length > 0 && (
        <section className="bg-cream-deep">
          <div className="container-page py-16 lg:py-20">
            <SectionHeading eyebrow="Watch" title="Videos" />
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {galleryVideos.map((video) => (
                <li key={video.id}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="aspect-video w-full rounded-2xl bg-black"
                  />
                  <p className="mt-3 font-semibold text-forest">{video.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

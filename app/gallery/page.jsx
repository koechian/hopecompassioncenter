import { galleryCategories, galleryPhotos } from "@/content/gallery";
import GalleryBrowser from "../components/GalleryBrowser";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "Gallery",
  description: "Photographs from Hope Compassion Center's programmes, outreach and community events.",
};

export default function GalleryPage() {
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
    </>
  );
}

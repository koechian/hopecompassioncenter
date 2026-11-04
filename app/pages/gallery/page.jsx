import Link from "next/link";

const galleryImages = [
  "A volunteer handing out food packages to elderly women at an outdoor gathering",
  "Food packages being handed out to women seated under the trees",
  "Food packages laid out on a table for distribution",
  "Women gathered under the trees during an outreach visit",
  "A volunteer speaking with women at an outdoor gathering",
  "Women seated in a forest clearing during an outreach visit",
  "Visitors standing inside the children's centre",
  "A volunteer sharing a snack with toddlers at the daycare",
  "A volunteer feeding toddlers at the daycare",
  "A mother carrying her baby and a food package",
  "A man holding a toddler during a community visit",
  "Community members gathered outside for a distribution",
  "A volunteer helping a toddler walk across the hall",
  "Families seated in the hall during a distribution",
  "A volunteer with toddlers at the daycare",
  "A woman receiving a food package",
  "Women gathered outside for a food distribution",
  "A family receiving a food package from volunteers",
  "A volunteer greeting a woman as she receives a food package",
  "Families receiving food packages in the hall",
  "A volunteer holding a child at the daycare",
  "Community members receiving food packages outdoors",
  "Children seated around the room during a celebration at the children's centre",
].map((alt, index) => ({
  src: `/gallery/gallery_${String(index + 1).padStart(2, "0")}.jpg`,
  alt,
}));

export default function Gallery() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-brown py-20 gap-5 flex flex-col justify-center items-center">
        <h2 className="text-white font-semibold text-5xl">Gallery</h2>
        <p className="text-gray-400 w-[85%] mobile:w-1/2 text-center text-sm mobile:text-md">
          Moments from our feeding programmes, outreach visits and the children&apos;s centre.
        </p>

        <div className="flex flex-col pt-10">
          <div className="flex flex-row bg-amber-800 gap-2 px-5 py-1 rounded-lg">
            <Link href="/" className="text-gray-300">
              Home
            </Link>
            <p className="text-gray-900">{">  Gallery"}</p>
          </div>
        </div>
      </div>

      <div className="bg-cream py-10 tablet:py-20 px-4 tablet:px-10 desktop:px-20">
        <div className="columns-1 mobile:columns-2 laptop:columns-3 gap-4">
          {galleryImages.map((image) => (
            <a
              key={image.src}
              href={image.src}
              target="_blank"
              rel="noopener"
              className="block mb-4 break-inside-avoid overflow-hidden rounded-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

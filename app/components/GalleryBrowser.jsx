"use client";
import { useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";

const ALL = "All";

function PhotoViewer({ photos, index, onNavigate, onClose }) {
  const dialogRef = useRef(null);
  const photo = photos[index];

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  useEffect(() => {
    const navigateWithKeys = (event) => {
      if (event.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", navigateWithKeys);
    return () => window.removeEventListener("keydown", navigateWithKeys);
  }, [index, photos.length, onNavigate]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}
      aria-label="Photograph viewer"
      className="m-auto h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/90"
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-10" onClick={(event) => event.target === event.currentTarget && dialogRef.current.close()}>
        <img src={photo.src} alt={photo.caption} className="max-h-[80vh] max-w-full rounded-lg object-contain" />
        <p className="max-w-2xl text-center text-white/90">
          {photo.caption}
          <span className="ml-2 text-white/55">
            {index + 1} / {photos.length}
          </span>
        </p>
      </div>
      <button
        type="button"
        onClick={() => dialogRef.current.close()}
        aria-label="Close"
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <LuX aria-hidden="true" className="size-6" />
      </button>
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => onNavigate((index - 1 + photos.length) % photos.length)}
            aria-label="Previous photograph"
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-4"
          >
            <LuChevronLeft aria-hidden="true" className="size-7" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate((index + 1) % photos.length)}
            aria-label="Next photograph"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-4"
          >
            <LuChevronRight aria-hidden="true" className="size-7" />
          </button>
        </>
      )}
    </dialog>
  );
}

export default function GalleryBrowser({ categories, photos }) {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [openIndex, setOpenIndex] = useState(null);

  const populatedCategories = categories.filter((category) => photos.some((photo) => photo.category === category));
  const visiblePhotos = activeCategory === ALL ? photos : photos.filter((photo) => photo.category === activeCategory);

  return (
    <div>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {[ALL, ...populatedCategories].map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className="rounded-full border border-forest/25 px-4 py-2 text-sm font-medium text-forest transition-colors hover:border-forest aria-pressed:border-forest aria-pressed:bg-forest aria-pressed:text-white"
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visiblePhotos.map((photo, index) => (
          <li key={photo.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block w-full overflow-hidden rounded-xl text-left"
              aria-label={`View larger: ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="h-auto w-full transition-transform duration-500 ease-out-quart group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <PhotoViewer photos={visiblePhotos} index={openIndex} onNavigate={setOpenIndex} onClose={() => setOpenIndex(null)} />
      )}
    </div>
  );
}

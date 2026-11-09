import { PortableText } from "@portabletext/react";
import { imageUrl } from "@/lib/sanity_client";

// How rich text written in the Studio (news posts, opportunity details) is rendered.
const components = {
  block: {
    h2: ({ children }) => <h2 className="pt-4 text-3xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="pt-2 text-2xl font-semibold">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gold pl-5 text-xl italic">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal space-y-2 pl-6">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} className="font-medium text-rust underline hover:text-rust-deep">
        {children}
      </a>
    ),
  },
  types: {
    bodyImage: ({ value }) => (
      <figure>
        <img src={imageUrl(value, 1600)} alt={value.alt} loading="lazy" className="w-full rounded-2xl object-cover" />
        {value.caption && <figcaption className="mt-2 text-sm text-charcoal/70">{value.caption}</figcaption>}
      </figure>
    ),
  },
};

export default function RichText({ value, className = "space-y-5" }) {
  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
}

import { defineArrayMember, defineField, defineType } from "sanity";
import { asOptions, galleryCategories } from "./categories.js";

// An album groups photographs from one activity or event. Several photographs can be dropped in at once.
export const galleryAlbum = defineType({
  name: "galleryAlbum",
  title: "Gallery Album",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      type: "string",
      options: { list: asOptions(galleryCategories), layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "date", type: "date", description: "When the photographs were taken. Newer albums are shown first." }),
    defineField({
      name: "photos",
      title: "Photographs",
      description: "Only publish identifiable photographs of children with the appropriate consent.",
      type: "array",
      options: { layout: "grid" },
      of: [
        defineArrayMember({
          type: "image",
          name: "galleryPhoto",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "caption",
              type: "string",
              description: "Also read aloud to people who cannot see the photograph. Defaults to the album title.",
            }),
            defineField({ name: "onHomePage", title: "Show on the home page", type: "boolean", initialValue: false }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { title: "title", category: "category", media: "photos.0", photos: "photos" },
    prepare: ({ title, category, media, photos }) => ({ title, subtitle: `${category} · ${photos?.length ?? 0} photographs`, media }),
  },
});

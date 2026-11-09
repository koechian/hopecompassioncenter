import { defineArrayMember, defineField, defineType } from "sanity";
import { asOptions, galleryCategories } from "./categories.js";

const youtubeLink = /^https:\/\/(www\.|m\.)?(youtube\.com|youtu\.be)\//;

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
      validation: (rule) =>
        rule.custom((photos, { document }) =>
          photos?.length || document.videos?.length ? true : "Add at least one photograph or video.",
        ),
    }),
    defineField({
      name: "videos",
      description: "Upload videos to YouTube first, then paste their links here. They play on the Gallery page.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "galleryVideo",
          fields: [
            defineField({
              name: "url",
              title: "YouTube link",
              type: "url",
              validation: (rule) =>
                rule.required().custom((url) => (!url || youtubeLink.test(url) ? true : "Use a youtube.com or youtu.be link.")),
            }),
            defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "title", subtitle: "url" } },
        }),
      ],
    }),
  ],
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { title: "title", category: "category", media: "photos.0", photos: "photos", videos: "videos" },
    prepare: ({ title, category, media, photos, videos }) => ({
      title,
      subtitle: `${category} · ${photos?.length ?? 0} photographs · ${videos?.length ?? 0} videos`,
      media,
    }),
  },
});

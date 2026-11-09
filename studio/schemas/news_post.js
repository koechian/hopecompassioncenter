import { defineArrayMember, defineField, defineType } from "sanity";
import { asOptions, newsCategories } from "./categories.js";

export const newsPost = defineType({
  name: "newsPost",
  title: "News & Stories",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Web address",
      description: "The post appears at /news/<web address>/. Avoid changing it once published.",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "date", type: "date", initialValue: () => new Date().toISOString().slice(0, 10), validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      type: "string",
      options: { list: asOptions(newsCategories), layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "The newest featured post leads the News & Stories page.",
      initialValue: false,
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 3,
      description: "One or two sentences, shown on cards and in search results.",
      validation: (rule) => rule.required().max(240),
    }),
    defineField({ name: "image", title: "Main photograph", type: "imageWithAlt" }),
    defineField({
      name: "body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Paragraph", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        }),
        defineArrayMember({
          type: "image",
          name: "bodyImage",
          title: "Photograph",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Description", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "caption", type: "string" }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "date", media: "image" } },
});

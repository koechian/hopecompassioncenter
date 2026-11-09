import { defineField, defineType } from "sanity";
import { asOptions, publicationTypes } from "./categories.js";

export const publication = defineType({
  name: "publication",
  title: "Report or Publication",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "kind",
      title: "Type",
      type: "string",
      options: { list: asOptions(publicationTypes), layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "year", type: "number", validation: (rule) => rule.required().integer().min(2017).max(2100) }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({
      name: "file",
      title: "Document",
      description: "A PDF is best; it opens in every browser.",
      type: "file",
      options: { accept: ".pdf,application/pdf" },
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [{ title: "Newest first", name: "yearDesc", by: [{ field: "year", direction: "desc" }] }],
  preview: {
    select: { title: "title", year: "year", kind: "kind" },
    prepare: ({ title, year, kind }) => ({ title, subtitle: `${kind} · ${year}` }),
  },
});

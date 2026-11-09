import { defineArrayMember, defineField, defineType } from "sanity";
import { asOptions, opportunityTypes } from "./categories.js";

export const opportunity = defineType({
  name: "opportunity",
  title: "Opportunity",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "kind",
      title: "Type",
      type: "string",
      options: { list: asOptions(opportunityTypes), layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "location", type: "string" }),
    defineField({
      name: "closingDate",
      title: "Closing date",
      description: "The opportunity is taken off the website after this date. Leave empty for open-ended roles.",
      type: "date",
    }),
    defineField({ name: "summary", type: "text", rows: 3, validation: (rule) => rule.required().max(300) }),
    defineField({
      name: "details",
      title: "Full details",
      description: "Responsibilities, requirements and how to apply.",
      type: "array",
      of: [defineArrayMember({ type: "block", styles: [{ title: "Paragraph", value: "normal" }, { title: "Subheading", value: "h3" }] })],
    }),
    defineField({ name: "applyEmail", title: "Apply by email to", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "applyUrl", title: "Or apply at this address", type: "url" }),
  ],
  orderings: [{ title: "Closing soonest", name: "closingAsc", by: [{ field: "closingDate", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "kind" } },
});

import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "start", title: "Starts", type: "datetime", validation: (rule) => rule.required() }),
    defineField({
      name: "end",
      title: "Ends",
      type: "datetime",
      validation: (rule) => rule.min(rule.valueOfField("start")).error("An event cannot end before it starts."),
    }),
    defineField({ name: "location", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "summary", type: "text", rows: 4, validation: (rule) => rule.required().max(400) }),
    defineField({ name: "image", title: "Photograph", type: "imageWithAlt" }),
    defineField({
      name: "linkUrl",
      title: "Registration or details link",
      description: "Optional. A registration form, a news post about the event, or a page with more details.",
      type: "url",
      validation: (rule) => rule.uri({ allowRelative: true }),
    }),
    defineField({ name: "linkLabel", title: "Link text", type: "string", description: "e.g. Register, Read more. Defaults to “More details”." }),
  ],
  orderings: [{ title: "Soonest first", name: "startAsc", by: [{ field: "start", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "start", media: "image" } },
});

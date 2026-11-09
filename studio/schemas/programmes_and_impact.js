import { defineArrayMember, defineField, defineType } from "sanity";

const titleAndText = [
  defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "text", type: "text", rows: 3, validation: (rule) => rule.required() }),
];

// Programmes, impact figures and future priorities live in one document so editors can drag them into order.
export const programmesAndImpact = defineType({
  name: "programmesAndImpact",
  title: "Programmes & Impact",
  type: "document",
  fields: [
    defineField({
      name: "impactFigures",
      title: "Impact figures",
      description: "Shown under “Our Impact at a Glance” on the home page.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "impactFigure",
          fields: [
            defineField({ name: "value", type: "string", description: "e.g. 350+", validation: (rule) => rule.required() }),
            defineField({ name: "label", type: "string", description: "e.g. Children Reached", validation: (rule) => rule.required() }),
            defineField({ name: "detail", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
    defineField({
      name: "programmes",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "programme",
          fields: [
            defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "slug",
              title: "Page anchor",
              description: "Used in links to this programme, e.g. /programmes/#youth. Avoid changing it once published.",
              type: "slug",
              options: { source: (_, { parent }) => parent?.title },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "summary", type: "text", rows: 3, description: "Shown on the home page.", validation: (rule) => rule.required() }),
            defineField({ name: "introduction", type: "text", rows: 3, validation: (rule) => rule.required() }),
            defineField({ name: "image", type: "imageWithAlt", validation: (rule) => rule.required() }),
            defineField({
              name: "activities",
              type: "array",
              of: [defineArrayMember({ type: "object", name: "activity", fields: titleAndText })],
            }),
          ],
          preview: { select: { title: "title", media: "image" } },
        }),
      ],
    }),
    defineField({
      name: "futurePriorities",
      title: "Future priorities",
      description: "Areas the organisation hopes to develop. Always presented as planned, not running.",
      type: "array",
      of: [defineArrayMember({ type: "object", name: "futurePriority", fields: titleAndText })],
    }),
  ],
  preview: { prepare: () => ({ title: "Programmes & Impact" }) },
});

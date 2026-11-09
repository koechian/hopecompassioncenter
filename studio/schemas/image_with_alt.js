import { defineField, defineType } from "sanity";

// A photograph with the description screen readers announce in its place.
export const imageWithAlt = defineType({
  name: "imageWithAlt",
  title: "Photograph",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Description",
      type: "string",
      description: "Describe what the photograph shows, for people who cannot see it.",
      validation: (rule) => rule.required(),
    }),
  ],
});

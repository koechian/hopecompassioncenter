import { defineArrayMember, defineField, defineType } from "sanity";
import { asOptions, socialPlatforms } from "./categories.js";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Contact Details",
  type: "document",
  fields: [
    defineField({ name: "email", title: "Email address", type: "string", validation: (rule) => rule.required().email() }),
    defineField({ name: "phone", title: "Telephone", type: "string", description: "As it should be shown, e.g. +254 725 256570." }),
    defineField({ name: "whatsapp", title: "WhatsApp number", type: "string", description: "Include the country code." }),
    defineField({ name: "location", title: "Location", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "socialLinks",
      title: "Social media accounts",
      description: "Only accounts officially managed by Hope Compassion Center.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              type: "string",
              options: { list: asOptions(socialPlatforms) },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "url", title: "Address", type: "url", validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Contact Details" }) },
});

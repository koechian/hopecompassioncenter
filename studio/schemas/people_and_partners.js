import { defineArrayMember, defineField, defineType } from "sanity";
import { asOptions, teamGroups } from "./categories.js";

// These lists are singletons, so editors set the display order by dragging entries.

export const team = defineType({
  name: "team",
  title: "Our Team",
  type: "document",
  fields: [
    defineField({ name: "introduction", type: "text", rows: 3 }),
    defineField({
      name: "members",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "teamMember",
          fields: [
            defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "role", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "group",
              type: "string",
              options: { list: asOptions(teamGroups), layout: "radio" },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "photo", type: "image", options: { hotspot: true } }),
            defineField({ name: "bio", title: "Short biography", type: "text", rows: 3, validation: (rule) => rule.max(400) }),
          ],
          preview: { select: { title: "name", subtitle: "role", media: "photo" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Our Team" }) },
});

export const partners = defineType({
  name: "partners",
  title: "Partners & Supporters",
  type: "document",
  fields: [
    defineField({ name: "introduction", type: "text", rows: 3 }),
    defineField({
      name: "organisations",
      type: "array",
      description: "Only list organisations that have agreed to be named.",
      of: [
        defineArrayMember({
          type: "object",
          name: "partnerOrganisation",
          fields: [
            defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "logo", type: "image", description: "A PNG or SVG with a transparent or white background works best." }),
            defineField({ name: "url", title: "Website", type: "url" }),
          ],
          preview: { select: { title: "name", subtitle: "url", media: "logo" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Partners & Supporters" }) },
});

export const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "quotes",
      type: "array",
      description: "Use first names only for community members, and only with their permission.",
      of: [
        defineArrayMember({
          type: "object",
          name: "testimonial",
          fields: [
            defineField({ name: "quote", type: "text", rows: 4, validation: (rule) => rule.required().max(500) }),
            defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "context", type: "string", description: "e.g. Parent, Kids Hub · Volunteer since 2022" }),
            defineField({ name: "photo", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "name", subtitle: "quote", media: "photo" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Testimonials" }) },
});

export const faqs = defineType({
  name: "faqs",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({
      name: "questions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          fields: [
            defineField({ name: "question", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "answer", type: "text", rows: 5, validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "question", subtitle: "answer" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "FAQs" }) },
});

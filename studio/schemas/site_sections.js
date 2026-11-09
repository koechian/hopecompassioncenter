import { defineField, defineType } from "sanity";

// Each optional page or section of the website, switched on once its content is ready.
// A switched-off page is left out of menus and the sitemap and shows the "page not found" message.
export const sectionToggles = [
  { name: "announcement", title: "Announcement banner", description: "A short notice across the top of every page." },
  { name: "events", title: "Events page", description: "Upcoming and recent events, in the main menu." },
  { name: "opportunities", title: "Opportunities page", description: "Volunteer roles, jobs and calls for proposals, linked from the footer and Partner With Us." },
  { name: "reports", title: "Reports & Publications page", description: "Annual reports, financial statements and policies, linked from the footer and About Us." },
  { name: "faqs", title: "FAQs page", description: "Frequently asked questions, linked from the footer and Contact." },
  { name: "team", title: "Our Team section", description: "Leadership, board and staff, on About Us." },
  { name: "partners", title: "Partners & Supporters section", description: "Partner logos, on the home page and Partner With Us." },
  { name: "testimonials", title: "Testimonials section", description: "Quotes from people we work with, on the home page." },
];

export const siteSections = defineType({
  name: "siteSections",
  title: "Site Sections",
  type: "document",
  fieldsets: [{ name: "announcementText", title: "Announcement banner", options: { collapsible: true } }],
  fields: [
    ...sectionToggles.map(({ name, title, description }) =>
      defineField({ name, title, description, type: "boolean", initialValue: false }),
    ),
    defineField({
      name: "announcementMessage",
      title: "Message",
      type: "string",
      fieldset: "announcementText",
      validation: (rule) => rule.max(160),
    }),
    defineField({ name: "announcementLinkLabel", title: "Link text", type: "string", fieldset: "announcementText" }),
    defineField({
      name: "announcementLinkUrl",
      title: "Link address",
      description: "A page on this site such as /events/, or a full web address.",
      type: "url",
      fieldset: "announcementText",
      validation: (rule) => rule.uri({ allowRelative: true }),
    }),
  ],
  preview: { prepare: () => ({ title: "Site Sections" }) },
});

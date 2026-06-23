import { defineField, defineType } from "sanity";

/**
 * Singleton document for site-wide settings.
 * Managed via Studio with documentId "settings".
 */
export const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "cvFile",
      title: "CV File",
      description: "Upload your CV/Resume as PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      description: "Profile photo displayed in the hero section",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      description: "Short description text in the hero section",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Settings" };
    },
  },
});

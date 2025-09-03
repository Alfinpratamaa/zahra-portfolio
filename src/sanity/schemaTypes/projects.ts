import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isOngoing",
      title: "Currently Working on This Project",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      hidden: ({ parent }) => parent?.isOngoing === true,
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          const { parent } = context;
          if ((parent as any)?.isOngoing) {
            return true;
          }
          if (!endDate) {
            return "End date is required when project is not ongoing";
          }
          if (
            (parent as any)?.startDate &&
            endDate < (parent as any).startDate
          ) {
            return "End date must be after start date";
          }
          return true;
        }),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

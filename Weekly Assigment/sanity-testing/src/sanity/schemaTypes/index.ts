import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      title: "Hero Section",
      name: "hero",
      type: "document",
      fields: [
        {
          title: "Enter frist Hero Heating",
          name: "fristH1",
          type: "string",
        },
        {
          title: "Span Heading to lucking blue colour",
          name: "span",
          type: "string",
        },
        {
          title: "Enter last Hero Heating",
          name: "lastH1",
          type: "string",
        },
        {
          title: "Write Description",
          name: "description",
          type: "string",
        },
        {
          title: "Image for Hero Section",
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              title: "Alt Text",
              name: "alt",
              type: "string",
            }
          ]
        },
      ],
    },
  ],
};

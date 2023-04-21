import type { TinaField } from "tinacms";
export function homeFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "featured_piece_name",
      label: "Featured Piece",
    },
    {
      type: "string",
      name: "featured_contributor",
      label: "Featured Contributor",
    },
    {
      type: "image",
      name: "image",
      label: "Featured Image",
    },
    {
      type: "string",
      name: "featured_link",
      label: "Featured Link",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "contributor",
      label: "contributor",
    },
    {
      type: "string",
      name: "tags",
      label: "Genre",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "boolean",
      name: "featured",
      label: "Collection",
    },
    {
      type: "string",
      name: "category",
      label: "Collection No.",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "thumb",
      label: "thumb",
    },
    {
      type: "string",
      name: "thumb_alt",
      label: "Thumbnail Alt Text",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function submissionsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "boolean",
      name: "status",
      label: "Submission Status",
    },
  ] as TinaField[];
}

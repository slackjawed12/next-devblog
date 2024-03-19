// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    tag: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
    thumbnail: {
      type: "string",
      required: false,
    },
    createdAt: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMath],
    //@ts-ignore
    rehypePlugins: [rehypeKatex],
  },
});

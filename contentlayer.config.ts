// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

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

const contentSource = makeSource({
  contentDirPath: "./src/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        //TODO: type error fix
        //@ts-ignore
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
      //TODO: type error fix
      //@ts-ignore
      highlight,
    ],
  },
});

export default contentSource;

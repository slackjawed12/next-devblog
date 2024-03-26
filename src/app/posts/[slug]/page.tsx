import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title };
};

export function PostLayout({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  const Content = getMDXComponent(post?.body?.code ?? "");

  return (
    <article className="py-8 mx-auto max-w-3xl prose prose-invert">
      <div className="mb-8 text-center">
        <time dateTime={post?.createdAt} className="mb-5 text-s text-gray-500">
          {format(parseISO(post?.createdAt ?? "2024-03-13"), "LLLL d, yyyy")}
        </time>
        <h1 className="text-2xl font-bold">{post?.title}</h1>
      </div>
      <Content />
    </article>
  );
}

export default PostLayout;

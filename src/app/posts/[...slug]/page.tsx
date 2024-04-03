import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Giscus from "src/components/Giscus";

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slug.split("/") }));
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const post = allPosts.find((post) => post.slug === params.slug.join("/"));
  return { title: post?.title };
};

export default function PostLayout({ params }: { params: { slug: string[] } }) {
  const slugByParams = `${params.slug.join("/")}`;
  const post = allPosts.find((post) => `${post.slug}` === slugByParams);
  const Content = getMDXComponent(post?.body?.code ?? "");

  return (
    <article className="pt-8 mx-auto max-w-3xl prose prose-sm dark:prose-invert sm:prose-base lg:prose-lg">
      <div className="mb-8 text-center">
        <time dateTime={post?.createdAt}>
          {format(parseISO(post?.createdAt ?? "2024-03-13"), "LLLL d, yyyy")}
        </time>
        <h1>{post?.title}</h1>
      </div>
      <Content />
      <Giscus />
    </article>
  );
}

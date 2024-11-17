import { Post } from 'contentlayer/generated';
import Link from 'next/link';

export default function PostItem({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="my-10 flex flex-col">
        <h2 className="text-primary-color truncate py-2 text-sm font-bold md:text-xl">
          {post.title}
        </h2>
        <span className="text-primary-color py-1 text-sm md:text-lg">{post.description}</span>
        <span className="py-1 text-xs text-slate-400 md:text-sm">
          {post.createdAt.split('T')[0]}
        </span>
      </div>
    </Link>
  );
}

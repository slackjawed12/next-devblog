import { Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="flex justify-between">
        <GlobalSideNavigation />
        <RecentPosts />
      </div>
    </main>
  );
}

function GlobalSideNavigation() {
  return <div className="p-2 hidden lg:flex">카테고리</div>;
}

function RecentPosts() {
  const copiedPost = allPosts.slice();
  return (
    <div className="flex-1">
      <text className="text-center">최근 게시물</text>
      {copiedPost
        .sort((o1, o2) => compareDesc(o1.createdAt, o2.createdAt))
        .map((post, i) => {
          return <PostItem key={i} post={post} />;
        })}
    </div>
  );
}

function PostItem({ post }: { post: Post }) {
  return (
    <Link href={post.url}>
      <div className="my-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold py-2 text-xl">{post.title}</h2>
          <text>{post.createdAt.split("T")[0]}</text>
        </div>
        <text>{post.description}</text>
      </div>
    </Link>
  );
}

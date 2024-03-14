import { Post, allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="flex justify-center align-middle">
        <GlobalNavigation />
        <RecentPosts />
      </div>
    </main>
  );
}

function GlobalNavigation() {
  return <div className="p-8">카테고리</div>;
}

function RecentPosts() {
  return (
    <div className="flex-1">
      <text className="text-center">최근 게시물</text>
      {allPosts.map((post, i) => {
        return (
          <Link key={i} href={post.url}>
            <PostItem post={post} />
          </Link>
        );
      })}
    </div>
  );
}

function PostItem({ post }: { post: Post }) {
  return (
    <>
      <h2 className="font-bold py-2 text-xl">{post.title}</h2>
      <text>{post.description}</text>
    </>
  );
}

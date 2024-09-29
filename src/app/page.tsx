import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import GlobalSideNavigation from 'src/components/GlobalSideNavigation';
import PostItem from 'src/components/PostItem';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="flex">
        <GlobalSideNavigation />
        <RecentPosts />
      </div>
    </main>
  );
}

function RecentPosts() {
  const copiedPost = allPosts.slice();
  return (
    <div className="flex-1">
      <div className="text-center">최근 게시물</div>
      {copiedPost
        .sort((o1, o2) => compareDesc(o1.createdAt, o2.createdAt))
        .map((post, i) => {
          return <PostItem key={i} post={post} />;
        })}
    </div>
  );
}

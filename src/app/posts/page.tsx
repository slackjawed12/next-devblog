import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import GlobalSideNavigation from 'src/components/GlobalSideNavigation';
import PostItem from 'src/components/PostItem';
import { classifyByCategory } from 'src/util/classifier';

type PostPageProps = {
  searchParams: {
    category?: string;
  };
};

export default function PostPage({ searchParams }: PostPageProps) {
  return (
    <>
      <main className="min-h-screen">
        <div className="flex">
          <GlobalSideNavigation />
          <CategoryPosts category={searchParams.category} />
        </div>
      </main>
    </>
  );
}

function CategoryPosts({ category }: { category?: string }) {
  const copiedPost = allPosts.slice();
  if (category) {
    const classified = classifyByCategory(copiedPost).find((v) => v.category === category);

    if (classified) {
      const targetPosts = classified.posts;

      return (
        <div className="flex-1">
          <div className="text-center">{category} 관련 게시물</div>
          {targetPosts
            .sort((o1, o2) => compareDesc(o1.createdAt, o2.createdAt))
            .map((post, i) => {
              return <PostItem key={i} post={post} />;
            })}
        </div>
      );
    }
  }

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

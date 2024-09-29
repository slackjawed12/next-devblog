'use client';

import { allPosts, Post } from 'contentlayer/generated';
import Link from 'next/link';
import { classifyByCategory } from 'src/util/classifier';

export default function GlobalSideNavigation() {
  const classifiedPosts = classifyByCategory(allPosts);
  classifiedPosts.sort((o1, o2) => (o1.category < o2.category ? -1 : 1));

  return (
    <div className="mr-6 hidden flex-col md:flex">
      <span className="mb-8 text-center">주제별 카테고리</span>
      <CategoryList classified={classifiedPosts} />
    </div>
  );
}

function CategoryList({ classified }: { classified: { category: string; posts: Post[] }[] }) {
  return (
    <>
      {classified.map((post, index) => {
        return (
          <Link key={index} href={`/posts?category=${post.category}`}>
            <div className="pb-2 pt-2">
              <span>{post.category.toUpperCase()}</span>
            </div>
          </Link>
        );
      })}
      <div className="flex"></div>
    </>
  );
}

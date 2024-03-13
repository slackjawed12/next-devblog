import Link from "next/link";

export function Header() {
  return (
    <header className="p-8 flex justify-between">
      <h1>개발자 이민재입니다.</h1>
      <Link href={"/posts"}>
        <span>POSTS</span>
      </Link>
    </header>
  );
}

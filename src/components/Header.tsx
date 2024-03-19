import Link from "next/link";

export function Header() {
  return (
    <header className="p-10 flex justify-between">
      <Link href={"/"}>
        <h1>개발자 이민재입니다.</h1>
      </Link>
      <Link href={"/posts"}>
        <span>POSTS</span>
      </Link>
    </header>
  );
}

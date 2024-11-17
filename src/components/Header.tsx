import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Providers } from 'src/app/providers';

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-between pb-2 pt-6">
        <Link href={'/'}>
          <h1 className="text-primary-color font-bold">개발자 이민재입니다.</h1>
        </Link>
        <div className="flex items-center justify-between gap-3">
          <ThemeSwitcher />
          <Link href={'/posts'}>
            <span className="text-primary-color font-bold">POSTS</span>
          </Link>
        </div>
      </div>

      <div className="mb-6 mt-4">
        <div className="border border-solid border-neutral-700 dark:border-neutral-200" />
      </div>
    </header>
  );
}

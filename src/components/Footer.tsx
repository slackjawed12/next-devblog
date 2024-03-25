import Link from "next/link";
import { BLOG_START_YEAR } from "src/config/constants";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export function Footer() {
  const yearRange = () => {
    const currentYear = new Date().getFullYear();
    return `${BLOG_START_YEAR}-${currentYear}`;
  };

  return (
    <footer className="py-5">
      <div className="flex flex-row-reverse space-x-2 space-x-reverse mb-1">
        <a href="https://github.com/slackjawed12">
          <GithubIcon />
        </a>
        <a href="https://linkedin.com/in/minjae-lee-6851592a0">
          <LinkedinIcon />
        </a>
      </div>
      <div className="flex justify-end">
        <Link href={"/"}>© {yearRange()} Lee MinJae blog&nbsp;</Link>
        <span>Powered By&nbsp;</span>
        <span>Next.js</span>
      </div>
    </footer>
  );
}

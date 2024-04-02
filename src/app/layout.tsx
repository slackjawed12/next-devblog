import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Providers } from "./providers";

import "katex/dist/katex.min.css";
import Footer from "src/components/Footer";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minjae Lee Blog",
  description: "It covers development stories, and technical stories.",
  other: {
    "naver-site-verification": "17edbe88d0eda099c70da8802de4604567027c70",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto max-w-3xl px-6 min-h-full h-auto sm:max-w-6xl sm:px-8`}
      >
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

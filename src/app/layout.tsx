import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "../components/Header";

import "../styles/globals.css";
import "katex/dist/katex.min.css";
import { Footer } from "src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minjae Lee Blog",
  description: "It covers development stories, and technical stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto max-w-3xl px-6 sm:max-w-6xl sm:px-8`}
      >
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

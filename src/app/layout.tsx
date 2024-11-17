import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '../components/Header';
import Footer from 'src/components/Footer';
import 'katex/dist/katex.min.css';
import '../styles/globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Minjae Lee Blog',
  description: 'It covers development stories, and technical stories.',
  other: {
    'naver-site-verification': '17edbe88d0eda099c70da8802de4604567027c70',
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
        className={`${inter.className} max-w-3x bg-primary-color mx-auto h-auto min-h-screen px-6 sm:max-w-6xl sm:px-8`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

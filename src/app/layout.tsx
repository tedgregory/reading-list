import '@/app/globals.scss';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import Link from 'next/link';

const lato = Lato({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Read Books. Команда Жако.',
  description: 'Читайте больше хороших книг, друзья.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-gray-100 text-gray-900`}>
        <div className="max-w-4xl mx-auto p-4">
          <header className="flex justify-start items-center gap-4">
            <Link href="/" className="text-2xl font-bold">
              📚 Read Books
            </Link>
            <nav>
              <Link href="/about" className="text-blue-500 underline">
                О проекте
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}

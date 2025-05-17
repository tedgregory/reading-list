import '@/app/globals.scss';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

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
          <h1 className="text-2xl font-bold mb-4">📚 Read Books</h1>
          <h2 className="text-xl font-bold mb-3">Список прочитанных книг</h2>
          {children}
        </div>
      </body>
    </html>
  );
}

import { ApiBook, Book } from '@/types';

export async function fetchBooks(query: string, limit: number | null = null): Promise<Book[]> {
  const API_LIMIT = parseInt(
    process.env.NEXT_PUBLIC_API_LIMIT || process.env.API_LIMIT || '10',
    10,
  );
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${limit || API_LIMIT}`,
  );
  const data = await res.json();

  return (data.docs || []).map((doc: ApiBook, idx: number) => ({
    id: doc.key ?? `book-${idx}`,
    title: doc.title,
    authors: doc.author_name ?? [],
    publishedYear: doc.first_publish_year?.toString() ?? '',
  }));
}

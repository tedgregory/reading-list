import { ApiBook, Book } from '@/types';

const API_LIMIT = parseInt(process.env.NEXT_PUBLIC_API_LIMIT || '10', 10);

export async function fetchBooks(query: string, limit: number | null = API_LIMIT): Promise<Book[]> {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${limit}`,
  );
  const data = await res.json();

  return (data.docs || []).map((doc: ApiBook, idx: number) => ({
    id: doc.key ?? `book-${idx}`,
    title: doc.title,
    authors: doc.author_name ?? [],
    publishedYear: doc.first_publish_year?.toString() ?? '',
  }));
}

'use client';

import { useState } from 'react';
import { useReadingListStore } from '@/store/useReadingList';
import type { Book } from '@/types';
import SearchBooks from '@/components/SearchBooks';
import BookList from '@/components/BookList';

export default function Home() {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const { books } = useReadingListStore();

  const searchBooks = async (query: string) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`,
      );
      const data = await response.json();

      const formattedResults = data.docs.map((doc: Book) => ({
        id: doc.id,
        title: doc.title,
        authors: doc.authors,
        publishedYear: doc.publishedYear?.toString(),
      }));

      setSearchResults(formattedResults);
    } catch (error) {
      console.error('Error fetching books:', error);
      setSearchResults([]);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Book Search</h1>

      <SearchBooks onSearch={searchBooks} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <BookList items={searchResults} title="Результат"></BookList>
        <BookList items={books} title="Прочитано"></BookList>
      </div>
    </div>
  );
}

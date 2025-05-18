import { fetchBooks } from '@/lib/fetchBooks';
import { Book } from '@/types';
import { useState } from 'react';

export default function useApi(limit: number | null = null) {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchBooks = async (query: string) => {
    try {
      setIsLoading(true);

      const books = await fetchBooks(query, limit);

      setSearchResults(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    searchResults,
    searchBooks,
    isLoading,
  };
}

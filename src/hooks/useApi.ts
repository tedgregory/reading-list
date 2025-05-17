import { ApiBook, Book } from '@/types';
import { useState } from 'react';

export default function useApi() {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchBooks = async (query: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`,
      );
      const data = await response.json();

      const formattedResults: Book[] = data.docs.slice(0, 10).map((doc: ApiBook) => ({
        id: doc.key,
        title: doc.title,
        authors: doc.author_name || [],
        publishedYear: doc.first_publish_year,
      }));

      setSearchResults(formattedResults);
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

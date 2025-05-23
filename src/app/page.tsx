'use client';

import SearchBooks from '@/components/SearchBooks';
import BookList from '@/components/BookList';
import useApi from '@/hooks/useApi';
import { useReadingListStore } from '@/store/useReadingList';
import { Book } from '@/types';
import SearchList from '@/components/SearchList';
import Spinner from '@/components/Spinner';

export default function Home() {
  const { searchResults, searchBooks, isLoading } = useApi();
  const { books } = useReadingListStore();

  const isResultInList = (book: Book) => {
    return books.some((b) => b.id === book.id);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <SearchBooks onSearch={searchBooks} isLoading={isLoading} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {isLoading ? (
          <Spinner />
        ) : (
          <SearchList
            items={searchResults}
            title="Результаты поиска"
            checkInList={isResultInList}
          ></SearchList>
        )}
        <BookList items={books} title="Список прочитанного"></BookList>
      </div>
    </div>
  );
}

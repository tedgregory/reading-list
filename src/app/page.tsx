'use client';

import SearchBooks from '@/components/SearchBooks';
import BookList from '@/components/BookList';
import useApi from '@/hooks/useApi';
import { useReadingListStore } from '@/store/useReadingList';
import { Book } from '@/types';
import SearchList from '@/components/SearchList';

export default function Home() {
  const { searchResults, searchBooks } = useApi();
  const { books } = useReadingListStore();

  const isResultInList = (book: Book) => {
    return books.some((b) => b.id === book.id);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Поиск книг в OpenLibrary</h1>

      <SearchBooks onSearch={searchBooks} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <SearchList
          items={searchResults}
          title="Результат"
          checkInList={isResultInList}
        ></SearchList>
        <BookList items={books} title="Прочитано" checkInList={() => true}></BookList>
      </div>
    </div>
  );
}

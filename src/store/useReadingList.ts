// zustand main store
import { Book, ReadingListState } from '@/types/mainTypes';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useReadingListStore = create<ReadingListState>()(
  persist(
    (set, get) => ({
      books: [],
      addBook: (book: Book) => set((state) => ({ books: [...state.books, book] })),
      removeBook: (id) => set((state) => ({ books: state.books.filter((book) => book.id !== id) })),
      isInReadingList: (book) => {
        return get().books.some((b) => b.id === book.id);
      },
    }),
    {
      name: 'reading-list-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

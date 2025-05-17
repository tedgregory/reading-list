export type ApiBook = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: string;
};
export type Book = {
  id: string;
  title: string;
  authors?: string[];
  publishedYear?: string;
};

export type ReadingListState = {
  books: Book[];
  addBook: (book: Book) => void;
  removeBook: (id: string) => void;
  isInReadingList: (book: Book) => boolean;
};

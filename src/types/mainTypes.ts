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
};

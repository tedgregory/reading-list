import { Book } from '@/types';
import { useReadingListStore } from '@/store/useReadingList';

type Props = {
  book: Book;
  isInReadingList?: boolean;
};

export default function BookItem({ book, isInReadingList = false }: Props) {
  const { addBook, removeBook } = useReadingListStore();

  const titleClass = book.title.includes('War') ? 'text-red-500' : '';

  return (
    <div key={book.id} className="border p-4 mb-4 rounded shadow-sm">
      <h3 className={`font-bold text-lg ${titleClass}`}>{book.title}</h3>
      {book.authors && <p className="text-gray-600">Автор: {book.authors.join(', ')}</p>}
      {book.publishedYear && <p className="text-gray-500">Год издвния: {book.publishedYear}</p>}

      {isInReadingList ? (
        <button
          onClick={() => removeBook(book.id)}
          className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
        >
          Удалить
        </button>
      ) : (
        <button
          onClick={() => addBook(book)}
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add to reading list
        </button>
      )}
    </div>
  );
}

import { Book } from '@/types';
import BookItem from './BookItem';

type Props = {
  items: Book[];
  title: string;
  checkInList: (book: Book) => boolean;
};

export default function SearchList({ items, title, checkInList }: Props) {
  return (
    <div className="h-[60dvh] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">
        {title} ({items.length})
      </h2>
      {items.length > 0 ? (
        items
          .filter((book) => !checkInList(book))
          .map((book) => <BookItem key={book.id} book={book} />)
      ) : (
        <p className="text-gray-500">Список пуст</p>
      )}
    </div>
  );
}

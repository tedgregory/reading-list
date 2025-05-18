import { Book } from '@/types';
import BookItem from './BookItem';

type Props = {
  items: Book[];
  title: string;
};

export default function BookList({ items, title }: Props) {
  return (
    <div className="max-h-[75dvh] overflow-y-auto px-2">
      <h2 className="text-xl font-semibold mb-4">
        {title} ({items.length})
      </h2>
      {items.length > 0 ? (
        items.map((book) => <BookItem key={book.id} book={book} isInReadingList={true} />)
      ) : (
        <p className="text-gray-500">Список пуст</p>
      )}
    </div>
  );
}

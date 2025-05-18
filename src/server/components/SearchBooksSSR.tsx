import { fetchBooks } from '@/lib/fetchBooks';
import SearchList from '@/components/SearchList';

type PropsType = { query: string; limit?: number };

export default async function SearchBooksSSR({ query, limit }: PropsType) {
  const books = query ? await fetchBooks(query, limit) : [];
  return query ? (
    <SearchList items={books} title={`Results for "${query}"`} checkInList={() => false} />
  ) : (
    <p className="text-gray-500">Add a `?q=` parameter in the URL to search books.</p>
  );
}

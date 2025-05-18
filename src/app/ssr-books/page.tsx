import SearchBooksSSR from '@/server/components/SearchBooksSSR';

export default function SSRBooksPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  return (
    <div className="container mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-bold mb-4">SSR Book Search</h1>
      <SearchBooksSSR query={query} />
    </div>
  );
}

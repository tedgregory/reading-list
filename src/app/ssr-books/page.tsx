import SearchBooksSSR from '@/server/components/SearchBooksSSR';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSR Book Search',
};

type PropsType = { searchParams: Promise<{ q?: string }> };

export default async function SSRBooksPage(props: PropsType) {
  const query = (await props.searchParams)?.q || '';
  return (
    <div className="container mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-bold mb-4">SSR Book Search</h1>
      <SearchBooksSSR query={query} />
    </div>
  );
}

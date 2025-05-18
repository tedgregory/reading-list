'use client';

import { useState, KeyboardEvent } from 'react';

type Props = {
  onSearch: (term: string) => void;
  isLoading?: boolean;
};

export default function SearchBooks({ onSearch, isLoading = false }: Props) {
  const [term, setTerm] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && term.trim()) {
      onSearch(term.trim());
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-3">Поиск книг в OpenLibrary</h2>
      <input
        type="text"
        placeholder="Найти книгу"
        // className={`w-full p-2 border rounded shadow-sm focus:outline-none focus:ring transition-all duration-200
        //   ${isLoading ? 'opacity-70 blur-sm cursor-not-allowed' : 'focus:ring-2 focus:ring-blue-500'}
        // `}
        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring transition-all duration-200 disabled:opacity-70 disabled:blur-sm disabled:cursor-not-allowed "
        disabled={isLoading}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

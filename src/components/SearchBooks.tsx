'use client';

import { useState, KeyboardEvent } from 'react';

type Props = {
  onSearch: (term: string) => void;
};

export default function SearchBooks({ onSearch }: Props) {
  const [term, setTerm] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && term.trim()) {
      onSearch(term.trim());
    }
  };

  return (
    <input
      type="text"
      placeholder="Найти книгу"
      className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

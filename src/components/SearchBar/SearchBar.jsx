import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) {
      toast.error('Search query is empty');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <header className={css.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
}

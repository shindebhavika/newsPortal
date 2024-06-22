// src/components/SearchBar.jsx

import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getArticles } from '../store/newsSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = useCallback((e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(getArticles({ query }));
  }, [dispatch, query]);

  return (
    <div className="flex justify-center my-4">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border rounded text-black font-bold"
          placeholder="Search for articles"
          aria-label="Search for articles"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-red-600 ml-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

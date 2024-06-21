
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArticles } from '../store/newsSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getArticles({ query }));
  };

  return (


<div className="flex justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded  text-black font-bold "
        placeholder="Search for articles"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-black text-white rounded hover:bg-red-600 ml-2 "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

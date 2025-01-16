import React, { useCallback } from 'react';

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = React.memo(({ query, setQuery }) => {

  const handleChange = useCallback( (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  } , [setQuery]);

  return (
    <input
      name="search"
      type="text"
      placeholder="Search for a movie..."
      value={query}
      onChange={handleChange}
      className="movie-list__search-box"
    />
  );
});

export default SearchInput;

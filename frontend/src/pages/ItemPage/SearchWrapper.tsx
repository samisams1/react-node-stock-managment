import React, { useState } from 'react';

export interface SearchResult {
    id: string;
    title: string;
    description: string;
    // Add any other properties your search results may have
  }

interface SearchWrapperProps {
  onSearch: (query: string) => Promise<{ data: SearchResult[] }>;
}

const SearchWrapper: React.FC<SearchWrapperProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    handleSearch(event.target.value);
  };

  const handleSearch = async (searchQuery: string) => {
    const { data } = await onSearch(searchQuery);
    // Do something with the search results
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      {/* Render search results or other components */}
    </div>
  );
};

export default SearchWrapper;
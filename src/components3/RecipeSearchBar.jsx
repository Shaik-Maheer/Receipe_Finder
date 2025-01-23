import React, { useState } from 'react';

const RecipeSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="flex items-center justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="border rounded-lg py-2 px-4 w-2/3"
      />
      <button
        onClick={handleSearch}
        className="ml-4 bg-[#7AA93C] text-white px-4 py-2 rounded-lg hover:bg-[#262626]"
      >
        Search 
      </button>
    </div>
  );
};

export default RecipeSearchBar;

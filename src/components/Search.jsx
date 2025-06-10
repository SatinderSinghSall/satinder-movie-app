import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <div className="search">
        <div>
          <img src="/images/search.svg" alt="Search Icon." />

          <input
            type="text"
            placeholder="Search through thousands of movies online..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

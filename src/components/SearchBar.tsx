import { useState } from "react";

function SearchBar({
  handleSearch,
  searchTerm,
  setSearchTerm,
}: {
  handleSearch: any;
  searchTerm: string;
  setSearchTerm: any;
}) {
  const [isVisited, setIsVisited] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    handleSearch(searchTerm);
  };

  const handleClick = () => {
    setIsVisited(true);
    setSearchTerm("");
    if (isVisited) {
      console.log(searchTerm);
    }
  };

  return (
    <div className="metro-searchbar">
      <form>
        <input
          type="text"
          onClick={handleClick}
          onChange={handleOnChange}
          value={searchTerm}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

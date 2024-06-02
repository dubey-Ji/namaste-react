const Search = ({
  handleOnClick,
  searchValue,
  handleOnChangeSearchValue,
  handleOnClickSearchButton,
}) => {
  return (
    <div className="filter">
      <div className="search">
        <input
          className="search-input"
          value={searchValue}
          placeholder="search....."
          onChange={handleOnChangeSearchValue}
        />
        <button onClick={handleOnClickSearchButton}>Search</button>
      </div>
      <button className="filter-btn" onClick={handleOnClick}>
        Top Rated Restuarants
      </button>
    </div>
  );
};

export default Search;

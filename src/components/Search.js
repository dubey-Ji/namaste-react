const Search = ({ handleOnClick }) => {
  return (
    <div className="filter">
      <button className="filter-btn" onClick={handleOnClick}>
        Top Rated Restuarants
      </button>
    </div>
  );
};

export default Search;

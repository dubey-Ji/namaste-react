import { useEffect, useState } from "react";
import Search from "./Search";
import Restaurant from "./Restaurant";
import { TOP_RATING_THRESHOLD } from "../utils/contants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteresRestuarants, setFilteredRestuarants] = useState([]);

  console.log("Body render");
  useEffect(() => {
    fetchSwiggyData();
    console.log("use effect called");
  }, []);
  async function fetchSwiggyData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setListOfRestuarants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      throw error;
    }
  }
  function handleOnClick() {
    let filterData = listOfRestuarants.filter((r) => {
      return r.info.avgRating >= TOP_RATING_THRESHOLD;
    });
    setListOfRestuarants(filterData);
  }

  function handleOnChangeSearchValue(e) {
    setSearchValue(e.target.value);
  }

  function handleOnClickSearchButton() {
    console.log("search value", searchValue);
    const filterList = listOfRestuarants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredRestuarants(filterList);
  }
  return (
    <div className="body-container">
      <Search
        handleOnClick={handleOnClick}
        searchValue={searchValue}
        handleOnChangeSearchValue={handleOnChangeSearchValue}
        handleOnClickSearchButton={handleOnClickSearchButton}
      />
      <Restaurant
        restaurants={
          filteresRestuarants.length === 0
            ? listOfRestuarants
            : filteresRestuarants
        }
      />
    </div>
  );
};

export default Body;

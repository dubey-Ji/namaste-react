import { useEffect, useState } from "react";
import Search from "./Search";
import Restaurant from "./Restaurant";
import { TOP_RATING_THRESHOLD } from "../utils/contants";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  useEffect(() => {
    fetchSwiggyData();
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
    let filterData = restaurants.filter((r) => {
      return r.info.avgRating >= TOP_RATING_THRESHOLD;
    });
    setListOfRestuarants(filterData);
  }
  return (
    <div className="body-container">
      <Search handleOnClick={handleOnClick} />
      <Restaurant restaurants={listOfRestuarants} />
    </div>
  );
};

export default Body;

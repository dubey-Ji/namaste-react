import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantInfo = () => {
  const [menuData, setMenuData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchRestaurantInfoData();
  }, []);

  //   let id = 608593;
  async function fetchRestaurantInfoData() {
    try {
      const resp = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}`
      );
      const json = await resp.json();
      //   console.log("json", json);
      setMenuData(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    } catch (error) {
      console.error(`Error occured while fetching RestaurantInfoData`);
      throw error;
    }
  }

  console.log("id", id);

  return (
    <div className="res-info">
      {menuData.map((data) => {
        return (
          <div>
            <h1>{data?.card?.info?.name}</h1>
            <h4>{data?.card?.info?.ratings?.aggregatedRating?.rating}Rating</h4>
            <h4>{data?.card?.info?.defaultPrice}</h4>
            <h4>{data?.card?.info?.category}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantInfo;

import { useEffect, useState } from "react";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resId}`
      );
      const json = await resp.json();
      console.log("json", json);
      setResInfo(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    } catch (error) {
      console.error(`Error occured while fetching RestaurantInfoData`);
      throw error;
    }
  };
  console.log(resInfo);
  return resInfo;
};

export default useRestuarantMenu;

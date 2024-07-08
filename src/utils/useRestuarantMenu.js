import { useEffect, useState } from "react";
import { RESTUARANT_MENU_URL } from "./contants";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await fetch(`${RESTUARANT_MENU_URL}${resId}`);
      const json = await resp.json();
      setResInfo((prevValue) => ({
        ...prevValue,
        name: json?.data?.cards[2]?.card?.card?.info?.name,
        cusinies: json?.data?.cards[2]?.card?.card?.info?.cuisines,
        costForTwo: json?.data?.cards[2]?.card?.card?.info?.costForTwoMessage,
        categories:
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (card) => {
              return (
                card?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
              );
            }
          ),
      }));
    } catch (error) {
      console.error(`Error occured while fetching RestaurantInfoData`);
      throw error;
    }
  };
  return resInfo;
};

export default useRestuarantMenu;

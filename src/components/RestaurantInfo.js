import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestaurantInfoCategories from "./RestuarantInfoCategories";

const RestaurantInfo = () => {
  const { id } = useParams();

  const menuData = useRestuarantMenu(id);

  const [showIndex, setShowIndex] = useState(0);

  const handleShowIndex = (index) => {
    if (showIndex) {
      setShowIndex(false);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <div className="res-info">
      <div className="restuarant-name"></div>
      {menuData ? (
        <div className="res-menu">
          <div className="res-menu-header text-center mt-[25px]">
            <h1 className="res-name text-3xl">{menuData?.name}</h1>
            <div className="res-info mt-[10px]">
              <p>
                {menuData?.cusinies?.join(", ")} - {menuData?.costForTwo}
              </p>
            </div>
          </div>
          {menuData.categories &&
            menuData.categories.map((category, index) => (
              <RestaurantInfoCategories
                key={index}
                category={category}
                showCategories={index === showIndex ? true : false}
                handleShowCategories={handleShowIndex}
                index={index}
              />
            ))}
        </div>
      ) : (
        <h1>No Data found</h1>
      )}
    </div>
  );
};

export default RestaurantInfo;

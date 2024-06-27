import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestaurantInfo = () => {
  const { id } = useParams();

  const menuData = useRestuarantMenu(id);

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

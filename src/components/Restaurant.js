import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mock_data";

const Restaurant = () => {
  return (
    <div className="res-container">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.info.id}
          restuarantInfo={restaurant.info}
        />
      ))}
    </div>
  );
};

export default Restaurant;

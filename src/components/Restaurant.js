import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Restaurant = ({ restaurants }) => {
  return (
    <div className="res-container">
      {restaurants.map((restaurant) => (
        <Link to={`/restaurants/${restaurant.info.id}`}>
          <RestaurantCard
            key={restaurant.info.id}
            restuarantInfo={restaurant.info}
          />
        </Link>
      ))}
    </div>
  );
};

export default Restaurant;

import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Restaurant = ({ restaurants }) => {
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Look's like your are offline</h1>;
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

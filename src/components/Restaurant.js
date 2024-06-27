import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Restaurant = ({ restaurants }) => {
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Look's like your are offline</h1>;
  const addPromotedKey = (restaurants) => {
    let resLength = restaurants.length;
    for (let i = 0; i < Math.floor(resLength / 2); i++) {
      const randomNumber = Math.floor(Math.random() * (resLength - 0) + 0);
      restaurants[randomNumber].info.promoted = true;
    }
  };
  addPromotedKey(restaurants);
  const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard);
  return (
    <div className="res-container">
      {restaurants.map((restaurant) => (
        <Link
          to={`/restaurants/${restaurant.info.id}`}
          key={restaurant.info.id}
        >
          {restaurant.info.promoted ? (
            <RestaurantWithPromotedLabel restuarantInfo={restaurant.info} />
          ) : (
            <RestaurantCard restuarantInfo={restaurant.info} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default Restaurant;

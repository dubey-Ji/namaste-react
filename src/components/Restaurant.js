import RestaurantCard from "./RestaurantCard";

const Restaurant = ({ restaurants }) => {
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

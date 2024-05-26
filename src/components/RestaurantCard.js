const RestaurantCard = ({ restuarantInfo }) => {
  const { name, cuisines, avgRating, costForTwo, deliveryTime } =
    restuarantInfo;
  return (
    <div className="res-card">
      <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" />
      <h4>{name}</h4>
      <p>{cuisines}</p>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;

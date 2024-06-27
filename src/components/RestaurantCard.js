import { CARD_IMAGE_URL } from "../utils/contants";

const RestaurantCard = ({ restuarantInfo }) => {
  const { name, cuisines, avgRating, costForTwo, deliveryTime } =
    restuarantInfo;
  return (
    <div className="res-card">
      <img src={CARD_IMAGE_URL} />
      <h4>{name}</h4>
      <p>{cuisines}</p>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

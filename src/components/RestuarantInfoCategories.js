import RestuarantInfoCategoriesMenu from "./RestuarantInfoCategoriesMenu";

const RestaurantInfoCategories = ({
  category,
  showCategories,
  handleShowCategories,
  index,
}) => {
  return (
    <>
      <div className="res-info m-auto w-6/12  bg-gray-100 mt-5 cursor-pointer shadow-lg">
        <div
          className="res-info-category-header flex w-[100%] justify-between p-6"
          onClick={() => {
            handleShowCategories(index);
          }}
        >
          <h1 className="category-name text-lg font-medium">
            {category?.card?.card?.title} (
            {category?.card?.card?.itemCards.length})
          </h1>
          <span className="">⬇️</span>
        </div>
        {showCategories &&
          category?.card?.card?.itemCards.map((menu) => (
            <RestuarantInfoCategoriesMenu
              key={menu?.card?.info?.id}
              price={
                menu?.card?.info?.defaultPrice
                  ? menu?.card?.info?.defaultPrice
                  : menu?.card?.info?.price
              }
              name={menu?.card?.info?.name}
              description={menu?.card?.info?.description}
            />
          ))}
      </div>
    </>
  );
};

export default RestaurantInfoCategories;

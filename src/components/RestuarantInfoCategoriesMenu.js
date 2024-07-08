const RestuarantInfoCategoriesMenu = ({ price, name, description }) => {
  return (
    <>
      <div className="res-info-category-details flex border-b-2 m-6 pb-6">
        <div className="menu-info w-10/12">
          <h1 className="meal-name font-normal">
            {name} - ₹{price / 100}
          </h1>
          <p className="meal-description text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="menu-img w-2/12">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10" />
        </div>
      </div>
    </>
  );
};

export default RestuarantInfoCategoriesMenu;

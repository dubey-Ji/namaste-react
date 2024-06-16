const User = ({ name, designation, rating, location }) => {
  return (
    <div className="user-function">
      <h1>Functional Component</h1>
      <h4>Name - {name}</h4>
      <h4>Designation - {designation}</h4>
      <h4>Location - {location}</h4>
      <h4>Rating - {rating}</h4>
    </div>
  );
};

export default User;

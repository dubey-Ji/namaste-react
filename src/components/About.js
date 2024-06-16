import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <UserClass
        name="Ashutosh Dubey"
        location="Delhi"
        rating="4.5"
        designation="Senior Software Engineer"
      />
    </div>
  );
};

export default About;

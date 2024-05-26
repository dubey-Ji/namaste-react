import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/*
- Header
    - logo
    - Nav items
- Body
    - Search
    - Restaurants
        - Restaurants Card
- Footer
*/

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

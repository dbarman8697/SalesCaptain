import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllPages from "./Components/MainRoutes";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login"]; 

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideNavbar && <Navbar />}{" "}
      <AllPages />
    </div>
  );
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-elements">
      <nav>
        <NavLink to="/" className="navName" id="chococart">
          ChocoCart
        </NavLink>
        <div className="other_routes">
          <NavLink className="navName">Cart</NavLink>
          <span style={{ padding: "1em" }}></span>
          <NavLink className="navName">Wishlist</NavLink>
          <span style={{ padding: "1em" }}></span>
          <NavLink className="navName">Sign In</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

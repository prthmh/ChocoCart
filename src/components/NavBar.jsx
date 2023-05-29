import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

const NavBar = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();
  const handlesearch = (event) => {
    event.target.length === 0
      ? dispatch({ type: "RESET" })
      : dispatch({ type: "SET_INPUT", payload: event.target.value });
    navigate("/productlist");
  };
  return (
    <div className="nav-elements">
      <nav>
        <NavLink to="/" className="navName" id="chococart">
          ChocoCart
        </NavLink>
        <input
          type="text"
          placeholder="Search here"
          className="search_bar"
          onChange={handlesearch}
        />
        <div className="other_routes">
          <NavLink to="/cart" className="navName">
            Cart
          </NavLink>
          {/* <span style={{ padding: "1em" }}></span> */}
          <NavLink to="wishlist" className="navName">
            Wishlist
          </NavLink>
          {/* <span style={{ padding: "1em" }}></span> */}
          <NavLink to="/profile" className="navName">
            Sign In
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

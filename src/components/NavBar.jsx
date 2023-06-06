import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import "../index.css";
import "./NavBar.css";

const NavBar = () => {
  const { token } = useAuth();
  const {
    state: { cart, wishlist },
    dispatch,
  } = useData();
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
          <NavLink to="/productlist" className="navName">
            Chocolates
          </NavLink>

          <div style={{ position: "relative" }}>
            <NavLink to="/cart" className="navName">
              Cart
            </NavLink>
            <span className="item_quantity">{cart.length}</span>
          </div>
          <div>
            <NavLink to="wishlist" className="navName">
              Wishlist
            </NavLink>
            <span className="item_quantity">{wishlist.length}</span>
          </div>
          <NavLink to="/profile" className="navName">
            {token ? "Profile" : "Sign in"}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

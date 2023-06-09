import React, { useState } from "react";
import "./CartItems.css";
import { useData } from "../../../context/DataContext";
import { useAuth } from "../../../context/AuthContext";
import {
  decreaseCartItemQty,
  increaseCartItemQty,
  removeItemFromCart,
} from "../../../services/cartServices";
import { addToWishlistFunc } from "../../../services/wishlistServices";
import {
  calcDiscount,
  isAlreadyPresentInWishlist,
} from "../../../utils/cartAndWishlistUtils";
import { NavLink } from "react-router-dom";

const CartItems = ({ item }) => {
  const [disableMoveToWishlistBtn, setDisableMoveToWishlistBtn] =
    useState(false);
  const { _id, name, brand, price, originalPrice, image, qty } = item;
  const {
    state: { wishlist },
    dispatch,
  } = useData();
  const { token } = useAuth();

  const moveToWishlistFromCart = () => {
    addToWishlistFunc(token, dispatch, item, setDisableMoveToWishlistBtn);
    removeItemFromCart(item._id, token, dispatch);
  };

  const isInWishlist = isAlreadyPresentInWishlist(_id, wishlist);

  return (
    <div className="cart_item">
      <div className="item_img">
        <img src={image} width="150px" height="150px" alt="img" />
      </div>
      <div className="item_details">
        <h4 style={{ margin: "0" }}>{name}</h4>
        {brand}
        <div className="price">
          <b>₹{price}</b> <span className="ogPrice">₹{originalPrice}</span>
          <span className="disc">
            {calcDiscount(price, originalPrice)}% off
          </span>
        </div>
        <div>
          <button
            id="minus"
            onClick={() => decreaseCartItemQty(item._id, token, dispatch)}
            disabled={qty === 1}
          >
            -
          </button>
          <span id="qty">{qty}</span>
          <button
            id="add"
            onClick={() => increaseCartItemQty(item._id, token, dispatch)}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="remove_btn"
            onClick={() => removeItemFromCart(item._id, token, dispatch)}
          >
            Remove
          </button>
          {isInWishlist ? (
            <NavLink to="/wishlist" className="move_to_btn" >
              Already in Wishlist
            </NavLink>
          ) : (
            <button
              className="move_to_btn"
              onClick={moveToWishlistFromCart}
              disabled={disableMoveToWishlistBtn}
            >
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItems;

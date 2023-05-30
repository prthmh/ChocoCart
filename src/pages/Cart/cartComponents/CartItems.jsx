import React from "react";
import "./CartItems.css";
import { useData } from "../../../context/DataContext";
import { useAuth } from "../../../context/AuthContext";
import {
  decreaseCartItemQty,
  increaseCartItemQty,
  removeItemFromCart,
} from "../../../services/cartServices";
import { addToWishlistFunc } from "../../../services/wishlistServices";

const CartItems = ({ item }) => {
  const { name, brand, price, rating, image, qty } = item;
  const { dispatch } = useData();
  const { token } = useAuth();
  // console.log(_id);
  // console.log("t", token);
  // console.log(dispatch)
  const moveToWishlistFromCart = () => {
    addToWishlistFunc(token, dispatch, item);
    removeItemFromCart(item._id, token, dispatch);
  };
  return (
    <div className="cart_item">
      <div className="item_img">
        <img src={image} width="150px" height="150px" alt="img" />
      </div>
      <div className="item_details">
        <h4 style={{ margin: "0" }}>{name}</h4>
        {brand}
        <br />
        {price}
        <br />
        {rating}
        <br />
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
        <div>
          <button onClick={() => removeItemFromCart(item._id, token, dispatch)}>
            Remove
          </button>
          <button onClick={moveToWishlistFromCart}>Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

import React, { useState } from "react";
import "./WishlistItem.css";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { removeItemFromWishlist } from "../../../services/wishlistServices";
import {
  addToCartFunc,
  increaseCartItemQty,
} from "../../../services/cartServices";
import {
  isAlreadyPresentInCart,
  calcDiscount,
} from "../../../utils/cartAndWishlistUtils";

const WishlistItem = ({ item }) => {
  const [disableMoveToCartBtn, setDisableMoveToCartBtn] = useState(false);
  const { name, brand, price, originalPrice, image } = item;
  const { token } = useAuth();
  const { state, dispatch } = useData();

  const moveToCartFromWishlist = () => {
    if (isAlreadyPresentInCart(item._id, state.cart)) {
      increaseCartItemQty(item._id, token, dispatch);
      removeItemFromWishlist(item._id, token, dispatch);
    } else {
      removeItemFromWishlist(item._id, token, dispatch);
      addToCartFunc(token, dispatch, item, setDisableMoveToCartBtn);
    }
  };
  return (
    <div className="wishlist_item">
      <div className="wishlist_item_img">
        <img src={image} width="150px" height="150px" alt="img" />
      </div>
      <div className="wishlist_item_detail">
        <h4 style={{ margin: "0" }}>{name}</h4>
        {brand}
        <div className="price">
          <b>₹{price}</b> <span className="ogPrice">₹{originalPrice}</span>
          <span className="disc">
            {calcDiscount(price, originalPrice)}% off
          </span>
        </div>
        <div>
          <button className="move_to_btn" onClick={moveToCartFromWishlist} disabled={disableMoveToCartBtn} >
            Move to Cart
          </button>
          <button
            className="remove_btn"
            onClick={() => removeItemFromWishlist(item._id, token, dispatch)}
          >
            Remove from wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;

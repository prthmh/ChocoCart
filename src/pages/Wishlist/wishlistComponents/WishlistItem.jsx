import React from "react";
import "./WishlistItem.css";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { removeItemFromWishlist } from "../../../services/wishlistServices";
import { addToCartFunc } from "../../../services/cartServices";

const WishlistItem = ({ item }) => {
  const { name, brand, price, rating, image } = item;
  const { token } = useAuth();
  const { dispatch } = useData();
  // console.log("w", token);
  // console.log("w", dispatch);
  // console.log("w", item._id);
  const moveToCartFromWishlist = () => {
    removeItemFromWishlist(item._id, token, dispatch);
    addToCartFunc(token, dispatch, item);
  };
  return (
    <div className="wishlist_item">
      <div className="wishlist_item_img">
        <img src={image} width="150px" height="150px" alt="img" />
      </div>
      <div className="wishlist_item_detail">
        <h4 style={{ margin: "0" }}>{name}</h4>
        {brand}
        <br />
        {price}
        <br />
        {rating}
        <div>
          <button onClick={moveToCartFromWishlist}>Move to Cart</button>
          <button
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

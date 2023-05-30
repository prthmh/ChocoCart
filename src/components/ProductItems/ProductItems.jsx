import React from "react";
import "./ProductItems.css";
import { useData } from "../../context/DataContext";
import {
  isAlreadyPresentInCart,
  isAlreadyPresentInWishlist,
} from "../../utils/cartUtils";
import { useAuth } from "../../context/AuthContext";
import { addToCartFunc } from "../../services/cartServices";
import { addToWishlistFunc } from "../../services/wishlistServices";
import { useNavigate } from "react-router-dom";

const ProductItems = ({ item }) => {
  const { _id, name, brand, price, rating, image } = item;
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const { cart, wishlist } = state;
  const navigate = useNavigate();

  const isInCart = isAlreadyPresentInCart(_id, cart);
  const isInWishlist = isAlreadyPresentInWishlist(_id, wishlist);

  const addtoCartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCartFunc(token, dispatch, item)
      : navigate("/login");
  };

  const addToWishlistHandler = () => {
    token
      ? isInWishlist
        ? navigate("/wishlist")
        : addToWishlistFunc(token, dispatch, item)
      : navigate("/login");
  };
  return (
    <div className="list_item">
      <img src={image} alt="img" width="150px" height="150px" />
      <div className="item_header">
        <p>
          <b>{name}</b>
        </p>
        <p>{rating}</p>
      </div>
      <p>{brand}</p>
      <p>₹{price}</p>
      <button id="cart_btn" onClick={addtoCartHandler}>
        {isInCart ? "Go to Cart" : "Add to Cart"}
      </button>
      <button id="cart_btn" onClick={addToWishlistHandler}>
        {isInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default ProductItems;
// _id: uuid(),
//     name: "Cadbury Bournville Rich Cocoa 70% Dark Chocolate Bar",
//     brand: "Cadbury",
//     price: "91",
//     categoryName: "Dark Chocolate",
//     rating: 3,
//     image: "https://m.media-amazon.com/images/I/61UHYRZQrZL._SL1500_.jpg",

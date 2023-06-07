import "./ProductItems.css";
import { useData } from "../../context/DataContext";
import {
  calcDiscount,
  isAlreadyPresentInCart,
  isAlreadyPresentInWishlist,
} from "../../utils/cartAndWishlistUtils";
import { useAuth } from "../../context/AuthContext";
import { addToCartFunc } from "../../services/cartServices";
import { addToWishlistFunc } from "../../services/wishlistServices";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductItems = ({ item }) => {
  const [cartBtnDisabled, setCartBtnDisabled] = useState(false);
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);
  const { _id, name, brand, price, originalPrice, rating, image } = item;
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
        : addToCartFunc(token, dispatch, item, setCartBtnDisabled)
      : navigate("/login");
  };

  const addToWishlistHandler = () => {
    token
      ? isInWishlist
        ? navigate("/wishlist")
        : addToWishlistFunc(token, dispatch, item, setWishlistBtnDisabled)
      : navigate("/login");
  };
  return (
    <div className="list_item">
      <Link
        to={`/product/${_id}`}
        style={{ display: "grid", placeItems: "center" }}
      >
        <img src={image} alt="img" width="150px" height="150px" />
      </Link>
      <hr
        style={{
          height: "0.9px",
          backgroundColor: "#371211",
          border: "none",
          margin: "10px 0",
        }}
      />

      <p style={{ fontWeight: "bolder" }}>{name}</p>
      <p>{brand}</p>
      <p id="rating">{rating}★</p>
      <div className="price">
        <b>₹{price}</b> <span className="ogPrice">₹{originalPrice}</span>
        <span className="disc">{calcDiscount(price, originalPrice)}% off</span>
      </div>

      <button
        className="cart_btn"
        onClick={addtoCartHandler}
        disabled={cartBtnDisabled}
      >
        {isInCart ? "Go to Cart" : "Add to Cart"}
      </button>
      <button
        className="cart_btn"
        onClick={addToWishlistHandler}
        disabled={wishlistBtnDisabled}
      >
        {isInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default ProductItems;

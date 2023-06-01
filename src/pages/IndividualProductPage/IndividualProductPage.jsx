import React from "react";
import { useParams } from "react-router-dom";
import "./IndividualProductPage.css";
import { useData } from "../../context/DataContext";
import {
  calcDiscount,
  isAlreadyPresentInCart,
  isAlreadyPresentInWishlist,
} from "../../utils/cartAndWishlistUtils";
import { useAuth } from "../../context/AuthContext";
import { addToCartFunc } from "../../services/cartServices";
import { addToWishlistFunc } from "../../services/wishlistServices";
import { useNavigate } from "react-router-dom";

const IndividualProductPage = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { productId } = useParams();
  const {
    state: { chocolates, cart, wishlist },
    dispatch,
  } = useData();
  const productFind = chocolates.find(({ _id }) => _id === productId);
  console.log(productFind);
  const {_id, name, brand, price, originalPrice, categoryName, rating, image } =
    productFind;

  const isInCart = isAlreadyPresentInCart(_id, cart);
  const isInWishlist = isAlreadyPresentInWishlist(_id, wishlist);

  const addtoCartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCartFunc(token, dispatch, productFind)
      : navigate("/login");
  };

  const addToWishlistHandler = () => {
    token
      ? isInWishlist
        ? navigate("/wishlist")
        : addToWishlistFunc(token, dispatch, productFind)
      : navigate("/login");
  };
  return (
    <div className="product_container">
      <div className="indivudual_product">
        <img src={image} alt="img" />
        <div className="product_info">
          <h2>{name}</h2>
          <p>
            <b>Brand:</b> {brand}
          </p>
          <p>
            <b>Category:</b> {categoryName}
          </p>
          <p id="rating">{rating}★</p>
          <div className="price">
            <b>₹{price}</b> <span className="ogPrice">₹{originalPrice}</span>
            <span className="disc">
              {calcDiscount(price, originalPrice)}% off
            </span>
          </div>

          <button className="cart_btn" onClick={addtoCartHandler}>
            {isInCart ? "Go to Cart" : "Add to Cart"}
          </button>
          <button className="cart_btn" onClick={addToWishlistHandler}>
            {isInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProductPage;

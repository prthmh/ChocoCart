import React from "react";
import { useData } from "../../context/DataContext";
import "./Cart.css";
import CartItems from "./cartComponents/CartItems";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { priceAndDiscountCalcFunc } from "../../utils/cartAndWishlistUtils";

const Cart = () => {
  const navigate = useNavigate();
  const { state } = useData();
  const { cart } = state;
  // console.log(cart);
  const { price, discount } = priceAndDiscountCalcFunc(cart);
  // console.log(price, discount);
  const totPrice = parseFloat(price - discount).toFixed(2);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="cart_page">
        {cart?.length === 0 ? (
          <div className="no_cart_item">
            <h2>Sorry the cart is empty</h2>
            <NavLink
              to="/productlist"
              className="cart_page_btn"
              style={{ textDecoration: "none" }}
            >
              Shop Now
            </NavLink>
          </div>
        ) : (
          <>
            <div className="cart_items">
              <h2 style={{ margin: "0" }}>Cart ({cart?.length}) </h2>
              {cart?.map((item) => (
                <CartItems key={item._id} item={item} />
              ))}
            </div>
            <div className="price_details">
              <h2 style={{ margin: "0" }}>Price Details </h2>
              <hr className="price_line" />
              <div className="price_calc">
                <li style={{ listStyle: "none" }}>
                  <ul>
                    <p>Price ({cart.length} Items)</p>
                    <p>₹{price}</p>
                  </ul>
                  <ul>
                    <p>Discount</p>
                    <p>₹{discount}</p>
                  </ul>
                  <ul>
                    <p>Delivery Charges</p>
                    <p style={{ color: "var(--discount-color)" }}>FREE</p>
                  </ul>
                  <hr className="price_line" />
                  <ul>
                    <p>Total Amount</p>
                    <p>₹{totPrice}</p>
                  </ul>
                </li>
                <p style={{ color: "var(--discount-color)" }}>
                  You have saved ₹{discount} on this order.
                </p>
              </div>
              <button className="cart_page_btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;

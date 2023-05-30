import React from "react";
import { useData } from "../../context/DataContext";
import "./Cart.css";
import CartItems from "./cartComponents/CartItems";

const Cart = () => {
  const { state } = useData();
  const { cart } = state;
  // console.log(cart);
  return (
    <div className="cart_page">
      {cart?.length === 0 ? (
        <h2>Sorry the cart is empty</h2>
      ) : (
        <>
          <div className="cart_items">
            <h2 style={{margin: "0"}} >Cart ({cart?.length}) </h2>
            {cart?.map((item) => (
              <CartItems key={item._id} item={item} />
            ))}
          </div>
          <div className="price_details">sgfs</div>
        </>
      )}
    </div>
  );
};

export default Cart;

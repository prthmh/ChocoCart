import React from "react";
import { useAddress } from "../../../context/AddressContext";
import { useData } from "../../../context/DataContext";
import "./PriceCard.css";
import { priceAndDiscountCalcFunc } from "../../../utils/cartAndWishlistUtils";
import { useNavigate } from "react-router-dom";

const PriceCard = () => {
  const {
    addressState: { seletedAddress },
  } = useAddress();
  const {
    state: { cart },
    dispatch,
  } = useData();
  const navigate = useNavigate();

  const { price, discount } = priceAndDiscountCalcFunc(cart);
  const totPrice = parseFloat(price - discount).toFixed(2);

  const handlePlaceOrderBtn = () => {
    dispatch({ type: "SET_ORDERLIST", payload: cart });
    navigate("/ordersummary");
  };

  return (
    <div className="order_section">
      <h2 style={{ margin: "0" }}>Order Details </h2>
      <hr className="line" />
      <div className="ordered_items">
        <li style={{ listStyle: "none" }}>
          {cart?.map((item) => (
            <ul key={item.id}>
              <p>
                {item.name}(₹{item.price} X {item.qty})
              </p>
              <p>₹{item.price * item.qty}</p>
            </ul>
          ))}
        </li>
        <hr className="line" />
        <h2 style={{ margin: "0" }}>Price Details </h2>
        <hr className="line" />
        <div className="order_price">
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
            <ul>
              <p>Total Amount</p>
              <p>₹{totPrice}</p>
            </ul>
          </li>
        </div>
        <hr className="line" />
        <h2 style={{ margin: "0" }}>Selected Address for delivery:</h2>
        <hr className="line" />
        {seletedAddress && (
          <>
            <h4 style={{ display: "inline-block", margin: "0" }}>
              {seletedAddress?.name}
            </h4>
            <br />
            {seletedAddress?.street}, {seletedAddress?.city},{" "}
            {seletedAddress?.state}, {seletedAddress?.zipcode},{" "}
            {seletedAddress?.country}
            <br />
            Mobile No. : {seletedAddress?.mobile}
          </>
        )}
      </div>
      <button className="placeorder_btn" onClick={handlePlaceOrderBtn}>
        Place Order
      </button>
    </div>
  );
};

export default PriceCard;

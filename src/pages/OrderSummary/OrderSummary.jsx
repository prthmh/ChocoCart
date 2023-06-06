import React from "react";
import "./OrderSummary.css";
import { useData } from "../../context/DataContext";
import { useAddress } from "../../context/AddressContext";
import { calcDiscount } from "../../utils/cartAndWishlistUtils";

const OrderSummary = () => {
  const {
    state: { orderList },
  } = useData();
  const {
    addressState: { seletedAddress },
  } = useAddress();

  return (
    <div className="order_summary_page">
      <div className="orderlist_content">
        <h2 style={{ margin: "0" }} >Congratulations, Order placed Successfully🥳</h2>
        <h4>Your Order will be delivered to:</h4>
        <h4 style={{ display: "inline-block", margin: "0" }}>
          {seletedAddress?.name}
        </h4>
        <br />
        {seletedAddress?.street}, {seletedAddress?.city},{" "}
        {seletedAddress?.state}, {seletedAddress?.zipcode},{" "}
        {seletedAddress?.country}
        <br />
        Mobile No. : {seletedAddress?.mobile}
        <h4>Your Order:</h4>
        {orderList?.map((item) =>
          item.map((orderItem) => (
            <>
              <div className="order_item">
                <div className="order_item_img">
                  <img
                    src={orderItem.image}
                    width="150px"
                    height="150px"
                    alt="img"
                  />
                </div>
                <div className="order_item_detail">
                  <h4 style={{ margin: "0" }}>{orderItem.name}</h4>
                  {orderItem.brand}
                  <div className="order_price">
                    <b>₹{orderItem.price}</b>{" "}
                    <span className="ogPrice">₹{orderItem.originalPrice}</span>
                    <span className="disc" style={{marginLeft: "0.2rem"}} >
                      {calcDiscount(orderItem.price, orderItem.originalPrice)}%
                      off
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderSummary;

import React from "react";
import "./Checkout.css";
import AddressList from "./checkout_components/AddressList";
import PriceCard from "./checkout_components/PriceCard";

const Checkout = () => {
  return <div className="checkout_page" >
    <div className="address_section">
        <h2 style={{margin: "0"}} >Select an address</h2>
        <div className="address list">
            <AddressList/>
        </div>
    </div>
    <div className="price_card">
        <PriceCard/>
    </div>
  </div>;
};

export default Checkout;

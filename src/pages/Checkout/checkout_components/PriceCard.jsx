import React from "react";
import { useAddress } from "../../../context/AddressContext";

const PriceCard = () => {
  const { addressState } = useAddress();
  console.log("selected",addressState?.seletedAddress);
  return <div>PriceCard</div>;
};

export default PriceCard;

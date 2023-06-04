// import React from "react";
import { v4 as uuid } from "uuid";

const AddressReducer = (addressState, addressAction) => {
  console.log(addressState);
  switch (addressAction.type) {
    case "SET_SELETED_ADDRESS":
      return { ...addressState, seletedAddress: addressAction.payload };
    case "SET_USER_ADDRESS":
      return {
        ...addressState,
        addresses: [...addressState.addresses, addressAction.payload],
      };
    case "DELETE_ADDRESS":
      return { ...addressState, addresses: addressAction.payload };
    case "SET_EDIT_ADDRESS":
      return {
        ...addressState,
        addresses: addressState?.addresses?.map((item) =>
          item.id === addressAction.payload[0]
            ? { ...addressAction.payload[1] }
            : item
        ),
      };
    default:
      return addressState;
  }
};

export default AddressReducer;

export const initialAddressState = {
  addresses: [
    {
      id: uuid(),
      name: "Prathmesh",
      street: "Shankar Nagar",
      city: "Nagpur",
      state: "Maharashtra",
      zipcode: "440025",
      country: "India",
      mobile: "123456789",
    },
    {
      id: uuid(),
      name: "Jay",
      street: "Om Nagar",
      city: "Nashik",
      state: "Maharashtra",
      zipcode: "441025",
      country: "India",
      mobile: "123456789",
    },
  ],
  seletedAddress: {},
};

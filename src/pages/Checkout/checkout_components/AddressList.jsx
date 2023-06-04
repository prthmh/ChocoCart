import React from "react";
import { useAddress } from "../../../context/AddressContext";
import { addressSelectFunc } from "../../../services/addressServices";
import { useNavigate } from "react-router-dom";

const AddressList = () => {
  const { addressState, addressDispatch } = useAddress();
  const navigate = useNavigate();
  // console.log("add", addressState, addressDispatch);
  const addAddressHandlerInCheckout = () => {
    navigate("/profile");
  };
  return (
    <div>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {addressState.addresses?.map((address) => (
          <li className="address_item">
            <label>
              <input
                type="radio"
                name="address"
                onChange={() => addressSelectFunc(address, addressDispatch)}
              />
              <h4 style={{ display: "inline-block", margin: "0" }}>
                {address.name}
              </h4>
              <br />
              {address.street}, {address.city}, {address.state},{" "}
              {address.zipcode}, {address.country}
              <br />
              Mobile No. : {address.mobile}
            </label>
          </li>
        ))}
      </ul>
      <button className="add_address" onClick={addAddressHandlerInCheckout} >Add New Address</button>
    </div>
  );
};

export default AddressList;

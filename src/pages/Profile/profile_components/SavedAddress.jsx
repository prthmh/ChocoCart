import React, { useState } from "react";
import { useAddress } from "../../../context/AddressContext";
import AddAddressForm from "./AddAddressForm";
import EditAddressForm from "./EditAddressForm";

const SavedAddress = () => {
  const { addressState, addressDispatch } = useAddress();
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [showEditBtnInForm, setShowEditBtnInForm] = useState(false);
  const [editAddress, setEditAddress] = useState({});

  const deleteAddressHandler = (addressId) => {
    const newAddressList = addressState?.addresses?.filter(
      ({ id }) => id !== addressId
    );
    addressDispatch({ type: "DELETE_ADDRESS", payload: newAddressList });
  };

  return (
    <div>
      {addressState?.addresses?.map((address) => (
        <div key={address.id} className="saved_address">
          {address.name}
          <br />
          {address.street}, {address.city}, {address.state}, {address.zipcode},{" "}
          {address.country}
          <br />
          Mobile No. : {address.mobile}
          <br />
          <button
            className="address_btn edit"
            onClick={() => {
              setShowEditBtnInForm(true);
              setEditAddress(address);
            }}
          >
            Edit
          </button>
          <button
            className="address_btn delete"
            onClick={() => deleteAddressHandler(address.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <button
        className="profile_page_btn"
        onClick={() => setShowAddAddressForm(true)}
      >
        +Add New Address
      </button>
      {showAddAddressForm && (
        <AddAddressForm setShowAddAddressForm={setShowAddAddressForm} />
      )}
      {showEditBtnInForm && (
        <EditAddressForm
          setShowEditBtnInForm={setShowEditBtnInForm}
          editAddress={editAddress}
        />
      )}
    </div>
  );
};

export default SavedAddress;

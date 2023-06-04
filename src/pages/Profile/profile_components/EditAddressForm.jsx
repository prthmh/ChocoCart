import React, { useState } from "react";
import "./AddAddressFrom.css";
import { useAddress } from "../../../context/AddressContext";

const EditeditAddressData = ({ editAddress, setShowEditBtnInForm }) => {
  const { addressDispatch } = useAddress();
  const [editAddressData, setEditAddressData] = useState({
    id: editAddress.id,
    name: editAddress.name,
    street: editAddress.street,
    city: editAddress.city,
    state: editAddress.state,
    zipcode: editAddress.zipcode,
    country: editAddress.country,
    mobile: editAddress.mobile,
  });

  const editAddressHandler = (event) => {
    event.preventDefault();
    addressDispatch({
      type: "SET_EDIT_ADDRESS",
      payload: [editAddress.id, editAddressData],
    });
    setShowEditBtnInForm(false);
  };

  return (
    <div className="address_form">
      <div className="form_content">
        <h2>Edit Address</h2>
        <form onSubmit={editAddressHandler}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={editAddressData.name}
            onChange={(event) =>
              setEditAddressData((formData) => ({
                ...formData,
                [event.target.name]: event.target.value,
              }))
            }
          />
          <label>Street:</label>
          <input
            type="text"
            placeholder="Enter Street"
            name="street"
            value={editAddressData.street}
            onChange={(event) =>
              setEditAddressData((formData) => ({
                ...formData,
                [event.target.name]: event.target.value,
              }))
            }
          />
          <label>City:</label>
          <input
            type="text"
            placeholder="Enter city"
            name="city"
            value={editAddressData.city}
            onChange={(event) =>
              setEditAddressData((formData) => ({
                ...formData,
                [event.target.name]: event.target.value,
              }))
            }
          />
          <label>State:</label>
          <input
            type="text"
            placeholder="Enter state"
            name="state"
            value={editAddressData.state}
            onChange={(event) =>
              setEditAddressData((formData) => ({
                ...formData,
                [event.target.name]: event.target.value,
              }))
            }
          />
          <label>Zipcode:</label>
          <input
            type="number"
            placeholder="Enter zipcode"
            name="zipcode"
            value={editAddressData.zipcode}
            onChange={(event) =>
              setEditAddressData((formData) => ({
                ...formData,
                [event.target.name]: event.target.value,
              }))
            }
          />
          <label>Country:</label>
          <input
            type="text"
            placeholder="Enter country"
            name="country"
            value={editAddressData.country}
            onChange={(event) =>
              setEditAddressData((formData) => ({
                ...formData,
                [event.target.name]: event.target.value,
              }))
            }
          />
          <label>Mobile no.:</label>
          <input
            type="tel"
            placeholder="0123456789"
            pattern="[0-9]{10}"
            name="mobile"
            value={editAddressData.mobile}
            onChange={(event) =>
              setEditAddressData((formData) => ({
                ...formData,
                [event.target.name]: event.target.value,
              }))
            }
          />
          <div className="form_btns">
            <button type="submit">Add</button>
            <button onClick={() => setShowEditBtnInForm(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditeditAddressData;

// id: uuid(),
// name: "Prathmesh",
// street: "Shankar Nagar",
// city: "Nagpur",
// state: "Maharashtra",
// zipcode: "440025",
// country: "India",
// mobile: "123456789",
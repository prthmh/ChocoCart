import "./AddAddressFrom.css";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { useAddress } from "../../../context/AddressContext";

const AddAddressForm = ({ setShowAddAddressForm }) => {
  const { addressDispatch } = useAddress();
  const [addressForm, setAddressForm] = useState({
    id: uuid(),
    name: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    mobile: "",
  });

  const addAddressHandler = (event) => {
    event.preventDefault();
    addressDispatch({ type: "SET_USER_ADDRESS", payload: addressForm });
    setShowAddAddressForm(false);
  };

  return (
    <div className="address_form">
      <div className="form_content">
        <h2>Add New Address</h2>
        <form onSubmit={addAddressHandler}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={addressForm.name}
            onChange={(event) =>
              setAddressForm((formData) => ({
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
            value={addressForm.street}
            onChange={(event) =>
              setAddressForm((formData) => ({
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
            value={addressForm.city}
            onChange={(event) =>
              setAddressForm((formData) => ({
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
            value={addressForm.state}
            onChange={(event) =>
              setAddressForm((formData) => ({
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
            value={addressForm.zipcode}
            onChange={(event) =>
              setAddressForm((formData) => ({
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
            value={addressForm.country}
            onChange={(event) =>
              setAddressForm((formData) => ({
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
            value={addressForm.mobile}
            onChange={(event) =>
              setAddressForm((formData) => ({
                ...formData,
                [event.target.name]: event.target.value,
              }))
            }
          />
          <div className="form_btns">
            <button type="submit">Add</button>
            <button onClick={() => setShowAddAddressForm(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddressForm;

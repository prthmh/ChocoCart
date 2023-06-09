import "./AddAddressFrom.css";
import React, { useState } from "react";
import { useAddress } from "../../../context/AddressContext";
import { toast } from "react-toastify";

const AddAddressForm = ({ setShowAddAddressForm }) => {
  const { addressState, addressDispatch } = useAddress();
  const [addressForm, setAddressForm] = useState({
    id: addressState?.addresses.length + 1,
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
    if (
      addressForm.name === "" ||
      addressForm.street === "" ||
      addressForm.city === "" ||
      addressForm.state === "" ||
      addressForm.zipcode === "" ||
      addressForm.country === "" ||
      addressForm.mobile === ""
    ) {
      toast.warn("Please fill all the fields before adding new address ");
    } else {
      addressDispatch({ type: "ADD_USER_ADDRESS", payload: addressForm });
      setShowAddAddressForm(false);
      toast.success("New Addreess added!");
    }
  };

  return (
    <div className="address_form">
      <div className="form_content">
        <h2 style={{ margin: "0 0 0.3rem 0" }}>Add New Address</h2>
        <form className="address_add_form">
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
            <button className="address_add_btn" onClick={addAddressHandler}>
              Add
            </button>
            {/* <button className="dummy_data" onClick={addDummyData}>
              Add Dummy Data
            </button> */}
            <button
              className="cancel_btn"
              onClick={() => setShowAddAddressForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddressForm;

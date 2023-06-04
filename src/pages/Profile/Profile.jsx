import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import "./Profile.css";
import { useAddress } from "../../context/AddressContext";
import SavedAddress from "./profile_components/SavedAddress";

const Profile = () => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const { token, setToken, user, setUser } = useAuth();
  // const { addressState, addressDispatch } = useAddress();
  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");
    setUser();
    setToken("");
    navigate("/");
    //you have to add a loader
  };
  console.log(token);
  return (
    <div className="account_container">
      <div className="profile_content">
        <h2>Profile</h2>
        <hr className="price_line" />
        <div className="profile_detail">
          <div className="profile_titles">
            <p>Full Name:</p>
            <p>Email:</p>
          </div>
          <div>
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <p>{user?.email}</p>
          </div>
        </div>
        <button className="profile_page_btn" onClick={handleLogOut}>
          Log out
        </button>
      </div>
      <div className="address_content">
        <h2>Saved Address</h2>
        <hr className="price_line" />
        <SavedAddress/>
      </div>
    </div>
  );
};

export default Profile;

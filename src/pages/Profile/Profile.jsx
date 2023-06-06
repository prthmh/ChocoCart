import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import "./Profile.css";
// import { useAddress } from "../../context/AddressContext";
import SavedAddress from "./profile_components/SavedAddress";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const { setToken, user, setUser } = useAuth();
  // const { addressState, addressDispatch } = useAddress();
  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");
    setUser();
    setToken("");
    navigate("/");
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    //you have to add a loader
  };
  return (
    <>
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
          <SavedAddress />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

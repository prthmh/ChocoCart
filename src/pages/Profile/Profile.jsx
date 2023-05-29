import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { token, setToken, user, setUser } = useAuth();
  const handleLogOut = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");
    setUser();
    setToken("");
    navigate("/")
    //you have to add a loader
  };
  return <div>Profile
    <button onClick={handleLogOut} >Log out</button>
  </div>;
};

export default Profile;

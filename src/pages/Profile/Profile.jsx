import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

const Profile = () => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const { token, setToken, user, setUser } = useAuth();
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
    <div>
      Profile
      <div>{user.firstName}</div>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default Profile;

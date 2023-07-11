import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./UserSignUp.css";

const UserSignUp = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [showPassword, setShowPassword] = useState({
    pwd: false,
    confirmPwd: false,
  });
  const { token, userSignUpFunc } = useAuth();
  const navigate = useNavigate();

  const fillFormData = (event, field) => {
    const value = event.target.value;
    setSignUpData((prevState) => ({ ...prevState, [field]: value }));
  };

  const signUpHandler = () => {
    const { email, password, firstName, lastName } = signUpData;
    if (
      email !== "" &&
      password !== "" &&
      firstName !== "" &&
      lastName !== ""
    ) {
      async function signUpUserAsync() {
        userSignUpFunc(email, password, firstName, lastName);
      }
      signUpUserAsync();
    }
  };

  if (token) {
    setTimeout(() => {
      navigate("/productlist");
    }, 200);
  }
  //you have to add the loader in if

  return (
    <div className="signup_container">
      <div className="signup_content">
        <h2>Sign Up</h2>
        <hr className="price_line" />
        <form
          className="signup_form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>First Name</label>
          <input
            type="text"
            value={signUpData.firstName}
            placeholder="Name"
            onChange={(event) => fillFormData(event, "firstName")}
            required
          />

          <label>Last Name</label>
          <input
            type="text"
            value={signUpData.lastName}
            placeholder="last name"
            onChange={(event) => fillFormData(event, "lastName")}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            value={signUpData.email}
            placeholder="abc@gmail.com"
            onChange={(event) => fillFormData(event, "email")}
            required
          />

          <label>Password</label>
          <input
            type={showPassword.pwd ? "text" : "password"}
            value={signUpData.password}
            placeholder="********"
            onChange={(event) => fillFormData(event, "password")}
            required
          />
          <span className="signup_password_btn"
            onClick={() =>
              setShowPassword((prevState) => ({
                ...prevState,
                pwd: !showPassword.pwd,
              }))
            }
          >
            {showPassword ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </span>

          <div className="creat_acc" onClick={signUpHandler}>
            Create New Account
          </div>
          <NavLink id="old_acc" to="/login">
            Already Have an account
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;

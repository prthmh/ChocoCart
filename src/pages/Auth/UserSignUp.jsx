import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

const UserSignUp = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const { token, userSignUpFunc } = useAuth();
  const navigate = useNavigate()

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
    <div>
      <h2>Sign Up</h2>
      <div>
        <label>
          First Name
          <input
            type="text"
            value={signUpData.firstName}
            placeholder="Name"
            onChange={(event) => fillFormData(event, "firstName")}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Last Name
          <input
            type="text"
            value={signUpData.lastName}
            placeholder="last name"
            onChange={(event) => fillFormData(event, "lastName")}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Email Address
          <input
            type="email"
            value={signUpData.email}
            placeholder="abc@gmail.com"
            onChange={(event) => fillFormData(event, "email")}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Password
          <input
            type="password"
            value={signUpData.password}
            placeholder="********"
            onChange={(event) => fillFormData(event, "password")}
            required
          />
        </label>
      </div>

      <div onClick={signUpHandler}>Create New Account</div>
      <NavLink to="/login">Already Have an account</NavLink>
    </div>
  );
};

export default UserSignUp;

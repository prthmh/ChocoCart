import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./UserLogin.css";

const UserLogin = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { token, userLoginFunc } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function loginHandler() {
      userLoginFunc(loginData.email, loginData.password);
    }
    loginHandler();
  }, [loginData.email, loginData.password, userLoginFunc]);

  if (token) {
    setTimeout(() => {
      navigate(location?.state?.form?.pathname || "/productlist", {
        replace: true,
      });
    }, 200);
  }
  //you have to add loader in if

  const loginWithTestCreds = () => {
    setLoginData((prevState) => ({
      ...prevState,
      email: "prathmesh@gmail.com",
      password: "prathmeshUm",
    }));
  };
  return (
    <div className="login_container">
      <div className="login_content">
        <h2>Sign in</h2>
        <hr className="price_line" /> 
        <form
          className="login_form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>Email Address</label>
          <input
            type="email"
            className="email_input"
            placeholder="xyz@gmail.com"
            value={loginData.email}
            onChange={(event) =>
              setLoginData((prevState) => ({
                ...prevState,
                email: event.target.value,
              }))
            }
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={loginData.password}
            onChange={(event) =>
              setLoginData((prevState) => ({
                ...prevState,
                password: event.target.value,
              }))
            }
          />

          <div className="login_test_creds"  onClick={loginWithTestCreds} style={{ cursor: "pointer" }}>
            Login with Test Credentials
          </div>

          <NavLink to="/signup" id="new_acc" > Create New Account </NavLink>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;

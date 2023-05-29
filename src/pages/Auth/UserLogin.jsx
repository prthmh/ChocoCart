import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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
  }, [loginData.email, loginData.password]);

  if (token) {
    setTimeout(() => {
      navigate(location?.state?.form?.pathname || "/productlist", {
        replace: true,
      });
    },200);
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
    <div>
      <h2>Sign in</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Email Address
          <input
            type="email"
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
        </label>

        <div>
          <label>
            Password
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
          </label>
        </div>

        <div onClick={loginWithTestCreds} style={{ cursor: "pointer" }}>
          Login with Test Credentials
        </div>

        <NavLink to="/signup"> Create New Account </NavLink>
      </form>
    </div>
  );
};

export default UserLogin;

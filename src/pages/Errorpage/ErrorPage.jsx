import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>404</h2>
      <p>
        The page you are looking for does not exist. Click on the button below
        to go to home page
      </p>
      <NavLink to="/">Home page</NavLink>
    </div>
  );
};

export default ErrorPage;

import { createContext, useContext, useState } from "react";
import { loginService, signUpService } from "../services/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenInLocalStorage = JSON.parse(localStorage.getItem("login"));
  const userInLocalStorage = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(tokenInLocalStorage?.token);
  const [user, setUser] = useState(userInLocalStorage?.user);

  const userLoginFunc = async (email, password) => {
    if (email !== "" && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await loginService(email, password);
        if (status === 200) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
          //write code for address management
        }
      } catch (error) {
        console.error(
          "Login unsuccessful. There was error while logging in",
          error
        );
      }
    }
  };

  const userSignUpFunc = async (email, password, firstName, lastName) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUpService(email, password, firstName, lastName);
      if (status === 201) {
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        //write code for address management
      }
    } catch (error) {
      console.log(
        "Signup unsuccessful. There was error while signing up",
        error
      );
    }
  };

  //write code for address management

  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, userLoginFunc, userSignUpFunc }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

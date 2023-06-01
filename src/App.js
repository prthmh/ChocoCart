import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import NavBar from "./components/NavBar";
import { DataContext } from "./context/DataContext";
import Loading from "./components/Loading";
import Mockman from "mockman-js";
import ErrorPage from "./pages/Errorpage/ErrorPage";
import UserLogin from "./pages/Auth/UserLogin";
import UserSignUp from "./pages/Auth/UserSignUp";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import IndividualProductPage from "./pages/IndividualProductPage/IndividualProductPage";

const App = () => {
  const { isLoading } = useContext(DataContext);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/product/:productId" element={<IndividualProductPage/>} />
            <Route path="/mockman" element={<Mockman />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignUp />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="/wishlist"
              element={
                <PrivateRoute>
                  <Wishlist />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import NavBar from "./components/NavBar";
import Mockman from "mockman-js";
import ErrorPage from "./pages/Errorpage/ErrorPage";
import UserLogin from "./pages/Auth/UserLogin";
import UserSignUp from "./pages/Auth/UserSignUp";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import IndividualProductPage from "./pages/IndividualProductPage/IndividualProductPage";
import Checkout from "./pages/Checkout/Checkout";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app">
      <>
        <NavBar />
        <ToastContainer
          limit="2"
          position="top-center"
          autoClose={800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route
            path="/product/:productId"
            element={<IndividualProductPage />}
          />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/ordersummary" element={<OrderSummary />} />
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
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
        </Routes>
      </>
    </div>
  );
};

export default App;

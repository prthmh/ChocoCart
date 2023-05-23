import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import NavBar from "./components/NavBar";
import { DataContext } from "./context/DataContext";
import Loading from "./components/Loading";
import Mockman from "mockman-js";

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
            <Route path='/mockman' element={<Mockman/>} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;

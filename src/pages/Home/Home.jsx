import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";
const Home = () => {
  const { state, dispatch } = useData();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data.categories);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);
  // console.log(categories);
  const handleCategoryWiseShop = (category) => {
    dispatch({
      type: "SET_CATEGORY_SHOP",
      payload: [...state.categoryFilter, category],
    });
  };
  return (
    <div>
      <div>
        <div className="header">
          <div className="heading">
            <h1>
              ChocoCart's Chocolate Wonderland: Order Your Favorite Flavors
              Today
            </h1>
            <NavLink to="/productlist">
              <button className="home_page_btn">Shop now</button>
            </NavLink>
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
          </div>
        </div>
        <h1 style={{ textAlign: "center" }}>Categories</h1>
        <div className="category">
          {categories.map((item) => (
            <div key={item._id} className="item">
              <h3>{item.categoryName}</h3>
              <p>{item.description}</p>
              <NavLink to="/productlist">
                <button
                  className="home_page_btn"
                  onClick={() => handleCategoryWiseShop(item.categoryName)}
                >
                  Shop now
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

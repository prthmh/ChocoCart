import React from "react";
import { useData } from "../context/DataContext";

const Filter = () => {
  const { state, dispatch } = useData();
  const handlePriceSort = (event) => {
    dispatch({ type: "PRICE_SORT", payload: event.target.value });
  };
  const handleCategory = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;

    if (isChecked) {
    dispatch({
      type: "SET_CATEGORY",
      payload: [...state.categoryFilter, value],
    });
    } else {
      const updated = state.categoryFilter?.filter((item) => item !== value);
      dispatch({ type: "SET_CATEGORY", payload: updated });
    }
    // const category = event.target.value;
    // const isAlreadyPresent = state.categoryFilter?.find(
    //   (item) => item === category
    // );

    // if (isAlreadyPresent) {
    //   const updated = state.categoryFilter?.filter((item) => item !== category);
    //   dispatch({ type: "SET_CATEGORY", payload: updated });
    // } else {
    //   dispatch({
    //     type: "SET_CATEGORY",
    //     payload: [...state.categoryFilter, category],
    //   });
    // }
  };
  const handleRating = (event) => {
    dispatch({ type: "SET_RATING", payload: event.target.value });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div className="filter">
      <div className="filter_header">
        <h3 style={{ display: "inline-block", fontWeight: "bolder" }}>
          Filters
        </h3>
        <button onClick={handleReset} className="clear_btn">
          Clear
        </button>
      </div>
      <h4>Price</h4>
      <div className="filter_items">
        <label htmlFor="lowToHigh">
          <input
            type="radio"
            id="lowToHigh"
            value="lowToHigh"
            name="price_sort"
            checked={state.priceFilter === "lowToHigh"}
            onChange={handlePriceSort}
          />
          Sort by Price (Low to High)
        </label>
        <label htmlFor="highToLow">
          <input
            type="radio"
            id="highToLow"
            value="highToLow"
            name="price_sort"
            checked={state.priceFilter === "highToLow"}
            onChange={handlePriceSort}
          />
          Sort by Price (High ot Low)
        </label>
      </div>
      <h4>Category</h4>
      <div className="filter_items">
        <label htmlFor="milk">
          <input
            type="checkbox"
            id="milk"
            value="Milk Chocolate"
            className="category_check"
            checked={state.categoryFilter?.includes("Milk Chocolate")}
            onChange={handleCategory}
          />
          Milk Chocolate
        </label>
        <label htmlFor="dark">
          <input
            type="checkbox"
            id="dark"
            value="Dark Chocolate"
            checked={state.categoryFilter?.includes("Dark Chocolate")}
            onChange={handleCategory}
          />
          Dark Chocolate
        </label>
        <label htmlFor="white">
          <input
            type="checkbox"
            id="white"
            value="White Chocolate"
            checked={state.categoryFilter?.includes("White Chocolate")}
            onChange={handleCategory}
          />
          White Chocolate
        </label>
        <label htmlFor="ruby">
          <input
            type="checkbox"
            id="ruby"
            value="Ruby Chocolate"
            checked={state.categoryFilter?.includes("Ruby Chocolate")}
            onChange={handleCategory}
          />
          Ruby Chocolate
        </label>
      </div>
      <h4>Rating</h4>
      <p>Rating: {state.ratingFilter}</p>
      <input
        type="range"
        min="1"
        max="5"
        value={state.ratingFilter}
        onChange={handleRating}
      />
    </div>
  );
};

export default Filter;

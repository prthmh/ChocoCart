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
  };
  const handleRating = (event) => {
    dispatch({ type: "SET_RATING", payload: event.target.value });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <h3>Filters</h3>
      <button onClick={handleReset}>Clear</button>
      <h4>Price</h4>
      <label htmlFor="lowToHigh">
        <input
          type="radio"
          id="lowToHigh"
          value="lowToHigh"
          name="price_sort"
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
          onChange={handlePriceSort}
        />
        Sort by Price (High ot Low)
      </label>
      <h4>Category</h4>
      <label htmlFor="milk">
        <input
          type="checkbox"
          id="milk"
          value="Milk Chocolate"
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
          checked={state.category?.includes("White Chocolate")}
          onChange={handleCategory}
        />
        White Chocolate
      </label>
      <label htmlFor="ruby">
        <input
          type="checkbox"
          id="ruby"
          value="Ruby Chocolate"
          checked={state.category?.includes("Ruby Chocolate")}
          onChange={handleCategory}
        />
        Ruby Chocolate
      </label>
      <h4>Rating</h4>
      <div>
        <p>1</p>
        <p>3</p>
        <p>5</p>
        <p>{state.ratingFilter}</p>
      </div>
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

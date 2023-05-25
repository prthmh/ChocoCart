// import React from "react";

export const initialState = {
  chocolates: [],
  searchFilter: "",
  categoryFilter: [],
  priceFilter: null,
  ratingFilter: 0,
};
const FilterReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, chocolates: action.payload };
    case "PRICE_SORT":
      return { ...state, priceFilter: action.payload };
    case "SET_CATEGORY":
      return { ...state, categoryFilter: action.payload };
    case "SET_RATING":
      return { ...state, ratingFilter: action.payload };
    case "SET_INPUT":
      return { ...state, searchFilter: action.payload };
    case "RESET":
      return {
        ...state,
        searchFilter: "",
        categoryFilter: [],
        priceFilter: null,
        ratingFilter: 0,
      };
    case "SET_CATEGORY_SHOP":
      return { ...state, categoryFilter: action.payload };
    default:
      return state;
  }
};

export default FilterReducer;

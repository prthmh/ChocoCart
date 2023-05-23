import React from "react";
import { useData } from "../../context/DataContext";
import Filter from "../../components/Filter";

const ProductList = () => {
  const { state } = useData();
  // console.log("pl",state.chocolates);
  const priceSortData = state.priceFilter
    ? state.priceFilter === "lowToHigh"
      ? state.chocolates?.sort((a, b) => a.price - b.price)
      : state.chocolates?.sort((a, b) => b.price - a.price)
    : state.chocolates;
  const categoryData = state.categoryFilter.length
    ? priceSortData.filter((item) =>
        state.categoryFilter.includes(item.categoryName)
      )
    : priceSortData;
  const ratingData = state.ratingFilter
    ? categoryData.filter((item) => item.rating >= state.ratingFilter)
    : categoryData;
  const searchData =
    state.searchFilter.length === 0
      ? ratingData
      : ratingData.filter((item) =>
          item.name.toLowerCase().includes(state.searchFilter.toLowerCase())
        );

  return (
    <div className="product_page">
      <aside>
        <Filter />
      </aside>
      <ul>
        {searchData?.map((item) => (
          <li key={item._id}>
            {item.name}---<strong>{item.categoryName}</strong>-- {item.price} --{" "}
            {item.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

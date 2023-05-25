import React from "react";
import { useData } from "../../context/DataContext";
import Filter from "../../components/Filter";
import "./ProductList.css"
import ProductItems from "../../components/ProductItems/ProductItems";

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
      <div className="products" >
        {searchData?.map((item) => (
          <ProductItems key={item.id} {...item} />
        ))}
        </div>
    </div>
  );
};

export default ProductList;

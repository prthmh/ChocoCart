import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import Filter from "../../components/Filter";
import "./ProductList.css";
import ProductItems from "../../components/ProductItems/ProductItems";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading";

const ProductList = () => {
  const { state, setLoader } = useData();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [setLoader]);

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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="product_page">
            <aside>
              <Filter />
            </aside>
            <div className="products">
              {searchData?.map((item) => (
                <ProductItems key={item.id} item={item} />
              ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductList;

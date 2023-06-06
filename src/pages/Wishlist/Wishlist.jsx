import React from "react";
import { useData } from "../../context/DataContext";
import WishlistItem from "./wishlistComponents/WishlistItem";
import "./Wishlist.css";
import Footer from "../../components/Footer/Footer";

const Wishlist = () => {
  const { state } = useData();
  const { wishlist } = state;
  // console.log(wishlist);
  return (
    <>
      <div className="wishlist_page">
        {wishlist.length === 0 ? (
          <h2>You have nothing in your wishlist</h2>
        ) : (
          <>
            <h2 style={{ margin: "0" }}>Wishlist ({wishlist?.length}) </h2>
            {wishlist?.map((item) => (
              <WishlistItem key={item._id} item={item} />
            ))}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;

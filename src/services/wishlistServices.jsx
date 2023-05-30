import axios from "axios";

export const addToWishlistFunc = async (token, dispatch, item) => {
  try {
    const {
      data: { wishlist },
    } = await axios.post(
      "/api/user/wishlist",
      { product: item },
      { headers: { authorization: token } }
    );
    dispatch({ type: "ADD_TO_WISHLIST", payload: wishlist });
    // console.log("wh", wishlist)
  } catch (error) {
    console.error("Error occured while adding item to wishlist", error);
  }
};

export const removeItemFromWishlist = async (id, token, dispatch) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    // console.log(wishlist);
    dispatch({ type: "REMOVE_ITEM_FROM_WISHLIST", payload: wishlist });
  } catch (error) {
    console.error("Error occured while removing item from wishlist", error);
  }
};

import axios from "axios";
import { toast } from "react-toastify";

export const addToWishlistFunc = async (
  token,
  dispatch,
  item,
  setWishlistBtnDisabled,
  setDisableMoveToWishlistBtn,
) => {
  setWishlistBtnDisabled && setWishlistBtnDisabled((prevState) => !prevState);
  setDisableMoveToWishlistBtn && setDisableMoveToWishlistBtn((prevState) => !prevState);
  try {
    const {
      data: { wishlist },
    } = await axios.post(
      "/api/user/wishlist",
      { product: item },
      { headers: { authorization: token } }
    );

    toast.info("Added to Wishlist!", {
      position: "top-center",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch({ type: "ADD_TO_WISHLIST", payload: wishlist });
    // console.log("wh", wishlist)
  } catch (error) {
    console.error("Error occured while adding item to wishlist", error);
  }
  setWishlistBtnDisabled && setWishlistBtnDisabled((prevState) => !prevState);
  setDisableMoveToWishlistBtn && setDisableMoveToWishlistBtn((prevState) => !prevState);
};

export const removeItemFromWishlist = async (id, token, dispatch) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    
    toast.warn('Product removed from wishlist', {
      position: "top-center",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    dispatch({ type: "REMOVE_ITEM_FROM_WISHLIST", payload: wishlist });
  } catch (error) {
    console.error("Error occured while removing item from wishlist", error);
  }
};

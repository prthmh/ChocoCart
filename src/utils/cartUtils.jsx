export const isAlreadyPresentInCart = (_id, cart) => {
  const itemFind = cart.find((item) => item._id === _id);
  return Boolean(itemFind);
};

export const isAlreadyPresentInWishlist = (_id, wishlist) => {
  const itemFind = wishlist.find((item) => item._id === _id);
  return Boolean(itemFind);
};

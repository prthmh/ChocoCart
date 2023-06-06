export const isAlreadyPresentInCart = (_id, cart) => {
  const itemFind = cart.find((item) => item._id === _id);
  return Boolean(itemFind);
};

export const isAlreadyPresentInWishlist = (_id, wishlist) => {
  const itemFind = wishlist.find((item) => item._id === _id);
  return Boolean(itemFind);
};

export const calcDiscount = (price, originalPrice) => {
  return Math.round(Math.abs((price / originalPrice) * 100 - 100));
};

export const priceAndDiscountCalcFunc = (cart) => {
  return cart.reduce(
    (acc, curr) => {
      acc.price += curr.originalPrice * curr.qty;
      acc.discount += curr.qty * (curr.originalPrice - curr.price);
      return acc;
    },
    { price: 0, discount: 0 }
  );
};

export const getTotalAmount = (price, discount) =>
  parseFloat(price - discount).toFixed(2);

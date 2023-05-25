import React from 'react'
import "./ProductItems.css"

const ProductItems = ({_id, name, brand, price, categoryName, rating, image}) => {
  return (
    <div className='list_item' >
        <img src={image} alt="img" width="150px" height="150px" />
        <div className='item_header' >
        <p><b>{name}</b></p>
        <p>{rating}</p>
        </div>
        <p>{brand}</p>
        <p>₹{price}</p>
        <button id='cart_btn' >Add to Cart</button>
    </div>
  )
}

export default ProductItems
// _id: uuid(),
//     name: "Cadbury Bournville Rich Cocoa 70% Dark Chocolate Bar",
//     brand: "Cadbury",
//     price: "91",
//     categoryName: "Dark Chocolate",
//     rating: 3,
//     image: "https://m.media-amazon.com/images/I/61UHYRZQrZL._SL1500_.jpg",
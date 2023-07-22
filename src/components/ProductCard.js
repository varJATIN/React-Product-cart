//import React, { useState, useEffect } from "react";
function ProductCard({ product, addToCart, removeFromCart }) {
  return (
    <div className="productCard">
      <p className="name">{product.name}</p>
      <img className="productImg" src={product.image} />
      <span className="priceAndAdd">
        <p className="name">Rs.{product.price}</p>
        <button className="addButton" onClick={(e) => addToCart(product)}>
          Add to Cart
        </button>
        <button className="addButton" onClick={(e) => removeFromCart(product)}>
          Remove
        </button>
      </span>
    </div>
  );
}
export default ProductCard;

import Products from "./Products";
import React, { useState } from "react";

function Home({ products, addToCart, removeFromCart }) {
  return (
    <div>
      <h5 className="heading">Home page</h5>
      <Products
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default Home;

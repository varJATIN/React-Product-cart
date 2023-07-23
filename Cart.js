import { useState, useEffect, useContext } from "react";

import { CartContext } from "../Context";
import ProductCard from "./ProductCard";

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  let [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(cart.reduce((acc, a) => acc + Number(a.price), 0));
  }, [cart]);
  return (
    <div>
      <h5 className="heading">Cart page: Total Price {totalPrice}</h5>
      <div className="productContainer">
        {cart.map((product) => (
          <ProductCard
            key={product.uuid}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;

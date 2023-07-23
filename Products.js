import { useContext } from "react";
import { CartContext } from "../Context";
import ProductCard from "./ProductCard";

function Products({ products }) {
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className="productContainer">
      {products.map((product) => (
        <ProductCard
          key={product.uuid}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default Products;

import ProductCard from "./ProductCard";

function Products({ products, addToCart, removeFromCart }) {
  // console.log(products);
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

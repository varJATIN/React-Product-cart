import Products from "./Products";

function Home({ products }) {
  return (
    <div>
      <h5 className="heading">Home page</h5>
      <Products products={products} />
    </div>
  );
}

export default Home;

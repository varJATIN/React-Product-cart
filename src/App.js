import "./App.css";
import Home from "./components/Home";
import React, { useState } from "react";

import Cart from "./components/Cart";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { faker } from "@faker-js/faker";
faker.seed(200);

function App() {
  const productsArr = [...Array(9)].map((prod) => {
    return {
      uuid: faker.string.uuid(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    };
  });
  const [products] = useState(productsArr);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };
  const removeFromCart = (product) => {
    if (cart.includes(product)) {
      setCart(cart.filter((cartProd) => cartProd.uuid !== product.uuid));
    }
  };
  return (
    <BrowserRouter>
      <Header numberOfItems={cart.length} />
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                products={products}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/cart"
            exact
            element={
              <Cart
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

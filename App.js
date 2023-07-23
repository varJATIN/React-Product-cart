import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { faker } from "@faker-js/faker";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { CartContext } from "./Context";
import "./App.css";
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
  const { cart } = useContext(CartContext);
  return (
    <BrowserRouter>
      <Header numberOfItems={cart.length} />
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home products={products} />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

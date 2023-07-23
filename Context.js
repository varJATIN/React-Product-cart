import { createContext, useState } from "react";

export const CartContext = createContext();
function Context({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (product) => {
    if (cart.includes(product)) {
      setCart(cart.filter((cartProd) => cartProd.uuid !== product.uuid));
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default Context;

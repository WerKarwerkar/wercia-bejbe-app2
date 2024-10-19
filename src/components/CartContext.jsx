import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, cartSetProducts] = useState([]);

  const clearCart = () => {
    cartSetProducts([]);
  };

  return (
    <CartContext.Provider
      value={{ products, setProducts, cart, cartSetProducts, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

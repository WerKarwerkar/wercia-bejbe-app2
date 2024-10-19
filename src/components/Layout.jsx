import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CartProvider } from "./CartContext";

function Layout() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default Layout;

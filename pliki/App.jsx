import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

import Layout from "./components/Layout";

import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout-success" element={<CheckoutSuccessPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;

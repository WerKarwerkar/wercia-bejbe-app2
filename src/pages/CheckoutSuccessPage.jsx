import React, { useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import {
  SuccessTitle,
  SuccessText,
  SuccessLink,
  SuccessContainer,
} from "../components/CheckoutStyles";

function CheckoutSuccessPage() {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <SuccessContainer>
      <SuccessTitle>Order Successful! 🎉</SuccessTitle>
      <SuccessText>Your order has been placed successfully.</SuccessText>
      <SuccessLink to="/">Go back to the store</SuccessLink>
    </SuccessContainer>
  );
}

export default CheckoutSuccessPage;

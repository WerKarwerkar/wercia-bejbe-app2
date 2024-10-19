import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  CartContainer,
  StyledCartIcon,
  CartCount,
} from "../components/CartIconStyles";

function CartIcon({ itemCount }) {
  const navigate = useNavigate();
  function handleCartClick() {
    navigate("/cart");
  }

  return (
    <CartContainer onClick={handleCartClick}>
      <StyledCartIcon icon={faCartShopping} size="2x" />
      {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
    </CartContainer>
  );
}

export default CartIcon;

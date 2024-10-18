import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CartContainer = styled.div`
  position: fixed;
  top: 40px;
  right: 20px;
  display: flex;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
`;

const StyledCartIcon = styled(FontAwesomeIcon)`
  color: #6da29f;
  margin-right: 10px;
  margin-left: 20px;
`;

const CartCount = styled.span`
  color: #6da29f;
  font-weight: bold;
  font-size: 16px;
`;

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

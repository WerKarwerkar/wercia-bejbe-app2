import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import {
  HeaderContainer,
  LogoContainer,
  NavList,
  NavItem,
  CartContainer,
} from "./HeaderStyles";
import { CartContext } from "./CartContext";

function Header() {
  const { cart } = useContext(CartContext);
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img src="/images/Logo.png" alt="Logo" />
        </Link>
      </LogoContainer>

      <NavList>
        <NavItem>
          <Link to="/">HOME</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">CONTACT</Link>
        </NavItem>
      </NavList>

      <CartContainer>
        <CartIcon itemCount={cart?.length} />
      </CartContainer>
    </HeaderContainer>
  );
}

export default Header;

import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import {
  CartContainer,
  CartName,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  OriginalPrice,
  DiscountedPrice,
  Sum,
  CheckoutButton,
  EmptyCart,
} from "../components/CartPageStyles";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalSum = cart.reduce(
    (total, product) =>
      total +
      (product.discountedPrice ? product.discountedPrice : product.price),
    0
  );

  const handleCheckout = () => {
    navigate("/checkout-success");
  };

  return (
    <CartContainer>
      <CartName>Your Cart</CartName>
      {cart.length > 0 ? (
        <>
          {cart.map((product, index) => (
            <CartItem key={index}>
              <ProductImage src={product.image.url} alt={product.title} />
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                {product.discountedPrice &&
                product.discountedPrice !== product.price ? (
                  <>
                    <OriginalPrice>{product.price} USD</OriginalPrice>
                    <DiscountedPrice>
                      {product.discountedPrice} USD
                    </DiscountedPrice>
                  </>
                ) : (
                  <ProductPrice>{product.price} USD</ProductPrice>
                )}
              </ProductInfo>
            </CartItem>
          ))}

          <Sum>Total Sum: {totalSum.toFixed(2)} USD</Sum>
          <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </>
      ) : (
        <EmptyCart>Your cart is empty 🙁</EmptyCart>
      )}
    </CartContainer>
  );
}

export default CartPage;

import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 100px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const CartName = styled.h1`
  color: #6da29f;
  font-size: 24px;
  text-align: center;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #6da29f;
  padding-bottom: 10px;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #6da29f;
`;

export const ProductPrice = styled.p`
  margin: 5px 0 0;
  color: #6da29f;
`;

export const OriginalPrice = styled.p`
  text-decoration: line-through;
  color: #999;
`;

export const DiscountedPrice = styled.p`
  color: #ef6363;
  font-weight: bold;
`;

export const Sum = styled.h2`
  text-align: center;
  margin-top: 20px;
  color: #999;
`;

export const CheckoutButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #6da29f;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin: auto;
  display: block;

  &:hover {
    background-color: #f7f8ef;
    border: 2px solid #6da29f;
    color: #6da29f;
  }
`;

export const EmptyCart = styled.p`
  text-align: center;
  font-size: 18px;
  color: #999;
`;

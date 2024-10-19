import styled from "styled-components";
import { Link } from "react-router-dom";

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6da29f;
  font-size: 16px;
  font-weight: bold;
`;
export const ProductTitle = styled.h1`
  color: #6da29f;
  text-align: center;
  @media (max-width: 800px) {
    margin-top: 100px;
  }
`;
export const ProductsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 50px;
  list-style: none;
`;

export const ProductCard = styled.li`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  background-color: #f6f6f3;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const ProductName = styled.h2`
  font-size: 20px;
  color: #6da29f;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ProductPrice = styled.div`
  color: #6da29f;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #6da29f;
  margin-right: 10px;
`;

export const DiscountedPrice = styled.span`
  color: #ef6363;
  font-weight: bold;
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: #6da29f;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 60vh;
  width: 100%;
  margin-bottom: 50px;
  box-sizing: border-box;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ProductTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #6da29f;
  @media (max-width: 800px) {
    margin-top: 100px;
  }
`;

export const ImageAndDetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 350px;
  border-radius: 10px;
  @media (max-width: 800px) {
    height: 250px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #6da29f;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #474845;
  margin-bottom: 10px;
`;

export const DiscountedPrice = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #ef6363;
  margin-bottom: 40px;
`;

export const CardButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #6da29f;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  max-width: 150px;
  margin: 0 auto;

  &:hover {
    background-color: #f7f8ef;
    border: 2px solid #6da29f;
    color: #6da29f;
  }
`;

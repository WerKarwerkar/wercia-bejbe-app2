import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #6da29f;
  font-size: 16px;
  font-weight: bold;
`;
export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  margin-top: 50px;

  @media (max-width: 800px) {
    margin-top: 100px;
  }
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
  padding: 20px;
  background-color: #f6f6f3;
  margin-bottom: 100px;
`;

export const ProductTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #6da29f;
`;

export const ImageAndDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 4px;
  margin: 0 auto;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #6da29f;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #999;
  margin-bottom: 10px;
`;

export const OriginalPrice = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #999;
  margin-bottom: 10px;
  text-decoration: line-through;
`;

export const DiscountedPrice = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #ef6363;
  margin-bottom: 10px;
`;

export const DiscountText = styled.p`
  font-size: 16px;
  color: #6da29f;
  margin-bottom: 20px;
`;

export const Reviews = styled.div`
  background-color: #f7f8ef;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-size: 14px;
  color: #6da29f;

  h2 {
    color: #999;
    margin-bottom: 10px;
  }

  div {
    margin-bottom: 15px;
    p {
      margin: 5px 0;
    }
  }
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
  margin-top: 20px;
  max-width: 150px;
  align-self: center;

  &:hover {
    background-color: #f7f8ef;
    border: 2px solid #6da29f;
    color: #6da29f;
  }
`;

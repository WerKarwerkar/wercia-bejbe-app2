import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 50%;
  margin: 100px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  text-align: center;
  min-height: 40vh;
`;

export const SuccessTitle = styled.h1`
  color: #6da29f;
  font-size: 24px;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const SuccessText = styled.p`
  color: #6da29f;
  font-size: 18px;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const SuccessLink = styled(Link)`
  color: #6da29f;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

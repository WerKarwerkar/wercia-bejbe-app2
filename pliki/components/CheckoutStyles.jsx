import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuccessContainer = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 100px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  text-align: center;
`;

export const SuccessTitle = styled.h1`
  color: #6da29f;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SuccessText = styled.p`
  color: #6da29f;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SuccessLink = styled(Link)`
  color: #6da29f;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

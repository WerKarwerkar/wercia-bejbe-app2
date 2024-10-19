import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartContainer = styled.div`
  position: fixed;
  top: 40px;
  right: 20px;
  display: flex;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
`;

export const StyledCartIcon = styled(FontAwesomeIcon)`
  color: #6da29f;
  margin-right: 10px;
  margin-left: 20px;
`;

export const CartCount = styled.span`
  color: #6da29f;
  font-weight: bold;
  font-size: 16px;
`;

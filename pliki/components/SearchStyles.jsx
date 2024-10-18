import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchBarWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: 2px solid #6da29f;
  border-radius: 8px;
  padding: 10px;
  width: 50%;
  font-size: 16px;
  outline: none;
  background-color: white;

  &::placeholder {
    color: #6da29f;
    opacity: 0.7;
    font-size: 12px;
  }
`;

export const SuggestionsList = styled.ul`
  border: 1px solid #6da29f;
  border-radius: 8px;
  margin-top: 10px;
  width: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  list-style: none;
  padding: 0;
`;

export const SuggestionItem = styled.li`
  padding: 10px;
  font-size: 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6da29f;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

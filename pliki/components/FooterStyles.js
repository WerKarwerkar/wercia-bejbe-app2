import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #6da29f;
  color: white;
`;

export const FooterList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  padding: 0;
  margin: 0;
`;

export const FooterItem = styled.li`
  font-size: 16px;

  span {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    white-space: nowrap;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NestedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  // white-space: nowrap;

  li {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

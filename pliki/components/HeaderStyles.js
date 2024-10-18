import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  width: 90%;
  gap: 50px;
  height: 100px;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 10px;
    gap: 0px;
  }
`;

export const LogoContainer = styled.div`
  img {
    height: 120px;
    padding-left: 20px;
    @media (max-width: 800px) {
      height: 80px;
    }
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 100px;

  @media (max-width: 800px) {
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  font-size: 18px;

  a {
    color: #6da29f;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CartContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
`;

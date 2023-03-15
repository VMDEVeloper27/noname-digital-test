import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 10px 0;
  & > nav {
    display: flex;
  }
`;
export const Footer = styled.footer`
  padding: 10px 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  &.active {
    color: black;
  }
`;

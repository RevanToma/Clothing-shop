import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  @media (max-width: 610px) {
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
  }
`;
export const LogoContainer = styled(Link)`
  border: 1px solid #c0c3c3;
  border-radius: 50%;
  padding: 10px;
  transition: border 0.3s;

  &:hover {
    border: 1px solid #626767;
  }
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  border-radius: 10px;
  margin: 0;
  transition: border 0.3s;

  &:hover {
    border: 1px solid #626767;
  }
`;
export const EmailContainer = styled(Link)`
  margin: 10px;
  user-select: none;
`;

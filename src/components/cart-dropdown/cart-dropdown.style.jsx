import styled from "styled-components";
import {
  BaseButton,
  GooogleSingInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  ${(props) => (props.position === "top" ? "top: 70px" : "bottom: 180px")};

  right: 40px;
  z-index: 5;
  @media (max-width: 610px) {
    top: 125px;
  }
  ${BaseButton},
  ${GooogleSingInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CartEmptyMsg = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

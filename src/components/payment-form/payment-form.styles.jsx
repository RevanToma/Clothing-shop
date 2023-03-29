import styled from "styled-components";
import Button from "../button/button.component";
export const PaymentFormContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 5px 5px #eeeeee;
  padding: 2rem;

  img {
    width: 150px;
  }
  span {
    color: #bbb;
    font-family: Poppins;
  }
  @media (max-width: 610px) {
    width: 100%;
  }
`;
export const FormContainer = styled.form`
  height: 100%;
  min-width: 500px;
  @media (max-width: 610px) {
    min-width: 100%;
  }
`;
export const PaymentButton = styled(Button)`
  width: 100%;
  margin-left: auto;
  margin-top: 30px;
`;

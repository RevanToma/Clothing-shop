import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckOutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const CheckOutImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckOutDetailsWidth = styled.span`
  width: 23%;
  margin-left: auto;
`;
export const CheckOutArrows = styled.div`
  cursor: pointer;
`;

export const CheckOutQuant = styled.span`
  display: flex;
`;
export const CheckOutValue = styled.span`
  margin: 0 10px;
  margin-left: 10px;
`;

export const RemoveCheckOutItemBtn = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

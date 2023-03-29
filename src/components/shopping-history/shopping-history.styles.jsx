import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 2rem;
  }
`;
export const ShoppingHistoryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const ShoppingHistoryImgContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const ShoppingHistoryImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ShoppingHistoryDetails = styled.span`
  width: 23%;
  margin-left: auto;
`;

export const ShoppingHistoryQuant = styled.span`
  display: flex;
`;
export const ShoppingHistoryValue = styled.span`
  margin: 0 10px;
  margin-left: 10px;
`;

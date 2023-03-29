import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserCartITems } from "../../store/user/user.selector";
import { getShoppingHistory } from "../../store/user/user.reducer";
import * as S from "./shopping-history.styles";
const ShoppingHistory = () => {
  const dispatch = useDispatch();
  const userShoppingHistory = useSelector(selectCurrentUserCartITems);

  useEffect(() => {
    dispatch(getShoppingHistory());
  }, [dispatch]);

  return (
    <S.HistoryContainer>
      <h1>Shopping History</h1>
      {userShoppingHistory && userShoppingHistory.length > 0 ? (
        userShoppingHistory.map((cartItem) => (
          <S.ShoppingHistoryContainer key={cartItem.id}>
            <S.ShoppingHistoryImgContainer>
              <S.ShoppingHistoryImg
                src={cartItem.imageUrl}
                alt={`${cartItem.name}`}
              />
            </S.ShoppingHistoryImgContainer>
            <S.ShoppingHistoryDetails>{cartItem.name}</S.ShoppingHistoryDetails>
            <S.ShoppingHistoryDetails>
              ${cartItem.price}
            </S.ShoppingHistoryDetails>
            <S.ShoppingHistoryValue>
              {cartItem.quantity}x
            </S.ShoppingHistoryValue>
          </S.ShoppingHistoryContainer>
        ))
      ) : (
        <p>
          You have no shopping history, you can login to have your shopping
          history saved. Otherwise it will only show your latest purchase.
        </p>
      )}
    </S.HistoryContainer>
  );
};

export default ShoppingHistory;

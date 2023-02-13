import {
  CheckOutItemContainer,
  CheckOutImageContainer,
  CheckOutImage,
  CheckOutDetailsWidth,
  CheckOutArrows,
  CheckOutQuant,
  CheckOutValue,
  RemoveCheckOutItemBtn,
} from "./checkout-item.style";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItmes = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItmes, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItmes, cartItem));

  const removeCartItemHandler = () =>
    dispatch(removeItemFromCart(cartItmes, cartItem));

  return (
    <CheckOutItemContainer>
      <CheckOutImageContainer>
        <CheckOutImage src={imageUrl} alt={`${name}`} />
      </CheckOutImageContainer>
      <CheckOutDetailsWidth>{name}</CheckOutDetailsWidth>
      <CheckOutQuant>
        <CheckOutArrows onClick={removeCartItemHandler}>
          &#10094;
        </CheckOutArrows>
        <CheckOutValue>{quantity}</CheckOutValue>
        <CheckOutArrows onClick={addItemHandler}>&#10095;</CheckOutArrows>
      </CheckOutQuant>
      <CheckOutDetailsWidth>${price}</CheckOutDetailsWidth>
      <RemoveCheckOutItemBtn onClick={clearItemHandler}>
        &#10005;
      </RemoveCheckOutItemBtn>
    </CheckOutItemContainer>
  );
};

export default CheckoutItem;

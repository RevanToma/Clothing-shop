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

import { useDispatch } from "react-redux";

import {
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
} from "../../store/cart/cart.reducer";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItem));

  const removeCartItemHandler = () => dispatch(removeItemFromCart(cartItem));

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

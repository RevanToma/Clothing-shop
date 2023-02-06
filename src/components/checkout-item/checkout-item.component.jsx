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

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeCartItem } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeCartItemHandler = () => removeCartItem(cartItem);
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

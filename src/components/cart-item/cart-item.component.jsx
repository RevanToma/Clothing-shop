import {
  CartItemContainer,
  CartItemDetails,
  CartItemImage,
  CartItemName,
} from "./cart-item.style";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>${name}</CartItemName>
        <CartItemName className="price">
          {quantity} x ${price}
        </CartItemName>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

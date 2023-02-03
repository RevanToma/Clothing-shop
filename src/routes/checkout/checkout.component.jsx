import "./checkout.style.scss";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeCartItem } = useContext(CartContext);

  console.log(cartItems);
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity, imageUrl, price } = cartItem;
          return (
            <div key={id}>
              <img src={imageUrl} alt={`${name}`} />
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeCartItem(cartItem)}>Decrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>Increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;

{
  /* <span>{price}</span>
 <img src={imageUrl} alt={`${name}`} /> */
}
